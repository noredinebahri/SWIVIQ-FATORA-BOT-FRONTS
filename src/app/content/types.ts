// Modèle de contenu éditorial — une donnée, un rendu, un schema.
// Chaque article produit : une page prerendue, son JSON-LD Article + FAQPage +
// BreadcrumbList, son entrée de sitemap et son bloc dans llms-full.txt.
import type { Lang } from '../i18n';

export type Section = 'guides' | 'secteurs' | 'comparatif';

/** Un bloc de corps : titre + paragraphes, éventuellement une liste ou un tableau. */
export interface Block {
  /** Titre de section (rendu en <h2>) */
  h: string;
  /** Paragraphes du bloc */
  p: string[];
  /** Liste à puces facultative, affichée après les paragraphes */
  list?: string[];
  /** Tableau comparatif facultatif */
  table?: { head: string[]; rows: string[][] };
  /** Encadré d'avertissement ou de précision facultatif */
  note?: string;
}

export interface QA {
  q: string;
  a: string;
}

export interface Article {
  /** Segment d'URL, sans langue ni section */
  slug: string;
  section: Section;
  lang: Lang;

  /** <title> — 55 à 62 caractères visés */
  metaTitle: string;
  /** <meta description> — 140 à 158 caractères visés */
  metaDesc: string;
  keywords: string;

  /** <h1> */
  title: string;
  /** Chapô sous le H1 */
  intro: string;

  /**
   * Réponse directe, 40 à 60 mots, autosuffisante et sans pronom de reprise.
   * C'est le passage que les moteurs génératifs (AI Overviews, ChatGPT,
   * Perplexity) extraient et citent : il doit se tenir hors de son contexte.
   */
  answer: string;

  blocks: Block[];
  faq: QA[];

  /** Slugs d'articles liés — maillage interne, même langue */
  related: string[];

  /** ISO court : AAAA-MM-JJ */
  updated: string;
  /** Temps de lecture affiché, en minutes */
  readMin: number;
}

/** Libellés d'interface des pages éditoriales (hors contenu des articles). */
export interface ContentUi {
  hubTitle: string;
  hubMetaTitle: string;
  hubMetaDesc: string;
  hubIntro: string;
  sections: Record<Section, string>;
  navGuides: string;
  answerLabel: string;
  tocLabel: string;
  faqLabel: string;
  relatedLabel: string;
  updatedLabel: string;
  readLabel: string;
  home: string;
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  authorLine: string;
  reviewNote: string;
}
