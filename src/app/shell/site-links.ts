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

/** Groupe « API » : documentation + les deux guides d'intégration, dans les 4 langues. */
export function apiMenu(l: Lang): SiteLink[] {
  return [
    {
      label: { fr: 'Documentation API', ar: 'توثيق الـAPI', en: 'API documentation', es: 'Documentación API' }[l],
      path: `/${l}/api`
    },
    {
      label: {
        fr: 'API de facturation au Maroc', ar: 'API الفوترة في المغرب',
        en: 'Morocco invoicing API', es: 'API de facturación en Marruecos'
      }[l],
      path: `/${l}/guides/api-facturation-maroc`
    },
    {
      label: {
        fr: 'Générer une facture PDF par API', ar: 'توليد فاتورة PDF عبر الـAPI',
        en: 'Generate an invoice PDF via API', es: 'Generar factura PDF por API'
      }[l],
      path: `/${l}/guides/generer-facture-pdf-api`
    }
  ];
}

/** Groupe « Site » du footer : les pages piliers, toutes prérendues en 4 langues. */
export function siteMenu(l: Lang, homeLabel: string, guidesLabel: string): SiteLink[] {
  const items: SiteLink[] = [
    { label: homeLabel, path: `/${l}` },
    { label: guidesLabel, path: `/${l}/guides` },
    { label: ABOUT_LABEL[l], path: `/${l}/a-propos` }
  ];
  // Le générateur n'existe qu'en fr/ar — jamais de lien vers un 404.
  if (l === 'fr' || l === 'ar') {
    items.push({
      label: { fr: 'Générateur de facture gratuit', ar: 'مولد الفواتير المجاني' }[l]!,
      path: `/${l}/generateur-facture`
    });
  }
  return items;
}

export const FOOT_GROUPS: Record<Lang, { site: string; api: string; contact: string }> = {
  fr: { site: 'Le site', api: 'API & intégration', contact: 'Contact & légal' },
  ar: { site: 'الموقع', api: 'API والإدماج', contact: 'التواصل والقانوني' },
  en: { site: 'Site', api: 'API & integration', contact: 'Contact & legal' },
  es: { site: 'Sitio', api: 'API e integración', contact: 'Contacto y legal' }
};

/**
 * Pages légales — rédigées en français (version faisant foi), liées depuis
 * les footers des quatre langues avec un libellé traduit.
 */
export function legalMenu(l: Lang): SiteLink[] {
  return [
    {
      label: { fr: 'Mentions légales', ar: 'إشعار قانوني', en: 'Legal notice', es: 'Aviso legal' }[l],
      path: '/fr/mentions-legales'
    },
    {
      label: { fr: 'Conditions d’utilisation', ar: 'شروط الاستخدام', en: 'Terms of use', es: 'Condiciones de uso' }[l],
      path: '/fr/cgu'
    },
    {
      label: { fr: 'Confidentialité', ar: 'الخصوصية', en: 'Privacy', es: 'Privacidad' }[l],
      path: '/fr/confidentialite'
    }
  ];
}
