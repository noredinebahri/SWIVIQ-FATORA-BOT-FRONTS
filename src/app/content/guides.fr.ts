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
    metaTitle: 'Facture WhatsApp au Maroc : PDF conforme en 30 secondes',
    metaDesc:
      'Facture par WhatsApp au Maroc : dictez en darija ou en français, le PDF conforme (ICE, TVA, numérotation) part chez le client par QR code, WhatsApp ou email. Devis WhatsApp aussi. La méthode complète, étape par étape.',
    keywords:
      'facture whatsapp, facture whatsapp maroc, faire une facture sur whatsapp, devis whatsapp, facturation whatsapp business, facture vocale darija, facture sans logiciel',
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
  },

  {
    slug: 'api-facturation-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'API de facturation au Maroc : le guide pour intégrateurs',
    metaDesc:
      'Intégrer la facturation marocaine conforme (ICE, TVA, numérotation continue) dans un SaaS, un CRM ou un site : ce qu’exige la loi, les options techniques comparées, et comment une API dédiée fait le travail en un appel HTTP.',
    keywords:
      'api facturation maroc, api facture maroc, api de facturation, facturation saas maroc, api devis maroc, intégrer facturation application maroc, api facturation électronique maroc',
    title: 'API de facturation au Maroc : intégrer des factures conformes dans votre application',
    intro:
      'Votre SaaS, votre CRM ou votre plateforme e-commerce sert des clients marocains, et ils vous réclament des factures conformes. Développer un module de facturation marocaine soi-même est un projet en soi — mentions légales, numérotation, TVA, régimes fiscaux, e-facturation à venir. Voici ce que la loi exige, les options techniques qui existent réellement, et comment une API de facturation dédiée réduit le chantier à un appel HTTP.',
    answer:
      'Une API de facturation au Maroc permet à une application (SaaS, CRM, e-commerce, ERP) d’émettre des factures et devis conformes au Code Général des Impôts — ICE, identifiant fiscal, TVA ventilée, montant en toutes lettres, numérotation continue — par simple appel HTTP, sans développer de module de facturation. L’API Fatora est incluse dans tous les plans, avec remise par WhatsApp, email ou QR code.',
    blocks: [
      {
        h: 'Pourquoi la facturation marocaine ne s’improvise pas',
        p: [
          'Une facture marocaine valable n’est pas un simple PDF avec un total. L’article 145 du Code Général des Impôts impose une liste de mentions précises : ICE et identifiant fiscal de l’émetteur, taxe professionnelle, ICE du client en B2B, TVA ventilée par taux, montant en toutes lettres, numérotation continue et chronologique sans trou. Une facture incomplète est refusable par le client et rejetable en contrôle fiscal.',
          'S’y ajoutent les régimes particuliers : un auto-entrepreneur (loi 114-13) facture hors champ de TVA avec une mention obligatoire ; une entreprise exonérée porte une mention différente ; les taux de TVA ont été resserrés à 20 % et 10 % depuis 2026. Et l’e-facturation obligatoire (modèle de validation préalable) arrive par vagues — chaque facture devra transiter par la plateforme nationale.',
          'Pour un éditeur de logiciel dont la facturation n’est pas le métier, maintenir tout cela à jour à chaque loi de finances est un coût récurrent, pas un développement ponctuel. C’est exactement le genre de brique qu’on délègue.'
        ]
      },
      {
        h: 'Les trois options techniques, comparées',
        p: [
          'Trois voies s’offrent à un intégrateur qui doit produire des factures marocaines depuis son application.'
        ],
        table: {
          head: ['Option', 'Effort initial', 'Conformité', 'Maintenance'],
          rows: [
            ['Développer son module (génération PDF maison)', 'Semaines à mois', 'À votre charge, à chaque loi de finances', 'Permanente : taux, mentions, e-facturation'],
            ['Générateur de PDF générique (international)', 'Jours', 'Aucune : pas d’ICE, pas de TVA marocaine, pas de numérotation légale', 'Faible mais le résultat n’est pas une facture conforme'],
            ['API de facturation marocaine (Fatora)', 'Une heure — un appel HTTP', 'Portée par l’API : mentions 145 CGI, régimes, taux à jour', 'Aucune côté intégrateur']
          ]
        },
        note:
          'Le point souvent oublié : la numérotation. Une séquence FAT-2026-0001, 0002, 0003 sans trou appartient au commerçant, pas à votre application. Une API multi-tenant sérieuse gère une séquence par compte — c’est ce qui rend le document opposable.'
      },
      {
        h: 'Comment fonctionne l’API Fatora',
        p: [
          'Chaque commerçant Fatora possède une clé API personnelle, obtenue en écrivant « api » à son bot WhatsApp. Votre application stocke cette clé et émet en son nom : la facture sort dans SA numérotation, avec SON cachet, SON logo et SON régime fiscal — que votre code n’a même pas besoin de connaître, l’API l’impose d’elle-même.',
          'Un appel POST /v1/documents avec le client et les lignes suffit : l’API calcule la TVA, génère le PDF, et le remet au choix par WhatsApp, par email ou via un QR code à afficher ou imprimer. La modification se fait en langage libre : votre utilisateur écrit « remplace la formation par 3 jours à 1200 dh » dans un champ texte, l’IA applique la correction sur le même numéro de facture.',
          'La documentation complète, avec des exemples testés en production pour chaque endpoint, est sur la page API du site (menu « API »). Tout est inclus dans l’abonnement du commerçant, dès l’essai gratuit — les devis ne consomment même pas le quota.'
        ]
      },
      {
        h: 'Qui a intérêt à intégrer une API de facturation',
        p: [
          'Les cas d’usage reviennent toujours aux mêmes profils :'
        ],
        list: [
          'Éditeurs SaaS et CRM marocains : un bouton « Facturer » dans votre interface, la conformité en plus, sans écrire le module.',
          'Plateformes e-commerce et marketplaces : facture automatique à chaque commande, remise au client par email ou QR sur le bon de livraison.',
          'Agences web : offrez la facturation conforme à vos clients commerçants sans développer ni maintenir quoi que ce soit.',
          'ERP verticaux (transport, BTP, distribution) : vos utilisateurs facturent depuis l’outil métier qu’ils ont déjà.',
          'Logiciels de caisse : ticket + QR code de la facture imprimés ensemble — le client scanne et repart avec sa facture.'
        ]
      },
      {
        h: 'Et l’e-facturation obligatoire dans tout ça ?',
        p: [
          'C’est l’argument décisif pour déléguer plutôt que développer. Quand la plateforme nationale de validation préalable activera votre segment de clients, chaque facture devra être transmise dans un format structuré et validée avant d’être opposable. Si votre application génère ses PDF elle-même, ce raccordement sera votre chantier. Si elle passe par une API de facturation, c’est le fournisseur de l’API qui se raccorde — une fois, pour tous ses intégrateurs.',
          'Émettre dès aujourd’hui des documents structurés, complets et correctement numérotés via une API, c’est précisément l’état dans lequel il faut être le jour où la bascule arrive.'
        ]
      }
    ],
    faq: [
      {
        q: 'Combien coûte l’intégration de l’API Fatora ?',
        a: 'Rien pour l’intégrateur. L’API est incluse dans tous les plans Fatora, dès l’essai gratuit. Chaque commerçant paie son propre abonnement (à partir de 30 DH/mois) et les factures émises par l’API comptent dans son quota ; les devis sont gratuits et illimités.'
      },
      {
        q: 'Mon application doit-elle gérer les taux de TVA et les régimes fiscaux ?',
        a: 'Non. Le régime fiscal du commerçant (normal, auto-entrepreneur, exonéré) est enregistré dans son compte Fatora et s’impose à l’API : un auto-entrepreneur sortira toujours des factures sans TVA avec la mention légale, quoi que votre application envoie. Vous pouvez préciser un taux par ligne si besoin.'
      },
      {
        q: 'Comment le client final reçoit-il sa facture ?',
        a: 'Trois canaux, cumulables : WhatsApp (le PDF arrive dans sa conversation), email (message avec pièce jointe), ou QR code (chaque document expose une image PNG à afficher en caisse ou imprimer — le client scanne et télécharge). Un document perdu se renvoie en un appel.'
      },
      {
        q: 'Est-ce compatible avec un logiciel étranger qui n’a rien de marocain ?',
        a: 'Oui, c’est le cas d’usage type : le logiciel étranger garde sa logique métier et appelle l’API au moment de facturer un client marocain. Toute la conformité locale — mentions, numérotation, TVA, langue du document — est portée par l’API.'
      },
      {
        q: 'Que se passe-t-il si mon utilisateur veut corriger une facture émise ?',
        a: 'Votre application envoie la correction en texte libre à l’endpoint de modification : « le client est en fait STE X, remplace la ligne 2 par… ». L’IA applique le changement sur le même numéro, régénère le PDF et recalcule les totaux. Si l’instruction est ambiguë, l’API répond 422 sans rien modifier.'
      }
    ],
    related: ['generer-facture-pdf-api', 'facturation-electronique-maroc', 'mentions-obligatoires-facture', 'devis-conforme-maroc'],
    updated: '2026-08-15',
    readMin: 8
  },

  {
    slug: 'generer-facture-pdf-api',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Générer une facture PDF par API : tutoriel Maroc 2026',
    metaDesc:
      'Générer une facture PDF conforme par API en un appel HTTP : obtenir la clé, émettre le document, gérer TVA et montants TTC, remettre au client par WhatsApp, email ou QR code. Tutoriel pas à pas, exemples testés.',
    keywords:
      'générer facture pdf api, créer facture automatique api, api génération facture, facture pdf automatique maroc, api facture pdf, générer devis api',
    title: 'Générer une facture PDF par API : le tutoriel pas à pas',
    intro:
      'Vous voulez qu’un clic dans votre application produise une vraie facture marocaine — PDF conforme, numérotée, avec cachet — et qu’elle arrive chez le client. Voici le parcours complet avec l’API Fatora, du premier appel à la remise, tel qu’il fonctionne en production.',
    answer:
      'Pour générer une facture PDF par API au Maroc : obtenir la clé API du commerçant (il écrit « api » à son bot WhatsApp Fatora), puis envoyer un POST à bot.swiviq.com/v1/documents avec le client et les lignes. L’API calcule la TVA, génère un PDF conforme numéroté dans la séquence du commerçant, et le remet par WhatsApp, email ou QR code.',
    blocks: [
      {
        h: 'Étape 1 — la clé API, sans inscription développeur',
        p: [
          'Il n’y a ni console développeur ni validation manuelle. Le commerçant ouvre sa conversation WhatsApp Fatora-Bot et écrit « api » : le bot répond avec sa clé personnelle, au format fk_ suivi de 40 caractères. C’est cette clé que votre application stocke et passe dans l’en-tête Authorization: Bearer.',
          'La clé est propre à chaque commerçant : elle émet dans SA numérotation et ne voit que SES documents. « api reset » la régénère à tout moment — l’ancienne est immédiatement révoquée. Un GET /v1/account est le moyen le plus simple de vérifier qu’une clé collée par l’utilisateur est valide : il renvoie le profil société, le plan et le quota restant.'
        ]
      },
      {
        h: 'Étape 2 — émettre le document',
        p: [
          'Un seul appel : POST /v1/documents, avec le nom du client (et son ICE en B2B), puis les lignes — description, quantité, prix unitaire. L’API calcule la TVA ligne par ligne, applique le régime fiscal du commerçant, génère le PDF avec logo et cachet, et répond en 201 avec le numéro attribué, les totaux HT/TVA/TTC, le lien du PDF et l’URL d’un QR code.',
          'Deux options changent tout au quotidien. « type »: « quote » émet un devis (numéroté DEV-, valable 30 jours, hors quota) au lieu d’une facture. « priceIsTtc »: true indique que vos montants sont TTC : l’API reconstitue la base hors taxe elle-même — indispensable quand vos prix de vente sont affichés TTC.',
          'Pour corriger un document déjà émis, pas de schéma de mise à jour à apprendre : l’endpoint de modification accepte une instruction en texte libre (« remplace la formation par 3 jours à 1200 dh le jour ») et l’applique sur le même numéro, PDF régénéré, totaux recalculés.'
        ],
        note:
          'La numérotation reste continue : modifier ne crée jamais de trou dans la séquence, et annuler passe par un avoir — comme l’exige la réglementation marocaine.'
      },
      {
        h: 'Étape 3 — remettre la facture au client',
        p: [
          'Générer le PDF ne sert à rien si le client ne le reçoit pas. Trois canaux sont disponibles, à la création (champs « sendToPhone » et « sendToEmail ») ou après coup via l’endpoint d’envoi :'
        ],
        list: [
          'WhatsApp : le PDF part dans la conversation du client, au nom du commerçant.',
          'Email : message soigné avec la facture en pièce jointe.',
          'QR code : chaque document expose une image PNG publique — affichez-la en caisse, imprimez-la sur le ticket, le client scanne et télécharge sa facture.'
        ]
      },
      {
        h: 'Les erreurs à gérer dans votre code',
        p: [
          'L’API renvoie toujours un JSON à deux champs : « error » (code machine stable) et « message » (explication affichable telle quelle). Quatre cas méritent un traitement spécifique dans votre interface : le 402 quota atteint (la réponse contient used et limit — affichez-les, le commerçant change de plan en deux messages WhatsApp), le 401 clé invalide (souvent une clé régénérée par « api reset » — redemandez-la), le 422 instruction incomprise (proposez de reformuler, rien n’a été modifié), et le 429 au-delà de 60 requêtes par minute (mettez en file et réessayez).',
          'La liste complète des codes, avec un exemple de réponse pour chacun, figure sur la page API du site — chaque exemple y a été rejoué contre l’API de production.'
        ]
      }
    ],
    faq: [
      {
        q: 'Faut-il un compte développeur ou une validation pour utiliser l’API ?',
        a: 'Non. La clé s’obtient en écrivant « api » au bot WhatsApp du compte Fatora concerné, en quelques secondes. Il n’y a ni console, ni contrat, ni frais : l’API est incluse dans tous les plans, essai gratuit compris.'
      },
      {
        q: 'Le PDF généré est-il vraiment conforme pour un contrôle fiscal ?',
        a: 'Le PDF porte les mentions de l’article 145 CGI : ICE, identifiant fiscal, taxe professionnelle, TVA ventilée, montant en toutes lettres, numérotation continue, et les mentions de régime (auto-entrepreneur, exonéré) quand elles s’appliquent. Le cachet et le logo du commerçant sont apposés automatiquement.'
      },
      {
        q: 'Puis-je générer des devis et les transformer en factures ?',
        a: 'Oui. « type »: « quote » émet un devis numéroté DEV- valable 30 jours, gratuit et hors quota. La conversion en facture se fait ensuite par l’instruction libre (« transforme le devis DEV-2026-0012 en facture ») — la facture prend un numéro FAT- normal.'
      },
      {
        q: 'Comment tester sans polluer la numérotation du commerçant ?',
        a: 'Émettez des devis pendant vos tests : ils sont gratuits, illimités et n’entament pas la séquence des factures. Gardez l’émission de vraies factures pour la mise en production — chaque facture émise entre dans la numérotation légale et s’annule par avoir, pas par suppression.'
      }
    ],
    related: ['api-facturation-maroc', 'numerotation-factures', 'taux-tva-maroc', 'facture-whatsapp-comment-faire'],
    updated: '2026-08-15',
    readMin: 6
  },

  {
    slug: 'modele-facture-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Modèle de facture Maroc 2026 : structure et mentions',
    metaDesc:
      'Le modèle de facture marocaine conforme, section par section : en-tête ICE/IF, identité du client, lignes et TVA, montant en lettres, pied de page légal. Ce qu’un modèle Word ou Excel ne gère pas, et comment l’éviter.',
    keywords:
      'modèle facture maroc, exemple facture maroc, modèle facture word maroc, modèle facture excel maroc, facture type maroc, modèle facture ICE, modèle devis maroc',
    title: 'Modèle de facture au Maroc : la structure complète, section par section',
    intro:
      'Vous cherchez un modèle de facture conforme aux règles marocaines ? Voici exactement ce qu’il doit contenir, bloc par bloc, du premier ICE au montant en toutes lettres — puis ce qu’aucun modèle Word ou Excel ne gérera jamais à votre place : la numérotation continue, l’archivage et les régimes fiscaux.',
    answer:
      'Un modèle de facture marocaine conforme comporte cinq blocs : l’en-tête émetteur (raison sociale, ICE, IF, taxe professionnelle, RC, adresse), l’identité du client (raison sociale et ICE en B2B), le numéro et la date, le tableau des lignes avec TVA ventilée par taux, et le pied avec totaux HT/TVA/TTC, montant en toutes lettres et conditions de règlement.',
    blocks: [
      {
        h: 'Bloc 1 — l’en-tête de l’émetteur',
        p: [
          'En haut de la facture figurent les identifiants de votre entreprise, tous obligatoires : raison sociale (ou nom pour un auto-entrepreneur), ICE à 15 chiffres, identifiant fiscal (IF), numéro de taxe professionnelle, numéro de registre de commerce pour les sociétés, et adresse du siège. Le logo et le cachet ne sont pas exigés par la loi, mais un client B2B structuré s’attend à les voir — et beaucoup de services de l’État refusent en pratique une facture sans cachet.',
          'Pour une société, ajoutez la forme juridique et le capital social (SARL au capital de X DH). Un auto-entrepreneur mentionne à la place « TVA non applicable — auto-entrepreneur, loi n° 114-13 ».'
        ]
      },
      {
        h: 'Bloc 2 — l’identité du client',
        p: [
          'En B2B, la raison sociale exacte et l’ICE du client sont obligatoires : sans son ICE, votre client ne peut pas déduire la TVA, et c’est le premier motif de rejet d’une facture. En B2C, le nom du particulier suffit ; pour certaines professions, le CIN est d’usage.',
          'Le piège classique du modèle Word : l’orthographe de la raison sociale recopiée à la main change d’une facture à l’autre (STE ATLAS, Sté Atlas Digital, ATLAS DIGITAL SARL…). Un même client doit apparaître à l’identique partout — c’est ce qu’un référentiel clients garantit et qu’un modèle ne garantit pas.'
        ]
      },
      {
        h: 'Bloc 3 — numéro, date, et le problème que le modèle ne résout pas',
        p: [
          'Chaque facture porte un numéro unique, dans une séquence continue et chronologique, sans trou ni doublon : FAT-2026-0001, 0002, 0003… La date d’émission est obligatoire ; l’échéance de règlement l’est aussi depuis la loi 69-21 sur les délais de paiement.',
          'C’est ici que les modèles Word et Excel échouent structurellement : le numéro est tapé à la main. Un doublon, un trou après une facture abandonnée, deux collaborateurs qui facturent en même temps — et votre séquence n’est plus opposable. En contrôle fiscal, la rupture de séquence se détecte mécaniquement.'
        ],
        note:
          'Une facture ratée ne se supprime pas et ne se refait pas sous le même numéro « propre » : elle s’annule par une facture d’avoir, et le numéro reste dans la séquence. Aucun modèle téléchargé ne vous l’imposera — un outil, si.'
      },
      {
        h: 'Bloc 4 — les lignes et la TVA',
        p: [
          'Chaque ligne porte : désignation précise, quantité, prix unitaire hors taxe, taux de TVA et montant. Depuis 2026, il ne reste que deux taux au Maroc : 20 % (taux normal) et 10 % (taux réduit). Si des lignes portent des taux différents, la TVA doit être ventilée par taux dans le récapitulatif.',
          'Les entreprises hors champ de TVA (auto-entrepreneurs) ou exonérées facturent à 0 % avec la mention légale correspondante — un modèle générique international ne connaît ni ces mentions ni ces régimes.'
        ]
      },
      {
        h: 'Bloc 5 — le pied de facture',
        p: [
          'Le pied comporte : total hors taxe, TVA (ventilée si plusieurs taux), total TTC en dirhams, et la formule « Arrêtée la présente facture à la somme de… » avec le montant TTC en toutes lettres — mention obligatoire et premier oubli des modèles Excel. S’y ajoutent les conditions de règlement (mode et échéance) et, en bas de page, le rappel des identifiants de l’émetteur.',
          'Pour un devis, la structure est identique avec trois différences : le titre « Devis », une numérotation séparée (DEV-2026-…), et une durée de validité (30 jours d’usage).'
        ]
      },
      {
        h: 'Modèle téléchargé ou outil : le vrai critère',
        p: [
          'Un modèle Word ou Excel convient si vous émettez deux ou trois factures par mois, toujours au même client, et que vous tenez la séquence avec rigueur. Au-delà, les risques s’accumulent : numérotation cassée, TVA calculée à la main, mentions oubliées, archives éparpillées — et l’e-facturation obligatoire qui arrive exigera de toute façon des documents structurés, pas des fichiers bureautiques.',
          'L’alternative n’est pas forcément un logiciel à installer : avec Fatora-Bot, la facture se dicte sur WhatsApp en darija ou en français, et le PDF sort conforme — numérotation continue gérée, TVA calculée, montant en lettres, cachet apposé, archives retrouvables. Deux factures offertes pour comparer avec votre modèle actuel.'
        ]
      }
    ],
    faq: [
      {
        q: 'Existe-t-il un modèle de facture officiel de la DGI ?',
        a: 'Non. La DGI n’impose pas de gabarit graphique : elle impose un contenu — les mentions de l’article 145 du CGI. Tout modèle qui porte ces mentions, dans n’importe quelle mise en page lisible, est valable. C’est le contenu qui fait la conformité, pas le design.'
      },
      {
        q: 'Un modèle de facture Word ou Excel est-il légal au Maroc ?',
        a: 'Oui, tant que toutes les mentions obligatoires y figurent et que la numérotation reste continue. C’est cette seconde condition qui casse en pratique : le numéro tapé à la main finit par sauter ou se dédoubler, et la séquence n’est plus défendable en contrôle.'
      },
      {
        q: 'Quelle est la différence entre un modèle de facture et un modèle de devis ?',
        a: 'La structure est la même. Le devis porte le titre « Devis », sa propre numérotation (séparée de celle des factures), une durée de validité, et n’a aucun effet fiscal tant qu’il n’est pas transformé en facture. Ne convertissez jamais un devis en facture en changeant juste le titre : la facture doit prendre un numéro de la séquence des factures.'
      },
      {
        q: 'Le montant en toutes lettres est-il vraiment obligatoire ?',
        a: 'Oui — « Arrêtée la présente facture à la somme de… » suivie du montant TTC en lettres est une mention exigée. C’est l’oubli le plus fréquent des modèles Excel téléchargés, car aucune formule standard ne convertit un nombre en lettres en français correctement.'
      },
      {
        q: 'Puis-je facturer en anglais ou en euros ?',
        a: 'La facture destinée à un client marocain se libelle en dirhams. Pour l’export, la facture peut être en devise et en langue étrangère, mais votre comptabilité enregistre la contre-valeur en dirhams. En cas de doute sur un cas export, votre comptable tranche.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'numerotation-factures', 'excel-vs-facturation-whatsapp', 'facture-auto-entrepreneur-maroc', 'devis-conforme-maroc'],
    updated: '2026-08-15',
    readMin: 7
  },

  {
    slug: 'logiciel-facturation-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Logiciel de facturation au Maroc conforme DGI 2026',
    metaDesc:
      'Comment choisir un logiciel de facturation au Maroc : conformité DGI 2026, mentions obligatoires, numérotation, TVA, prix réels du marché — et pourquoi le bon « logiciel » tient parfois dans WhatsApp, dès 30 DH/mois, essai gratuit.',
    keywords:
      'logiciel de facturation maroc, logiciel facturation maroc dgi 2026, meilleur logiciel facturation maroc, logiciel facturation gratuit maroc, logiciel devis facture maroc, programme facturation maroc, application facturation maroc',
    title: 'Logiciel de facturation au Maroc : le guide de choix, conformité DGI 2026 comprise',
    intro:
      'Le marché marocain compte une dizaine de logiciels de facturation, du gratuit limité à l’ERP complet. Ce guide donne les critères qui comptent vraiment — conformité DGI, numérotation, régimes fiscaux, prix réels — puis explique dans quels cas un logiciel classique est le bon choix, et dans quels cas une solution qui tient dans WhatsApp sert mieux une équipe de terrain.',
    answer:
      'Un logiciel de facturation au Maroc doit garantir quatre choses : les mentions obligatoires de l’article 145 du CGI (ICE, IF, TVA ventilée, montant en lettres), une numérotation continue infalsifiable, la gestion des régimes fiscaux (TVA 20/10 %, auto-entrepreneur sans TVA), et une trajectoire vers la facturation électronique DGI. Les prix du marché vont de gratuit (limité) à 100-350 DH/mois.',
    blocks: [
      {
        h: 'Critère 1 — la conformité DGI, aujourd’hui et en 2026',
        p: [
          'La conformité a deux étages. Aujourd’hui : chaque facture émise doit porter les mentions de l’article 145 du CGI — ICE et IF de l’émetteur, taxe professionnelle, ICE du client en B2B, TVA ventilée par taux (20 % ou 10 % depuis 2026), montant en toutes lettres, numérotation continue. Un logiciel qui laisse émettre une facture incomplète ne vous protège de rien.',
          'Demain : la facturation électronique obligatoire (article 145-IX, modèle de validation préalable) se déploie par vagues. Le bon réflexe n’est pas d’acheter une promesse de « conformité 2026 garantie » — les spécifications ne sont pas toutes publiées — mais de vérifier que votre outil produit déjà des documents structurés, complets et correctement numérotés : c’est l’état qui rendra le raccordement trivial le jour venu.'
        ]
      },
      {
        h: 'Critère 2 — la numérotation et les corrections',
        p: [
          'C’est le critère qui sépare les vrais logiciels des générateurs de PDF : la séquence FAT-2026-0001, 0002, 0003 doit être gérée par l’outil, sans trou ni doublon possible, avec annulation par facture d’avoir et correction sous le même numéro. Testez précisément ce scénario avant de payer : « je me suis trompé sur la facture d’hier, que se passe-t-il ? ». Si la réponse est « on la supprime », fuyez.'
        ]
      },
      {
        h: 'Critère 3 — les régimes fiscaux et les documents annexes',
        p: [
          'Votre logiciel doit connaître votre régime : TVA normale, taux réduit, auto-entrepreneur hors champ (mention loi 114-13 obligatoire), exonération. Et couvrir les documents qui accompagnent la facture : devis avec validité et numérotation séparée, bons de livraison, factures d’avoir, factures récurrentes.',
          'Vérifiez aussi la langue : au Maroc, une partie des équipes travaille en arabe. Un logiciel uniquement francophone exclut de fait les personnes qui saisiraient les factures.'
        ]
      },
      {
        h: 'Les prix réels du marché marocain',
        p: [
          'Le marché se répartit en trois bandes. Les gratuits (avec limites : volume, logo imposé, ou données revendues en contrepartie) ; les abonnements TPE entre 30 et 100 DH/mois ; les suites de gestion complètes de 100 à 350 DH/mois et plus, qui ajoutent stocks, comptabilité ou paie.',
          'Le bon calcul n’est pas le prix affiché mais le coût complet : licence + temps de formation + temps de saisie. Un outil à 50 DH/mois que votre équipe de terrain n’utilise pas — parce qu’il faut un ordinateur, un login et une formation — coûte plus cher qu’un outil à 90 DH utilisé tous les jours.'
        ],
        note:
          'Fatora-Bot se situe dans la bande TPE : essai gratuit (2 factures), puis 30, 50 ou 90 DH/mois selon le volume. La différence n’est pas le prix : c’est qu’il n’y a ni logiciel à installer, ni formation — la facture se dicte dans WhatsApp, en darija, en français ou en amazigh.'
      },
      {
        h: 'Logiciel classique ou WhatsApp : le vrai partage',
        p: [
          'Un logiciel classique (poste de travail, tableau de bord, modules) est le bon choix quand une personne dédiée traite l’administratif depuis un bureau, avec des besoins de gestion étendus — stocks, comptabilité intégrée, multi-dépôts.',
          'Une solution conversationnelle sur WhatsApp sert mieux les équipes de terrain : commerçants, artisans, transporteurs, chantiers — là où la facture doit partir sur place, depuis un téléphone, par des personnes qui écrivent peu ou pas. La dictée vocale en darija fait toute la différence d’adoption : l’outil s’adapte aux équipes, pas l’inverse.',
          'Les deux approches produisent des documents également conformes. Le choix se fait sur l’usage réel de vos équipes, pas sur la longueur de la liste de fonctionnalités.'
        ]
      }
    ],
    faq: [
      {
        q: 'Quel est le meilleur logiciel de facturation au Maroc ?',
        a: 'Celui que vos équipes utiliseront vraiment. Pour un bureau avec une personne dédiée à l’administratif, un logiciel classique conforme DGI fait l’affaire. Pour des équipes de terrain qui facturent depuis le téléphone, une solution WhatsApp à dictée vocale s’adopte sans formation. Vérifiez dans tous les cas : mentions 145 CGI, numérotation gérée, avoirs, régimes fiscaux.'
      },
      {
        q: 'Un logiciel de facturation gratuit suffit-il ?',
        a: 'Pour tester, oui. En usage réel, lisez les limites : plafond de documents, logo du prestataire sur vos factures, fonctionnalités bloquées (avoirs, devis), et surtout le modèle économique — si c’est gratuit sans limite, demandez-vous ce qui finance le service. Un abonnement TPE au Maroc coûte entre 30 et 100 DH/mois : moins qu’une erreur de TVA.'
      },
      {
        q: 'Mon logiciel doit-il déjà être « conforme facturation électronique 2026 » ?',
        a: 'Personne ne peut le garantir totalement : une partie des spécifications de la plateforme nationale n’est pas publiée. Ce qui compte : que vos documents soient déjà structurés, complets et numérotés en continu, et que votre prestataire s’engage à assurer le raccordement. Méfiez-vous des garanties absolues vendues avant les textes.'
      },
      {
        q: 'Puis-je facturer depuis mon téléphone uniquement ?',
        a: 'Oui — c’est même le mode principal pour les TPE de terrain. Avec Fatora-Bot, tout se passe dans WhatsApp : dictée de la facture (voix ou texte), validation, PDF conforme avec cachet, remise au client par WhatsApp, email ou QR code, archives consultables. Aucune application à installer.'
      },
      {
        q: 'Et si mon activité a besoin de stocks ou de comptabilité ?',
        a: 'Alors il vous faut une suite de gestion, pas un outil de facturation seul. La facturation conversationnelle peut coexister : les équipes de terrain émettent sur WhatsApp, et l’export CSV alimente le comptable ou l’ERP. Beaucoup d’entreprises combinent les deux.'
      }
    ],
    related: ['alternative-logiciel-facturation', 'modele-facture-maroc', 'facturation-electronique-maroc', 'facture-whatsapp-comment-faire', 'mentions-obligatoires-facture'],
    updated: '2026-08-15',
    readMin: 8
  }
];
