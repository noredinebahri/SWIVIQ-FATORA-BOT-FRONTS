/**
 * Génère sitemap.xml, llms.txt et llms-full.txt à partir des pages réellement
 * pré-rendues.
 *
 * Le principe : ne rien écrire à la main. Un sitemap maintenu manuellement
 * finit toujours par référencer une URL supprimée ou par oublier une page
 * ajoutée — et les deux coûtent du budget de crawl. Ici, la source de vérité
 * est `dist/.../prerendered-routes.json`, donc le sitemap ne peut pas mentir.
 *
 * Usage : node scripts/seo-assets.js   (lancé automatiquement par `npm run build`)
 */
const fs = require('node:fs');
const path = require('node:path');

const SITE = 'https://fatora.swiviq.com';
const DIST = path.join(__dirname, '..', 'dist', 'factora-bot-front');
const BROWSER = path.join(DIST, 'browser');
const PUBLIC = path.join(__dirname, '..', 'public');
const LANGS = ['fr', 'ar', 'en', 'es'];
const TODAY = new Date().toISOString().slice(0, 10);

// ── Lecture des routes pré-rendues ───────────────────────────────────────────
const manifest = path.join(DIST, 'prerendered-routes.json');
if (!fs.existsSync(manifest)) {
  console.error('seo-assets: lancez `ng build` avant — prerendered-routes.json introuvable.');
  process.exit(1);
}
const routes = Object.keys(JSON.parse(fs.readFileSync(manifest, 'utf8')).routes).sort();

// ── Extraction des métadonnées depuis le HTML généré ─────────────────────────
const strip = (html) =>
  html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

const xmlEscape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function readPage(route) {
  const file = path.join(BROWSER, route.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(file)) return null;
  const html = fs.readFileSync(file, 'utf8');

  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '';
  const desc =
    (html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1] || '';
  const alternates = [...html.matchAll(/<link\s+rel="alternate"\s+href="([^"]+)"\s+hreflang="([^"]+)"/gi)]
    .map((m) => ({ url: m[1], lang: m[2] }))
    .filter((a) => a.lang !== 'x-default');
  const lang = (html.match(/<html[^>]*\slang="([^"]+)"/i) || [])[1] || 'fr';

  return { route, url: SITE + route, title: strip(title), desc: strip(desc), alternates, lang, html };
}

const pages = routes.map(readPage).filter(Boolean);
const isArticle = (p) => /^\/[a-z]{2}\/(guides|secteurs|comparatif)\/./.test(p.route);
const isHome = (p) => /^\/[a-z]{2}$/.test(p.route);

// ── Garde-fou : aucun lien interne ne doit pointer vers une page inexistante ──
// Un slug renommé dans `content/` mais oublié dans `links.ts` produirait une
// redirection silencieuse vers le hub — donc un lien qui ne transmet rien et
// une page orpheline. Autant que le build s'arrête.
{
  const known = new Set(routes);
  const broken = [];
  for (const p of pages) {
    for (const m of p.html.matchAll(/href="(\/[^"#?]*)"/g)) {
      const target = m[1].replace(/\/$/, '') || '/';
      if (target === '/' || known.has(target)) continue;
      if (fs.existsSync(path.join(BROWSER, target.replace(/^\//, '')))) continue; // fichier statique
      broken.push(`${p.route} → ${target}`);
    }
  }
  if (broken.length) {
    console.error('seo-assets : liens internes cassés —\n  ' + [...new Set(broken)].join('\n  '));
    process.exit(1);
  }
}

// ── sitemap.xml ──────────────────────────────────────────────────────────────
function priority(p) {
  if (isHome(p)) return p.route === '/fr' || p.route === '/ar' ? '1.0' : '0.9';
  if (p.route.endsWith('/guides')) return '0.8';
  if (isArticle(p)) return '0.7';
  return '0.5';
}

const urls = pages
  .map((p) => {
    const alts = p.alternates
      .map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${xmlEscape(a.url)}"/>`)
      .join('');
    const xdef = p.alternates.find((a) => a.lang === 'fr') || p.alternates[0];
    const xdefTag = xdef
      ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(xdef.url)}"/>`
      : '';
    const image = isHome(p)
      ? `\n    <image:image>\n      <image:loc>${SITE}/og-${p.lang}.png</image:loc>\n      <image:title>${xmlEscape(p.title)}</image:title>\n    </image:image>`
      : '';
    return `  <url>
    <loc>${xmlEscape(p.url)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${isHome(p) ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority(p)}</priority>${alts}${xdefTag}${image}
  </url>`;
  })
  .join('\n\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Généré par scripts/seo-assets.js — ne pas éditer à la main -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

${urls}

</urlset>
`;

// ── llms-full.txt : le texte intégral, en clair, pour les moteurs génératifs ──
function toPlainText(html) {
  const main = (html.match(/<main[\s\S]*?<\/main>/i) || [])[0] || html;
  return main
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<aside[^>]*class="[^"]*cta[^"]*"[\s\S]*?<\/aside>/gi, '')
    .replace(/<section[^>]*class="[^"]*related[^"]*"[\s\S]*?<\/section>/gi, '')
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n# ${strip(t)}\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n## ${strip(t)}\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n### ${strip(t)}\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `\n- ${strip(t)}`)
    .replace(/<th[^>]*>([\s\S]*?)<\/th>/gi, (_, t) => ` | ${strip(t)}`)
    .replace(/<td[^>]*>([\s\S]*?)<\/td>/gi, (_, t) => ` | ${strip(t)}`)
    .replace(/<\/tr>/gi, '\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => `\n${strip(t)}\n`)
    .replace(/<[^>]+>/g, ' ')
    .split('\n')
    .map((l) => l.replace(/[ \t]+/g, ' ').trim())
    .filter((l, i, arr) => l || (arr[i - 1] || '').length)
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const editorial = pages.filter((p) => isArticle(p) || p.route.endsWith('/a-propos'));
const llmsFull = `# Fatora-Bot — contenu intégral

> Facturation vocale par WhatsApp pour les entreprises marocaines, éditée par Swiviq (Rabat).
> Ce fichier reprend le texte complet des guides publiés sur ${SITE}, pour permettre
> aux moteurs de recherche génératifs de citer des passages exacts plutôt que de résumer
> une page partiellement chargée.
>
> Licence d'usage : citation autorisée avec mention de la source et lien vers la page d'origine.
> Dernière génération : ${TODAY}
> Contact : contact@swiviq.com

${editorial
  .map((p) => `\n\n---\n\nURL : ${p.url}\nLangue : ${p.lang}\nTitre : ${p.title}\n\n${toPlainText(p.html)}`)
  .join('')}
`;

// ── llms.txt : la carte du site, mise à jour avec les guides ─────────────────
const llmsPath = path.join(PUBLIC, 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');
const guideLines = editorial
  .filter((p) => isArticle(p))
  .map((p) => `- ${p.title} : ${p.url}`)
  .join('\n');
const GUIDES_BLOCK = `## Guides publiés

Contenu intégral de ces pages : ${SITE}/llms-full.txt

${guideLines}
`;
// On remplace le bloc s'il existe déjà, sinon on l'insère avant « ## Liens ».
if (llms.includes('## Guides publiés')) {
  llms = llms.replace(/## Guides publiés[\s\S]*?(?=\n## )/, GUIDES_BLOCK + '\n');
} else {
  llms = llms.replace(/\n## Liens/, `\n${GUIDES_BLOCK}\n## Liens`);
}

// ── Écriture : dist (ce qui est déployé) et public (ce qui est versionné) ────
for (const dir of [BROWSER, PUBLIC]) {
  fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemap, 'utf8');
  fs.writeFileSync(path.join(dir, 'llms-full.txt'), llmsFull, 'utf8');
  fs.writeFileSync(path.join(dir, 'llms.txt'), llms, 'utf8');
}

console.log(`seo-assets : ${pages.length} URL au sitemap, ${editorial.length} pages dans llms-full.txt`);
console.log(`             langues : ${LANGS.join(', ')} — llms-full.txt : ${Math.round(llmsFull.length / 1024)} Ko`);
