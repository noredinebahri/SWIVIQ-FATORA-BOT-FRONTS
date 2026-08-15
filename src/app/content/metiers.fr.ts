import type { Article } from './types';

const UPD = '2026-08-12';

/**
 * Pages métier et comparatifs (français).
 * Une page secteur ne se justifie que si elle dit quelque chose que la page
 * d'accueil ne dit pas : vocabulaire du métier, contraintes de terrain, cas
 * limites de facturation. Sinon c'est du contenu mince, et Google le traite
 * comme tel.
 */
export const METIERS_FR: Article[] = [
  {
    slug: 'btp-menuiserie',
    section: 'secteurs',
    lang: 'fr',
    metaTitle: 'Facturation BTP et menuiserie au Maroc depuis le chantier',
    metaDesc:
      'Facturer depuis le chantier : métrés, fourniture et pose distinguées, acomptes, situations de travaux et retenue de garantie — dictés en darija, émis en PDF conforme.',
    keywords:
      'facturation btp maroc, facture menuiserie maroc, facture chantier, devis facture artisan maroc, facture pose fourniture',
    title: 'BTP, menuiserie, ferronnerie : facturer depuis le chantier',
    intro:
      'Sur un chantier, la facture se décide au moment de la réception, devant le client — pas trois jours plus tard au bureau. Voici comment les métiers du bâtiment facturent à la voix, et les cas particuliers qui reviennent le plus souvent.',
    answer:
      'Les métiers du bâtiment facturent au mètre linéaire, au mètre carré ou à l’unité, en distinguant la fourniture de la pose. Une facture de chantier conforme détaille chaque ouvrage avec sa quantité et son prix unitaire hors taxe, mentionne la main-d’œuvre séparément et référence explicitement le devis ou la situation de travaux dont elle découle.',
    blocks: [
      {
        h: 'Le vocabulaire du métier, tel qu’il se parle',
        p: [
          'Un menuisier ne dicte pas « article, quantité, prix unitaire ». Il dit « tlata dyal l-bibane b alf ou khamsmya l-wa7da » — trois portes à mille cinq cents chacune. Un ferronnier annonce un prix au mètre linéaire de garde-corps. Un carreleur raisonne au mètre carré, matériau et pose parfois séparés.',
          'Ces formulations sont comprises telles quelles : l’unité est identifiée, la quantité extraite, le prix unitaire distingué du total. Quand une ambiguïté subsiste — prix à l’unité ou prix total pour le lot ? — la question est posée avant émission plutôt que devinée.'
        ]
      },
      {
        h: 'Fourniture et pose : pourquoi les séparer',
        p: [
          'Regrouper la fourniture et la pose sur une ligne unique intitulée « travaux » est l’erreur la plus fréquente des factures de chantier. Elle pose deux problèmes.',
          'D’abord la qualification fiscale : la nature de l’opération détermine le taux de TVA applicable, et une désignation globale ne permet pas de le vérifier. Ensuite la relation client : un donneur d’ordre qui conteste un montant conteste toujours une ligne agrégée qu’il ne peut pas décomposer.',
          'La bonne pratique consiste donc à détailler l’ouvrage d’un côté, la main-d’œuvre de l’autre, avec leurs quantités respectives. Cela prend cinq secondes de plus à dicter et supprime la moitié des discussions de fin de chantier.'
        ]
      },
      {
        h: 'Acomptes, situations et solde',
        p: [
          'Un chantier long se facture rarement en une fois. Trois documents se succèdent, chacun avec son propre numéro dans la série.'
        ],
        table: {
          head: ['Document', 'Ce qu’il porte'],
          rows: [
            ['Facture d’acompte', 'Le montant appelé avant démarrage, avec mention de son imputation sur le marché total.'],
            ['Situation de travaux', 'L’avancement de la période, en référence aux postes du devis accepté.'],
            ['Facture de solde', 'Le reliquat, après déduction explicite des acomptes et situations déjà réglés.']
          ]
        },
        note:
          'La facture de solde doit reprendre les acomptes déjà facturés et les déduire ligne à ligne. Une facture de solde portant le montant total du marché, sans déduction, conduit le client à payer deux fois — ou plus souvent, à ne pas payer du tout en attendant une facture corrigée.'
      },
      {
        h: 'Le devis qui devient facture',
        p: [
          'Sur le terrain, la facture reprend presque toujours un devis accepté. Redicter l’intégralité des postes est une perte de temps et une source d’écart entre les deux documents.',
          'La méthode efficace consiste à partir du client déjà enregistré et à ne dicter que ce qui change : les quantités réellement posées, les travaux supplémentaires acceptés en cours de chantier, les postes abandonnés. Le référentiel clients conserve l’orthographe exacte de la raison sociale et l’ICE, qui n’ont donc pas à être redonnés.'
        ]
      },
      {
        h: 'Le cas de la retenue de garantie',
        p: [
          'Sur les marchés avec des donneurs d’ordre structurés, une retenue de garantie est fréquemment appliquée sur chaque paiement, libérée à la levée des réserves.',
          'Point important : la retenue est une modalité de règlement, pas une réduction du prix. La facture porte le montant total dû ; la retenue apparaît comme une condition de paiement, et le montant de TVA reste calculé sur la base complète. Facturer directement le montant net de retenue fausse la base de TVA et complique la facturation ultérieure du solde.'
        ]
      }
    ],
    faq: [
      {
        q: 'Peut-on facturer depuis le chantier, sans réseau stable ?',
        a: 'La demande part comme n’importe quel message WhatsApp : dès que la connexion revient, elle est traitée et le PDF arrive dans la conversation. Il n’y a pas de session à maintenir ouverte ni d’application à garder au premier plan.'
      },
      {
        q: 'Comment facturer des travaux supplémentaires acceptés oralement ?',
        a: 'Ils se dictent comme des lignes supplémentaires, avec une désignation précise de l’ouvrage. Pour se prémunir d’une contestation, faites-les valider par écrit — un message WhatsApp du client suffit en pratique — avant de les porter sur la facture.'
      },
      {
        q: 'Le prix au mètre linéaire est-il compris correctement ?',
        a: 'Oui. L’unité annoncée — mètre linéaire, mètre carré, unité, forfait — est reprise dans la désignation, et la quantité est distinguée du prix unitaire. En cas d’ambiguïté entre un prix unitaire et un montant total, la question est posée avant émission.'
      },
      {
        q: 'Plusieurs équipes peuvent-elles facturer sur le même compte ?',
        a: 'Oui : la numérotation, le référentiel clients et le cachet sont partagés au niveau de l’entreprise, ce qui garantit une série continue quel que soit le chantier d’origine. Pour un déploiement sur plusieurs équipes, contactez-nous.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'taux-tva-maroc', 'facture-whatsapp-comment-faire'],
    updated: UPD,
    readMin: 6
  },

  {
    slug: 'transport-logistique',
    section: 'secteurs',
    lang: 'fr',
    metaTitle: 'Facturation transport et logistique au Maroc à la voix',
    metaDesc:
      'Facturer une course dès la livraison : chauffeurs qui dictent depuis la route, courses groupées, attente et surestaries, facturation mensuelle par client.',
    keywords:
      'facture transport maroc, facturation transporteur, facture course livraison, facturation logistique maroc',
    title: 'Transport et logistique : facturer la course avant le retour au dépôt',
    intro:
      'Dans le transport, le délai entre la prestation et la facture est le premier poste de perte. Un chauffeur qui dicte à la livraison supprime ce délai — et l’oubli qui va souvent avec.',
    answer:
      'Un transporteur peut facturer une course dès la livraison en dictant depuis son téléphone : client, trajet, tonnage ou volume, montant convenu. La facture est émise avec les mentions légales de l’entreprise et transmise au donneur d’ordre immédiatement, sans attendre le retour au dépôt ni la saisie au bureau.',
    blocks: [
      {
        h: 'Le problème réel : le délai, pas la saisie',
        p: [
          'Le chauffeur livre, le bon de livraison rentre au dépôt en fin de journée ou en fin de semaine, la facture est saisie plus tard, envoyée plus tard encore. Chaque étape ajoute du délai de paiement, et certaines courses disparaissent purement et simplement entre le bon froissé et le bureau.',
          'Facturer au moment de la livraison inverse la logique : la prestation et son document commercial coïncident. Le donneur d’ordre reçoit la facture pendant que la livraison est fraîche dans son esprit, ce qui réduit aussi les contestations.'
        ]
      },
      {
        h: 'Ce qu’une facture de transport doit décrire',
        p: [
          'La désignation « transport » ne suffit pas : elle ne permet ni de rattacher la facture à une prestation précise, ni de justifier le taux appliqué. Une ligne exploitable comporte quatre éléments.'
        ],
        list: [
          'Le trajet — origine et destination, ou la tournée si la course en dessert plusieurs.',
          'La date de la prestation, qui peut différer de la date d’émission de la facture.',
          'L’unité de facturation : au voyage, au tonnage, au volume, au kilomètre ou au forfait.',
          'La référence du bon de livraison ou du bon de commande du donneur d’ordre, sans laquelle le rapprochement est impossible de son côté.'
        ]
      },
      {
        h: 'Attente, retour à vide, surestaries',
        p: [
          'Ce sont les postes les plus souvent oubliés, et les plus discutés. L’attente au chargement ou au déchargement, le retour à vide, l’immobilisation au-delà du délai convenu se facturent — encore faut-il qu’ils apparaissent en ligne distincte.',
          'Noyés dans le prix de la course, ils deviennent invisibles et ne sont plus défendables l’année suivante lors de la renégociation tarifaire. Dictés séparément — « et deux heures d’attente à 150 » — ils constituent une ligne à part entière, avec sa quantité et son prix unitaire.'
        ]
      },
      {
        h: 'Courses ponctuelles ou facturation mensuelle',
        p: [
          'Deux modèles coexistent dans le secteur, et le choix se fait par client plutôt qu’en bloc.',
          'La facture à la course convient aux clients occasionnels et aux particuliers : le règlement suit immédiatement, souvent au comptant, et le QR code permet de remettre le document sans échanger d’adresse email.',
          'La facture mensuelle récapitulative convient aux donneurs d’ordre réguliers, dont la comptabilité préfère une facture par mois listant les courses. Les archives consultables à la voix — « toutes les factures d’Ahmed ce mois-ci », avec le total — permettent de préparer ce récapitulatif sans ressaisie.'
        ],
        note:
          'Quel que soit le modèle, la numérotation reste unique et continue au niveau de l’entreprise. Ce n’est pas parce que les factures partent depuis plusieurs camions que la série se dédouble.'
      },
      {
        h: 'Un chauffeur qui écrit peu peut facturer',
        p: [
          'C’est décisif dans ce métier. Une bonne partie des conducteurs maîtrise mal l’écrit administratif, et aucune application de gestion ne franchit cet obstacle : il y a toujours un formulaire à remplir au clavier.',
          'La note vocale le franchit. Le chauffeur dit la course en darija, entend le récapitulatif prononcé à voix haute — client, trajet, montant — et confirme d’un « wakha ». La facture porte les mentions légales de l’entreprise et son cachet, sans qu’il ait eu à lire ou écrire quoi que ce soit.'
        ]
      }
    ],
    faq: [
      {
        q: 'Le chauffeur peut-il facturer sans accès aux données de l’entreprise ?',
        a: 'Les informations de l’entreprise — ICE, identifiant fiscal, taxe professionnelle, cachet — sont enregistrées une fois au niveau du compte et s’appliquent automatiquement à toutes les factures. Le chauffeur n’a que la course à décrire.'
      },
      {
        q: 'Comment facturer une tournée qui dessert plusieurs clients ?',
        a: 'Si la tournée est réalisée pour un donneur d’ordre unique, elle donne lieu à une facture unique détaillant les points desservis en lignes distinctes. Si chaque destinataire est un client différent, chaque prestation donne lieu à sa propre facture.'
      },
      {
        q: 'Peut-on facturer en devise pour du transport international ?',
        a: 'Les factures sont émises en dirhams. Pour des opérations internationales impliquant une autre devise ou un régime d’exonération à l’exportation, rapprochez-vous de votre comptable : ces situations appellent des mentions spécifiques.'
      },
      {
        q: 'Les factures restent-elles accessibles depuis le bureau ?',
        a: 'Oui. Les archives sont consultables depuis la conversation par numéro, par client ou par période, avec les totaux correspondants, et chaque PDF émis est conservé.'
      }
    ],
    related: ['mentions-obligatoires-facture', 'facture-whatsapp-comment-faire', 'commerce-detail'],
    updated: UPD,
    readMin: 6
  },

  {
    slug: 'commerce-detail',
    section: 'secteurs',
    lang: 'fr',
    metaTitle: 'Facturation au comptoir pour commerces et grossistes',
    metaDesc:
      'Facturer un client au comptoir en quelques secondes : prix TTC annoncés, riyal et melyoun, remise par QR code sans email, et facturation en gros avec ICE client.',
    keywords:
      'facture commerce maroc, facturation magasin, facture grossiste maroc, facture comptoir QR code, prix riyal melyoun',
    title: 'Commerce de détail et gros : facturer au comptoir en quelques secondes',
    intro:
      'Au comptoir, la contrainte est le temps : une facture qui prend trois minutes fait attendre la file. Voici comment ramener l’émission à quelques secondes, sans sacrifier la conformité.',
    answer:
      'Un commerçant peut émettre une facture au comptoir en dictant les articles et le montant encaissé. Le prix annoncé toutes taxes comprises est reconverti en base hors taxe, la TVA est calculée et le PDF conforme est remis au client par QR code, sans avoir à saisir son adresse email ni à interrompre la vente suivante.',
    blocks: [
      {
        h: 'Le prix se dit TTC, la facture part du HT',
        p: [
          'Au comptoir, personne n’annonce un prix hors taxe. Le client demande combien il doit, le vendeur donne un montant tout compris, et l’encaissement se fait sur ce montant.',
          'La facture, elle, doit exposer la base hors taxe, le taux et le montant de TVA. La conversion se fait en divisant le TTC par un plus le taux — et non en retranchant le taux, erreur classique qui fausse la base de plusieurs pour cent.',
          'C’est pourquoi les formulations d’encaissement sont interprétées comme telles : quand la somme est présentée comme reçue — « khallasni 1 200 » — elle est traitée comme un montant toutes taxes comprises, la base hors taxe est recalculée, et le récapitulatif annonce les deux avant émission.'
        ]
      },
      {
        h: 'Riyal, melyoun : les unités réellement parlées',
        p: [
          'Dans une grande partie du commerce marocain, les prix ne se disent pas en dirhams. Le riyal — un vingtième de dirham — reste courant pour les petits montants ; le melyoun — dix mille dirhams — s’emploie pour les grosses transactions.',
          'Un outil qui ne comprend que le dirham oblige le vendeur à convertir mentalement à chaque facture, ce qui est à la fois lent et source d’erreur. Les deux unités sont donc reconnues et converties, et la valeur en dirhams est répétée dans le récapitulatif — pour que l’erreur, s’il y en a une, se voie avant l’émission et non après.'
        ]
      },
      {
        h: 'Détail ou gros : deux exigences différentes',
        p: [
          'La distinction ne porte pas sur le montant mais sur la qualité du client, et elle change ce que la facture doit porter.'
        ],
        table: {
          head: ['', 'Client particulier', 'Client professionnel'],
          rows: [
            ['ICE du client', 'Sans objet', 'Obligatoire'],
            ['Remise du document', 'QR code à scanner sur place', 'WhatsApp ou email, pour la comptabilité'],
            ['Désignation', 'Article vendu', 'Référence, conditionnement et quantité précis'],
            ['Enjeu principal', 'Rapidité au comptoir', 'Déductibilité de la TVA chez le client']
          ]
        },
        note:
          'Pour un client professionnel régulier, l’ICE et l’orthographe exacte de la raison sociale sont enregistrés une fois dans le référentiel. Les factures suivantes ne demandent plus que les articles.'
      },
      {
        h: 'Le QR code : remettre sans échanger d’email',
        p: [
          'Demander une adresse email au comptoir ralentit tout : il faut l’épeler, la vérifier, la ressaisir en cas de faute. Pour un client de passage, c’est disproportionné.',
          'Le QR code résout le problème : le client scanne l’écran du vendeur et télécharge sa facture. Le code peut aussi être imprimé et laissé sur le comptoir. Aucune donnée personnelle n’est échangée, et la file avance.'
        ]
      },
      {
        h: 'Retrouver une vente contestée',
        p: [
          'Un client revient une semaine plus tard avec une réclamation, sans son document. La recherche à la voix — « la facture numéro 8 », « les factures de mardi », « celles d’Ahmed » — renvoie le PDF en quelques secondes, avec le total de la période.',
          'C’est l’usage qui convainc le plus souvent les commerçants après quelques semaines : il supprime le carton d’archives et l’appel au comptable pour retrouver un document de trois lignes.'
        ]
      }
    ],
    faq: [
      {
        q: 'Combien de temps prend l’émission d’une facture au comptoir ?',
        a: 'De la dictée au PDF émis, comptez une trentaine de secondes, dont l’essentiel est le temps de parole. Pour un client déjà enregistré, seuls les articles restent à dicter.'
      },
      {
        q: 'Les prix annoncés en riyal sont-ils compris ?',
        a: 'Oui. Le riyal — un vingtième de dirham — et le melyoun — dix mille dirhams — sont reconnus et convertis en dirhams. La valeur convertie est répétée dans le récapitulatif avant émission, pour permettre la vérification.'
      },
      {
        q: 'Faut-il l’ICE du client pour une vente au détail ?',
        a: 'Non lorsque le client est un particulier non assujetti : la mention n’a pas d’objet. Elle est en revanche obligatoire dès que le client est une entreprise assujettie, faute de quoi il ne pourra pas déduire la TVA.'
      },
      {
        q: 'Peut-on imprimer la facture au comptoir ?',
        a: 'Le PDF reçu dans la conversation s’imprime comme n’importe quel document depuis un téléphone relié à une imprimante. Le plus souvent, le QR code suffit : le client télécharge lui-même son exemplaire.'
      }
    ],
    related: ['taux-tva-maroc', 'mentions-obligatoires-facture', 'facture-whatsapp-comment-faire'],
    updated: UPD,
    readMin: 6
  },

  {
    slug: 'alternative-logiciel-facturation',
    section: 'comparatif',
    lang: 'fr',
    metaTitle: 'Logiciel de facturation au Maroc : le comparatif honnête',
    metaDesc:
      'Quel logiciel de facturation choisir au Maroc ? Facturation conversationnelle ou logiciel classique : coût réel, délai de mise en route, adoption par les équipes de terrain et limites de chaque approche, sans complaisance.',
    keywords:
      'logiciel de facturation maroc, logiciel facturation gratuit maroc, alternative logiciel facturation maroc, logiciel facturation TPE maroc, comparatif facturation maroc, logiciel facture pas cher maroc',
    title: 'Facturation conversationnelle ou logiciel classique : comment choisir',
    intro:
      'Un logiciel de facturation reste le bon choix pour beaucoup d’entreprises. Ce comparatif dit dans quels cas, et dans quels autres cas une approche conversationnelle est plus réaliste — y compris là où Fatora-Bot n’est pas la bonne réponse.',
    answer:
      'Un logiciel de facturation classique convient aux entreprises disposant d’un poste de travail, d’une personne dédiée à l’administratif et de besoins de gestion étendus (stocks, comptabilité, paie). Une solution conversationnelle sur WhatsApp convient aux équipes de terrain sans poste fixe, où la facture doit être émise sur place et par des personnes qui écrivent peu.',
    blocks: [
      {
        h: 'Ce que les deux approches ont en commun',
        p: [
          'Les deux produisent une facture conforme : mêmes mentions obligatoires, même numérotation continue, même archivage. Sur ce plan, il n’y a pas de différence de nature, et méfiez-vous de tout comparatif qui prétendrait le contraire.',
          'Les deux devront également se raccorder à la plateforme nationale lorsque la facturation électronique obligatoire s’appliquera à votre catégorie d’entreprise. Ce raccordement relèvera du prestataire dans les deux cas.'
        ]
      },
      {
        h: 'Le comparatif honnête',
        p: ['Poste par poste, sur les critères qui pèsent réellement dans la décision.'],
        table: {
          head: ['Critère', 'Logiciel de facturation', 'Facturation sur WhatsApp'],
          rows: [
            ['Matériel requis', 'Ordinateur ou tablette dédiée', 'Le téléphone déjà en poche'],
            ['Mise en route', 'Installation, paramétrage, import des données', 'Six questions dans une conversation'],
            ['Formation', 'Nécessaire, renouvelée à chaque arrivée', 'Aucune : envoyer un vocal suffit'],
            ['Utilisable par une personne qui écrit peu', 'Non', 'Oui, conversation entièrement vocale'],
            ['Émission depuis le terrain', 'Difficile hors du poste de travail', 'C’est le cas d’usage principal'],
            ['Gestion des stocks', 'Généralement incluse', 'Non couverte'],
            ['Comptabilité complète, paie, immobilisations', 'Selon l’offre', 'Non couverte'],
            ['Devis, relances, échéanciers', 'Généralement inclus', 'Couverture partielle'],
            ['Coût mensuel typique', 'Licence par poste', 'Abonnement au volume de factures'],
            ['Export vers le comptable', 'Formats comptables standards', 'PDF et récapitulatifs par période']
          ]
        }
      },
      {
        h: 'Quand le logiciel classique est le bon choix',
        p: [
          'Soyons directs : il l’est plus souvent qu’un éditeur de solution conversationnelle n’aime l’admettre.'
        ],
        list: [
          'Vous gérez des stocks et avez besoin que la facture décrémente l’inventaire.',
          'Vous avez besoin d’une comptabilité intégrée, d’une paie ou d’états financiers produits par le même outil.',
          'Vos factures comportent des dizaines de lignes issues d’un catalogue de références.',
          'Une personne est dédiée à l’administratif et travaille sur un poste fixe : la contrainte d’équipement n’existe pas.',
          'Votre comptable exige un format d’export précis dans son propre outil de production.'
        ]
      },
      {
        h: 'Quand la facturation conversationnelle l’emporte',
        p: [
          'Elle gagne lorsque l’obstacle n’est pas la fonctionnalité mais l’accès. Un logiciel très complet qui n’est jamais utilisé par les équipes de terrain ne produit aucune facture.'
        ],
        list: [
          'Vos équipes facturent depuis un chantier, un camion, un souk ou un comptoir, sans poste de travail.',
          'Une partie de vos collaborateurs lit ou écrit difficilement — aucune interface de saisie ne franchit cet obstacle.',
          'Vous facturez peu de lignes par document, mais souvent, et le délai d’émission est votre vrai problème.',
          'Vous ne voulez ni déployer, ni former, ni gérer des licences par poste.',
          'Vos factures partent aujourd’hui d’un carnet ou d’un tableur, et la numérotation est déjà approximative.'
        ]
      },
      {
        h: 'La solution mixte, souvent la plus réaliste',
        p: [
          'Beaucoup d’entreprises n’ont pas à choisir. Le bureau conserve son logiciel de gestion pour les stocks, la comptabilité et les gros dossiers ; les équipes de terrain émettent leurs factures depuis WhatsApp ; les PDF et les récapitulatifs par période sont transmis au comptable.',
          'C’est particulièrement vrai pour les fiduciaires qui équipent leurs clients TPE : le cabinet garde son outil de production, et ses clients cessent d’apporter des carnets illisibles en fin de trimestre.'
        ],
        note:
          'Si votre besoin dépasse la facturation — stocks, comptabilité intégrée, catalogue de références étendu — un logiciel de gestion reste le bon investissement. Nous le disons aux prospects concernés plutôt que de leur vendre un abonnement qu’ils résilieront.'
      }
    ],
    faq: [
      {
        q: 'Fatora-Bot remplace-t-il un logiciel de comptabilité ?',
        a: 'Non. Le service émet, archive et transmet des factures conformes. Il ne tient pas la comptabilité, ne gère pas les stocks et ne produit pas d’états financiers. Pour ces besoins, un logiciel de gestion reste nécessaire, éventuellement en complément.'
      },
      {
        q: 'Peut-on utiliser les deux en parallèle ?',
        a: 'Oui, et c’est un usage fréquent : le bureau conserve son logiciel pour la gestion, les équipes de terrain facturent depuis WhatsApp, et les PDF ainsi que les totaux par période sont transmis au comptable.'
      },
      {
        q: 'Que se passe-t-il pour les factures existantes lors du changement d’outil ?',
        a: 'Les factures antérieures restent chez votre ancien prestataire ou dans vos archives. Le point de vigilance est la continuité de la numérotation : indiquez le dernier numéro utilisé pour que la nouvelle série reprenne à sa suite sans doublon ni trou.'
      },
      {
        q: 'Le coût est-il réellement inférieur ?',
        a: 'Cela dépend de votre volume. Un abonnement indexé sur le nombre de factures est avantageux pour une petite structure et le devient moins à volume élevé. La comparaison honnête inclut aussi le matériel, le temps de formation et les licences par poste, qui pèsent souvent plus que la licence elle-même.'
      }
    ],
    related: ['excel-vs-facturation-whatsapp', 'facture-whatsapp-comment-faire', 'facturation-electronique-maroc'],
    updated: UPD,
    readMin: 7
  },

  {
    slug: 'excel-vs-facturation-whatsapp',
    section: 'comparatif',
    lang: 'fr',
    metaTitle: 'Facturer sur Excel : les risques et quand en sortir',
    metaDesc:
      'Pourquoi le tableur casse les ICE, trouve les séries de numéros et fausse les calculs de TVA — et à partir de quel volume il faut en sortir avant la facturation électronique.',
    keywords:
      'facture excel maroc, modèle facture excel, facturer sur tableur, risques facture excel, alternative excel facturation',
    title: 'Facturer sur Excel : ce que le tableur casse sans prévenir',
    intro:
      'Le tableur est l’outil de facturation le plus répandu du pays, et il rend service. Il a aussi trois défauts structurels qui se paient au moment du contrôle ou du passage à la facturation électronique.',
    answer:
      'Facturer dans un tableur expose à trois risques : les ICE perdent leurs zéros de tête car la cellule traite la suite de chiffres comme un nombre, la numérotation se troue dès qu’un fichier est dupliqué ou supprimé, et les formules de TVA se propagent mal lorsque plusieurs taux coexistent. Ces erreurs ne se voient qu’a posteriori.',
    blocks: [
      {
        h: 'Défaut 1 — le tableur détruit les ICE',
        p: [
          'C’est le plus insidieux, parce qu’il est silencieux. Un ICE commence fréquemment par un ou plusieurs zéros : « 001234567000089 ». Saisi dans une cellule au format standard, le tableur l’interprète comme un nombre et supprime les zéros non significatifs. La facture part avec « 1234567000089 » — treize chiffres au lieu de quinze.',
          'Aucun message d’erreur n’apparaît. La faute est découverte par le client, qui renvoie la facture, ou lors d’un contrôle, où elle porte sur toute une série.',
          'Le contournement existe — formater la colonne en texte, ou préfixer d’une apostrophe — mais il suppose que chaque personne saisissant une facture y pense à chaque fois. Dans la pratique, cela ne tient pas.'
        ],
        note:
          'Vérifiez maintenant vos factures des douze derniers mois : si un ICE y compte moins de quinze chiffres, l’erreur est probablement systématique et non isolée.'
      },
      {
        h: 'Défaut 2 — la numérotation ne tient pas',
        p: [
          'La méthode habituelle consiste à dupliquer le fichier de la dernière facture et à incrémenter le numéro à la main. Chaque étape de cette manipulation est un risque.',
          'Un fichier dupliqué et abandonné consomme un numéro qui n’apparaîtra jamais : la série est trouée. Un fichier écrasé par erreur fait disparaître une facture émise. Deux personnes qui facturent le même jour attribuent le même numéro à deux opérations différentes.',
          'Or c’est exactement ce qu’un dispositif de validation préalable détecte mécaniquement. Ce qui passait inaperçu lors d’un contrôle ponctuel deviendra visible en continu.'
        ]
      },
      {
        h: 'Défaut 3 — les calculs de TVA se propagent mal',
        p: [
          'Tant qu’une facture ne comporte qu’un seul taux, la formule tient. Dès que plusieurs taux coexistent, il faut ventiler par taux en pied de facture : base hors taxe, TVA, total, pour chaque taux.',
          'Dans un modèle de tableur, cette ventilation est presque toujours écrite en dur pour un cas précis, puis recopiée sans être adaptée. Le résultat est une facture dont le total de TVA est juste globalement mais faux dans sa décomposition — donc contestable.',
          'S’y ajoute le montant en toutes lettres, que le tableur ne sait pas produire nativement : il est tapé à la main, avec les fautes d’accord habituelles sur les centaines et les milliers.'
        ]
      },
      {
        h: 'Le vrai seuil de sortie',
        p: [
          'Le tableur reste défendable pour quelques factures par an, avec un seul taux de TVA et une seule personne qui facture. Trois signaux indiquent qu’il faut en sortir.'
        ],
        list: [
          'Plus d’une personne émet des factures — la collision de numéros devient une question de temps.',
          'Vos factures mélangent plusieurs taux de TVA — la ventilation en pied de facture n’est plus fiable.',
          'Vous facturez plus d’une dizaine de documents par mois — le temps de manipulation dépasse largement le coût d’un outil.',
          'Vos équipes facturent hors du bureau — le tableur suppose un poste de travail, la vente a lieu ailleurs.'
        ]
      },
      {
        h: 'Ce que change un compteur automatique',
        p: [
          'Les trois défauts ont la même origine : le tableur ne sait pas ce qu’est une facture. C’est une grille de cellules, et toute la sémantique — un ICE est une chaîne de quinze caractères, un numéro s’incrémente et ne se réutilise pas, une TVA se ventile par taux — repose sur la discipline de la personne qui saisit.',
          'Un outil de facturation porte cette sémantique lui-même : l’ICE est stocké comme du texte, le numéro est attribué par un compteur unique par entreprise, la ventilation par taux est calculée, le montant en lettres est généré. Ce n’est pas une question de confort mais de classe d’erreurs éliminée.'
        ]
      }
    ],
    faq: [
      {
        q: 'Une facture Excel est-elle légale au Maroc ?',
        a: 'Rien n’interdit aujourd’hui de produire une facture avec un tableur, dès lors qu’elle comporte toutes les mentions obligatoires et s’inscrit dans une numérotation continue. Le problème n’est pas la légalité du format mais la fiabilité de ce qu’il produit dans la durée — et l’arrivée de la facturation électronique obligatoire, qui exigera des fichiers structurés.'
      },
      {
        q: 'Comment empêcher Excel de supprimer les zéros d’un ICE ?',
        a: 'Il faut formater la cellule en texte avant la saisie, ou faire précéder le numéro d’une apostrophe. Le contournement fonctionne, mais suppose que chaque personne y pense à chaque saisie — ce qui ne tient pas dans la durée.'
      },
      {
        q: 'Peut-on récupérer ses anciennes factures en changeant d’outil ?',
        a: 'Vos fichiers existants restent vos archives et doivent être conservés selon les obligations comptables. Le point à traiter est la continuité de la série : indiquez le dernier numéro utilisé pour que la nouvelle numérotation reprenne à sa suite, sans doublon ni trou.'
      },
      {
        q: 'À partir de combien de factures faut-il quitter le tableur ?',
        a: 'Il n’y a pas de seuil réglementaire. En pratique, dès que plusieurs personnes facturent, que plusieurs taux de TVA coexistent, ou au-delà d’une dizaine de factures par mois, le temps passé et le risque d’erreur dépassent le coût d’un outil dédié.'
      }
    ],
    related: ['alternative-logiciel-facturation', 'numerotation-factures', 'mentions-obligatoires-facture'],
    updated: UPD,
    readMin: 7
  }
];
