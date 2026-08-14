// Dictionnaire des 4 langues — ar (RTL), fr, en, es — ton B2B : on parle aux entreprises
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
  langsec: { title: string; sub: string; chips: { icon: string; label: string }[] };
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
      title: 'Fatora-Bot — La facturation vocale WhatsApp pour les entreprises marocaines',
      desc: 'Équipez votre entreprise : vos équipes dictent une facture sur WhatsApp — en darija, français ou amazigh — et un PDF conforme (ICE, IF, TVA) part chez le client avec votre cachet. Sans logiciel, sans formation. Essai gratuit.',
      kw: 'facturation entreprise maroc, facturation whatsapp, facture darija, facture ICE TVA, facturation électronique maroc, logiciel facturation TPE PME'
    },
    nav: { features: 'Fonctionnalités', how: 'Comment ça marche', pricing: 'Tarifs', faq: 'FAQ', cta: 'Essayer gratuitement' },
    hero: {
      badge: 'La facturation vocale sur WhatsApp, pensée pour les entreprises marocaines',
      h1a: 'Votre entreprise facture',
      h1b: 'en parlant sur WhatsApp',
      sub: 'Commerces, sociétés de services, ateliers, transporteurs, coopératives : vos équipes dictent une facture en darija ou en français — « sayab liya fatora l Ahmed, 3 bibane b 1500 dh » — et l\'entreprise émet un PDF conforme (ICE, IF, TVA) avec son cachet, en 30 secondes. Aucun logiciel à déployer, aucune formation : WhatsApp suffit.',
      cta: 'Essayer sur WhatsApp', cta2: 'Voir les tarifs', trial: '2 factures offertes pour évaluer — sans carte bancaire, sans engagement',
      stats: [
        { n: '30 s', l: 'du vocal au PDF émis' },
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
      delivered: 'Facture émise · cachet inclus'
    },
    langsec: {
      title: 'Il parle comme vos équipes et vos clients parlent',
      sub: 'Vendeurs, chauffeurs, techniciens, gérants : chacun dicte dans sa langue — darija en lettres arabes ou latines, français, tamazight — à la voix ou à l\'écrit. Le bot répond toujours dans la même langue, et toujours en audio quand on lui parle en audio.',
      chips: [
        { icon: 'mic', label: 'Darija parlée' },
        { icon: 'voice', label: 'Darija latine « fatora l Ahmed »' },
        { icon: 'globe', label: 'Français' },
        { icon: 'globe', label: 'Tamazight ⵜⵉⴼⵉⵏⴰⵖ' },
        { icon: 'card', label: 'Riyal & melyoun compris' },
        { icon: 'check', label: 'Réponses vocales naturelles' }
      ]
    },
    features: {
      title: 'Tout ce qu\'un logiciel de facturation apporte à votre entreprise.',
      sub: 'Sans le logiciel. Juste WhatsApp.',
      items: [
        { icon: 'mic', t: 'Vos équipes dictent, c\'est facturé', d: 'L\'IA comprend le darija parlé, les prix en riyal ou melyoun, les hésitations et les corrections — « la, joj b 200 » et le récapitulatif se corrige immédiatement.' },
        { icon: 'file', t: 'PDF conforme aux exigences DGI', d: 'ICE, IF, TP, TVA détaillée, montant en toutes lettres, numérotation continue par exercice : le format exigé par votre comptable et l\'administration.' },
        { icon: 'stamp', t: 'Le cachet de l\'entreprise sur chaque facture', d: 'Une photo du cachet, une seule fois — il est incrusté automatiquement sur tous les PDF émis par vos équipes.' },
        { icon: 'qr', t: 'Remise par QR code', d: 'Votre client scanne, la facture se télécharge. Sur l\'écran du vendeur, imprimé en caisse ou collé sur le comptoir.' },
        { icon: 'send', t: 'Envoi WhatsApp & email au client', d: 'La facture part directement chez votre client — avec une confirmation explicite avant chaque envoi. Zéro erreur de destinataire.' },
        { icon: 'users', t: 'Référentiel clients partagé', d: 'L\'orthographe exacte de chaque client est mémorisée. Nom complexe ? Une photo d\'un document suffit, le nom exact est lu et enregistré.' },
        { icon: 'archive', t: 'Les archives à la voix', d: '« La facture n°8 », « les factures du mois », « toutes celles d\'Ahmed » — PDF renvoyés avec résumé audio et totaux de la période.' },
        { icon: 'edit', t: 'Corrections et avoirs conformes', d: 'Erreur avant transmission ? Corrigée sous le même numéro. Facture déjà transmise ? Un avoir AVO conforme l\'annule en une phrase — la règle DGI, respectée.' },
        { icon: 'star', t: 'Votre bilan, chaque lundi', d: 'CA, encaissé, TVA facturée et encaissée, impayés, meilleur client : vos chiffres arrivent seuls dans WhatsApp. À la demande avec « bilan ».' },
        { icon: 'card', t: 'Dépenses par photo', d: 'Photographiez un ticket ou une facture d\'achat : dépense enregistrée, TVA déductible calculée, résultat du mois (encaissé − dépenses) mis à jour.' },
        { icon: 'check', t: 'Devis, bons de livraison', d: 'Devis DEV valable 30 jours, converti en facture d\'une phrase quand le client accepte. Bons de livraison BL à numérotation propre.' },
        { icon: 'spark', t: 'Factures récurrentes', d: '« Facture ça chaque mois » — loyers et abonnements se régénèrent automatiquement à l\'échéance, PDF envoyé, sans y penser.' },
        { icon: 'globe', t: 'Export comptable en un mot', d: '« export » : le fichier CSV mensuel (numéros, clients, ICE, HT, TVA, TTC, encaissements) prêt à transmettre à votre fiduciaire.' },
        { icon: 'shield', t: 'Données cloisonnées par entreprise', d: 'Chaque société dispose de son espace étanche : ses clients, sa numérotation, son cachet. Hébergement en Union européenne.' }
      ]
    },
    how: {
      title: '3 gestes. Zéro formation.',
      sub: 'Si vos équipes savent envoyer un vocal WhatsApp, elles savent déjà facturer.',
      steps: [
        { t: 'Dictez', d: '« Sayab liya fatora l Karim, tlata dyal l-bibane b alf ou khamsmya l-wa7da »' },
        { t: 'Validez', d: 'Le bot résume à la voix : articles, prix, total TTC. « Wakha » — ou corrigez d\'un mot.' },
        { t: 'C\'est émis', d: 'PDF avec cachet dans la conversation. Transmis au client par QR, WhatsApp ou email en une phrase.' }
      ]
    },
    pricing: {
      title: 'Un coût maîtrisé, indexé sur votre activité',
      sub: 'Évaluez gratuitement. Payez selon votre volume de facturation.',
      free: { t: 'Évaluation gratuite', d: '2 factures offertes pour valider l\'outil en conditions réelles — sans carte, sans engagement.', cta: 'Commencer l\'essai' },
      permonth: '/ mois', invoices: 'factures / mois', popular: 'Le plus choisi', cta: 'Choisir ce plan',
      note: 'Paiement par virement ou en espèces. Activation en quelques minutes, directement dans WhatsApp. Volume supérieur ou multi-comptes : contactez-nous.',
      plans: [
        { name: 'TPE', n: 15, price: 30 },
        { name: 'Commerce', n: 30, price: 50 },
        { name: 'Entreprise', n: 100, price: 90 }
      ]
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'Certains de nos collaborateurs lisent difficilement — est-ce un obstacle ?', a: 'C\'est précisément la force de Fatora-Bot : tout se fait à la voix. Vos équipes parlent, le bot répond en audio, la confirmation se dit — « wakha ». Pour un nom de client complexe, une photo d\'un document suffit : le nom exact est lu et enregistré.' },
        { q: 'Les factures émises sont-elles valables légalement ?', a: 'Oui. Chaque PDF porte l\'ICE, l\'IF, la taxe professionnelle, la TVA détaillée, le montant en toutes lettres et une numérotation continue — le format attendu par les experts-comptables et l\'administration marocaine.' },
        { q: 'Faut-il déployer un logiciel ou former les équipes ?', a: 'Non. Fatora-Bot fonctionne dans WhatsApp, déjà installé sur tous les téléphones de vos collaborateurs. Aucune installation, aucune licence par poste, aucune formation.' },
        { q: 'Comment nos clients reçoivent-ils leurs factures ?', a: 'Trois canaux : QR code à scanner, envoi direct sur leur WhatsApp, ou email. Chaque envoi externe est précédé d\'une confirmation explicite (numéro, client, montant, destinataire).' },
        { q: 'Que se passe-t-il en cas d\'erreur de saisie ?', a: 'Le bot résume toujours avant d\'émettre, et une correction se dit en un mot — même après émission, la facture est réparée sous le même numéro. Le référentiel clients évite définitivement les noms écorchés.' },
        { q: 'Comment fonctionne la facturation du service ?', a: 'Par virement bancaire ou en espèces, au mois. Votre gérant répond « 15 », « 30 » ou « 100 » dans WhatsApp et le compte est activé dans la journée. Besoin de plusieurs comptes ou d\'un volume supérieur ? Écrivez-nous.' }
      ]
    },
    lead: {
      title: 'Déployez Fatora-Bot dans votre entreprise — ou chez vos clients',
      sub: 'Cabinets comptables, fiduciaires, fédérations et coopératives : équipez l\'ensemble de vos adhérents ou clients TPE/PME, nous prenons en charge l\'intégration.',
      name: 'Nom et société', email: 'Email professionnel', phone: 'Téléphone (optionnel)', msg: 'Votre besoin',
      send: 'Envoyer', ok: 'Merci ! Notre équipe vous recontacte très vite.', err: 'Une erreur est survenue — réessayez ou écrivez-nous sur WhatsApp.'
    },
    footer: {
      tag: 'La facturation qui parle la langue de vos équipes.',
      privacy: 'Politique de confidentialité', rights: 'Tous droits réservés.', made: 'Conçu au Maroc'
    },
    floating: 'Essayer sur WhatsApp'
  },

  ar: {
    meta: {
      title: 'فاتورة بوت — الفوترة الصوتية عبر الواتساب للمقاولات المغربية',
      desc: 'جهّز مقاولتك: فرق العمل ديالك كيدكتيو الفاتورة على الواتساب — بالدارجة، الفرنسية ولا الأمازيغية — وPDF قانوني (ICE، IF، TVA) كيوصل للعميل بطابع الشركة. بلا برنامج، بلا تكوين. تجربة مجانية.',
      kw: 'فوترة المقاولات المغرب, فواتير واتساب, فاتورة بالدارجة, الفوترة الإلكترونية المغرب, برنامج فوترة'
    },
    nav: { features: 'المميزات', how: 'كيفاش خدام', pricing: 'الأثمنة', faq: 'أسئلة', cta: 'جرب مجانا' },
    hero: {
      badge: 'الفوترة الصوتية عبر الواتساب، مصممة للمقاولات المغربية',
      h1a: 'المقاولة ديالك كتفوتر',
      h1b: 'غير بالهضرة فالواتساب',
      sub: 'المحلات التجارية، شركات الخدمات، الورشات، النقل، التعاونيات: فرق العمل ديالك كيدكتيو الفاتورة بالدارجة ولا بالفرنسية — « صاوب ليا فاتورة لأحمد، 3 بيبان ب 1500 درهم » — والمقاولة كتصدر PDF قانوني (ICE، IF، TVA) بالطابع ديالها، في 30 ثانية. بلا برنامج، بلا تكوين: الواتساب كافي.',
      cta: 'جرب على الواتساب', cta2: 'شوف الأثمنة', trial: 'جوج فواتير مجانية للتقييم — بلا بطاقة بنكية، بلا التزام',
      stats: [
        { n: '30 ث', l: 'من الصوت للفاتورة' },
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
      delivered: 'الفاتورة صدرات · بالطابع'
    },
    langsec: {
      title: 'كيهضر بحال فرق العمل والعملاء ديالك',
      sub: 'البائعون، السائقون، التقنيون، المسيرون: كل واحد كيدكتي بلغتو — الدارجة بالحروف العربية ولا اللاتينية، الفرنسية، الأمازيغية — بالصوت ولا بالكتابة. البوت كيجاوب ديما بنفس اللغة، وديما بالصوت ملي كيتهضر ليه بالصوت.',
      chips: [
        { icon: 'mic', label: 'الدارجة بالصوت' },
        { icon: 'voice', label: 'الدارجة اللاتينية' },
        { icon: 'globe', label: 'الفرنسية' },
        { icon: 'globe', label: 'الأمازيغية ⵜⵉⴼⵉⵏⴰⵖ' },
        { icon: 'card', label: 'كيفهم الريال والمليون' },
        { icon: 'check', label: 'أجوبة صوتية طبيعية' }
      ]
    },
    features: {
      title: 'كلشي اللي كيقدمو برنامج الفوترة للمقاولة ديالك.',
      sub: 'بلا برنامج. غير الواتساب.',
      items: [
        { icon: 'mic', t: 'فرقك كتدكتي، والفاتورة كتصدر', d: 'الذكاء الاصطناعي كيفهم الدارجة المهضورة، الأثمنة بالريال والمليون، والتصحيحات — « لا، جوج ب 200 » والملخص كيتصحح فالحين.' },
        { icon: 'file', t: 'PDF مطابق لمتطلبات الضرائب', d: 'ICE، IF، TP، TVA مفصلة، المبلغ بالحروف، ترقيم متسلسل بالسنة المالية: الشكل اللي كيطلبو المحاسب والإدارة.' },
        { icon: 'stamp', t: 'طابع الشركة فكل فاتورة', d: 'صورة وحدة للطابع، مرة وحدة — كيتحط أوتوماتيكيا فجميع الفواتير اللي كتصدرها الفرق ديالك.' },
        { icon: 'qr', t: 'التسليم بكود QR', d: 'العميل كيسكاني، والفاتورة كتتحمل. فشاشة البائع، مطبوع فالصندوق ولا ملصق فالمحل.' },
        { icon: 'send', t: 'إرسال واتساب وإيميل للعميل', d: 'الفاتورة كتوصل نيشان للعميل ديالك — مع تأكيد صريح قبل كل إرسال. صفر خطأ فالمرسل إليه.' },
        { icon: 'users', t: 'سجل عملاء مشترك', d: 'الإملاء الصحيح ديال كل عميل محفوظ. سمية معقدة؟ صورة ديال وثيقة كافية، السمية الصحيحة كتقرا وكتسجل.' },
        { icon: 'archive', t: 'الأرشيف بالصوت', d: '« الفاتورة رقم 8 »، « فواتير الشهر »، « ديال أحمد كاملين » — PDF مع ملخص صوتي ومجاميع الفترة.' },
        { icon: 'edit', t: 'تصحيحات وأفوارات قانونية', d: 'خطأ قبل الإرسال؟ كيتصحح بنفس الرقم. الفاتورة وصلات للعميل؟ أفوار AVO قانوني كيلغيها بجملة وحدة — قاعدة الضرائب، محترمة.' },
        { icon: 'star', t: 'الحصيلة ديالك، كل اثنين', d: 'رقم المعاملات، اللي دخل، التيفيا، اللي ما تخلصوش، أحسن عميل: الأرقام ديالك كتوصلك بوحدها فالواتساب. وفأي وقت كتب « bilan ».' },
        { icon: 'card', t: 'المصاريف بالتصويرة', d: 'صور تيكي ولا فاتورة ديال الشرا: المصروف كيتسجل، التيفيا القابلة للخصم كتحسب، والنتيجة ديال الشهر كتحين.' },
        { icon: 'check', t: 'ديفيات وبونات التسليم', d: 'ديفي DEV صالح 30 يوم، كيتحول لفاتورة بجملة وحدة ملي يقبل العميل. بونات تسليم BL بترقيم خاص.' },
        { icon: 'spark', t: 'فواتير متكررة', d: '« فوتر هادشي كل شهر » — الكراء والاشتراكات كيتصاوبو بوحدهم فالوقت، والPDF كيتصيفط، بلا ما تفكر فيهم.' },
        { icon: 'globe', t: 'إكسبور محاسبي بكلمة وحدة', d: '« export » : فيشي CSV شهري (الأرقام، العملاء، ICE، TVA، المداخيل) واجد تصيفطو للمحاسب ديالك.' },
        { icon: 'shield', t: 'بيانات معزولة لكل مقاولة', d: 'كل شركة عندها فضاء محكم: عملاؤها، ترقيمها، طابعها. استضافة فالاتحاد الأوروبي.' }
      ]
    },
    how: {
      title: '3 حركات. صفر تكوين.',
      sub: 'إلا كانت الفرق ديالك كتعرف تصيفط فوكال فالواتساب، راها عارفة تفوتر.',
      steps: [
        { t: 'دكتي', d: '« صاوب ليا فاتورة لكريم، تلاتة ديال البيبان بألف وخمسميا الوحدة »' },
        { t: 'صادق', d: 'البوت كيلخص بالصوت: السلعة، الثمن، المجموع. « واخا » — ولا صحح بكلمة.' },
        { t: 'صدرات', d: 'PDF بالطابع فالمحادثة. كتوصل للعميل بالـQR، الواتساب ولا الإيميل بجملة وحدة.' }
      ]
    },
    pricing: {
      title: 'تكلفة مضبوطة، على قياس النشاط ديالك',
      sub: 'قيّم مجانا. خلص على حساب حجم الفوترة ديالك.',
      free: { t: 'تقييم مجاني', d: 'جوج فواتير مجانية باش تختبر الأداة فظروف حقيقية — بلا بطاقة، بلا التزام.', cta: 'بدا التجربة' },
      permonth: '/ الشهر', invoices: 'فاتورة / الشهر', popular: 'الأكثر اختيارا', cta: 'ختار هاد العرض',
      note: 'الخلاص بالتحويل البنكي ولا نقدا، شهريا. التفعيل فدقائق، نيشان فالواتساب. حجم أكبر ولا حسابات متعددة؟ تواصل معنا.',
      plans: [
        { name: 'TPE', n: 15, price: 30 },
        { name: 'تجارة', n: 30, price: 50 },
        { name: 'مقاولة', n: 100, price: 90 }
      ]
    },
    faq: {
      title: 'أسئلة متكررة',
      items: [
        { q: 'بعض المتعاونين ديالنا كيقراو بصعوبة — واش هادي مشكلة؟', a: 'هادي بالضبط القوة ديال فاتورة بوت: كلشي بالصوت. الفرق ديالك كتهضر، البوت كيجاوب بالصوت، والمصادقة كتقال — « واخا ». وللسميات المعقدة، صورة ديال وثيقة كافية: السمية الصحيحة كتقرا وكتسجل.' },
        { q: 'واش الفواتير الصادرة قانونية؟', a: 'نعم. كل PDF فيه ICE، IF، الضريبة المهنية، TVA مفصلة، المبلغ بالحروف وترقيم متسلسل — الشكل اللي كينتظروه الخبراء المحاسبون والإدارة المغربية.' },
        { q: 'واش خاص نثبتو برنامج ولا نكوّنو الفرق؟', a: 'لا. فاتورة بوت كيخدم فالواتساب، المثبت أصلا فهواتف جميع المتعاونين ديالك. بلا تثبيت، بلا رخصة لكل جهاز، بلا تكوين.' },
        { q: 'كيفاش كيتوصلو العملاء ديالنا بالفواتير؟', a: 'ثلاث قنوات: كود QR للمسح، إرسال مباشر لواتسابهم، ولا الإيميل. كل إرسال خارجي مسبوق بتأكيد صريح (الرقم، العميل، المبلغ، المرسل إليه).' },
        { q: 'وشنو كيوقع فحالة خطأ فالإدخال؟', a: 'البوت كيلخص ديما قبل الإصدار، والتصحيح كيتقال بكلمة — حتى بعد الإصدار، الفاتورة كتصلح بنفس الرقم. وسجل العملاء كيقضي نهائيا على الأخطاء فالسميات.' },
        { q: 'كيفاش كيتم أداء ثمن الخدمة؟', a: 'بالتحويل البنكي ولا نقدا، شهريا. المسير كيجاوب « 15 »، « 30 » ولا « 100 » فالواتساب والحساب كيتفعل فنفس اليوم. محتاج حسابات متعددة ولا حجم أكبر؟ كتب لينا.' }
      ]
    },
    lead: {
      title: 'اعتمد فاتورة بوت فالمقاولة ديالك — ولا عند عملائك',
      sub: 'مكاتب المحاسبة، الائتمانيات، الفدراليات والتعاونيات: جهزو جميع المنخرطين ولا العملاء TPE/PME ديالكم، وحنا نتكلفو بالإدماج.',
      name: 'الاسم والشركة', email: 'الإيميل المهني', phone: 'الهاتف (اختياري)', msg: 'الحاجة ديالكم',
      send: 'إرسال', ok: 'شكرا! الفريق ديالنا غادي يتواصل معكم قريبا.', err: 'وقع خطأ — عاودو ولا كتبو لينا فالواتساب.'
    },
    footer: {
      tag: 'الفوترة اللي كتهضر بلغة الفرق ديالك.',
      privacy: 'سياسة الخصوصية', rights: 'جميع الحقوق محفوظة.', made: 'صُمم فالمغرب'
    },
    floating: 'جرب على الواتساب'
  },

  en: {
    meta: {
      title: 'Fatora-Bot — Voice invoicing on WhatsApp for Moroccan businesses',
      desc: 'Equip your business: your teams dictate an invoice on WhatsApp — in Darija, French or Amazigh — and a compliant PDF (ICE, IF, VAT) reaches your customer with your company stamp. No software, no training. Free trial.',
      kw: 'business invoicing morocco, whatsapp invoicing, darija invoice, morocco e-invoicing, SME invoicing software'
    },
    nav: { features: 'Features', how: 'How it works', pricing: 'Pricing', faq: 'FAQ', cta: 'Try for free' },
    hero: {
      badge: 'Voice invoicing on WhatsApp, built for Moroccan businesses',
      h1a: 'Your business invoices',
      h1b: 'by talking on WhatsApp',
      sub: 'Retail, services, workshops, transport, cooperatives: your teams dictate an invoice in Darija or French — "sayab liya fatora l Ahmed, 3 doors at 1500 dh" — and the company issues a compliant PDF (ICE, IF, VAT) with its stamp, in 30 seconds. No software to deploy, no training: WhatsApp is enough.',
      cta: 'Try it on WhatsApp', cta2: 'See pricing', trial: '2 invoices free to evaluate — no card, no commitment',
      stats: [
        { n: '30 s', l: 'from voice to issued PDF' },
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
      delivered: 'Invoice issued · stamp included'
    },
    langsec: {
      title: 'It speaks the way your teams and customers speak',
      sub: 'Sales staff, drivers, technicians, managers: everyone dictates in their own language — Darija in Arabic or Latin script, French, Tamazight — spoken or written. The bot always replies in the same language, and always with audio when spoken to.',
      chips: [
        { icon: 'mic', label: 'Spoken Darija' },
        { icon: 'voice', label: 'Latin Darija "fatora l Ahmed"' },
        { icon: 'globe', label: 'French' },
        { icon: 'globe', label: 'Tamazight ⵜⵉⴼⵉⵏⴰⵖ' },
        { icon: 'card', label: 'Riyal & melyoun understood' },
        { icon: 'check', label: 'Natural voice replies' }
      ]
    },
    features: {
      title: 'Everything invoicing software brings to your business.',
      sub: 'Without the software. Just WhatsApp.',
      items: [
        { icon: 'mic', t: 'Your teams dictate, it\'s invoiced', d: 'The AI understands spoken Darija, prices in riyal or melyoun, hesitations and corrections — "la, joj b 200" and the summary fixes itself instantly.' },
        { icon: 'file', t: 'Tax-authority-compliant PDF', d: 'ICE, IF, TP, itemized VAT, amount in words, continuous numbering per fiscal year: the format your accountant and the administration expect.' },
        { icon: 'stamp', t: 'Company stamp on every invoice', d: 'One photo of your stamp, once — automatically embedded on every PDF your teams issue.' },
        { icon: 'qr', t: 'Delivery by QR code', d: 'Your customer scans, the invoice downloads. On the salesperson\'s screen, printed at the register, or posted at the counter.' },
        { icon: 'send', t: 'WhatsApp & email delivery', d: 'The invoice goes straight to your customer — with an explicit confirmation before every send. Zero recipient errors.' },
        { icon: 'users', t: 'Shared customer directory', d: 'Exact spelling of every customer is remembered. Complex name? A photo of any document is enough — the exact name is read and stored.' },
        { icon: 'archive', t: 'Voice-driven archives', d: '"Invoice #8", "this month\'s invoices", "all of Ahmed\'s" — PDFs re-sent with audio summaries and period totals.' },
        { icon: 'edit', t: 'Compliant corrections & credit notes', d: 'Error before delivery? Fixed under the same number. Invoice already sent? A compliant AVO credit note cancels it in one sentence — the legal way.' },
        { icon: 'star', t: 'Your numbers, every Monday', d: 'Revenue, collected, VAT invoiced and collected, unpaid, top client: your figures arrive by themselves in WhatsApp. On demand with "bilan".' },
        { icon: 'card', t: 'Expenses by photo', d: 'Snap a receipt or purchase invoice: expense recorded, deductible VAT computed, monthly result (collected − expenses) updated.' },
        { icon: 'check', t: 'Quotes & delivery notes', d: 'DEV quotes valid 30 days, converted to invoices in one sentence when accepted. BL delivery notes with their own numbering.' },
        { icon: 'spark', t: 'Recurring invoices', d: '"Invoice this every month" — rents and subscriptions regenerate automatically on schedule, PDF delivered, hands-free.' },
        { icon: 'globe', t: 'One-word accounting export', d: '"export": the monthly CSV (numbers, clients, ICE, VAT, payments) ready for your accountant.' },
        { icon: 'shield', t: 'Data isolated per company', d: 'Each business gets a sealed space: its customers, numbering and stamp. EU hosting.' }
      ]
    },
    how: {
      title: '3 gestures. Zero training.',
      sub: 'If your teams can send a WhatsApp voice note, they already know how to invoice.',
      steps: [
        { t: 'Dictate', d: '"Sayab liya fatora l Karim, three doors at one thousand five hundred each"' },
        { t: 'Approve', d: 'The bot summarizes out loud: items, prices, total. "Wakha" — or correct with one word.' },
        { t: 'It\'s issued', d: 'Stamped PDF in the chat. Delivered to the customer by QR, WhatsApp or email in one sentence.' }
      ]
    },
    pricing: {
      title: 'Predictable cost, indexed to your activity',
      sub: 'Evaluate for free. Pay according to your invoicing volume.',
      free: { t: 'Free evaluation', d: '2 invoices on us to validate the tool in real conditions — no card, no commitment.', cta: 'Start the trial' },
      permonth: '/ month', invoices: 'invoices / month', popular: 'Most popular', cta: 'Choose this plan',
      note: 'Pay by bank transfer or cash, monthly. Activation within minutes, right inside WhatsApp. Higher volume or multiple accounts: contact us.',
      plans: [
        { name: 'Small biz', n: 15, price: 30 },
        { name: 'Commerce', n: 30, price: 50 },
        { name: 'Enterprise', n: 100, price: 90 }
      ]
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'Some of our staff struggle with reading — is that a problem?', a: 'That\'s exactly Fatora-Bot\'s strength: everything happens by voice. Your teams talk, the bot replies in audio, approval is spoken — "wakha". For complex customer names, a photo of any document is enough: the exact name is read and stored.' },
        { q: 'Are the issued invoices legally valid?', a: 'Yes. Every PDF carries the ICE, IF, professional tax, itemized VAT, the amount in words and continuous numbering — the format Moroccan chartered accountants and authorities expect.' },
        { q: 'Do we need to deploy software or train staff?', a: 'No. Fatora-Bot runs inside WhatsApp, already installed on every employee\'s phone. No installs, no per-seat licences, no training.' },
        { q: 'How do our customers receive their invoices?', a: 'Three channels: a QR code to scan, direct delivery to their WhatsApp, or email. Every external send is preceded by an explicit confirmation (number, customer, amount, recipient).' },
        { q: 'What happens if something is entered wrong?', a: 'The bot always summarizes before issuing, and a correction takes one word — even after issuance, the invoice is repaired under the same number. The customer directory permanently eliminates misspelled names.' },
        { q: 'How is the service billed?', a: 'Bank transfer or cash, monthly. Your manager replies "15", "30" or "100" inside WhatsApp and the account is activated the same day. Multiple accounts or higher volume? Write to us.' }
      ]
    },
    lead: {
      title: 'Deploy Fatora-Bot in your company — or across your client base',
      sub: 'Accounting firms, fiduciaries, federations and cooperatives: equip all your SME members or clients, we handle the rollout.',
      name: 'Name & company', email: 'Work email', phone: 'Phone (optional)', msg: 'Your needs',
      send: 'Send', ok: 'Thank you! Our team will get back to you shortly.', err: 'Something went wrong — try again or ping us on WhatsApp.'
    },
    footer: {
      tag: 'Invoicing that speaks your teams\' language.',
      privacy: 'Privacy policy', rights: 'All rights reserved.', made: 'Designed in Morocco'
    },
    floating: 'Try on WhatsApp'
  },

  es: {
    meta: {
      title: 'Fatora-Bot — Facturación por voz en WhatsApp para empresas marroquíes',
      desc: 'Equipa tu empresa: tus equipos dictan una factura por WhatsApp — en dariya, francés o amazigh — y un PDF conforme (ICE, IF, IVA) llega a tu cliente con el sello de la empresa. Sin software, sin formación. Prueba gratuita.',
      kw: 'facturación empresas marruecos, facturación whatsapp, factura dariya, facturación electrónica marruecos'
    },
    nav: { features: 'Funciones', how: 'Cómo funciona', pricing: 'Precios', faq: 'FAQ', cta: 'Probar gratis' },
    hero: {
      badge: 'Facturación por voz en WhatsApp, diseñada para empresas marroquíes',
      h1a: 'Tu empresa factura',
      h1b: 'hablando por WhatsApp',
      sub: 'Comercios, servicios, talleres, transporte, cooperativas: tus equipos dictan una factura en dariya o francés — «sayab liya fatora l Ahmed, 3 puertas a 1500 dh» — y la empresa emite un PDF conforme (ICE, IF, IVA) con su sello, en 30 segundos. Sin software que desplegar, sin formación: WhatsApp basta.',
      cta: 'Probar en WhatsApp', cta2: 'Ver precios', trial: '2 facturas gratis para evaluar — sin tarjeta, sin compromiso',
      stats: [
        { n: '30 s', l: 'de la voz al PDF emitido' },
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
      delivered: 'Factura emitida · sello incluido'
    },
    langsec: {
      title: 'Habla como hablan tus equipos y tus clientes',
      sub: 'Vendedores, conductores, técnicos, gerentes: cada uno dicta en su idioma — dariya en letras árabes o latinas, francés, tamazight — por voz o por escrito. El bot responde siempre en el mismo idioma, y siempre en audio cuando se le habla en audio.',
      chips: [
        { icon: 'mic', label: 'Dariya hablado' },
        { icon: 'voice', label: 'Dariya latino «fatora l Ahmed»' },
        { icon: 'globe', label: 'Francés' },
        { icon: 'globe', label: 'Tamazight ⵜⵉⴼⵉⵏⴰⵖ' },
        { icon: 'card', label: 'Riyal y melyoun comprendidos' },
        { icon: 'check', label: 'Respuestas de voz naturales' }
      ]
    },
    features: {
      title: 'Todo lo que un software de facturación aporta a tu empresa.',
      sub: 'Sin el software. Solo WhatsApp.',
      items: [
        { icon: 'mic', t: 'Tus equipos dictan, está facturado', d: 'La IA entiende el dariya hablado, precios en riyal o melyoun, dudas y correcciones — «la, joj b 200» y el resumen se corrige al instante.' },
        { icon: 'file', t: 'PDF conforme a Hacienda', d: 'ICE, IF, TP, IVA detallado, importe en letras, numeración continua por ejercicio: el formato que exigen tu contable y la administración.' },
        { icon: 'stamp', t: 'El sello de la empresa en cada factura', d: 'Una foto del sello, una sola vez — se incrusta automáticamente en todos los PDF que emiten tus equipos.' },
        { icon: 'qr', t: 'Entrega por código QR', d: 'Tu cliente escanea y la factura se descarga. En la pantalla del vendedor, impreso en caja o fijado en el mostrador.' },
        { icon: 'send', t: 'Envío por WhatsApp y email', d: 'La factura llega directa a tu cliente — con confirmación explícita antes de cada envío. Cero errores de destinatario.' },
        { icon: 'users', t: 'Directorio de clientes compartido', d: 'Se memoriza la ortografía exacta de cada cliente. ¿Nombre complejo? Basta la foto de un documento: el nombre exacto se lee y se guarda.' },
        { icon: 'archive', t: 'Archivo por voz', d: '«La factura n°8», «las de este mes», «todas las de Ahmed» — PDF reenviados con resumen de audio y totales del período.' },
        { icon: 'edit', t: 'Correcciones y abonos conformes', d: '¿Error antes de enviar? Se corrige con el mismo número. ¿Factura ya entregada? Un abono AVO conforme la anula en una frase — la regla fiscal, respetada.' },
        { icon: 'star', t: 'Tus cifras, cada lunes', d: 'Facturación, cobrado, IVA, impagados, mejor cliente: tus números llegan solos a WhatsApp. Bajo demanda con «bilan».' },
        { icon: 'card', t: 'Gastos por foto', d: 'Fotografía un ticket o factura de compra: gasto registrado, IVA deducible calculado, resultado del mes actualizado.' },
        { icon: 'check', t: 'Presupuestos y albaranes', d: 'Presupuestos DEV válidos 30 días, convertidos en factura con una frase. Albaranes BL con numeración propia.' },
        { icon: 'spark', t: 'Facturas recurrentes', d: '«Factura esto cada mes» — alquileres y suscripciones se regeneran solos a su vencimiento, PDF enviado.' },
        { icon: 'globe', t: 'Export contable en una palabra', d: '«export»: el CSV mensual (números, clientes, ICE, IVA, cobros) listo para tu contable.' },
        { icon: 'shield', t: 'Datos aislados por empresa', d: 'Cada sociedad tiene su espacio sellado: sus clientes, su numeración, su sello. Alojamiento en la UE.' }
      ]
    },
    how: {
      title: '3 gestos. Cero formación.',
      sub: 'Si tus equipos saben enviar un audio de WhatsApp, ya saben facturar.',
      steps: [
        { t: 'Dicta', d: '«Sayab liya fatora l Karim, tres puertas a mil quinientos cada una»' },
        { t: 'Valida', d: 'El bot resume en voz alta: artículos, precios, total. «Wakha» — o corrige con una palabra.' },
        { t: 'Emitida', d: 'PDF con sello en el chat. Entregada al cliente por QR, WhatsApp o email en una frase.' }
      ]
    },
    pricing: {
      title: 'Un coste previsible, indexado a tu actividad',
      sub: 'Evalúa gratis. Paga según tu volumen de facturación.',
      free: { t: 'Evaluación gratuita', d: '2 facturas de regalo para validar la herramienta en condiciones reales — sin tarjeta, sin compromiso.', cta: 'Empezar la prueba' },
      permonth: '/ mes', invoices: 'facturas / mes', popular: 'El más elegido', cta: 'Elegir este plan',
      note: 'Pago por transferencia o en efectivo, mensual. Activación en minutos, directamente en WhatsApp. ¿Mayor volumen o varias cuentas? Contáctanos.',
      plans: [
        { name: 'Pyme', n: 15, price: 30 },
        { name: 'Comercio', n: 30, price: 50 },
        { name: 'Empresa', n: 100, price: 90 }
      ]
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: 'Parte de nuestro personal lee con dificultad — ¿es un obstáculo?', a: 'Esa es precisamente la fuerza de Fatora-Bot: todo se hace por voz. Tus equipos hablan, el bot responde en audio, la validación se dice — «wakha». Para nombres complejos, basta la foto de un documento: el nombre exacto se lee y se guarda.' },
        { q: '¿Las facturas emitidas son legalmente válidas?', a: 'Sí. Cada PDF lleva el ICE, IF, la tasa profesional, el IVA detallado, el importe en letras y numeración continua — el formato que esperan los contables y la administración marroquí.' },
        { q: '¿Hay que desplegar software o formar al personal?', a: 'No. Fatora-Bot funciona dentro de WhatsApp, ya instalado en los teléfonos de todos tus colaboradores. Sin instalaciones, sin licencias por puesto, sin formación.' },
        { q: '¿Cómo reciben nuestros clientes sus facturas?', a: 'Tres canales: código QR para escanear, envío directo a su WhatsApp, o email. Cada envío externo va precedido de una confirmación explícita (número, cliente, importe, destinatario).' },
        { q: '¿Qué pasa si se introduce algo mal?', a: 'El bot siempre resume antes de emitir, y una corrección se dice con una palabra — incluso tras la emisión, la factura se repara con el mismo número. El directorio de clientes elimina definitivamente los nombres deformados.' },
        { q: '¿Cómo se factura el servicio?', a: 'Por transferencia bancaria o en efectivo, mensualmente. Tu gerente responde «15», «30» o «100» en WhatsApp y la cuenta se activa el mismo día. ¿Varias cuentas o mayor volumen? Escríbenos.' }
      ]
    },
    lead: {
      title: 'Despliega Fatora-Bot en tu empresa — o en tu cartera de clientes',
      sub: 'Despachos contables, gestorías, federaciones y cooperativas: equipad a todos vuestros miembros o clientes pyme, nosotros nos ocupamos de la integración.',
      name: 'Nombre y empresa', email: 'Email profesional', phone: 'Teléfono (opcional)', msg: 'Vuestra necesidad',
      send: 'Enviar', ok: '¡Gracias! Nuestro equipo os contactará muy pronto.', err: 'Algo falló — inténtalo de nuevo o escríbenos por WhatsApp.'
    },
    footer: {
      tag: 'La facturación que habla el idioma de tus equipos.',
      privacy: 'Política de privacidad', rights: 'Todos los derechos reservados.', made: 'Diseñado en Marruecos'
    },
    floating: 'Probar en WhatsApp'
  }
};
