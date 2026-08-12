import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

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
