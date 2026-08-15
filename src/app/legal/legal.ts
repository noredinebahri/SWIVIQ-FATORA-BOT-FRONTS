import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WA_LINK, type Lang } from '../i18n';
import { SiteHeader, SiteFooter } from '../shell/chrome';
import { PageSeo } from '../seo/page-seo';
import { SITE } from '../content/registry';

/**
 * Pages légales — rédigées en français, version faisant foi (usage marocain).
 * Une seule route par page, prérendue en /fr/… ; les footers des quatre
 * langues pointent vers ces versions.
 */

export type LegalSlug = 'mentions-legales' | 'cgu' | 'confidentialite';

interface LegalBlock {
  h: string;
  p: string[];
}

interface LegalPage {
  metaTitle: string;
  metaDesc: string;
  title: string;
  updated: string;
  blocks: LegalBlock[];
}

const PAGES: Record<LegalSlug, LegalPage> = {
  'mentions-legales': {
    metaTitle: 'Mentions légales — Fatora-Bot (Swiviq)',
    metaDesc:
      'Mentions légales du site fatora.swiviq.com et du service Fatora-Bot : éditeur Swiviq SARL AU (Rabat), direction de publication, hébergement, propriété intellectuelle et contact.',
    title: 'Mentions légales',
    updated: '15/08/2026',
    blocks: [
      {
        h: 'Éditeur du site et du service',
        p: [
          'Le site fatora.swiviq.com et le service Fatora-Bot sont édités par SWIVIQ, société à responsabilité limitée à associé unique (SARL AU) de droit marocain, dont le siège social est situé à Rabat, Maroc.',
          'Identifiants de la société (ICE, identifiant fiscal, registre de commerce de Rabat) : communiqués sur toute demande adressée à contact@swiviq.com, et portés sur les factures émises par la société.',
          'Contact : contact@swiviq.com · WhatsApp +212 691 02 08 05.',
          'Directeur de la publication : le gérant de SWIVIQ.'
        ]
      },
      {
        h: 'Hébergement',
        p: [
          'Le site et le service sont hébergés par Contabo GmbH, Aschauer Straße 32a, 81549 Munich, Allemagne — les données sont hébergées au sein de l’Union européenne.',
          'Les échanges WhatsApp transitent par l’infrastructure WhatsApp Business (Meta Platforms), conformément aux conditions de la plateforme.'
        ]
      },
      {
        h: 'Propriété intellectuelle',
        p: [
          'La marque Fatora-Bot, le logo, la charte graphique, les textes, guides et contenus de ce site sont la propriété de SWIVIQ, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.',
          'Les guides éditoriaux peuvent être cités avec lien vers la page d’origine. Les modèles de facture téléchargeables sont librement utilisables par les entreprises pour leur propre facturation.'
        ]
      },
      {
        h: 'Responsabilité éditoriale',
        p: [
          'Les guides publiés sur ce site présentent le cadre général applicable au Maroc à leur date de mise à jour. Ils ne constituent ni un conseil juridique, ni un conseil comptable ou fiscal, et ne remplacent pas les textes publiés par la Direction Générale des Impôts ni l’avis d’un expert-comptable.'
        ]
      },
      {
        h: 'Signaler un contenu',
        p: [
          'Pour signaler une erreur, un contenu obsolète ou une atteinte à un droit, écrivez à contact@swiviq.com — la demande est traitée dans les meilleurs délais.'
        ]
      }
    ]
  },

  cgu: {
    metaTitle: 'Conditions générales d’utilisation — Fatora-Bot',
    metaDesc:
      'CGU du service de facturation Fatora-Bot : description du service, essai gratuit, abonnements et paiement, obligations de l’utilisateur, responsabilité, API, résiliation — droit marocain.',
    title: 'Conditions générales d’utilisation et de vente',
    updated: '15/08/2026',
    blocks: [
      {
        h: '1. Objet et acceptation',
        p: [
          'Les présentes conditions régissent l’utilisation du service Fatora-Bot, édité par SWIVIQ SARL AU (Rabat, Maroc), qui permet aux entreprises d’émettre depuis WhatsApp des factures, devis, avoirs et bons de livraison conformes à la réglementation marocaine, ainsi que du site fatora.swiviq.com et de son générateur de facture gratuit.',
          'L’utilisation du service — dès la création du compte sur WhatsApp — vaut acceptation des présentes conditions. Le consentement est également recueilli explicitement au premier contact avec le bot.'
        ]
      },
      {
        h: '2. Description du service',
        p: [
          'Fatora-Bot transforme des instructions dictées ou écrites (darija, français, anglais, amazigh) en documents commerciaux au format PDF : calcul de la TVA, numérotation continue, mentions de l’article 145 du Code Général des Impôts, apposition du cachet et du logo fournis par l’utilisateur, remise au client final par WhatsApp, email ou QR code, archivage et consultation.',
          'Une interface de programmation (API) est incluse dans tous les abonnements pour connecter des applications tierces au compte de l’utilisateur.',
          'Le service est fourni « en l’état » et évolue en continu ; SWIVIQ s’efforce d’assurer la meilleure disponibilité possible sans garantir une continuité absolue, notamment en cas d’incident affectant WhatsApp, l’hébergeur ou les réseaux.'
        ]
      },
      {
        h: '3. Essai gratuit, abonnements et paiement',
        p: [
          'Chaque nouveau compte bénéficie d’un essai gratuit limité (deux factures, sans engagement ni moyen de paiement). Au-delà, le service est disponible par abonnement mensuel selon les plans affichés sur la page Tarifs (à titre indicatif à la date des présentes : 15 factures/30 DH, 30 factures/50 DH, 100 factures/90 DH par mois). Les devis sont illimités et gratuits.',
          'Le paiement s’effectue par virement bancaire ou en espèces auprès de SWIVIQ ; l’activation intervient au plus tard le jour ouvré suivant la confirmation du paiement. Les prix s’entendent hors taxe sauf mention contraire et peuvent être révisés pour les périodes futures avec information préalable.',
          'Le quota non consommé sur une période payée n’est ni reporté ni remboursé. L’abonnement n’est pas reconduit tacitement par prélèvement : sans renouvellement, le compte repasse en consultation seule.'
        ]
      },
      {
        h: '4. Obligations de l’utilisateur',
        p: [
          'L’utilisateur garantit l’exactitude des informations qu’il fournit (identité de l’entreprise, ICE, IF, régime fiscal, données des clients et des prestations facturées). Les documents étant émis sur la base de ces informations, l’utilisateur demeure seul responsable de la sincérité de sa facturation et du respect de ses obligations fiscales, comptables et déclaratives.',
          'Il est interdit d’utiliser le service pour émettre des documents fictifs, inexacts ou frauduleux, pour facturer des activités illicites, ou de tenter de porter atteinte au service. SWIVIQ peut suspendre sans préavis un compte en cas d’usage manifestement frauduleux ou d’atteinte à la sécurité, et se réserve le droit de signaler aux autorités compétentes tout usage contraire à la loi.',
          'La clé API est personnelle : l’utilisateur est responsable de sa conservation et des émissions réalisées avec elle. Elle peut être régénérée à tout moment (« api reset »).'
        ]
      },
      {
        h: '5. Responsabilité de SWIVIQ',
        p: [
          'SWIVIQ répond de la conformité formelle des documents générés (mentions, calculs, numérotation) sur la base des informations fournies par l’utilisateur, et de la mise en œuvre de moyens raisonnables pour la disponibilité et la sécurité du service.',
          'SWIVIQ ne répond ni du contenu commercial des documents, ni des conséquences d’informations erronées fournies par l’utilisateur, ni des dommages indirects (perte d’exploitation, de clientèle ou de données consécutive à un cas de force majeure). En tout état de cause, la responsabilité totale de SWIVIQ est limitée au montant payé par l’utilisateur au titre des trois derniers mois d’abonnement.',
          'Le générateur de facture gratuit du site effectue ses calculs dans le navigateur de l’utilisateur, sans gestion de numérotation ni archivage : il est fourni à titre de commodité, sous la seule responsabilité de l’utilisateur.'
        ]
      },
      {
        h: '6. Données et confidentialité',
        p: [
          'Le traitement des données personnelles est décrit dans la Politique de confidentialité, qui fait partie intégrante des présentes. Les données de facturation de chaque compte sont strictement cloisonnées de celles des autres comptes.'
        ]
      },
      {
        h: '7. Résiliation et récupération de compte',
        p: [
          'L’utilisateur peut cesser d’utiliser le service à tout moment ; il peut demander l’export de ses données (commande « export », format CSV) et la suppression de son compte à contact@swiviq.com.',
          'En cas de perte du numéro WhatsApp, une procédure de récupération avec vérification d’identité est disponible directement auprès du bot. Toute récupération entraîne un gel de sécurité temporaire de certaines fonctions.'
        ]
      },
      {
        h: '8. Droit applicable et litiges',
        p: [
          'Les présentes conditions sont régies par le droit marocain — notamment la loi 53-05 relative à l’échange électronique de données juridiques et la loi 31-08 édictant des mesures de protection du consommateur. En cas de litige, une solution amiable sera recherchée en priorité ; à défaut, compétence est attribuée aux tribunaux de Rabat.',
          'SWIVIQ peut faire évoluer les présentes conditions ; la version en vigueur est celle publiée sur cette page, avec sa date de mise à jour. Les modifications substantielles sont annoncées aux utilisateurs actifs via WhatsApp.'
        ]
      }
    ]
  },

  confidentialite: {
    metaTitle: 'Politique de confidentialité — Fatora-Bot',
    metaDesc:
      'Comment Fatora-Bot (Swiviq) traite vos données : données collectées, finalités, sous-traitants (WhatsApp, hébergement UE), durées de conservation, droits loi 09-08 et CNDP, sécurité, cookies.',
    title: 'Politique de confidentialité',
    updated: '15/08/2026',
    blocks: [
      {
        h: 'Responsable de traitement',
        p: [
          'SWIVIQ SARL AU (Rabat, Maroc) est responsable des traitements décrits ci-dessous, réalisés dans le respect de la loi n° 09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel, sous le contrôle de la CNDP.',
          'Contact pour toute question relative aux données : contact@swiviq.com.'
        ]
      },
      {
        h: 'Données traitées et finalités',
        p: [
          'Pour fournir le service de facturation : numéro WhatsApp du compte et des membres d’équipe, identité de l’entreprise (raison sociale, ICE, IF, taxe professionnelle, RC, adresse, régime fiscal, logo et cachet), contenu des documents émis (clients, lignes, montants), et messages échangés avec le bot — y compris les messages vocaux, traités pour en extraire les données de facturation dictées.',
          'Pour le site : les demandes envoyées via le formulaire de contact (nom, email, téléphone, message). Le générateur de facture gratuit effectue tous ses calculs localement dans votre navigateur — les données saisies ne sont transmises à aucun serveur ; seul un compteur d’utilisation anonyme est conservé sur votre appareil (localStorage).',
          'Ces données servent exclusivement à fournir, sécuriser et améliorer le service, à établir la facturation de l’abonnement et à répondre aux obligations légales. Elles ne sont ni vendues ni louées à des tiers.'
        ]
      },
      {
        h: 'Sous-traitants et transferts',
        p: [
          'Le service s’appuie sur des prestataires techniques agissant sur instruction de SWIVIQ : Meta Platforms (acheminement des messages WhatsApp Business), un fournisseur d’intelligence artificielle pour l’extraction des données dictées (les contenus soumis ne sont pas utilisés pour entraîner des modèles publics), et Contabo GmbH (hébergement en Union européenne).',
          'Aucun autre transfert hors du Maroc ou de l’UE n’est réalisé. Chaque compte est strictement cloisonné : les données d’une entreprise ne sont jamais accessibles à une autre.'
        ]
      },
      {
        h: 'Durées de conservation',
        p: [
          'Les documents de facturation sont conservés pendant la durée d’utilisation du service — ils constituent l’archive comptable de l’utilisateur, la réglementation marocaine imposant par ailleurs la conservation des factures pendant dix ans. Les messages de conversation sont conservés le temps nécessaire au fonctionnement du service. Après suppression d’un compte, les données sont effacées ou anonymisées dans un délai raisonnable, sous réserve des obligations légales de conservation.'
        ]
      },
      {
        h: 'Vos droits',
        p: [
          'Conformément à la loi 09-08, vous disposez d’un droit d’accès, de rectification et d’opposition sur vos données, ainsi que du droit d’obtenir l’export de vos documents (commande « export » du bot, format CSV) et la suppression de votre compte. Exercez ces droits à contact@swiviq.com ; une réponse est apportée dans les meilleurs délais. Vous pouvez également saisir la CNDP (cndp.ma).'
        ]
      },
      {
        h: 'Sécurité',
        p: [
          'Les échanges avec le site sont chiffrés (HTTPS) et les conversations WhatsApp bénéficient du chiffrement de la plateforme. Les accès aux serveurs sont restreints et journalisés ; les clés API sont révocables à tout moment par l’utilisateur. En cas d’incident de sécurité affectant des données personnelles, les utilisateurs concernés et, le cas échéant, la CNDP seront informés.'
        ]
      },
      {
        h: 'Cookies',
        p: [
          'Le site n’utilise ni cookie publicitaire, ni traceur tiers, ni outil de mesure d’audience externe. Seuls des stockages techniques strictement nécessaires sont utilisés : préférence de langue et compteur local du générateur de facture, conservés uniquement sur votre appareil.'
        ]
      }
    ]
  }
};

@Component({
  selector: 'app-legal',
  imports: [RouterLink, SiteHeader, SiteFooter],
  template: `
  <app-site-header [lang]="lang()" [alt]="langAlt()" />

  <main class="page">
    <div class="wrap">
      <nav class="crumbs">
        <a [routerLink]="['/', lang()]">Accueil</a>
        <span aria-hidden="true">›</span>
        <span class="here">{{ d().title }}</span>
      </nav>

      <header class="head">
        <h1>{{ d().title }}</h1>
        <p class="upd">Dernière mise à jour : {{ d().updated }} — la version française fait foi.</p>
      </header>

      <article class="body">
        @for (b of d().blocks; track b.h) {
          <section>
            <h2>{{ b.h }}</h2>
            @for (par of b.p; track par) { <p>{{ par }}</p> }
          </section>
        }
      </article>
    </div>
  </main>

  <app-site-footer [lang]="lang()" />`,
  styles: [`
  :host { display: block; }
  .page { padding: 34px 0 0; }
  .wrap { max-width: 820px; margin: 0 auto; padding: 0 24px; }
  .crumbs { display: flex; gap: 8px; align-items: center; font-size: .82rem; color: #7c8496;
    margin-bottom: 22px;
    a { color: #7c8496; text-decoration: none; &:hover { color: #c9902a; } }
    .here { color: #10131c; font-weight: 600; } }
  .head { margin-bottom: 36px;
    h1 { font-family: 'Sora','Tajawal',sans-serif; font-size: clamp(1.7rem,3.6vw,2.4rem);
      line-height: 1.2; letter-spacing: -.02em; margin: 0 0 10px; }
    .upd { color: #7c8496; font-size: .88rem; } }
  .body {
    section { margin-bottom: 32px; }
    h2 { font-family: 'Sora','Tajawal',sans-serif; font-size: 1.15rem; margin: 0 0 10px; }
    p { line-height: 1.85; color: #3b4252; margin: 0 0 12px; font-size: .96rem; } }
  `]
})
export class Legal implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(PageSeo);

  lang = signal<Lang>('fr');
  slug = signal<LegalSlug>('mentions-legales');
  d = computed(() => PAGES[this.slug()]);
  /** Pages en français uniquement — le sélecteur de langue reste sur la page. */
  langAlt = computed(() => ({ fr: `/fr/${this.slug()}` }));
  readonly wa = WA_LINK;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const slug = data['page'] as LegalSlug;
      const lang = (this.route.snapshot.paramMap.get('lang') || 'fr') as Lang;
      if (!PAGES[slug]) {
        this.router.navigateByUrl('/fr');
        return;
      }
      // Version française faisant foi : toute autre langue est redirigée.
      if (lang !== 'fr') {
        this.router.navigateByUrl(`/fr/${slug}`);
        return;
      }
      this.lang.set('fr');
      this.slug.set(slug);
      const d = PAGES[slug];
      const url = `${SITE}/fr/${slug}`;
      this.seo.apply({
        lang: 'fr',
        url,
        title: d.metaTitle,
        desc: d.metaDesc,
        jsonLd: [
          ...this.seo.baseGraph('fr'),
          {
            '@type': 'WebPage',
            '@id': `${url}#page`,
            name: d.title,
            url,
            inLanguage: 'fr',
            dateModified: '2026-08-15',
            isPartOf: { '@id': `${SITE}/#site` },
            publisher: { '@id': `${SITE}/#org` }
          }
        ]
      });
    });
  }
}
