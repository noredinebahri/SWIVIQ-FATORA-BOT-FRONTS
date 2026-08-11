// Dictionnaire des 4 langues — ar (RTL), fr, en, es
export type Lang = 'fr' | 'ar' | 'en' | 'es';
export const LANGS: Lang[] = ['fr', 'ar', 'en', 'es'];
export const RTL: Record<Lang, boolean> = { fr: false, ar: true, en: false, es: false };

export const WA_LINK = 'https://wa.me/212691020805?text=Salam%20%F0%9F%91%8B';

export interface Dict {
  meta: { title: string; desc: string; kw: string };
  nav: { features: string; how: string; pricing: string; faq: string; cta: string };
  hero: {
    badge: string; h1a: string; h1b: string; sub: string;
    cta: string; cta2: string; trial: string;
    stats: { n: string; l: string }[];
  };
  chat: { caption: string; voice1: string; botRecap: string; wakha: string; pdfName: string; delivered: string };
  langsec: { title: string; sub: string; chips: string[] };
  features: { title: string; sub: string; items: { icon: string; t: string; d: string }[] };
  how: { title: string; sub: string; steps: { t: string; d: string }[] };
  pricing: {
    title: string; sub: string; free: { t: string; d: string; cta: string };
    permonth: string; invoices: string; popular: string; cta: string; note: string;
    plans: { name: string; n: number; price: number }[];
  };
  faq: { title: string; items: { q: string; a: string }[] };
  lead: { title: string; sub: string; name: string; email: string; phone: string; msg: string; send: string; ok: string; err: string };
  footer: { tag: string; privacy: string; rights: string; made: string };
  floating: string;
}

export const DICT: Record<Lang, Dict> = {
  fr: {
    meta: {
      title: 'Fatora-Bot — Factures légales par WhatsApp, à la voix, en darija',
      desc: 'Créez des factures conformes (ICE, IF, TVA) en parlant simplement sur WhatsApp — en darija, en français ou en amazigh. PDF avec cachet, envoi par QR code ou email. Essai gratuit.',
      kw: 'facture maroc, facturation whatsapp, facture darija, facture ICE TVA, facture électronique maroc, auto-entrepreneur maroc'
    },
    nav: { features: 'Fonctionnalités', how: 'Comment ça marche', pricing: 'Tarifs', faq: 'FAQ', cta: 'Essayer gratuitement' },
    hero: {
      badge: 'Le premier assistant de facturation 100% vocal du Maroc',
      h1a: 'Vos factures se font',
      h1b: 'en parlant sur WhatsApp',
      sub: 'Envoyez un vocal en darija — « sayab liya fatora l Ahmed, 3 bibane b 1500 dh » — et recevez une facture PDF conforme (ICE, IF, TVA), avec votre cachet, en 30 secondes. Sans application. Sans clavier. Sans savoir lire.',
      cta: 'Essayer sur WhatsApp', cta2: 'Voir les tarifs', trial: '2 factures gratuites — sans carte bancaire',
      stats: [
        { n: '30 s', l: 'du vocal au PDF' },
        { n: '3', l: 'langues comprises' },
        { n: '100%', l: 'conforme ICE / TVA' }
      ]
    },
    chat: {
      caption: 'Une vraie conversation Fatora-Bot',
      voice1: 'Note vocale · 0:07',
      botRecap: 'فهمت، بغيتي فاتورة لأحمد: ثلاثة بيبان بألف وخمسميا درهم. المجموع مع الضريبة 5 400 درهم. واش نصاوبها ليك؟',
      wakha: 'Wakha ✅',
      pdfName: 'Facture-FAT-2026-0042.pdf',
      delivered: 'Facture envoyée · cachet inclus'
    },
    langsec: {
      title: 'Il parle comme vos clients parlent',
      sub: 'Darija en lettres arabes ou latines, français, tamazight — à la voix ou à l\'écrit. Le bot répond toujours dans votre langue, et toujours en audio si vous parlez en audio.',
      chips: ['🎤 Darija parlée', '🔤 Darija latine « fatora l Ahmed »', '🇫🇷 Français', 'ⵜ Tamazight ⵜⵉⴼⵉⵏⴰⵖ', '💰 Riyal & melyoun compris', '🗣️ Réponses vocales naturelles']
    },
    features: {
      title: 'Tout ce qu\'un logiciel de facturation fait.',
      sub: 'Sans le logiciel. Juste WhatsApp.',
      items: [
        { icon: '🎙️', t: 'Dictez, c\'est facturé', d: 'L\'IA comprend le darija parlé, les prix en riyal ou melyoun, les hésitations et les corrections — « la, joj b 200 » et le récap se corrige.' },
        { icon: '📄', t: 'PDF conforme DGI', d: 'ICE, IF, TP, TVA, montant en toutes lettres, numérotation continue FAT-2026-0001 : tout ce que votre comptable exige.' },
        { icon: '🖊️', t: 'Votre cachet sur chaque facture', d: 'Envoyez une photo de votre cachet une seule fois — il est incrusté sur tous vos PDF.' },
        { icon: '📲', t: 'QR code magique', d: 'Votre client scanne, la facture se télécharge. Montrez l\'écran, ou imprimez le code sur votre comptoir.' },
        { icon: '✉️', t: 'Envoi WhatsApp & email', d: 'La facture part directement chez votre client — avec confirmation avant chaque envoi, pour zéro erreur.' },
        { icon: '🧠', t: 'Mémoire des clients', d: 'Le bot retient l\'orthographe exacte de vos clients. Un nom compliqué ? Envoyez la photo d\'un document, il lit le nom exact.' },
        { icon: '🗂️', t: 'Vos archives à la voix', d: '« عطيني الفاتورة رقم 8 », « les factures de ce mois », « toutes celles d\'Ahmed » — PDF renvoyés avec résumé audio et totaux.' },
        { icon: '✏️', t: 'Correction après émission', d: 'Une erreur détectée après coup ? Dites-le, la facture est corrigée avec le même numéro et renvoyée.' },
        { icon: '🔒', t: 'Vos données isolées', d: 'Chaque commerce a son espace étanche, ses clients, sa numérotation. Hébergement européen.' }
      ]
    },
    how: {
      title: '3 gestes. Zéro apprentissage.',
      sub: 'Si vous savez envoyer un vocal WhatsApp, vous savez déjà tout.',
      steps: [
        { t: 'Parlez', d: '« Sayab liya fatora l Karim, tlata dyal l-bibane b alf ou khamsmya l-wa7da »' },
        { t: 'Confirmez', d: 'Le bot résume à la voix : articles, prix, total TTC. Répondez « wakha » — ou corrigez d\'un mot.' },
        { t: 'C\'est envoyé', d: 'PDF avec cachet dans la conversation. Partagez-le par QR, WhatsApp ou email en une phrase.' }
      ]
    },
    pricing: {
      title: 'Des prix de café, pas de logiciel',
      sub: 'Commencez gratuitement. Payez seulement quand vous facturez.',
      free: { t: 'Essai gratuit', d: '2 factures offertes pour tout tester — sans carte, sans engagement.', cta: 'Commencer maintenant' },
      permonth: '/ mois', invoices: 'factures / mois', popular: 'Le plus choisi', cta: 'Choisir ce plan',
      note: 'Paiement par virement ou en espèces. Activation en quelques minutes, directement dans WhatsApp.',
      plans: [
        { name: 'Artisan', n: 15, price: 30 },
        { name: 'Commerçant', n: 30, price: 50 },
        { name: 'Entreprise', n: 100, price: 90 }
      ]
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'Je ne sais pas bien lire ni écrire, ça marche pour moi ?', a: 'C\'est exactement pour vous que Fatora-Bot existe. Tout se fait à la voix : vous parlez, il répond en audio, vous dites « wakha » pour confirmer. Pour un nom compliqué, envoyez la photo d\'un papier où il est écrit.' },
        { q: 'Les factures sont-elles valables légalement ?', a: 'Oui. Chaque PDF contient votre ICE, IF, taxe professionnelle, la TVA détaillée, le montant en toutes lettres et une numérotation continue — le format exigé par les comptables et l\'administration marocaine.' },
        { q: 'Faut-il installer une application ?', a: 'Non. Fatora-Bot vit dans WhatsApp, que vous avez déjà. Aucune installation, aucune mise à jour, aucun mot de passe.' },
        { q: 'Comment mon client reçoit-il sa facture ?', a: 'Trois façons : il scanne un QR code, vous l\'envoyez sur son WhatsApp, ou par email. Toujours avec votre confirmation avant l\'envoi.' },
        { q: 'Et si le bot se trompe ?', a: 'Il résume toujours avant de générer, et vous corrigez d\'un mot — même après l\'émission, la facture est réparée avec le même numéro. Il apprend vos clients pour ne plus jamais écorcher un nom.' },
        { q: 'Comment payer mon abonnement ?', a: 'Par virement bancaire ou en espèces. Répondez simplement « 15 », « 30 » ou « 100 » dans WhatsApp et nous activons votre compte dans la journée.' }
      ]
    },
    lead: {
      title: 'Une question ? Un projet pour votre coopérative ou vos clients ?',
      sub: 'Comptables et fiduciaires : équipez tous vos clients TPE, on s\'occupe de tout.',
      name: 'Votre nom', email: 'Votre email', phone: 'Votre téléphone (optionnel)', msg: 'Votre message',
      send: 'Envoyer', ok: 'Merci ! Nous revenons vers vous très vite.', err: 'Oups, réessayez ou écrivez-nous sur WhatsApp.'
    },
    footer: {
      tag: 'La facturation qui parle darija.',
      privacy: 'Politique de confidentialité', rights: 'Tous droits réservés.', made: 'Fait avec ❤️ au Maroc'
    },
    floating: 'Essayer sur WhatsApp'
  },

  ar: {
    meta: {
      title: 'فاتورة بوت — فواتير قانونية بالصوت على الواتساب، بالدارجة',
      desc: 'صاوب فواتير قانونية (ICE، IF، TVA) غير بالهضرة على الواتساب — بالدارجة، بالفرنسية ولا بالأمازيغية. PDF بالطابع ديالك، إرسال بالـQR ولا الإيميل. تجربة مجانية.',
      kw: 'فاتورة المغرب, فواتير واتساب, فاتورة بالدارجة, فاتورة ICE TVA, الفوترة الإلكترونية المغرب'
    },
    nav: { features: 'المميزات', how: 'كيفاش خدام', pricing: 'الأثمنة', faq: 'أسئلة', cta: 'جرب مجانا' },
    hero: {
      badge: 'أول مساعد فوترة بالصوت في المغرب',
      h1a: 'الفواتير ديالك تصاوب',
      h1b: 'غير بالهضرة فالواتساب',
      sub: 'صيفط فوكال بالدارجة — « صاوب ليا فاتورة لأحمد، 3 بيبان ب 1500 درهم » — وتوصل بفاتورة PDF قانونية (ICE، IF، TVA) بالطابع ديالك، في 30 ثانية. بلا تطبيق. بلا كتابة. حتى إلا ما كتعرفش تقرا.',
      cta: 'جرب على الواتساب', cta2: 'شوف الأثمنة', trial: 'جوج فواتير مجانا — بلا بطاقة بنكية',
      stats: [
        { n: '30 ث', l: 'من الفوكال للـPDF' },
        { n: '3', l: 'لغات مفهومة' },
        { n: '100%', l: 'قانونية ICE / TVA' }
      ]
    },
    chat: {
      caption: 'محادثة حقيقية مع فاتورة بوت',
      voice1: 'رسالة صوتية · 0:07',
      botRecap: 'فهمت، بغيتي فاتورة لأحمد: ثلاثة بيبان بألف وخمسميا درهم. المجموع مع الضريبة 5,400 درهم. واش نصاوبها ليك؟',
      wakha: 'واخا ✅',
      pdfName: 'Facture-FAT-2026-0042.pdf',
      delivered: 'الفاتورة تصيفطات · بالطابع'
    },
    langsec: {
      title: 'كيهضر بحال الكليان ديالك',
      sub: 'الدارجة بالحروف العربية ولا اللاتينية، الفرنسية، الأمازيغية — بالصوت ولا بالكتابة. البوت كيجاوب ديما بلغتك، وديما بالصوت إلا هضرتي بالصوت.',
      chips: ['🎤 الدارجة بالصوت', '🔤 الدارجة اللاتينية', '🇫🇷 الفرنسية', 'ⵜ الأمازيغية ⵜⵉⴼⵉⵏⴰⵖ', '💰 كيفهم الريال والمليون', '🗣️ أجوبة صوتية طبيعية']
    },
    features: {
      title: 'كلشي اللي كيدير برنامج الفوترة.',
      sub: 'بلا برنامج. غير الواتساب.',
      items: [
        { icon: '🎙️', t: 'هضر، والفاتورة تصاوب', d: 'الذكاء الاصطناعي كيفهم الدارجة المهضورة، الأثمنة بالريال والمليون، والتصحيحات — « لا، جوج ب 200 » والملخص كيتصحح.' },
        { icon: '📄', t: 'PDF قانوني', d: 'ICE، IF، TP، TVA، المبلغ بالحروف، ترقيم متسلسل: كلشي اللي كيطلبو المحاسب والإدارة.' },
        { icon: '🖊️', t: 'الطابع ديالك فكل فاتورة', d: 'صيفط صورة الطابع مرة وحدة — كيتحط أوتوماتيكيا فجميع الفواتير.' },
        { icon: '📲', t: 'كود QR سحري', d: 'الكليان كيسكاني، والفاتورة كتتحمل ليه. ورّي الشاشة، ولا طبع الكود فالمحل.' },
        { icon: '✉️', t: 'إرسال واتساب وإيميل', d: 'الفاتورة كتمشي نيشان للكليان — مع تأكيد قبل كل إرسال، باش ما يوقع حتى غلط.' },
        { icon: '🧠', t: 'كيعقل على الكليان', d: 'كيحفظ السمية الصحيحة ديال كل كليان. سمية صعيبة؟ صيفط صورة ديال ورقة فيها السمية.' },
        { icon: '🗂️', t: 'الأرشيف بالصوت', d: '« عطيني الفاتورة رقم 8 »، « فواتير هاد الشهر »، « ديال أحمد كاملين » — PDF مع ملخص صوتي والمجموع.' },
        { icon: '✏️', t: 'تصحيح من بعد', d: 'بانت شي غلطة من بعد؟ قولها، والفاتورة كتتصحح بنفس الرقم وكتصيفط من جديد.' },
        { icon: '🔒', t: 'البيانات ديالك محمية', d: 'كل تاجر عندو الفضاء ديالو، الكليان ديالو، الترقيم ديالو. استضافة أوروبية.' }
      ]
    },
    how: {
      title: '3 حركات. بلا تعلّم.',
      sub: 'إلا كتعرف تصيفط فوكال فالواتساب، راك عارف كلشي.',
      steps: [
        { t: 'هضر', d: '« صاوب ليا فاتورة لكريم، تلاتة ديال البيبان بألف وخمسميا الوحدة »' },
        { t: 'أكّد', d: 'البوت كيلخص بالصوت: السلعة، الثمن، المجموع. قول « واخا » — ولا صحح بكلمة.' },
        { t: 'تصيفطات', d: 'PDF بالطابع فالمحادثة. شاركها بالـQR، الواتساب ولا الإيميل بجملة وحدة.' }
      ]
    },
    pricing: {
      title: 'ثمن قهوة، ماشي ثمن برنامج',
      sub: 'بدا مجانا. خلص غير ملي كتفوتر.',
      free: { t: 'تجربة مجانية', d: 'جوج فواتير بلاش باش تجرب كلشي — بلا بطاقة، بلا التزام.', cta: 'بدا دابا' },
      permonth: '/ الشهر', invoices: 'فاتورة / الشهر', popular: 'الأكثر اختيارا', cta: 'ختار هاد البلان',
      note: 'الخلاص بالتحويل البنكي ولا كاش. التفعيل فدقائق، نيشان فالواتساب.',
      plans: [
        { name: 'الصانع', n: 15, price: 30 },
        { name: 'التاجر', n: 30, price: 50 },
        { name: 'المقاولة', n: 100, price: 90 }
      ]
    },
    faq: {
      title: 'أسئلة متكررة',
      items: [
        { q: 'ما كنعرفش نقرا ونكتب مزيان، واش يخدم ليا؟', a: 'فاتورة بوت تصاوب بالضبط ليك. كلشي بالصوت: كتهضر، كيجاوبك بالصوت، كتقول « واخا » باش تأكد. وإلا كانت شي سمية صعيبة، صيفط صورة ديال ورقة فيها السمية.' },
        { q: 'واش الفواتير قانونية؟', a: 'نعم. كل PDF فيه ICE، IF، الضريبة المهنية، TVA مفصلة، المبلغ بالحروف وترقيم متسلسل — الشكل اللي كيطلبو المحاسبون والإدارة المغربية.' },
        { q: 'واش خاصني نثبّت شي تطبيق؟', a: 'لا. فاتورة بوت كيخدم فالواتساب اللي عندك ديجا. بلا تثبيت، بلا تحديثات، بلا كلمة سر.' },
        { q: 'كيفاش كيوصل الكليان بالفاتورة؟', a: 'ثلاث طرق: كيسكاني كود QR، ولا كتصيفطها ليه فالواتساب، ولا بالإيميل. ديما بالتأكيد ديالك قبل الإرسال.' },
        { q: 'وإلا غلط البوت؟', a: 'كيلخص ديما قبل ما يصاوب، وكتصحح بكلمة — حتى من بعد الإصدار، الفاتورة كتتصحح بنفس الرقم. وكيتعلم سميات الكليان باش ما يغلط فيهم عمرو.' },
        { q: 'كيفاش نخلص الاشتراك؟', a: 'بالتحويل البنكي ولا كاش. جاوب غير ب « 15 »، « 30 » ولا « 100 » فالواتساب وكنفعّلو ليك الحساب فنفس النهار.' }
      ]
    },
    lead: {
      title: 'عندك سؤال؟ مشروع لتعاونية ولا للكليان ديالك؟',
      sub: 'المحاسبون والائتمانيات: جهزو جميع الكليان TPE ديالكم، حنا نتكلفو بكلشي.',
      name: 'السمية ديالك', email: 'الإيميل ديالك', phone: 'التيليفون (اختياري)', msg: 'الرسالة ديالك',
      send: 'صيفط', ok: 'شكرا! غادي نتواصلو معاك دغيا.', err: 'وقع مشكل، عاود ولا كتب لينا فالواتساب.'
    },
    footer: {
      tag: 'الفوترة اللي كتهضر بالدارجة.',
      privacy: 'سياسة الخصوصية', rights: 'جميع الحقوق محفوظة.', made: 'صنع بـ❤️ فالمغرب'
    },
    floating: 'جرب على الواتساب'
  },

  en: {
    meta: {
      title: 'Fatora-Bot — Legal invoices by voice on WhatsApp, in Moroccan Darija',
      desc: 'Create compliant invoices (ICE, IF, VAT) just by talking on WhatsApp — in Darija, French or Amazigh. PDF with your stamp, shared via QR code or email. Free trial.',
      kw: 'morocco invoicing, whatsapp invoice, darija invoice, voice invoicing, morocco e-invoicing, ICE VAT invoice'
    },
    nav: { features: 'Features', how: 'How it works', pricing: 'Pricing', faq: 'FAQ', cta: 'Try for free' },
    hero: {
      badge: 'Morocco\'s first 100% voice-driven invoicing assistant',
      h1a: 'Your invoices are made',
      h1b: 'by talking on WhatsApp',
      sub: 'Send a voice note in Darija — "sayab liya fatora l Ahmed, 3 doors at 1500 dh" — and receive a compliant PDF invoice (ICE, IF, VAT) with your stamp, in 30 seconds. No app. No keyboard. No literacy required.',
      cta: 'Try it on WhatsApp', cta2: 'See pricing', trial: '2 free invoices — no credit card',
      stats: [
        { n: '30 s', l: 'from voice to PDF' },
        { n: '3', l: 'languages understood' },
        { n: '100%', l: 'ICE / VAT compliant' }
      ]
    },
    chat: {
      caption: 'A real Fatora-Bot conversation',
      voice1: 'Voice message · 0:07',
      botRecap: 'فهمت، بغيتي فاتورة لأحمد: ثلاثة بيبان بألف وخمسميا درهم. المجموع مع الضريبة 5,400 درهم. واش نصاوبها ليك؟',
      wakha: 'Wakha ✅',
      pdfName: 'Invoice-FAT-2026-0042.pdf',
      delivered: 'Invoice sent · stamp included'
    },
    langsec: {
      title: 'It speaks the way your customers speak',
      sub: 'Darija in Arabic or Latin script, French, Tamazight — spoken or written. The bot always answers in your language, and always with audio if you speak audio.',
      chips: ['🎤 Spoken Darija', '🔤 Latin Darija "fatora l Ahmed"', '🇫🇷 French', 'ⵜ Tamazight ⵜⵉⴼⵉⵏⴰⵖ', '💰 Riyal & melyoun understood', '🗣️ Natural voice replies']
    },
    features: {
      title: 'Everything invoicing software does.',
      sub: 'Without the software. Just WhatsApp.',
      items: [
        { icon: '🎙️', t: 'Dictate it, it\'s invoiced', d: 'The AI understands spoken Darija, prices in riyal or melyoun, hesitations and corrections — "la, joj b 200" and the summary fixes itself.' },
        { icon: '📄', t: 'Tax-compliant PDF', d: 'ICE, IF, TP, VAT, amount in words, continuous numbering: everything your accountant demands.' },
        { icon: '🖊️', t: 'Your stamp on every invoice', d: 'Send a photo of your stamp once — it\'s embedded on every PDF forever.' },
        { icon: '📲', t: 'Magic QR code', d: 'Your customer scans, the invoice downloads. Show your screen, or print the code on your counter.' },
        { icon: '✉️', t: 'WhatsApp & email delivery', d: 'The invoice goes straight to your customer — with confirmation before every send. Zero mistakes.' },
        { icon: '🧠', t: 'Customer memory', d: 'The bot remembers exact spellings. Tricky name? Send a photo of any document and it reads the exact name.' },
        { icon: '🗂️', t: 'Voice-driven archives', d: '"Give me invoice #8", "this month\'s invoices", "all of Ahmed\'s" — PDFs re-sent with audio summaries and totals.' },
        { icon: '✏️', t: 'Fix after issuing', d: 'Spotted an error later? Say it — the invoice is corrected under the same number and re-sent.' },
        { icon: '🔒', t: 'Isolated data', d: 'Every business gets its own sealed space, customers and numbering. EU hosting.' }
      ]
    },
    how: {
      title: '3 gestures. Zero learning curve.',
      sub: 'If you can send a WhatsApp voice note, you already know everything.',
      steps: [
        { t: 'Talk', d: '"Sayab liya fatora l Karim, three doors at one thousand five hundred each"' },
        { t: 'Confirm', d: 'The bot summarizes out loud: items, prices, total. Say "wakha" — or correct it with one word.' },
        { t: 'It\'s sent', d: 'Stamped PDF in your chat. Share it by QR, WhatsApp or email in one sentence.' }
      ]
    },
    pricing: {
      title: 'Coffee prices, not software prices',
      sub: 'Start free. Pay only when you invoice.',
      free: { t: 'Free trial', d: '2 invoices on us to try everything — no card, no commitment.', cta: 'Start now' },
      permonth: '/ month', invoices: 'invoices / month', popular: 'Most popular', cta: 'Choose this plan',
      note: 'Pay by bank transfer or cash. Activation within minutes, right inside WhatsApp.',
      plans: [
        { name: 'Artisan', n: 15, price: 30 },
        { name: 'Merchant', n: 30, price: 50 },
        { name: 'Business', n: 100, price: 90 }
      ]
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'I can\'t read or write well — will it work for me?', a: 'Fatora-Bot was built exactly for you. Everything is voice: you talk, it answers in audio, you say "wakha" to confirm. For a tricky name, send a photo of any paper where it\'s written.' },
        { q: 'Are the invoices legally valid?', a: 'Yes. Every PDF carries your ICE, IF, professional tax, itemized VAT, the amount in words and continuous numbering — the format Moroccan accountants and authorities require.' },
        { q: 'Do I need to install an app?', a: 'No. Fatora-Bot lives inside WhatsApp, which you already have. No installs, no updates, no passwords.' },
        { q: 'How does my customer receive the invoice?', a: 'Three ways: they scan a QR code, you send it to their WhatsApp, or by email. Always with your confirmation before sending.' },
        { q: 'What if the bot gets something wrong?', a: 'It always summarizes before generating, and you fix it with a word — even after issuing, the invoice is repaired under the same number. It learns your customers so names are never mangled again.' },
        { q: 'How do I pay for my plan?', a: 'Bank transfer or cash. Just reply "15", "30" or "100" inside WhatsApp and we activate your account the same day.' }
      ]
    },
    lead: {
      title: 'A question? A project for your cooperative or your clients?',
      sub: 'Accountants & fiduciaries: equip all your small-business clients, we handle everything.',
      name: 'Your name', email: 'Your email', phone: 'Your phone (optional)', msg: 'Your message',
      send: 'Send', ok: 'Thanks! We\'ll get back to you very soon.', err: 'Oops — try again or ping us on WhatsApp.'
    },
    footer: {
      tag: 'Invoicing that speaks Darija.',
      privacy: 'Privacy policy', rights: 'All rights reserved.', made: 'Made with ❤️ in Morocco'
    },
    floating: 'Try on WhatsApp'
  },

  es: {
    meta: {
      title: 'Fatora-Bot — Facturas legales por voz en WhatsApp, en dariya marroquí',
      desc: 'Crea facturas conformes (ICE, IF, IVA) simplemente hablando por WhatsApp — en dariya, francés o amazigh. PDF con tu sello, envío por código QR o email. Prueba gratis.',
      kw: 'facturación marruecos, factura whatsapp, factura dariya, factura por voz, facturación electrónica marruecos'
    },
    nav: { features: 'Funciones', how: 'Cómo funciona', pricing: 'Precios', faq: 'FAQ', cta: 'Probar gratis' },
    hero: {
      badge: 'El primer asistente de facturación 100% por voz de Marruecos',
      h1a: 'Tus facturas se hacen',
      h1b: 'hablando por WhatsApp',
      sub: 'Envía un audio en dariya — «sayab liya fatora l Ahmed, 3 puertas a 1500 dh» — y recibe una factura PDF conforme (ICE, IF, IVA) con tu sello, en 30 segundos. Sin app. Sin teclado. Sin saber leer.',
      cta: 'Probar en WhatsApp', cta2: 'Ver precios', trial: '2 facturas gratis — sin tarjeta',
      stats: [
        { n: '30 s', l: 'del audio al PDF' },
        { n: '3', l: 'idiomas comprendidos' },
        { n: '100%', l: 'conforme ICE / IVA' }
      ]
    },
    chat: {
      caption: 'Una conversación real con Fatora-Bot',
      voice1: 'Mensaje de voz · 0:07',
      botRecap: 'فهمت، بغيتي فاتورة لأحمد: ثلاثة بيبان بألف وخمسميا درهم. المجموع مع الضريبة 5,400 درهم. واش نصاوبها ليك؟',
      wakha: 'Wakha ✅',
      pdfName: 'Factura-FAT-2026-0042.pdf',
      delivered: 'Factura enviada · sello incluido'
    },
    langsec: {
      title: 'Habla como hablan tus clientes',
      sub: 'Dariya en letras árabes o latinas, francés, tamazight — por voz o por escrito. El bot responde siempre en tu idioma, y siempre en audio si hablas en audio.',
      chips: ['🎤 Dariya hablado', '🔤 Dariya latino «fatora l Ahmed»', '🇫🇷 Francés', 'ⵜ Tamazight ⵜⵉⴼⵉⵏⴰⵖ', '💰 Riyal y melyoun comprendidos', '🗣️ Respuestas de voz naturales']
    },
    features: {
      title: 'Todo lo que hace un software de facturación.',
      sub: 'Sin el software. Solo WhatsApp.',
      items: [
        { icon: '🎙️', t: 'Díctalo y está facturado', d: 'La IA entiende el dariya hablado, precios en riyal o melyoun, dudas y correcciones — «la, joj b 200» y el resumen se corrige.' },
        { icon: '📄', t: 'PDF conforme', d: 'ICE, IF, TP, IVA, importe en letras, numeración continua: todo lo que exige tu contable.' },
        { icon: '🖊️', t: 'Tu sello en cada factura', d: 'Envía una foto de tu sello una sola vez — quedará incrustado en todos tus PDF.' },
        { icon: '📲', t: 'Código QR mágico', d: 'Tu cliente escanea y la factura se descarga. Muestra la pantalla o imprime el código en tu mostrador.' },
        { icon: '✉️', t: 'Envío por WhatsApp y email', d: 'La factura llega directa a tu cliente — con confirmación antes de cada envío. Cero errores.' },
        { icon: '🧠', t: 'Memoria de clientes', d: 'El bot recuerda la ortografía exacta. ¿Nombre difícil? Envía la foto de un documento y lee el nombre exacto.' },
        { icon: '🗂️', t: 'Tu archivo por voz', d: '«Dame la factura n°8», «las de este mes», «todas las de Ahmed» — PDF reenviados con resumen de audio y totales.' },
        { icon: '✏️', t: 'Corrección tras emisión', d: '¿Un error detectado después? Dilo — la factura se corrige con el mismo número y se reenvía.' },
        { icon: '🔒', t: 'Datos aislados', d: 'Cada negocio tiene su espacio sellado, sus clientes y su numeración. Alojamiento europeo.' }
      ]
    },
    how: {
      title: '3 gestos. Cero aprendizaje.',
      sub: 'Si sabes enviar un audio de WhatsApp, ya lo sabes todo.',
      steps: [
        { t: 'Habla', d: '«Sayab liya fatora l Karim, tres puertas a mil quinientos cada una»' },
        { t: 'Confirma', d: 'El bot resume en voz alta: artículos, precios, total. Di «wakha» — o corrige con una palabra.' },
        { t: 'Enviada', d: 'PDF con sello en tu chat. Compártela por QR, WhatsApp o email en una frase.' }
      ]
    },
    pricing: {
      title: 'Precio de café, no de software',
      sub: 'Empieza gratis. Paga solo cuando facturas.',
      free: { t: 'Prueba gratis', d: '2 facturas de regalo para probarlo todo — sin tarjeta, sin compromiso.', cta: 'Empezar ahora' },
      permonth: '/ mes', invoices: 'facturas / mes', popular: 'El más elegido', cta: 'Elegir este plan',
      note: 'Pago por transferencia o en efectivo. Activación en minutos, directamente en WhatsApp.',
      plans: [
        { name: 'Artesano', n: 15, price: 30 },
        { name: 'Comerciante', n: 30, price: 50 },
        { name: 'Empresa', n: 100, price: 90 }
      ]
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: 'No sé leer ni escribir bien, ¿me sirve?', a: 'Fatora-Bot existe exactamente para ti. Todo es por voz: hablas, responde en audio, dices «wakha» para confirmar. Para un nombre difícil, envía la foto de un papel donde esté escrito.' },
        { q: '¿Las facturas son legalmente válidas?', a: 'Sí. Cada PDF lleva tu ICE, IF, tasa profesional, IVA detallado, el importe en letras y numeración continua — el formato que exigen los contables y la administración marroquí.' },
        { q: '¿Hay que instalar una app?', a: 'No. Fatora-Bot vive en WhatsApp, que ya tienes. Sin instalaciones, sin actualizaciones, sin contraseñas.' },
        { q: '¿Cómo recibe mi cliente su factura?', a: 'De tres formas: escanea un código QR, se la envías a su WhatsApp, o por email. Siempre con tu confirmación antes del envío.' },
        { q: '¿Y si el bot se equivoca?', a: 'Siempre resume antes de generar, y corriges con una palabra — incluso después de emitir, la factura se repara con el mismo número. Aprende tus clientes para no volver a deformar un nombre.' },
        { q: '¿Cómo pago mi plan?', a: 'Por transferencia bancaria o en efectivo. Responde «15», «30» o «100» en WhatsApp y activamos tu cuenta el mismo día.' }
      ]
    },
    lead: {
      title: '¿Una pregunta? ¿Un proyecto para tu cooperativa o tus clientes?',
      sub: 'Contables y gestorías: equipad a todos vuestros clientes TPE, nos ocupamos de todo.',
      name: 'Tu nombre', email: 'Tu email', phone: 'Tu teléfono (opcional)', msg: 'Tu mensaje',
      send: 'Enviar', ok: '¡Gracias! Te contactamos muy pronto.', err: 'Ups — inténtalo de nuevo o escríbenos por WhatsApp.'
    },
    footer: {
      tag: 'La facturación que habla dariya.',
      privacy: 'Política de privacidad', rights: 'Todos los derechos reservados.', made: 'Hecho con ❤️ en Marruecos'
    },
    floating: 'Probar en WhatsApp'
  }
};
