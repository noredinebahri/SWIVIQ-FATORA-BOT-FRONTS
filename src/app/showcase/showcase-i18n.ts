import type { Lang } from '../i18n';

export interface ShowcaseDict {
  badge: string;
  title: string;
  sub: string;
  items: { t: string; d: string }[];
  ui: {
    client: string; article: string; unit: string; total: string;
    understood: string; stampLabel: string; scanning: string; downloaded: string;
    reading: string; saved: string; sameResult: string; directory: string;
    voiceNote: string; issued: string;
    shopLive: string; addedCart: string; orderTitle: string; shopReceived: string;
  };
}

export const SHOWCASE: Record<Lang, ShowcaseDict> = {
  fr: {
    badge: 'Démonstration en direct',
    title: 'Regardez le bot travailler',
    sub: 'Six capacités, six démonstrations animées : exactement ce que vivent vos équipes dans WhatsApp.',
    items: [
      { t: 'Dictée vocale en darija', d: 'Une note vocale suffit. L\'IA extrait le client, les articles, les quantités et les prix — même avec des hésitations ou des corrections en cours de phrase.' },
      { t: 'Facture PDF conforme', d: 'ICE, IF, taxe professionnelle, TVA détaillée, montant en toutes lettres et numérotation continue : le document sort complet et opposable.' },
      { t: 'Cachet de l\'entreprise', d: 'Une photo du cachet, une seule fois. Il est apposé automatiquement sur chaque facture émise par vos équipes.' },
      { t: 'Remise par QR code', d: 'Votre client scanne l\'écran du vendeur, la facture se télécharge. Sans email à saisir, sans application à installer.' },
      { t: 'Trois langues, un seul bot', d: 'Darija en lettres arabes ou latines, français, amazigh. Il répond toujours dans la langue de celui qui parle, à l\'écrit comme à la voix.' },
      { t: 'Mémoire des clients', d: 'Un nom compliqué ? Une photo d\'un document suffit : le nom exact est lu, enregistré et réutilisé pour toutes les factures suivantes.' },
      { t: 'Boutique WhatsApp + vitrine web', d: 'Vos produits photographiés deviennent un catalogue : vos clients parcourent, remplissent leur panier et commandent — dans WhatsApp ou depuis votre page boutique. La commande arrive prête à facturer, le stock se met à jour tout seul.' }
    ],
    ui: {
      client: 'Client', article: 'Article', unit: 'Prix unitaire', total: 'Total TTC',
      understood: 'Compris en 1,4 s', stampLabel: 'Cachet et signature', scanning: 'Scan en cours…',
      downloaded: 'Facture téléchargée', reading: 'Lecture du document…', saved: 'Nom exact enregistré',
      sameResult: 'Même facture, même résultat', directory: 'Répertoire clients',
      voiceNote: 'Note vocale', issued: 'Facture émise',
      shopLive: 'Boutique en ligne', addedCart: 'Ajouté au panier',
      orderTitle: 'Commande', shopReceived: 'Commande reçue — prête à facturer'
    }
  },
  ar: {
    badge: 'عرض حي',
    title: 'شوف البوت كيخدم',
    sub: 'ست إمكانيات، ست عروض متحركة: بالضبط هادشي اللي كتعيشو الفرق ديالك فالواتساب.',
    items: [
      { t: 'الإملاء الصوتي بالدارجة', d: 'غير رسالة صوتية. الذكاء الاصطناعي كيستخرج الكليان، السلع، الكميات والأثمنة — حتى مع التردد ولا التصحيح فوسط الجملة.' },
      { t: 'فاتورة PDF قانونية', d: 'ICE، IF، الضريبة المهنية، TVA مفصلة، المبلغ بالحروف وترقيم متسلسل: الوثيقة كتخرج كاملة ومعتمدة.' },
      { t: 'طابع الشركة', d: 'صورة وحدة للطابع، مرة وحدة. كيتحط أوتوماتيكيا فكل فاتورة كتصدرها الفرق ديالك.' },
      { t: 'التسليم بكود QR', d: 'الكليان كيسكاني الشاشة ديال البائع، والفاتورة كتتحمل. بلا إيميل، بلا تطبيق.' },
      { t: 'ثلاث لغات، بوت واحد', d: 'الدارجة بالحروف العربية ولا اللاتينية، الفرنسية، الأمازيغية. كيجاوب ديما بلغة اللي كيهضر، كتابة ولا صوت.' },
      { t: 'ذاكرة الكليان', d: 'سمية صعيبة؟ صورة ديال وثيقة كافية: السمية الصحيحة كتقرا، كتسجل، وكتستعمل فجميع الفواتير الجاية.' },
      { t: 'بوتيك واتساب + فيترينة ويب', d: 'البرودوي المصورين كيولّيو كاطالوغ: الكليان ديالك كيتصفحو، كيعمرو البانيي وكيطلبو — فالواتساب ولا من صفحة البوتيك ديالك. الطلبية كتوصلك واجدة للفوترة، والسطوك كيتحدث بوحدو.' }
    ],
    ui: {
      client: 'الكليان', article: 'السلعة', unit: 'ثمن الوحدة', total: 'المجموع مع الضريبة',
      understood: 'مفهوم ف 1.4 ثانية', stampLabel: 'الطابع والتوقيع', scanning: 'جاري المسح…',
      downloaded: 'الفاتورة تحملات', reading: 'قراءة الوثيقة…', saved: 'السمية الصحيحة تسجلات',
      sameResult: 'نفس الفاتورة، نفس النتيجة', directory: 'سجل الكليان',
      voiceNote: 'رسالة صوتية', issued: 'الفاتورة صدرات',
      shopLive: 'البوتيك خدامة', addedCart: 'تزاد للبانيي',
      orderTitle: 'الطلبية', shopReceived: 'الطلبية وصلات — واجدة للفوترة'
    }
  },
  en: {
    badge: 'Live demonstration',
    title: 'Watch the bot at work',
    sub: 'Six capabilities, six animated demonstrations: exactly what your teams experience inside WhatsApp.',
    items: [
      { t: 'Voice dictation in Darija', d: 'A voice note is enough. The AI extracts the customer, items, quantities and prices — even with hesitations or mid-sentence corrections.' },
      { t: 'Compliant PDF invoice', d: 'ICE, IF, professional tax, itemized VAT, amount in words and continuous numbering: the document comes out complete and enforceable.' },
      { t: 'Company stamp', d: 'One photo of your stamp, once. It is automatically applied to every invoice your teams issue.' },
      { t: 'Delivery by QR code', d: 'Your customer scans the salesperson\'s screen and the invoice downloads. No email to type, no app to install.' },
      { t: 'Three languages, one bot', d: 'Darija in Arabic or Latin script, French, Amazigh. It always answers in the speaker\'s language, written or spoken.' },
      { t: 'Customer memory', d: 'A tricky name? A photo of any document is enough: the exact name is read, stored and reused on every future invoice.' },
      { t: 'WhatsApp shop + web storefront', d: 'Your photographed products become a catalog: customers browse, fill a cart and order — inside WhatsApp or from your shop page. Orders arrive ready to invoice, stock updates itself.' }
    ],
    ui: {
      client: 'Customer', article: 'Item', unit: 'Unit price', total: 'Total incl. VAT',
      understood: 'Understood in 1.4 s', stampLabel: 'Stamp & signature', scanning: 'Scanning…',
      downloaded: 'Invoice downloaded', reading: 'Reading document…', saved: 'Exact name saved',
      sameResult: 'Same invoice, same result', directory: 'Customer directory',
      voiceNote: 'Voice note', issued: 'Invoice issued',
      shopLive: 'Shop live', addedCart: 'Added to cart',
      orderTitle: 'Order', shopReceived: 'Order received — ready to invoice'
    }
  },
  es: {
    badge: 'Demostración en directo',
    title: 'Mira el bot trabajar',
    sub: 'Seis capacidades, seis demostraciones animadas: exactamente lo que viven tus equipos dentro de WhatsApp.',
    items: [
      { t: 'Dictado por voz en dariya', d: 'Basta un audio. La IA extrae el cliente, los artículos, las cantidades y los precios — incluso con dudas o correcciones a media frase.' },
      { t: 'Factura PDF conforme', d: 'ICE, IF, tasa profesional, IVA detallado, importe en letras y numeración continua: el documento sale completo y válido.' },
      { t: 'Sello de la empresa', d: 'Una foto del sello, una sola vez. Se aplica automáticamente a cada factura que emiten tus equipos.' },
      { t: 'Entrega por código QR', d: 'Tu cliente escanea la pantalla del vendedor y la factura se descarga. Sin email que escribir, sin app que instalar.' },
      { t: 'Tres idiomas, un solo bot', d: 'Dariya en letras árabes o latinas, francés, amazigh. Responde siempre en el idioma de quien habla, por escrito o por voz.' },
      { t: 'Memoria de clientes', d: '¿Nombre complicado? Basta la foto de un documento: el nombre exacto se lee, se guarda y se reutiliza en todas las facturas siguientes.' },
      { t: 'Tienda WhatsApp + escaparate web', d: 'Tus productos fotografiados se convierten en catálogo: los clientes navegan, llenan su carrito y piden — en WhatsApp o desde tu página. El pedido llega listo para facturar y el stock se actualiza solo.' }
    ],
    ui: {
      client: 'Cliente', article: 'Artículo', unit: 'Precio unitario', total: 'Total con IVA',
      understood: 'Comprendido en 1,4 s', stampLabel: 'Sello y firma', scanning: 'Escaneando…',
      downloaded: 'Factura descargada', reading: 'Leyendo documento…', saved: 'Nombre exacto guardado',
      sameResult: 'Misma factura, mismo resultado', directory: 'Directorio de clientes',
      voiceNote: 'Mensaje de voz', issued: 'Factura emitida',
      shopLive: 'Tienda en línea', addedCart: 'Añadido al carrito',
      orderTitle: 'Pedido', shopReceived: 'Pedido recibido — listo para facturar'
    }
  }
};
