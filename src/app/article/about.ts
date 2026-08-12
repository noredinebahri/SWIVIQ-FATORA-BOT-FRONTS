import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LANGS, WA_LINK, type Lang } from '../i18n';
import { SiteHeader, SiteFooter } from '../shell/chrome';
import { PageSeo } from '../seo/page-seo';
import { CONTENT_UI, SITE } from '../content/registry';

interface AboutDict {
  metaTitle: string;
  metaDesc: string;
  title: string;
  lead: string;
  blocks: { h: string; p: string[] }[];
  contactTitle: string;
}

/**
 * Page « À propos » — signal E-E-A-T.
 * Google et les moteurs génératifs cherchent qui parle, à quel titre et
 * comment le contenu est produit. Une page éditoriale sans éditeur identifiable
 * plafonne, quelle que soit sa qualité.
 */
const ABOUT: Record<Lang, AboutDict> = {
  fr: {
    metaTitle: 'À propos de Fatora-Bot — Swiviq, Rabat',
    metaDesc:
      'Qui édite Fatora-Bot, pourquoi le service existe, comment nos guides sur la facturation marocaine sont écrits et vérifiés, et comment nous contacter.',
    title: 'Qui édite Fatora-Bot',
    lead:
      'Fatora-Bot est édité par Swiviq, société basée à Rabat. Cette page dit qui nous sommes, comment nous produisons nos contenus, et où s’arrête ce que nous savons.',
    blocks: [
      {
        h: 'Pourquoi ce service existe',
        p: [
          'La facturation électronique devient progressivement obligatoire au Maroc. Les grandes entreprises disposent d’ERP et d’équipes comptables ; les commerçants, artisans, transporteurs et coopératives n’ont ni poste de travail dédié, ni budget de licence, ni temps de formation. Une partie d’entre eux lit et écrit difficilement le français administratif.',
          'Aucune interface de saisie ne franchit cet obstacle : il y a toujours un formulaire à remplir au clavier. La voix le franchit. C’est le constat qui a donné Fatora-Bot : une facturation qui tient entièrement dans une conversation WhatsApp, pilotable en darija, sans rien à installer.'
        ]
      },
      {
        h: 'Ce que nous faisons, et ce que nous ne faisons pas',
        p: [
          'Nous émettons, archivons et transmettons des factures conformes aux mentions exigées par le Code Général des Impôts marocain, avec une numérotation continue par exercice et le cachet de l’entreprise.',
          'Nous ne tenons pas votre comptabilité, ne gérons pas vos stocks et ne produisons pas d’états financiers. Nous ne sommes ni experts-comptables, ni conseils fiscaux : nos guides expliquent un cadre, ils ne remplacent pas un avis professionnel sur votre situation.'
        ]
      },
      {
        h: 'Comment nos guides sont écrits',
        p: [
          'Nos contenus sont rédigés en interne par l’équipe qui construit le produit, à partir des textes publiés — Code Général des Impôts, lois de finances, publications de la Direction Générale des Impôts — et de ce que nous observons chez les entreprises qui utilisent le service.',
          'Nous appliquons une règle simple : ce qui est stable est affirmé ; ce qui change d’une loi de finances à l’autre — taux, seuils, dates d’entrée en vigueur — est signalé comme à vérifier auprès de la DGI ou d’un expert-comptable, plutôt que figé dans une page qui vieillira mal. Chaque guide porte sa date de dernière mise à jour.',
          'Si vous relevez une erreur dans l’un de nos contenus, écrivez-nous : nous corrigeons et mettons la date à jour.'
        ]
      },
      {
        h: 'Données et hébergement',
        p: [
          'Chaque entreprise dispose d’un espace étanche : ses clients, sa numérotation, son cachet. Les données sont hébergées sur des serveurs situés dans l’Union européenne, et les factures conservées conformément aux obligations comptables marocaines.',
          'Les messages sont analysés par un service d’intelligence artificielle dans le seul but d’extraire les informations de facturation. Aucune donnée n’est vendue ni louée. Le détail figure dans notre politique de confidentialité.'
        ]
      }
    ],
    contactTitle: 'Nous contacter'
  },
  ar: {
    metaTitle: 'من نحن — فاتورة بوت، Swiviq الرباط',
    metaDesc: 'شكون كينشر فاتورة بوت، علاش الخدمة كاينة، كيفاش كنكتبو الأدلة ديالنا على الفوترة المغربية، وكيفاش تتواصل معانا.',
    title: 'شكون كينشر فاتورة بوت',
    lead:
      'فاتورة بوت كتنشرو شركة Swiviq، مقرها الرباط. هاد الصفحة كتقول شكون حنا، كيفاش كننتجو المحتوى ديالنا، وفين كيوقف اللي كنعرفو.',
    blocks: [
      {
        h: 'علاش هاد الخدمة كاينة',
        p: [
          'الفوترة الإلكترونية كتولي بالتدريج إجبارية بالمغرب. المقاولات الكبيرة عندها ERP وفرق محاسبة؛ أما التجار والصناع والنقالة والتعاونيات فما عندهمش لا محطة عمل، لا ميزانية رخص، لا وقت للتكوين. وجزء منهم كيقرا وكيكتب الفرنسية الإدارية بصعوبة.',
          'حتى واجهة إدخال ما كتجتاز هاد العائق: ديما كاين شي فورمولير خاصك تعمرو بالكلافي. الصوت هو اللي كيجتازو. وهادا هو الملاحظة اللي خرجات فاتورة بوت: فوترة كاملة داخل محادثة واتساب، كتسير بالدارجة، بلا ما تركب والو.'
        ]
      },
      {
        h: 'شنو كنديرو، وشنو ما كنديروش',
        p: [
          'كنصدرو وكنأرشفو وكنبعتو فواتير مطابقة للبيانات المفروضة فالمدونة العامة للضرائب المغربية، بترقيم متصل حسب السنة وبطابع المقاولة.',
          'ما كنسيروش المحاسبة ديالك، وما كنسيروش المخزون، وما كننتجوش قوائم مالية. وما حناش خبراء محاسبين ولا مستشارين جبائيين: الأدلة ديالنا كتشرح إطار عام، ما كتعوضش رأي مهني على الحالة ديالك.'
        ]
      },
      {
        h: 'كيفاش كنكتبو الأدلة ديالنا',
        p: [
          'المحتوى ديالنا كيتكتب داخليا من طرف الفريق اللي كيبني المنتوج، انطلاقا من النصوص المنشورة — المدونة العامة للضرائب، قوانين المالية، منشورات المديرية العامة للضرائب — ومن اللي كنلاحظو عند المقاولات اللي كتستعمل الخدمة.',
          'كنطبقو قاعدة بسيطة: اللي ثابت كنأكدوه؛ واللي كيتبدل من قانون مالية لآخر — نسب، عتبات، تواريخ الدخول حيز التنفيذ — كنشيرو ليه على أنه خاص يتأكد عند المديرية العامة للضرائب ولا عند خبير محاسب، عوض ما نثبتوه فصفحة غادي تقدم بسرعة. كل دليل كيحمل تاريخ آخر تحديث ديالو.',
          'إلا لقيتي شي غلطة فشي محتوى ديالنا، كتب لينا: كنصححو وكنحدثو التاريخ.'
        ]
      },
      {
        h: 'المعطيات والاستضافة',
        p: [
          'كل مقاولة عندها فضاء معزول: الكليان ديالها، الترقيم ديالها، الطابع ديالها. المعطيات مستضافة على خوادم فالاتحاد الأوروبي، والفواتير محفوظة وفق الالتزامات المحاسبية المغربية.',
          'الرسائل كتتحلل بخدمة ذكاء اصطناعي غير باش تستخرج معلومات الفوترة. حتى معطى ما كيتباع ولا كيتكرا. التفاصيل كاينة فسياسة الخصوصية ديالنا.'
        ]
      }
    ],
    contactTitle: 'تواصل معانا'
  },
  en: {
    metaTitle: 'About Fatora-Bot — Swiviq, Rabat',
    metaDesc:
      'Who publishes Fatora-Bot, why the service exists, how our guides on Moroccan invoicing are written and reviewed, and how to reach us.',
    title: 'Who publishes Fatora-Bot',
    lead:
      'Fatora-Bot is published by Swiviq, a company based in Rabat, Morocco. This page states who we are, how we produce our content, and where our knowledge stops.',
    blocks: [
      {
        h: 'Why this service exists',
        p: [
          'Electronic invoicing is becoming mandatory in Morocco. Large companies have ERPs and accounting teams; shopkeepers, craftspeople, hauliers and cooperatives have no dedicated workstation, no licence budget and no time for training. Some of them read and write administrative French with difficulty.',
          'No data-entry interface clears that obstacle — there is always a form to fill in on a keyboard. Voice clears it. That observation produced Fatora-Bot: invoicing that fits entirely inside a WhatsApp conversation, driven in Darija, with nothing to install.'
        ]
      },
      {
        h: 'What we do, and what we do not',
        p: [
          'We issue, archive and deliver invoices carrying the mentions required by the Moroccan General Tax Code, with continuous numbering per financial year and the company stamp.',
          'We do not keep your accounts, manage your stock or produce financial statements. We are neither chartered accountants nor tax advisers: our guides explain a framework, they do not replace professional advice on your situation.'
        ]
      },
      {
        h: 'How our guides are written',
        p: [
          'Our content is written in-house by the team that builds the product, from published sources — the General Tax Code, finance acts, publications of the Directorate General of Taxes — and from what we observe among businesses using the service.',
          'We apply one rule: what is stable is stated plainly; what changes from one finance act to the next — rates, thresholds, entry-into-force dates — is flagged as needing confirmation from the tax authority or an accountant, rather than frozen into a page that will age badly. Every guide carries its last-updated date.',
          'If you spot an error in our content, write to us: we correct it and update the date.'
        ]
      },
      {
        h: 'Data and hosting',
        p: [
          'Each company has a sealed workspace: its own customers, numbering and stamp. Data is hosted on servers located in the European Union, and invoices are retained in line with Moroccan accounting obligations.',
          'Messages are analysed by an artificial intelligence service for the sole purpose of extracting invoicing details. No data is sold or rented. Full details are in our privacy policy.'
        ]
      }
    ],
    contactTitle: 'Contact us'
  },
  es: {
    metaTitle: 'Sobre Fatora-Bot — Swiviq, Rabat',
    metaDesc:
      'Quién edita Fatora-Bot, por qué existe el servicio, cómo se redactan y revisan nuestras guías sobre facturación marroquí y cómo contactarnos.',
    title: 'Quién edita Fatora-Bot',
    lead:
      'Fatora-Bot está editado por Swiviq, empresa con sede en Rabat, Marruecos. Esta página explica quiénes somos, cómo producimos nuestros contenidos y dónde termina lo que sabemos.',
    blocks: [
      {
        h: 'Por qué existe este servicio',
        p: [
          'La facturación electrónica se vuelve progresivamente obligatoria en Marruecos. Las grandes empresas disponen de ERP y equipos contables; los comerciantes, artesanos, transportistas y cooperativas no tienen puesto de trabajo dedicado, ni presupuesto de licencias, ni tiempo de formación. Una parte de ellos lee y escribe con dificultad el francés administrativo.',
          'Ninguna interfaz de introducción de datos salva ese obstáculo: siempre hay un formulario que rellenar con el teclado. La voz sí lo salva. De esa constatación nació Fatora-Bot: una facturación que cabe entera en una conversación de WhatsApp, gobernada en dariya, sin nada que instalar.'
        ]
      },
      {
        h: 'Qué hacemos y qué no',
        p: [
          'Emitimos, archivamos y entregamos facturas con las menciones exigidas por el Código General de Impuestos marroquí, con numeración continua por ejercicio y el sello de la empresa.',
          'No llevamos tu contabilidad, no gestionamos tu inventario y no producimos estados financieros. No somos ni contables colegiados ni asesores fiscales: nuestras guías explican un marco, no sustituyen un dictamen profesional sobre tu situación.'
        ]
      },
      {
        h: 'Cómo se redactan nuestras guías',
        p: [
          'Nuestros contenidos los redacta internamente el equipo que construye el producto, a partir de los textos publicados —Código General de Impuestos, leyes de finanzas, publicaciones de la Dirección General de Impuestos— y de lo que observamos en las empresas que usan el servicio.',
          'Aplicamos una regla: lo estable se afirma; lo que cambia de una ley de finanzas a otra —tipos, umbrales, fechas de entrada en vigor— se señala como pendiente de verificación ante la administración o un contable, en lugar de congelarlo en una página que envejecerá mal. Cada guía lleva su fecha de última actualización.',
          'Si detectas un error en nuestros contenidos, escríbenos: lo corregimos y actualizamos la fecha.'
        ]
      },
      {
        h: 'Datos y alojamiento',
        p: [
          'Cada empresa dispone de un espacio estanco: sus clientes, su numeración, su sello. Los datos se alojan en servidores situados en la Unión Europea y las facturas se conservan conforme a las obligaciones contables marroquíes.',
          'Los mensajes son analizados por un servicio de inteligencia artificial con el único fin de extraer los datos de facturación. Ningún dato se vende ni se alquila. El detalle figura en nuestra política de privacidad.'
        ]
      }
    ],
    contactTitle: 'Contáctanos'
  }
};

@Component({
  selector: 'app-about',
  imports: [RouterLink, SiteHeader, SiteFooter],
  template: `
  <app-site-header [lang]="lang()" />

  <main class="page">
    <div class="wrap">
      <nav class="crumbs">
        <a [routerLink]="['/', lang()]">{{ ui().home }}</a>
        <span aria-hidden="true">›</span>
        <span class="here">{{ d().title }}</span>
      </nav>

      <header class="head">
        <h1>{{ d().title }}</h1>
        <p class="lead">{{ d().lead }}</p>
      </header>

      <article class="body">
        @for (b of d().blocks; track b.h) {
          <section>
            <h2>{{ b.h }}</h2>
            @for (p of b.p; track p) { <p>{{ p }}</p> }
          </section>
        }

        <section class="contact">
          <h2>{{ d().contactTitle }}</h2>
          <ul>
            <li><b>Swiviq</b> — Rabat, Maroc</li>
            <li><a href="mailto:contact&#64;swiviq.com">contact&#64;swiviq.com</a></li>
            <li><a [href]="wa" target="_blank" rel="noopener">WhatsApp +212 691 02 08 05</a></li>
            <li><a href="https://bot.swiviq.com/privacy" target="_blank" rel="noopener">Politique de confidentialité</a></li>
          </ul>
        </section>
      </article>
    </div>
  </main>

  <app-site-footer [lang]="lang()" />`,
  styles: [`
  :host { display: block; }
  .page { padding: 34px 0 0; }
  .wrap { max-width: 820px; margin: 0 auto; padding: 0 24px; }
  .crumbs { display: flex; gap: 8px; align-items: center; font-size: .82rem; color: #7c8496;
    margin-bottom: 22px;
    a { color: #7c8496; text-decoration: none; &:hover { color: #c9902a; } }
    .here { color: #10131c; font-weight: 600; } }
  .head { margin-bottom: 42px;
    h1 { font-family: 'Sora','Tajawal',sans-serif; font-size: clamp(1.9rem,4vw,2.8rem);
      line-height: 1.18; letter-spacing: -.025em; margin: 0 0 16px; }
    .lead { font-size: 1.08rem; line-height: 1.8; color: #3b4252; } }
  .body {
    section { margin-bottom: 36px; }
    h2 { font-family: 'Sora','Tajawal',sans-serif; font-size: 1.4rem; margin: 0 0 14px; }
    p { color: #4a5163; line-height: 1.85; margin: 0 0 14px; }
    .contact ul { list-style: none; display: flex; flex-direction: column; gap: 10px;
      padding: 22px 24px; border-radius: 16px; background: #fff;
      border: 1px solid rgba(16,19,28,.09); color: #4a5163;
      a { color: #c9902a; text-decoration: none; font-weight: 600; } } }
  @media (max-width: 720px) { .wrap { padding: 0 16px; } }
  `]
})
export class About implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(PageSeo);

  readonly wa = WA_LINK;
  lang = signal<Lang>('fr');
  d = computed(() => ABOUT[this.lang()]);
  ui = computed(() => CONTENT_UI[this.lang()]);

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const lang = (p.get('lang') || 'fr') as Lang;
      if (!LANGS.includes(lang)) {
        this.router.navigateByUrl('/fr/a-propos');
        return;
      }
      this.lang.set(lang);
      const url = `${SITE}/${lang}/a-propos`;
      this.seo.apply({
        lang,
        url,
        title: ABOUT[lang].metaTitle,
        desc: ABOUT[lang].metaDesc,
        alternates: LANGS.map((l) => ({ lang: l, url: `${SITE}/${l}/a-propos` })),
        jsonLd: [
          ...this.seo.baseGraph(lang),
          {
            '@type': 'AboutPage',
            '@id': `${url}#page`,
            url,
            name: ABOUT[lang].metaTitle,
            description: ABOUT[lang].metaDesc,
            inLanguage: lang,
            isPartOf: { '@id': `${SITE}/#site` },
            about: { '@id': `${SITE}/#org` },
            publisher: { '@id': `${SITE}/#org` }
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${url}#crumbs`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Fatora-Bot', item: `${SITE}/${lang}` },
              { '@type': 'ListItem', position: 2, name: ABOUT[lang].title, item: url }
            ]
          }
        ]
      });
    });
  }
}
