import {
  Component, OnInit, OnDestroy, inject, signal, computed,
  afterNextRender, DOCUMENT, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DICT, LANGS, RTL, WA_LINK, type Lang, type Dict } from '../i18n';
import { Ico } from '../icon';
import { Showcase } from '../showcase/showcase';
import { SeoSection } from '../seo/seo-section';

const SITE = 'https://fatora.swiviq.com';
const CONTACT_API = 'https://bot.swiviq.com/lead';

@Component({
  selector: 'app-landing',
  imports: [FormsModule, RouterLink, Ico, Showcase, SeoSection],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);
  private http = inject(HttpClient);
  private doc = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  readonly waLink = WA_LINK;
  readonly langs = LANGS;
  lang = signal<Lang>('fr');
  t = computed<Dict>(() => DICT[this.lang()]);
  rtl = computed(() => RTL[this.lang()]);

  openFaq = signal<number>(-1);
  navOpen = signal(false);
  scrolled = signal(false);

  // Formulaire de contact (leads) → backend swiviq
  form = { name: '', email: '', phone: '', message: '' };
  formState = signal<'idle' | 'sending' | 'ok' | 'err'>('idle');

  private onScroll = () => this.scrolled.set((this.doc.defaultView?.scrollY || 0) > 24);

  constructor() {
    // Les animations d'apparition sont 100% CSS (animation-timeline) — ici,
    // uniquement l'état « scrolled » de la barre de navigation (SSR-safe)
    afterNextRender(() => {
      this.doc.defaultView?.addEventListener('scroll', this.onScroll, { passive: true });
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const lang = (p.get('lang') || 'fr') as Lang;
      if (!LANGS.includes(lang)) {
        this.router.navigateByUrl('/fr');
        return;
      }
      this.lang.set(lang);
      this.applySeo(lang);
    });
  }

  ngOnDestroy(): void {
    this.doc.defaultView?.removeEventListener('scroll', this.onScroll);
  }

  switchLang(l: Lang) {
    this.router.navigateByUrl('/' + l);
    this.navOpen.set(false);
  }

  toggleFaq(i: number) {
    this.openFaq.set(this.openFaq() === i ? -1 : i);
  }

  submitLead() {
    if (this.formState() === 'sending') return;
    this.formState.set('sending');
    this.http.post(CONTACT_API, {
      name: this.form.name,
      email: this.form.email,
      phone: this.form.phone,
      message: this.form.message,
      lang: this.lang(),
      page: `${SITE}/${this.lang()}`
    }).subscribe({
      next: () => { this.formState.set('ok'); this.form = { name: '', email: '', phone: '', message: '' }; },
      error: () => this.formState.set('err')
    });
  }

  // --- SEO : title/meta/OG, hreflang, canonical, JSON-LD, lang/dir sur <html> ---
  private applySeo(lang: Lang) {
    const d = DICT[lang];
    const url = `${SITE}/${lang}`;
    const ogImage = `${SITE}/og-${lang}.png`;
    const locale = { fr: 'fr_MA', ar: 'ar_MA', en: 'en_US', es: 'es_ES' }[lang];

    this.doc.documentElement.lang = lang;
    this.doc.documentElement.dir = RTL[lang] ? 'rtl' : 'ltr';

    this.title.setTitle(d.meta.title);
    const tags: Record<string, string>[] = [
      { name: 'description', content: d.meta.desc },
      { name: 'keywords', content: d.meta.kw },
      // Autorise les grands aperçus d'image et les extraits longs dans les résultats
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
      { name: 'author', content: 'Swiviq' },
      { name: 'publisher', content: 'Swiviq' },
      { name: 'geo.region', content: 'MA' },
      { name: 'geo.placename', content: 'Rabat, Maroc' },
      { name: 'apple-mobile-web-app-title', content: 'Fatora-Bot' },
      // Open Graph
      { property: 'og:site_name', content: 'Fatora-Bot' },
      { property: 'og:title', content: d.meta.title },
      { property: 'og:description', content: d.meta.desc },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:locale', content: locale },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:secure_url', content: ogImage },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: d.meta.title },
      // Twitter / X
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: d.meta.title },
      { name: 'twitter:description', content: d.meta.desc },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: d.meta.title }
    ];
    tags.forEach((t) => this.meta.updateTag(t as any));
    // Locales alternatives (une balise par langue)
    this.doc.querySelectorAll('meta[property="og:locale:alternate"]').forEach((n) => n.remove());
    for (const l of LANGS.filter((x) => x !== lang)) {
      const m = this.doc.createElement('meta');
      m.setAttribute('property', 'og:locale:alternate');
      m.setAttribute('content', { fr: 'fr_MA', ar: 'ar_MA', en: 'en_US', es: 'es_ES' }[l]);
      this.doc.head.appendChild(m);
    }

    // canonical + hreflang (x-default => fr)
    this.doc.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach((n) => n.remove());
    const head = this.doc.head;
    const link = (rel: string, href: string, hreflang?: string) => {
      const el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      el.setAttribute('href', href);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      head.appendChild(el);
    };
    link('canonical', url);
    for (const l of LANGS) link('alternate', `${SITE}/${l}`, l);
    link('alternate', `${SITE}/fr`, 'x-default');

    // JSON-LD : graphe complet (entreprise, site, page, produit, parcours, FAQ)
    this.doc.querySelectorAll('script[type="application/ld+json"]').forEach((n) => n.remove());
    const prices = d.pricing.plans.map((p) => p.price);
    const jsonld = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE}/#org`,
          name: 'Fatora-Bot',
          legalName: 'Swiviq',
          url: SITE,
          logo: { '@type': 'ImageObject', url: `${SITE}/og-fr.png`, width: 1200, height: 630 },
          image: ogImage,
          email: 'contact@swiviq.com',
          telephone: '+212691020805',
          address: { '@type': 'PostalAddress', addressLocality: 'Rabat', addressCountry: 'MA' },
          areaServed: { '@type': 'Country', name: 'Morocco' },
          sameAs: ['https://wa.me/212691020805'],
          contactPoint: [{
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: '+212691020805',
            email: 'contact@swiviq.com',
            availableLanguage: ['ar', 'fr', 'en', 'es']
          }]
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE}/#site`,
          url: SITE,
          name: 'Fatora-Bot',
          publisher: { '@id': `${SITE}/#org` },
          inLanguage: lang
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#page`,
          url,
          name: d.meta.title,
          description: d.meta.desc,
          isPartOf: { '@id': `${SITE}/#site` },
          about: { '@id': `${SITE}/#app` },
          primaryImageOfPage: { '@type': 'ImageObject', url: ogImage },
          inLanguage: lang
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Fatora-Bot', item: SITE },
            { '@type': 'ListItem', position: 2, name: d.nav.pricing, item: `${url}#pricing` }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          '@id': `${SITE}/#app`,
          name: 'Fatora-Bot',
          applicationCategory: 'BusinessApplication',
          applicationSubCategory: 'Invoicing',
          operatingSystem: 'WhatsApp, Android, iOS',
          description: d.meta.desc,
          url,
          inLanguage: ['ar', 'fr', 'en'],
          featureList: d.features.items.map((f) => f.t),
          provider: { '@id': `${SITE}/#org` },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'MAD',
            lowPrice: 0,
            highPrice: Math.max(...prices),
            offerCount: d.pricing.plans.length + 1,
            offers: [
              { '@type': 'Offer', name: d.pricing.free.t, price: 0, priceCurrency: 'MAD', description: d.pricing.free.d },
              ...d.pricing.plans.map((p) => ({
                '@type': 'Offer',
                name: `${p.name} — ${p.n} ${d.pricing.invoices}`,
                price: p.price,
                priceCurrency: 'MAD',
                availability: 'https://schema.org/InStock'
              }))
            ]
          }
        },
        {
          '@type': 'HowTo',
          name: d.how.title,
          description: d.how.sub,
          totalTime: 'PT30S',
          step: d.how.steps.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.t,
            text: s.d
          }))
        },
        {
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          mainEntity: d.faq.items.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        }
      ]
    };
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonld);
    head.appendChild(script);
  }
}
