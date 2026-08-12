/**
 * Télécharge les polices depuis Google Fonts et génère public/fonts/fonts.css.
 *
 * Pourquoi : la feuille de style de fonts.googleapis.com est une ressource
 * bloquante servie par un tiers. Le navigateur doit résoudre le DNS, ouvrir une
 * connexion TLS, lire le CSS, puis seulement découvrir l'URL des fichiers .woff2
 * sur un second domaine. Deux allers-retours réseau avant le premier caractère
 * affiché — sur un mobile en 3G marocaine, c'est le poste principal du LCP.
 *
 * Auto-hébergées, les polices partent du même domaine, en cache un an, et
 * peuvent être préchargées dès le <head>.
 *
 * Usage : node scripts/fonts.js   (à relancer seulement si on change de police)
 */
const https = require('node:https');
const fs = require('node:fs');
const path = require('node:path');

// Les .woff2 sont servis depuis /fonts ; les @font-face partent dans le bundle
// CSS pour éviter une requête bloquante supplémentaire au chargement.
const OUT = path.join(__dirname, '..', 'public', 'fonts');
const SCSS = path.join(__dirname, '..', 'src', 'styles', '_fonts.scss');
// UA moderne : sans lui, Google renvoie du .ttf au lieu du .woff2 (3× plus lourd).
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

// `latin-ext` est volontairement exclu : il couvre l'Europe centrale et
// orientale (ł, ř, ő…), absentes du site. Tous les caractères accentués du
// français et de l'espagnol sont dans `latin`. À lui seul, latin-ext d'Inter
// pesait 249 Ko pour zéro caractère réellement affiché.
const FAMILIES = [
  { css: 'Sora:wght@400;600;700;800', keep: ['latin'] },
  { css: 'Inter:wght@400;600;700', keep: ['latin'] },
  { css: 'Tajawal:wght@400;500;700;800', keep: ['latin', 'arabic'] }
];

const get = (url, binary = false) =>
  new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': UA } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location, binary).then(resolve, reject);
        }
        if (res.statusCode !== 200) return reject(new Error(`${res.statusCode} sur ${url}`));
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(binary ? Buffer.concat(chunks) : Buffer.concat(chunks).toString('utf8')));
      })
      .on('error', reject);
  });

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  let css = `/* Polices auto-hébergées — généré par scripts/fonts.js, ne pas éditer à la main. */\n`;
  let files = 0;

  for (const fam of FAMILIES) {
    const raw = await get(`https://fonts.googleapis.com/css2?family=${fam.css}&display=swap`);

    // Google précède chaque bloc @font-face d'un commentaire nommant le sous-ensemble.
    const blocks = raw.split('/*').slice(1);
    for (const block of blocks) {
      const subset = block.slice(0, block.indexOf('*/')).trim();
      if (!fam.keep.includes(subset)) continue;

      const face = block.slice(block.indexOf('*/') + 2);
      const url = (face.match(/url\((https:[^)]+\.woff2)\)/) || [])[1];
      const family = (face.match(/font-family:\s*'([^']+)'/) || [])[1];
      const weight = (face.match(/font-weight:\s*(\d+)/) || [])[1] || '400';
      const range = (face.match(/unicode-range:\s*([^;]+);/) || [])[1];
      if (!url || !family) continue;

      const name = `${family.toLowerCase().replace(/\s+/g, '-')}-${weight}-${subset}.woff2`;
      fs.writeFileSync(path.join(OUT, name), await get(url, true));
      files++;

      css += `
@font-face {
  font-family: '${family}';
  font-style: normal;
  font-weight: ${weight};
  font-display: swap;
  src: url('/fonts/${name}') format('woff2');${range ? `\n  unicode-range: ${range};` : ''}
}
`;
    }
  }

  fs.mkdirSync(path.dirname(SCSS), { recursive: true });
  fs.writeFileSync(SCSS, css, 'utf8');
  const total = fs
    .readdirSync(OUT)
    .filter((f) => f.endsWith('.woff2'))
    .reduce((n, f) => n + fs.statSync(path.join(OUT, f)).size, 0);
  console.log(`fonts : ${files} fichiers woff2 (${Math.round(total / 1024)} Ko) → public/fonts/`);
  console.log(`        @font-face → src/styles/_fonts.scss (importé par styles.scss)`);
})().catch((e) => {
  console.error('fonts KO:', e.message);
  process.exit(1);
});
