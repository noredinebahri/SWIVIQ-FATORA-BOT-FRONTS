import type { Article } from './types';

const UPD = '2026-08-12';

/**
 * Guides pratiques du cycle commercial (français) : devis, avoir, délais de
 * paiement, archivage, glossaire.
 *
 * Même discipline que les autres fichiers de contenu : les seuils et les
 * durées fixés par la loi de finances ou par un texte en cours de déploiement
 * sont décrits dans leur principe, jamais figés en chiffres que la page ne
 * saura pas tenir à jour.
 */
export const PRATIQUE_FR: Article[] = [
  {
    slug: 'devis-conforme-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Devis au Maroc : mentions, validité et passage en facture',
    metaDesc:
      'Ce que doit contenir un devis au Maroc, comment lui donner une valeur contractuelle, quelle durée de validité fixer et comment le convertir en facture sans écart.',
    keywords:
      'devis maroc, modèle devis maroc, devis bon pour accord, devis en facture, validité devis',
    title: 'Le devis au Maroc : ce qu’il doit contenir et ce qu’il engage',
    intro:
      'Le devis n’est pas encadré comme la facture, et c’est précisément ce qui le rend risqué : rien n’oblige à y faire figurer quoi que ce soit, donc tout ce qui manque se discute au moment de payer.',
    answer:
      'Un devis au Maroc n’est pas soumis aux mentions obligatoires de la facture, mais il devient contractuel dès qu’il est accepté par écrit. Il doit porter l’identité complète des deux parties, le détail chiffré des prestations, les montants hors taxe et toutes taxes comprises, la durée de validité, les conditions de règlement et un espace pour la mention « bon pour accord ».',
    blocks: [
      {
        h: 'Un devis accepté vaut contrat',
        p: [
          'C’est le point que beaucoup d’artisans et de prestataires découvrent trop tard. Le devis est une offre : tant qu’il n’est pas accepté, il n’engage que celui qui l’émet, et encore, pendant sa durée de validité seulement. Une fois accepté par écrit, il devient la loi des parties.',
          'Ce qui y figure sera donc opposable des deux côtés. Si le devis annonce un prix ferme, le dépassement devra être justifié par un avenant accepté. Si le devis ne dit rien du délai, aucun délai n’est exigible. Si le devis ne mentionne pas que la pose est exclue, elle sera réputée comprise.',
          'L’acceptation n’a pas besoin d’être solennelle. Un devis signé avec la mention « bon pour accord », un bon de commande, ou même un message WhatsApp non ambigu du client valant acceptation suffisent en pratique à établir l’accord. Conservez cette trace : c’est elle qui tranchera le désaccord.'
        ]
      },
      {
        h: 'Ce qu’un devis sérieux comporte',
        p: [
          'Aucune de ces mentions n’est imposée par un texte. Toutes servent à éviter une discussion précise que vous aurez, un jour, avec un client.'
        ],
        table: {
          head: ['Mention', 'La discussion qu’elle évite'],
          rows: [
            ['Identité complète des deux parties, ICE inclus', '« Ce n’est pas moi qui ai commandé, c’est mon frère »'],
            ['Numéro et date du devis', 'Deux versions du devis circulent, on ne sait plus laquelle a été acceptée'],
            ['Durée de validité (30, 60, 90 jours)', 'Le client revient six mois plus tard en exigeant l’ancien prix'],
            ['Détail chiffré ligne par ligne', '« Je pensais que la peinture était comprise »'],
            ['Distinction fourniture / pose / main-d’œuvre', 'Le client fournit son matériau et exige la même remise'],
            ['Montants HT, TVA par taux, TTC', 'Le client conteste la TVA ajoutée au moment de la facture'],
            ['Conditions de règlement (acompte, solde, délai)', '« On règle à la fin, comme d’habitude »'],
            ['Délai d’exécution', 'Le chantier traîne et aucun engagement n’est démontrable'],
            ['Ce qui est expressément exclu', 'Le poste le plus rentable de tous les litiges'],
            ['Espace « bon pour accord », date et signature', 'L’acceptation elle-même est contestée']
          ]
        }
      },
      {
        h: 'La durée de validité, souvent oubliée',
        p: [
          'Sans durée de validité, une offre reste théoriquement ouverte. Dans un contexte où le prix des matériaux bouge — bois, acier, ciment, carburant — c’est une exposition réelle. Un devis accepté quatre mois après son émission au prix d’origine peut effacer toute la marge.',
          'Trente jours est un standard confortable pour les prestations de service, quinze à trente jours pour les activités très exposées au prix des matières. Passé ce délai, l’offre n’est pas annulée : elle doit simplement être reconfirmée, ce qui vous rend la main sur le prix.'
        ]
      },
      {
        h: 'Du devis à la facture, sans écart',
        p: [
          'L’erreur classique consiste à refaire la facture de zéro. Les désignations changent légèrement, une ligne saute, un arrondi diffère — et le client refuse de payer une facture qui ne correspond pas visiblement au devis qu’il a signé.',
          'La bonne méthode est de repartir du devis accepté et de ne modifier que ce qui a réellement changé : les quantités effectivement livrées ou posées, les travaux supplémentaires acceptés en cours de route, les postes abandonnés. La facture doit référencer le devis par son numéro et sa date.',
          'Si des acomptes ont été facturés, la facture de solde doit les déduire ligne à ligne. Une facture de solde portant le montant total du marché sans déduction est la première cause de retard de paiement dans le bâtiment — le client attend une facture corrigée plutôt que de discuter.'
        ],
        note:
          'Avec Fatora-Bot, le client est enregistré une fois dans le référentiel avec l’orthographe exacte de sa raison sociale et son ICE. Pour la facture, seuls les articles restent à dicter, ce qui supprime la principale source d’écart entre le devis et la facture : la ressaisie.'
      },
      {
        h: 'Le devis face à la facturation électronique',
        p: [
          'Le dispositif de facturation électronique porte sur les factures, pas sur les devis : rien n’indique à ce jour qu’un devis devra transiter par la plateforme nationale.',
          'Cela ne le rend pas indifférent. Un devis structuré, dont les lignes se convertissent directement en lignes de facture, réduira le travail de saisie au moment où chaque facture devra partir dans un format normalisé. Ceux qui rédigent leurs devis en texte libre auront ce travail à faire deux fois.'
        ]
      }
    ],
    faq: [
      {
        q: 'Un devis est-il obligatoire au Maroc ?',
        a: 'Aucun texte général ne l’impose pour les relations entre entreprises. Il est en revanche systématiquement exigé pour les marchés publics et par la plupart des donneurs d’ordre structurés, et il reste la meilleure protection contre les litiges de fin de chantier.'
      },
      {
        q: 'Le devis doit-il porter les mêmes mentions que la facture ?',
        a: 'Non. Les mentions obligatoires de l’article 145 du Code Général des Impôts concernent la facture. Mais faire figurer l’ICE, la TVA détaillée et le total en toutes lettres sur le devis évite toute surprise au moment de la facture, et donne au document une allure professionnelle qui pèse dans la décision.'
      },
      {
        q: 'Peut-on facturer plus cher que le devis ?',
        a: 'Seulement pour ce qui a été accepté en plus. Les travaux supplémentaires doivent faire l’objet d’un accord écrit avant exécution — un message du client suffit en pratique. Un dépassement non accepté sur un devis à prix ferme est contestable, et le sera.'
      },
      {
        q: 'Faut-il facturer un devis non suivi de commande ?',
        a: 'Un devis en lui-même n’est pas facturable, sauf si l’étude préalable a été convenue comme une prestation payante — ce qui doit alors être annoncé avant, et non découvert par le client à la réception de la facture.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'btp-menuiserie', 'delais-paiement-maroc'],
    updated: UPD,
    readMin: 7
  },

  {
    slug: 'facture-avoir-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Facture d’avoir au Maroc : quand et comment l’émettre',
    metaDesc:
      'Ce qu’est un avoir, dans quels cas l’émettre plutôt qu’une facture rectificative, ce qu’il doit contenir et comment il régularise la TVA déjà déclarée.',
    keywords:
      'facture avoir maroc, note de crédit maroc, annuler une facture maroc, facture rectificative, régularisation TVA',
    title: 'La facture d’avoir : annuler sans effacer',
    intro:
      'On n’efface jamais une facture émise. L’avoir est l’instrument qui permet d’annuler ou de réduire une facture tout en laissant une trace vérifiable — et c’est exactement ce que l’administration attend de vous.',
    answer:
      'Une facture d’avoir est un document commercial qui annule totalement ou partiellement une facture déjà émise. Elle porte son propre numéro dans la série, référence explicitement la facture d’origine par son numéro et sa date, indique le motif, et reprend la ventilation de TVA de la facture annulée afin de permettre la régularisation.',
    blocks: [
      {
        h: 'Avoir ou facture rectificative : deux outils distincts',
        p: [
          'La confusion entre les deux est la source la plus fréquente de comptabilités incohérentes. Le critère de choix est simple : qu’est-ce qui a changé ?'
        ],
        table: {
          head: ['Situation', 'Le bon document'],
          rows: [
            ['Erreur détectée avant remise au client', 'Correction sous le même numéro — le document n’a pas circulé'],
            ['Erreur de forme après remise (adresse, désignation, ICE)', 'Facture rectificative référençant l’originale'],
            ['Erreur de montant à la hausse', 'Facture complémentaire pour la différence'],
            ['Erreur de montant à la baisse', 'Avoir partiel pour la différence'],
            ['Commande annulée, marchandise retournée', 'Avoir total'],
            ['Remise accordée après coup, geste commercial', 'Avoir partiel'],
            ['Facture impayée et irrécouvrable', 'Ni l’un ni l’autre — c’est une créance douteuse, à traiter avec votre comptable']
          ]
        },
        note:
          'Le dernier cas mérite une attention particulière : émettre un avoir pour effacer une facture qu’un client refuse de payer est une erreur courante et coûteuse. Cela revient à reconnaître que la prestation n’était pas due, et affaiblit toute action en recouvrement.'
      },
      {
        h: 'Ce que l’avoir doit contenir',
        p: [
          'L’avoir est une facture : il en reprend la structure et les mentions obligatoires. S’y ajoutent trois éléments qui lui sont propres.'
        ],
        list: [
          'La qualification explicite du document : « Avoir » ou « Facture d’avoir », visible en en-tête. Un document ambigu sera lu comme une seconde facture, et payé comme telle.',
          'La référence à la facture d’origine : son numéro et sa date, sans quoi le rapprochement est impossible chez le client comme en contrôle.',
          'Le motif de l’avoir : retour de marchandise, annulation de commande, remise commerciale, erreur de facturation. Un avoir sans motif est un avoir difficile à défendre.',
          'La ventilation de TVA identique à celle de la facture annulée : mêmes taux, mêmes bases, afin que la régularisation soit symétrique des deux côtés.'
        ]
      },
      {
        h: 'La numérotation de l’avoir',
        p: [
          'L’avoir prend un numéro dans une série continue, exactement comme une facture. Deux pratiques coexistent et se défendent toutes les deux.',
          'La première consiste à utiliser la même série que les factures : l’avoir prend simplement le numéro suivant. C’est la solution la plus simple, et celle qui garantit mécaniquement l’absence de trou.',
          'La seconde consiste à tenir une série distincte, avec un préfixe propre — AV-2026-0001. C’est plus lisible pour le comptable, à condition que cette seconde série soit elle aussi continue et sans doublon.',
          'Ce qui n’est pas défendable, en revanche : réutiliser le numéro de la facture annulée, ou émettre l’avoir sans numéro du tout.'
        ]
      },
      {
        h: 'L’effet sur la TVA',
        p: [
          'C’est la raison d’être fiscale de l’avoir. La facture d’origine a rendu la TVA exigible chez vous et déductible chez votre client. L’avoir défait symétriquement les deux mouvements : vous récupérez la TVA collectée à tort, votre client réduit sa déduction d’autant.',
          'Cette symétrie explique pourquoi l’avoir doit reprendre exactement la ventilation par taux de la facture annulée. Un avoir dont la TVA ne correspond pas à celle de la facture d’origine crée un écart qui apparaîtra chez l’un des deux, tôt ou tard.',
          'La période de rattachement de la régularisation dépend de votre régime de TVA — encaissement ou débit — et du moment où l’avoir est émis. C’est le point à faire confirmer par votre comptable plutôt qu’à déduire d’une règle générale.'
        ]
      },
      {
        h: 'Le réflexe qui évite la plupart des avoirs',
        p: [
          'Un avoir sur deux découle d’une erreur qui aurait pu être vue avant l’émission : mauvais client, quantité inexacte, prix unitaire au lieu du prix total, taux de TVA erroné.',
          'D’où l’intérêt d’un récapitulatif systématique avant émission. Avec Fatora-Bot, rien ne part sans confirmation explicite : le client, chaque article avec sa quantité et son prix, la TVA et le total sont récapitulés — à l’écrit, et à la voix en darija si la demande est arrivée en note vocale. Tant que la facture n’a pas été remise, la correction se fait sous le même numéro, sans avoir à émettre quoi que ce soit.'
        ]
      }
    ],
    faq: [
      {
        q: 'Un avoir peut-il annuler partiellement une facture ?',
        a: 'Oui, c’est même le cas le plus fréquent : retour d’une partie de la marchandise, remise accordée après coup, erreur portant sur une seule ligne. L’avoir porte alors uniquement sur le montant concerné, avec sa propre ventilation de TVA.'
      },
      {
        q: 'Faut-il l’accord du client pour émettre un avoir ?',
        a: 'Un avoir vous est défavorable et lui est favorable : son accord n’est pas requis. En revanche, prévenez-le, car il doit régulariser sa propre déduction de TVA. Un avoir qui arrive sans explication est souvent classé sans traitement, et l’écart se révèle des mois plus tard.'
      },
      {
        q: 'Peut-on émettre un avoir sur une facture d’un exercice antérieur ?',
        a: 'C’est possible, mais les conséquences comptables et fiscales diffèrent selon que l’exercice est clos ou non, et selon votre régime de TVA. C’est typiquement le cas à ne pas traiter seul : faites-le valider par votre comptable avant d’émettre.'
      },
      {
        q: 'Un avoir se numérote-t-il dans la même série que les factures ?',
        a: 'Les deux pratiques sont admises : même série, ou série distincte avec un préfixe propre. La seule exigence est que chaque série soit continue, sans trou ni doublon. Ce qui n’est pas défendable, c’est de réutiliser le numéro de la facture annulée.'
      }
    ],
    related: ['numerotation-factures', 'mentions-obligatoires-facture', 'taux-tva-maroc'],
    updated: UPD,
    readMin: 7
  },

  {
    slug: 'delais-paiement-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Délais de paiement entre entreprises au Maroc',
    metaDesc:
      'Le cadre des délais de paiement entre entreprises marocaines, les pénalités de retard, la déclaration à l’administration et ce qu’il faut écrire sur ses factures.',
    keywords:
      'délais de paiement maroc, loi 69-21, pénalités de retard maroc, retard paiement entreprise maroc, recouvrement facture',
    title: 'Délais de paiement : ce que la loi impose désormais',
    intro:
      'Le retard de paiement est le premier tueur de trésorerie des petites entreprises marocaines. Le législateur s’en est saisi : les délais entre entreprises sont désormais plafonnés, et les dépassements se déclarent.',
    answer:
      'Le Maroc encadre les délais de paiement entre entreprises par la loi 69-21, qui plafonne le délai convenu, prévoit une amende pécuniaire calculée sur les montants réglés en retard, et impose une déclaration périodique à l’administration fiscale. Le dispositif s’applique par vagues, selon le chiffre d’affaires des entreprises concernées.',
    blocks: [
      {
        h: 'Ce que le dispositif change',
        p: [
          'Jusqu’à récemment, le délai de paiement relevait de la négociation commerciale : un fournisseur en position faible acceptait ce qu’on lui imposait, et le retard n’avait aucune conséquence pratique pour le débiteur.',
          'La loi 69-21 renverse la logique. Elle fixe un délai maximal, prévoit une sanction financière automatique en cas de dépassement, et — c’est le point décisif — impose au débiteur de déclarer lui-même à l’administration les factures réglées en retard. Le retard cesse d’être un arbitrage confortable pour devenir une ligne dans une déclaration fiscale.',
          'Le déploiement se fait par paliers de chiffre d’affaires, en commençant par les plus grandes entreprises et en s’étendant progressivement vers les plus petites. Les seuils, les taux et les échéances sont fixés par les textes d’application et ont déjà été ajustés.'
        ],
        note:
          'Le seuil de chiffre d’affaires qui vous concerne, le taux de l’amende et la périodicité de la déclaration sont à confirmer auprès de la Direction Générale des Impôts ou de votre expert-comptable. Ce guide décrit le mécanisme, pas les valeurs de l’exercice en cours — elles évoluent.'
      },
      {
        h: 'Le délai par défaut et le délai convenu',
        p: [
          'Le raisonnement se fait en deux temps. En l’absence d’accord écrit entre les parties, un délai par défaut s’applique, décompté à partir de la date de réception de la marchandise ou d’exécution de la prestation.',
          'Les parties peuvent convenir d’un délai plus long, mais pas au-delà d’un plafond légal, et à condition que cet accord soit écrit. Certains secteurs, dont l’activité est saisonnière ou le cycle d’exploitation particulièrement long, bénéficient de délais dérogatoires négociés par accord professionnel.',
          'Conséquence pratique immédiate : si vous accordez des délais longs, faites-les figurer par écrit dans le devis ou les conditions générales. Un délai long non écrit n’est pas opposable, et vous place en dehors du délai par défaut.'
        ]
      },
      {
        h: 'Ce qu’il faut écrire sur vos factures',
        p: [
          'Le dispositif ne fonctionne que si la date de départ du délai est établie. Quatre mentions rendent votre facture exploitable en cas de litige.'
        ],
        list: [
          'La date d’échéance en clair — « à régler avant le 30 septembre 2026 » — plutôt qu’un délai en jours que le client devra calculer lui-même.',
          'La date de livraison ou d’exécution, lorsqu’elle diffère de la date d’émission : c’est elle qui fait courir le délai.',
          'Les conditions de règlement convenues, avec référence au devis ou au contrat qui les a fixées.',
          'La mention des pénalités applicables en cas de retard. Elle ne les crée pas — elles sont légales — mais elle prive le client de l’argument selon lequel il n’en avait pas été informé.'
        ]
      },
      {
        h: 'Que faire quand le retard s’installe',
        p: [
          'La séquence utile est graduelle, et chacune de ses étapes doit laisser une trace écrite. C’est la trace, plus que le ton, qui fait avancer le dossier.'
        ],
        table: {
          head: ['Étape', 'Quand', 'Ce qu’elle apporte'],
          rows: [
            ['Relance amiable écrite', 'Quelques jours après l’échéance', 'Écarte l’oubli, qui explique une bonne part des retards'],
            ['Relance formelle avec décompte des pénalités', 'Deux à trois semaines après', 'Signale que le retard est suivi et chiffré'],
            ['Mise en demeure recommandée', 'Après un mois', 'Fait courir les intérêts et constitue la preuve exigée en justice'],
            ['Recouvrement ou action judiciaire', 'Selon le montant en jeu', 'Suppose un dossier complet : facture, preuve de livraison, relances']
          ]
        },
        note:
          'Le dossier se construit avant le litige, pas pendant. Facture conforme, bon de livraison signé, devis accepté, échanges écrits : sans ces pièces, la meilleure procédure n’aboutit pas.'
      },
      {
        h: 'La visibilité, arme la plus simple',
        p: [
          'Beaucoup de très petites entreprises ne savent pas, à un instant donné, combien on leur doit. Le retard n’est pas détecté, la relance n’est pas faite, et la créance vieillit jusqu’à devenir difficile à recouvrer.',
          'Savoir ce qui a été facturé sur une période est donc le premier réflexe de trésorerie. Avec Fatora-Bot, ce total se demande à la voix — « les factures du mois », « toutes celles d’Ahmed » — et le PDF de chaque document est renvoyé dans la conversation, prêt à être joint à une relance.'
        ]
      }
    ],
    faq: [
      {
        q: 'Quel est le délai de paiement maximal entre entreprises au Maroc ?',
        a: 'La loi 69-21 fixe un délai par défaut applicable en l’absence d’accord écrit, et un plafond que les parties ne peuvent pas dépasser même par accord, avec des dérogations sectorielles. Les valeurs exactes et le calendrier d’application par taille d’entreprise sont à vérifier auprès de la Direction Générale des Impôts ou de votre comptable.'
      },
      {
        q: 'Les pénalités de retard doivent-elles figurer sur la facture ?',
        a: 'Les pénalités sont prévues par la loi et ne dépendent pas de leur mention sur le document. Les indiquer reste fortement recommandé : cela prive le client de l’argument de l’ignorance et rend la relance plus simple à formuler.'
      },
      {
        q: 'Que faire si un client refuse de payer une facture conforme ?',
        a: 'Relancer par écrit, puis adresser une mise en demeure par recommandé, qui fait courir les intérêts et constitue la preuve exigée en cas d’action. Réunissez d’abord le dossier complet : facture conforme, preuve de livraison ou d’exécution, devis accepté et historique des relances.'
      },
      {
        q: 'Peut-on accorder un délai plus long à un bon client ?',
        a: 'Oui, dans la limite du plafond légal et à condition que l’accord soit écrit. Un délai long convenu oralement n’est pas opposable et vous expose : c’est le délai par défaut qui s’appliquerait, avec les conséquences déclaratives qui en découlent pour votre client.'
      }
    ],
    related: ['devis-conforme-maroc', 'mentions-obligatoires-facture', 'archivage-factures-maroc'],
    updated: UPD,
    readMin: 7
  },

  {
    slug: 'archivage-factures-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Conserver ses factures au Maroc : durée et archivage',
    metaDesc:
      'Combien de temps conserver ses factures au Maroc, ce que l’archivage électronique exige, et comment organiser ses archives avant la facturation électronique obligatoire.',
    keywords:
      'conservation factures maroc, archivage factures, durée conservation documents comptables maroc, archivage électronique facture',
    title: 'Combien de temps garder ses factures, et sous quelle forme',
    intro:
      'La question paraît administrative jusqu’au jour où un contrôle porte sur un exercice de quatre ans et où les factures dorment dans un carton humide. Voici la règle, et ce que l’archivage électronique change.',
    answer:
      'La législation comptable marocaine impose de conserver les livres et les pièces justificatives, dont les factures, pendant dix ans. Le droit de contrôle de l’administration fiscale s’exerce sur une période plus courte, mais l’obligation de conservation reste la plus longue des deux. Les factures conservées sous forme électronique doivent rester lisibles, intègres et accessibles pendant toute cette durée.',
    blocks: [
      {
        h: 'Deux durées à ne pas confondre',
        p: [
          'On mélange couramment la durée de conservation et le délai de reprise de l’administration. Ce sont deux choses différentes, et c’est la plus longue qui s’impose en pratique.',
          'La durée de conservation découle de la loi comptable : les documents comptables et les pièces justificatives se gardent dix ans. Elle vaut pour les factures émises comme pour les factures reçues.',
          'Le délai de reprise correspond à la période sur laquelle l’administration fiscale peut revenir contrôler et redresser. Il est plus court, mais il connaît des cas d’allongement — déficits reportés, opérations dont les effets se prolongent, absence de déclaration. Se caler sur ce délai plutôt que sur la durée légale de conservation est une erreur.'
        ],
        note:
          'Les durées applicables à votre situation exacte — et les cas particuliers d’allongement — sont à confirmer avec votre expert-comptable. La règle des dix ans pour les pièces comptables est la base ; certaines pièces, comme celles relatives aux immobilisations, suivent la durée de vie du bien.'
      },
      {
        h: 'Papier ou électronique',
        p: [
          'Les deux formes sont admises. L’enjeu n’est pas le support mais la capacité à produire, des années plus tard, un document lisible dont personne ne conteste l’intégrité.',
          'Le papier a un défaut évident et un défaut moins connu. L’évident : il se perd, brûle, prend l’eau et se range mal. Le moins connu : le ticket thermique s’efface. Une facture imprimée sur papier thermique peut être totalement illisible au bout de deux ou trois ans, ce qui la rend inutilisable comme justificatif.',
          'L’électronique résout ces deux problèmes, à condition d’organiser la conservation plutôt que de laisser les fichiers s’accumuler. Trois exigences pratiques : la lisibilité dans la durée (préférez le PDF à un format propriétaire), l’intégrité (le document ne doit pas être modifiable après émission), et l’accessibilité (retrouver une facture précise en quelques minutes, pas en un après-midi).'
        ]
      },
      {
        h: 'Organiser des archives réellement exploitables',
        p: [
          'Le critère de qualité d’un archivage n’est pas le volume conservé mais le temps nécessaire pour retrouver une pièce précise. Quatre principes suffisent.'
        ],
        list: [
          'Classer par exercice, puis par numéro de facture. Le numéro séquentiel est le seul identifiant fiable — le nom du client ne l’est pas, son orthographe varie.',
          'Nommer les fichiers de façon triable : FAT-2026-0042.pdf plutôt que « facture ahmed.pdf ». Le tri alphabétique donne alors le tri chronologique.',
          'Conserver les factures d’achat avec la même rigueur que les factures de vente : ce sont elles qui justifient votre TVA déductible, et c’est là que les trous se creusent.',
          'Doubler la sauvegarde. Un disque unique n’est pas une archive : c’est un point de défaillance qui attend son tour.'
        ]
      },
      {
        h: 'Ce que la facturation électronique va changer',
        p: [
          'Dans un dispositif de validation préalable, chaque facture est déclarée à une plateforme nationale au moment de son émission. L’administration disposera donc de sa propre trace, indépendamment de la vôtre.',
          'Cela ne vous dispense pas de conserver les vôtres — l’obligation comptable reste entière — mais cela change la nature du risque. Aujourd’hui, une facture perdue est une pièce manquante. Demain, une facture perdue chez vous sera une facture que l’administration a, et pas vous : la discussion ne portera plus sur son existence mais sur ce que vous en avez fait.',
          'La conséquence est simple : les entreprises dont l’archivage repose sur un carton et une bonne mémoire ont intérêt à basculer avant l’échéance, pas après.'
        ],
        note:
          'Avec Fatora-Bot, chaque PDF émis est archivé et reste consultable depuis la conversation : par numéro, par client ou par période, avec les totaux correspondants. L’archivage n’est pas une tâche séparée à ne pas oublier, c’est une conséquence de l’émission.'
      }
    ],
    faq: [
      {
        q: 'Combien de temps faut-il conserver une facture au Maroc ?',
        a: 'La loi comptable impose dix ans pour les documents comptables et leurs pièces justificatives, factures comprises. Le délai pendant lequel l’administration fiscale peut contrôler est plus court, mais c’est la durée la plus longue qui s’impose en pratique.'
      },
      {
        q: 'Peut-on jeter le papier après numérisation ?',
        a: 'La conservation sous forme électronique est admise dès lors que le document reste lisible, intègre et accessible pendant toute la durée légale. Avant de détruire des originaux papier, faites valider votre procédure par votre expert-comptable : les conditions d’une numérisation opposable méritent d’être vérifiées.'
      },
      {
        q: 'Faut-il conserver aussi les factures d’achat ?',
        a: 'Oui, avec la même rigueur. Ce sont elles qui justifient la TVA que vous avez déduite et les charges que vous avez comptabilisées. En contrôle, c’est le plus souvent de ce côté que les pièces manquent.'
      },
      {
        q: 'Un PDF suffit-il comme archive ?',
        a: 'Un PDF non modifiable, correctement nommé, sauvegardé en deux endroits distincts et retrouvable rapidement constitue une archive satisfaisante. Ce qui pose problème, ce n’est pas le format mais l’absence d’organisation : des milliers de fichiers dans un dossier unique ne sont pas des archives.'
      }
    ],
    related: ['numerotation-factures', 'facturation-electronique-maroc', 'mentions-obligatoires-facture'],
    updated: UPD,
    readMin: 6
  },

  {
    slug: 'glossaire-facturation-maroc',
    section: 'guides',
    lang: 'fr',
    metaTitle: 'Glossaire de la facturation au Maroc : 30 termes',
    metaDesc:
      'Définitions claires des termes de la facturation marocaine : ICE, IF, taxe professionnelle, HT, TTC, avoir, situation de travaux, riyal, melyoun, clearance, UBL.',
    keywords:
      'glossaire facturation maroc, définition ICE, définition IF maroc, vocabulaire facture maroc, riyal melyoun définition',
    title: 'Glossaire de la facturation marocaine',
    intro:
      'Trente définitions, du sigle administratif au vocabulaire du souk. Parce qu’une bonne part des erreurs de facturation vient simplement de deux personnes qui n’emploient pas le même mot pour la même chose.',
    answer:
      'La facturation marocaine mobilise trois registres de vocabulaire : les identifiants administratifs (ICE, IF, taxe professionnelle), les notions comptables et fiscales (hors taxe, toutes taxes comprises, avoir, ventilation), et le vocabulaire commercial parlé (riyal, melyoun, khallasni). Confondre un prix hors taxe et un prix encaissé est l’erreur la plus fréquente.',
    blocks: [
      {
        h: 'Identifiants administratifs',
        p: ['Les numéros qui identifient une entreprise marocaine, et ce que chacun établit.'],
        table: {
          head: ['Terme', 'Définition'],
          rows: [
            ['ICE', 'Identifiant Commun de l’Entreprise. Quinze chiffres, unique, reconnu par toutes les administrations marocaines. Obligatoire sur la facture pour le vendeur, et pour le client lorsqu’il est assujetti.'],
            ['IF', 'Identifiant Fiscal. Numéro sous lequel l’entreprise est connue de la Direction Générale des Impôts ; sert aux déclarations de TVA et d’impôt.'],
            ['Taxe professionnelle', 'Taxe locale due par toute personne exerçant une activité professionnelle. Anciennement « patente ». Son numéro est rattaché à un établissement, pas à l’entreprise.'],
            ['RC', 'Registre du Commerce. Numéro d’immatriculation au tribunal de commerce ; figure sur le modèle J.'],
            ['Modèle J', 'Extrait du registre du commerce attestant l’existence et les caractéristiques de la société. C’est le document où l’on retrouve l’ICE quand on l’a perdu.'],
            ['CNSS', 'Caisse Nationale de Sécurité Sociale. Numéro d’affiliation employeur, sans effet sur la facturation mais souvent demandé dans les dossiers d’appel d’offres.']
          ]
        }
      },
      {
        h: 'Montants et taxes',
        p: ['Le registre où se logent la majorité des erreurs de calcul.'],
        table: {
          head: ['Terme', 'Définition'],
          rows: [
            ['HT — hors taxe', 'Montant avant application de la TVA. C’est la base de calcul, et ce que la facture doit exposer ligne par ligne.'],
            ['TTC — toutes taxes comprises', 'Montant TVA incluse. C’est ce que le client règle, et presque toujours ce qu’on lui annonce au comptoir.'],
            ['TVA', 'Taxe sur la Valeur Ajoutée. Collectée par le vendeur, déductible chez le client assujetti. Taux normal de 20 %, taux réduits pour des catégories limitativement énumérées.'],
            ['Ventilation', 'Répartition des montants par taux de TVA en pied de facture. Obligatoire dès que plusieurs taux coexistent, faute de quoi le montant déductible n’est pas déterminable.'],
            ['Assujetti', 'Entreprise entrant dans le champ de la TVA : elle la collecte sur ses ventes et la déduit sur ses achats.'],
            ['Exonération', 'Opération placée hors du champ ou dispensée de TVA par un texte. Une facture exonérée porte la mention correspondante et ne fait apparaître aucune TVA.'],
            ['Montant en toutes lettres', 'Total TTC écrit en toutes lettres. Mention exigée au Maroc ; en cas de divergence, elle prime sur le chiffre.']
          ]
        }
      },
      {
        h: 'Documents du cycle commercial',
        p: ['Chaque document a une fonction propre ; les confondre crée des séries incohérentes.'],
        table: {
          head: ['Terme', 'Définition'],
          rows: [
            ['Devis', 'Offre chiffrée. N’engage que celui qui l’émet, jusqu’à acceptation écrite — après quoi il vaut contrat.'],
            ['Bon de commande', 'Document par lequel le client formalise sa commande. Vaut acceptation du devis.'],
            ['Bon de livraison', 'Atteste la remise de la marchandise. Signé par le client, il fait courir le délai de paiement et sert de preuve en cas de litige.'],
            ['Facture', 'Document opposable constatant l’opération. Doit porter les mentions de l’article 145 du Code Général des Impôts.'],
            ['Facture d’acompte', 'Facture d’un montant appelé avant exécution, imputé sur le marché total.'],
            ['Situation de travaux', 'Facturation de l’avancement d’un chantier sur une période, en référence aux postes du devis.'],
            ['Facture de solde', 'Facture finale, déduisant explicitement les acomptes et situations déjà réglés.'],
            ['Avoir', 'Document annulant totalement ou partiellement une facture émise. Porte son propre numéro et référence la facture d’origine.'],
            ['Facture rectificative', 'Facture corrigeant une erreur de forme sur une facture déjà remise, sous un nouveau numéro.'],
            ['Retenue de garantie', 'Fraction du prix retenue par le client jusqu’à la levée des réserves. Modalité de règlement, pas réduction du prix : la TVA reste calculée sur la base complète.']
          ]
        }
      },
      {
        h: 'Vocabulaire commercial parlé',
        p: [
          'Ce registre n’apparaît dans aucun manuel, et c’est pourtant celui dans lequel les ventes se concluent réellement au Maroc.'
        ],
        table: {
          head: ['Terme', 'Définition'],
          rows: [
            ['Riyal', 'Unité de compte traditionnelle valant un vingtième de dirham. Encore couramment employée pour les petits montants. « Mitin riyal » = 10 dirhams.'],
            ['Melyoun', 'Dix mille dirhams — et non un million. Employé pour les grosses transactions : « joj melyoun » = 20 000 dirhams.'],
            ['Khallasni', '« Il m’a payé ». Signale un montant encaissé, donc toutes taxes comprises : la base hors taxe doit être recalculée.'],
            ['Fatora', 'Facture. « Sayab liya fatora » = « établis-moi une facture ».'],
            ['Wakha', '« D’accord ». La confirmation, celle qui déclenche l’émission.'],
            ['Kachi / cachet', 'Tampon de l’entreprise. Sans valeur légale au sens strict, mais pratiquement indispensable : une facture sans cachet est régulièrement retournée.']
          ]
        },
        note:
          'Fatora-Bot comprend ces formulations telles qu’elles se disent, convertit les unités et annonce la valeur en dirhams dans le récapitulatif avant émission — pour que l’erreur, s’il y en a une, se voie avant la facture et non après.'
      },
      {
        h: 'Facturation électronique',
        p: ['Le vocabulaire qui arrive avec le mandat DGI, et qu’il vaut mieux comprendre avant qu’on vous le vende.'],
        table: {
          head: ['Terme', 'Définition'],
          rows: [
            ['Facturation électronique', 'Émission, transmission et conservation des factures sous forme structurée. Un PDF envoyé par email n’en est pas une.'],
            ['Clearance / validation préalable', 'Modèle dans lequel chaque facture est transmise à une plateforme nationale et validée avant de produire ses effets juridiques. C’est le modèle retenu par le Maroc.'],
            ['Post-audit', 'Modèle inverse : les entreprises échangent librement, l’administration contrôle a posteriori.'],
            ['Format structuré', 'Fichier où chaque donnée occupe un champ identifié, lisible par une machine sans interprétation.'],
            ['UBL / CII', 'Deux standards internationaux de facture structurée. UBL 2.1 est le plus répandu dans les dispositifs de type clearance.'],
            ['Article 145-IX du CGI', 'Base légale de l’obligation de facturation électronique au Maroc.']
          ]
        }
      }
    ],
    faq: [
      {
        q: 'Quelle est la différence entre HT et TTC ?',
        a: 'Le montant hors taxe est la base avant TVA ; le montant toutes taxes comprises est ce que le client règle. Pour retrouver le hors taxe à partir d’un prix TTC, on divise par un plus le taux — au taux normal, 1 200 dirhams TTC correspondent à 1 000 dirhams hors taxe et 200 dirhams de TVA.'
      },
      {
        q: 'Combien vaut un melyoun en dirhams ?',
        a: 'Dix mille dirhams. Le terme prête à confusion pour qui l’entend comme « million » : « joj melyoun » désigne 20 000 dirhams, pas deux millions.'
      },
      {
        q: 'Combien vaut un riyal marocain ?',
        a: 'Un vingtième de dirham. C’est une unité de compte traditionnelle encore très employée dans le commerce de détail : « mitin riyal » correspond à 10 dirhams.'
      },
      {
        q: 'Quelle différence entre un avoir et une facture rectificative ?',
        a: 'L’avoir annule ou réduit un montant : retour de marchandise, annulation, remise accordée après coup. La facture rectificative corrige une erreur de forme — adresse, désignation, ICE — sur une facture dont le montant reste juste.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'taux-tva-maroc', 'ice-if-taxe-professionnelle'],
    updated: UPD,
    readMin: 8,
    glossary: true
  }
];
