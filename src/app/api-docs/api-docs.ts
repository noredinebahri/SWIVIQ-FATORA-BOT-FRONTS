import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WA_LINK, type Lang } from '../i18n';
import { SiteHeader, SiteFooter } from '../shell/chrome';
import { PageSeo } from '../seo/page-seo';
import { SITE } from '../content/registry';

/** Langues réellement publiées pour la documentation développeurs. */
const DOC_LANGS: Lang[] = ['fr', 'en'];

interface Endpoint {
  method: string;
  path: string;
  title: string;
  desc: string;
  req?: string;
  res?: string;
}

interface ApiDict {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  title: string;
  lead: string;
  heroBullets: string[];
  quickTitle: string;
  quickIntro: string;
  keyTitle: string;
  keySteps: string[];
  keyNote: string;
  starTitle: string;
  starLead: string;
  starExplain: string;
  refTitle: string;
  endpoints: Endpoint[];
  errTitle: string;
  errors: { code: string; label: string; fix: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
}

const BASE = 'https://bot.swiviq.com/v1';

const CREATE_REQ = `curl -X POST ${BASE}/documents \\
  -H "Authorization: Bearer fk_votre_cle" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "invoice",
    "client": { "name": "ATLAS DIGITAL SARL", "ice": "001122334455667", "type": "company" },
    "items": [
      { "description": "Abonnement CRM — pack annuel", "quantity": 1, "unitPrice": 4800 },
      { "description": "Formation équipe (2 jours)", "quantity": 2, "unitPrice": 1500 }
    ]
  }'`;

const CREATE_RES = `{
  "number": "FAT-2026-0042",
  "type": "invoice",
  "totals": { "ht": 7800, "vat": 1560, "ttc": 9360, "currency": "MAD" },
  "pdfUrl": "https://bot.swiviq.com/f/a1b2c3d4e5",
  "whatsapp": { "owner": "sent", "client": "skipped" }
}`;

const MODIFY_REQ = `curl -X POST ${BASE}/documents/FAT-2026-0042/modify \\
  -H "Authorization: Bearer fk_votre_cle" \\
  -H "Content-Type: application/json" \\
  -d '{
    "instruction": "le client est en fait STE ATLAS DIGITAL MAROC SARL,
                    et remplace la formation par 3 jours à 1200 dh le jour"
  }'`;

const MODIFY_RES = `{
  "number": "FAT-2026-0042",
  "client": { "name": "STE ATLAS DIGITAL MAROC SARL", ... },
  "items": [
    { "description": "Abonnement CRM — pack annuel", "quantity": 1, "unitPrice": 4800 },
    { "description": "Formation équipe (3 jours)", "quantity": 3, "unitPrice": 1200 }
  ],
  "totals": { "ht": 8400, "vat": 1680, "ttc": 10080, "currency": "MAD" },
  "pdfUrl": "https://bot.swiviq.com/f/a1b2c3d4e5"
}`;

const DICTS: Partial<Record<Lang, ApiDict>> = {
  fr: {
    metaTitle: 'API de facturation Maroc — connectez votre SaaS à Fatora',
    metaDesc:
      'Émettez des factures et devis conformes (ICE, IF, TVA, numérotation continue) depuis votre SaaS, CRM ou application : un appel HTTP, un PDF avec cachet. Modification en langage libre décodée par IA. Incluse dans tous les plans.',
    badge: 'Incluse dans tous les plans — sans supplément',
    title: 'Votre logiciel facture. Fatora s’occupe du reste.',
    lead:
      'Votre SaaS, votre CRM ou votre application métier n’a pas de module de facturation marocaine ? Un bouton chez vous, un appel HTTP chez nous : Fatora émet la facture ou le devis dans la numérotation du commerçant, avec son cachet, son logo et toutes les mentions de l’article 145 CGI — PDF à l’appui, remis sur WhatsApp.',
    heroBullets: [
      'Factures et devis conformes DGI : ICE, IF, TVA ventilée, montant en toutes lettres, séquence continue',
      'Le commerçant reçoit chaque PDF sur son WhatsApp — vous pouvez aussi l’envoyer à son client final',
      'Modification en langage libre : écrivez le changement, l’IA l’applique',
      'Logo, cachet et informations société pilotables par API'
    ],
    quickTitle: 'Démarrage en 5 minutes',
    quickIntro:
      'Une seule requête suffit pour émettre un document. Le prix est hors taxe par défaut ; passez « priceIsTtc »: true si vos montants sont TTC — Fatora reconstitue la base.',
    keyTitle: 'Obtenir sa clé API',
    keySteps: [
      'Le commerçant ouvre sa conversation WhatsApp Fatora-Bot',
      'Il écrit simplement « api »',
      'Le bot répond avec sa clé personnelle (fk_…) — à coller dans votre application'
    ],
    keyNote:
      'La clé est propre à chaque commerçant et incluse dans son abonnement, dès l’essai gratuit. « api reset » la régénère à tout moment (l’ancienne est révoquée). Les factures émises par l’API consomment le quota du plan ; les devis sont gratuits et illimités.',
    starTitle: 'La modification en langage libre',
    starLead:
      'Aucun schéma de patch à apprendre. Votre utilisateur tape sa correction dans un champ texte, vous nous la transmettez telle quelle — le même moteur d’IA qui comprend les commerçants en darija sur WhatsApp la décode et l’applique.',
    starExplain:
      'Le document garde son numéro (aucun trou dans la séquence), le PDF est régénéré, les totaux recalculés. Si l’instruction est incompréhensible, l’API répond 422 avec une explication — jamais de modification hasardeuse.',
    refTitle: 'Référence des endpoints',
    endpoints: [
      {
        method: 'POST', path: '/v1/documents',
        title: 'Émettre une facture ou un devis',
        desc: '« type »: « invoice » (défaut) ou « quote ». Options : « priceIsTtc », « vatRate » par ligne ou global, « sendToPhone » pour remettre le PDF au client final sur WhatsApp, « notify »: false pour ne pas prévenir le commerçant.',
        req: CREATE_REQ, res: CREATE_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/modify',
        title: 'Modifier en langage libre',
        desc: 'Le corps ne contient qu’une « instruction » en texte libre (français, darija ou anglais). Même numéro, PDF régénéré.',
        req: MODIFY_REQ, res: MODIFY_RES
      },
      {
        method: 'GET', path: '/v1/documents',
        title: 'Lister les documents',
        desc: 'Les derniers documents émis (« limit » jusqu’à 50, « type » pour filtrer factures ou devis).'
      },
      {
        method: 'GET', path: '/v1/documents/{number}',
        title: 'Lire un document',
        desc: 'Lignes, totaux, lien PDF public — pratique pour afficher l’état dans votre interface.'
      },
      {
        method: 'GET', path: '/v1/account',
        title: 'Compte et quota',
        desc: 'Profil société, plan actif, quota consommé/restant. Sert aussi de test de clé.'
      },
      {
        method: 'PUT', path: '/v1/company',
        title: 'Mettre à jour la société',
        desc: 'Raison sociale, ICE, IF, taxe professionnelle, RC, adresse, TVA par défaut, conditions de règlement — depuis le formulaire de votre application.'
      },
      {
        method: 'POST', path: '/v1/company/logo',
        title: 'Envoyer le logo',
        desc: 'Corps : { « image »: « <base64 ou data-URI png/jpeg> » }. Nettoyé et recadré automatiquement, affiché en tête des prochaines factures.'
      },
      {
        method: 'POST', path: '/v1/company/stamp',
        title: 'Envoyer le cachet',
        desc: 'Même format. Le fond est supprimé par extraction d’encre — le même traitement que sur WhatsApp — puis le cachet est apposé sur chaque PDF.'
      }
    ],
    errTitle: 'Codes d’erreur',
    errors: [
      { code: '401', label: 'Clé absente ou invalide', fix: 'Vérifiez l’en-tête Authorization: Bearer fk_…' },
      { code: '402', label: 'Quota du plan atteint', fix: 'Le commerçant passe au plan supérieur depuis WhatsApp — la réponse contient used/limit pour l’afficher chez vous' },
      { code: '422', label: 'Instruction incomprise', fix: 'Reformulez la modification plus précisément' },
      { code: '429', label: 'Trop de requêtes', fix: '60 requêtes/minute par clé — espacez vos appels' }
    ],
    faqTitle: 'Questions d’intégration',
    faq: [
      {
        q: 'Combien coûte l’API ?',
        a: 'Rien de plus que l’abonnement Fatora du commerçant, dès l’essai gratuit. Les factures émises par l’API comptent dans le quota du plan exactement comme celles dictées sur WhatsApp ; les devis sont gratuits et illimités.'
      },
      {
        q: 'Qui détient la clé : moi (l’éditeur) ou mon utilisateur ?',
        a: 'Chaque commerçant a sa propre clé, liée à son compte Fatora et à sa numérotation. Votre application stocke la clé que l’utilisateur lui colle — vous n’avez aucun compte central à gérer, et chaque client paie son propre abonnement.'
      },
      {
        q: 'Les montants que j’envoie sont TTC — comment faire ?',
        a: 'Ajoutez « priceIsTtc »: true. Fatora reconstitue la base hors taxe en divisant par un plus le taux, ligne par ligne — la méthode correcte, pas une soustraction du pourcentage.'
      },
      {
        q: 'Le commerçant est auto-entrepreneur, sans TVA ?',
        a: 'Son régime fiscal est enregistré dans son compte Fatora et s’impose à l’API : quoi que votre application envoie, ses documents sortent sans TVA, avec la mention adaptée.'
      },
      {
        q: 'Que se passe-t-il quand le quota est atteint ?',
        a: 'L’API répond 402 avec used, limit et un message prêt à afficher. Le commerçant change de plan en deux messages WhatsApp, et vos appels passent à nouveau.'
      }
    ],
    ctaTitle: 'Prêt à connecter votre application ?',
    ctaText: 'Créez un compte Fatora en deux minutes sur WhatsApp, écrivez « api », et émettez votre première facture depuis votre code dans le quart d’heure.',
    ctaBtn: 'Commencer sur WhatsApp'
  },

  en: {
    metaTitle: 'Morocco invoicing API — connect your SaaS to Fatora',
    metaDesc:
      'Issue DGI-compliant invoices and quotes (ICE, tax ID, VAT, continuous numbering) from your SaaS, CRM or app: one HTTP call, one stamped PDF. Free-text modification decoded by AI. Included in every plan.',
    badge: 'Included in every plan — no extra fee',
    title: 'Your software invoices. Fatora does the rest.',
    lead:
      'Your SaaS, CRM or business app has no Moroccan invoicing module? One button on your side, one HTTP call on ours: Fatora issues the invoice or quote in the merchant’s own numbering, with their stamp, logo and every mention required by article 145 of the Moroccan tax code — PDF included, delivered on WhatsApp.',
    heroBullets: [
      'DGI-compliant invoices and quotes: ICE, tax ID, itemised VAT, amount in words, continuous sequence',
      'The merchant receives every PDF on WhatsApp — you can also deliver it to their end customer',
      'Free-text modification: write the change, the AI applies it',
      'Logo, stamp and company details manageable by API'
    ],
    quickTitle: 'Up and running in 5 minutes',
    quickIntro:
      'A single request issues a document. Prices are net of tax by default; pass "priceIsTtc": true if your amounts are tax-inclusive — Fatora rebuilds the base.',
    keyTitle: 'Getting the API key',
    keySteps: [
      'The merchant opens their Fatora-Bot WhatsApp conversation',
      'They simply write “api”',
      'The bot replies with their personal key (fk_…) — paste it into your app'
    ],
    keyNote:
      'The key belongs to each merchant and is included in their plan, from the free trial onwards. “api reset” rotates it at any time. API invoices consume the plan quota; quotes are free and unlimited.',
    starTitle: 'Free-text modification',
    starLead:
      'No patch schema to learn. Your user types the correction in a text field, you pass it through as-is — the same AI engine that understands merchants in Darija on WhatsApp decodes and applies it.',
    starExplain:
      'The document keeps its number (no gap in the sequence), the PDF is regenerated, totals recomputed. If the instruction cannot be understood, the API answers 422 with an explanation — never a hazardous guess.',
    refTitle: 'Endpoint reference',
    endpoints: [
      {
        method: 'POST', path: '/v1/documents',
        title: 'Issue an invoice or quote',
        desc: '"type": "invoice" (default) or "quote". Options: "priceIsTtc", per-line or global "vatRate", "sendToPhone" to deliver the PDF to the end customer on WhatsApp, "notify": false to skip notifying the merchant.',
        req: CREATE_REQ, res: CREATE_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/modify',
        title: 'Modify in free text',
        desc: 'The body carries a single free-text "instruction" (French, Darija or English). Same number, PDF regenerated.',
        req: MODIFY_REQ, res: MODIFY_RES
      },
      { method: 'GET', path: '/v1/documents', title: 'List documents', desc: 'Latest documents ("limit" up to 50, "type" to filter invoices or quotes).' },
      { method: 'GET', path: '/v1/documents/{number}', title: 'Read a document', desc: 'Lines, totals, public PDF link — handy to render the state in your UI.' },
      { method: 'GET', path: '/v1/account', title: 'Account & quota', desc: 'Company profile, active plan, quota used/remaining. Doubles as a key check.' },
      { method: 'PUT', path: '/v1/company', title: 'Update the company', desc: 'Legal name, ICE, tax ID, professional tax, trade register, address, default VAT, payment terms — straight from your app’s settings form.' },
      { method: 'POST', path: '/v1/company/logo', title: 'Upload the logo', desc: 'Body: { "image": "<base64 or data-URI png/jpeg>" }. Cleaned and cropped automatically, shown atop the next invoices.' },
      { method: 'POST', path: '/v1/company/stamp', title: 'Upload the stamp', desc: 'Same format. Background removed by ink extraction — the same processing as on WhatsApp — then stamped on every PDF.' }
    ],
    errTitle: 'Error codes',
    errors: [
      { code: '401', label: 'Missing or invalid key', fix: 'Check the Authorization: Bearer fk_… header' },
      { code: '402', label: 'Plan quota reached', fix: 'The merchant upgrades from WhatsApp — the response carries used/limit for your UI' },
      { code: '422', label: 'Instruction not understood', fix: 'Rephrase the modification more precisely' },
      { code: '429', label: 'Too many requests', fix: '60 requests/minute per key — space out your calls' }
    ],
    faqTitle: 'Integration questions',
    faq: [
      { q: 'How much does the API cost?', a: 'Nothing beyond the merchant’s Fatora plan, free trial included. API invoices count in the plan quota exactly like WhatsApp ones; quotes are free and unlimited.' },
      { q: 'Who owns the key: me (the vendor) or my user?', a: 'Each merchant has their own key, tied to their Fatora account and numbering. Your app stores the key the user pastes — no central account to manage, each customer pays their own plan.' },
      { q: 'My amounts are tax-inclusive — what then?', a: 'Add "priceIsTtc": true. Fatora rebuilds the net base by dividing by one plus the rate, line by line.' },
      { q: 'The merchant is an auto-entrepreneur, no VAT?', a: 'Their tax regime is stored on their Fatora account and enforced by the API: whatever your app sends, their documents come out without VAT, with the proper mention.' },
      { q: 'What happens when the quota is reached?', a: 'The API answers 402 with used, limit and a display-ready message. The merchant upgrades in two WhatsApp messages and your calls go through again.' }
    ],
    ctaTitle: 'Ready to connect your app?',
    ctaText: 'Create a Fatora account in two minutes on WhatsApp, write “api”, and issue your first invoice from code within the quarter hour.',
    ctaBtn: 'Start on WhatsApp'
  }
};

@Component({
  selector: 'app-api-docs',
  imports: [RouterLink, SiteHeader, SiteFooter],
  templateUrl: './api-docs.html',
  styleUrl: './api-docs.scss'
})
export class ApiDocs implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(PageSeo);

  readonly wa = WA_LINK;
  readonly base = BASE;
  lang = signal<Lang>('fr');
  d = computed(() => DICTS[this.lang()] ?? DICTS['fr']!);

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const lang = (p.get('lang') || 'fr') as Lang;
      if (!DOC_LANGS.includes(lang)) {
        this.router.navigateByUrl('/fr/api');
        return;
      }
      this.lang.set(lang);
      const d = DICTS[lang]!;
      const url = `${SITE}/${lang}/api`;
      this.seo.apply({
        lang,
        url,
        title: d.metaTitle,
        desc: d.metaDesc,
        keywords: 'api facturation maroc, api facture ICE, facturation saas maroc, api devis maroc, invoicing api morocco',
        alternates: DOC_LANGS.map((l) => ({ lang: l, url: `${SITE}/${l}/api` })),
        jsonLd: [
          ...this.seo.baseGraph(lang),
          {
            '@type': 'TechArticle',
            '@id': `${url}#article`,
            headline: d.title,
            description: d.metaDesc,
            inLanguage: lang,
            url,
            proficiencyLevel: 'Beginner',
            dependencies: 'HTTP, JSON',
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            author: { '@id': `${SITE}/#org` },
            publisher: { '@id': `${SITE}/#org` },
            about: { '@id': `${SITE}/#app` }
          },
          {
            '@type': 'SoftwareApplication',
            '@id': `${SITE}/#app`,
            name: 'Fatora-Bot',
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'Invoicing API',
            operatingSystem: 'Web, WhatsApp',
            url: SITE,
            provider: { '@id': `${SITE}/#org` },
            offers: { '@type': 'Offer', price: 0, priceCurrency: 'MAD', description: lang === 'en' ? 'API included in every plan' : 'API incluse dans tous les plans' }
          },
          {
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            inLanguage: lang,
            mainEntity: d.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a }
            }))
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${url}#crumbs`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Fatora-Bot', item: `${SITE}/${lang}` },
              { '@type': 'ListItem', position: 2, name: 'API', item: url }
            ]
          }
        ]
      });
    });
  }
}
