import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WA_LINK, type Lang } from '../i18n';
import { SiteHeader, SiteFooter } from '../shell/chrome';
import { PageSeo } from '../seo/page-seo';
import { SITE } from '../content/registry';

/** Le générateur existe en français et en arabe — le document produit reste en français (usage marocain). */
const GEN_LANGS: Lang[] = ['fr', 'ar'];

interface Line {
  desc: string;
  qty: number;
  pu: number;
  vat: number;
}

interface GenDict {
  metaTitle: string;
  metaDesc: string;
  title: string;
  lead: string;
  seller: string;
  sellerName: string;
  sellerIce: string;
  sellerIf: string;
  sellerTp: string;
  sellerRc: string;
  sellerAddr: string;
  client: string;
  clientName: string;
  clientIce: string;
  meta: string;
  number: string;
  date: string;
  due: string;
  lines: string;
  desc: string;
  qty: string;
  pu: string;
  vat: string;
  lineTotal: string;
  addLine: string;
  removeLine: string;
  print: string;
  preview: string;
  watermark: string;
  upsellTitle: string;
  upsellText: string;
  upsellCta: string;
  upsellContinue: string;
  warnTitle: string;
  warn: string;
  dlTitle: string;
  dlLead: string;
  dlWord: string;
  dlExcel: string;
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
}

const DICTS: Record<string, GenDict> = {
  fr: {
    metaTitle: 'Générateur de facture en ligne gratuit — Maroc (ICE, TVA)',
    metaDesc:
      'Créez une facture marocaine conforme gratuitement : ICE, IF, TVA 20/10 %, totaux automatiques, montant en toutes lettres calculé, PDF à imprimer. Sans inscription. Modèles Word et Excel à télécharger — ou dictez-la sur WhatsApp en 30 secondes.',
    title: 'Générateur de facture marocaine — gratuit, sans inscription',
    lead:
      'Remplissez, vérifiez, imprimez en PDF. Les totaux HT/TVA/TTC et le montant en toutes lettres — la mention que tout le monde oublie — se calculent tout seuls. Vos données restent dans votre navigateur : rien n’est envoyé à un serveur.',
    seller: 'Votre entreprise (émetteur)',
    sellerName: 'Raison sociale',
    sellerIce: 'ICE (15 chiffres)',
    sellerIf: 'Identifiant fiscal (IF)',
    sellerTp: 'Taxe professionnelle',
    sellerRc: 'Registre de commerce (RC)',
    sellerAddr: 'Adresse',
    client: 'Client',
    clientName: 'Raison sociale ou nom',
    clientIce: 'ICE client (obligatoire en B2B)',
    meta: 'Document',
    number: 'Numéro',
    date: 'Date d’émission',
    due: 'Échéance de règlement',
    lines: 'Lignes de la facture',
    desc: 'Désignation',
    qty: 'Qté',
    pu: 'PU HT (DH)',
    vat: 'TVA %',
    lineTotal: 'Total HT',
    addLine: '+ Ajouter une ligne',
    removeLine: 'Retirer',
    print: 'Imprimer / Enregistrer en PDF',
    preview: 'Aperçu de la facture',
    watermark: 'Document généré gratuitement sur fatora.swiviq.com — sur WhatsApp, vos factures portent votre cachet, sans cette mention.',
    upsellTitle: 'Vous facturez régulièrement ?',
    upsellText:
      'Vous venez de générer votre 3ᵉ facture ici. Le générateur reste gratuit — mais la numérotation est manuelle, il n’y a ni archive, ni cachet, et chaque document porte la mention Fatora. Sur WhatsApp, Fatora gère la séquence automatiquement, appose votre cachet, archive tout et envoie la facture au client. Deux factures offertes, puis dès 30 DH/mois.',
    upsellCta: 'Essayer sur WhatsApp — 2 factures offertes',
    upsellContinue: 'Continuer avec le générateur',
    warnTitle: 'Ce qu’un générateur ne fait pas',
    warn:
      'La numérotation continue reste sous votre responsabilité : aucun trou, aucun doublon, et une facture ratée s’annule par un avoir — jamais par suppression. Ce générateur ne garde pas d’historique et ne gère pas votre séquence. Pour une numérotation gérée, un cachet apposé et des archives retrouvables, passez à l’étape d’après.',
    dlTitle: 'Modèles à télécharger (Word, Excel)',
    dlLead:
      'Les mêmes blocs conformes, en fichiers réutilisables : formules de TVA et de totaux incluses dans la version Excel.',
    dlWord: 'Modèle Word (.docx)',
    dlExcel: 'Modèle Excel (.xlsx)',
    ctaTitle: 'Ou dictez-la sur WhatsApp en 30 secondes',
    ctaText:
      'Avec Fatora-Bot, la même facture se dicte à la voix — en darija ou en français. Numérotation continue gérée, cachet apposé, PDF envoyé au client par WhatsApp, email ou QR code. Deux factures offertes pour essayer.',
    ctaBtn: 'Essayer sur WhatsApp',
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Ce générateur de facture est-il vraiment gratuit ?',
        a: 'Oui, entièrement, sans inscription ni limite. Le calcul se fait dans votre navigateur : aucune donnée n’est transmise à un serveur. C’est notre façon de vous montrer ce que Fatora-Bot sait faire — la version WhatsApp gère en plus la numérotation, le cachet et l’envoi au client.'
      },
      {
        q: 'La facture produite est-elle conforme à la réglementation marocaine ?',
        a: 'Le gabarit porte les blocs exigés par l’article 145 du CGI : ICE et IF de l’émetteur, ICE du client en B2B, TVA ventilée (20 % ou 10 % en 2026), totaux et montant en toutes lettres calculé automatiquement. La conformité finale dépend de ce que vous saisissez — et de votre numérotation, qui reste manuelle ici.'
      },
      {
        q: 'Comment obtenir le PDF ?',
        a: 'Cliquez « Imprimer / Enregistrer en PDF » : la boîte d’impression du navigateur s’ouvre sur la facture seule. Choisissez « Enregistrer au format PDF » comme imprimante.'
      },
      {
        q: 'Puis-je faire un devis avec ce générateur ?',
        a: 'Changez simplement le numéro (DEV-2026-…) et le titre mentalement — la structure est identique. Attention : un devis a sa propre numérotation, séparée de celle des factures, et une durée de validité (30 jours d’usage).'
      }
    ]
  },
  ar: {
    metaTitle: 'مولد فواتير مجاني أونلاين — المغرب (ICE، TVA)',
    metaDesc:
      'أنشئ فاتورة مغربية مطابقة للقانون مجانا: ICE، التعريف الضريبي، TVA 20/10%، مجاميع أوتوماتيكية، المبلغ بالحروف محسوب، PDF للطباعة. بلا تسجيل. نماذج Word وExcel للتحميل — أو دكتيها فالواتساب في 30 ثانية.',
    title: 'مولد الفواتير المغربية — مجاني وبلا تسجيل',
    lead:
      'عمر، تأكد، اطبع PDF. المجاميع HT/TVA/TTC والمبلغ بالحروف — البيان اللي كينساه الجميع — كيتحسبو بوحدهم. المعطيات ديالك كتبقى فالمتصفح: والو ما كيترسل لأي سيرفر. الفاتورة كتخرج بالفرنسية كما هو معمول به.',
    seller: 'المقاولة ديالك (المصدر)',
    sellerName: 'الاسم التجاري',
    sellerIce: 'ICE (15 رقم)',
    sellerIf: 'التعريف الضريبي (IF)',
    sellerTp: 'الضريبة المهنية',
    sellerRc: 'السجل التجاري (RC)',
    sellerAddr: 'العنوان',
    client: 'العميل',
    clientName: 'الاسم التجاري أو الشخصي',
    clientIce: 'ICE ديال العميل (إجباري بين الشركات)',
    meta: 'الوثيقة',
    number: 'الرقم',
    date: 'تاريخ الإصدار',
    due: 'أجل الأداء',
    lines: 'سطور الفاتورة',
    desc: 'الوصف',
    qty: 'الكمية',
    pu: 'الثمن HT (درهم)',
    vat: 'TVA %',
    lineTotal: 'المجموع HT',
    addLine: '+ زيد سطر',
    removeLine: 'حيد',
    print: 'اطبع / سجل PDF',
    preview: 'معاينة الفاتورة',
    watermark: 'وثيقة مولدة مجانا على fatora.swiviq.com — فالواتساب، فواتيرك كتحمل طابعك، بلا هاد العبارة.',
    upsellTitle: 'كتفوتر بانتظام؟',
    upsellText:
      'هادي ثالث فاتورة كتولدها هنا. المولد كيبقى مجاني — ولكن الترقيم يدوي، ما كاين لا أرشيف لا طابع، وكل وثيقة كتحمل عبارة فاتورة. فالواتساب، فاتورة كتدبر السلسلة أوتوماتيكيا، كتحط طابعك، كتأرشيف كلشي وكترسل الفاتورة للعميل. جوج فواتير مجانية، ومن بعد من 30 درهم فالشهر.',
    upsellCta: 'جرب على الواتساب — جوج فواتير مجانية',
    upsellContinue: 'كمل مع المولد',
    warnTitle: 'شنو ما كيديروش المولد',
    warn:
      'الترقيم المتسلسل كيبقى مسؤوليتك: بلا فراغ، بلا تكرار، والفاتورة الغالطة كتلغى بإشعار دائن — عمرها بالحذف. هاد المولد ما كيحتفظش بالتاريخ وما كيدبرش السلسلة ديالك. باش يكون الترقيم مضبوط والطابع محطوط والأرشيف كيتلقى، دوز للمرحلة الموالية.',
    dlTitle: 'نماذج للتحميل (Word، Excel)',
    dlLead: 'نفس الأقسام المطابقة، فملفات قابلة لإعادة الاستعمال: فورمولات TVA والمجاميع داخلة فنسخة Excel.',
    dlWord: 'نموذج Word (.docx)',
    dlExcel: 'نموذج Excel (.xlsx)',
    ctaTitle: 'أو دكتيها فالواتساب في 30 ثانية',
    ctaText:
      'مع فاتورة بوت، نفس الفاتورة كتدكتى بالصوت — بالدارجة أو الفرنسية. الترقيم مضبوط أوتوماتيكيا، الطابع محطوط، والـPDF كيمشي للعميل بالواتساب أو الإيميل أو QR code. جوج فواتير مجانية للتجربة.',
    ctaBtn: 'جرب على الواتساب',
    faqTitle: 'أسئلة متكررة',
    faq: [
      {
        q: 'واش هاد المولد فعلا مجاني؟',
        a: 'أه، كليا، بلا تسجيل وبلا حدود. الحساب كيتم فالمتصفح ديالك: حتى معطى ما كيترسل لأي سيرفر. هادي طريقتنا نوريوك شنو كيعرف يدير فاتورة بوت — نسخة الواتساب كتزيد الترقيم والطابع والإرسال للعميل.'
      },
      {
        q: 'واش الفاتورة مطابقة للقانون المغربي؟',
        a: 'القالب فيه الأقسام المفروضة فالمادة 145: ICE والتعريف الضريبي ديال المصدر، ICE ديال العميل بين الشركات، TVA مفصلة (20% أو 10% ف2026)، المجاميع والمبلغ بالحروف محسوب أوتوماتيكيا. المطابقة النهائية على حساب ما كتكتب — والترقيم اللي كيبقى يدوي هنا.'
      },
      {
        q: 'كيفاش نحصل على الـPDF؟',
        a: 'كليكي على « اطبع / سجل PDF »: نافذة الطباعة ديال المتصفح كتحل على الفاتورة بوحدها. اختار « حفظ بصيغة PDF » كطابعة.'
      }
    ]
  }
};

const today = () => new Date().toISOString().slice(0, 10);

@Component({
  selector: 'app-generateur',
  imports: [FormsModule, SiteHeader, SiteFooter],
  templateUrl: './generateur.html',
  styleUrl: './generateur.scss'
})
export class Generateur implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(PageSeo);

  readonly wa = WA_LINK;
  readonly langAlt = Object.fromEntries(GEN_LANGS.map((l) => [l, `/${l}/generateur-facture`]));
  lang = signal<Lang>('fr');
  d = computed(() => DICTS[this.lang()] ?? DICTS['fr']);
  rtl = computed(() => this.lang() === 'ar');

  seller = signal({ name: '', ice: '', fisc: '', tp: '', rc: '', addr: '' });
  client = signal({ name: '', ice: '' });
  docMeta = signal({ number: 'FAT-2026-0001', date: today(), due: '' });
  lines = signal<Line[]>([{ desc: '', qty: 1, pu: 0, vat: 20 }]);

  totalHt = computed(() => this.lines().reduce((s, l) => s + (l.qty || 0) * (l.pu || 0), 0));
  totalVat = computed(() => this.lines().reduce((s, l) => s + (l.qty || 0) * (l.pu || 0) * ((l.vat || 0) / 100), 0));
  totalTtc = computed(() => this.totalHt() + this.totalVat());
  /** Ventilation par taux — exigée quand plusieurs taux coexistent. */
  vatBreakdown = computed(() => {
    const map = new Map<number, number>();
    for (const l of this.lines()) {
      const amount = (l.qty || 0) * (l.pu || 0) * ((l.vat || 0) / 100);
      if (amount > 0) map.set(l.vat, (map.get(l.vat) || 0) + amount);
    }
    return [...map.entries()].map(([rate, amount]) => ({ rate, amount }));
  });
  amountWords = computed(() => toFrenchWords(this.totalTtc()));

  addLine(): void {
    this.lines.update((ls) => [...ls, { desc: '', qty: 1, pu: 0, vat: 20 }]);
  }
  removeLine(i: number): void {
    this.lines.update((ls) => (ls.length > 1 ? ls.filter((_, k) => k !== i) : ls));
  }
  /** Force le recalcul des computed après une saisie via ngModel. */
  touch(): void {
    this.lines.update((ls) => [...ls]);
    this.seller.update((s) => ({ ...s }));
    this.client.update((c) => ({ ...c }));
    this.docMeta.update((m) => ({ ...m }));
  }

  fmt(n: number): string {
    return n.toLocaleString('fr-MA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  /** Limite douce : à partir de la 3e impression, un écran propose WhatsApp d'abord. */
  showUpsell = signal(false);
  private readonly COUNT_KEY = 'fatora_gen_prints';

  private printCount(): number {
    try { return Number(localStorage.getItem(this.COUNT_KEY)) || 0; } catch { return 0; }
  }

  print(): void {
    if (this.printCount() >= 2) {
      this.showUpsell.set(true);
      return;
    }
    this.doPrint();
  }

  continuePrint(): void {
    this.showUpsell.set(false);
    this.doPrint();
  }

  private doPrint(): void {
    try { localStorage.setItem(this.COUNT_KEY, String(this.printCount() + 1)); } catch { /* navigation privée */ }
    const zone = document.getElementById('facture-print');
    if (!zone) return;
    const w = window.open('', '_blank', 'width=840,height=1100');
    if (!w) return;
    w.document.write(`<!doctype html><html lang="fr"><head><meta charset="utf-8">
<title>${this.docMeta().number}</title>
<style>
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #10131c; margin: 40px; font-size: 13px; }
  h1 { font-size: 20px; margin: 0 0 4px; }
  table { width: 100%; border-collapse: collapse; margin: 14px 0; }
  th, td { border: 1px solid #b9bdc9; padding: 7px 9px; text-align: left; }
  th { background: #f2e8cf; }
  .tot td { font-weight: 600; }
  .ttc td { font-weight: 800; background: #f2e8cf; }
  .muted { color: #5b6272; }
  .head { display: flex; justify-content: space-between; gap: 24px; }
  .arret { font-weight: 600; margin-top: 14px; }
  .foot { margin-top: 26px; font-size: 11px; color: #5b6272; border-top: 1px solid #d5d9e2; padding-top: 8px; }
  .wm { margin-top: 10px; font-size: 10px; color: #8b93a8; }
</style></head><body>${zone.innerHTML}<p class="wm">${this.d().watermark}</p></body></html>`);
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 250);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const lang = (p.get('lang') || 'fr') as Lang;
      if (!GEN_LANGS.includes(lang)) {
        this.router.navigateByUrl('/fr/generateur-facture');
        return;
      }
      this.lang.set(lang);
      const d = DICTS[lang];
      const url = `${SITE}/${lang}/generateur-facture`;
      this.seo.apply({
        lang,
        url,
        title: d.metaTitle,
        desc: d.metaDesc,
        keywords:
          'générateur facture maroc, générateur de facture en ligne gratuit, créer une facture maroc, faire une facture en ligne maroc, facture ICE gratuite, modèle facture word excel maroc, مولد فواتير المغرب',
        alternates: GEN_LANGS.map((l) => ({ lang: l, url: `${SITE}/${l}/generateur-facture` })),
        jsonLd: [
          ...this.seo.baseGraph(lang),
          {
            '@type': 'WebApplication',
            '@id': `${url}#app`,
            name: d.title,
            url,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            inLanguage: lang,
            isAccessibleForFree: true,
            offers: { '@type': 'Offer', price: 0, priceCurrency: 'MAD' },
            provider: { '@id': `${SITE}/#org` }
          },
          {
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            inLanguage: lang,
            mainEntity: d.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a }
            }))
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${url}#crumbs`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Fatora-Bot', item: `${SITE}/${lang}` },
              { '@type': 'ListItem', position: 2, name: d.title, item: url }
            ]
          }
        ]
      });
    });
  }
}

/* ─── Montant en toutes lettres (français, dirhams/centimes) ─────────────── */

const UNITS = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
  'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
const TENS = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];

function below100(n: number): string {
  if (n < 17) return UNITS[n];
  if (n < 20) return 'dix-' + UNITS[n - 10];
  if (n < 70) {
    const t = Math.floor(n / 10), u = n % 10;
    if (u === 0) return TENS[t];
    if (u === 1) return TENS[t] + ' et un';
    return TENS[t] + '-' + UNITS[u];
  }
  if (n < 80) {
    if (n === 71) return 'soixante et onze';
    return 'soixante-' + below100(n - 60);
  }
  if (n === 80) return 'quatre-vingts';
  return 'quatre-vingt-' + below100(n - 80);
}

function below1000(n: number): string {
  if (n < 100) return below100(n);
  const h = Math.floor(n / 100), r = n % 100;
  let s = h === 1 ? 'cent' : UNITS[h] + ' cent';
  if (r === 0) return h > 1 ? s + 's' : s;
  return s + ' ' + below100(r);
}

function intToWords(n: number): string {
  if (n === 0) return 'zéro';
  let out = '';
  const millions = Math.floor(n / 1_000_000);
  const thousands = Math.floor((n % 1_000_000) / 1000);
  const rest = n % 1000;
  if (millions) out += (millions === 1 ? 'un million' : below1000(millions) + ' millions') + ' ';
  if (thousands) out += (thousands === 1 ? 'mille' : below1000(thousands) + ' mille') + ' ';
  if (rest) out += below1000(rest);
  return out.trim();
}

/** « douze mille trois cent quarante-cinq dirhams et soixante centimes » */
export function toFrenchWords(amount: number): string {
  const dh = Math.floor(amount);
  const cts = Math.round((amount - dh) * 100);
  let s = intToWords(dh) + ' dirham' + (dh > 1 ? 's' : '');
  if (cts > 0) s += ' et ' + intToWords(cts) + ' centime' + (cts > 1 ? 's' : '');
  return s;
}
