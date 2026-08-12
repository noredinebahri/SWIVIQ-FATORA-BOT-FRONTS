import type { Lang } from '../i18n';
import type { Section } from './types';

/**
 * Liens contextuels affichés sur la page d'accueil.
 *
 * Le libellé n'est volontairement pas le H1 de l'article : varier l'ancre
 * plutôt que la répéter mot pour mot est préférable côté référencement, et
 * cela évite d'embarquer tout le corps des articles dans le bundle initial de
 * la landing.
 *
 * Si un slug est renommé, il doit l'être ici aussi — le lien deviendrait sinon
 * une redirection vers le hub.
 */
export interface HomeLink {
  section: Section;
  slug: string;
  label: string;
}

export const HOME_LINKS: Record<Lang, HomeLink[]> = {
  fr: [
    { section: 'guides', slug: 'facturation-electronique-maroc', label: 'Facturation électronique au Maroc : le guide' },
    { section: 'guides', slug: 'mentions-obligatoires-facture', label: 'Les mentions obligatoires d’une facture' },
    { section: 'guides', slug: 'ice-if-taxe-professionnelle', label: 'ICE, identifiant fiscal, taxe professionnelle' },
    { section: 'guides', slug: 'taux-tva-maroc', label: 'Quel taux de TVA appliquer' },
    { section: 'guides', slug: 'numerotation-factures', label: 'Numéroter ses factures sans trou dans la série' },
    { section: 'guides', slug: 'facture-auto-entrepreneur-maroc', label: 'Facturer en auto-entrepreneur' },
    { section: 'guides', slug: 'facture-whatsapp-comment-faire', label: 'Faire une facture sur WhatsApp' },
    { section: 'guides', slug: 'devis-conforme-maroc', label: 'Le devis : ce qu’il doit contenir' },
    { section: 'guides', slug: 'facture-avoir-maroc', label: 'La facture d’avoir : annuler sans effacer' },
    { section: 'guides', slug: 'delais-paiement-maroc', label: 'Délais de paiement et pénalités de retard' },
    { section: 'guides', slug: 'glossaire-facturation-maroc', label: 'Glossaire de la facturation marocaine' },
    { section: 'comparatif', slug: 'excel-vs-facturation-whatsapp', label: 'Facturer sur Excel : les risques' }
  ],
  ar: [
    { section: 'guides', slug: 'facturation-electronique-maroc', label: 'الفوترة الإلكترونية بالمغرب: الدليل' },
    { section: 'guides', slug: 'mentions-obligatoires-facture', label: 'البيانات الإجبارية فالفاتورة' },
    { section: 'guides', slug: 'ice-if-taxe-professionnelle', label: 'ICE، الرقم الضريبي، الضريبة المهنية' },
    { section: 'guides', slug: 'taux-tva-maroc', label: 'أشنا نسبة ديال TVA تطبق' },
    { section: 'guides', slug: 'numerotation-factures', label: 'ترقيم الفواتير بلا ثقوب' },
    { section: 'guides', slug: 'facture-auto-entrepreneur-maroc', label: 'الفوترة كمقاول ذاتي' },
    { section: 'guides', slug: 'facture-whatsapp-comment-faire', label: 'كيفاش دير فاتورة من الواتساب' },
    { section: 'comparatif', slug: 'excel-vs-facturation-whatsapp', label: 'الفوترة فـExcel: المخاطر' }
  ],
  en: [
    { section: 'guides', slug: 'facturation-electronique-maroc', label: 'E-invoicing in Morocco (in French)' },
    { section: 'guides', slug: 'mentions-obligatoires-facture', label: 'Mandatory invoice mentions (in French)' },
    { section: 'guides', slug: 'taux-tva-maroc', label: 'Which Moroccan VAT rate applies (in French)' }
  ],
  es: [
    { section: 'guides', slug: 'facturation-electronique-maroc', label: 'Factura electrónica en Marruecos (en francés)' },
    { section: 'guides', slug: 'mentions-obligatoires-facture', label: 'Menciones obligatorias (en francés)' },
    { section: 'guides', slug: 'taux-tva-maroc', label: 'Qué tipo de IVA aplicar (en francés)' }
  ]
};

/** Langue vers laquelle pointent les liens : fr tant que en/es n'ont pas leur propre contenu. */
export const LINK_LANG: Record<Lang, Lang> = { fr: 'fr', ar: 'ar', en: 'fr', es: 'fr' };
