import type { RawContexts, RawYear } from "./types";

/**
 * Présidentielle 2002 — cohabitation, insécurité, 35 heures, euro fiduciaire,
 * choc du 21 avril, Corse, PACS. Le questionnaire est écrit pour ce scrutin :
 * aucun sujet postérieur à 2002 n'y figure.
 */
export const RAW_2002: RawYear = {
  economie: [
    ["L'impôt sur la fortune devrait être supprimé pour doper l'investissement.", "redistribution", -1, { express: true }],
    ["La baisse des impôts doit primer sur la réduction de la dette publique.", "dette", -1],
    ["L'État doit privatiser France Télécom et les dernières entreprises publiques.", "etat-economie", -1],
    ["Les 35 heures ont amélioré la vie quotidienne des salariés.", "flexibilite-travail", -1, { express: true }],
    ["Les emplois-jeunes ont été une bonne réponse au chômage des jeunes.", "etat-economie", 1],
    ["L'arrivée des pièces et des billets en euros est une chance pour les Français.", "europe", 1],
    ["La France doit instaurer une taxe sur les transactions financières.", "redistribution", 1],
    ["Le SMIC doit être porté à 1 000 euros net par mois.", "redistribution", 1],
    ["Les charges sociales des petites entreprises doivent être fortement allégées.", "etat-economie", -1],
    ["Un revenu minimum garanti doit être versé à tous les jeunes sans emploi.", "universalite-sociale", 1],
  ],
  travail: [
    ["Les 35 heures doivent être assouplies dans les petites entreprises.", "flexibilite-travail", 1],
    ["La retraite à 60 ans doit être préservée.", "retraites", -1, { express: true }],
    ["Les licenciements économiques doivent être facilités pour les entreprises en difficulté.", "flexibilite-travail", 1],
    ["Le service minimum doit être imposé dans les transports en cas de grève.", "autorite", 1],
    ["Les syndicats doivent être associés à la gestion des entreprises.", "flexibilite-travail", -1],
    ["Le SMIC doit être revalorisé chaque année au-delà de l'inflation.", "redistribution", 1, { express: true }],
    ["Les stock-options des dirigeants doivent être fiscalisées comme un salaire.", "redistribution", 1],
    ["Les contrats à durée déterminée doivent être plus strictement encadrés.", "flexibilite-travail", -1],
    ["L'âge légal du départ à la retraite doit être reculé progressivement à 65 ans.", "retraites", 1],
    ["Les fonctionnaires doivent conserver une garantie de l'emploi à vie.", "etat-economie", 1],
  ],
  social: [
    ["La couverture maladie universelle doit être étendue et simplifiée.", "universalite-sociale", 1, { express: true }],
    ["Les dépassements d'honoraires des médecins doivent être encadrés.", "universalite-sociale", 1],
    ["L'ouverture du capital des hôpitaux publics au privé est nécessaire.", "universalite-sociale", -1],
    ["Le RMI doit être conditionné à une activité d'insertion.", "universalite-sociale", -1],
    ["Un revenu d'existence inconditionnel doit remplacer les minima sociaux.", "universalite-sociale", 1, { express: true }],
    ["Les retraites par capitalisation doivent compléter le régime par répartition.", "retraites", 1],
    ["La lutte contre les exclusions doit être une priorité budgétaire.", "redistribution", 1],
    ["L'aide médicale d'État doit être restreinte aux soins urgents.", "immigration", 1],
    ["Le numerus clausus des études de médecine doit être relevé.", "universalite-sociale", 1],
    ["Les prestations familiales doivent être ciblées sur les revenus modestes.", "universalite-sociale", -1],
  ],
  education: [
    ["Le collège unique doit rester un principe intangible.", "education-egalite", 1, { express: true }],
    ["La carte scolaire doit être supprimée pour laisser les parents choisir leur établissement.", "education-egalite", -1, { express: true }],
    ["Les enseignants doivent être évalués et payés au mérite.", "education-egalite", -1],
    ["Les établissements des quartiers populaires doivent recevoir beaucoup plus de moyens.", "education-egalite", 1],
    ["Le financement public de l'école privée doit être remis en cause.", "laicite", 1],
    ["L'apprentissage doit être développé dès 16 ans comme voie d'excellence.", "education-egalite", -1],
    ["L'université doit être autonome et sélectionner ses étudiants à l'entrée.", "education-egalite", -1],
    ["Les programmes doivent valoriser davantage l'effort et l'instruction civique.", "education-egalite", -1],
    ["Une allocation d'étude doit être versée à tous les lycéens et étudiants.", "universalite-sociale", 1],
    ["La mixité sociale à l'école doit être imposée par la carte scolaire.", "education-egalite", 1],
  ],
  immigration: [
    ["Les accords de Schengen doivent être renégociés pour rétablir des contrôles nationaux.", "immigration", 1],
    ["Les étrangers qui vivent et travaillent en France doivent voter aux élections locales.", "immigration", -1, { express: true }],
    ["Les sans-papiers qui travaillent doivent être régularisés.", "immigration", -1],
    ["La préférence nationale doit s'appliquer à l'attribution des prestations sociales.", "immigration", 1, { express: true }],
    ["Le regroupement familial doit être fortement restreint.", "immigration", 1],
    ["La double nationalité doit être supprimée.", "immigration", 1],
    ["La France doit accueillir les réfugiés afghans chassés par la guerre.", "immigration", -1],
    ["Les contrôles d'identité au faciès doivent être strictement encadrés et sanctionnés.", "libertes-publiques", 1],
    ["Les quotas migratoires doivent être votés chaque année par le Parlement.", "immigration", 1],
    ["L'intégration doit passer par la maîtrise de la langue et des valeurs républicaines.", "immigration", 1],
  ],
  securite: [
    ["La police de proximité doit être généralisée dans les quartiers.", "autorite", -1, { express: true }],
    ["Les peines prononcées doivent être systématiquement exécutées, même courtes.", "autorite", 1, { express: true }],
    ["La détention provisoire est beaucoup trop utilisée en France.", "libertes-publiques", 1],
    ["Les mineurs délinquants doivent être jugés plus rapidement et plus sévèrement.", "autorite", 1],
    ["Des centres fermés doivent être créés pour les mineurs délinquants.", "autorite", 1],
    ["La vidéosurveillance doit être massivement développée dans les villes.", "libertes-publiques", -1],
    ["Le cannabis doit être dépénalisé pour mieux encadrer sa consommation.", "libertes-publiques", 1],
    ["La présomption d'innocence doit être mieux garantie devant les tribunaux.", "libertes-publiques", 1],
    ["Les policiers doivent bénéficier d'une présomption de légitime défense.", "autorite", 1],
    ["La prévention et l'éducation comptent plus que la répression.", "autorite", -1],
  ],
  ecologie: [
    ["La France doit sortir du nucléaire civil.", "nucleaire", -1, { express: true }],
    ["Le principe de précaution doit guider les décisions publiques sur l'alimentation et les OGM.", "ecologie-contrainte", 1, { express: true }],
    ["La chasse doit être interdite un jour par semaine.", "ruralite", -1],
    ["Les cultures d'organismes génétiquement modifiés doivent être interdites en plein champ.", "ecologie-contrainte", 1],
    ["La France doit construire de nouveaux réacteurs nucléaires.", "nucleaire", 1],
    ["Le prix des carburants doit augmenter pour financer les énergies renouvelables.", "ecologie-contrainte", 1],
    ["Les normes environnementales doivent être allégées pour l'agriculture française.", "ecologie-contrainte", -1],
    ["Le naufrage de l'Erika impose de renforcer le contrôle des navires.", "ecologie-contrainte", 1],
    ["Les transports en commun doivent être gratuits dans les grandes villes.", "ecologie-contrainte", 1],
    ["L'énergie éolienne doit être massivement développée.", "ecologie-contrainte", 1],
  ],
  europe: [
    ["La France doit ratifier une constitution européenne.", "europe", 1, { express: true }],
    ["La Turquie doit pouvoir entrer dans l'Union européenne.", "europe", 1, { express: true }],
    ["L'Union européenne doit se doter d'une politique étrangère et de défense commune.", "europe", 1],
    ["Le droit européen doit primer sur la loi française.", "europe", 1],
    ["L'Europe sociale doit primer sur les règles de concurrence.", "europe", 1],
    ["Les institutions doivent être réformées dans un sens plus parlementaire.", "institutions", 1],
    ["Le quinquennat était une bonne réforme pour les institutions.", "institutions", -1],
    ["Le cumul des mandats doit être totalement interdit.", "institutions", 1, { open: true }],
    ["L'Assemblée nationale doit être élue à la proportionnelle intégrale.", "institutions", 1],
    ["Tout nouvel élargissement doit être refusé avant une réforme des institutions.", "europe", -1],
  ],
  international: [
    ["La France doit réintégrer le commandement intégré de l'OTAN.", "alliances", 1],
    ["La France doit participer à la guerre contre le terrorisme en Afghanistan.", "alliances", 1, { express: true }],
    ["Le budget de la défense doit être maintenu à un niveau élevé.", "defense", 1],
    ["Toute intervention militaire doit être autorisée par l'ONU.", "alliances", -1],
    ["La dissuasion nucléaire reste indispensable à la sécurité de la France.", "defense", 1, { express: true }],
    ["L'aide publique au développement doit atteindre 0,7 % du PIB.", "defense", -1],
    ["Les sanctions économiques contre l'Irak doivent être levées.", "alliances", -1],
    ["L'Europe de la défense doit être indépendante de l'OTAN.", "alliances", -1],
    ["La France doit reconnaître l'État palestinien.", "alliances", -1],
    ["La France doit continuer à exporter des armes vers ses alliés.", "defense", 1],
  ],
  societe: [
    ["Le mariage doit être ouvert aux couples de même sexe.", "progressisme-societal", 1, { express: true }],
    ["La parité doit être imposée par la loi dans les assemblées et les entreprises.", "progressisme-societal", 1, { express: true }],
    ["Le délai de réflexion imposé avant une IVG doit être supprimé.", "progressisme-societal", 1],
    ["L'euthanasie doit être légalisée dans un cadre strict.", "progressisme-societal", 1],
    ["La famille traditionnelle doit rester protégée par le droit fiscal.", "progressisme-societal", -1],
    ["Le port du voile doit être interdit à l'école publique.", "laicite", 1],
    ["La prostitution doit être encadrée et reconnue comme une activité.", "libertes-publiques", 1],
    ["L'adoption doit être ouverte aux couples homosexuels.", "progressisme-societal", 1],
    ["La culture doit être financée à la hauteur de son rôle social.", "redistribution", 1],
    ["Un service national obligatoire doit être rétabli.", "autorite", 1],
  ],
};

/**
 * Un contexte par identifiant de question du scrutin : sigles développés,
 * mesures, montants et état du droit tel qu'il était en 2002.
 */
export const CONTEXT_2002: RawContexts = {
  "2002-economie-1":
    "L'impôt de solidarité sur la fortune (ISF), créé en 1989, taxe chaque année les patrimoines nets supérieurs à environ 720 000 euros. Il rapporte près de deux milliards d'euros par an.",
  "2002-economie-2":
    "En 2002, la dette publique atteint environ 900 milliards d'euros, soit près de 60 % du PIB — le plafond fixé par le traité de Maastricht. Les prélèvements obligatoires représentent alors près de 44 % du PIB.",
  "2002-economie-3":
    "France Télécom, opérateur historique des télécommunications, reste contrôlé majoritairement par l'État en 2002. L'ouverture du marché à la concurrence découle des directives européennes appliquées depuis 1998.",
  "2002-economie-4":
    "Les deux lois Aubry, votées en 1998 et 2000, ont ramené la durée légale du travail de 39 à 35 heures par semaine, avec des aides publiques aux entreprises et des marges de négociation par accord.",
  "2002-economie-5":
    "Le programme « nouveaux services, nouveaux emplois », lancé en 1997, subventionne des postes dans les collectivités et les associations pour les jeunes de moins de 26 ans. Environ 350 000 contrats ont été signés.",
  "2002-economie-6":
    "Les pièces et les billets en euros circulent depuis le 1er janvier 2002 dans douze pays. Le franc français a cessé d'avoir cours légal le 17 février 2002.",
  "2002-economie-7":
    "La taxe sur les transactions financières, dite taxe Tobin, est portée par des ONG et des économistes pour financer le développement. Aucun État ne l'applique en 2002.",
  "2002-economie-8":
    "Le SMIC horaire brut s'élève à 6,83 euros en 2002, soit environ 1 035 euros brut et 830 euros net par mois pour 35 heures hebdomadaires.",
  "2002-economie-9":
    "Les cotisations patronales représentent environ 40 % du salaire brut. Les entreprises de moins de 20 salariés bénéficient déjà d'allègements ciblés sur les bas salaires.",
  "2002-economie-10":
    "Le revenu minimum d'insertion (RMI), créé en 1988, est réservé aux personnes de plus de 25 ans, ou plus jeunes avec un enfant à charge. Son montant de base est d'environ 400 euros par mois en 2002.",

  "2002-travail-1":
    "La durée légale de 35 heures s'applique depuis 2000 aux entreprises de plus de 20 salariés et depuis 2002 aux plus petites. Des accords de branche peuvent déjà l'aménager sur l'année.",
  "2002-travail-2":
    "L'âge légal de départ à la retraite est fixé à 60 ans depuis l'ordonnance de 1982, qui l'a ramené de 65 à 60 ans pour une carrière complète de 37,5 annuités.",
  "2002-travail-3":
    "Le licenciement économique suppose une suppression de poste liée à des difficultés économiques ou à des mutations technologiques ; sa cause réelle est contrôlée par le juge.",
  "2002-travail-4":
    "Le droit de grève est garanti par le préambule de la Constitution de 1946. Aucun service minimum général n'existe dans les transports publics en 2002, seulement des conventions de continuité dans certaines entreprises.",
  "2002-travail-5":
    "La représentation des salariés repose sur des délégués du personnel et des représentants syndicaux ; la présence de salariés au conseil d'administration d'une entreprise privée reste exceptionnelle.",
  "2002-travail-6":
    "Le SMIC est revalorisé au moins une fois par an, en principe au 1er juillet, à hauteur de la hausse des prix pour les salariés du bas de l'échelle. Des coups de pouce au-delà de l'inflation ont déjà eu lieu.",
  "2002-travail-7":
    "Les stock-options permettent d'acheter des actions à un prix fixé à l'avance. Leur régime fiscal et social, plus favorable que celui du salaire, est critiqué depuis la fin des années 1990.",
  "2002-travail-8":
    "Le contrat à durée déterminée (CDD) ne peut être conclu que pour une tâche précise et temporaire. La loi de 1990 en fixe les cas de recours et limite son renouvellement.",
  "2002-travail-9":
    "Reculer l'âge légal de 60 à 65 ans supposerait de modifier les régimes de retraite de base, qui calculent la pension à partir de l'âge et de la durée de cotisation.",
  "2002-travail-10":
    "Les fonctionnaires titulaires bénéficient d'une garantie d'emploi : le licenciement n'est possible que dans des cas limités, comme la faute grave ou la suppression de poste avec reclassement.",

  "2002-social-1":
    "La couverture maladie universelle (CMU), créée par la loi du 27 juillet 1999, garantit l'assurance maladie aux personnes sans couverture et une complémentaire gratuite sous conditions de ressources.",
  "2002-social-2":
    "Les médecins de secteur 2 peuvent facturer des honoraires au-delà du tarif de la Sécurité sociale. Ces dépassements pèsent sur les ménages et sur les contrats complémentaires.",
  "2002-social-3":
    "Les hôpitaux publics sont des établissements à statut public : leur capital ne peut pas être ouvert à des actionnaires privés, même si des partenariats avec des cliniques se développent.",
  "2002-social-4":
    "Le RMI prévoit déjà, depuis 1988, un contrat d'insertion signé avec le bénéficiaire. La question porte sur le caractère réellement contraignant de cette contrepartie.",
  "2002-social-5":
    "L'allocation universelle, ou revenu d'existence, désigne une somme versée sans condition à tous les résidents. Des économistes et quelques mouvements politiques la défendent en 2002 ; elle n'existe nulle part.",
  "2002-social-6":
    "La retraite par répartition verse les pensions avec les cotisations des actifs. La capitalisation place ces cotisations sur des marchés financiers ; l'essentiel du système français repose sur la répartition.",
  "2002-social-7":
    "La loi d'orientation du 29 juillet 1998 relative à la lutte contre les exclusions prévoit un plan pluriannuel contre la pauvreté et un accès renforcé aux droits (santé, logement, emploi).",
  "2002-social-8":
    "L'aide médicale d'État (AME) succède en 2000 à l'aide médicale gratuite. Elle couvre les soins des étrangers en situation irrégulière présents en France depuis plus de trois mois.",
  "2002-social-9":
    "Le numerus clausus fixe chaque année le nombre d'étudiants admis en deuxième année des études de médecine. Il est d'environ 4 000 places en 2002, après une baisse continue depuis 1993.",
  "2002-social-10":
    "Les allocations familiales sont versées sans condition de ressources depuis 1932, dès le deuxième enfant. Leur montant ne dépend pas des revenus, mais des prestations complémentaires le font.",

  "2002-education-1":
    "Le collège unique, institué par la loi Haby de 1975, scolarise tous les élèves dans le même cursus jusqu'à la troisième. Son hétérogénéité alimente le débat depuis sa création.",
  "2002-education-2":
    "La carte scolaire répartit les élèves selon leur lieu de résidence afin de garantir la mixité sociale. Des dérogations sont possibles pour des motifs limités (option rare, parcours particulier).",
  "2002-education-3":
    "La rémunération des enseignants fonctionnaires suit une grille indiciaire nationale, identique quel que soit l'établissement. Aucune part variable liée aux résultats n'est prévue en 2002.",
  "2002-education-4":
    "Les zones d'éducation prioritaires (ZEP), créées en 1981, bénéficient de moyens supplémentaires et de classes plus réduites dans les territoires les plus en difficulté.",
  "2002-education-5":
    "Les établissements privés sous contrat, majoritairement catholiques, reçoivent des fonds publics au titre de la loi Debré de 1959, en échange d'un contrôle pédagogique de l'État.",
  "2002-education-6":
    "L'apprentissage associe formation en entreprise et cours en centre de formation d'apprentis (CFA). Il est accessible à partir de 16 ans, à l'issue de la classe de troisième.",
  "2002-education-7":
    "Les universités françaises accueillent tous les bacheliers de leur académie et ne peuvent pas sélectionner à l'entrée, sauf dans les filières à capacité limitée comme la médecine.",
  "2002-education-8":
    "Les programmes scolaires sont fixés nationalement. L'éducation civique, juridique et sociale est enseignée au lycée depuis 1999 ; l'instruction civique est présente à l'école et au collège.",
  "2002-education-9":
    "Les bourses sur critères sociaux concernent environ 500 000 étudiants en 2002 ; elles s'ajoutent aux prestations familiales, versées jusqu'aux 20 ans de l'enfant.",
  "2002-education-10":
    "Plusieurs départements assouplissent la carte scolaire depuis 1995 pour permettre aux familles de choisir leur collège. La question inverse consiste à la rendre plus contraignante pour préserver la mixité.",

  "2002-immigration-1":
    "Les accords de Schengen, signés en 1985, suppriment les contrôles aux frontières intérieures et coordonnent les politiques de visa et d'asile. La France y participe depuis 1995.",
  "2002-immigration-2":
    "Le droit de vote des étrangers non communautaires aux élections locales supposerait une révision constitutionnelle : l'article 3 réserve le corps électoral aux nationaux.",
  "2002-immigration-3":
    "La circulaire Chevènement de juin 1998 a ouvert la régularisation à près de 80 000 personnes, notamment celles dont la présence relevait de liens privés et familiaux établis.",
  "2002-immigration-4":
    "La préférence nationale consiste à réserver certaines prestations sociales ou certains emplois aux nationaux. Le Conseil constitutionnel a censuré des dispositions de ce type en 1993.",
  "2002-immigration-5":
    "Le regroupement familial permet à un étranger résidant régulièrement en France de faire venir son conjoint et ses enfants mineurs, sous conditions de ressources et de logement.",
  "2002-immigration-6":
    "La double nationalité résulte de l'acquisition d'une nationalité étrangère sans perte de la nationalité française, possible depuis la réforme de 1973. Elle est autorisée sans limite en France.",
  "2002-immigration-7":
    "Après les attentats du 11 septembre 2001 et la chute des talibans, des millions d'Afghans ont fui leur pays. La France accueille alors des familles au titre de l'asile.",
  "2002-immigration-8":
    "Un contrôle au faciès désigne un contrôle d'identité fondé sur l'apparence ethnique. Le code de procédure pénale exige depuis 1981 des indices objectifs, mais l'application reste contestée.",
  "2002-immigration-9":
    "Les flux migratoires sont encadrés par des circulaires et par les préfectures. Aucun quota annuel d'entrées voté par le Parlement n'existe en 2002.",
  "2002-immigration-10":
    "L'intégration linguistique est confiée à des dispositifs locaux, souvent associatifs. L'État ne rend pas encore obligatoire une formation civique et linguistique pour les nouveaux arrivants.",

  "2002-securite-1":
    "La police de proximité, expérimentée à partir de 1998, repose sur des îlotiers affectés durablement à un quartier. Elle couvre alors quelques dizaines de sites et reste inégalement appliquée.",
  "2002-securite-2":
    "Les courtes peines d'emprisonnement ferme restent nombreuses à ne pas être exécutées faute de places et de suivi : les tribunaux prononcent plus de condamnations que l'administration pénitentiaire n'en écroue.",
  "2002-securite-3":
    "La détention provisoire est la détention avant jugement. Elle concerne près de la moitié de la population carcérale française en 2002, ce qui en fait un point de critique récurrent.",
  "2002-securite-4":
    "Les mineurs délinquants relèvent de juges des enfants et de tribunaux pour enfants. Une procédure de jugement à délai rapproché existe depuis 1996, mais reste peu utilisée.",
  "2002-securite-5":
    "Les centres éducatifs fermés (CEF) sont créés par la loi du 2 janvier 2002 : des structures accueillant de jeunes délinquants sous contrôle judiciaire, avec un encadrement éducatif renforcé.",
  "2002-securite-6":
    "La loi du 21 janvier 1995 encadre la vidéosurveillance dans l'espace public : information du public, autorisation préfectorale et durée de conservation limitée des images.",
  "2002-securite-7":
    "La consommation de cannabis est un délit passible d'un an d'emprisonnement et de 3 750 euros d'amende. La dépénalisation supprimerait la sanction pénale pour l'usage simple.",
  "2002-securite-8":
    "La présomption d'innocence est garantie par la Déclaration des droits de l'homme de 1789. La loi du 15 juin 2000 a renforcé les droits de la défense et limité la détention provisoire.",
  "2002-securite-9":
    "La légitime défense suppose une riposte nécessaire et proportionnée à une atteinte. L'article 122-6 du code pénal la présume déjà pour celui qui repousse une intrusion nocturne ou un vol avec violence.",
  "2002-securite-10":
    "La prévention de la délinquance s'appuie depuis 1998 sur les contrats locaux de sécurité, qui associent communes, police et associations. La campagne de 2002 oppose deux lectures de l'insécurité.",

  "2002-ecologie-1":
    "Le nucléaire fournit environ 75 % de l'électricité française en 2002, avec 58 réacteurs répartis sur 19 centrales. L'arrêt complet du parc prendrait plusieurs décennies.",
  "2002-ecologie-2":
    "Le principe de précaution figure dans le code de l'environnement depuis la loi Barnier de 1995. Il permet d'adopter des mesures provisoires en cas de risque grave, sans attendre la certitude scientifique.",
  "2002-ecologie-3":
    "La chasse est autorisée six jours par semaine, selon des dates d'ouverture fixées par arrêté. La loi de 2000 a créé un permis national et encadré les plans de chasse.",
  "2002-ecologie-4":
    "Les cultures d'organismes génétiquement modifiés (OGM) sont autorisées en France après évaluation européenne. Les essais en plein champ font l'objet d'arrachages par des opposants.",
  "2002-ecologie-5":
    "Le parc nucléaire compte 58 réacteurs en 2002. Le réacteur européen pressurisé (EPR) est à l'étude depuis la fin des années 1990, mais aucun chantier n'est encore lancé en France.",
  "2002-ecologie-6":
    "La taxe intérieure sur les produits pétroliers (TIPP) représente une large part du prix du carburant. La hausse de la fiscalité de 1999 avait déclenché un blocage des routes.",
  "2002-ecologie-7":
    "Plusieurs directives européennes encadrent les nitrates, les pesticides et la protection des oiseaux. Les agriculteurs dénoncent une accumulation de normes et une concurrence inégale.",
  "2002-ecologie-8":
    "Le pétrolier Erika s'est brisé au large de la Bretagne le 12 décembre 1999, polluant près de 400 km de côtes. Le « paquet Erika » a ensuite durci les règles européennes sur le transport maritime.",
  "2002-ecologie-9":
    "Les transports urbains sont financés par le versement transport acquitté par les employeurs et par les collectivités. La gratuité totale reste une exception, expérimentée sur une partie du réseau de Châteauroux.",
  "2002-ecologie-10":
    "La France compte moins de 150 mégawatts d'éolien raccordés en 2002, contre plus de 12 000 en Allemagne. Un tarif d'achat garanti de l'électricité éolienne a été créé en 2001.",

  "2002-europe-1":
    "Le projet de Constitution européenne issu de la Convention de Laeken est en discussion en 2002. Il sera signé à Rome en 2004 puis soumis à référendum en France en mai 2005.",
  "2002-europe-2":
    "La Turquie est candidate officielle à l'adhésion depuis 1999. Les critères politiques exigés par l'Union, notamment sur les droits des minorités et le rôle de l'armée, restent en débat.",
  "2002-europe-3":
    "La politique européenne de sécurité et de défense (PESD) est lancée au sommet de Cologne en 1999. Elle prévoit une force de réaction rapide de 60 000 hommes, opérationnelle à partir de 2003.",
  "2002-europe-4":
    "La primauté du droit communautaire sur les lois nationales est posée par la Cour de justice des Communautés dès 1964. La Constitution française a été modifiée en 1992 pour la reconnaître.",
  "2002-europe-5":
    "Les traités assignent à l'Union l'établissement d'un marché intérieur fondé sur la concurrence libre et non faussée. La politique sociale reste une compétence partagée, avec un rôle limité de l'Union.",
  "2002-europe-6":
    "Le Parlement européen vote le budget et codécide la législation, mais la Commission garde le monopole de l'initiative et le Conseil des ministres demeure le principal décideur.",
  "2002-europe-7":
    "Le quinquennat a été adopté par référendum en septembre 2000 et le calendrier électoral inversé : la présidentielle précède désormais les élections législatives.",
  "2002-europe-8":
    "Un parlementaire peut cumuler son mandat avec une fonction exécutive locale (maire, président de conseil général ou régional). La loi de 1985 limite seulement l'accumulation de mandats locaux de même nature.",
  "2002-europe-9":
    "Les députés sont élus au scrutin uninominal majoritaire à deux tours, par circonscription. La proportionnelle intégrale n'a jamais été utilisée pour l'Assemblée nationale sous la Ve République.",
  "2002-europe-10":
    "L'Union prépare l'adhésion de dix pays pour 2004, dont la Pologne, la Hongrie et la République tchèque. La réforme de la politique agricole commune et des fonds structurels est au cœur des négociations.",

  "2002-international-1":
    "La France a quitté le commandement militaire intégré de l'OTAN en 1966 tout en restant membre de l'Alliance atlantique. Elle y reviendra en 2009.",
  "2002-international-2":
    "Les frappes américaines en Afghanistan ont commencé en octobre 2001, après les attentats du 11 septembre. La France participe à la force internationale de sécurité (ISAF) déployée à Kaboul.",
  "2002-international-3":
    "Le budget de la défense représente environ 2,6 % du PIB en 2002. La professionnalisation des armées est achevée depuis 2001, avec la fin de la conscription.",
  "2002-international-4":
    "La Charte des Nations unies subordonne l'usage de la force à l'autorisation du Conseil de sécurité, sauf légitime défense. L'intervention de l'OTAN au Kosovo en 1999 s'était passée d'un mandat explicite.",
  "2002-international-5":
    "La dissuasion nucléaire française repose sur des sous-marins lanceurs d'engins et des missiles aéroportés ; son emploi relève du Président de la République. Le format n'a pas été revu depuis 1996.",
  "2002-international-6":
    "L'objectif de 0,7 % du PIB pour l'aide publique au développement a été fixé par les Nations unies en 1970. La France y consacre alors environ 0,3 % de son PIB.",
  "2002-international-7":
    "L'embargo économique imposé à l'Irak depuis 1990 est critiqué pour son coût humanitaire. Les discussions sur des « sanctions intelligentes », ciblées sur les dirigeants, s'ouvrent en 2002.",
  "2002-international-8":
    "L'Union européenne s'est dotée en 1999 d'objectifs de défense autonomes, mais la plupart de ses États membres appartiennent aussi à l'OTAN, qui assure la plupart des moyens militaires.",
  "2002-international-9":
    "La France soutient la perspective d'un État palestinien. Le processus d'Oslo est bloqué depuis le début de la seconde Intifada à l'automne 2000.",
  "2002-international-10":
    "La France figure parmi les premiers exportateurs mondiaux d'armement. Les ventes sont soumises à autorisation interministérielle et font l'objet d'un rapport annuel au Parlement.",

  "2002-societe-1":
    "En 2002, seul le pacte civil de solidarité (PACS), créé en 1999, offre un cadre juridique aux couples de même sexe. Il organise la vie commune mais ne permet ni mariage ni filiation commune.",
  "2002-societe-2":
    "La loi du 6 juin 2000 impose aux partis de présenter autant de femmes que d'hommes aux législatives, sous peine de réduction de leur dotation publique. Aucune obligation comparable n'existe dans les entreprises.",
  "2002-societe-3":
    "La loi Veil de 1975 fixe un délai de réflexion de sept jours avant un avortement. La loi de 2001 a allongé le délai légal de dix à douze semaines de grossesse.",
  "2002-societe-4":
    "La loi de 1999 sur les soins palliatifs encadre la fin de vie sans dépénaliser l'euthanasie. L'affaire Humbert, en 2000, a relancé le débat sur l'aide active à mourir.",
  "2002-societe-5":
    "Le quotient familial divise l'impôt sur le revenu selon le nombre d'enfants. L'avantage lié à chaque demi-part supplémentaire est plafonné depuis 1982.",
  "2002-societe-6":
    "En 2002, aucune loi n'interdit le port de signes religieux à l'école publique. Le Conseil d'État laisse aux chefs d'établissement l'appréciation au cas par cas, le voile étant toléré sous conditions.",
  "2002-societe-7":
    "La prostitution est autorisée en France, mais le racolage est interdit et le proxénétisme réprimé. Les personnes prostituées n'ont pas de statut professionnel et peu de droits sociaux.",
  "2002-societe-8":
    "L'adoption plénière par une personne seule est possible depuis 1966. L'adoption conjointe suppose un mariage : deux personnes non mariées, quel que soit leur sexe, ne peuvent pas adopter ensemble.",
  "2002-societe-9":
    "Le budget du ministère de la Culture atteint environ 2,5 milliards d'euros en 2002, soit moins de 1 % du budget de l'État. Les dispositifs d'exception culturelle protègent le cinéma et le livre.",
  "2002-societe-10":
    "Le service national a été suspendu par la loi du 28 octobre 1997 et remplacé par la journée d'appel de préparation à la défense, obligatoire pour les jeunes de 16 à 18 ans.",
};
