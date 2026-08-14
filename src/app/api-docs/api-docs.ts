import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WA_LINK, type Lang } from '../i18n';
import { SiteHeader, SiteFooter } from '../shell/chrome';
import { PageSeo } from '../seo/page-seo';
import { SITE } from '../content/registry';

/** La documentation existe dans les quatre langues du site. */
const DOC_LANGS: Lang[] = ['fr', 'ar', 'en', 'es'];

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
  deliverTitle: string;
  deliverLead: string;
  deliverCards: { t: string; d: string }[];
  refTitle: string;
  endpoints: Endpoint[];
  errTitle: string;
  errors: { code: string; label: string; fix: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  reqLabel: string;
  resLabel: string;
  uniqueLabel: string;
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
    ],
    "sendToEmail": "client@exemple.ma"
  }'`;

const CREATE_RES = `{
  "number": "FAT-2026-0042",
  "type": "invoice",
  "totals": { "ht": 7800, "vat": 1560, "ttc": 9360, "currency": "MAD" },
  "pdfUrl": "https://bot.swiviq.com/f/a1b2c3d4e5",
  "qrcodeUrl": "https://bot.swiviq.com/qr/a1b2c3d4e5.png",
  "whatsapp": { "owner": "sent", "client": "skipped" },
  "email": { "client": "sent" }
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

const SEND_REQ = `curl -X POST ${BASE}/documents/FAT-2026-0042/send \\
  -H "Authorization: Bearer fk_votre_cle" \\
  -H "Content-Type: application/json" \\
  -d '{ "channel": "email", "to": "client@exemple.ma" }'`;

const SEND_RES = `{ "ok": true, "number": "FAT-2026-0042",
  "channel": "email", "to": "client@exemple.ma", "status": "sent" }`;

const DICTS: Record<Lang, ApiDict> = {
  /* ═══════════════════════ FRANÇAIS ═══════════════════════ */
  fr: {
    metaTitle: 'API de facturation Maroc — connectez votre SaaS à Fatora',
    metaDesc:
      'Émettez des factures et devis conformes (ICE, IF, TVA, numérotation continue) depuis votre SaaS, CRM ou application : un appel HTTP, un PDF avec cachet, remis par WhatsApp, email ou QR code. Modification en langage libre décodée par IA. Incluse dans tous les plans.',
    badge: 'Incluse dans tous les plans — sans supplément',
    title: 'Votre logiciel facture. Fatora s’occupe du reste.',
    lead:
      'Votre SaaS, votre CRM ou votre application métier n’a pas de module de facturation marocaine ? Un bouton chez vous, un appel HTTP chez nous : Fatora émet la facture ou le devis dans la numérotation du commerçant, avec son cachet, son logo et toutes les mentions de l’article 145 CGI — PDF à l’appui, remis par WhatsApp, par email ou par QR code.',
    heroBullets: [
      'Factures et devis conformes DGI : ICE, IF, TVA ventilée, montant en toutes lettres, séquence continue',
      'Remise au choix : WhatsApp, email, ou QR code à imprimer — le client scanne et télécharge',
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
    deliverTitle: 'Remise au client : WhatsApp, email ou QR code',
    deliverLead:
      'Émettre ne suffit pas — il faut que le client final reçoive son document. Trois canaux, cumulables, réutilisables à volonté : une facture perdue se renvoie en un appel.',
    deliverCards: [
      { t: 'WhatsApp', d: '« sendToPhone » à la création, ou POST /send avec channel « whatsapp » : le PDF part dans la conversation du client, au nom du commerçant.' },
      { t: 'Email', d: '« sendToEmail » à la création, ou channel « email » : le client reçoit un message soigné avec la facture en pièce jointe — le même gabarit que le bot.' },
      { t: 'QR code', d: 'Chaque document expose « qrcodeUrl » : un PNG à afficher en caisse, imprimer sur un ticket ou intégrer dans votre interface. Le client scanne, la facture se télécharge.' }
    ],
    refTitle: 'Référence des endpoints',
    endpoints: [
      {
        method: 'POST', path: '/v1/documents',
        title: 'Émettre une facture ou un devis',
        desc: '« type »: « invoice » (défaut) ou « quote ». Options : « priceIsTtc », « vatRate » par ligne ou global, « sendToPhone » et « sendToEmail » pour la remise immédiate au client final, « notify »: false pour ne pas prévenir le commerçant.',
        req: CREATE_REQ, res: CREATE_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/modify',
        title: 'Modifier en langage libre',
        desc: 'Le corps ne contient qu’une « instruction » en texte libre (français, darija ou anglais). Même numéro, PDF régénéré.',
        req: MODIFY_REQ, res: MODIFY_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/send',
        title: 'Remettre ou renvoyer un document',
        desc: '{ « channel »: « whatsapp » | « email », « to »: numéro ou adresse }. Le PDF est régénéré s’il a disparu — réutilisable autant de fois que nécessaire.',
        req: SEND_REQ, res: SEND_RES
      },
      {
        method: 'GET', path: '/qr/{token}.png',
        title: 'QR code de téléchargement (public)',
        desc: 'Le PNG du QR pointant vers le PDF. Sans authentification : le jeton est le secret. À intégrer directement dans une balise <img> ou à imprimer.'
      },
      { method: 'GET', path: '/v1/documents', title: 'Lister les documents', desc: 'Les derniers documents émis (« limit » jusqu’à 50, « type » pour filtrer factures ou devis).' },
      { method: 'GET', path: '/v1/documents/{number}', title: 'Lire un document', desc: 'Lignes, totaux, lien PDF, QR code — pratique pour afficher l’état dans votre interface.' },
      { method: 'GET', path: '/v1/account', title: 'Compte et quota', desc: 'Profil société, plan actif, quota consommé/restant. Sert aussi de test de clé.' },
      { method: 'PUT', path: '/v1/company', title: 'Mettre à jour la société', desc: 'Raison sociale, ICE, IF, taxe professionnelle, RC, adresse, TVA par défaut, conditions de règlement.' },
      { method: 'POST', path: '/v1/company/logo', title: 'Envoyer le logo', desc: 'Corps : { « image »: « <base64 ou data-URI png/jpeg> » }. Nettoyé et recadré automatiquement.' },
      { method: 'POST', path: '/v1/company/stamp', title: 'Envoyer le cachet', desc: 'Même format. Fond supprimé par extraction d’encre, puis apposé sur chaque PDF.' }
    ],
    errTitle: 'Codes d’erreur',
    errors: [
      { code: '401', label: 'Clé absente ou invalide', fix: 'Vérifiez l’en-tête Authorization: Bearer fk_…' },
      { code: '402', label: 'Quota du plan atteint', fix: 'Le commerçant passe au plan supérieur depuis WhatsApp — la réponse contient used/limit' },
      { code: '422', label: 'Instruction incomprise', fix: 'Reformulez la modification plus précisément' },
      { code: '429', label: 'Trop de requêtes', fix: '60 requêtes/minute par clé' }
    ],
    faqTitle: 'Questions d’intégration',
    faq: [
      { q: 'Combien coûte l’API ?', a: 'Rien de plus que l’abonnement Fatora du commerçant, dès l’essai gratuit. Les factures API comptent dans le quota du plan comme celles dictées sur WhatsApp ; les devis sont gratuits et illimités.' },
      { q: 'Qui détient la clé : moi (l’éditeur) ou mon utilisateur ?', a: 'Chaque commerçant a sa propre clé, liée à son compte et à sa numérotation. Votre application stocke la clé que l’utilisateur colle — aucun compte central à gérer, chaque client paie son propre abonnement.' },
      { q: 'Les montants que j’envoie sont TTC — comment faire ?', a: 'Ajoutez « priceIsTtc »: true. Fatora reconstitue la base hors taxe en divisant par un plus le taux, ligne par ligne.' },
      { q: 'Le commerçant est auto-entrepreneur, sans TVA ?', a: 'Son régime fiscal est enregistré dans son compte et s’impose à l’API : quoi que votre application envoie, ses documents sortent sans TVA, avec la mention adaptée.' },
      { q: 'Que se passe-t-il quand le quota est atteint ?', a: 'L’API répond 402 avec used, limit et un message prêt à afficher. Le commerçant change de plan en deux messages WhatsApp.' }
    ],
    ctaTitle: 'Prêt à connecter votre application ?',
    ctaText: 'Créez un compte Fatora en deux minutes sur WhatsApp, écrivez « api », et émettez votre première facture depuis votre code dans le quart d’heure.',
    ctaBtn: 'Commencer sur WhatsApp',
    reqLabel: 'Requête', resLabel: 'Réponse', uniqueLabel: 'Unique à Fatora'
  },

  /* ═══════════════════════ العربية ═══════════════════════ */
  ar: {
    metaTitle: 'API الفوترة بالمغرب — اربط تطبيقك بفاتورة',
    metaDesc:
      'أصدر فواتير وعروض أثمنة مطابقة للقانون المغربي (ICE، التعريف الضريبي، TVA، ترقيم متسلسل) من تطبيقك أو CRM ديالك: نداء HTTP واحد، وPDF بالطابع، يوصل بالواتساب أو الإيميل أو QR code. تعديل بالكتابة الحرة يفهمه الذكاء الاصطناعي. متضمنة في جميع الباقات.',
    badge: 'متضمنة في جميع الباقات — بلا زيادة',
    title: 'تطبيقك كيفوتر. وفاتورة كتكمل الباقي.',
    lead:
      'تطبيقك أو CRM ديالك ما فيهش الفوترة المغربية؟ زر عندك، نداء HTTP عندنا: فاتورة كتصدر الفاتورة أو عرض الثمن بترقيم التاجر، بالطابع واللوغو ديالو وجميع البيانات القانونية للمادة 145 — مع PDF يوصل بالواتساب أو الإيميل أو QR code.',
    heroBullets: [
      'فواتير وعروض أثمنة مطابقة: ICE، التعريف الضريبي، TVA مفصلة، المبلغ بالحروف، ترقيم متسلسل',
      'التسليم كيف بغيتي: واتساب، إيميل، أو QR code يطبع — الزبون كيسكانيه وكيحمل',
      'تعديل بالكتابة الحرة: كتب التغيير، والذكاء الاصطناعي كيطبقو',
      'اللوغو والطابع ومعلومات الشركة كلها عبر API'
    ],
    quickTitle: 'البداية في 5 دقائق',
    quickIntro:
      'نداء واحد كافي لإصدار وثيقة. الثمن بلا ضريبة افتراضيا؛ إلى كانت أثمنتك TTC زيد « priceIsTtc »: true — فاتورة كتحسب الأساس بوحدها.',
    keyTitle: 'الحصول على مفتاح API',
    keySteps: [
      'التاجر كيحل المحادثة ديالو مع فاتورة بوت فالواتساب',
      'كيكتب ببساطة « api »',
      'البوت كيجاوبو بالمفتاح الشخصي ديالو (fk_…) — يلصقو فتطبيقك'
    ],
    keyNote:
      'المفتاح خاص بكل تاجر ومتضمن فالاشتراك ديالو من التجربة المجانية. « api reset » كيجدد المفتاح فأي وقت (القديم كيتلغى). فواتير API كتحسب من كوطا الباقة؛ عروض الأثمنة مجانية وبلا حدود.',
    starTitle: 'التعديل بالكتابة الحرة',
    starLead:
      'ما كاين حتى schema خاصك تتعلمو. المستعمل ديالك كيكتب التصحيح فخانة نصية، وانت كترسلها لنا كما هي — نفس محرك الذكاء الاصطناعي اللي كيفهم التجار بالدارجة فالواتساب كيفكها وكيطبقها.',
    starExplain:
      'الوثيقة كتحتفظ برقمها (بلا فراغ فالتسلسل)، الـPDF كيتجدد والمجاميع كتتحسب من جديد. إلى ما تفهمتش التعليمة، الـAPI كيرد 422 مع شرح — ما كاين حتى تعديل عشوائي.',
    deliverTitle: 'التسليم للزبون: واتساب، إيميل أو QR code',
    deliverLead:
      'الإصدار ما كافيش — خاص الزبون النهائي يتوصل بوثيقتو. ثلاث قنوات، تقدر تجمع بيناتهم، وتعاود الإرسال قد ما بغيتي: فاتورة ضايعة كترجع بنداء واحد.',
    deliverCards: [
      { t: 'واتساب', d: '« sendToPhone » عند الإنشاء، أو POST /send مع channel « whatsapp »: الـPDF كيمشي لمحادثة الزبون باسم التاجر.' },
      { t: 'الإيميل', d: '« sendToEmail » عند الإنشاء، أو channel « email »: الزبون كيتوصل برسالة مرتبة والفاتورة مرفقة — نفس القالب ديال البوت.' },
      { t: 'QR code', d: 'كل وثيقة عندها « qrcodeUrl »: صورة PNG تعرضها فالكيسة، تطبعها فالتيكي أو تدمجها فالواجهة ديالك. الزبون كيسكاني وكيحمل.' }
    ],
    refTitle: 'مرجع الـEndpoints',
    endpoints: [
      {
        method: 'POST', path: '/v1/documents',
        title: 'إصدار فاتورة أو عرض ثمن',
        desc: '« type »: « invoice » (افتراضي) أو « quote ». الخيارات: « priceIsTtc »، « vatRate » لكل سطر أو عام، « sendToPhone » و« sendToEmail » للتسليم الفوري للزبون، « notify »: false باش ما يتوصلش التاجر بإشعار.',
        req: CREATE_REQ, res: CREATE_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/modify',
        title: 'التعديل بالكتابة الحرة',
        desc: 'الطلب فيه فقط « instruction » بنص حر (فرنسية، دارجة أو إنجليزية). نفس الرقم، PDF جديد.',
        req: MODIFY_REQ, res: MODIFY_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/send',
        title: 'تسليم أو إعادة إرسال وثيقة',
        desc: '{ « channel »: « whatsapp » | « email »، « to »: رقم أو عنوان }. الـPDF كيتجدد إلى ضاع — استعملها قد ما بغيتي.',
        req: SEND_REQ, res: SEND_RES
      },
      {
        method: 'GET', path: '/qr/{token}.png',
        title: 'QR code التحميل (عمومي)',
        desc: 'صورة PNG ديال الـQR كتوجه للـPDF. بلا مصادقة: الرمز هو السر. تدمجها مباشرة فـ<img> أو تطبعها.'
      },
      { method: 'GET', path: '/v1/documents', title: 'لائحة الوثائق', desc: 'آخر الوثائق الصادرة (« limit » حتى 50، « type » للفلترة).' },
      { method: 'GET', path: '/v1/documents/{number}', title: 'قراءة وثيقة', desc: 'السطور، المجاميع، رابط الـPDF والـQR — لعرض الحالة فواجهتك.' },
      { method: 'GET', path: '/v1/account', title: 'الحساب والكوطا', desc: 'ملف الشركة، الباقة النشيطة، الكوطا المستهلكة/المتبقية. كيصلح حتى لاختبار المفتاح.' },
      { method: 'PUT', path: '/v1/company', title: 'تحديث معلومات الشركة', desc: 'الاسم التجاري، ICE، التعريف الضريبي، الضريبة المهنية، السجل التجاري، العنوان، TVA الافتراضية.' },
      { method: 'POST', path: '/v1/company/logo', title: 'إرسال اللوغو', desc: 'الطلب: { « image »: « <base64 أو data-URI png/jpeg> » }. كيتنقى وكيتقص أوتوماتيكيا.' },
      { method: 'POST', path: '/v1/company/stamp', title: 'إرسال الطابع', desc: 'نفس الصيغة. الخلفية كتتحيد باستخراج الحبر، والطابع كيتحط على كل PDF.' }
    ],
    errTitle: 'رموز الأخطاء',
    errors: [
      { code: '401', label: 'مفتاح ناقص أو غير صالح', fix: 'تحقق من Authorization: Bearer fk_…' },
      { code: '402', label: 'الكوطا وصلات للحد', fix: 'التاجر كيطلع للباقة الأعلى من الواتساب — الرد فيه used/limit' },
      { code: '422', label: 'التعليمة ما تفهمتش', fix: 'عاود صياغة التعديل بدقة أكثر' },
      { code: '429', label: 'طلبات كثيرة', fix: '60 طلب فالدقيقة لكل مفتاح' }
    ],
    faqTitle: 'أسئلة الإدماج',
    faq: [
      { q: 'شحال كيكلف الـAPI؟', a: 'والو زيادة على اشتراك فاتورة ديال التاجر، من التجربة المجانية. فواتير API كتحسب من كوطا الباقة بحال اللي كتملى فالواتساب؛ عروض الأثمنة مجانية وبلا حدود.' },
      { q: 'شكون عندو المفتاح: أنا (الناشر) ولا المستعمل ديالي؟', a: 'كل تاجر عندو المفتاح ديالو، مربوط بحسابو وترقيمو. تطبيقك كيخزن المفتاح اللي كيلصقو المستعمل — ما عندك حتى حساب مركزي تسيرو، وكل زبون كيخلص اشتراكو.' },
      { q: 'الأثمنة اللي كنرسل TTC — كيفاش ندير؟', a: 'زيد « priceIsTtc »: true. فاتورة كتحسب الأساس بلا ضريبة بالقسمة على واحد زائد النسبة، سطر بسطر.' },
      { q: 'التاجر مقاول ذاتي، بلا TVA؟', a: 'النظام الضريبي ديالو مسجل فحسابو وكيفرض راسو على الـAPI: مهما أرسل تطبيقك، الوثائق ديالو كتخرج بلا TVA، بالبيان المناسب.' },
      { q: 'شنو كيوقع ملي توصل الكوطا للحد؟', a: 'الـAPI كيرد 402 مع used وlimit ورسالة جاهزة للعرض. التاجر كيبدل الباقة بجوج رسائل واتساب.' }
    ],
    ctaTitle: 'مستعد تربط تطبيقك؟',
    ctaText: 'أنشئ حساب فاتورة فدقيقتين على الواتساب، كتب « api »، وأصدر أول فاتورة من الكود ديالك فربع ساعة.',
    ctaBtn: 'ابدأ على الواتساب',
    reqLabel: 'الطلب', resLabel: 'الرد', uniqueLabel: 'حصري عند فاتورة'
  },

  /* ═══════════════════════ ENGLISH ═══════════════════════ */
  en: {
    metaTitle: 'Morocco invoicing API — connect your SaaS to Fatora',
    metaDesc:
      'Issue DGI-compliant invoices and quotes (ICE, tax ID, VAT, continuous numbering) from your SaaS, CRM or app: one HTTP call, one stamped PDF, delivered by WhatsApp, email or QR code. Free-text modification decoded by AI. Included in every plan.',
    badge: 'Included in every plan — no extra fee',
    title: 'Your software invoices. Fatora does the rest.',
    lead:
      'Your SaaS, CRM or business app has no Moroccan invoicing module? One button on your side, one HTTP call on ours: Fatora issues the invoice or quote in the merchant’s own numbering, with their stamp, logo and every mention required by article 145 of the tax code — PDF included, delivered by WhatsApp, email or QR code.',
    heroBullets: [
      'DGI-compliant invoices and quotes: ICE, tax ID, itemised VAT, amount in words, continuous sequence',
      'Delivery your way: WhatsApp, email, or a printable QR code — the customer scans and downloads',
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
    deliverTitle: 'Delivery: WhatsApp, email or QR code',
    deliverLead:
      'Issuing is not enough — the end customer must receive their document. Three channels, combinable, reusable at will: a lost invoice is resent in one call.',
    deliverCards: [
      { t: 'WhatsApp', d: '"sendToPhone" at creation, or POST /send with channel "whatsapp": the PDF lands in the customer’s conversation, in the merchant’s name.' },
      { t: 'Email', d: '"sendToEmail" at creation, or channel "email": the customer gets a polished message with the invoice attached — the bot’s own template.' },
      { t: 'QR code', d: 'Every document exposes "qrcodeUrl": a PNG to show at the counter, print on a receipt or embed in your UI. The customer scans, the invoice downloads.' }
    ],
    refTitle: 'Endpoint reference',
    endpoints: [
      {
        method: 'POST', path: '/v1/documents',
        title: 'Issue an invoice or quote',
        desc: '"type": "invoice" (default) or "quote". Options: "priceIsTtc", per-line or global "vatRate", "sendToPhone" and "sendToEmail" for immediate delivery, "notify": false to skip notifying the merchant.',
        req: CREATE_REQ, res: CREATE_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/modify',
        title: 'Modify in free text',
        desc: 'The body carries a single free-text "instruction" (French, Darija or English). Same number, PDF regenerated.',
        req: MODIFY_REQ, res: MODIFY_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/send',
        title: 'Deliver or resend a document',
        desc: '{ "channel": "whatsapp" | "email", "to": number or address }. The PDF is regenerated if missing — reusable as many times as needed.',
        req: SEND_REQ, res: SEND_RES
      },
      {
        method: 'GET', path: '/qr/{token}.png',
        title: 'Download QR code (public)',
        desc: 'The QR PNG pointing at the PDF. No authentication: the token is the secret. Embed it straight into an <img> tag or print it.'
      },
      { method: 'GET', path: '/v1/documents', title: 'List documents', desc: 'Latest documents ("limit" up to 50, "type" to filter invoices or quotes).' },
      { method: 'GET', path: '/v1/documents/{number}', title: 'Read a document', desc: 'Lines, totals, PDF link, QR code — handy to render the state in your UI.' },
      { method: 'GET', path: '/v1/account', title: 'Account & quota', desc: 'Company profile, active plan, quota used/remaining. Doubles as a key check.' },
      { method: 'PUT', path: '/v1/company', title: 'Update the company', desc: 'Legal name, ICE, tax ID, professional tax, trade register, address, default VAT, payment terms.' },
      { method: 'POST', path: '/v1/company/logo', title: 'Upload the logo', desc: 'Body: { "image": "<base64 or data-URI png/jpeg>" }. Cleaned and cropped automatically.' },
      { method: 'POST', path: '/v1/company/stamp', title: 'Upload the stamp', desc: 'Same format. Background removed by ink extraction, then stamped on every PDF.' }
    ],
    errTitle: 'Error codes',
    errors: [
      { code: '401', label: 'Missing or invalid key', fix: 'Check the Authorization: Bearer fk_… header' },
      { code: '402', label: 'Plan quota reached', fix: 'The merchant upgrades from WhatsApp — the response carries used/limit' },
      { code: '422', label: 'Instruction not understood', fix: 'Rephrase the modification more precisely' },
      { code: '429', label: 'Too many requests', fix: '60 requests/minute per key' }
    ],
    faqTitle: 'Integration questions',
    faq: [
      { q: 'How much does the API cost?', a: 'Nothing beyond the merchant’s Fatora plan, free trial included. API invoices count in the plan quota exactly like WhatsApp ones; quotes are free and unlimited.' },
      { q: 'Who owns the key: me (the vendor) or my user?', a: 'Each merchant has their own key, tied to their account and numbering. Your app stores the key the user pastes — no central account to manage, each customer pays their own plan.' },
      { q: 'My amounts are tax-inclusive — what then?', a: 'Add "priceIsTtc": true. Fatora rebuilds the net base by dividing by one plus the rate, line by line.' },
      { q: 'The merchant is an auto-entrepreneur, no VAT?', a: 'Their tax regime is stored on their account and enforced by the API: whatever your app sends, their documents come out without VAT, with the proper mention.' },
      { q: 'What happens when the quota is reached?', a: 'The API answers 402 with used, limit and a display-ready message. The merchant upgrades in two WhatsApp messages.' }
    ],
    ctaTitle: 'Ready to connect your app?',
    ctaText: 'Create a Fatora account in two minutes on WhatsApp, write “api”, and issue your first invoice from code within the quarter hour.',
    ctaBtn: 'Start on WhatsApp',
    reqLabel: 'Request', resLabel: 'Response', uniqueLabel: 'Unique to Fatora'
  },

  /* ═══════════════════════ ESPAÑOL ═══════════════════════ */
  es: {
    metaTitle: 'API de facturación Marruecos — conecta tu SaaS a Fatora',
    metaDesc:
      'Emite facturas y presupuestos conformes (ICE, identificador fiscal, IVA, numeración continua) desde tu SaaS, CRM o aplicación: una llamada HTTP, un PDF con sello, entregado por WhatsApp, email o código QR. Modificación en texto libre descodificada por IA. Incluida en todos los planes.',
    badge: 'Incluida en todos los planes — sin coste extra',
    title: 'Tu software factura. Fatora hace el resto.',
    lead:
      '¿Tu SaaS, CRM o aplicación no tiene módulo de facturación marroquí? Un botón en tu lado, una llamada HTTP en el nuestro: Fatora emite la factura o el presupuesto en la numeración del comerciante, con su sello, su logo y todas las menciones del artículo 145 del código fiscal — PDF incluido, entregado por WhatsApp, email o código QR.',
    heroBullets: [
      'Facturas y presupuestos conformes: ICE, identificador fiscal, IVA detallado, importe en letras, secuencia continua',
      'Entrega a tu manera: WhatsApp, email o un código QR imprimible — el cliente escanea y descarga',
      'Modificación en texto libre: escribe el cambio, la IA lo aplica',
      'Logo, sello y datos de la empresa gestionables por API'
    ],
    quickTitle: 'En marcha en 5 minutos',
    quickIntro:
      'Una sola petición emite un documento. Los precios son sin impuestos por defecto; pasa "priceIsTtc": true si tus importes son con IVA — Fatora reconstruye la base.',
    keyTitle: 'Obtener la clave API',
    keySteps: [
      'El comerciante abre su conversación de WhatsApp con Fatora-Bot',
      'Escribe simplemente «api»',
      'El bot responde con su clave personal (fk_…) — pégala en tu aplicación'
    ],
    keyNote:
      'La clave pertenece a cada comerciante y está incluida en su plan, desde la prueba gratuita. «api reset» la regenera en cualquier momento. Las facturas API consumen la cuota del plan; los presupuestos son gratuitos e ilimitados.',
    starTitle: 'La modificación en texto libre',
    starLead:
      'Ningún esquema de patch que aprender. Tu usuario escribe la corrección en un campo de texto, tú nos la pasas tal cual — el mismo motor de IA que entiende a los comerciantes en dariya por WhatsApp la descodifica y la aplica.',
    starExplain:
      'El documento conserva su número (sin hueco en la secuencia), el PDF se regenera, los totales se recalculan. Si la instrucción no se entiende, la API responde 422 con una explicación — nunca una modificación arriesgada.',
    deliverTitle: 'Entrega al cliente: WhatsApp, email o código QR',
    deliverLead:
      'Emitir no basta — el cliente final debe recibir su documento. Tres canales, combinables, reutilizables a voluntad: una factura perdida se reenvía en una llamada.',
    deliverCards: [
      { t: 'WhatsApp', d: '"sendToPhone" al crear, o POST /send con channel "whatsapp": el PDF llega a la conversación del cliente, a nombre del comerciante.' },
      { t: 'Email', d: '"sendToEmail" al crear, o channel "email": el cliente recibe un mensaje cuidado con la factura adjunta — la misma plantilla del bot.' },
      { t: 'Código QR', d: 'Cada documento expone "qrcodeUrl": un PNG para mostrar en caja, imprimir en un ticket o integrar en tu interfaz. El cliente escanea, la factura se descarga.' }
    ],
    refTitle: 'Referencia de endpoints',
    endpoints: [
      {
        method: 'POST', path: '/v1/documents',
        title: 'Emitir una factura o presupuesto',
        desc: '"type": "invoice" (por defecto) o "quote". Opciones: "priceIsTtc", "vatRate" por línea o global, "sendToPhone" y "sendToEmail" para entrega inmediata, "notify": false para no avisar al comerciante.',
        req: CREATE_REQ, res: CREATE_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/modify',
        title: 'Modificar en texto libre',
        desc: 'El cuerpo lleva una única "instruction" en texto libre (francés, dariya o inglés). Mismo número, PDF regenerado.',
        req: MODIFY_REQ, res: MODIFY_RES
      },
      {
        method: 'POST', path: '/v1/documents/{number}/send',
        title: 'Entregar o reenviar un documento',
        desc: '{ "channel": "whatsapp" | "email", "to": número o dirección }. El PDF se regenera si falta — reutilizable cuantas veces haga falta.',
        req: SEND_REQ, res: SEND_RES
      },
      {
        method: 'GET', path: '/qr/{token}.png',
        title: 'Código QR de descarga (público)',
        desc: 'El PNG del QR que apunta al PDF. Sin autenticación: el token es el secreto. Intégralo directamente en un <img> o imprímelo.'
      },
      { method: 'GET', path: '/v1/documents', title: 'Listar documentos', desc: 'Los últimos documentos emitidos ("limit" hasta 50, "type" para filtrar).' },
      { method: 'GET', path: '/v1/documents/{number}', title: 'Leer un documento', desc: 'Líneas, totales, enlace PDF, código QR — útil para mostrar el estado en tu interfaz.' },
      { method: 'GET', path: '/v1/account', title: 'Cuenta y cuota', desc: 'Perfil de empresa, plan activo, cuota usada/restante. Sirve también como test de clave.' },
      { method: 'PUT', path: '/v1/company', title: 'Actualizar la empresa', desc: 'Razón social, ICE, identificador fiscal, tasa profesional, registro mercantil, dirección, IVA por defecto.' },
      { method: 'POST', path: '/v1/company/logo', title: 'Subir el logo', desc: 'Cuerpo: { "image": "<base64 o data-URI png/jpeg>" }. Limpiado y recortado automáticamente.' },
      { method: 'POST', path: '/v1/company/stamp', title: 'Subir el sello', desc: 'Mismo formato. Fondo eliminado por extracción de tinta, luego estampado en cada PDF.' }
    ],
    errTitle: 'Códigos de error',
    errors: [
      { code: '401', label: 'Clave ausente o inválida', fix: 'Revisa la cabecera Authorization: Bearer fk_…' },
      { code: '402', label: 'Cuota del plan alcanzada', fix: 'El comerciante sube de plan desde WhatsApp — la respuesta lleva used/limit' },
      { code: '422', label: 'Instrucción no entendida', fix: 'Reformula la modificación con más precisión' },
      { code: '429', label: 'Demasiadas peticiones', fix: '60 peticiones/minuto por clave' }
    ],
    faqTitle: 'Preguntas de integración',
    faq: [
      { q: '¿Cuánto cuesta la API?', a: 'Nada más que el plan Fatora del comerciante, prueba gratuita incluida. Las facturas API cuentan en la cuota del plan como las dictadas por WhatsApp; los presupuestos son gratuitos e ilimitados.' },
      { q: '¿Quién posee la clave: yo (el editor) o mi usuario?', a: 'Cada comerciante tiene su propia clave, ligada a su cuenta y su numeración. Tu aplicación guarda la clave que el usuario pega — sin cuenta central que gestionar, cada cliente paga su propio plan.' },
      { q: 'Mis importes son con IVA — ¿qué hago?', a: 'Añade "priceIsTtc": true. Fatora reconstruye la base sin impuestos dividiendo por uno más el tipo, línea a línea.' },
      { q: '¿El comerciante es autónomo, sin IVA?', a: 'Su régimen fiscal está registrado en su cuenta y se impone a la API: envíe lo que envíe tu aplicación, sus documentos salen sin IVA, con la mención adecuada.' },
      { q: '¿Qué pasa cuando se alcanza la cuota?', a: 'La API responde 402 con used, limit y un mensaje listo para mostrar. El comerciante cambia de plan en dos mensajes de WhatsApp.' }
    ],
    ctaTitle: '¿Listo para conectar tu aplicación?',
    ctaText: 'Crea una cuenta Fatora en dos minutos por WhatsApp, escribe «api», y emite tu primera factura desde tu código en un cuarto de hora.',
    ctaBtn: 'Empezar en WhatsApp',
    reqLabel: 'Petición', resLabel: 'Respuesta', uniqueLabel: 'Único de Fatora'
  }
};

@Component({
  selector: 'app-api-docs',
  imports: [SiteHeader, SiteFooter],
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
  d = computed(() => DICTS[this.lang()] ?? DICTS.fr);

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const lang = (p.get('lang') || 'fr') as Lang;
      if (!DOC_LANGS.includes(lang)) {
        this.router.navigateByUrl('/fr/api');
        return;
      }
      this.lang.set(lang);
      const d = DICTS[lang];
      const url = `${SITE}/${lang}/api`;
      this.seo.apply({
        lang,
        url,
        title: d.metaTitle,
        desc: d.metaDesc,
        keywords: 'api facturation maroc, api facture ICE, facturation saas maroc, api devis maroc, invoicing api morocco, api الفوترة المغرب',
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
            offers: { '@type': 'Offer', price: 0, priceCurrency: 'MAD', description: lang === 'fr' ? 'API incluse dans tous les plans' : lang === 'ar' ? 'API متضمنة في جميع الباقات' : lang === 'es' ? 'API incluida en todos los planes' : 'API included in every plan' }
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
