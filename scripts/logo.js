/**
 * Génère toute la déclinaison du logo à partir d'une seule source SVG.
 *
 * Le mark raconte le produit en deux signes : trois barres d'onde vocale — on
 * parle — suivies d'une coche — la facture est émise. Il tient à 16 px, ce que
 * ne faisait aucune variante intégrant un document dessiné.
 *
 * Usage : node scripts/logo.js   (à relancer seulement si le mark change)
 */
const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require(path.join('D:', 'start', 'center_atlas_back', 'node_modules', 'puppeteer'));

const OUT = path.join(__dirname, '..', 'public');

const GOLD_A = '#f0c469';
const GOLD_B = '#c9902a';
const INK = '#17120a';

/** Contenu du mark, sans le fond : réutilisable sur une tuile ou détouré. */
const GLYPH = `
  <g fill="${INK}">
    <rect x="10" y="26" width="5.5" height="12" rx="2.75"/>
    <rect x="19" y="19" width="5.5" height="26" rx="2.75"/>
    <rect x="28" y="14" width="5.5" height="36" rx="2.75"/>
  </g>
  <path d="M37.5 34l6 6.5L55.5 24.5" fill="none" stroke="${INK}"
        stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;

const svg = (rx = 16) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Fatora-Bot">
  <defs><linearGradient id="fb" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${GOLD_A}"/><stop offset="1" stop-color="${GOLD_B}"/>
  </linearGradient></defs>
  <rect width="64" height="64" rx="${rx}" fill="url(#fb)"/>${GLYPH}
</svg>`;

/** Le même mark en une seule ligne, pour l'attribut href d'un favicon inline. */
const dataUri = () => 'data:image/svg+xml,' + encodeURIComponent(svg().replace(/\s+/g, ' ').trim());

const PNGS = [
  { file: 'icon-32.png', size: 32, rx: 16 },
  { file: 'apple-touch-icon.png', size: 180, rx: 0 }, // iOS applique son propre masque
  { file: 'icon-192.png', size: 192, rx: 16 },
  { file: 'icon-512.png', size: 512, rx: 16 },
];

/**
 * Un .ico peut encapsuler un PNG tel quel depuis Vista : en-tête de 22 octets
 * puis les données. Évite une dépendance d'encodage pour un seul fichier.
 */
function pngToIco(png, size) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0); // réservé
  header.writeUInt16LE(1, 2); // type : icône
  header.writeUInt16LE(1, 4); // nombre d'images
  header.writeUInt8(size >= 256 ? 0 : size, 6);
  header.writeUInt8(size >= 256 ? 0 : size, 7);
  header.writeUInt8(0, 8); // palette
  header.writeUInt8(0, 9); // réservé
  header.writeUInt16LE(1, 10); // plans
  header.writeUInt16LE(32, 12); // bits par pixel
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18); // décalage des données
  return Buffer.concat([header, png]);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'logo.svg'), svg(), 'utf8');

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  let ico32 = null;

  for (const { file, size, rx } of PNGS) {
    await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
    await page.setContent(
      `<html><body style="margin:0">${svg(rx).replace('<svg', `<svg width="${size}" height="${size}"`)}</body></html>`,
      { waitUntil: 'load' },
    );
    const buf = await page.screenshot({ type: 'png', omitBackground: true });
    fs.writeFileSync(path.join(OUT, file), buf);
    if (size === 32) ico32 = buf;
    console.log(`  ${file.padEnd(22)} ${(buf.length / 1024).toFixed(1)} ko`);
  }
  await browser.close();

  fs.writeFileSync(path.join(OUT, 'favicon.ico'), pngToIco(ico32, 32));

  fs.writeFileSync(
    path.join(OUT, 'site.webmanifest'),
    JSON.stringify(
      {
        name: 'Fatora-Bot — facturation vocale WhatsApp',
        short_name: 'Fatora-Bot',
        description: 'Dictez votre facture sur WhatsApp, recevez un PDF conforme.',
        start_url: '/fr',
        display: 'standalone',
        background_color: '#f7f8fb',
        theme_color: '#e8b64c',
        lang: 'fr',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/logo.svg', sizes: 'any', type: 'image/svg+xml' },
        ],
      },
      null,
      2,
    ),
    'utf8',
  );

  console.log(`  favicon.ico            ${(fs.statSync(path.join(OUT, 'favicon.ico')).size / 1024).toFixed(1)} ko`);
  console.log('  logo.svg, site.webmanifest');
  console.log('\nURI de données pour le <head> (à recopier dans src/index.html si besoin) :\n');
  console.log(dataUri());
})();
