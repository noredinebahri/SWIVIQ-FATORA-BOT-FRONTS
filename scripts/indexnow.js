// Notifie Bing, Yandex et Seznam qu'une page a changé (indexation quasi immédiate).
// Usage : node scripts/indexnow.js
const https = require('https');

const KEY = '793b91e45005c66dae28c12b37d894fd';
const HOST = 'fatora.swiviq.com';

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: 'https://' + HOST + '/' + KEY + '.txt',
  urlList: ['fr', 'ar', 'en', 'es'].map((l) => 'https://' + HOST + '/' + l)
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
    // 200 ou 202 = accepté ; 403 = clé introuvable sur le domaine
    console.log('IndexNow =>', res.statusCode);
    res.resume();
  }
);
req.on('error', (e) => console.error('IndexNow KO:', e.message));
req.write(body);
req.end();
