// Notifie Bing, Yandex et Seznam qu'une page a changé (indexation quasi immédiate).
// Les URL sont lues dans le sitemap généré : aucune liste à maintenir à la main.
// Usage : npm run seo:indexnow   (après `npm run build`)
const https = require('node:https');
const fs = require('node:fs');
const path = require('node:path');

const KEY = '793b91e45005c66dae28c12b37d894fd';
const HOST = 'fatora.swiviq.com';

const sitemap = path.join(__dirname, '..', 'public', 'sitemap.xml');
if (!fs.existsSync(sitemap)) {
  console.error('IndexNow : sitemap.xml introuvable — lancez `npm run build` avant.');
  process.exit(1);
}
const urlList = [...fs.readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) {
  console.error('IndexNow : aucune URL dans le sitemap.');
  process.exit(1);
}

// L'API plafonne à 10 000 URL par appel — largement au-dessus de nos besoins,
// mais le découpage évite une mauvaise surprise si le site grandit.
const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urlList.slice(0, 10000)
});

const req = https.request(
  {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(body)
    }
  },
  (res) => {
    // 200 ou 202 = accepté ; 403 = clé introuvable sur le domaine ;
    // 422 = URL hors du domaine déclaré.
    console.log(`IndexNow => ${res.statusCode} (${urlList.length} URL soumises)`);
    res.resume();
  }
);
req.on('error', (e) => console.error('IndexNow KO:', e.message));
req.write(body);
req.end();
