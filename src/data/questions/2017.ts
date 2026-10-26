import type { RawContexts, RawYear } from "./types";

/**
 * Présidentielle 2017 — recomposition, état d'urgence, Brexit, loi travail de
 * 2016, revenu universel, sortie de l'euro, affaires, Notre-Dame-des-Landes.
 */
export const RAW_2017: RawYear = {
  economie: [
    ["L'impôt de solidarité sur la fortune doit être supprimé et remplacé par un impôt sur la fortune immobilière.", "redistribution", -1, { express: true }],
    ["La « flat tax » de 30 % sur les revenus du capital est une bonne mesure.", "redistribution", -1, { express: true }],
    ["La taxe d'habitation doit être supprimée pour la majorité des ménages.", "redistribution", -1],
    ["La France doit réduire ses dépenses publiques de 100 milliards d'euros.", "dette", 1],
    ["Le crédit d'impôt pour la compétitivité et l'emploi doit être transformé en baisse pérenne des cotisations.", "etat-economie", -1],
    ["La France doit instaurer une taxe sur les transactions financières.", "redistribution", 1],
    ["La dette publique doit être réduite par la croissance avant tout.", "dette", -1],
    ["Les banques doivent être séparées de leurs activités de marché.", "etat-economie", 1],
    ["Le SMIC doit être revalorisé de 100 euros net.", "redistribution", 1],
    ["Les niches fiscales doivent être supprimées.", "redistribution", 1],
  ],
  travail: [
    ["La loi travail de 2016 doit être abrogée.", "flexibilite-travail", -1, { express: true }],
    ["La loi travail de 2016 était nécessaire pour lutter contre le chômage.", "flexibilite-travail", 1, { express: true }],
    ["L'âge de départ à la retraite doit être repoussé à 65 ans.", "retraites", 1],
    ["Le nombre de fonctionnaires doit être réduit de 120 000.", "etat-economie", -1],
    ["Les 35 heures doivent être assouplies par la négociation d'entreprise.", "flexibilite-travail", 1],
    ["La CSG doit augmenter pour financer la protection sociale.", "redistribution", 1],
    ["Les régimes spéciaux de retraite doivent être supprimés.", "retraites", 1],
    ["L'entreprise doit pouvoir licencier en cas de baisse durable des commandes.", "flexibilite-travail", 1],
    ["Les rémunérations des dirigeants doivent être plafonnées par la loi.", "redistribution", 1],
    ["Un service national universel doit être rétabli.", "autorite", 1],
  ],
  social: [
    ["Le revenu universel d'existence est la bonne réponse à la précarité.", "universalite-sociale", 1, { express: true }],
    ["Le reste à charge zéro doit être garanti sur les lunettes et les prothèses auditives.", "universalite-sociale", 1, { express: true }],
    ["Le RSA doit être conditionné à 15 heures d'activité.", "universalite-sociale", -1],
    ["La couverture maladie universelle doit être étendue aux soins dentaires.", "universalite-sociale", 1],
    ["Les retraites par capitalisation doivent être encouragées.", "retraites", 1],
    ["L'aide médicale d'État doit être supprimée.", "immigration", 1],
    ["La dépendance doit être financée par la solidarité nationale.", "universalite-sociale", 1],
    ["Les allocations familiales doivent être modulées selon les revenus.", "redistribution", 1],
    ["Les hôpitaux de proximité doivent être préservés.", "universalite-sociale", 1],
    ["Le congé paternité doit être allongé et rendu obligatoire.", "progressisme-societal", 1],
  ],
  education: [
    ["L'université doit sélectionner ses étudiants à l'entrée.", "education-egalite", -1, { express: true }],
    ["Les enseignants doivent être évalués et payés au mérite.", "education-egalite", -1, { express: true }],
    ["Les zones d'éducation prioritaires doivent recevoir plus de moyens.", "education-egalite", 1],
    ["Les classes de CP doivent être dédoublées dans les quartiers prioritaires.", "education-egalite", 1],
    ["L'apprentissage doit être développé dès 15 ans.", "education-egalite", -1],
    ["L'école doit redevenir un sanctuaire de la République.", "laicite", 1],
    ["Les notes doivent être maintenues à l'école primaire.", "education-egalite", -1],
    ["L'école privée ne doit plus être financée sur fonds publics.", "laicite", 1],
    ["Les frais d'inscription à l'université doivent augmenter.", "education-egalite", -1],
    ["La formation continue des enseignants doit être obligatoire.", "education-egalite", 1],
  ],
  immigration: [
    ["La préférence nationale doit s'appliquer aux prestations sociales.", "immigration", 1, { express: true }],
    ["Le droit du sol doit être remis en cause.", "immigration", 1, { express: true }],
    ["La déchéance de nationalité pour les terroristes binationaux doit être instaurée.", "immigration", 1],
    ["L'accueil des réfugiés est un devoir moral.", "immigration", -1],
    ["Les quotas migratoires doivent être votés par le Parlement.", "immigration", 1],
    ["L'aide médicale d'État doit être maintenue.", "immigration", -1],
    ["Le droit de vote des étrangers aux élections municipales doit être accordé.", "immigration", -1],
    ["Des centres d'accueil doivent être ouverts pour les demandeurs d'asile.", "immigration", -1],
    ["Les sans-papiers qui travaillent doivent être régularisés.", "immigration", -1],
    ["Le regroupement familial doit être durci.", "immigration", 1],
  ],
  securite: [
    ["L'état d'urgence doit être prolongé.", "libertes-publiques", -1, { express: true }],
    ["Les fichiers de renseignement doivent être étendus.", "libertes-publiques", -1, { express: true }],
    ["Le cannabis doit être légalisé et encadré.", "libertes-publiques", 1],
    ["La rétention de sûreté doit être étendue.", "autorite", 1],
    ["Les zones de sécurité prioritaires doivent être généralisées.", "autorite", 1],
    ["La police doit pouvoir perquisitionner de nuit sans l'accord d'un juge.", "libertes-publiques", -1],
    ["Les peines planchers doivent être rétablies.", "autorite", 1],
    ["La prévention sociale compte plus que la répression.", "autorite", -1],
    ["Les contrôles au faciès doivent être sanctionnés.", "libertes-publiques", 1],
    ["L'armement de la police municipale doit être généralisé.", "autorite", 1],
  ],
  ecologie: [
    ["La France doit sortir du nucléaire civil.", "nucleaire", -1, { express: true }],
    ["La France doit construire de nouveaux réacteurs nucléaires.", "nucleaire", 1, { express: true }],
    ["La taxe carbone doit augmenter.", "ecologie-contrainte", 1],
    ["Le diesel doit être progressivement interdit dans les villes.", "ecologie-contrainte", 1],
    ["Le glyphosate doit être interdit.", "ecologie-contrainte", 1],
    ["L'aéroport de Notre-Dame-des-Landes doit être construit.", "ecologie-contrainte", -1],
    ["Les éoliennes doivent être développées.", "ecologie-contrainte", 1],
    ["Les normes environnementales freinent trop l'agriculture française.", "ecologie-contrainte", -1],
    ["La France doit cesser d'explorer les hydrocarbures.", "ecologie-contrainte", 1],
    ["La rénovation thermique des logements doit être massivement subventionnée.", "ecologie-contrainte", 1],
  ],
  europe: [
    ["La France doit sortir de l'euro.", "europe", -1, { express: true }],
    ["La France doit proposer un nouveau traité européen pour relancer l'intégration.", "europe", 1, { express: true }],
    ["Le Brexit doit inciter l'Union européenne à se réformer.", "europe", 1],
    ["La France doit quitter l'Union européenne si elle ne peut pas la réformer.", "europe", -1],
    ["Le droit européen doit primer sur la loi française.", "europe", 1],
    ["L'Union européenne doit se doter d'un budget de la zone euro.", "europe", 1],
    ["Les frontières de Schengen doivent être rétablies.", "europe", -1],
    ["La Turquie doit entrer dans l'Union européenne.", "europe", 1],
    ["Le cumul des mandats doit être interdit.", "institutions", 1, { open: true }],
    ["L'Assemblée nationale doit être élue à la proportionnelle.", "institutions", 1],
  ],
  international: [
    ["La France doit quitter l'OTAN.", "alliances", -1, { express: true }],
    ["La France doit rester dans l'OTAN et augmenter son budget de défense.", "alliances", 1, { express: true }],
    ["La dissuasion nucléaire doit être maintenue.", "defense", 1],
    ["La France doit intervenir en Syrie contre Daech.", "defense", 1],
    ["Le budget de la défense doit atteindre 2 % du PIB.", "defense", 1],
    ["La France doit reconnaître l'État palestinien.", "alliances", -1],
    ["L'aide publique au développement doit augmenter.", "defense", -1],
    ["La France doit accueillir plus de réfugiés syriens.", "immigration", -1],
    ["Toute intervention militaire doit être autorisée par l'ONU.", "alliances", -1],
    ["La France doit continuer à exporter des armes.", "defense", 1],
  ],
  societe: [
    ["Le mariage pour tous doit être abrogé.", "progressisme-societal", -1, { express: true }],
    ["La procréation médicalement assistée doit être ouverte à toutes les femmes.", "progressisme-societal", 1, { express: true }],
    ["La gestation pour autrui doit être autorisée.", "progressisme-societal", 1],
    ["L'aide active à mourir doit être légalisée.", "progressisme-societal", 1],
    ["Le burkini doit être interdit sur les plages.", "laicite", 1],
    ["Les signes religieux doivent être interdits dans l'espace public.", "laicite", 1],
    ["Le port du voile doit être interdit à l'université.", "laicite", 1],
    ["La famille traditionnelle doit rester protégée par la loi.", "progressisme-societal", -1],
    ["Le droit à l'IVG doit être inscrit dans la Constitution.", "progressisme-societal", 1],
    ["La parité doit être imposée dans les conseils d'administration.", "progressisme-societal", 1],
  ],
};

/**
 * Un contexte par identifiant de question du scrutin : sigles développés,
 * mesures, montants et état du droit tel qu'il était en 2017.
 */
export const CONTEXT_2017: RawContexts = {
  "2017-economie-1":
    "L'impôt de solidarité sur la fortune (ISF) taxe les patrimoines supérieurs à 1,3 million d'euros et rapporte environ cinq milliards d'euros par an. L'impôt sur la fortune immobilière (IFI), limité à l'immobilier, le remplacera en 2018.",
  "2017-economie-2":
    "Le prélèvement forfaitaire unique (PFU) de 30 % sur les revenus du capital remplacera en 2018 l'imposition au barème de l'impôt sur le revenu, jusqu'à 45 %, additionnée des prélèvements sociaux de 15,5 %.",
  "2017-economie-3":
    "La taxe d'habitation sur les résidences principales concerne environ 80 % des ménages. Sa suppression sera votée à l'été 2017 et étalée sur trois ans.",
  "2017-economie-4":
    "Les dépenses publiques représentent environ 56 % du PIB en 2017. Une réduction de 100 milliards d'euros sur cinq ans équivaudrait à près de quatre points de PIB.",
  "2017-economie-5":
    "Le crédit d'impôt pour la compétitivité et l'emploi (CICE), créé en 2013, représente 6 % des salaires jusqu'à 2,5 SMIC, soit environ 20 milliards d'euros par an. Il sera converti en baisse de cotisations puis supprimé en 2019.",
  "2017-economie-6":
    "La France applique depuis 2012 une taxe de 0,2 % sur les achats d'actions d'entreprises françaises, dite taxe sur les transactions financières. Plusieurs candidats proposent d'en élargir l'assiette.",
  "2017-economie-7":
    "La dette publique dépasse 2 200 milliards d'euros, soit près de 97 % du PIB en 2017. Le service de la dette coûte environ 40 milliards d'euros par an.",
  "2017-economie-8":
    "La loi de séparation bancaire de 2013 oblige les banques à isoler leurs activités de marché dans une filiale dédiée. Plusieurs candidats jugent cette séparation insuffisante.",
  "2017-economie-9":
    "Le SMIC net est d'environ 1 150 euros par mois en 2017. Une hausse de 100 euros représenterait une augmentation de près de 9 %.",
  "2017-economie-10":
    "Les niches fiscales représentent environ 90 milliards d'euros de dépenses fiscales. Leur plafonnement global est fixé à 10 000 euros par foyer, avec de nombreuses exceptions.",

  "2017-travail-1":
    "La loi du 8 août 2016, dite loi El Khomri, a réécrit le Code du travail en donnant la primauté à l'accord d'entreprise et en assouplissant le licenciement économique. Elle a suscité des manifestations de grande ampleur au printemps 2016.",
  "2017-travail-2":
    "Le taux de chômage avoisine 10 % de la population active en 2017. La réforme du marché du travail, de l'assurance chômage et de la formation professionnelle domine le débat économique.",
  "2017-travail-3":
    "L'âge légal de départ à la retraite est de 62 ans depuis la réforme de 2010, et l'âge du taux plein de 67 ans. Le Conseil d'orientation des retraites anticipe un déficit croissant du système à partir de 2025.",
  "2017-travail-4":
    "La France compte environ 5,5 millions d'agents publics. Supprimer 120 000 postes sur cinq ans représenterait un peu plus de 2 % des effectifs.",
  "2017-travail-5":
    "La loi du 8 août 2016 permet à un accord d'entreprise de primer sur l'accord de branche en matière de durée du travail, dans la limite de 46 heures par semaine et de 12 heures par jour.",
  "2017-travail-6":
    "La contribution sociale généralisée (CSG) frappe les revenus d'activité, de remplacement et du patrimoine. Une hausse de 1,7 point, entrée en vigueur en 2018, financera la baisse des cotisations salariales d'assurance maladie.",
  "2017-travail-7":
    "Les régimes spéciaux de la SNCF, de la RATP et des industries électriques et gazières permettent des départs anticipés. Leur alignement sur le régime général est réclamé par la Cour des comptes depuis 2010.",
  "2017-travail-8":
    "Le licenciement pour baisse des commandes ou du chiffre d'affaires est défini par la loi de 2016, avec des seuils de variation appréciés sur un ou plusieurs trimestres consécutifs.",
  "2017-travail-9":
    "Aucun plafond légal ne s'applique aux rémunérations des dirigeants du privé en 2017. La loi Sapin 2 de 2016 a instauré un vote contraignant des actionnaires sur leur rémunération, sans en limiter le montant.",
  "2017-travail-10":
    "Le service national a été suspendu en 1997 et remplacé par la journée défense et citoyenneté. Un service national universel, expérimenté à partir de 2019, est proposé pendant la campagne.",

  "2017-social-1":
    "Le revenu universel d'existence serait versé sans condition à tous les résidents. Plusieurs candidats en proposent des versions différentes, de 400 à 800 euros par mois, avec ou sans remplacement des minima sociaux.",
  "2017-social-2":
    "Le reste à charge zéro sur les lunettes et les prothèses auditives entrera en vigueur en 2019 dans le cadre de la réforme « 100 % santé ». Le prix des équipements reste alors très variable.",
  "2017-social-3":
    "Le revenu de solidarité active (RSA), généralisé en 2009, complète les revenus du travail. Le conditionner à 15 heures d'activité suppose un accompagnement, expérimenté dans plusieurs départements.",
  "2017-social-4":
    "La couverture maladie universelle complémentaire (CMU-C) prend en charge les soins des personnes à faibles revenus. Les prothèses dentaires y restent mal couvertes, avec un reste à charge élevé.",
  "2017-social-5":
    "Les contrats d'épargne retraite individuelle complètent facultativement les régimes obligatoires, tous par répartition. L'épargne retraite représente environ 2 % du PIB.",
  "2017-social-6":
    "L'aide médicale d'État couvre les soins des étrangers en situation irrégulière présents depuis plus de trois mois. Son coût est estimé à environ 600 millions d'euros par an.",
  "2017-social-7":
    "La perte d'autonomie est financée par l'allocation personnalisée d'autonomie, versée par les départements, et par l'assurance maladie pour les soins. Le reste à charge moyen en établissement dépasse 1 500 euros par mois.",
  "2017-social-8":
    "Les allocations familiales ont été modulées selon les revenus en 2014 : leur montant baisse pour les ménages dont les revenus dépassent 6 000 puis 8 000 euros par mois.",
  "2017-social-9":
    "Les hôpitaux de proximité assurent des soins de premier recours, notamment en zone rurale. Leur financement repose sur une dotation forfaitaire fragilisée depuis la réforme de 2004.",
  "2017-social-10":
    "Le congé paternité est de 11 jours calendaires, auxquels s'ajoute le congé de naissance de trois jours. Il sera porté à 25 jours, dont sept obligatoires, en 2021.",

  "2017-education-1":
    "L'accès à l'université est ouvert à tous les bacheliers de l'académie. La loi Orientation et réussite des étudiants de 2018 introduira des attendus et un examen des dossiers en licence.",
  "2017-education-2":
    "La rémunération des enseignants suit une grille nationale, sans part variable liée aux résultats. Une prime est versée à ceux qui exercent en réseau d'éducation prioritaire.",
  "2017-education-3":
    "Les zones d'éducation prioritaires ont été remplacées en 2014 par les réseaux d'éducation prioritaire (REP), qui bénéficient d'effectifs réduits et de primes pour les enseignants.",
  "2017-education-4":
    "Le dédoublement des classes de CP en réseau d'éducation prioritaire est engagé à la rentrée 2017, puis étendu aux CE1. Il concerne les quartiers les plus défavorisés.",
  "2017-education-5":
    "L'apprentissage alterne centre de formation et entreprise, à partir de 16 ans en principe. Des dispositifs de préapprentissage accueillent des jeunes dès 15 ans.",
  "2017-education-6":
    "L'expression « école sanctuaire » désigne une école protégée des revendications identitaires et religieuses. Elle prolonge le débat sur la laïcité ouvert par la loi de 2004.",
  "2017-education-7":
    "Les élèves du primaire sont notés par des notes chiffrées et des évaluations nationales sont rétablies en CP, CE1 et CM2 à la rentrée 2017.",
  "2017-education-8":
    "Les établissements privés sous contrat reçoivent des fonds publics au titre de la loi Debré de 1959 et scolarisent environ 17 % des élèves.",
  "2017-education-9":
    "Les frais d'inscription à l'université sont fixés nationalement, à environ 184 euros en licence en 2017. Leur forte hausse pour les étudiants étrangers sera décidée en 2018.",
  "2017-education-10":
    "La formation continue des enseignants représente une part de leur service, environ 18 heures par an. Le référentiel de 2013 en fait une obligation professionnelle.",

  "2017-immigration-1":
    "Le Conseil constitutionnel a jugé en 1993 que le législateur ne pouvait pas réserver aux nationaux des prestations sociales comme les allocations familiales. Étendre la préférence nationale supposerait une révision de la Constitution.",
  "2017-immigration-2":
    "Le droit du sol permet à un enfant né en France de parents étrangers d'acquérir la nationalité à sa majorité, ou dès 13 ans sur demande, s'il réside en France depuis cinq ans.",
  "2017-immigration-3":
    "La déchéance de nationalité s'applique aux personnes ayant acquis la nationalité française et condamnées pour certains crimes. L'étendre aux binationaux de naissance aurait nécessité une révision constitutionnelle, abandonnée en 2016.",
  "2017-immigration-4":
    "La France a enregistré environ 100 000 demandes d'asile en 2017. Les centres d'accueil pour demandeurs d'asile offrent environ 50 000 places, très en dessous des besoins.",
  "2017-immigration-5":
    "Aucun quota annuel d'immigration n'est voté par le Parlement. La loi de 2018 introduira des objectifs chiffrés, sans caractère contraignant.",
  "2017-immigration-6":
    "L'aide médicale d'État couvre les soins des étrangers en situation irrégulière présents depuis plus de trois mois. Son coût est estimé à environ 600 millions d'euros par an.",
  "2017-immigration-7":
    "Le droit de vote des étrangers aux élections municipales suppose une révision de l'article 3 de la Constitution, qui réserve le corps électoral aux nationaux.",
  "2017-immigration-8":
    "Les demandeurs d'asile peuvent être hébergés en centre d'accueil pendant l'examen de leur dossier. Le nombre de places reste très inférieur au nombre de demandes.",
  "2017-immigration-9":
    "Les régularisations des travailleurs sans papiers relèvent des préfets, sur critères d'ancienneté de séjour et d'activité. Une circulaire de 2012 en précise les conditions.",
  "2017-immigration-10":
    "Le regroupement familial est soumis à des conditions de ressources, de logement et de durée de séjour. Il concerne environ 90 000 personnes par an.",

  "2017-securite-1":
    "L'état d'urgence, déclenché après les attentats du 13 novembre 2015, a été prolongé six fois par le Parlement. Il prendra fin en novembre 2017, remplacé par la loi sur la sécurité intérieure et la lutte contre le terrorisme.",
  "2017-securite-2":
    "La loi relative au renseignement de juillet 2015 autorise la surveillance des communications pour prévenir le terrorisme, sous le contrôle de la Commission nationale de contrôle des techniques de renseignement.",
  "2017-securite-3":
    "La consommation de cannabis est un délit passible d'un an de prison et de 3 750 euros d'amende. Une amende forfaitaire de 200 euros sera instaurée en 2020 pour les usagers.",
  "2017-securite-4":
    "La rétention de sûreté, créée par la loi de 2008, permet de maintenir en détention après leur peine des criminels jugés dangereux. Son extension aux auteurs de délits graves est proposée.",
  "2017-securite-5":
    "Les zones de sécurité prioritaires existent depuis 2012. Leur extension à de nouveaux quartiers s'accompagne de crédits pour la prévention et la rénovation urbaine.",
  "2017-securite-6":
    "Les perquisitions de nuit sont en principe interdites en matière criminelle, sauf exceptions prévues par la loi, notamment pour le terrorisme et la criminalité organisée.",
  "2017-securite-7":
    "Les peines planchers, créées en 2007 pour les récidivistes, imposaient un minimum de peine au juge. Elles ont été supprimées par la loi du 15 août 2014.",
  "2017-securite-8":
    "La prévention de la délinquance mobilise les conseils locaux, la politique de la ville et les associations de prévention spécialisée, dont les crédits baissent depuis 2010.",
  "2017-securite-9":
    "Un contrôle au faciès est un contrôle d'identité fondé sur l'apparence ethnique. La jurisprudence exige des éléments objectifs ; des ONG réclament depuis 2011 un récépissé remis à la personne contrôlée.",
  "2017-securite-10":
    "Les agents de police municipale peuvent être armés d'armes de poing depuis 1999, sur autorisation préfectorale. Ils sont plus de 20 000 en 2017.",

  "2017-ecologie-1":
    "La loi de transition énergétique de 2015 fixe l'objectif de ramener la part du nucléaire à 50 % de la production d'électricité à l'horizon 2025.",
  "2017-ecologie-2":
    "Le parc compte 58 réacteurs et l'EPR de Flamanville est en construction. La programmation pluriannuelle de l'énergie de 2016 prévoit de réduire la part du nucléaire, sans lancer de nouveaux réacteurs.",
  "2017-ecologie-3":
    "La contribution climat-énergie, créée en 2014, taxe les énergies fossiles selon leurs émissions de CO2. Elle est de 30,50 euros la tonne en 2017 et devait atteindre 86,20 euros en 2022.",
  "2017-ecologie-4":
    "Les collectivités peuvent restreindre la circulation via les zones à circulation restreinte créées par la loi de 2015. Paris et plusieurs métropoles annoncent la fin du diesel d'ici 2025.",
  "2017-ecologie-5":
    "Le glyphosate est l'herbicide le plus utilisé au monde. L'Union européenne a renouvelé son autorisation pour cinq ans en novembre 2017, la France votant contre.",
  "2017-ecologie-6":
    "Le projet d'aéroport du Grand Ouest à Notre-Dame-des-Landes est déclaré d'utilité publique en 2008. Il fait face à une opposition et à des occupations depuis les années 1970.",
  "2017-ecologie-7":
    "La France compte environ 13 500 mégawatts d'éolien raccordés en 2017, pour un objectif de 19 000 en 2020. Les recours contentieux ralentissent de nombreux projets.",
  "2017-ecologie-8":
    "Les agriculteurs doivent respecter les directives européennes sur les nitrates et les pesticides ainsi que la conditionnalité des aides. Les organisations agricoles dénoncent une surtransposition des règles par la France.",
  "2017-ecologie-9":
    "La loi de 2017 organise l'arrêt progressif de la production d'hydrocarbures en France d'ici 2040 et interdit la délivrance de nouveaux permis d'exploration.",
  "2017-ecologie-10":
    "Le crédit d'impôt transition énergétique soutient la rénovation des logements depuis 2015. La précarité énergétique concernerait près de 12 millions de personnes.",

  "2017-europe-1":
    "Sortir de l'euro impliquerait une dévaluation et un contrôle des capitaux ; les traités ne prévoient aucune clause de retrait. Plusieurs économistes en discutent les effets sur la dette et l'épargne.",
  "2017-europe-2":
    "Un nouveau traité européen supposerait l'unanimité des États membres. La France propose d'approfondir l'intégration de la zone euro, notamment par un budget commun et un ministre des Finances.",
  "2017-europe-3":
    "Le Royaume-Uni a voté sa sortie de l'Union européenne le 23 juin 2016. Les négociations de retrait, prévues pour durer deux ans, s'ouvriront en mars 2017.",
  "2017-europe-4":
    "Quitter l'Union européenne suppose d'activer l'article 50 du traité de Lisbonne, qui ouvre deux ans de négociations. Le Royaume-Uni a engagé cette procédure en 2017.",
  "2017-europe-5":
    "La primauté du droit de l'Union sur la loi nationale est établie depuis 1964 et reconnue par la Constitution française depuis 1992.",
  "2017-europe-6":
    "Un budget propre à la zone euro financerait des investissements et une capacité de stabilisation en cas de choc économique. La France le défend ; le montant et le financement restent en débat.",
  "2017-europe-7":
    "L'espace Schengen compte vingt-six États en 2017 et autorise des contrôles temporaires en cas de menace. Plusieurs pays les ont rétablis depuis la crise migratoire de 2015.",
  "2017-europe-8":
    "La Turquie est candidate depuis 1999 et les négociations d'adhésion sont au point mort depuis 2016. Après la tentative de putsch de juillet 2016, la coopération avec l'Union s'est dégradée.",
  "2017-europe-9":
    "La loi du 14 février 2014 met fin au cumul d'un mandat parlementaire avec une fonction exécutive locale. Elle s'applique aux députés élus en 2017.",
  "2017-europe-10":
    "Les députés sont élus au scrutin majoritaire à deux tours, qui accorde une prime au parti arrivé en tête. La proportionnelle intégrale est réclamée par plusieurs partis.",

  "2017-international-1":
    "La France est membre de l'Alliance atlantique depuis 1949 et du commandement militaire intégré depuis 2009. Quitter l'OTAN supposerait de dénoncer le traité de Washington.",
  "2017-international-2":
    "L'article 5 du traité de Washington prévoit une assistance mutuelle en cas d'agression. Après les attentats de 2015, la France a pour la première fois invoqué cette clause.",
  "2017-international-3":
    "La dissuasion nucléaire représente environ un dixième du budget de la défense et repose sur deux composantes, océanique et aérienne. Le Livre blanc de 2013 l'a maintenue.",
  "2017-international-4":
    "La coalition internationale frappe les positions de Daech en Syrie depuis 2014. La France y participe à partir de septembre 2015.",
  "2017-international-5":
    "Les membres de l'OTAN se sont engagés en 2014 à consacrer 2 % de leur PIB à la défense en 2024. La France y consacre alors environ 1,8 %.",
  "2017-international-6":
    "La France soutient la solution à deux États. La reconnaissance de l'État palestinien est réclamée par plusieurs partis alors que le processus de paix est bloqué depuis 2014.",
  "2017-international-7":
    "La France consacre environ 0,38 % de son PIB à l'aide publique au développement, loin de l'objectif de 0,7 % fixé par l'ONU. La loi de 2021 fixera une trajectoire vers 0,55 %.",
  "2017-international-8":
    "La France a accueilli environ 15 000 réfugiés syriens entre 2015 et 2017, dans le cadre de la relocalisation européenne et de l'asile classique.",
  "2017-international-9":
    "La Charte des Nations unies réserve au Conseil de sécurité l'autorisation de l'usage de la force, sauf légitime défense. La Russie y dispose d'un droit de veto.",
  "2017-international-10":
    "La France figure parmi les cinq premiers exportateurs mondiaux d'armement. Les ventes sont autorisées par une commission interministérielle et retracées dans un rapport annuel au Parlement.",

  "2017-societe-1":
    "La loi du 17 mai 2013 a ouvert le mariage et l'adoption aux couples de même sexe. Son abrogation n'est proposée que par une partie des candidats.",
  "2017-societe-2":
    "La procréation médicalement assistée (PMA) est réservée aux couples hétérosexuels en âge de procréer. La loi de bioéthique de 2021 l'ouvrira aux couples de femmes et aux femmes seules, avec une prise en charge par l'assurance maladie.",
  "2017-societe-3":
    "La gestation pour autrui (GPA) est interdite depuis les lois de bioéthique de 1994, qui déclarent nulle toute convention portant sur la procréation. La Cour de cassation refuse de transcrire les filiations établies à l'étranger.",
  "2017-societe-4":
    "La loi Claeys-Leonetti de 2016 a créé un droit à la sédation profonde et continue jusqu'au décès, sans légaliser l'euthanasie. Les soins palliatifs restent inégalement accessibles.",
  "2017-societe-5":
    "Le burkini est un maillot de bain couvrant le corps. Les arrêtés municipaux de l'été 2016 l'interdisant ont été suspendus par le Conseil d'État, faute de trouble à l'ordre public caractérisé.",
  "2017-societe-6":
    "Dans l'espace public, la liberté de religion protège le port de signes, sauf trouble à l'ordre public ou nécessité de service. La loi de 2004 ne concerne que l'école publique.",
  "2017-societe-7":
    "La loi du 15 mars 2004 interdit les signes religieux ostensibles à l'école, au collège et au lycée publics, mais pas à l'université, où le voile reste admis sous conditions.",
  "2017-societe-8":
    "Le mariage, le pacte civil de solidarité et le concubinage sont trois formes de vie commune aux droits différents. La loi fiscale favorise le mariage par le quotient conjugal.",
  "2017-societe-9":
    "Le droit à l'avortement repose sur la loi Veil de 1975, avec un délai porté à douze semaines en 2001. La liberté de recourir à l'IVG sera inscrite dans la Constitution en 2024.",
  "2017-societe-10":
    "La loi du 27 janvier 2011 impose 40 % de femmes dans les conseils d'administration des grandes entreprises depuis 2017, sous peine de nullité des nominations.",
};
