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

const SITE = 'https://fatora.swiviq.com';
const CONTACT_API = 'https://bot.swiviq.com/lead';

@Component({
  selector: 'app-landing',
  imports: [FormsModule, RouterLink, Ico],
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
    this.doc.documentElement.lang = lang;
    this.doc.documentElement.dir = RTL[lang] ? 'rtl' : 'ltr';

    this.title.setTitle(d.meta.title);
    this.meta.updateTag({ name: 'description', content: d.meta.desc });
    this.meta.updateTag({ name: 'keywords', content: d.meta.kw });
    this.meta.updateTag({ property: 'og:title', content: d.meta.title });
    this.meta.updateTag({ property: 'og:description', content: d.meta.desc });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: `${SITE}/${lang}` });
    this.meta.updateTag({ property: 'og:locale', content: lang === 'ar' ? 'ar_MA' : lang === 'fr' ? 'fr_MA' : lang === 'es' ? 'es_ES' : 'en_US' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    // canonical + hreflang (x-default => fr)
    this.doc.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach((n) => n.remove());
    const head = this.doc.head;
    const canonical = this.doc.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', `${SITE}/${lang}`);
    head.appendChild(canonical);
    for (const l of LANGS) {
      const alt = this.doc.createElement('link');
      alt.setAttribute('rel', 'alternate');
      alt.setAttribute('hreflang', l);
      alt.setAttribute('href', `${SITE}/${l}`);
      head.appendChild(alt);
    }
    const xd = this.doc.createElement('link');
    xd.setAttribute('rel', 'alternate');
    xd.setAttribute('hreflang', 'x-default');
    xd.setAttribute('href', `${SITE}/fr`);
    head.appendChild(xd);

    // JSON-LD : SoftwareApplication (avec offres) + FAQPage
    this.doc.querySelectorAll('script[type="application/ld+json"]').forEach((n) => n.remove());
    const jsonld = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          name: 'Fatora-Bot',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'WhatsApp',
          description: d.meta.desc,
          url: `${SITE}/${lang}`,
          inLanguage: lang,
          offers: d.pricing.plans.map((p) => ({
            '@type': 'Offer',
            name: `${p.name} — ${p.n} ${d.pricing.invoices}`,
            price: p.price,
            priceCurrency: 'MAD'
          }))
        },
        {
          '@type': 'FAQPage',
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
