/**
 * Notifie Bing, Yandex et Seznam qu'une page a changé (indexation en heures
 * plutôt qu'en semaines). Les URL sont lues dans le sitemap généré : aucune
 * liste à maintenir à la main.
 *
 * Usage : npm run seo:indexnow        (après `npm run build` ET après déploiement)
 *
 * ⚠️ L'ordre compte. L'API va chercher le fichier de clé sur le domaine public
 * avant d'accepter la soumission. Si le déploiement n'est pas fait, le fichier
 * n'est pas en ligne et l'API répond 403.
 */
const https = require('node:https');
const fs = require('node:fs');
const path = require('node:path');

// Clé générée dans Bing Webmaster Tools, rattachée au compte.
// Le fichier public/<KEY>.txt doit contenir exactement cette chaîne, sans
// saut de ligne final ni BOM — sinon l'API répond 403.
const KEY = process.env.INDEXNOW_KEY || '0fb6d02734c541ccb01f9d2f9c41bf07';
const HOST = process.env.INDEXNOW_HOST || 'fatora.swiviq.com';

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

const keyUrl = `https://${HOST}/${KEY}.txt`;

/** Vérifie que le fichier de clé est bien en ligne et contient la bonne valeur. */
function checkKeyFile() {
  return new Promise((resolve) => {
    https
      .get(keyUrl, (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => resolve({ status: res.statusCode, body: body.trim() }));
      })
      .on('error', (e) => resolve({ status: 0, body: e.message }));
  });
}

function submit() {
  // L'API plafonne à 10 000 URL par appel — largement au-dessus de nos besoins.
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList: urlList.slice(0, 10000) });
  const req = https.request(
    {
      hostname: 'api.indexnow.org',
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body)
      }
    },
    (res) => {
      const explain =
        {
          200: 'accepté',
          202: 'accepté, clé en cours de validation',
          400: 'format de requête invalide',
          403: 'clé refusée — le fichier de clé est introuvable ou son contenu ne correspond pas',
          422: 'URL hors du domaine déclaré, ou clé non conforme au protocole',
          429: 'trop de requêtes — réessayez plus tard'
        }[res.statusCode] || 'réponse inattendue';
      console.log(`IndexNow => ${res.statusCode} (${explain}) — ${urlList.length} URL soumises`);
      res.resume();
    }
  );
  req.on('error', (e) => console.error('IndexNow KO:', e.message));
  req.write(body);
  req.end();
}

(async () => {
  const check = await checkKeyFile();
  if (check.status !== 200) {
    console.error(`IndexNow : ${keyUrl} répond ${check.status || 'rien'} — déployez avant de soumettre.`);
    process.exit(1);
  }
  if (check.body !== KEY) {
    console.error(`IndexNow : le fichier de clé en ligne contient « ${check.body} » au lieu de « ${KEY} ».`);
    process.exit(1);
  }
  console.log(`IndexNow : clé vérifiée sur ${keyUrl}`);
  submit();
})();
