import { RenderMode, ServerRoute } from '@angular/ssr';
import { LANGS } from './i18n';

export const serverRoutes: ServerRoute[] = [
  {
    // Les 4 langues sont pré-rendues au build : HTML statique, SEO et vitesse maximum
    path: ':lang',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return LANGS.map((lang) => ({ lang }));
    }
  },
  { path: '**', renderMode: RenderMode.Server }
];
