import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { LANGS as APP_LANGS } from './app/i18n';
import { ALL_ARTICLES } from './app/content/registry';

const browserDistFolder = join(import.meta.dirname, '../browser');

/**
 * Toutes les URL réellement publiées.
 *
 * Sans cette liste, le routeur Angular renvoyait la page d'accueil avec un
 * statut 200 pour n'importe quelle adresse inventée. C'est un « soft 404 » :
 * Google indexe des URL fantômes, les signale en masse dans la Search Console
 * et dépense du budget de crawl à recharger la même page d'accueil.
 */
const VALID_ROUTES = new Set<string>(
  APP_LANGS.flatMap((l) => [`/${l}`, `/${l}/guides`, `/${l}/a-propos`, `/${l}/api`])
    .concat(['/fr/generateur-facture', '/ar/generateur-facture'])
    .concat(
    ALL_ARTICLES.map((a) => `/${a.lang}/${a.section}/${a.slug}`),
  ),
);

const notFoundPage = (lang: string) => {
  const t =
    {
      ar: { title: 'الصفحة ما كايناش', lead: 'الرابط اللي طلبتي ما كاينش ولا تبدل.', home: 'الرئيسية', guides: 'الأدلة' },
      en: { title: 'Page not found', lead: 'The address you requested does not exist, or has changed.', home: 'Home', guides: 'Guides' },
      es: { title: 'Página no encontrada', lead: 'La dirección solicitada no existe o ha cambiado.', home: 'Inicio', guides: 'Guías' },
      fr: { title: 'Page introuvable', lead: 'L’adresse demandée n’existe pas, ou a changé.', home: 'Accueil', guides: 'Guides' },
    }[lang] ?? { title: 'Page introuvable', lead: 'L’adresse demandée n’existe pas, ou a changé.', home: 'Accueil', guides: 'Guides' };
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  return `<!doctype html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,follow"><title>404 — ${t.title} · Fatora-Bot</title>
<link rel="icon" type="image/svg+xml" href="/logo.svg">
<style>body{font-family:system-ui,'Segoe UI',sans-serif;background:#f7f8fb;color:#10131c;
display:grid;place-items:center;min-height:100vh;margin:0;padding:24px;text-align:center}
.c{max-width:520px}.m{width:56px;height:56px;display:block;margin:0 auto 22px}
h1{font-size:1.7rem;margin:0 0 12px;letter-spacing:-.02em}
p{color:#5b6272;line-height:1.7;margin:0 0 26px}
a{display:inline-block;margin:0 6px;padding:12px 24px;border-radius:999px;font-weight:700;
text-decoration:none;color:#17120a;background:linear-gradient(135deg,#e8b64c,#c9902a)}
a.g{background:#fff;color:#10131c;border:1px solid rgba(16,19,28,.14)}</style></head>
<body><div class="c"><img class="m" src="/logo.svg" alt=""><h1>${t.title}</h1><p>${t.lead}</p>
<a href="/${lang}">${t.home}</a><a class="g" href="/${lang}/guides">${t.guides}</a></div></body></html>`;
};

const app = express();
// Hôtes autorisés (protection SSRF d'Angular SSR)
const angularApp = new AngularNodeAppEngine({
  allowedHosts: ['fatora.swiviq.com', 'localhost', '127.0.0.1'],
});

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Racine : redirection côté serveur vers la langue du visiteur (fr par défaut).
 * Évite la redirection JavaScript, mauvaise pour l'indexation.
 */
const LANGS = ['fr', 'ar', 'en', 'es'] as const;
app.get('/', (req, res) => {
  const header = String(req.headers['accept-language'] || '').toLowerCase();
  const match = header
    .split(',')
    .map((part) => part.split(';')[0].trim().slice(0, 2))
    .find((code) => (LANGS as readonly string[]).includes(code));
  res.set('Vary', 'Accept-Language');
  // 301 et non 302 : la racine ne redirigera jamais ailleurs que vers une
  // langue. Une redirection temporaire fait porter l'indexation sur `/`
  // au lieu de la transmettre à la page de destination.
  res.redirect(301, `/${match || 'fr'}`);
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
    setHeaders(res, filePath) {
      // Les fichiers destinés aux robots changent à chaque publication et ne
      // portent pas de hash dans leur nom : un cache d'un an y ferait servir
      // un sitemap périmé longtemps après une mise en ligne.
      if (/[\\/](robots\.txt|sitemap\.xml|llms\.txt|llms-full\.txt)$/.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=3600');
      }
    },
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 *
 * Le HTML sortait sans en-tête de cache : chaque visite et chaque passage de
 * robot repartaient du serveur. `stale-while-revalidate` laisse servir la
 * version en cache pendant la revalidation — le temps de réponse perçu compte
 * dans le LCP, et le budget de crawl s'en ressent aussi.
 */
/**
 * Vrai 404 pour tout ce qui n'est ni un fichier statique (déjà servi plus haut)
 * ni une route publiée. Placé avant le moteur Angular, dont la route « ** »
 * redirige vers l'accueil et répondrait donc 200.
 */
app.use((req, res, next) => {
  const path = req.path.replace(/\/+$/, '') || '/';
  if (path === '/' || VALID_ROUTES.has(path)) return next();
  const seg = path.split('/')[1] ?? '';
  const lang = (APP_LANGS as readonly string[]).includes(seg) ? seg : 'fr';
  res.status(404).set('Cache-Control', 'public, max-age=300').type('html').send(notFoundPage(lang));
});

app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (!response) return next();
      if (!res.headersSent && !res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=86400');
      }
      return writeResponseToNodeResponse(response, res);
    })
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
