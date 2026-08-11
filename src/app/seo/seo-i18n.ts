import type { Lang } from '../i18n';

export interface SeoDict {
  title: string;
  intro: string;
  blocks: { h: string; p: string }[];
  sectorsTitle: string;
  sectorsIntro: string;
  sectors: { t: string; d: string }[];
  citiesTitle: string;
  cities: string;
  ctaText: string;
  ctaBtn: string;
}

export const SEO: Record<Lang, SeoDict> = {
  fr: {
    title: 'La facturation électronique au Maroc : ce qui change pour votre entreprise',
    intro:
      'La Direction Générale des Impôts déploie progressivement la facturation électronique obligatoire au Maroc. Comprendre le calendrier, les mentions exigées et les outils disponibles permet à toute entreprise — de l’auto-entrepreneur à la PME — d’anticiper sans se perdre dans des logiciels coûteux.',
    blocks: [
      {
        h: 'Le mandat DGI et son calendrier',
        p: 'La base légale figure à l’article 145-IX du Code Général des Impôts, renforcé par les lois de finances successives. Le modèle retenu est celui de la validation préalable : chaque facture sera transmise à une plateforme nationale avant d’être juridiquement valable, dans des formats structurés de type UBL. Le déploiement commence par les grandes entreprises, se poursuit avec les PME et ETI, puis s’étend aux très petites entreprises avec des solutions simplifiées. Préparer ses processus dès maintenant évite une mise en conformité dans l’urgence.'
      },
      {
        h: 'Les mentions obligatoires d’une facture marocaine',
        p: 'Une facture conforme comporte l’identité complète du vendeur et de l’acheteur, l’Identifiant Commun de l’Entreprise (ICE) à quinze chiffres, l’identifiant fiscal (IF), le numéro de taxe professionnelle, la date d’émission, un numéro séquentiel continu et sans rupture, le détail des biens ou prestations, le prix unitaire hors taxe, le taux de TVA applicable (20 %, 14 %, 10 % ou 7 % selon l’activité), le montant de la taxe, le total toutes taxes comprises et le montant arrêté en toutes lettres. L’absence d’une seule de ces mentions expose l’entreprise à un rejet de la déduction de TVA chez son client.'
      },
      {
        h: 'Pourquoi WhatsApp plutôt qu’un logiciel de facturation',
        p: 'Au Maroc, WhatsApp est déjà installé sur pratiquement tous les téléphones professionnels : aucun déploiement, aucune licence par poste, aucune formation. Là où un logiciel classique suppose un ordinateur, une saisie au clavier et la maîtrise de l’écrit, la facturation vocale permet à un gérant, un vendeur ou un chauffeur de dicter la facture en darija depuis le terrain, puis de la remettre au client par QR code, WhatsApp ou courriel. Pour les entreprises dont une partie des équipes lit difficilement, c’est souvent la seule voie réaliste vers la conformité.'
      }
    ],
    sectorsTitle: 'Des entreprises de tous secteurs facturent déjà à la voix',
    sectorsIntro:
      'Fatora-Bot s’adapte au vocabulaire de chaque métier : les désignations sont traduites en français professionnel sur le PDF, quelle que soit la langue employée par vos équipes.',
    sectors: [
      { t: 'Commerce de détail et grossistes', d: 'Facturation au comptoir en quelques secondes, remise du document par QR code sans saisir d’adresse email.' },
      { t: 'Menuiserie, ferronnerie, BTP', d: 'Devis convertis en factures depuis le chantier, prix au mètre ou à l’unité, pose et main-d’œuvre détaillées.' },
      { t: 'Transport et logistique', d: 'Le chauffeur dicte la course à la livraison ; la facture part chez le client avant même son retour au dépôt.' },
      { t: 'Services et professions libérales', d: 'Honoraires, prestations récurrentes et TVA au bon taux, avec un numéro de série continu pour le comptable.' },
      { t: 'Coopératives et agriculture', d: 'Facturation des livraisons aux collecteurs, en darija ou en amazigh, sans passer par le bureau.' },
      { t: 'Artisanat et couture', d: 'Travaux sur mesure, quantités variables, prix en riyal ou en dirham : l’unité est toujours confirmée avant émission.' },
      { t: 'Restauration et traiteurs', d: 'Factures d’événements et de commandes groupées, avec cachet de l’établissement sur chaque document.' },
      { t: 'Cabinets comptables et fiduciaires', d: 'Équipez vos clients TPE d’un canal unique : leurs factures arrivent déjà conformes et numérotées.' }
    ],
    citiesTitle: 'Disponible partout au Maroc',
    cities:
      'Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir, Meknès, Oujda, Kénitra, Tétouan, Salé, Safi, El Jadida, Béni Mellal, Nador, Laâyoune, Mohammédia, Khouribga, Essaouira, Ouarzazate — et partout où WhatsApp fonctionne, y compris pour les entreprises marocaines établies à l’étranger.',
    ctaText: 'Deux factures offertes pour évaluer le service dans vos conditions réelles.',
    ctaBtn: 'Démarrer sur WhatsApp'
  },

  ar: {
    title: 'الفوترة الإلكترونية بالمغرب: أشنو غادي يتبدل بالنسبة للمقاولة ديالك',
    intro:
      'المديرية العامة للضرائب كتعمم بالتدريج الفوترة الإلكترونية الإجبارية فالمغرب. فهم الروزنامة، والبيانات المطلوبة، والأدوات المتاحة كيخلي كل مقاولة — من المقاول الذاتي حتى المقاولة الصغرى والمتوسطة — تستعد بدري بلا ما تدخل فبرامج غالية.',
    blocks: [
      {
        h: 'إلزامية الضرائب والروزنامة ديالها',
        p: 'الأساس القانوني كاين فالمادة 145-IX من المدونة العامة للضرائب، معززة بقوانين المالية المتتالية. النموذج المعتمد هو المصادقة القبلية: كل فاتورة غادي تمر عبر منصة وطنية قبل ما تكون صالحة قانونيا، بصيغ مهيكلة من نوع UBL. التطبيق كيبدا بالمقاولات الكبيرة، ومن بعد المقاولات الصغرى والمتوسطة، وفالأخير المقاولات الصغيرة جدا بحلول مبسطة. تحضير المساطر من دابا كيجنب المقاولة الضغط ديال آخر لحظة.'
      },
      {
        h: 'البيانات الإجبارية فالفاتورة المغربية',
        p: 'الفاتورة القانونية فيها الهوية الكاملة ديال البائع والمشتري، المعرف الموحد للمقاولة (ICE) ب 15 رقم، الرقم الضريبي (IF)، رقم الضريبة المهنية، تاريخ الإصدار، رقم تسلسلي متصل بلا انقطاع، تفصيل السلع ولا الخدمات، الثمن ديال الوحدة بلا ضريبة، نسبة TVA المطبقة (20% ولا 14% ولا 10% ولا 7% حسب النشاط)، مبلغ الضريبة، المجموع مع جميع الضرائب، والمبلغ مكتوب بالحروف. نقصان واحد من هاد البيانات كيعرض المقاولة لرفض خصم TVA عند الكليان ديالها.'
      },
      {
        h: 'علاش الواتساب بدل برنامج الفوترة',
        p: 'فالمغرب، الواتساب راه مثبت تقريبا فجميع الهواتف المهنية: بلا تنصيب، بلا رخصة لكل جهاز، بلا تكوين. البرنامج التقليدي كيتطلب حاسوب، وكتابة بالكلافي، والتحكم فالقراءة والكتابة؛ أما الفوترة بالصوت فكتخلي المسير، البائع ولا السائق يدكتي الفاتورة بالدارجة من الميدان، ومن بعد يسلمها للكليان بكود QR، بالواتساب ولا بالإيميل. للمقاولات اللي جزء من الفرق ديالها كيقرا بصعوبة، هادي غالبا الطريق الوحيدة الواقعية نحو الامتثال.'
      }
    ],
    sectorsTitle: 'مقاولات من جميع القطاعات كتفوتر بالصوت',
    sectorsIntro:
      'فاتورة بوت كيتأقلم مع المصطلحات ديال كل حرفة: التسميات كتترجم للفرنسية المهنية فالـPDF، مهما كانت اللغة اللي كتستعملها الفرق ديالك.',
    sectors: [
      { t: 'التجارة بالتقسيط والجملة', d: 'فوترة فالمحل فثواني، وتسليم الوثيقة بكود QR بلا ما تكتب أي إيميل.' },
      { t: 'النجارة، الحدادة والبناء', d: 'تحويل الأثمنة لفواتير من الورش، ثمن بالمتر ولا بالوحدة، مع تفصيل التركيب واليد العاملة.' },
      { t: 'النقل واللوجستيك', d: 'السائق كيدكتي الخدمة عند التسليم؛ والفاتورة كتوصل للكليان قبل حتى ما يرجع للمستودع.' },
      { t: 'الخدمات والمهن الحرة', d: 'الأتعاب والخدمات المتكررة مع النسبة الصحيحة ديال TVA، وترقيم متصل للمحاسب.' },
      { t: 'التعاونيات والفلاحة', d: 'فوترة التسليمات للمجمعين، بالدارجة ولا بالأمازيغية، بلا ما تمر من المكتب.' },
      { t: 'الصناعة التقليدية والخياطة', d: 'أشغال على المقاس، كميات متغيرة، أثمنة بالريال ولا بالدرهم: الوحدة كتتأكد ديما قبل الإصدار.' },
      { t: 'المطاعم والتموين', d: 'فواتير الحفلات والطلبيات الكبيرة، بطابع المؤسسة فكل وثيقة.' },
      { t: 'مكاتب المحاسبة والائتمانيات', d: 'جهزو الكليان TPE ديالكم بقناة واحدة: الفواتير ديالهم كتوصل قانونية ومرقمة.' }
    ],
    citiesTitle: 'متاح فجميع أنحاء المغرب',
    cities:
      'الدار البيضاء، الرباط، مراكش، فاس، طنجة، أكادير، مكناس، وجدة، القنيطرة، تطوان، سلا، آسفي، الجديدة، بني ملال، الناظور، العيون، المحمدية، خريبكة، الصويرة، ورزازات — وفكل بلاصة كيخدم فيها الواتساب، حتى للمقاولات المغربية فالخارج.',
    ctaText: 'جوج فواتير مجانية باش تقيّم الخدمة فالظروف الحقيقية ديالك.',
    ctaBtn: 'بدا على الواتساب'
  },

  en: {
    title: 'E-invoicing in Morocco: what changes for your business',
    intro:
      'Morocco’s tax authority (DGI) is progressively rolling out mandatory electronic invoicing. Understanding the timeline, the required legal mentions and the available tools lets any business — from sole traders to mid-sized companies — get ready without investing in costly software.',
    blocks: [
      {
        h: 'The DGI mandate and its timeline',
        p: 'The legal basis sits in article 145-IX of the General Tax Code, reinforced by successive finance acts. Morocco adopted a clearance model: each invoice will be transmitted to a national platform before becoming legally valid, in structured formats such as UBL. The rollout starts with large enterprises, continues with SMEs and mid-caps, then extends to very small businesses through simplified solutions. Preparing processes early avoids a rushed compliance project later.'
      },
      {
        h: 'Mandatory mentions on a Moroccan invoice',
        p: 'A compliant invoice carries the full identity of seller and buyer, the fifteen-digit Common Enterprise Identifier (ICE), the tax identifier (IF), the professional tax number, the issue date, a continuous sequential number with no gaps, a breakdown of goods or services, the unit price excluding tax, the applicable VAT rate (20%, 14%, 10% or 7% depending on the activity), the tax amount, the total including tax and the amount written in words. A single missing mention can lead your customer’s VAT deduction to be rejected.'
      },
      {
        h: 'Why WhatsApp instead of invoicing software',
        p: 'In Morocco, WhatsApp is already installed on virtually every business phone: no deployment, no per-seat licence, no training. Where traditional software assumes a computer, keyboard entry and literacy, voice invoicing lets an owner, salesperson or driver dictate the invoice in Darija from the field, then hand it to the customer via QR code, WhatsApp or email. For companies whose staff struggle with written text, it is often the only realistic path to compliance.'
      }
    ],
    sectorsTitle: 'Businesses across every sector already invoice by voice',
    sectorsIntro:
      'Fatora-Bot adapts to each trade’s vocabulary: item descriptions are rendered in professional French on the PDF, whatever language your teams speak.',
    sectors: [
      { t: 'Retail and wholesale', d: 'Counter invoicing in seconds, document handed over by QR code without typing any email address.' },
      { t: 'Carpentry, metalwork, construction', d: 'Quotes turned into invoices from the site, prices per metre or per unit, installation and labour itemized.' },
      { t: 'Transport and logistics', d: 'The driver dictates the job on delivery; the invoice reaches the customer before he is back at the depot.' },
      { t: 'Professional services', d: 'Fees and recurring work with the correct VAT rate and continuous numbering for the accountant.' },
      { t: 'Cooperatives and agriculture', d: 'Invoicing deliveries to collectors, in Darija or Amazigh, without going through an office.' },
      { t: 'Crafts and tailoring', d: 'Bespoke work, variable quantities, prices in riyal or dirham: the unit is always confirmed before issuing.' },
      { t: 'Catering and events', d: 'Event and bulk-order invoices, with the establishment’s stamp on every document.' },
      { t: 'Accounting firms', d: 'Equip your small-business clients with a single channel: their invoices arrive already compliant and numbered.' }
    ],
    citiesTitle: 'Available across Morocco',
    cities:
      'Casablanca, Rabat, Marrakech, Fez, Tangier, Agadir, Meknes, Oujda, Kenitra, Tetouan, Salé, Safi, El Jadida, Beni Mellal, Nador, Laayoune, Mohammedia, Khouribga, Essaouira, Ouarzazate — and anywhere WhatsApp works, including Moroccan businesses operating abroad.',
    ctaText: 'Two free invoices to evaluate the service under your real conditions.',
    ctaBtn: 'Start on WhatsApp'
  },

  es: {
    title: 'La facturación electrónica en Marruecos: qué cambia para tu empresa',
    intro:
      'La Dirección General de Impuestos de Marruecos despliega progresivamente la facturación electrónica obligatoria. Entender el calendario, las menciones exigidas y las herramientas disponibles permite a cualquier empresa —del autónomo a la pyme— anticiparse sin invertir en software costoso.',
    blocks: [
      {
        h: 'El mandato de la DGI y su calendario',
        p: 'La base legal está en el artículo 145-IX del Código General de Impuestos, reforzado por sucesivas leyes de finanzas. Marruecos adoptó un modelo de validación previa: cada factura se transmitirá a una plataforma nacional antes de ser jurídicamente válida, en formatos estructurados tipo UBL. El despliegue empieza por las grandes empresas, sigue con pymes y empresas medianas, y se extiende después a las microempresas mediante soluciones simplificadas. Preparar los procesos con antelación evita una puesta en conformidad de urgencia.'
      },
      {
        h: 'Menciones obligatorias en una factura marroquí',
        p: 'Una factura conforme incluye la identidad completa de vendedor y comprador, el Identificador Común de Empresa (ICE) de quince dígitos, el identificador fiscal (IF), el número de tasa profesional, la fecha de emisión, un número secuencial continuo y sin saltos, el detalle de los bienes o servicios, el precio unitario sin impuestos, el tipo de IVA aplicable (20 %, 14 %, 10 % o 7 % según la actividad), el importe del impuesto, el total con impuestos y el importe en letras. La falta de una sola de estas menciones puede provocar el rechazo de la deducción del IVA en tu cliente.'
      },
      {
        h: 'Por qué WhatsApp en lugar de un software de facturación',
        p: 'En Marruecos, WhatsApp ya está instalado en prácticamente todos los teléfonos profesionales: sin despliegue, sin licencias por puesto, sin formación. Donde un software clásico exige un ordenador, teclear y dominar la escritura, la facturación por voz permite que un gerente, un vendedor o un conductor dicte la factura en dariya desde el terreno y la entregue al cliente por código QR, WhatsApp o correo electrónico. Para empresas cuyo personal lee con dificultad, suele ser la única vía realista hacia el cumplimiento.'
      }
    ],
    sectorsTitle: 'Empresas de todos los sectores ya facturan por voz',
    sectorsIntro:
      'Fatora-Bot se adapta al vocabulario de cada oficio: las designaciones se traducen a un francés profesional en el PDF, sea cual sea el idioma que hablen tus equipos.',
    sectors: [
      { t: 'Comercio minorista y mayorista', d: 'Facturación en mostrador en segundos y entrega del documento por código QR sin escribir ningún email.' },
      { t: 'Carpintería, herrería y construcción', d: 'Presupuestos convertidos en facturas desde la obra, precios por metro o por unidad, instalación y mano de obra detalladas.' },
      { t: 'Transporte y logística', d: 'El conductor dicta el servicio en la entrega; la factura llega al cliente antes de que vuelva al almacén.' },
      { t: 'Servicios y profesiones liberales', d: 'Honorarios y trabajos recurrentes con el tipo de IVA correcto y numeración continua para el contable.' },
      { t: 'Cooperativas y agricultura', d: 'Facturación de entregas a los recolectores, en dariya o amazigh, sin pasar por la oficina.' },
      { t: 'Artesanía y costura', d: 'Trabajos a medida, cantidades variables, precios en riyal o dirham: la unidad siempre se confirma antes de emitir.' },
      { t: 'Restauración y catering', d: 'Facturas de eventos y pedidos agrupados, con el sello del establecimiento en cada documento.' },
      { t: 'Despachos contables', d: 'Equipa a tus clientes pyme con un canal único: sus facturas llegan ya conformes y numeradas.' }
    ],
    citiesTitle: 'Disponible en todo Marruecos',
    cities:
      'Casablanca, Rabat, Marrakech, Fez, Tánger, Agadir, Mequinez, Uchda, Kenitra, Tetuán, Salé, Safi, El Jadida, Beni Melal, Nador, El Aaiún, Mohammedia, Juribga, Esauira, Uarzazate — y en cualquier lugar donde funcione WhatsApp, incluidas las empresas marroquíes en el extranjero.',
    ctaText: 'Dos facturas gratuitas para evaluar el servicio en tus condiciones reales.',
    ctaBtn: 'Empezar en WhatsApp'
  }
};
