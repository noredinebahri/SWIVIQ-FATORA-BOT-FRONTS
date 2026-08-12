import { RenderMode, ServerRoute } from '@angular/ssr';
import { LANGS } from './i18n';
import { ALL_ARTICLES } from './content/registry';

/**
 * Tout est pré-rendu au build : chaque URL est un fichier HTML statique servi
 * directement par nginx. Pas de rendu à la volée, donc pas de latence côté
 * robot — ce qui compte autant pour Googlebot que pour GPTBot et PerplexityBot,
 * qui ne réexécutent pas le JavaScript.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: ':lang/:section/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return ALL_ARTICLES.map((a) => ({ lang: a.lang, section: a.section, slug: a.slug }));
    }
  },
  {
    path: ':lang/guides',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return LANGS.map((lang) => ({ lang }));
    }
  },
  {
    path: ':lang/a-propos',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return LANGS.map((lang) => ({ lang }));
    }
  },
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return LANGS.map((lang) => ({ lang }));
    }
  },
  { path: '**', renderMode: RenderMode.Server }
];
