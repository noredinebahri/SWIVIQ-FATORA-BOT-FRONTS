import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LANGS, WA_LINK, type Lang } from '../i18n';
import { SiteHeader, SiteFooter } from '../shell/chrome';
import { PageSeo } from '../seo/page-seo';
import { CONTENT_LANGS, CONTENT_UI, SITE, articlesFor, articleUrl } from '../content/registry';
import type { Article as Art, Section } from '../content/types';

const ORDER: Section[] = ['guides', 'secteurs', 'comparatif'];

/** Index éditorial : /:lang/guides — le hub qui distribue le maillage interne. */
@Component({
  selector: 'app-hub',
  imports: [RouterLink, SiteHeader, SiteFooter],
  template: `
  <app-site-header [lang]="lang()" />

  <main class="page">
    <div class="wrap">
      <nav class="crumbs">
        <a [routerLink]="['/', lang()]">{{ ui().home }}</a>
        <span aria-hidden="true">›</span>
        <span class="here">{{ ui().navGuides }}</span>
      </nav>

      <header class="head">
        <h1>{{ ui().hubTitle }}</h1>
        <p class="lead">{{ ui().hubIntro }}</p>
      </header>

      @if (!hasContent()) {
        <p class="fallback">
          <a [routerLink]="['/fr/guides']">Lire les guides en français →</a>
        </p>
      }

      @for (s of order; track s) {
        @if (bySection()[s].length) {
          <section class="grp">
            <h2>{{ ui().sections[s] }}</h2>
            <div class="grid">
              @for (a of bySection()[s]; track a.slug) {
                <a class="card" [routerLink]="['/', a.lang, a.section, a.slug]">
                  <b>{{ a.title }}</b>
                  <i>{{ a.metaDesc }}</i>
                  <span class="meta">{{ a.readMin }} {{ ui().readLabel }}</span>
                </a>
              }
            </div>
          </section>
        }
      }

      <aside class="cta">
        <h2>{{ ui().ctaTitle }}</h2>
        <p>{{ ui().ctaText }}</p>
        <a class="btn" [href]="wa" target="_blank" rel="noopener">{{ ui().ctaBtn }} →</a>
      </aside>
    </div>
  </main>

  <app-site-footer [lang]="lang()" />`,
  styles: [`
  :host { display: block; }
  .page { padding: 34px 0 0; }
  .wrap { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
  .crumbs { display: flex; gap: 8px; align-items: center; font-size: .82rem; color: #7c8496;
    margin-bottom: 22px;
    a { color: #7c8496; text-decoration: none; &:hover { color: #c9902a; } }
    .here { color: #10131c; font-weight: 600; } }
  .head { max-width: 760px; margin-bottom: 46px;
    h1 { font-family: 'Sora','Tajawal',sans-serif; font-size: clamp(1.9rem,4vw,2.9rem);
      line-height: 1.18; letter-spacing: -.025em; margin: 0 0 16px; }
    .lead { font-size: 1.08rem; line-height: 1.8; color: #4a5163; } }
  .fallback { margin-bottom: 34px; a { color: #c9902a; font-weight: 700; text-decoration: none; } }
  .grp { margin-bottom: 46px;
    h2 { font-family: 'Sora','Tajawal',sans-serif; font-size: 1.35rem; margin: 0 0 20px;
      padding-bottom: 12px; border-bottom: 1px solid rgba(16,19,28,.1); } }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
  .card { display: block; padding: 22px 24px; border-radius: 16px; text-decoration: none;
    background: #fff; border: 1px solid rgba(16,19,28,.09);
    transition: border-color .18s, transform .18s, box-shadow .18s;
    &:hover { border-color: rgba(201,144,42,.5); transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(16,19,28,.08); }
    b { display: block; font-family: 'Sora','Tajawal',sans-serif; font-size: 1.05rem;
      line-height: 1.4; color: #10131c; margin-bottom: 10px; }
    i { font-style: normal; display: block; color: #5b6272; font-size: .9rem; line-height: 1.7; }
    .meta { display: block; margin-top: 14px; font-size: .78rem; color: #9aa1b1; font-weight: 600; } }
  .cta { margin: 20px 0 0; padding: 34px; border-radius: 20px; text-align: center;
    background: linear-gradient(135deg,#10131c,#1c2233); color: #fff;
    h2 { font-family: 'Sora','Tajawal',sans-serif; margin-bottom: 10px; }
    p { color: #b6bdcc; margin-bottom: 20px; }
    .btn { display: inline-block; padding: 14px 28px; border-radius: 999px; font-weight: 700;
      text-decoration: none; color: #fff; background: linear-gradient(135deg,#25d366,#128c7e);
      box-shadow: 0 10px 28px rgba(37,211,102,.32); } }
  @media (max-width: 720px) { .wrap { padding: 0 16px; } .cta { padding: 26px 20px; } }
  `]
})
export class Hub implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(PageSeo);

  readonly wa = WA_LINK;
  readonly order = ORDER;
  lang = signal<Lang>('fr');
  items = signal<Art[]>([]);

  ui = computed(() => CONTENT_UI[this.lang()]);
  hasContent = computed(() => this.items().length > 0);
  bySection = computed(() => {
    const map = { guides: [], secteurs: [], comparatif: [] } as Record<Section, Art[]>;
    for (const a of this.items()) map[a.section].push(a);
    return map;
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const lang = (p.get('lang') || 'fr') as Lang;
      if (!LANGS.includes(lang)) {
        this.router.navigateByUrl('/fr/guides');
        return;
      }
      this.lang.set(lang);
      this.items.set(articlesFor(lang));
      this.applySeo(lang);
    });
  }

  private applySeo(lang: Lang): void {
    const ui = CONTENT_UI[lang];
    const url = `${SITE}/${lang}/guides`;
    const list = articlesFor(lang);

    this.seo.apply({
      lang,
      url,
      title: ui.hubMetaTitle,
      desc: ui.hubMetaDesc,
      alternates: CONTENT_LANGS.map((l) => ({ lang: l, url: `${SITE}/${l}/guides` })),
      jsonLd: [
        ...this.seo.baseGraph(lang),
        {
          '@type': 'CollectionPage',
          '@id': `${url}#page`,
          url,
          name: ui.hubMetaTitle,
          description: ui.hubMetaDesc,
          inLanguage: lang,
          isPartOf: { '@id': `${SITE}/#site` },
          publisher: { '@id': `${SITE}/#org` }
        },
        {
          '@type': 'ItemList',
          '@id': `${url}#list`,
          itemListOrder: 'https://schema.org/ItemListUnordered',
          numberOfItems: list.length,
          itemListElement: list.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: a.title,
            url: articleUrl(a)
          }))
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${url}#crumbs`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Fatora-Bot', item: `${SITE}/${lang}` },
            { '@type': 'ListItem', position: 2, name: ui.navGuides, item: url }
          ]
        }
      ]
    });
  }
}
