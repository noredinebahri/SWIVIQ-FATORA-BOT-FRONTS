import type { Lang } from '../i18n';
import type { ContentUi } from './types';

/**
 * Libellés d'interface du pôle éditorial.
 * Volontairement séparé de `registry.ts` : la landing a besoin de ces libellés
 * mais pas du corps des articles. Les garder ici évite d'embarquer tout le
 * contenu dans le bundle initial.
 */
export const CONTENT_UI: Record<Lang, ContentUi> = {
  fr: {
    hubTitle: 'Guides de la facturation au Maroc',
    hubMetaTitle: 'Guides facturation Maroc : ICE, TVA, e-facturation',
    hubMetaDesc:
      'Guides pratiques sur la facturation au Maroc : mentions obligatoires, ICE et identifiant fiscal, taux de TVA, numérotation, facturation électronique et cas par métier.',
    hubIntro:
      'Des guides écrits pour être utiles avant d’être trouvés : ce que la réglementation marocaine exige d’une facture, comment l’appliquer selon votre métier, et ce que la facturation électronique obligatoire va changer.',
    sections: { guides: 'Guides', secteurs: 'Par métier', comparatif: 'Comparatifs' },
    navGuides: 'Guides',
    answerLabel: 'En bref',
    tocLabel: 'Sur cette page',
    faqLabel: 'Questions fréquentes',
    relatedLabel: 'À lire ensuite',
    updatedLabel: 'Mis à jour le',
    readLabel: 'min de lecture',
    home: 'Accueil',
    ctaTitle: 'Facturez en parlant, depuis WhatsApp',
    ctaText:
      'Dictez votre facture en darija ou en français. Le PDF conforme part avec votre cachet. Deux factures offertes pour évaluer.',
    ctaBtn: 'Essayer sur WhatsApp',
    authorLine: 'Rédigé par l’équipe Fatora-Bot — Swiviq, Rabat',
    reviewNote:
      'Ce guide présente le cadre général applicable au Maroc. Il ne remplace pas l’avis de votre expert-comptable ni les textes publiés par la Direction Générale des Impôts, dont les valeurs chiffrées évoluent avec les lois de finances.'
  },
  ar: {
    hubTitle: 'أدلة الفوترة بالمغرب',
    hubMetaTitle: 'أدلة الفوترة بالمغرب: ICE، TVA، الفوترة الإلكترونية',
    hubMetaDesc:
      'أدلة عملية على الفوترة بالمغرب: البيانات الإجبارية، ICE والرقم الضريبي، نسب TVA، الترقيم، الفوترة الإلكترونية وحالات حسب المهنة.',
    hubIntro:
      'أدلة متكتبات باش تنفع قبل ما تتلقى: شنو كيفرض القانون المغربي فالفاتورة، كيفاش تطبقو حسب المهنة ديالك، وشنو غادي تبدل الفوترة الإلكترونية الإجبارية.',
    sections: { guides: 'أدلة', secteurs: 'حسب المهنة', comparatif: 'مقارنات' },
    navGuides: 'أدلة',
    answerLabel: 'باختصار',
    tocLabel: 'فهاد الصفحة',
    faqLabel: 'أسئلة متكررة',
    relatedLabel: 'اقرا حتى هادو',
    updatedLabel: 'آخر تحديث',
    readLabel: 'دقيقة ديال القراية',
    home: 'الرئيسية',
    ctaTitle: 'فوتر بالهضرة، من الواتساب',
    ctaText: 'ملي الفاتورة بالدارجة ولا بالفرنسية. الـPDF المطابق كيخرج بالطابع ديالك. جوج فواتير مجانية للتجريب.',
    ctaBtn: 'جرب على الواتساب',
    authorLine: 'من إعداد فريق فاتورة بوت — Swiviq، الرباط',
    reviewNote:
      'هاد الدليل كيقدم الإطار العام المطبق بالمغرب. ما كيعوضش رأي الخبير المحاسب ديالك ولا النصوص المنشورة من المديرية العامة للضرائب، اللي القيم الرقمية ديالها كتبدل مع قوانين المالية.'
  },
  en: {
    hubTitle: 'Invoicing guides for Morocco',
    hubMetaTitle: 'Morocco invoicing guides: ICE, VAT, e-invoicing',
    hubMetaDesc:
      'Practical guides to invoicing in Morocco: mandatory mentions, ICE and tax identifier, VAT rates, numbering and the mandatory e-invoicing rollout.',
    hubIntro: 'Practical guides to invoicing in Morocco. Currently published in French and Arabic.',
    sections: { guides: 'Guides', secteurs: 'By trade', comparatif: 'Comparisons' },
    navGuides: 'Guides',
    answerLabel: 'In short',
    tocLabel: 'On this page',
    faqLabel: 'Frequently asked questions',
    relatedLabel: 'Read next',
    updatedLabel: 'Updated on',
    readLabel: 'min read',
    home: 'Home',
    ctaTitle: 'Invoice by speaking, on WhatsApp',
    ctaText:
      'Dictate your invoice in Darija or French. The compliant PDF goes out with your stamp. Two free invoices to evaluate.',
    ctaBtn: 'Try on WhatsApp',
    authorLine: 'Written by the Fatora-Bot team — Swiviq, Rabat',
    reviewNote:
      'This guide sets out the general framework applicable in Morocco. It does not replace advice from your accountant or the texts published by the Directorate General of Taxes.'
  },
  es: {
    hubTitle: 'Guías de facturación en Marruecos',
    hubMetaTitle: 'Guías de facturación en Marruecos: ICE, IVA, e-factura',
    hubMetaDesc:
      'Guías prácticas sobre la facturación en Marruecos: menciones obligatorias, ICE e identificador fiscal, tipos de IVA, numeración y factura electrónica.',
    hubIntro: 'Guías prácticas sobre la facturación en Marruecos. Publicadas actualmente en francés y árabe.',
    sections: { guides: 'Guías', secteurs: 'Por oficio', comparatif: 'Comparativas' },
    navGuides: 'Guías',
    answerLabel: 'En resumen',
    tocLabel: 'En esta página',
    faqLabel: 'Preguntas frecuentes',
    relatedLabel: 'Seguir leyendo',
    updatedLabel: 'Actualizado el',
    readLabel: 'min de lectura',
    home: 'Inicio',
    ctaTitle: 'Factura hablando, desde WhatsApp',
    ctaText: 'Dicta tu factura en dariya o en francés. El PDF conforme sale con tu sello. Dos facturas gratuitas para evaluar.',
    ctaBtn: 'Probar en WhatsApp',
    authorLine: 'Redactado por el equipo de Fatora-Bot — Swiviq, Rabat',
    reviewNote:
      'Esta guía presenta el marco general aplicable en Marruecos. No sustituye el asesoramiento de tu contable ni los textos publicados por la Dirección General de Impuestos.'
  }
};
