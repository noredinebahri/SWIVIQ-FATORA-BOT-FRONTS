# Référencement Fatora-Bot — état, exploitation, feuille de route

Dernière mise à jour : 12 août 2026

---

## 1. Ce qui est en place

### Architecture de contenu

| | Avant | Après |
|---|---|---|
| URL indexables | 4 | **41** |
| Guides éditoriaux | 0 | 17 (fr) + 12 (ar) |
| Pages E-E-A-T | 0 | 4 (`/:lang/a-propos`) |
| Hub éditorial | 0 | 4 (`/:lang/guides`) |

Le contenu est de la donnée typée, pas du balisage : `src/app/content/`. Ajouter un guide
consiste à ajouter un objet `Article` dans `guides.fr.ts` ou `metiers.fr.ts`. Le prerender,
le sitemap, les hreflang, le JSON-LD, le maillage interne et `llms-full.txt` suivent
automatiquement.

Arborescence des URL :

```
/:lang                              landing
/:lang/guides                       hub éditorial
/:lang/guides/:slug                 guides réglementaires et pratiques (12 fr, 8 ar)
/:lang/secteurs/:slug               pages métier (3 fr, 3 ar)
/:lang/comparatif/:slug             comparatifs (2 fr, 2 ar)
/:lang/a-propos                     éditeur, méthode de rédaction (4 langues)
```

Un garde-fou tourne à chaque build : `scripts/seo-assets.js` relit tout le HTML
généré et fait échouer la compilation si un lien interne pointe vers une page qui
n'existe pas. Un slug renommé dans `content/` mais oublié dans `links.ts`
produirait sinon une redirection silencieuse vers le hub — donc un lien qui ne
transmet rien et une page orpheline.

### Signaux techniques

- **Prerender intégral** — les 30 pages sont du HTML statique produit au build. Aucun robot
  n'a besoin d'exécuter du JavaScript, ce qui compte surtout pour GPTBot, PerplexityBot et
  ClaudeBot, qui ne rendent pas le JS.
- **Racine en 301** (`src/server.ts`) au lieu de 302 — la redirection transmet désormais son
  autorité à la page de destination.
- **`Cache-Control` sur le HTML** : `public, max-age=300, stale-while-revalidate=86400`.
- **Polices auto-hébergées** — `fonts.googleapis.com` supprimé. Les `@font-face` sont dans le
  bundle CSS, les `.woff2` servis depuis `/fonts/`, deux fichiers préchargés. Deux allers-retours
  réseau tiers en moins avant le premier texte affiché ; `latin-ext` exclu (249 Ko inutiles).
- **Bundle initial** : 471 kB brut / **122 kB transférés**. Les pages éditoriales sont en
  chargement différé, la landing ne télécharge pas le corps des guides.

### Schema.org

Un `@graph` unique par page, sans nœud orphelin : `Organization` (avec `knowsAbout`),
`WebSite`, `SoftwareApplication`, `BreadcrumbList`, et selon le type de page `Article`
(+ `wordCount`, `datePublished`, `dateModified`, `speakable`), `FAQPage`, `CollectionPage`,
`ItemList`, `AboutPage`.

Le glossaire émet en plus un `DefinedTermSet` de 35 `DefinedTerm` — chaque ligne de
tableau « terme / définition » devient un nœud citable isolément. C'est le balisage
que les moteurs génératifs exploitent le plus directement : une définition ainsi
extraite se reprend telle quelle, sans avoir à être devinée dans le corps du texte.
Il suffit de poser `glossary: true` sur un article pour l'activer.

### Optimisation moteurs IA (GEO)

- **Bloc « En bref »** en tête de chaque guide : une réponse de 40 à 60 mots, autosuffisante,
  sans pronom de reprise — c'est le passage qu'un moteur génératif extrait. Il est déclaré
  dans `speakable`.
- **`llms-full.txt`** (108 Ko) — le texte intégral des 22 pages éditoriales en clair, régénéré
  à chaque build, avec URL source et licence de citation. Un moteur qui échoue à rendre la page
  a quand même le texte exact.
- **`llms.txt`** — index des guides mis à jour automatiquement.
- **`robots.txt`** — 22 agents autorisés explicitement, dont `Google-Extended`,
  `Google-CloudVertexBot`, `OAI-SearchBot`, `Claude-SearchBot`, `Perplexity-User`,
  `Meta-ExternalAgent`, `MistralAI-User`, `DuckAssistBot`.
- **FAQ en texte visible**, pas en accordéon replié : ce qui est masqué est moins cité.
- **Tableaux comparatifs** — format que les moteurs génératifs reprennent volontiers.

### E-E-A-T

C'est ce qui manquait le plus. Ajouté : page « À propos » identifiant l'éditeur (Swiviq, Rabat),
signature et date de mise à jour sur chaque guide, méthode de rédaction explicitée, et un
avertissement en pied de guide rappelant que les valeurs chiffrées bougent avec les lois de
finances. Le comparatif dit dans quels cas un logiciel classique est le meilleur choix —
admettre ses limites est un signal de fiabilité, pas une faiblesse commerciale.

---

## 2. Déployer

```bash
npm run build          # ng build + génération sitemap / llms.txt / llms-full.txt
#   → déployer ici : tar de dist/factora-bot-front → /var/www/fatora-front + pm2 restart
npm run seo:indexnow   # notifie Bing, Yandex, Seznam — APRÈS déploiement uniquement
node scripts/fonts.js  # uniquement si on change de police
```

L'ordre n'est pas cosmétique : l'API IndexNow va chercher le fichier de clé sur le
domaine public avant d'accepter la soumission. Lancée avant le déploiement, elle
répond 403. Le script vérifie désormais lui-même que la clé est en ligne et refuse
de soumettre sinon. Clé courante : `0fb6d02734c541ccb01f9d2f9c41bf07`, générée dans
Bing Webmaster Tools ; l'ancienne reste servie pour ne pas invalider l'historique.

Le déploiement doit servir `dist/factora-bot-front/browser/` avec :

- `/fonts/*.woff2` accessibles (nouveau répertoire — à vérifier après le premier déploiement) ;
- `Cache-Control: public, max-age=31536000, immutable` sur `/fonts/` et les assets hashés.

**Point relevé sur la production actuelle** : nginx renvoie un en-tête `Cache-Control` dupliqué
sur les assets (`max-age=2592000,public, max-age=2592000, immutable`). Sans gravité, mais c'est
le signe d'une directive `add_header` déclarée deux fois — à nettoyer au passage.

Après déploiement, vérifier :

```bash
curl -I https://fatora.swiviq.com/            # attendu : 301 → /fr
curl -s https://fatora.swiviq.com/sitemap.xml | grep -c '<loc>'   # attendu : 30
curl -I https://fatora.swiviq.com/fonts/inter-400-latin.woff2     # attendu : 200
curl -s https://fatora.swiviq.com/llms-full.txt | head -5
```

---

## 3. Off-page — ce qu'aucune ligne de code ne remplace

Le travail technique et éditorial est fait. La moitié restante du classement se joue en dehors
du site, et se fait à la main. Par ordre d'impact décroissant.

### À faire cette semaine

1. **Google Search Console** — ajouter la propriété `fatora.swiviq.com`, soumettre le sitemap,
   demander l'indexation des 12 guides français. Sans cela, l'indexation des nouvelles pages
   peut prendre des semaines au lieu de jours.
2. **Bing Webmaster Tools** — même opération. Bing alimente ChatGPT Search : c'est le canal
   d'entrée le plus direct vers les citations IA.
3. **Google Business Profile** — fiche « Swiviq », Rabat, catégorie logiciel/service aux
   entreprises. Débloque le pack local sur les requêtes géolocalisées et renforce
   l'`Organization` déjà déclaré en JSON-LD.
4. **Vérifier l'indexation d'`llms-full.txt`** — il doit renvoyer 200 en `text/plain`.

### Semaines 2 à 4

5. **Annuaires SaaS** — Product Hunt, AlternativeTo, SaaSHub, Capterra, G2, Slashdot.
   Chacun fournit un lien et, surtout, une page comparative que les moteurs génératifs lisent
   quand on leur demande « alternative à X ».
6. **Annuaires marocains** — chambres de commerce, plateformes d'appui aux TPE, Maroc PME,
   annuaires professionnels sectoriels.
7. **Presse tech et économique marocaine** — l'angle qui intéresse une rédaction n'est pas le
   produit mais le sujet : *comment les TPE marocaines vont absorber la facturation électronique
   obligatoire*. Un communiqué produit sera ignoré ; un point de vue documenté sera repris.
8. **Partenariats fiduciaires et cabinets comptables** — canal prescripteur déjà identifié dans
   le README du backend. Chaque cabinet qui équipe ses clients TPE fournit un lien depuis un
   domaine thématiquement proche, ce qui vaut mieux que dix annuaires génériques.

### En continu

9. **Mentions de marque sans lien** — les moteurs génératifs pondèrent la fréquence à laquelle
   une marque est citée dans un contexte donné. Répondre aux questions sur la facturation
   marocaine dans les groupes Facebook professionnels, sur LinkedIn et dans les forums
   d'entrepreneurs compte, même sans lien.
10. **Surveiller les citations IA** — interroger périodiquement ChatGPT, Perplexity, Claude et
    les AI Overviews sur « facturation électronique Maroc », « facture WhatsApp Maroc »,
    « mentions obligatoires facture marocaine », et noter si Fatora-Bot est cité et sur quelle
    page. C'est la mesure qui compte désormais autant que la position dans les résultats bleus.

---

## 4. Calendrier réaliste

Rien de ce qui précède ne produit d'effet immédiat. Ordre de grandeur observé sur un domaine
jeune, sans historique de liens :

| Échéance | Ce qu'on peut attendre |
|---|---|
| Semaine 1 | Indexation des 30 URL après soumission en Search Console |
| Semaines 2 à 6 | Premières positions sur les requêtes de longue traîne (« mentions obligatoires facture Maroc », « ICE 15 chiffres facture ») |
| Mois 2 à 4 | Premières citations dans les moteurs génératifs — c'est là que `llms-full.txt` et les blocs « En bref » travaillent |
| Mois 4 à 8 | Requêtes concurrentielles (« facturation électronique Maroc », « logiciel facturation TPE Maroc »), à condition que les liens entrants aient suivi |

Le facteur limitant ne sera pas le site : il est désormais au-dessus du standard du marché
marocain. Ce sera le nombre de domaines de qualité qui pointent vers lui.

---

## 5. Prochain lot de contenu

Par ordre de valeur estimée. Chaque entrée est un objet `Article` à ajouter — aucun travail
technique associé.

**Traduire en arabe** (le contenu existe déjà en français) : `devis-conforme-maroc`,
`facture-avoir-maroc`, `delais-paiement-maroc`, `archivage-factures-maroc` et
`glossaire-facturation-maroc`. C'est le meilleur rapport effort/résultat du lot : la recherche
en arabe et en darija est nettement moins concurrentielle que la recherche en français au Maroc.

**Nouveaux guides français :**

- Facturer un client étranger depuis le Maroc (export, exonération, devise)
- Facture d'acompte et situation de travaux : le cycle complet d'un chantier
- Conditions générales de vente : ce qu'il faut y mettre au Maroc
- Récupérer une créance impayée : la procédure, étape par étape

**Nouvelles pages secteurs :** restauration et traiteurs, coopératives agricoles, artisanat et
couture, cabinets comptables (page prescripteur, à traiter comme une page de partenariat).

**Ne pas faire** : des pages par ville (« facturation à Casablanca », « facturation à Fès »).
Sans contenu réellement différent d'une ville à l'autre, ce sont des pages minces — exactement
ce que la mise à jour E-E-A-T de décembre 2025 sanctionne. La couverture géographique est déjà
traitée dans la section dédiée de la page d'accueil, et c'est suffisant.

---

## 6. Sur l'objectif « numéro 1 mondial »

Fatora-Bot est adossé à la réglementation marocaine — ICE, identifiant fiscal, taxe
professionnelle, article 145-IX du CGI. Sur les requêtes marocaines, la première place est un
objectif réaliste : la concurrence éditoriale y est faible et le site est maintenant nettement
mieux outillé qu'elle.

Sur « facturation » au sens mondial, l'objectif n'est pas atteignable : Zoho, QuickBooks, Sage
et Odoo occupent le terrain avec des décennies d'antériorité et des profils de liens hors de
portée.

Il existe en revanche un créneau mondial réellement gagnable, parce qu'il est encore peu
disputé : **la facturation vocale par WhatsApp**. Le besoin est le même en Espagne, en Amérique
latine, en Égypte, dans le Golfe, en Inde et au Nigeria — partout où WhatsApp est le canal
professionnel par défaut et où une partie des commerçants écrit peu.

L'architecture de contenu construite ici est prête à être dupliquée par pays. Le verrou n'est
pas le référencement mais le produit : il faudrait gérer d'autres régimes fiscaux que le
marocain. C'est une décision produit, à prendre une fois le marché marocain tenu.
