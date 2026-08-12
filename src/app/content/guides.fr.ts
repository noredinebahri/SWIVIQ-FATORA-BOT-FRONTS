import type { Article } from './types';

const UPD = '2026-08-12';

/**
 * Guides réglementaires et pratiques (français).
 * Règle de rédaction : ce qui est stable est affirmé ; ce qui bouge d'une loi de
 * finances à l'autre est présenté comme à vérifier auprès de la DGI ou d'un
 * comptable. Une page qui se trompe sur un taux coûte plus qu'elle ne rapporte.
 */
export const GUIDES_FR: Article[] = [
  {
    slug: 'facturation-electronique-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Facturation électronique au Maroc : le guide 2026',
    metaDesc:
      'Ce que la facturation électronique obligatoire change pour les entreprises marocaines : base légale, modèle de validation préalable, calendrier par taille et préparation concrète.',
    keywords:
      'facturation électronique maroc, e-facturation DGI, article 145-IX CGI, facture électronique obligatoire maroc, clearance maroc',
    title: 'Facturation électronique au Maroc : ce qui change, et comment s’y préparer',
    intro:
      'Le Maroc bascule progressivement vers la facturation électronique obligatoire. Voici la base légale, le modèle retenu, l’ordre de déploiement et — surtout — ce qu’une entreprise peut faire dès aujourd’hui sans attendre la publication des spécifications techniques.',
    answer:
      'La facturation électronique obligatoire au Maroc repose sur l’article 145-IX du Code Général des Impôts. Le modèle retenu est la validation préalable : chaque facture transite par une plateforme nationale avant d’être juridiquement valable, dans un format structuré. Le déploiement commence par les grandes entreprises, puis les PME, puis les très petites entreprises.',
    blocks: [
      {
        h: 'La base légale : l’article 145-IX du CGI',
        p: [
          'L’obligation de facturation électronique trouve son fondement dans l’article 145 du Code Général des Impôts, dont le paragraphe IX a été introduit puis renforcé par les lois de finances successives. Ce texte pose le principe : les factures devront être émises, transmises et conservées sous forme électronique, selon des modalités fixées par voie réglementaire.',
          'Cette formulation est importante à comprendre. La loi établit l’obligation ; les détails opérationnels — formats exacts, calendrier définitif par catégorie d’entreprise, modalités de raccordement — relèvent de textes d’application et de spécifications techniques publiés par l’administration. À la mi-2026, une partie de ces spécifications n’est pas encore publique.'
        ],
        note:
          'Conséquence pratique : méfiez-vous des prestataires qui vous vendent aujourd’hui une « conformité totale garantie » à un dispositif dont les spécifications ne sont pas toutes publiées. Ce qui est vérifiable aujourd’hui, c’est la conformité de vos factures aux mentions obligatoires de l’article 145 — et c’est déjà l’essentiel du travail.'
      },
      {
        h: 'Le modèle marocain : la validation préalable (clearance)',
        p: [
          'Il existe deux grandes familles de dispositifs de facturation électronique dans le monde. Le modèle post-audit, retenu longtemps en Europe, laisse les entreprises échanger leurs factures librement, l’administration contrôlant a posteriori. Le modèle de validation préalable — dit clearance — impose au contraire que chaque facture soit transmise à une plateforme publique et validée avant de produire ses effets juridiques.',
          'Le Maroc s’inscrit dans la seconde famille, comme l’Italie, la Turquie, l’Égypte ou l’Arabie saoudite avant lui. Concrètement, une facture qui n’aurait pas été déclarée à la plateforme nationale ne serait pas opposable : votre client ne pourrait pas déduire la TVA correspondante, et la charge pourrait être rejetée lors d’un contrôle.',
          'Ce choix a une conséquence structurante : la facture cesse d’être un document que l’on rédige librement pour devenir un flux de données normalisé. Le PDF reste ce que l’humain lit ; ce que la machine échange est un fichier structuré, du type UBL 2.1 ou CII, où chaque information occupe un champ identifié.'
        ]
      },
      {
        h: 'Le calendrier : par taille d’entreprise, en cascade',
        p: [
          'L’ordre de déploiement annoncé suit une logique de capacité. Les grandes entreprises, déjà dotées d’ERP et d’équipes comptables structurées, ouvrent la marche. Viennent ensuite les entreprises de taille intermédiaire et les PME. Les très petites entreprises, les artisans et les auto-entrepreneurs ferment le mouvement, avec des solutions simplifiées pensées pour ne pas exiger d’investissement logiciel lourd.',
          'Les dates exactes de chaque vague relèvent des textes d’application et ont déjà été ajustées. Plutôt que de vous caler sur une échéance qui peut bouger, la démarche solide consiste à mettre vos processus en ordre maintenant : une entreprise dont les factures sont déjà complètes, correctement numérotées et archivées n’aura qu’un raccordement technique à effectuer le jour venu.'
        ],
        note:
          'Vérifiez le calendrier applicable à votre catégorie auprès de la Direction Générale des Impôts (tax.gov.ma) ou de votre expert-comptable. Les dates de cette page ne sont volontairement pas figées : elles évoluent au rythme des lois de finances.'
      },
      {
        h: 'Ce qu’une entreprise peut faire dès aujourd’hui',
        p: [
          'Quatre chantiers sont utiles immédiatement, indépendamment du calendrier final. Aucun ne suppose de connaître les spécifications techniques de la plateforme nationale.'
        ],
        list: [
          'Fiabiliser les mentions obligatoires. ICE, identifiant fiscal, taxe professionnelle, taux de TVA détaillé, montant en toutes lettres : une facture incomplète est déjà refusable aujourd’hui, sans attendre la e-facturation.',
          'Assainir la numérotation. La séquence doit être continue, chronologique et sans trou. Un dispositif de validation préalable détecte mécaniquement les ruptures de séquence — ce qui passait inaperçu deviendra visible.',
          'Constituer un référentiel clients propre. Dans un format structuré, le client est identifié par son ICE, pas par une orthographe approximative de sa raison sociale. Collecter les ICE de vos clients récurrents dès maintenant vous évitera une campagne de rattrapage.',
          'Basculer sur un outil qui émet des documents normalisés. Peu importe qu’il s’agisse d’un ERP, d’un logiciel de facturation ou d’un service conversationnel : ce qui compte est que les données soient saisies dans des champs identifiés, et non tapées à la main dans un tableur.'
        ]
      },
      {
        h: 'Le cas des très petites entreprises',
        p: [
          'C’est le segment où l’écart est le plus grand entre l’obligation et les moyens. Un commerçant de quartier, un menuisier, un transporteur indépendant n’a ni ordinateur dédié, ni licence logicielle, ni temps de formation. Une partie de ces professionnels lit et écrit difficilement, ce qui rend inopérante toute solution supposant une saisie au clavier.',
          'C’est précisément pour ce segment que les solutions simplifiées sont annoncées. Un service accessible depuis WhatsApp — déjà installé sur pratiquement tous les téléphones professionnels au Maroc — et pilotable à la voix en darija résout simultanément la question de l’équipement, celle de la formation et celle de l’alphabétisation. Fatora-Bot a été construit pour ce cas d’usage précis.'
        ]
      }
    ],
    faq: [
      {
        q: 'La facturation électronique est-elle déjà obligatoire au Maroc ?',
        a: 'L’obligation est posée par la loi (article 145-IX du CGI) et se déploie par vagues successives, en commençant par les grandes entreprises. Selon la taille de votre entreprise, l’échéance qui vous concerne peut ne pas être encore entrée en vigueur. Le calendrier applicable est à vérifier auprès de la Direction Générale des Impôts.'
      },
      {
        q: 'Un PDF envoyé par email est-il une facture électronique ?',
        a: 'Non, pas au sens du dispositif. Un PDF est une image lisible par un humain. La facturation électronique au sens réglementaire suppose un fichier structuré, où chaque donnée occupe un champ identifié, transmis à la plateforme nationale pour validation. Le PDF reste utile comme représentation lisible, mais il ne suffit pas à lui seul.'
      },
      {
        q: 'Que risque une entreprise qui ne se met pas en conformité ?',
        a: 'Dans un modèle de validation préalable, une facture non déclarée n’est pas opposable : le client ne peut pas déduire la TVA et la charge peut être rejetée en contrôle. S’y ajoutent les sanctions prévues par le CGI pour défaut de facturation régulière. Le risque commercial est souvent le plus immédiat : un client structuré refusera une facture non conforme.'
      },
      {
        q: 'Faut-il acheter un logiciel dès maintenant ?',
        a: 'Pas nécessairement. Ce qui est urgent, c’est que vos factures comportent toutes les mentions obligatoires et suivent une numérotation continue. Le raccordement technique à la plateforme nationale viendra ensuite, et relèvera de votre prestataire. Commencer par un outil simple qui produit déjà des factures conformes est une base saine.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'ice-if-taxe-professionnelle', 'numerotation-factures'],
    updated: UPD,
    readMin: 7
  },

  {
    slug: 'mentions-obligatoires-facture',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Mentions obligatoires d’une facture au Maroc (liste 2026)',
    metaDesc:
      'La liste complète des mentions exigées sur une facture marocaine : ICE, IF, taxe professionnelle, TVA, montant en lettres, numérotation. Avec les erreurs qui font rejeter la déduction.',
    keywords:
      'mentions obligatoires facture maroc, facture conforme maroc, modèle facture maroc, article 145 CGI, facture ICE IF',
    title: 'Les mentions obligatoires d’une facture au Maroc',
    intro:
      'Une facture à laquelle il manque une seule mention peut faire perdre à votre client la déduction de sa TVA — et vous faire perdre le client. Voici la liste exigée par l’article 145 du Code Général des Impôts, mention par mention, avec ce qui se joue derrière chacune.',
    answer:
      'Une facture marocaine conforme comporte : identité complète du vendeur et de l’acheteur, ICE à quinze chiffres, identifiant fiscal, numéro de taxe professionnelle, date d’émission, numéro séquentiel continu, désignation des biens ou services, quantité, prix unitaire hors taxe, taux et montant de TVA, total toutes taxes comprises, et montant total arrêté en toutes lettres.',
    blocks: [
      {
        h: 'La liste complète, mention par mention',
        p: [
          'L’article 145 du CGI énumère ce que toute facture doit porter. Le tableau ci-dessous reprend chaque élément et précise ce qu’il sert à établir — car aucune de ces mentions n’est décorative : chacune répond à un besoin de contrôle précis.'
        ],
        table: {
          head: ['Mention', 'Ce qu’elle établit'],
          rows: [
            ['Raison sociale et adresse du vendeur', 'Qui émet la facture et engage sa responsabilité fiscale'],
            ['Raison sociale et adresse du client', 'Qui peut déduire la TVA et porter la charge en comptabilité'],
            ['ICE (15 chiffres) du vendeur, et du client s’il est assujetti', 'L’identification unique de chaque entreprise dans tous les registres publics'],
            ['Identifiant fiscal (IF)', 'Le rattachement du vendeur à son dossier fiscal'],
            ['Numéro de taxe professionnelle', 'L’assujettissement à la taxe locale d’activité'],
            ['Date d’émission', 'L’exercice de rattachement et l’exigibilité de la TVA'],
            ['Numéro séquentiel continu', 'L’absence de facture dissimulée dans la série'],
            ['Désignation précise des biens ou services', 'La nature réelle de l’opération, et donc le taux de TVA applicable'],
            ['Quantité et prix unitaire hors taxe', 'La vérifiabilité du calcul'],
            ['Taux de TVA appliqué, par ligne', 'La ventilation quand plusieurs taux coexistent sur une même facture'],
            ['Montant de la TVA', 'Le droit à déduction chez le client'],
            ['Total toutes taxes comprises', 'La somme réellement due'],
            ['Montant total en toutes lettres', 'La sécurisation contre l’altération du chiffre']
          ]
        }
      },
      {
        h: 'L’ICE : la mention la plus souvent fautive',
        p: [
          'L’Identifiant Commun de l’Entreprise compte quinze chiffres. Deux erreurs reviennent constamment : l’ICE tronqué — quatorze chiffres parce qu’un zéro de tête a sauté lors d’une copie depuis un tableur — et l’ICE du client absent alors qu’il est assujetti.',
          'Le zéro de tête mérite une attention particulière. Un tableur interprète une suite de chiffres comme un nombre et supprime les zéros non significatifs : « 001234567000089 » devient « 1234567000089 ». La facture part avec un ICE invalide, et le client la renvoie. C’est une des raisons pour lesquelles la facturation dans un tableur pose problème dès qu’on la pratique en volume.'
        ],
        note:
          'Vérifiez toujours qu’un ICE saisi comporte exactement quinze caractères, zéros de tête inclus. Un ICE se stocke comme du texte, jamais comme un nombre.'
      },
      {
        h: 'Le montant en toutes lettres : une exigence qui surprend',
        p: [
          'Beaucoup d’éditeurs étrangers ignorent cette mention, qui n’a pas d’équivalent dans la plupart des pays européens. Elle est pourtant attendue au Maroc, dans la même logique qu’un chèque : le texte fait foi si le chiffre a été altéré.',
          'La règle d’écriture demande de la rigueur. On arrête le montant en dirhams et centimes, on accorde correctement, et on n’oublie pas le cas particulier des centimes. « Cinq mille quatre cents dirhams » n’est pas « cinq mille quatre cent dirhams ». Une conversion automatique évite ces fautes, qui font mauvais effet sur un document opposable.'
        ]
      },
      {
        h: 'Les erreurs qui coûtent le plus cher',
        p: [
          'Certaines omissions sont vénielles et se corrigent par un avoir. D’autres invalident la déduction chez le client, ce qui déclenche à coup sûr un appel désagréable.'
        ],
        list: [
          'ICE absent ou incomplet — le client ne peut pas justifier son fournisseur : rejet quasi systématique.',
          'Taux de TVA non ventilé par ligne quand la facture mélange plusieurs taux — le montant déductible n’est pas déterminable.',
          'Désignation vague du type « travaux » ou « marchandises » — la nature de l’opération ne permet pas de vérifier le taux appliqué.',
          'Numéro de facture réutilisé ou séquence trouée — soupçon de facture non déclarée, sur toute la série.',
          'Date d’émission postérieure à la livraison sans justification — décalage d’exercice, discuté en contrôle.',
          'Total en lettres divergent du total en chiffres — le document perd sa force probante.'
        ]
      },
      {
        h: 'Le cachet et la signature',
        p: [
          'Le cachet de l’entreprise n’est pas listé comme mention légale au sens strict, mais l’usage commercial marocain le rend pratiquement indispensable : une facture sans cachet est régulièrement retournée par les services comptables, les administrations et les grands donneurs d’ordre.',
          'Le bon réflexe est donc de l’intégrer une fois pour toutes au document plutôt que de l’apposer manuellement sur chaque impression. Fatora-Bot incruste automatiquement le cachet enregistré sur chaque PDF émis, ce qui supprime à la fois l’oubli et le tampon de travers.'
        ]
      }
    ],
    faq: [
      {
        q: 'L’ICE du client est-il obligatoire sur la facture ?',
        a: 'Lorsque le client est une entreprise assujettie, son ICE doit figurer sur la facture. Pour un particulier non assujetti, cette mention n’a pas d’objet. En pratique, demandez systématiquement l’ICE à vos clients professionnels dès la première commande et conservez-le dans votre référentiel.'
      },
      {
        q: 'Peut-on émettre une facture manuscrite au Maroc ?',
        a: 'Une facture manuscrite reste possible tant que toutes les mentions obligatoires y figurent et que la numérotation est continue. Elle devient toutefois difficile à défendre : illisibilité, ratures, séquence approximative, archivage fragile. Le passage à la facturation électronique obligatoire rendra cette pratique caduque.'
      },
      {
        q: 'Que faire si une facture déjà remise comporte une erreur ?',
        a: 'On ne supprime jamais une facture émise : cela creuse un trou dans la séquence. Selon la nature de l’erreur, on émet une facture rectificative faisant référence à l’originale, ou un avoir. Fatora-Bot permet de corriger une facture sous le même numéro tant qu’elle n’a pas été transmise, ce qui évite la plupart des avoirs de confort.'
      },
      {
        q: 'Faut-il mentionner le mode de règlement ?',
        a: 'Ce n’est pas une mention exigée par l’article 145, mais c’est une bonne pratique commerciale, et certains clients l’imposent contractuellement. Au-delà de certains seuils, les modalités de règlement en espèces sont par ailleurs encadrées : votre comptable vous précisera les limites applicables à votre activité.'
      }
    ],
    related: ['ice-if-taxe-professionnelle', 'numerotation-factures', 'facturation-electronique-maroc'],
    updated: UPD,
    readMin: 8
  },

  {
    slug: 'ice-if-taxe-professionnelle',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'ICE, IF, taxe professionnelle : quel numéro sur vos factures',
    metaDesc:
      'Différence entre ICE, identifiant fiscal et numéro de taxe professionnelle au Maroc, où les trouver, lesquels sont obligatoires sur une facture et comment vérifier un ICE client.',
    keywords:
      'ICE maroc, identifiant commun entreprise, identifiant fiscal maroc, taxe professionnelle maroc, numéro ICE facture',
    title: 'ICE, identifiant fiscal, taxe professionnelle : lequel sert à quoi',
    intro:
      'Trois numéros, trois administrations, trois usages — et une confusion permanente. Voici ce que chacun identifie, où le récupérer, et lesquels doivent figurer sur vos factures.',
    answer:
      'L’ICE est l’identifiant unique d’une entreprise marocaine, composé de quinze chiffres, commun à toutes les administrations. L’identifiant fiscal rattache l’entreprise à son dossier à la Direction Générale des Impôts. Le numéro de taxe professionnelle correspond à la taxe locale d’activité. Les trois figurent sur une facture conforme.',
    blocks: [
      {
        h: 'L’ICE — Identifiant Commun de l’Entreprise',
        p: [
          'L’ICE a été créé pour mettre fin à la multiplication des identifiants : un même numéro, quinze chiffres, reconnu par la DGI, la CNSS, les douanes, le tribunal de commerce et l’ensemble des administrations. C’est aujourd’hui la clé d’identification principale d’une entreprise marocaine.',
          'Il est attribué lors de l’immatriculation, via la plateforme dédiée du registre du commerce. Il figure sur le modèle J du registre de commerce, sur vos attestations fiscales et sur vos documents d’immatriculation. Il ne change pas au cours de la vie de l’entreprise, sauf opérations exceptionnelles de restructuration.',
          'Sur une facture, l’ICE du vendeur est obligatoire. Celui du client l’est également dès lors que le client est une entreprise assujettie — c’est ce qui permet de rattacher l’opération aux deux comptabilités.'
        ]
      },
      {
        h: 'L’IF — identifiant fiscal',
        p: [
          'L’identifiant fiscal est le numéro sous lequel votre entreprise est connue de la Direction Générale des Impôts. Il sert à vos déclarations : TVA, impôt sur les sociétés ou impôt sur le revenu, retenues à la source.',
          'Antérieur à l’ICE, il n’a pas été supprimé par lui : les deux coexistent et répondent à des logiques différentes. L’ICE identifie l’entreprise partout ; l’IF identifie son dossier fiscal. Il figure sur vos avis d’imposition et sur votre attestation d’identification fiscale.'
        ]
      },
      {
        h: 'La taxe professionnelle (ex-patente)',
        p: [
          'La taxe professionnelle est une taxe locale due par toute personne exerçant une activité professionnelle au Maroc. Elle a remplacé l’ancienne patente et son numéro est attribué par les services fiscaux du lieu d’exercice.',
          'Un point souvent ignoré : le numéro de taxe professionnelle est rattaché à un établissement, pas à l’entreprise. Une société ayant plusieurs points de vente peut donc détenir plusieurs numéros. Sur la facture, on porte celui de l’établissement qui réalise l’opération.',
          'Les entreprises nouvellement créées bénéficient d’une exonération temporaire de taxe professionnelle sur leurs premières années d’activité. L’exonération porte sur le paiement, non sur l’identification : le numéro existe et se mentionne.'
        ]
      },
      {
        h: 'Où retrouver vos trois numéros',
        p: ['Si vous ne les avez pas sous la main, voici les documents où ils figurent.'],
        list: [
          'ICE : modèle J du registre de commerce, attestation d’ICE, statuts déposés, portail ice.gov.ma.',
          'Identifiant fiscal : attestation d’identification fiscale, avis d’imposition, en-tête de vos déclarations de TVA.',
          'Taxe professionnelle : avis d’imposition à la taxe professionnelle, délivré par les services fiscaux de votre commune.',
          'À défaut : votre expert-comptable ou fiduciaire dispose des trois dans votre dossier permanent.'
        ]
      },
      {
        h: 'Vérifier l’ICE d’un client',
        p: [
          'Avant d’accorder un délai de paiement ou d’engager une prestation importante, la vérification de l’ICE annoncé est un réflexe sain. Le portail public du registre du commerce permet de confirmer qu’un ICE correspond bien à la dénomination sociale annoncée.',
          'Deux contrôles élémentaires évitent la plupart des erreurs : la longueur — exactement quinze chiffres — et la cohérence entre le nom porté sur la facture et la raison sociale enregistrée. Une raison sociale approximative sur une facture est un motif fréquent de rejet chez les grands donneurs d’ordre.'
        ],
        note:
          'Fatora-Bot mémorise l’ICE et l’orthographe exacte de chaque client dans un référentiel. Pour un nom complexe, une photo du modèle J ou d’une facture existante suffit : les informations sont lues et enregistrées une fois pour toutes.'
      }
    ],
    faq: [
      {
        q: 'Quelle est la différence entre ICE et identifiant fiscal ?',
        a: 'L’ICE identifie l’entreprise auprès de toutes les administrations marocaines avec un numéro unique de quinze chiffres. L’identifiant fiscal identifie spécifiquement son dossier à la Direction Générale des Impôts et sert aux déclarations. Les deux coexistent et doivent tous deux figurer sur une facture conforme.'
      },
      {
        q: 'Un auto-entrepreneur a-t-il un ICE ?',
        a: 'Oui. L’inscription au registre national de l’auto-entrepreneur donne lieu à l’attribution d’un ICE, au même titre que pour une société. Il doit figurer sur les factures émises.'
      },
      {
        q: 'Combien de chiffres compte un ICE ?',
        a: 'Quinze exactement, zéros de tête compris. Un ICE affiché avec quatorze chiffres a presque toujours perdu un zéro initial lors d’une copie depuis un tableur, qui traite la suite comme un nombre. Un ICE doit toujours être stocké en format texte.'
      },
      {
        q: 'Que faire si mon client refuse de communiquer son ICE ?',
        a: 'S’il s’agit d’une entreprise assujettie, son ICE est nécessaire à la conformité de votre facture et à sa propre déduction de TVA : il a autant intérêt que vous à le fournir. S’il s’agit d’un particulier, la mention n’a pas lieu d’être et la facture reste valable sans elle.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'taux-tva-maroc', 'facture-auto-entrepreneur-maroc'],
    updated: UPD,
    readMin: 6
  },

  {
    slug: 'taux-tva-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Taux de TVA au Maroc : lequel appliquer sur vos factures',
    metaDesc:
      'Taux normal à 20 % et taux réduits au Maroc, comment déterminer celui qui s’applique à votre activité, ventiler plusieurs taux sur une facture et éviter les erreurs de calcul.',
    keywords:
      'taux TVA maroc, TVA 20% maroc, TVA réduite maroc, calcul TVA facture maroc, ventilation TVA',
    title: 'Quel taux de TVA appliquer sur une facture marocaine',
    intro:
      'Le taux normal couvre la majorité des opérations, mais les taux réduits concernent des secteurs entiers — et se sont déplacés au fil des lois de finances récentes. Voici comment raisonner, et où vérifier avant d’émettre.',
    answer:
      'Le taux normal de TVA au Maroc est de 20 %, applicable par défaut à la majorité des biens et services. Des taux réduits existent pour certaines activités et produits limitativement énumérés par le Code Général des Impôts. Le taux dépend de la nature de l’opération, pas du statut de l’entreprise, et doit être ventilé par ligne de facture.',
    blocks: [
      {
        h: 'Le principe : le taux suit l’opération, pas l’entreprise',
        p: [
          'C’est la règle qui évite la plupart des erreurs. Une même entreprise peut légitimement facturer à des taux différents selon ce qu’elle vend : ce n’est pas votre statut ni votre secteur déclaré qui détermine le taux, c’est la nature de chaque opération.',
          'Un menuisier qui vend un meuble et facture séparément une prestation de pose peut se trouver face à deux qualifications distinctes. Un traiteur qui vend des denrées et une prestation de service également. D’où l’importance d’une désignation précise sur chaque ligne : c’est elle qui justifie le taux appliqué.'
        ]
      },
      {
        h: 'Le taux normal : 20 %',
        p: [
          'Il s’applique par défaut à toutes les opérations imposables pour lesquelles aucun taux réduit ni exonération n’est expressément prévu. En pratique, la grande majorité des ventes de marchandises et des prestations de services relèvent de ce taux.',
          'Le raisonnement correct est donc négatif : on applique 20 % sauf si l’opération figure dans une liste de taux réduit ou d’exonération. Chercher à faire entrer une activité dans un taux réduit sans base textuelle est un risque de redressement.'
        ]
      },
      {
        h: 'Les taux réduits',
        p: [
          'Le CGI prévoit des taux réduits pour des catégories limitativement énumérées — produits de première nécessité, certains services d’intérêt général, opérations relevant de secteurs spécifiques. Historiquement, les taux réduits marocains se sont échelonnés à 14 %, 10 % et 7 %.',
          'Ce paysage a bougé. Les lois de finances récentes ont engagé une convergence progressive des taux réduits, avec des trajectoires pluriannuelles : certaines opérations montent par paliers vers un taux supérieur, d’autres descendent. Le taux applicable à une activité donnée peut donc différer d’une année à l’autre.'
        ],
        note:
          'C’est le point de cette page où il ne faut pas se fier à une source secondaire. Le taux exact applicable à votre activité pour l’exercice en cours doit être confirmé par votre expert-comptable ou vérifié dans la loi de finances de l’année sur le portail de la Direction Générale des Impôts.'
      },
      {
        h: 'Ventiler plusieurs taux sur une même facture',
        p: [
          'Dès qu’une facture mélange des opérations relevant de taux différents, chaque ligne doit porter son propre taux, et le pied de facture doit présenter un récapitulatif par taux : base hors taxe, montant de TVA, total.',
          'Sans cette ventilation, le montant de TVA déductible n’est pas déterminable ligne à ligne, et la facture est contestable. C’est une des erreurs les plus fréquentes des factures produites dans un tableur, où le total de TVA est souvent calculé globalement.'
        ],
        table: {
          head: ['Récapitulatif attendu en pied de facture', 'Base HT', 'TVA', 'Total TTC'],
          rows: [
            ['Opérations au taux normal', 'Somme des lignes concernées', 'Base × taux', 'Base + TVA'],
            ['Opérations au taux réduit', 'Somme des lignes concernées', 'Base × taux', 'Base + TVA'],
            ['Total facture', 'Total HT', 'Total TVA', 'Total TTC']
          ]
        }
      },
      {
        h: 'Le piège du prix « tout compris »',
        p: [
          'Au comptoir, un prix est presque toujours annoncé toutes taxes comprises. Le client dit « khallasni 1 200 » : ce sont 1 200 dirhams encaissés, TVA incluse. La facture, elle, doit partir du hors taxe.',
          'La conversion se fait en divisant le montant TTC par un plus le taux, et non en retranchant le taux du montant — erreur classique qui fausse la base de quelques pour cent. Pour 1 200 dirhams TTC au taux normal, la base hors taxe est de 1 000 dirhams et la TVA de 200 dirhams.',
          'Fatora-Bot reconnaît cette formulation : lorsqu’une somme est présentée comme encaissée — « khallasni », « ta3 kolchi » — elle est traitée comme un montant TTC et la base hors taxe est recalculée, puis annoncée dans le récapitulatif vocal avant émission.'
        ]
      }
    ],
    faq: [
      {
        q: 'Quel est le taux normal de TVA au Maroc ?',
        a: 'Le taux normal est de 20 %. Il s’applique par défaut à toutes les opérations imposables pour lesquelles le Code Général des Impôts ne prévoit pas expressément un taux réduit ou une exonération.'
      },
      {
        q: 'Comment retrouver le hors taxe à partir d’un prix TTC ?',
        a: 'On divise le montant TTC par un plus le taux. Au taux normal de 20 %, un montant de 1 200 dirhams TTC correspond à 1 000 dirhams hors taxe et 200 dirhams de TVA. Retrancher 20 % du montant TTC donnerait 960 dirhams, ce qui est faux.'
      },
      {
        q: 'Une entreprise non assujettie doit-elle facturer la TVA ?',
        a: 'Non. Une entreprise placée hors du champ de la TVA ou bénéficiant d’une exonération facture sans TVA, en portant la mention correspondante sur le document. Elle ne peut alors pas déduire la TVA sur ses achats. Votre régime exact est à confirmer avec votre comptable.'
      },
      {
        q: 'Peut-on mélanger plusieurs taux sur une facture ?',
        a: 'Oui, et c’est fréquent. Chaque ligne porte alors son propre taux et le pied de facture présente un récapitulatif par taux : base hors taxe, TVA, total. Sans cette ventilation, le montant déductible n’est pas déterminable et la facture devient contestable.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'ice-if-taxe-professionnelle', 'numerotation-factures'],
    updated: UPD,
    readMin: 7
  },

  {
    slug: 'numerotation-factures',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Numérotation des factures au Maroc : règles et erreurs',
    metaDesc:
      'Pourquoi la séquence des numéros de facture doit être continue, comment la construire, que faire d’une facture annulée et pourquoi un trou dans la série attire le contrôle.',
    keywords:
      'numérotation facture maroc, numéro facture séquentiel, série facture, annulation facture maroc, avoir facture',
    title: 'Numéroter ses factures sans créer de trou dans la série',
    intro:
      'La numérotation paraît anodine jusqu’au jour du contrôle. Une séquence trouée soulève une question simple à laquelle il est difficile de répondre : où est passée la facture manquante ?',
    answer:
      'Les factures doivent porter un numéro séquentiel, continu et chronologique, sans rupture ni doublon. Une facture émise ne se supprime jamais : elle s’annule par un avoir ou se rectifie par une facture rectificative référençant l’originale. Un trou dans la série laisse présumer une facture soustraite à la comptabilité.',
    blocks: [
      {
        h: 'Pourquoi la continuité est le cœur du sujet',
        p: [
          'La numérotation continue est le mécanisme le plus simple qui existe pour rendre une omission visible. Si les factures vont de 1 à 250 sans interruption, le nombre d’opérations est établi. S’il manque le numéro 137, deux hypothèses seulement : une erreur de gestion, ou une vente non déclarée.',
          'L’administration n’a pas à trancher entre les deux : c’est à l’entreprise d’apporter la justification. D’où la règle pratique : conservez la trace de toute facture annulée, avec son motif. Une facture annulée et archivée est une explication ; une facture disparue est un soupçon.'
        ]
      },
      {
        h: 'Construire une série lisible',
        p: [
          'Aucun format n’est imposé, mais un bon format se lit sans documentation. La convention la plus répandue combine un préfixe, l’exercice et un compteur à largeur fixe.'
        ],
        list: [
          'FAT-2026-0001 — préfixe, année, compteur sur quatre chiffres. Lisible, triable, et le compteur repart à 1 au 1ᵉʳ janvier.',
          'Le compteur à largeur fixe évite le désordre de tri : 0002 se classe avant 0010, alors que « 2 » se classerait après « 10 » dans un tri alphabétique.',
          'Une série par exercice est la pratique la plus courante et la plus simple à défendre. Une série continue sur plusieurs années reste acceptable, à condition de ne jamais repartir en arrière.',
          'Si vous tenez plusieurs séries — par établissement ou par type de document — chacune doit être continue de son côté, et le préfixe doit les distinguer sans ambiguïté.'
        ],
        note:
          'Fatora-Bot attribue automatiquement un numéro au format FAT-AAAA-NNNN, continu par exercice et propre à chaque entreprise. Aucun numéro n’est réutilisé, et aucun n’est sauté.'
      },
      {
        h: 'Annuler ou corriger sans casser la série',
        p: [
          'Trois situations, trois traitements différents. Les confondre est la source la plus fréquente de séries incohérentes.'
        ],
        table: {
          head: ['Situation', 'Traitement correct'],
          rows: [
            [
              'Erreur détectée avant remise au client',
              'Corriger la facture sous le même numéro. Aucun impact sur la série tant que le document n’a pas circulé.'
            ],
            [
              'Erreur détectée après remise au client',
              'Émettre une facture rectificative portant un nouveau numéro et référençant explicitement la facture d’origine.'
            ],
            [
              'Opération annulée ou retour de marchandise',
              'Émettre un avoir, avec son propre numéro dans la série, référençant la facture annulée. La facture d’origine reste en place.'
            ]
          ]
        }
      },
      {
        h: 'Ce qui devient visible avec la facturation électronique',
        p: [
          'Dans un dispositif de validation préalable, chaque facture est déclarée à une plateforme nationale au moment de son émission. Les ruptures de séquence ne sont plus détectées lors d’un contrôle ponctuel : elles sont visibles en continu, mécaniquement.',
          'Les entreprises qui gèrent aujourd’hui leur numérotation à la main, dans un carnet ou un tableur, ont donc un intérêt direct à basculer sur un outil qui incrémente le compteur lui-même. Ce n’est pas une question de confort mais d’exposition.'
        ]
      }
    ],
    faq: [
      {
        q: 'Peut-on supprimer une facture déjà émise ?',
        a: 'Non. Une facture émise fait partie de la série et sa suppression crée un trou injustifiable. Selon le cas, on émet un avoir ou une facture rectificative référençant l’originale, et on conserve la trace du document annulé avec son motif.'
      },
      {
        q: 'La numérotation doit-elle repartir à 1 chaque année ?',
        a: 'Ce n’est pas obligatoire, mais c’est l’usage le plus répandu et le plus simple à justifier, à condition que l’exercice figure dans le numéro — par exemple FAT-2026-0001. Une série continue sur plusieurs années reste acceptable tant qu’elle ne revient jamais en arrière.'
      },
      {
        q: 'Que faire si deux factures ont reçu le même numéro ?',
        a: 'Un doublon est aussi problématique qu’un trou : deux opérations distinctes deviennent indiscernables. Il faut émettre une facture rectificative pour l’une des deux, sous un numéro libre en fin de série, et documenter la correction. Un compteur automatique supprime ce risque à la source.'
      },
      {
        q: 'Puis-je tenir plusieurs séries de numéros ?',
        a: 'Oui, par exemple une série par établissement ou par type de document. Chaque série doit alors être continue de son côté, et son préfixe doit permettre de l’identifier sans ambiguïté. Multiplier les séries sans nécessité complique inutilement les justifications.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'facturation-electronique-maroc', 'taux-tva-maroc'],
    updated: UPD,
    readMin: 6
  },

  {
    slug: 'facture-auto-entrepreneur-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Facture auto-entrepreneur au Maroc : règles et modèle',
    metaDesc:
      'Comment un auto-entrepreneur marocain facture légalement : mentions à porter, question de la TVA, plafonds de chiffre d’affaires et passage en société.',
    keywords:
      'facture auto entrepreneur maroc, auto entrepreneur maroc TVA, plafond auto entrepreneur maroc, statut auto entrepreneur facture',
    title: 'Facturer en tant qu’auto-entrepreneur au Maroc',
    intro:
      'Le statut d’auto-entrepreneur simplifie beaucoup de choses, mais pas la facture : elle reste un document opposable qui doit porter les mentions attendues. Voici ce qui change par rapport à une société, et ce qui ne change pas.',
    answer:
      'Un auto-entrepreneur marocain doit émettre des factures numérotées comportant son ICE, son identité complète, celle du client, la désignation précise de la prestation et le montant. Le régime relève d’une imposition forfaitaire sur le chiffre d’affaires, avec des plafonds annuels distincts pour les activités de services et les activités commerciales, industrielles ou artisanales.',
    blocks: [
      {
        h: 'Ce qui ne change pas par rapport à une société',
        p: [
          'L’essentiel. L’auto-entrepreneur est immatriculé au registre national de l’auto-entrepreneur et se voit attribuer un ICE, exactement comme une société. Sa facture est un document commercial opposable, et son client en a besoin pour justifier sa charge.',
          'Les mentions d’identification, la désignation précise de la prestation, la date, le numéro séquentiel continu et le montant total sont donc attendus dans les mêmes termes. La séquence de numérotation obéit aux mêmes règles : continue, sans trou, sans doublon.'
        ]
      },
      {
        h: 'Ce qui change : le régime fiscal',
        p: [
          'Le régime de l’auto-entrepreneur repose sur une imposition assise sur le chiffre d’affaires encaissé, à un taux forfaitaire réduit, avec une distinction entre activités de services d’une part, activités commerciales, industrielles et artisanales d’autre part. Les taux et les plafonds annuels de chiffre d’affaires diffèrent selon cette catégorie.',
          'Des règles particulières encadrent par ailleurs les revenus de services perçus d’un même client au-delà d’un certain seuil annuel — dispositif introduit pour éviter que le statut ne serve à déguiser une relation salariale. La fraction concernée relève alors d’un traitement fiscal distinct.'
        ],
        note:
          'Les taux forfaitaires, les plafonds de chiffre d’affaires et le seuil par client sont modifiés par les lois de finances. Confirmez les valeurs de l’exercice en cours auprès de la Direction Générale des Impôts, de Maroc PME ou de votre comptable avant de vous engager sur un volume d’activité.'
      },
      {
        h: 'La question de la TVA',
        p: [
          'C’est la source de confusion la plus fréquente. Le régime forfaitaire de l’auto-entrepreneur porte sur l’imposition du revenu ; il ne dispense pas automatiquement de toute obligation en matière de TVA, dont le champ obéit à ses propres règles selon la nature de l’activité et le niveau de chiffre d’affaires.',
          'Dans les faits, une grande partie des auto-entrepreneurs facture sans TVA et porte la mention correspondante sur ses factures. Mais la situation dépend de l’activité exercée. Avant d’émettre votre première facture, faites confirmer votre position exacte : facturer de la TVA sans y être assujetti, ou l’omettre alors qu’elle est due, sont deux erreurs également coûteuses à rattraper.'
        ]
      },
      {
        h: 'Dépassement de plafond : anticiper la sortie du régime',
        p: [
          'Le dépassement du plafond de chiffre d’affaires fait sortir du régime de l’auto-entrepreneur, avec un basculement vers un régime de droit commun. Ce n’est pas une sanction : c’est le signe d’une activité qui a grandi.',
          'L’erreur est de le découvrir après coup. Suivre son chiffre d’affaires cumulé au fil de l’année permet d’anticiper le changement de statut, de préparer le passage en société si nécessaire et d’ajuster sa tarification en conséquence — puisque la structure de charges change.',
          'C’est un argument concret en faveur d’un outil qui totalise automatiquement. Avec Fatora-Bot, le cumul par période est consultable à la voix : « les factures du mois », « le total depuis janvier ».'
        ]
      },
      {
        h: 'Le cas des professionnels qui écrivent peu',
        p: [
          'Le statut d’auto-entrepreneur a été conçu pour formaliser l’activité de professionnels indépendants — artisans, prestataires, petits commerçants. Une partie d’entre eux maîtrise mal l’écrit, en particulier le français administratif.',
          'Pour ces professionnels, la facturation vocale n’est pas un confort mais une condition d’accès à la conformité. Dicter la facture en darija, entendre le récapitulatif à voix haute, confirmer d’un mot : c’est la seule chaîne qui ne suppose ni ordinateur, ni clavier, ni lecture.'
        ]
      }
    ],
    faq: [
      {
        q: 'Un auto-entrepreneur marocain doit-il facturer la TVA ?',
        a: 'Cela dépend de la nature de l’activité et du niveau de chiffre d’affaires : le régime forfaitaire porte sur l’imposition du revenu et ne règle pas à lui seul la question de la TVA. Faites confirmer votre situation exacte par votre comptable avant d’émettre votre première facture.'
      },
      {
        q: 'Un auto-entrepreneur a-t-il un ICE à porter sur ses factures ?',
        a: 'Oui. L’inscription au registre national de l’auto-entrepreneur donne lieu à l’attribution d’un ICE, qui doit figurer sur les factures émises, au même titre que pour une société.'
      },
      {
        q: 'Que se passe-t-il en cas de dépassement du plafond ?',
        a: 'Le dépassement du plafond annuel de chiffre d’affaires entraîne la sortie du régime de l’auto-entrepreneur et le basculement vers un régime de droit commun. Suivre son cumul en cours d’année permet d’anticiper ce changement plutôt que de le subir.'
      },
      {
        q: 'Faut-il un logiciel de facturation pour être auto-entrepreneur ?',
        a: 'Aucun logiciel n’est imposé aujourd’hui. Ce qui est exigé, ce sont des factures complètes et numérotées en continu. Avec l’arrivée de la facturation électronique obligatoire, un outil produisant des documents structurés deviendra en revanche nécessaire — d’où l’intérêt de ne pas rester sur un carnet ou un tableur.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'ice-if-taxe-professionnelle', 'facture-whatsapp-comment-faire'],
    updated: UPD,
    readMin: 7
  },

  {
    slug: 'facture-whatsapp-comment-faire',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Faire une facture sur WhatsApp : la méthode complète',
    metaDesc:
      'Comment émettre une facture conforme depuis WhatsApp, en dictant en darija ou en français : mise en route, dictée, validation, remise au client par QR code ou email.',
    keywords:
      'facture whatsapp, facturation whatsapp maroc, faire une facture par whatsapp, facture vocale darija, facture sans logiciel',
    title: 'Émettre une facture depuis WhatsApp, en parlant',
    intro:
      'WhatsApp est déjà sur le téléphone de vos équipes. Il ne manque qu’un interlocuteur au bout de la conversation capable de comprendre une facture dictée et de la transformer en PDF conforme. Voici comment se déroule le processus, étape par étape.',
    answer:
      'Pour facturer depuis WhatsApp, on ouvre une conversation avec un service de facturation conversationnelle, on renseigne une fois les informations de l’entreprise (raison sociale, ICE, identifiant fiscal, taxe professionnelle, adresse, taux de TVA), puis on dicte chaque facture en langage courant. Le service renvoie un récapitulatif à valider, puis le PDF numéroté.',
    blocks: [
      {
        h: 'La mise en route : une fois, six informations',
        p: [
          'Avant la première facture, le service a besoin de ce qui figurera en tête de tous vos documents. Cette configuration se fait une seule fois, dans la conversation, question par question.'
        ],
        list: [
          'La raison sociale exacte de l’entreprise, telle qu’elle doit apparaître sur la facture.',
          'L’ICE à quinze chiffres.',
          'L’identifiant fiscal.',
          'Le numéro de taxe professionnelle.',
          'L’adresse de l’établissement.',
          'Le taux de TVA appliqué par défaut à votre activité.'
        ],
        note:
          'Les informations que vous n’avez pas sous la main peuvent être passées et complétées plus tard. Une photo de votre cachet, envoyée dans la conversation, suffit pour qu’il soit incrusté automatiquement sur toutes vos factures.'
      },
      {
        h: 'Dicter : parler comme on parle à un collègue',
        p: [
          'Il n’y a pas de syntaxe à retenir, pas de mot-clé à placer dans le bon ordre. On décrit la vente comme on la décrirait à quelqu’un.',
          'Trois formulations, également comprises : « Facture pour Ahmed Transport, 3 portes en bois à 1500 dirhams et une pose à 800 » ; « sayab liya fatora l Karim, tlata dyal l-bibane b alf ou khamsmya l-wa7da » ; ou une note vocale en darija, en français ou en tamazight.',
          'Le vocabulaire commercial marocain est pris en charge tel qu’il est parlé : les prix annoncés en riyal — un vingtième de dirham — ou en melyoun — dix mille dirhams — sont convertis ; « khallasni » signale un montant encaissé, donc toutes taxes comprises, et la base hors taxe est recalculée ; une correction en cours de phrase — « la, joj b 200 » — remplace la valeur précédente.'
        ]
      },
      {
        h: 'Valider : le récapitulatif avant émission',
        p: [
          'Rien n’est émis sans confirmation explicite. Le service renvoie ce qu’il a compris : le client, chaque article avec sa quantité et son prix unitaire, la TVA et le total toutes taxes comprises.',
          'Si la demande est arrivée en note vocale, le récapitulatif est également prononcé à voix haute, en darija. C’est ce qui rend le processus accessible à quelqu’un qui lit difficilement : il entend le montant et le nom du client avant de dire « wakha ».',
          'Une correction à ce stade ne coûte rien : on reprend la parole, on indique ce qui change, le récapitulatif est régénéré. Le numéro de facture n’est attribué qu’à la confirmation.'
        ]
      },
      {
        h: 'Remettre la facture au client',
        p: [
          'Le PDF arrive dans la conversation, avec le cachet de l’entreprise. Trois canaux de remise sont disponibles, et le choix se dit simplement.'
        ],
        table: {
          head: ['Canal', 'Cas d’usage'],
          rows: [
            ['QR code', 'Au comptoir : le client scanne l’écran du vendeur et télécharge sa facture, sans échanger d’adresse email.'],
            ['WhatsApp', 'Le client est déjà dans vos contacts : la facture lui est transmise directement.'],
            ['Email', 'Le client a besoin du document dans sa boîte pour sa comptabilité.']
          ]
        },
        note:
          'Tout envoi vers l’extérieur exige une confirmation explicite : le destinataire est répété avant expédition. C’est ce qui évite l’erreur la plus embarrassante — la facture d’un client envoyée à un autre.'
      },
      {
        h: 'Retrouver une facture plus tard',
        p: [
          'Les archives se consultent dans la même conversation, à la voix : « la facture numéro 8 », « les factures du mois », « toutes celles d’Ahmed ». Le PDF est renvoyé, accompagné d’un résumé audio et du total de la période.',
          'C’est souvent l’usage le plus apprécié après quelques semaines : il supprime l’appel au comptable pour retrouver un document, et le total par période donne une visibilité immédiate sur le chiffre d’affaires facturé.'
        ]
      }
    ],
    faq: [
      {
        q: 'Faut-il installer une application ?',
        a: 'Non. Tout se passe dans WhatsApp, déjà installé sur pratiquement tous les téléphones professionnels au Maroc. Il n’y a rien à télécharger, aucune licence par poste et aucune formation à organiser.'
      },
      {
        q: 'La facture produite est-elle conforme à la réglementation marocaine ?',
        a: 'Le PDF porte l’ICE, l’identifiant fiscal, le numéro de taxe professionnelle, la TVA détaillée, le montant en toutes lettres et une numérotation continue par exercice — les mentions exigées par l’article 145 du Code Général des Impôts.'
      },
      {
        q: 'Et si la personne qui facture lit difficilement ?',
        a: 'La conversation peut être entièrement vocale. La demande se dicte, le récapitulatif est prononcé à voix haute en darija, et la confirmation se donne d’un mot parlé. C’est le cas d’usage pour lequel le service a été conçu.'
      },
      {
        q: 'Plusieurs personnes peuvent-elles facturer pour la même entreprise ?',
        a: 'Oui. Les données sont cloisonnées par entreprise : référentiel clients, numérotation et cachet sont partagés au sein de la société, et étanches vis-à-vis des autres. Pour un déploiement multi-comptes, contactez-nous.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'facture-auto-entrepreneur-maroc', 'alternative-logiciel-facturation'],
    updated: UPD,
    readMin: 6
  }
];
