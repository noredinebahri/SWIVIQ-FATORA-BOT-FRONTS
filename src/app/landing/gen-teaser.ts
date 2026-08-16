import type { Lang } from '../i18n';

/**
 * Textes de la section « Générateur de facture gratuit » de la page d'accueil.
 *
 * L'outil n'est prérendu qu'en français et en arabe : la section n'est donc
 * affichée que dans ces deux langues — le contrôle des liens internes du build
 * refuse tout lien vers une page inexistante, et un visiteur anglophone ne doit
 * pas tomber sur un 404.
 */
export interface GenTeaser {
  badge: string;
  title: string;
  lead: string;
  points: string[];
  cta: string;
  micro: string;
  demo: { seller: string; client: string; line: string; ht: string; vat: string; ttc: string; words: string };
}

export const GEN_TEASER: Partial<Record<Lang, GenTeaser>> = {
  fr: {
    badge: '100 % gratuit · sans inscription',
    title: 'Besoin d’une facture tout de suite ? Faites-la ici, gratuitement.',
    lead:
      'Un générateur de facture marocaine complet, directement dans votre navigateur : ICE, IF, TVA 20 ou 10 %, totaux automatiques, montant en toutes lettres — la mention que tout le monde oublie — et un PDF prêt à imprimer.',
    points: [
      'Conforme aux mentions obligatoires (art. 145 du CGI)',
      'Totaux HT / TVA / TTC et montant en lettres calculés seuls',
      'Vos données restent dans votre navigateur : rien n’est envoyé',
      'Modèles Word et Excel à télécharger en prime'
    ],
    cta: 'Créer ma facture gratuitement',
    micro: 'Aucune carte bancaire, aucun compte à créer.',
    demo: {
      seller: 'Menuiserie Atlas · ICE 002…',
      client: 'Ahmed Transport SARL',
      line: '3 × Porte en bois — 1 500,00',
      ht: 'Total HT', vat: 'TVA 20 %', ttc: 'Total TTC',
      words: 'Cinq mille quatre cents dirhams'
    }
  },
  ar: {
    badge: '100٪ مجاني · بلا تسجيل',
    title: 'محتاج فاتورة دابا ؟ صاوبها هنا، مجانا.',
    lead:
      'مولد فواتير مغربية كامل، مباشرة فالنافيغاتور ديالك : ICE، IF، TVA 20 ولا 10٪، المجاميع أوتوماتيكية، المبلغ بالحروف — اللي كيتنساو ديما — و PDF واجد للطباعة.',
    points: [
      'مطابق للبيانات الإجبارية (المادة 145 من المدونة العامة للضرائب)',
      'المجاميع HT / TVA / TTC والمبلغ بالحروف كيتحسبو بوحدهم',
      'المعطيات ديالك كتبقى فالنافيغاتور : ما كيتصيفط والو',
      'نماذج Word و Excel للتحميل زيادة'
    ],
    cta: 'صاوب الفاتورة ديالي مجانا',
    micro: 'بلا كارط بنكية، بلا حساب.',
    demo: {
      seller: 'نجارة أطلس · ICE 002…',
      client: 'أحمد ترانسبور',
      line: '3 × باب ديال الخشب — 1 500,00',
      ht: 'المجموع بلا ضريبة', vat: 'الضريبة 20٪', ttc: 'المجموع مع الضريبة',
      words: 'خمسة آلاف وأربعمائة درهم'
    }
  }
};
