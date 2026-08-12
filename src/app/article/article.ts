import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LANGS, WA_LINK, type Lang } from '../i18n';
import { SiteHeader, SiteFooter } from '../shell/chrome';
import { PageSeo } from '../seo/page-seo';
import {
  CONTENT_UI, SITE, articleUrl, findArticle, langsWithSlug, relatedOf
} from '../content/registry';
import type { Article as Art, Section } from '../content/types';

const SECTIONS: Section[] = ['guides', 'secteurs', 'comparatif'];
const DATE_LOCALE: Record<Lang, string> = { fr: 'fr-MA', ar: 'ar-MA', en: 'en-GB', es: 'es-ES' };

@Component({
  selector: 'app-article',
  imports: [RouterLink, SiteHeader, SiteFooter],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(PageSeo);

  readonly wa = WA_LINK;
  lang = signal<Lang>('fr');
  a = signal<Art | undefined>(undefined);

  ui = computed(() => CONTENT_UI[this.lang()]);
  related = computed(() => {
    const art = this.a();
    return art ? relatedOf(art) : [];
  });
  prettyDate = computed(() => {
    const art = this.a();
    if (!art) return '';
    const [y, m, d] = art.updated.split('-').map(Number);
    return new Intl.DateTimeFormat(DATE_LOCALE[this.lang()], {
      year: 'numeric', month: 'long', day: 'numeric'
    }).format(new Date(Date.UTC(y, m - 1, d)));
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const lang = (p.get('lang') || 'fr') as Lang;
      const section = p.get('section') as Section;
      const slug = p.get('slug') || '';

      if (!LANGS.includes(lang) || !SECTIONS.includes(section)) {
        this.router.navigateByUrl('/fr/guides');
        return;
      }
      const art = findArticle(lang, section, slug);
      if (!art) {
        this.router.navigateByUrl(`/${lang}/guides`);
        return;
      }
      this.lang.set(lang);
      this.a.set(art);
      this.applySeo(art);
    });
  }

  private applySeo(art: Art): void {
    const url = articleUrl(art);
    const alternates = langsWithSlug(art.section, art.slug).map((l) => ({
      lang: l,
      url: `${SITE}/${l}/${art.section}/${art.slug}`
    }));

    this.seo.apply({
      lang: art.lang,
      url,
      title: art.metaTitle,
      desc: art.metaDesc,
      keywords: art.keywords,
      ogType: 'article',
      published: art.updated,
      modified: art.updated,
      alternates,
      jsonLd: [
        ...this.seo.baseGraph(art.lang),
        {
          '@type': 'Article',
          '@id': `${url}#article`,
          headline: art.title,
          description: art.metaDesc,
          articleSection: CONTENT_UI[art.lang].sections[art.section],
          inLanguage: art.lang,
          datePublished: art.updated,
          dateModified: art.updated,
          wordCount: this.wordCount(art),
          url,
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          image: { '@type': 'ImageObject', url: `${SITE}/og-${art.lang}.png`, width: 1200, height: 630 },
          author: { '@id': `${SITE}/#org` },
          publisher: { '@id': `${SITE}/#org` },
          isPartOf: { '@id': `${SITE}/#site` },
          about: { '@id': `${SITE}/#app` },
          // Le passage « En bref » est celui qu'on propose à la lecture vocale
          // et à l'extraction par les moteurs génératifs.
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.head h1', '.answer-text']
          }
        },
        {
          '@type': 'SoftwareApplication',
          '@id': `${SITE}/#app`,
          name: 'Fatora-Bot',
          applicationCategory: 'BusinessApplication',
          applicationSubCategory: 'Invoicing',
          operatingSystem: 'WhatsApp, Android, iOS',
          url: SITE,
          provider: { '@id': `${SITE}/#org` },
          offers: { '@type': 'Offer', price: 0, priceCurrency: 'MAD', description: '2 factures offertes' }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${url}#crumbs`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Fatora-Bot', item: `${SITE}/${art.lang}` },
            { '@type': 'ListItem', position: 2, name: CONTENT_UI[art.lang].navGuides, item: `${SITE}/${art.lang}/guides` },
            { '@type': 'ListItem', position: 3, name: art.title, item: url }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          inLanguage: art.lang,
          mainEntity: art.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        },
        ...this.glossaryGraph(art, url)
      ]
    });
  }

  /**
   * Sur une page de glossaire, chaque ligne de tableau « terme / définition »
   * devient un DefinedTerm. Une définition ainsi isolée peut être reprise telle
   * quelle par un moteur génératif, sans qu'il ait à la deviner dans le corps
   * du texte.
   */
  private glossaryGraph(art: Art, url: string): Record<string, unknown>[] {
    if (!art.glossary) return [];
    const terms = art.blocks
      .filter((b) => b.table?.head.length === 2)
      .flatMap((b) =>
        b.table!.rows.map((row) => ({
          '@type': 'DefinedTerm',
          name: row[0],
          description: row[1],
          inDefinedTermSet: { '@id': `${url}#glossary` }
        }))
      );
    if (!terms.length) return [];
    return [
      {
        '@type': 'DefinedTermSet',
        '@id': `${url}#glossary`,
        name: art.title,
        description: art.metaDesc,
        url,
        inLanguage: art.lang,
        publisher: { '@id': `${SITE}/#org` },
        hasDefinedTerm: terms
      }
    ];
  }

  private wordCount(art: Art): number {
    const text = [
      art.intro,
      art.answer,
      ...art.blocks.flatMap((b) => [b.h, ...b.p, ...(b.list || []), b.note || '']),
      ...art.faq.flatMap((f) => [f.q, f.a])
    ].join(' ');
    return text.split(/\s+/).filter(Boolean).length;
  }
}
