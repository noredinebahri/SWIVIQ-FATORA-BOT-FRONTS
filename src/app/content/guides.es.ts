import type { Article } from './types';

/**
 * Contenido editorial en español — solo las guías para desarrolladores.
 * Las guías para comerciantes siguen en fr/ar; el público integrador lee
 * también en español, así que estas dos páginas existen en los cuatro
 * idiomas del sitio con los mismos slugs (pares hreflang).
 */
export const GUIDES_ES: Article[] = [
  {
    // Slug identique aux autres langues : l'appariement hreflang et le
    // sélecteur de langue se font par slug strictement égal.
    slug: 'api-facturation-maroc',
    section: 'guides',
    lang: 'es',
    metaTitle: 'API de facturación en Marruecos: guía del integrador',
    metaDesc:
      'Añade facturación marroquí conforme (ICE, IVA, numeración continua) a un SaaS, CRM o sitio web: qué exige la ley, las opciones técnicas comparadas y cómo una API dedicada lo hace en una llamada HTTP.',
    keywords:
      'api facturación marruecos, api factura marruecos, integrar facturación marruecos, facturación saas marruecos, api presupuesto marruecos',
    title: 'API de facturación en Marruecos: emite facturas conformes desde tu aplicación',
    intro:
      'Tu SaaS, CRM o plataforma de e-commerce sirve a clientes marroquíes, y necesitan facturas conformes. Construir un módulo de facturación marroquí por tu cuenta es un proyecto en sí mismo — menciones legales, numeración, IVA, regímenes fiscales, e-facturación en camino. Esto es lo que exige la ley, las opciones técnicas que existen realmente, y cómo una API de facturación dedicada lo reduce todo a una llamada HTTP.',
    answer:
      'Una API de facturación en Marruecos permite a cualquier aplicación (SaaS, CRM, e-commerce, ERP) emitir facturas y presupuestos conformes con el código fiscal marroquí — ICE, identificador fiscal, IVA detallado, importe en letras, numeración continua — mediante una simple llamada HTTP, sin construir un módulo de facturación. La API de Fatora está incluida en todos los planes, con entrega por WhatsApp, email o código QR.',
    blocks: [
      {
        h: 'Por qué la facturación marroquí no se improvisa',
        p: [
          'Una factura marroquí válida no es un simple PDF con un total. El artículo 145 del Código General de Impuestos impone una lista precisa de menciones: ICE e identificador fiscal del emisor, tasa profesional, ICE del cliente en B2B, IVA detallado por tipo, importe escrito en letras, y una numeración continua y cronológica sin huecos. Una factura incompleta puede ser rechazada por el cliente y en una inspección fiscal.',
          'A eso se suman los regímenes especiales: un auto-emprendedor (ley 114-13) factura fuera del ámbito del IVA con una mención obligatoria; una empresa exenta lleva una mención distinta; los tipos de IVA se redujeron a 20% y 10% desde 2026. Y la e-facturación obligatoria (modelo de validación previa) llega por oleadas — cada factura deberá pasar por la plataforma nacional.',
          'Para un editor de software cuyo negocio no es la facturación, mantener todo eso al día con cada ley de finanzas es un coste recurrente, no un desarrollo puntual. Es exactamente el tipo de pieza que se delega.'
        ]
      },
      {
        h: 'Las tres opciones técnicas, comparadas',
        p: [
          'Un integrador que debe producir facturas marroquíes desde su aplicación tiene tres caminos.'
        ],
        table: {
          head: ['Opción', 'Esfuerzo inicial', 'Conformidad', 'Mantenimiento'],
          rows: [
            ['Desarrollar su propio módulo (PDF casero)', 'Semanas o meses', 'A tu cargo, con cada ley de finanzas', 'Permanente: tipos, menciones, e-facturación'],
            ['Generador de PDF genérico internacional', 'Días', 'Ninguna: sin ICE, sin IVA marroquí, sin numeración legal', 'Baja, pero el resultado no es una factura conforme'],
            ['API de facturación marroquí (Fatora)', 'Una hora — una llamada HTTP', 'A cargo de la API: menciones del art. 145, regímenes, tipos al día', 'Ninguno para el integrador']
          ]
        },
        note:
          'El punto que suele olvidarse: la numeración. Una secuencia FAT-2026-0001, 0002, 0003 sin huecos pertenece al comerciante, no a tu aplicación. Una API multi-cuenta seria mantiene una secuencia por cuenta — eso es lo que hace el documento oponible.'
      },
      {
        h: 'Cómo funciona la API de Fatora',
        p: [
          'Cada comerciante de Fatora tiene una clave API personal, que obtiene escribiendo «api» a su bot de WhatsApp. Tu aplicación guarda esa clave y emite en su nombre: la factura sale con SU numeración, SU sello, SU logo y SU régimen fiscal — que tu código ni siquiera necesita conocer, la API lo impone por sí misma.',
          'Una llamada POST /v1/documents con el cliente y las líneas basta: la API calcula el IVA, genera el PDF y lo entrega por WhatsApp, email o mediante un código QR para mostrar o imprimir. La modificación se hace en texto libre: tu usuario escribe «sustituye la formación por 3 días a 1200 dh» en un campo de texto, y la IA aplica la corrección sobre el mismo número de factura.',
          'La documentación completa, con ejemplos probados en producción para cada endpoint, está en la página API del sitio (menú «API»). Todo va incluido en el plan del comerciante, desde la prueba gratuita — los presupuestos ni siquiera consumen la cuota.'
        ]
      },
      {
        h: 'Quién gana integrando una API de facturación',
        p: [
          'Los casos de uso vuelven siempre a los mismos perfiles:'
        ],
        list: [
          'Editores SaaS y CRM marroquíes: un botón «Facturar» en tu interfaz, con la conformidad incluida, sin escribir el módulo.',
          'Plataformas de e-commerce y marketplaces: factura automática con cada pedido, entregada por email o con un QR en el albarán.',
          'Agencias web: ofrece facturación conforme a tus clientes comerciantes sin desarrollar ni mantener nada.',
          'ERPs verticales (transporte, construcción, distribución): tus usuarios facturan desde la herramienta que ya usan.',
          'Software de caja: ticket + código QR de la factura impresos juntos — el cliente escanea y se va con su factura.'
        ]
      },
      {
        h: '¿Y la e-facturación obligatoria?',
        p: [
          'Es el argumento decisivo para delegar en lugar de construir. Cuando la plataforma nacional de validación previa active el segmento de tus clientes, cada factura deberá transmitirse en formato estructurado y validarse antes de ser oponible. Si tu aplicación genera sus propios PDF, esa conexión será tu proyecto. Si pasa por una API de facturación, es el proveedor de la API quien se conecta — una vez, para todos sus integradores.',
          'Emitir desde hoy documentos estructurados, completos y bien numerados a través de una API es exactamente el estado en el que conviene estar el día en que llegue el cambio.'
        ]
      }
    ],
    faq: [
      {
        q: '¿Cuánto cuesta integrar la API de Fatora?',
        a: 'Nada para el integrador. La API está incluida en todos los planes de Fatora, prueba gratuita incluida. Cada comerciante paga su propia suscripción (desde 30 MAD/mes) y las facturas API cuentan en su cuota; los presupuestos son gratuitos e ilimitados.'
      },
      {
        q: '¿Mi aplicación debe gestionar los tipos de IVA y los regímenes fiscales?',
        a: 'No. El régimen fiscal del comerciante (normal, auto-emprendedor, exento) está registrado en su cuenta de Fatora y la API lo impone: un auto-emprendedor siempre obtendrá facturas sin IVA y con la mención legal, envíe lo que envíe tu aplicación. Puedes fijar un tipo por línea si hace falta.'
      },
      {
        q: '¿Cómo recibe el cliente final su factura?',
        a: 'Tres canales, combinables: WhatsApp (el PDF llega a su conversación), email (mensaje con la factura adjunta), o código QR (cada documento expone una imagen PNG para mostrar en caja o imprimir — el cliente escanea y descarga). Un documento perdido se reenvía en una llamada.'
      },
      {
        q: '¿Funciona con un software extranjero sin nada marroquí?',
        a: 'Sí — es el caso típico: el software extranjero mantiene su lógica de negocio y llama a la API al facturar a un cliente marroquí. Toda la conformidad local — menciones, numeración, IVA, idioma del documento — la lleva la API.'
      }
    ],
    related: ['generer-facture-pdf-api'],
    updated: '2026-08-15',
    readMin: 8
  },

  {
    slug: 'generer-facture-pdf-api',
    section: 'guides',
    lang: 'es',
    metaTitle: 'Generar factura PDF por API: tutorial Marruecos 2026',
    metaDesc:
      'Genera una factura PDF conforme con una llamada HTTP: obtener la clave, emitir el documento, gestionar IVA e importes con impuestos, entregar por WhatsApp, email o código QR. Paso a paso, con ejemplos probados.',
    keywords:
      'generar factura pdf api, crear factura automática api, api generación factura, factura pdf automática marruecos',
    title: 'Generar una factura PDF por API: el tutorial paso a paso',
    intro:
      'Quieres que un clic en tu aplicación produzca una verdadera factura marroquí — PDF conforme, numerado, con sello — y que llegue al cliente. Este es el recorrido completo con la API de Fatora, desde la primera llamada hasta la entrega, tal como funciona en producción.',
    answer:
      'Para generar una factura PDF por API en Marruecos: obtener la clave API del comerciante (escribe «api» a su bot de WhatsApp de Fatora), y enviar un POST a bot.swiviq.com/v1/documents con el cliente y las líneas. La API calcula el IVA, genera un PDF conforme numerado en la secuencia del comerciante, y lo entrega por WhatsApp, email o código QR.',
    blocks: [
      {
        h: 'Paso 1 — la clave API, sin registro de desarrollador',
        p: [
          'No hay consola de desarrollador ni validación manual. El comerciante abre su conversación de WhatsApp con Fatora-Bot y escribe «api»: el bot responde con su clave personal, en formato fk_ seguido de 40 caracteres. Esa es la clave que tu aplicación guarda y pasa en la cabecera Authorization: Bearer.',
          'La clave es propia de cada comerciante: emite en SU numeración y solo ve SUS documentos. «api reset» la regenera en cualquier momento — la antigua queda revocada de inmediato. Un GET /v1/account es la forma más simple de comprobar que una clave pegada por el usuario es válida: devuelve el perfil de empresa, el plan y la cuota restante.'
        ]
      },
      {
        h: 'Paso 2 — emitir el documento',
        p: [
          'Una sola llamada: POST /v1/documents, con el nombre del cliente (y su ICE en B2B), y las líneas — descripción, cantidad, precio unitario. La API calcula el IVA línea a línea, aplica el régimen fiscal del comerciante, genera el PDF con logo y sello, y responde 201 con el número asignado, los totales, el enlace del PDF y la URL de un código QR.',
          'Dos opciones cambian el día a día. "type": "quote" emite un presupuesto (numerado DEV-, válido 30 días, fuera de la cuota) en lugar de una factura. "priceIsTtc": true indica que tus importes llevan impuestos: la API reconstruye la base sin impuestos por sí misma — imprescindible cuando tus precios de venta se muestran con IVA.',
          'Para corregir un documento ya emitido, no hay esquema de actualización que aprender: el endpoint de modificación acepta una instrucción en texto libre («sustituye la formación por 3 días a 1200 dh el día») y la aplica sobre el mismo número, con PDF regenerado y totales recalculados.'
        ],
        note:
          'La numeración sigue siendo continua: modificar nunca crea un hueco en la secuencia, y anular pasa por una factura de abono — como exige la normativa marroquí.'
      },
      {
        h: 'Paso 3 — entregar la factura al cliente',
        p: [
          'Generar el PDF no sirve de nada si el cliente no lo recibe. Hay tres canales disponibles, al crear (campos "sendToPhone" y "sendToEmail") o después mediante el endpoint de envío:'
        ],
        list: [
          'WhatsApp: el PDF llega a la conversación del cliente, a nombre del comerciante.',
          'Email: un mensaje cuidado con la factura adjunta.',
          'Código QR: cada documento expone una imagen PNG pública — muéstrala en caja, imprímela en el ticket, el cliente escanea y descarga su factura.'
        ]
      },
      {
        h: 'Los errores que tu código debe gestionar',
        p: [
          'La API devuelve siempre un JSON con dos campos: "error" (código máquina estable) y "message" (explicación mostrable tal cual). Cuatro casos merecen un tratamiento específico en tu interfaz: el 402 cuota alcanzada (la respuesta lleva used y limit — muéstralos, el comerciante sube de plan en dos mensajes de WhatsApp), el 401 clave inválida (a menudo una clave regenerada con «api reset» — pide la nueva), el 422 instrucción no entendida (propón reformular, nada fue modificado), y el 429 por encima de 60 peticiones por minuto (encola y reintenta).',
          'La lista completa de códigos, cada uno con un ejemplo de respuesta, está en la página API del sitio — cada ejemplo fue reproducido contra la API de producción.'
        ]
      }
    ],
    faq: [
      {
        q: '¿Necesito una cuenta de desarrollador o una validación para usar la API?',
        a: 'No. La clave se obtiene escribiendo «api» al bot de WhatsApp de la cuenta de Fatora en cuestión, en segundos. No hay consola, ni contrato, ni coste: la API está incluida en todos los planes, prueba gratuita incluida.'
      },
      {
        q: '¿El PDF generado resiste realmente una inspección fiscal?',
        a: 'El PDF lleva las menciones del artículo 145 del código fiscal: ICE, identificador fiscal, tasa profesional, IVA detallado, importe en letras, numeración continua, y las menciones de régimen (auto-emprendedor, exento) cuando aplican. El sello y el logo del comerciante se aplican automáticamente.'
      },
      {
        q: '¿Puedo emitir presupuestos y convertirlos en facturas?',
        a: 'Sí. "type": "quote" emite un presupuesto numerado DEV- válido 30 días, gratuito y fuera de la cuota. La conversión se hace con la instrucción libre («convierte el presupuesto DEV-2026-0012 en factura») — la factura toma un número FAT- normal.'
      },
      {
        q: '¿Cómo pruebo sin ensuciar la numeración del comerciante?',
        a: 'Emite presupuestos durante tus pruebas: son gratuitos, ilimitados y no tocan la secuencia de facturas. Reserva las facturas reales para producción — cada factura emitida entra en la numeración legal y se anula con un abono, no borrándola.'
      }
    ],
    related: ['api-facturation-maroc'],
    updated: '2026-08-15',
    readMin: 6
  }
];
