import type { Article } from './types';

const UPD = '2026-08-15';

/**
 * SEO local — une page par grande ville (section « villes »).
 * Règle de rédaction : chaque page est ancrée dans le tissu économique réel de
 * la ville (quartiers, filières, usages) — jamais un gabarit cloné où seul le
 * nom change. Une page ville qui n'apprend rien au lecteur local dessert la
 * marque plus qu'elle ne la sert.
 */

/** Blocs communs reformulés par ville — la conformité ne change pas d'une ville à l'autre. */
const CONFORMITE = {
  h: 'La conformité est nationale — l’usage est local',
  p: [
    'Les règles ne changent pas d’une ville à l’autre : mentions de l’article 145 du CGI (ICE, IF, taxe professionnelle, TVA ventilée à 20 % ou 10 %, montant en toutes lettres), numérotation continue sans trou, annulation par avoir, et la facturation électronique DGI qui arrive par vagues. Ce qui change, c’est la manière de travailler — et c’est là qu’un outil doit s’adapter.',
    'Fatora-Bot émet des documents conformes depuis WhatsApp : la facture se dicte à la voix, en darija ou en français, le PDF part avec votre cachet, et la numérotation est gérée automatiquement. Essai gratuit de deux factures, puis à partir de 30 DH par mois.'
  ]
};

const MISE_EN_ROUTE = (ville: string) => ({
  h: `Se lancer à ${ville} : cinq minutes, aucun rendez-vous`,
  p: [
    `Pas d’installation, pas de commercial à recevoir, pas de formation à planifier : vous envoyez un message WhatsApp au bot, vous répondez aux six questions d’inscription (raison sociale, ICE, IF, taxe professionnelle, adresse, régime de TVA), et votre première facture part dans les minutes qui suivent — depuis n’importe quel quartier de ${ville}, un chantier, un dépôt ou une voiture.`,
    'Vos deux premières factures sont offertes pour évaluer. Le support se fait dans la même conversation WhatsApp, en darija ou en français.'
  ]
});

export const VILLES_FR: Article[] = [
  {
    slug: 'logiciel-facturation-casablanca',
    section: 'villes',
    lang: 'fr',
    metaTitle: 'Logiciel de facturation à Casablanca — WhatsApp, darija',
    metaDesc:
      'Facturation conforme pour les entreprises de Casablanca : commerçants de Derb Omar, industriels d’Aïn Sebaâ, grossistes et transporteurs — la facture se dicte sur WhatsApp en darija, le PDF conforme (ICE, TVA) part avec votre cachet. Dès 30 DH/mois.',
    keywords:
      'logiciel facturation casablanca, logiciel de facturation casablanca, facturation casablanca, facture casablanca, logiciel devis facture casablanca',
    title: 'Facturation à Casablanca : conforme DGI, depuis WhatsApp',
    intro:
      'Capitale économique, Casablanca concentre l’essentiel du commerce de gros, de l’industrie et des services du pays — et donc l’essentiel des factures. Voici comment les entreprises casablancaises passent à une facturation conforme sans poste de travail ni logiciel à installer.',
    answer:
      'Un logiciel de facturation à Casablanca doit suivre le rythme du commerce casablancais : factures émises au comptoir de Derb Omar, au dépôt d’Aïn Sebaâ ou en livraison, ICE des clients B2B, TVA ventilée. Fatora-Bot le fait depuis WhatsApp : dictée en darija, PDF conforme avec cachet, dès 30 DH/mois.',
    blocks: [
      {
        h: 'Le terrain casablancais : vite, au comptoir, entre deux livraisons',
        p: [
          'À Derb Omar, un grossiste sert des dizaines de clients par jour ; la facture doit sortir au comptoir, pas le soir au bureau. Dans les zones industrielles d’Aïn Sebaâ, Sidi Bernoussi ou Moulay Rachid, les bons de livraison précèdent les factures et les deux doivent se répondre. À Casablanca Finance City comme au port, les donneurs d’ordre exigent des factures irréprochables : ICE, échéance loi 69-21, TVA exacte.',
          'Le point commun : la personne qui vend n’est pas assise devant un ordinateur. Un logiciel pensé pour un bureau parisien ou un ERP à licence ne colle pas à ce rythme — WhatsApp, déjà ouvert sur tous les téléphones de la ville, oui.'
        ]
      },
      {
        h: 'Ce que les entreprises de Casablanca règlent avec Fatora-Bot',
        p: ['Les cas d’usage qui reviennent chez les clients casablancais :'],
        list: [
          'Grossistes (Derb Omar, marchés de gros) : facture dictée au comptoir en darija, remise au client par QR code imprimé ou WhatsApp.',
          'Industriels et négoces (Aïn Sebaâ, Bernoussi) : bons de livraison numérotés BL-, factures récurrentes pour les clients en compte.',
          'Transporteurs et logistique (port, Mita, Lissasfa) : la facture part du camion, le PDF arrive au client avant le chauffeur.',
          'Services et professions libérales (Maârif, Gauthier) : devis DEV- convertis en factures en une phrase, suivi des impayés.'
        ]
      },
      CONFORMITE,
      MISE_EN_ROUTE('Casablanca')
    ],
    faq: [
      {
        q: 'Quel logiciel de facturation choisir à Casablanca ?',
        a: 'Celui que vos équipes utiliseront au rythme casablancais : si la facture doit sortir au comptoir ou en livraison, une solution WhatsApp à dictée vocale s’adopte sans formation. Vérifiez les fondamentaux : mentions 145 CGI, numérotation gérée, avoirs, ICE client en B2B.'
      },
      {
        q: 'Mes clients casablancais exigent l’ICE sur les factures — comment le gérer ?',
        a: 'Fatora-Bot mémorise chaque client avec son ICE dans un répertoire : la première fois, vous dictez ou photographiez le document du client ; ensuite, dire son nom suffit et l’ICE s’imprime automatiquement, avec l’orthographe exacte.'
      },
      {
        q: 'Faut-il se déplacer ou recevoir un commercial pour s’équiper ?',
        a: 'Non. L’inscription se fait entièrement dans WhatsApp en cinq minutes, l’essai est gratuit (deux factures), et le support répond dans la même conversation — en darija ou en français.'
      }
    ],
    related: ['logiciel-facturation-maroc', 'facture-whatsapp-comment-faire', 'commerce-detail', 'transport-logistique'],
    updated: UPD,
    readMin: 5
  },

  {
    slug: 'logiciel-facturation-rabat',
    section: 'villes',
    lang: 'fr',
    metaTitle: 'Logiciel de facturation à Rabat — WhatsApp, conforme DGI',
    metaDesc:
      'Facturation conforme pour Rabat-Salé-Témara : prestataires des administrations, bureaux d’études, artisans et commerçants — factures avec ICE, TVA et échéance loi 69-21, dictées sur WhatsApp. Essai gratuit, dès 30 DH/mois.',
    keywords:
      'logiciel facturation rabat, logiciel de facturation rabat, facturation rabat, facture rabat salé témara, logiciel devis facture rabat',
    title: 'Facturation à Rabat : à la hauteur des donneurs d’ordre publics',
    intro:
      'À Rabat, on facture beaucoup pour des administrations, des institutions et des bureaux d’études — des clients qui vérifient chaque mention. Voici comment les entreprises de Rabat-Salé-Témara émettent des factures irréprochables sans s’équiper d’un logiciel de bureau.',
    answer:
      'Un logiciel de facturation à Rabat doit produire des factures que les administrations et institutions acceptent sans réserve : ICE et IF complets, TVA exacte, montant en toutes lettres, échéance conforme à la loi 69-21. Fatora-Bot les émet depuis WhatsApp, avec cachet apposé et numérotation gérée, dès 30 DH/mois.',
    blocks: [
      {
        h: 'Facturer dans la capitale administrative',
        p: [
          'Le client type de Rabat est exigeant : ministères et agences à Agdal-Ryad, institutions à Hassan, sièges sociaux, ONG et représentations. Une facture incomplète — ICE manquant, montant en lettres absent, échéance non mentionnée — revient avec le paiement bloqué. La conformité n’est pas un luxe à Rabat : c’est la condition d’encaissement.',
          'En face, le tissu productif est fait de bureaux d’études, d’agences de communication, de traiteurs, d’entreprises de nettoyage et de gardiennage, d’artisans de Salé et de Témara — des structures légères, sans service comptable interne.'
        ]
      },
      {
        h: 'Les usages qui reviennent à Rabat-Salé-Témara',
        p: ['Ce que les clients de la région règlent avec Fatora-Bot :'],
        list: [
          'Prestataires des administrations (Agdal, Hay Ryad) : factures complètes du premier coup — ICE, IF, TP, échéance loi 69-21, montant en lettres — pour ne pas bloquer l’ordonnancement.',
          'Bureaux d’études et services : devis détaillés convertis en factures d’acompte puis de solde, sans casser la numérotation.',
          'Artisans de Salé et Témara (menuiserie, ferronnerie, couture) : la facture se dicte en darija depuis l’atelier, le client la reçoit sur WhatsApp.',
          'Traiteurs et événementiel : devis rapides pendant l’échange client, facture émise le jour J.'
        ]
      },
      CONFORMITE,
      MISE_EN_ROUTE('Rabat')
    ],
    faq: [
      {
        q: 'Mes factures pour une administration à Rabat sont-elles conformes avec Fatora-Bot ?',
        a: 'Le PDF porte toutes les mentions de l’article 145 : ICE, IF, taxe professionnelle, RC, TVA ventilée, montant en toutes lettres, échéance loi 69-21, et votre cachet. Ce sont précisément les points que vérifient les services ordonnateurs.'
      },
      {
        q: 'Je travaille entre Rabat, Salé et Témara — l’outil suit-il ?',
        a: 'Oui, par nature : tout se passe dans WhatsApp, donc là où vous êtes. Le répertoire clients, la numérotation et les archives restent centralisés sur votre compte, et l’équipe peut facturer depuis plusieurs téléphones sur le même compte.'
      },
      {
        q: 'Puis-je suivre les paiements de mes factures ?',
        a: 'Chaque facture est marquée payée ou en attente ; la commande « impayés » liste ce qui reste dû, et le bot vous prépare un message de relance prêt à transférer au client — utile face aux délais de paiement publics.'
      }
    ],
    related: ['logiciel-facturation-maroc', 'delais-paiement-maroc', 'devis-conforme-maroc', 'facture-whatsapp-comment-faire'],
    updated: UPD,
    readMin: 5
  },

  {
    slug: 'logiciel-facturation-marrakech',
    section: 'villes',
    lang: 'fr',
    metaTitle: 'Logiciel de facturation à Marrakech — tourisme, artisanat',
    metaDesc:
      'Facturation conforme pour Marrakech : riads et maisons d’hôtes, artisans de Sidi Ghanem et de la médina, restaurateurs, guides et transport touristique — la facture se dicte sur WhatsApp, en darija ou en français. Dès 30 DH/mois.',
    keywords:
      'logiciel facturation marrakech, logiciel de facturation marrakech, facturation marrakech, facture riad marrakech, logiciel devis facture marrakech',
    title: 'Facturation à Marrakech : du riad à l’atelier de Sidi Ghanem',
    intro:
      'À Marrakech, la facture se joue entre deux mondes : des clients internationaux qui exigent un document impeccable, et un terrain — médina, souks, ateliers — où personne ne travaille assis devant un ordinateur. Voici comment les professionnels marrakchis concilient les deux.',
    answer:
      'Un logiciel de facturation à Marrakech doit servir le tourisme et l’artisanat : factures irréprochables pour les riads, agences et événements, émises depuis le terrain — l’atelier de Sidi Ghanem, la médina, le restaurant. Fatora-Bot les dicte sur WhatsApp en darija ou en français, PDF conforme avec cachet, dès 30 DH/mois.',
    blocks: [
      {
        h: 'Le paradoxe marrakchi : clientèle mondiale, terrain artisanal',
        p: [
          'Un riad facture une agence de voyage européenne ; un atelier de Sidi Ghanem expédie du mobilier à un décorateur étranger ; un traiteur sert un mariage à la Palmeraie ; un transporteur touristique enchaîne les navettes aéroport. Tous ont le même problème : le client attend une facture professionnelle, immédiate, et la personne qui la doit est en cuisine, à l’atelier ou au volant.',
          'Les hôteliers et agences ont leurs PMS et leurs systèmes ; ce sont les milliers de structures plus légères — maisons d’hôtes, artisans, guides, loueurs, restaurateurs — qui facturent encore sur Word, sur carnet, ou pas du tout.'
        ]
      },
      {
        h: 'Les usages qui reviennent à Marrakech',
        p: ['Ce que les professionnels de Marrakech règlent avec Fatora-Bot :'],
        list: [
          'Riads et maisons d’hôtes : facture du séjour émise au départ du client, envoyée par email ou QR code avant même le taxi.',
          'Artisans et ateliers (Sidi Ghanem, médina) : devis dicté devant le client, converti en facture à la commande, acompte et solde tracés.',
          'Restaurateurs et traiteurs : factures d’événements avec TVA à 10 % sur la restauration, ventilée automatiquement.',
          'Transport touristique et excursions : la facture part du véhicule, le client la reçoit sur son WhatsApp.'
        ]
      },
      CONFORMITE,
      MISE_EN_ROUTE('Marrakech')
    ],
    faq: [
      {
        q: 'Puis-je facturer un client étranger depuis Marrakech ?',
        a: 'Oui — la facture reste un document marocain conforme (ICE, IF, TVA selon votre régime), remise au client par email, WhatsApp ou QR code. Pour les cas d’export ou de détaxe spécifiques, votre comptable confirme le régime de TVA applicable.'
      },
      {
        q: 'La TVA restauration à 10 % est-elle gérée ?',
        a: 'Oui. Le taux se dicte par ligne (« le menu à 10 pour cent, les boissons à 20 ») et la facture ventile la TVA par taux comme l’exige la réglementation. Depuis 2026, il ne reste d’ailleurs que deux taux : 20 % et 10 %.'
      },
      {
        q: 'Mon équipe parle darija, mes clients veulent des factures en bonne et due forme — compatible ?',
        a: 'C’est exactement le cas d’usage : la dictée se fait en darija (ou en français, ou en amazigh), et le document produit est une facture française conforme, avec cachet. L’équipe parle comme elle parle, le client reçoit un document professionnel.'
      }
    ],
    related: ['logiciel-facturation-maroc', 'taux-tva-maroc', 'btp-menuiserie', 'facture-whatsapp-comment-faire'],
    updated: UPD,
    readMin: 5
  },

  {
    slug: 'logiciel-facturation-tanger',
    section: 'villes',
    lang: 'fr',
    metaTitle: 'Logiciel de facturation à Tanger — industrie, port, export',
    metaDesc:
      'Facturation conforme pour Tanger : sous-traitants de la zone franche, transporteurs de Tanger Med, transitaires, commerçants et artisans — factures ICE/TVA dictées sur WhatsApp, échéances loi 69-21. Dès 30 DH/mois.',
    keywords:
      'logiciel facturation tanger, logiciel de facturation tanger, facturation tanger, facture tanger med, logiciel devis facture tanger',
    title: 'Facturation à Tanger : au rythme de Tanger Med et de la zone franche',
    intro:
      'Tanger vit à l’heure industrielle : zone franche, automobile, port Tanger Med, transit et logistique. Autour de ces grands ensembles gravitent des centaines de sous-traitants, transporteurs et prestataires — c’est eux qui ont besoin d’une facturation conforme sans lourdeur.',
    answer:
      'Un logiciel de facturation à Tanger doit suivre l’écosystème industriel et portuaire : sous-traitants de la zone franche facturant des donneurs d’ordre exigeants, transporteurs de Tanger Med facturant à la rotation, commerces du centre. Fatora-Bot émet ces factures depuis WhatsApp — ICE, TVA, échéance — dès 30 DH/mois.',
    blocks: [
      {
        h: 'L’écosystème tangérois : grands donneurs d’ordre, petits prestataires',
        p: [
          'Les usines de TFZ et de Renault-Melloussa travaillent avec des ERP — mais leurs sous-traitants locaux, eux, sont des TPE : maintenance, nettoyage industriel, restauration collective, transport du personnel, mécanique. Ces donneurs d’ordre paient bien, à condition de recevoir des factures parfaites : ICE, référence de commande, échéance loi 69-21.',
          'Côté port, les transporteurs et transitaires facturent à la rotation, souvent depuis la cabine du camion ou le quai. Et le commerce tangérois — boulevard Pasteur, Socco, marchés — garde son rythme méditerranéen : rapide, oral, mobile.'
        ]
      },
      {
        h: 'Les usages qui reviennent à Tanger',
        p: ['Ce que les entreprises tangéroises règlent avec Fatora-Bot :'],
        list: [
          'Sous-traitants industriels (TFZ, Melloussa, Gzenaya) : factures avec référence de commande dictée, échéance à 60 ou 90 jours tracée, relances d’impayés préparées.',
          'Transporteurs et transitaires (Tanger Med) : la facture part à la fin de la rotation, le PDF arrive au client avant le retour au parking.',
          'Services aux entreprises : contrats récurrents facturés automatiquement chaque mois, sans ressaisie.',
          'Commerces et artisans du centre : facture dictée en darija au comptoir, remise par QR code.'
        ]
      },
      CONFORMITE,
      MISE_EN_ROUTE('Tanger')
    ],
    faq: [
      {
        q: 'Mes donneurs d’ordre industriels imposent 60 ou 90 jours — l’échéance est-elle gérée ?',
        a: 'Oui : dictez « payable à 90 jours » et l’échéance s’imprime sur la facture avec la mention des pénalités de la loi 69-21 (plafond légal : 120 jours). La commande « impayés » vous rappelle ensuite ce qui arrive à échéance.'
      },
      {
        q: 'Je facture les mêmes prestations chaque mois — faut-il tout redicter ?',
        a: 'Non. Une facture peut être déclarée récurrente : elle se régénère automatiquement à la date voulue, dans votre numérotation, et vous êtes notifié à chaque émission.'
      },
      {
        q: 'Une facture pour une société de la zone franche a-t-elle des particularités ?',
        a: 'Le régime de TVA peut différer selon le statut du client (zone franche, export). Votre facture reste conforme dans tous les cas ; pour le taux applicable à un contrat donné, votre comptable confirme — et le taux se dicte ligne par ligne.'
      }
    ],
    related: ['logiciel-facturation-maroc', 'transport-logistique', 'delais-paiement-maroc', 'facture-whatsapp-comment-faire'],
    updated: UPD,
    readMin: 5
  },

  {
    slug: 'logiciel-facturation-agadir',
    section: 'villes',
    lang: 'fr',
    metaTitle: 'Logiciel de facturation à Agadir — agro, pêche, tourisme',
    metaDesc:
      'Facturation conforme pour le Souss : coopératives et négoce agricole, mareyeurs du port d’Agadir, hôtellerie et location — factures ICE/TVA dictées sur WhatsApp en darija ou amazigh. Essai gratuit, dès 30 DH/mois.',
    keywords:
      'logiciel facturation agadir, logiciel de facturation agadir, facturation agadir, facture agadir souss, logiciel devis facture agadir',
    title: 'Facturation à Agadir : du port aux serres du Souss',
    intro:
      'Agadir facture depuis le terrain plus qu’aucune autre ville : au port au retour de la marée, dans les stations de conditionnement du Souss, à la réception d’un hôtel. Et une partie des professionnels y travaille en amazigh — un cas que les logiciels classiques ignorent totalement.',
    answer:
      'Un logiciel de facturation à Agadir doit parler le terrain du Souss : négoce agricole facturé à la palette, marée vendue au retour du port, hôtellerie et location saisonnière — et des équipes qui dictent en darija ou en amazigh. Fatora-Bot le fait depuis WhatsApp, PDF conforme ICE/TVA, dès 30 DH/mois.',
    blocks: [
      {
        h: 'Le Souss facture dehors, pas au bureau',
        p: [
          'Autour d’Agadir, la valeur se crée dans les serres, les stations de conditionnement d’Aït Melloul et Ouled Teïma, au port de pêche et dans les hôtels du front de mer. Le négociant qui charge des palettes de primeurs, le mareyeur qui vend à la criée, le loueur de voitures à l’aéroport Al Massira : aucun n’a un ordinateur sous la main au moment de facturer.',
          'S’ajoute une réalité linguistique propre à la région : une partie des professionnels du Souss parle amazigh au quotidien. Fatora-Bot comprend la dictée en tachelhit (écriture tifinagh comprise) — un cas d’usage qu’aucun logiciel de bureau ne couvre.'
        ]
      },
      {
        h: 'Les usages qui reviennent dans le Souss',
        p: ['Ce que les professionnels d’Agadir et sa région règlent avec Fatora-Bot :'],
        list: [
          'Négoce et coopératives agricoles (Aït Melloul, Biougra) : factures à la palette ou au kilo dictées au chargement, ICE de l’acheteur mémorisé.',
          'Mareyeurs et pêche (port d’Agadir) : la facture suit la vente du jour, le client la reçoit sur WhatsApp avant la livraison.',
          'Hôtellerie, maisons d’hôtes et location saisonnière : facture du séjour au départ, TVA à 10 % sur l’hébergement ventilée.',
          'Location de voitures et transport touristique : devis à la demande, facture émise à la restitution du véhicule.'
        ]
      },
      CONFORMITE,
      MISE_EN_ROUTE('Agadir')
    ],
    faq: [
      {
        q: 'Le bot comprend-il vraiment l’amazigh ?',
        a: 'Oui — la dictée en tachelhit est comprise, y compris écrite en tifinagh, et le document produit reste une facture française conforme. C’est un cas d’usage construit spécifiquement pour le Souss.'
      },
      {
        q: 'Une coopérative agricole peut-elle utiliser Fatora-Bot ?',
        a: 'Oui : la coopérative a son compte, son ICE et sa numérotation ; plusieurs membres peuvent facturer depuis leurs téléphones sur le même compte, et l’export CSV alimente le comptable pour les assemblées.'
      },
      {
        q: 'Je facture au kilo avec des prix qui changent chaque jour — c’est gérable à la voix ?',
        a: 'C’est même le cas idéal : « 800 kilos de tomates à 4 dirhams 50 » suffit, le calcul et la TVA suivent. Le répertoire produits retient vos prix habituels, et vous les corrigez d’une phrase quand le marché bouge.'
      }
    ],
    related: ['logiciel-facturation-maroc', 'commerce-detail', 'facture-whatsapp-comment-faire', 'taux-tva-maroc'],
    updated: UPD,
    readMin: 5
  },

  {
    slug: 'logiciel-facturation-fes',
    section: 'villes',
    lang: 'fr',
    metaTitle: 'Logiciel de facturation à Fès — artisanat, commerce, cuir',
    metaDesc:
      'Facturation conforme pour Fès et Meknès : artisans de la médina, tanneries et cuir, commerçants, BTP — la facture se dicte sur WhatsApp en darija, le PDF conforme (ICE, TVA) part avec le cachet. Essai gratuit, dès 30 DH/mois.',
    keywords:
      'logiciel facturation fès, logiciel de facturation fes, facturation fès, facture fès meknès, logiciel devis facture fès',
    title: 'Facturation à Fès : l’artisanat millénaire, la conformité 2026',
    intro:
      'Fès abrite le plus grand tissu artisanal du pays — cuir, zellige, dinanderie, tissage — et un commerce dense entre la médina et la ville nouvelle. Des métiers de la main, où la facture s’est toujours faite de tête ou sur carnet. La conformité 2026 change la donne ; la réponse n’est pas d’imposer un ordinateur à un maâlem.',
    answer:
      'Un logiciel de facturation à Fès doit s’adapter aux métiers de la main : artisans du cuir et du zellige, commerçants de la médina, entrepreneurs du bâtiment — des professionnels qui dictent plus facilement qu’ils ne saisissent. Fatora-Bot émet la facture conforme depuis WhatsApp, à la voix en darija, dès 30 DH/mois.',
    blocks: [
      {
        h: 'Facturer des métiers de la main',
        p: [
          'Le maâlem du zellige qui équipe une villa, la tannerie qui vend à un exportateur, le dinandier qui fournit un hôtel, le tisserand qui livre un décorateur : tous facturent des clients professionnels qui réclament un document en règle — ICE, TVA, cachet. Et tous travaillent debout, les mains prises, loin d’un clavier.',
          'La dictée vocale règle ce que la saisie ne réglera jamais : la facture se dit en darija, entre deux gestes, et le PDF conforme part chez le client. Pour ceux qui lisent difficilement, le bot fait le récapitulatif à voix haute avant d’émettre — un « wakha » suffit.'
        ]
      },
      {
        h: 'Les usages qui reviennent à Fès et Meknès',
        p: ['Ce que les professionnels de la région règlent avec Fatora-Bot :'],
        list: [
          'Artisans (cuir, zellige, dinanderie, tissage) : devis dicté devant le client, acompte facturé à la commande, solde à la livraison — numérotation intacte.',
          'Commerçants (médina, ville nouvelle, Meknès) : facture au comptoir en darija, remise par QR code imprimé sur le ticket.',
          'BTP et rénovation de riads : situations de travaux facturées par tranches, bons de livraison pour les matériaux.',
          'Agroalimentaire de la région (huile d’olive, conserves) : factures au volume avec ICE des acheteurs, export CSV pour le comptable.'
        ]
      },
      CONFORMITE,
      MISE_EN_ROUTE('Fès')
    ],
    faq: [
      {
        q: 'Un artisan qui lit difficilement peut-il vraiment l’utiliser ?',
        a: 'Oui — c’est le cœur du produit : la conversation peut être entièrement vocale. L’artisan dicte, le bot répète la facture à voix haute en darija, et l’émission part sur un « wakha » parlé. Aucune lecture ni saisie obligatoire.'
      },
      {
        q: 'Comment gérer un acompte puis un solde sur une commande artisanale ?',
        a: 'Le devis se convertit en facture d’acompte d’une phrase (« facture 40 % d’acompte »), puis le solde suit à la livraison. Les deux factures prennent leur place dans la numérotation, et le client reçoit chaque PDF sur WhatsApp.'
      },
      {
        q: 'Le cachet est-il vraiment sur la facture ?',
        a: 'Oui : vous photographiez votre cachet une fois, le fond est nettoyé automatiquement, et il s’appose sur chaque PDF avec votre logo. C’est ce que les clients professionnels de Fès attendent d’une facture en règle.'
      }
    ],
    related: ['logiciel-facturation-maroc', 'btp-menuiserie', 'facture-whatsapp-comment-faire', 'devis-conforme-maroc'],
    updated: UPD,
    readMin: 5
  }
];
