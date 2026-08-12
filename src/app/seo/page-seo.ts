import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RTL, type Lang } from '../i18n';
import { SITE } from '../content/registry';

const OG_LOCALE: Record<Lang, string> = { fr: 'fr_MA', ar: 'ar_MA', en: 'en_US', es: 'es_ES' };

export interface PageSeoConfig {
  lang: Lang;
  /** URL canonique absolue */
  url: string;
  title: string;
  desc: string;
  keywords?: string;
  /** Image absolue pour Open Graph / X */
  ogImage?: string;
  /** Alternatives linguistiques réellement publiées — jamais de hreflang vers un 404 */
  alternates?: { lang: Lang; url: string }[];
  /** Nœuds JSON-LD à publier dans un @graph unique */
  jsonLd?: Record<string, unknown>[];
  /** article pour les pages éditoriales, website sinon */
  ogType?: 'website' | 'article';
  /** Dates ISO, pour les pages éditoriales */
  published?: string;
  modified?: string;
}

/**
 * Applique title, meta, Open Graph, canonical, hreflang et JSON-LD.
 * Centralisé ici pour que toutes les pages émettent exactement le même jeu de
 * balises — une page qui oublie son canonical se duplique toute seule.
 */
@Injectable({ providedIn: 'root' })
export class PageSeo {
  private doc = inject(DOCUMENT);
  private title = inject(Title);
  private meta = inject(Meta);

  apply(c: PageSeoConfig): void {
    const head = this.doc.head;
    const img = c.ogImage || `${SITE}/og-${c.lang}.png`;

    this.doc.documentElement.lang = c.lang;
    this.doc.documentElement.dir = RTL[c.lang] ? 'rtl' : 'ltr';
    this.title.setTitle(c.title);

    const tags: Record<string, string>[] = [
      { name: 'description', content: c.desc },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
      { name: 'author', content: 'Swiviq' },
      { name: 'publisher', content: 'Swiviq' },
      { name: 'geo.region', content: 'MA' },
      { property: 'og:site_name', content: 'Fatora-Bot' },
      { property: 'og:title', content: c.title },
      { property: 'og:description', content: c.desc },
      { property: 'og:type', content: c.ogType || 'website' },
      { property: 'og:url', content: c.url },
      { property: 'og:locale', content: OG_LOCALE[c.lang] },
      { property: 'og:image', content: img },
      { property: 'og:image:secure_url', content: img },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: c.title },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: c.title },
      { name: 'twitter:description', content: c.desc },
      { name: 'twitter:image', content: img }
    ];
    if (c.keywords) tags.push({ name: 'keywords', content: c.keywords });
    if (c.published) tags.push({ property: 'article:published_time', content: c.published });
    if (c.modified) tags.push({ property: 'article:modified_time', content: c.modified });
    tags.forEach((t) => this.meta.updateTag(t as any));

    // Canonical + hreflang : on repart de zéro à chaque navigation, sinon les
    // liens de la page précédente restent en place côté navigateur.
    this.doc.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach((n) => n.remove());
    const link = (rel: string, href: string, hreflang?: string) => {
      const el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      el.setAttribute('href', href);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      head.appendChild(el);
    };
    link('canonical', c.url);
    const alts = c.alternates || [];
    for (const a of alts) link('alternate', a.url, a.lang);
    const xDefault = alts.find((a) => a.lang === 'fr') || alts[0];
    if (xDefault) link('alternate', xDefault.url, 'x-default');

    this.doc.querySelectorAll('meta[property="og:locale:alternate"]').forEach((n) => n.remove());
    for (const a of alts.filter((x) => x.lang !== c.lang)) {
      const m = this.doc.createElement('meta');
      m.setAttribute('property', 'og:locale:alternate');
      m.setAttribute('content', OG_LOCALE[a.lang]);
      head.appendChild(m);
    }

    this.doc.querySelectorAll('script[type="application/ld+json"]').forEach((n) => n.remove());
    if (c.jsonLd?.length) {
      const s = this.doc.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': c.jsonLd });
      head.appendChild(s);
    }
  }

  /** Nœuds Organization et WebSite, identiques sur toutes les pages. */
  baseGraph(lang: Lang): Record<string, unknown>[] {
    return [
      {
        '@type': 'Organization',
        '@id': `${SITE}/#org`,
        name: 'Fatora-Bot',
        legalName: 'Swiviq',
        url: SITE,
        logo: { '@type': 'ImageObject', url: `${SITE}/og-fr.png`, width: 1200, height: 630 },
        email: 'contact@swiviq.com',
        telephone: '+212691020805',
        address: { '@type': 'PostalAddress', addressLocality: 'Rabat', addressCountry: 'MA' },
        areaServed: { '@type': 'Country', name: 'Morocco' },
        sameAs: ['https://wa.me/212691020805'],
        knowsAbout: [
          'Facturation électronique au Maroc',
          'Article 145 du Code Général des Impôts',
          'Identifiant Commun de l’Entreprise (ICE)',
          'TVA marocaine',
          'Facturation par WhatsApp'
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: '+212691020805',
            email: 'contact@swiviq.com',
            availableLanguage: ['ar', 'fr', 'en', 'es']
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#site`,
        url: SITE,
        name: 'Fatora-Bot',
        publisher: { '@id': `${SITE}/#org` },
        inLanguage: lang
      }
    ];
  }
}
