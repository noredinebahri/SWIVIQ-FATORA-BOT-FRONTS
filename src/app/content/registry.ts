import type { Lang } from '../i18n';
import type { Article, Section } from './types';
import { GUIDES_FR } from './guides.fr';
import { METIERS_FR } from './metiers.fr';
import { PRATIQUE_FR } from './pratique.fr';
import { GUIDES_AR } from './guides.ar';
import { METIERS_AR } from './metiers.ar';
import { GUIDES_EN } from './guides.en';
import { GUIDES_ES } from './guides.es';
import { VILLES_FR } from './villes.fr';

export { CONTENT_UI } from './ui';
export const SITE = 'https://fatora.swiviq.com';

export const ALL_ARTICLES: Article[] = [
  ...GUIDES_FR,
  ...PRATIQUE_FR,
  ...METIERS_FR,
  ...GUIDES_AR,
  ...METIERS_AR,
  ...GUIDES_EN,
  ...GUIDES_ES,
  ...VILLES_FR
];

/**
 * Langues qui disposent d'un pôle éditorial. fr/ar couvrent tout le contenu
 * commerçant ; en/es ne portent que les guides développeurs (API).
 */
export const CONTENT_LANGS: Lang[] = ['fr', 'ar', 'en', 'es'];

export function articlesFor(lang: Lang): Article[] {
  return ALL_ARTICLES.filter((a) => a.lang === lang);
}

export function findArticle(lang: Lang, section: Section, slug: string): Article | undefined {
  return ALL_ARTICLES.find((a) => a.lang === lang && a.section === section && a.slug === slug);
}

/** Langues dans lesquelles un même slug existe — sert à n'émettre que des hreflang valides. */
export function langsWithSlug(section: Section, slug: string): Lang[] {
  return CONTENT_LANGS.filter((l) => ALL_ARTICLES.some((a) => a.lang === l && a.section === section && a.slug === slug));
}

export function articleUrl(a: Pick<Article, 'lang' | 'section' | 'slug'>): string {
  return `${SITE}/${a.lang}/${a.section}/${a.slug}`;
}

export function articlePath(a: Pick<Article, 'lang' | 'section' | 'slug'>): string {
  return `/${a.lang}/${a.section}/${a.slug}`;
}

/** Articles liés d'un article, dans sa langue, en conservant l'ordre déclaré. */
export function relatedOf(a: Article): Article[] {
  return a.related
    .map((slug) => ALL_ARTICLES.find((x) => x.lang === a.lang && x.slug === slug))
    .filter((x): x is Article => !!x);
}
