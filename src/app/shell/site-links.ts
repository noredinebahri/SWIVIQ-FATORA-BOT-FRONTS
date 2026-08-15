import type { Lang } from '../i18n';

/**
 * Liens transverses du site (menus et footers), déclarés une seule fois.
 * Les guides n'existent que dans certaines langues : chaque entrée ne sort
 * que si la page cible est réellement prérendue — jamais de lien vers un 404.
 */

export interface SiteLink {
  label: string;
  path: string;
}

export const ABOUT_LABEL: Record<Lang, string> = {
  fr: 'À propos', ar: 'من نحن', en: 'About', es: 'Quiénes somos'
};

export const PRICING_LABEL: Record<Lang, string> = {
  fr: 'Tarifs', ar: 'الأثمنة', en: 'Pricing', es: 'Precios'
};

/** Groupe « API » : documentation + guides d'intégration disponibles dans la langue. */
export function apiMenu(l: Lang): SiteLink[] {
  const items: SiteLink[] = [{
    label: { fr: 'Documentation API', ar: 'توثيق الـAPI', en: 'API documentation', es: 'Documentación API' }[l],
    path: `/${l}/api`
  }];
  if (l === 'fr' || l === 'ar') {
    items.push({
      label: { fr: 'API de facturation au Maroc', ar: 'API الفوترة في المغرب' }[l]!,
      path: `/${l}/guides/api-facturation-maroc`
    });
  }
  if (l === 'fr') {
    items.push({ label: 'Générer une facture PDF par API', path: '/fr/guides/generer-facture-pdf-api' });
  }
  return items;
}

/** Groupe « Site » du footer : les pages piliers, toutes prérendues en 4 langues. */
export function siteMenu(l: Lang, homeLabel: string, guidesLabel: string): SiteLink[] {
  return [
    { label: homeLabel, path: `/${l}` },
    { label: guidesLabel, path: `/${l}/guides` },
    { label: ABOUT_LABEL[l], path: `/${l}/a-propos` }
  ];
}

export const FOOT_GROUPS: Record<Lang, { site: string; api: string; contact: string }> = {
  fr: { site: 'Le site', api: 'API & intégration', contact: 'Contact' },
  ar: { site: 'الموقع', api: 'API والإدماج', contact: 'التواصل' },
  en: { site: 'Site', api: 'API & integration', contact: 'Contact' },
  es: { site: 'Sitio', api: 'API e integración', contact: 'Contacto' }
};
