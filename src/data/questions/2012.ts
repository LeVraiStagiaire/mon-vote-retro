import type { RawContexts, RawYear } from "./types";

/**
 * Présidentielle 2012 — crise de l'euro, traité budgétaire, retraite à 62 ans,
 * taxe à 75 %, mariage pour tous, Fukushima, désindustrialisation.
 */
export const RAW_2012: RawYear = {
  economie: [
    ["La France doit ratifier le traité budgétaire européen de 2012.", "europe", 1, { express: true }],
    ["La taxe à 75 % sur les revenus supérieurs à un million d'euros est une bonne mesure.", "redistribution", 1, { express: true }],
    ["L'impôt de solidarité sur la fortune doit être renforcé.", "redistribution", 1],
    ["La France doit créer une taxe sur les transactions financières.", "redistribution", 1],
    ["La réduction du déficit doit primer sur la relance de la croissance.", "dette", 1],
    ["Le pacte de compétitivité doit alléger les charges des entreprises.", "etat-economie", -1],
    ["Les banques doivent séparer leurs activités de détail et de marché.", "etat-economie", 1],
    ["L'austérité est le seul chemin pour rassurer les marchés financiers.", "dette", 1],
    ["Le SMIC doit être revalorisé de façon exceptionnelle.", "redistribution", 1],
    ["La dette doit être remboursée par une contribution exceptionnelle des plus fortunés.", "redistribution", 1],
  ],
  travail: [
    ["La retraite à 62 ans doit être abrogée et ramenée à 60 ans.", "retraites", -1, { express: true }],
    ["L'âge légal de départ à la retraite doit être repoussé à 65 ans.", "retraites", 1, { express: true }],
    ["Les 35 heures doivent rester la durée légale du travail.", "flexibilite-travail", -1],
    ["Les emplois d'avenir pour les jeunes doivent être généralisés.", "etat-economie", 1],
    ["Les licenciements collectifs doivent être plus strictement encadrés.", "flexibilite-travail", -1],
    ["La négociation d'entreprise doit primer sur les accords de branche.", "flexibilite-travail", 1],
    ["Les rémunérations des dirigeants doivent être plafonnées par la loi.", "redistribution", 1],
    ["Le gel du point d'indice des fonctionnaires était nécessaire.", "dette", 1],
    ["Le nombre de fonctionnaires doit être réduit.", "etat-economie", -1],
    ["L'âge de départ à la retraite doit tenir compte de la pénibilité.", "retraites", -1],
  ],
  social: [
    ["Le tiers payant doit être généralisé pour tous les soins.", "universalite-sociale", 1, { express: true }],
    ["Les dépassements d'honoraires doivent être strictement encadrés.", "universalite-sociale", 1, { express: true }],
    ["Le RSA doit être conditionné à des heures d'activité.", "universalite-sociale", -1],
    ["La couverture maladie universelle doit être fusionnée avec l'aide médicale d'État.", "universalite-sociale", 1],
    ["Les cliniques privées doivent être intégrées au service public hospitalier.", "universalite-sociale", 1],
    ["Le reste à charge zéro doit être garanti sur les soins courants.", "universalite-sociale", 1],
    ["Les retraites par capitalisation doivent être encouragées.", "retraites", 1],
    ["La dépendance doit être financée par la solidarité nationale.", "universalite-sociale", 1],
    ["L'aide médicale d'État doit être restreinte aux soins urgents.", "immigration", 1],
    ["Les allocations familiales doivent être modulées selon les revenus.", "redistribution", 1],
  ],
  education: [
    ["La formation des enseignants doit être revalorisée par des écoles supérieures du professorat.", "education-egalite", 1, { express: true }],
    ["La refondation de l'école doit passer par la création de postes d'enseignants.", "education-egalite", 1, { express: true }],
    ["Les notes doivent être supprimées à l'école primaire.", "education-egalite", 1],
    ["L'autonomie des universités doit être renforcée.", "education-egalite", -1],
    ["L'apprentissage doit être développé dès 15 ans.", "education-egalite", -1],
    ["Les zones d'éducation prioritaires doivent avoir des classes de 20 élèves maximum.", "education-egalite", 1],
    ["Le baccalauréat doit être réformé avec plus de contrôle continu.", "education-egalite", 1],
    ["L'école privée ne doit plus être financée sur fonds publics.", "laicite", 1],
    ["Les frais d'inscription à l'université doivent augmenter pour financer la qualité.", "education-egalite", -1],
    ["Une allocation d'autonomie est indispensable pour les étudiants.", "universalite-sociale", 1],
  ],
  immigration: [
    ["Le droit de vote des étrangers aux élections locales doit être accordé.", "immigration", -1, { express: true }],
    ["Les contrôles aux frontières intérieures de Schengen doivent être rétablis.", "immigration", 1, { express: true }],
    ["Les régularisations au cas par cas sont nécessaires.", "immigration", -1],
    ["Les quotas migratoires doivent être fixés par le Parlement.", "immigration", 1],
    ["L'aide médicale d'État doit être maintenue.", "immigration", -1],
    ["La préférence nationale pour l'emploi est justifiée.", "immigration", 1],
    ["Les expulsions de familles roms doivent cesser.", "immigration", -1],
    ["La nationalité doit être conditionnée à la maîtrise du français.", "immigration", 1],
    ["Le délit de séjour irrégulier doit être abrogé.", "immigration", -1],
    ["La France doit accueillir les réfugiés fuyant la guerre en Syrie.", "immigration", -1],
  ],
  securite: [
    ["Les zones de sécurité prioritaires sont une bonne réponse à l'insécurité.", "autorite", 1],
    ["La vidéosurveillance doit être développée dans l'espace public.", "libertes-publiques", -1, { express: true }],
    ["La garde à vue doit être réformée avec la présence de l'avocat.", "libertes-publiques", 1, { express: true }],
    ["Les peines doivent être systématiquement exécutées, même courtes.", "autorite", 1],
    ["Le cannabis doit être légalisé et encadré.", "libertes-publiques", 1],
    ["La police doit pouvoir contrôler les identités plus largement.", "libertes-publiques", -1],
    ["La légitime défense des policiers doit être présumée.", "autorite", 1],
    ["Les mineurs délinquants doivent relever de tribunaux correctionnels.", "autorite", 1],
    ["La prévention et l'éducation comptent plus que la répression.", "autorite", -1],
    ["Les fichiers de police doivent être mieux encadrés.", "libertes-publiques", 1],
  ],
  ecologie: [
    ["La France doit sortir du nucléaire d'ici 2025.", "nucleaire", -1, { express: true }],
    ["La fiscalité écologique doit augmenter.", "ecologie-contrainte", 1, { express: true }],
    ["La fracturation hydraulique doit être interdite.", "ecologie-contrainte", 1],
    ["Le nucléaire reste une chance pour la France.", "nucleaire", 1],
    ["L'aéroport de Notre-Dame-des-Landes doit être construit.", "ecologie-contrainte", -1],
    ["Les pesticides doivent être réduits de moitié en dix ans.", "ecologie-contrainte", 1],
    ["Le diesel doit être taxé comme l'essence.", "ecologie-contrainte", 1],
    ["Les éoliennes doivent être développées massivement.", "ecologie-contrainte", 1],
    ["Les normes environnementales freinent trop l'agriculture française.", "ecologie-contrainte", -1],
    ["La rénovation thermique des logements doit être massivement subventionnée.", "ecologie-contrainte", 1],
  ],
  europe: [
    ["La France doit renégocier le traité budgétaire européen.", "europe", -1, { express: true }],
    ["L'euro doit être préservé à tout prix.", "europe", 1, { express: true }],
    ["La Grèce doit être aidée sans condition.", "europe", 1],
    ["La France doit sortir de l'euro pour retrouver sa souveraineté.", "europe", -1],
    ["L'Union européenne doit se doter d'euro-obligations.", "europe", 1],
    ["Le droit européen doit primer sur les lois nationales.", "europe", 1],
    ["Schengen doit être suspendu pour les pays qui ne contrôlent pas leurs frontières.", "europe", -1],
    ["La Turquie doit entrer dans l'Union européenne.", "europe", 1],
    ["Le cumul des mandats doit être interdit.", "institutions", 1, { open: true }],
    ["L'Assemblée nationale doit être élue à la proportionnelle.", "institutions", 1],
  ],
  international: [
    ["La France doit quitter le commandement intégré de l'OTAN.", "alliances", -1, { express: true }],
    ["Les troupes françaises doivent quitter l'Afghanistan en 2012.", "alliances", -1, { express: true }],
    ["La France doit intervenir au Mali contre les groupes djihadistes.", "defense", 1],
    ["La dissuasion nucléaire reste indispensable.", "defense", 1],
    ["Le budget de la défense doit être sanctuarisé.", "defense", 1],
    ["La France doit reconnaître l'État palestinien.", "alliances", -1],
    ["L'aide au développement doit être épargnée par les coupes budgétaires.", "defense", -1],
    ["La France doit intervenir militairement en Syrie contre le régime.", "alliances", 1],
    ["Toute intervention militaire doit être autorisée par l'ONU.", "alliances", -1],
    ["La France doit continuer à exporter des armes.", "defense", 1],
  ],
  societe: [
    ["Le mariage entre personnes de même sexe doit être légalisé.", "progressisme-societal", 1, { express: true }],
    ["La procréation médicalement assistée doit être ouverte à toutes les femmes.", "progressisme-societal", 1, { express: true }],
    ["L'euthanasie doit être légalisée.", "progressisme-societal", 1],
    ["La gestation pour autrui doit être autorisée.", "progressisme-societal", 1],
    ["Le port du voile doit être interdit à l'université.", "laicite", 1],
    ["Les signes religieux doivent être interdits dans l'espace public.", "laicite", 1],
    ["Le droit à l'IVG doit être inscrit dans la Constitution.", "progressisme-societal", 1],
    ["La famille traditionnelle doit rester protégée par la loi.", "progressisme-societal", -1],
    ["La parité doit être imposée dans les conseils d'administration.", "progressisme-societal", 1],
    ["L'école doit enseigner une morale laïque commune.", "laicite", 1],
  ],
};

/**
 * Un contexte par identifiant de question du scrutin : sigles développés,
 * mesures, montants et état du droit tel qu'il était en 2012.
 */
export const CONTEXT_2012: RawContexts = {
  "2012-economie-1":
    "Le traité sur la stabilité, la coordination et la gouvernance (TSCG), signé le 2 mars 2012, impose une règle d'or limitant le déficit structurel à 0,5 % du PIB. Le Parlement le ratifiera en octobre 2012.",
  "2012-economie-2":
    "La taxe à 75 % sur la part des revenus dépassant un million d'euros, annoncée en février 2012, serait acquittée par les personnes physiques. Le Conseil constitutionnel la censurera en décembre 2012.",
  "2012-economie-3":
    "L'impôt de solidarité sur la fortune (ISF) taxe les patrimoines supérieurs à 790 000 euros, avec un barème allant de 0,25 % à 1,8 % et un plafonnement global des impôts à 75 % des revenus.",
  "2012-economie-4":
    "La taxe sur les transactions financières, prévue par la loi de finances, entrera en vigueur en août 2012 : 0,1 % sur les actions des entreprises françaises, pour un rendement de quelques centaines de millions d'euros.",
  "2012-economie-5":
    "La France s'est engagée auprès de la Commission européenne à ramener son déficit public sous 3 % du PIB en 2013. Il atteint environ 5,2 % du PIB en 2011.",
  "2012-economie-6":
    "Le pacte national pour la croissance, la compétitivité et l'emploi, présenté en novembre 2012, prévoit 20 milliards d'euros d'allègements de cotisations patronales. Le crédit d'impôt pour la compétitivité et l'emploi (CICE) sera créé en 2013.",
  "2012-economie-7":
    "Séparer les activités de détail et de marché des banques viserait à protéger les dépôts des activités spéculatives. Une loi de séparation bancaire sera adoptée en France en 2013.",
  "2012-economie-8":
    "L'austérité désigne les politiques de réduction des déficits par hausses d'impôts et coupes de dépenses. La crise grecque et l'envolée des taux d'intérêt italiens de 2011 pèsent sur le débat.",
  "2012-economie-9":
    "Le SMIC est revalorisé chaque 1er janvier, au minimum à hauteur de l'inflation pour les ménages les plus modestes. Une revalorisation exceptionnelle a eu lieu en décembre 2011.",
  "2012-economie-10":
    "Une contribution exceptionnelle sur les hauts patrimoines serait une taxe ponctuelle. Le Conseil constitutionnel veille au respect du principe d'égalité devant l'impôt, notamment pour les mesures rétroactives.",

  "2012-travail-1":
    "La réforme de 2010 a repoussé l'âge légal de départ de 60 à 62 ans et l'âge du taux plein de 65 à 67 ans. Le décret de juillet 2012 rétablira un départ à 60 ans pour ceux qui ont commencé à travailler avant 20 ans.",
  "2012-travail-2":
    "Repousser l'âge légal à 65 ans prolongerait la réforme de 2010. Le Conseil d'orientation des retraites juge le système finançable à condition d'allonger la durée de cotisation.",
  "2012-travail-3":
    "La durée légale de 35 heures hebdomadaires reste la référence pour le calcul des heures supplémentaires depuis 2002, même si de nombreux accords d'entreprise y dérogent.",
  "2012-travail-4":
    "Les emplois d'avenir, créés par la loi du 26 octobre 2012, subventionnent des postes destinés aux jeunes peu qualifiés dans le secteur non marchand. L'objectif est de 100 000 contrats.",
  "2012-travail-5":
    "Les licenciements collectifs supposent une consultation des représentants du personnel et, dans les grandes entreprises, un plan de sauvegarde de l'emploi avec reclassement.",
  "2012-travail-6":
    "La loi du 20 août 2008 a fait de l'accord d'entreprise une source autonome de droit, autorisant des dérogations aux accords de branche dans certains domaines comme le temps de travail.",
  "2012-travail-7":
    "Un décret de 2012 plafonne à 450 000 euros par an la rémunération des dirigeants des entreprises publiques. Aucun plafond légal n'existe dans le secteur privé.",
  "2012-travail-8":
    "Le point d'indice, base du calcul du traitement des fonctionnaires, est gelé depuis 2010 et le restera jusqu'en 2016 : leur pouvoir d'achat recule avec l'inflation.",
  "2012-travail-9":
    "La France compte environ 5,3 millions d'agents publics, dont 2,5 millions de fonctionnaires d'État. La révision générale des politiques publiques supprime des postes depuis 2007.",
  "2012-travail-10":
    "La pénibilité désigne l'exposition durable à des facteurs de risque (bruit, port de charges, travail de nuit). Depuis 2010, un départ anticipé est possible après trente ans d'exposition.",

  "2012-social-1":
    "Le tiers payant dispense le patient d'avancer les frais chez le médecin. Sa généralisation sera votée en 2016, avec une mise en œuvre progressive jusqu'en 2017.",
  "2012-social-2":
    "Les médecins de secteur 2 facturent librement au-delà du tarif de la Sécurité sociale. Un accord signé en octobre 2012 encadrera ces dépassements, sans les supprimer.",
  "2012-social-3":
    "Le revenu de solidarité active (RSA), généralisé en 2009, complète les revenus du travail. Le conditionner à des heures d'activité supposerait de modifier la loi qui l'a créé.",
  "2012-social-4":
    "La couverture maladie universelle complémentaire (CMU-C) et l'aide médicale d'État (AME) couvrent respectivement les personnes à faibles revenus et les étrangers en situation irrégulière. Leurs régimes et leurs financements diffèrent.",
  "2012-social-5":
    "Le service public hospitalier regroupe les hôpitaux publics et les établissements privés à but non lucratif. Les cliniques commerciales en sont exclues, tout en participant à la permanence des soins.",
  "2012-social-6":
    "Le reste à charge est ce qui reste à payer après l'assurance maladie et la complémentaire. Le « reste à charge zéro » sur les lunettes et les prothèses auditives sera mis en œuvre en 2019.",
  "2012-social-7":
    "Les produits d'épargne retraite individuelle (PERP, contrats Madelin) complètent facultativement les régimes obligatoires, qui restent tous par répartition.",
  "2012-social-8":
    "La perte d'autonomie des personnes âgées est financée par l'allocation personnalisée d'autonomie, versée par les départements, et par l'assurance maladie pour les soins.",
  "2012-social-9":
    "L'aide médicale d'État couvre les soins des étrangers en situation irrégulière présents depuis plus de trois mois. Son coût est estimé à environ 500 millions d'euros par an.",
  "2012-social-10":
    "Les allocations familiales sont versées sans condition de ressources depuis 1932. Leur modulation selon les revenus sera adoptée en 2014 dans le budget de la Sécurité sociale.",

  "2012-education-1":
    "Les écoles supérieures du professorat et de l'éducation (ESPE) remplaceront les IUFM à la rentrée 2013. Les IUFM avaient été intégrés aux universités en 2005.",
  "2012-education-2":
    "La refondation de l'école prévoit la création de 60 000 postes sur cinq ans, après plusieurs années de suppressions nettes de postes dans l'éducation nationale.",
  "2012-education-3":
    "Les élèves du primaire reçoivent des notes chiffrées, et des évaluations nationales ont lieu en CE1 et en CM2. Le débat sur l'évaluation sans note concerne aussi le collège.",
  "2012-education-4":
    "La loi relative aux libertés et responsabilités des universités (LRU) de 2007 a donné aux universités l'autonomie budgétaire et le recrutement de leurs enseignants.",
  "2012-education-5":
    "L'apprentissage commence en principe à 16 ans, mais le dispositif d'initiation aux métiers en alternance (DIMA) accueille des jeunes de 15 ans depuis 2006. Environ 430 000 apprentis sont formés en centre de formation d'apprentis.",
  "2012-education-6":
    "Les zones d'éducation prioritaires (ZEP) bénéficient de moyens renforcés. Le dispositif Éclair, créé en 2010, vise des effectifs réduits dans les collèges les plus difficiles.",
  "2012-education-7":
    "Le baccalauréat général combine des épreuves terminales nationales et une part de contrôle continu (éducation physique, options, travaux personnels encadrés). La réforme portant le contrôle continu à 40 % s'appliquera en 2021.",
  "2012-education-8":
    "Les établissements privés sous contrat reçoivent des fonds publics au titre de la loi Debré de 1959. Ils scolarisent environ 17 % des élèves du premier et du second degré.",
  "2012-education-9":
    "Les frais d'inscription à l'université sont fixés nationalement, à environ 180 euros en licence et 250 euros en master. Leur hausse est préconisée par plusieurs rapports.",
  "2012-education-10":
    "Les étudiants bénéficient de bourses sur critères sociaux et leurs familles de prestations familiales jusqu'à leurs 20 ans. Aucune allocation universelle d'autonomie n'existe en 2012.",

  "2012-immigration-1":
    "Le droit de vote des étrangers non communautaires aux élections locales supposerait de réviser l'article 3 de la Constitution. Un texte voté par l'Assemblée en 2011 n'a pas abouti faute d'accord au Sénat.",
  "2012-immigration-2":
    "L'espace Schengen supprime les contrôles aux frontières intérieures. La Commission a proposé en 2011 un mécanisme permettant de les rétablir temporairement en cas de défaillance d'un État membre.",
  "2012-immigration-3":
    "Les régularisations relèvent des préfets, au cas par cas, sur critères de séjour, de travail et de liens privés et familiaux. Une circulaire de novembre 2012 en précisera la procédure.",
  "2012-immigration-4":
    "Aucun quota annuel d'immigration n'est voté par le Parlement en 2012 : les entrées sont encadrées par les visas et les titres de séjour délivrés par les préfectures.",
  "2012-immigration-5":
    "L'aide médicale d'État (AME) couvre les soins des étrangers en situation irrégulière présents depuis plus de trois mois. Son coût est estimé à environ 500 millions d'euros par an.",
  "2012-immigration-6":
    "Réserver certains emplois aux nationaux existe déjà dans la fonction publique. Étendre la règle au secteur privé supposerait de déroger au droit de l'Union européenne et au principe d'égalité.",
  "2012-immigration-7":
    "Les évacuations de campements roms se sont multipliées à partir de 2010, assorties d'aides au retour volontaire. Le Conseil de l'Europe a dénoncé ces pratiques dès 2010.",
  "2012-immigration-8":
    "La nationalité française s'acquiert par la filiation, la naissance en France, le mariage ou la naturalisation. La naturalisation exige déjà un niveau de français depuis la loi de 2003.",
  "2012-immigration-9":
    "Le délit de séjour irrégulier punit d'un an de prison et de 3 750 euros d'amende la présence irrégulière sur le territoire. Il sera supprimé par la loi du 31 décembre 2012.",
  "2012-immigration-10":
    "La guerre civile syrienne a commencé en mars 2011. En 2012, quelques milliers de Syriens obtiennent une protection en France ; l'accueil à grande échelle interviendra en 2015.",

  "2012-securite-1":
    "Les zones de sécurité prioritaires (ZSP), créées en 2012, concentrent police, gendarmerie, justice et action sociale dans une quarantaine de quartiers.",
  "2012-securite-2":
    "La vidéosurveillance de l'espace public est autorisée par la loi de 1995 sous contrôle préfectoral. Le territoire compte plusieurs dizaines de milliers de caméras municipales en 2012.",
  "2012-securite-3":
    "La réforme de la garde à vue, issue de la loi du 14 avril 2011, rend l'avocat présent dès le début de la mesure et pendant les auditions.",
  "2012-securite-4":
    "Les peines d'emprisonnement de moins de deux ans peuvent être aménagées (bracelet électronique, semi-liberté), mais une part importante des courtes peines reste inexécutée.",
  "2012-securite-5":
    "La consommation de cannabis est un délit depuis 1970, passible d'un an de prison et de 3 750 euros d'amende. La légalisation encadrée, avec vente sous contrôle public, est défendue par plusieurs élus.",
  "2012-securite-6":
    "Les contrôles d'identité peuvent être menés sur réquisition du procureur ou pour prévenir une atteinte à l'ordre public, à condition de reposer sur des éléments objectifs.",
  "2012-securite-7":
    "La légitime défense suppose une riposte nécessaire et proportionnée à l'agression. Une présomption de légitime défense pour les policiers sera créée par la loi du 28 février 2017.",
  "2012-securite-8":
    "Les mineurs de plus de 16 ans peuvent être jugés par le tribunal correctionnel, mais les peines restent atténuées par l'excuse de minorité, écartée dans des cas limités.",
  "2012-securite-9":
    "La prévention de la délinquance s'appuie sur les contrats urbains de cohésion sociale et sur les conseils locaux de sécurité et de prévention de la délinquance créés en 2007.",
  "2012-securite-10":
    "Les fichiers de police, comme le fichier des antécédents (STIC) ou le fichier automatisé des empreintes génétiques, sont encadrés par la loi informatique et libertés de 1978 et contrôlés par la CNIL.",

  "2012-ecologie-1":
    "L'accord entre le Parti socialiste et Europe Écologie Les Verts prévoit de ramener la part du nucléaire à 50 % de la production d'électricité en 2025, avec la fermeture de 24 réacteurs.",
  "2012-ecologie-2":
    "La fiscalité écologique représente environ 2 % des prélèvements obligatoires en France. La contribution climat-énergie, créée en 2014, en sera le principal levier.",
  "2012-ecologie-3":
    "La fracturation hydraulique, technique d'extraction des gaz de schiste, est interdite en France par la loi du 13 juillet 2011. Sept permis d'exploration ont été abrogés.",
  "2012-ecologie-4":
    "Le nucléaire produit environ 75 % de l'électricité française. Le coût de production d'EDF figure parmi les plus bas d'Europe, hors démantèlement et rénovation du parc.",
  "2012-ecologie-5":
    "Le projet d'aéroport du Grand Ouest à Notre-Dame-des-Landes est déclaré d'utilité publique en 2008. Il affronte une opposition organisée depuis le début des années 1970.",
  "2012-ecologie-6":
    "Le plan Écophyto de 2008 prévoit de réduire de moitié l'usage des pesticides en dix ans. L'objectif n'est pas atteint : les ventes de produits phytosanitaires repartent à la hausse en 2011.",
  "2012-ecologie-7":
    "Le gazole est nettement moins taxé que l'essence en France, exception parmi les pays européens. Cette fiscalité favorable au diesel est contestée pour ses effets sur la qualité de l'air.",
  "2012-ecologie-8":
    "La France compte environ 7 000 mégawatts d'éolien raccordés en 2012, loin de l'objectif de 19 000 fixé par le Grenelle pour 2020. Les recours et les zones protégées freinent les projets.",
  "2012-ecologie-9":
    "Les agriculteurs doivent respecter les directives européennes sur les nitrates et les pesticides ainsi que la conditionnalité des aides. Les organisations agricoles dénoncent une accumulation de normes.",
  "2012-ecologie-10":
    "Le parc français compte environ 30 millions de résidences principales, dont une part importante est mal isolée. Le crédit d'impôt développement durable soutient les travaux depuis 2005.",

  "2012-europe-1":
    "Le traité sur la stabilité (TSCG), signé en mars 2012 par vingt-cinq États membres, pourrait être complété par un volet de croissance. La France annoncera vouloir le ratifier après avoir obtenu ce complément.",
  "2012-europe-2":
    "L'euro est la monnaie de dix-sept États membres en 2012. La crise des dettes souveraines a conduit à deux plans d'aide à la Grèce et à la création du Mécanisme européen de stabilité.",
  "2012-europe-3":
    "La Grèce a bénéficié d'un premier plan d'aide en 2010, puis d'un second en 2012 assorti d'une restructuration de sa dette. Les conditions d'austérité imposées sont très contestées.",
  "2012-europe-4":
    "Sortir de l'euro impliquerait une dévaluation et un contrôle des capitaux ; les traités ne prévoient aucune clause de retrait. Plusieurs économistes en discutent les conséquences.",
  "2012-europe-5":
    "Les euro-obligations mutualiseraient la dette des États de la zone euro. L'Allemagne y est opposée en 2012 : le débat porte sur les conditions, les garanties et les contreparties budgétaires.",
  "2012-europe-6":
    "La primauté du droit de l'Union sur la loi nationale est établie depuis 1964 et reconnue par la Constitution française depuis 1992.",
  "2012-europe-7":
    "L'espace Schengen prévoit une clause de sauvegarde autorisant le rétablissement temporaire des contrôles. La Commission a proposé en 2011 un mécanisme plus coordonné.",
  "2012-europe-8":
    "La Turquie est candidate depuis 1999 ; les négociations d'adhésion, ouvertes en 2005, sont au point mort depuis le gel de plusieurs chapitres en 2006.",
  "2012-europe-9":
    "Un parlementaire peut cumuler son mandat avec une fonction exécutive locale. La loi du 14 février 2014 mettra fin à ce cumul, à partir de 2017 pour les députés.",
  "2012-europe-10":
    "Les députés sont élus au scrutin majoritaire à deux tours, qui accorde une prime au parti arrivé en tête. La proportionnelle intégrale réduirait cet écart au prix de majorités moins nettes.",

  "2012-international-1":
    "La France a réintégré le commandement militaire intégré de l'OTAN en 2009. Le quitter à nouveau ne signifierait pas sortir de l'Alliance atlantique.",
  "2012-international-2":
    "Les troupes de combat françaises quittent la province de Kapisa fin 2012, avant le retrait de la force internationale prévu pour fin 2014.",
  "2012-international-3":
    "Le nord du Mali est passé en 2012 sous le contrôle de groupes djihadistes. La France lancera l'opération Serval en janvier 2013, à la demande des autorités maliennes.",
  "2012-international-4":
    "La dissuasion nucléaire représente environ un dixième du budget de la défense et repose sur des sous-marins lanceurs d'engins et des avions. Le Livre blanc de 2013 la maintiendra.",
  "2012-international-5":
    "La loi de programmation militaire 2009-2014 prévoit environ 31 milliards d'euros par an pour la défense. Un nouveau Livre blanc doit fixer les moyens après 2014.",
  "2012-international-6":
    "La France soutient la solution à deux États. En novembre 2012, l'Assemblée générale des Nations unies accordera à la Palestine le statut d'État observateur non membre.",
  "2012-international-7":
    "La France consacre environ 0,5 % de son PIB à l'aide publique au développement. Les coupes budgétaires annoncées en 2012 menacent cette trajectoire.",
  "2012-international-8":
    "La guerre civile syrienne s'est durcie en 2012. La France évoque des livraisons d'armes aux rebelles, avant de renoncer à une frappe en 2013.",
  "2012-international-9":
    "La Charte des Nations unies réserve au Conseil de sécurité l'autorisation de l'usage de la force, sauf légitime défense. La Russie et la Chine opposent leur veto aux résolutions sur la Syrie.",
  "2012-international-10":
    "La France figure parmi les cinq premiers exportateurs mondiaux d'armement. Les ventes sont autorisées par une commission interministérielle et retracées dans un rapport annuel au Parlement.",

  "2012-societe-1":
    "Le mariage est alors réservé aux couples de sexe différent. La loi du 17 mai 2013 ouvrira le mariage et l'adoption aux couples de même sexe.",
  "2012-societe-2":
    "La procréation médicalement assistée (PMA) est réservée aux couples hétérosexuels en âge de procréer et vivants. La loi de bioéthique de 2021 l'ouvrira aux couples de femmes et aux femmes seules.",
  "2012-societe-3":
    "La loi Leonetti de 2005 interdit l'acharnement thérapeutique et permet de limiter les traitements, sans légaliser l'euthanasie. La loi Claeys-Leonetti de 2016 créera un droit à la sédation profonde.",
  "2012-societe-4":
    "La gestation pour autrui (GPA) est interdite en France depuis les lois de bioéthique de 1994. La Cour européenne des droits de l'homme condamnera la France en 2014 pour son refus de reconnaître des filiations établies à l'étranger.",
  "2012-societe-5":
    "La loi du 15 mars 2004 interdit les signes religieux ostensibles à l'école, au collège et au lycée publics, mais pas à l'université, où le voile reste admis sous conditions.",
  "2012-societe-6":
    "Dans l'espace public, la liberté de religion protège le port de signes, sauf trouble à l'ordre public ou nécessité de service. La loi de 2004 ne concerne que l'école publique.",
  "2012-societe-7":
    "Le droit à l'avortement est garanti par la loi Veil de 1975, révisée en 2001 avec un délai porté à douze semaines. Son inscription dans la Constitution sera votée en 2024.",
  "2012-societe-8":
    "Le droit fiscal reconnaît le mariage et le concubinage notoire. Le pacte civil de solidarité de 1999 ne donne pas les mêmes droits en matière de succession et de filiation.",
  "2012-societe-9":
    "La loi du 27 janvier 2011 impose 20 % de femmes dans les conseils d'administration des grandes entreprises en 2014, puis 40 % en 2017.",
  "2012-societe-10":
    "L'enseignement de la morale laïque à l'école est annoncé pour la rentrée 2015. L'éducation civique existe déjà à l'école, au collège et au lycée.",
};
