import type { RawContexts, RawYear } from "./types";

/**
 * Présidentielle 2007 — « la rupture », rejet du référendum de 2005, émeutes
 * de 2005, CPE, bouclier fiscal, TVA sociale, dette, Grenelle de
 * l'environnement. Vocabulaire et mesures de la campagne de 2007.
 */
export const RAW_2007: RawYear = {
  economie: [
    ["Le plafonnement des impôts à 50 % des revenus était une bonne mesure.", "redistribution", -1, { express: true }],
    ["La TVA sociale doit remplacer une partie des cotisations patronales.", "redistribution", -1],
    ["Les droits de succession doivent être supprimés pour 95 % des Français.", "redistribution", -1],
    ["L'impôt de solidarité sur la fortune doit être supprimé.", "redistribution", -1],
    ["Les heures supplémentaires doivent être défiscalisées.", "flexibilite-travail", 1, { express: true }],
    ["La dette publique doit être réduite avant toute nouvelle dépense.", "dette", 1],
    ["La France doit instaurer une taxe sur les transactions financières.", "redistribution", 1],
    ["L'État doit recapitaliser les entreprises en difficulté plutôt que les laisser fermer.", "etat-economie", 1],
    ["Le pouvoir d'achat doit primer sur la compétitivité des entreprises.", "redistribution", 1],
    ["Les 35 heures doivent être remises en cause.", "flexibilite-travail", 1],
  ],
  travail: [
    ["Le contrat première embauche (CPE) était une bonne réponse au chômage des jeunes.", "flexibilite-travail", 1, { express: true }],
    ["Un contrat de travail unique doit remplacer le CDI et le CDD.", "flexibilite-travail", 1],
    ["La retraite à 60 ans doit être maintenue pour les carrières longues.", "retraites", -1, { express: true }],
    ["Le service minimum doit être garanti dans les transports publics.", "autorite", 1],
    ["Les régimes spéciaux de retraite doivent être alignés sur le régime général.", "retraites", 1],
    ["Le SMIC doit être revalorisé au-delà de la hausse des prix.", "redistribution", 1],
    ["Les licenciements économiques doivent être autorisés plus facilement.", "flexibilite-travail", 1],
    ["La représentativité syndicale doit être réformée.", "institutions", 1],
    ["La durée légale du travail doit rester fixée à 35 heures.", "flexibilite-travail", -1],
    ["Les rémunérations des dirigeants doivent être encadrées par la loi.", "redistribution", 1],
  ],
  social: [
    ["La participation forfaitaire de 1 euro sur les consultations doit être supprimée.", "universalite-sociale", 1, { express: true }],
    ["La Sécurité sociale doit rembourser intégralement les soins courants.", "universalite-sociale", 1, { express: true }],
    ["La dépendance des personnes âgées doit être financée par la solidarité nationale.", "universalite-sociale", 1],
    ["Le RMI doit être remplacé par un revenu de solidarité active avec obligation d'insertion.", "universalite-sociale", -1],
    ["Les cliniques privées doivent participer au service public hospitalier.", "universalite-sociale", 1],
    ["Le droit au logement opposable est une bonne loi.", "universalite-sociale", 1],
    ["Les retraites doivent être complétées par l'épargne capitalisée.", "retraites", 1],
    ["L'aide médicale d'État doit être supprimée.", "immigration", 1],
    ["La lutte contre la pauvreté doit devenir une priorité nationale.", "redistribution", 1],
    ["Les allocations familiales doivent être modulées selon les revenus.", "redistribution", 1],
  ],
  education: [
    ["La carte scolaire doit être assouplie pour permettre aux familles de choisir.", "education-egalite", -1, { express: true }],
    ["L'université doit sélectionner ses étudiants à l'entrée.", "education-egalite", -1, { express: true }],
    ["Les enseignants doivent être évalués et payés au mérite.", "education-egalite", -1],
    ["Les zones d'éducation prioritaires doivent recevoir plus de moyens et des classes réduites.", "education-egalite", 1],
    ["L'apprentissage doit être développé dès 14 ans.", "education-egalite", -1],
    ["Le baccalauréat doit être remplacé par le contrôle continu.", "education-egalite", 1],
    ["Les notes doivent être supprimées à l'école primaire.", "education-egalite", 1],
    ["Les établissements doivent pouvoir recruter eux-mêmes leurs enseignants.", "education-egalite", -1],
    ["Une allocation d'autonomie doit être versée à tous les étudiants.", "universalite-sociale", 1],
    ["L'école doit transmettre un socle de valeurs républicaines communes.", "laicite", 1],
  ],
  immigration: [
    ["L'immigration choisie doit remplacer l'immigration subie.", "immigration", 1, { express: true }],
    ["Un ministère de l'Immigration et de l'Identité nationale était une bonne idée.", "immigration", 1, { express: true }],
    ["Les régularisations au cas par cas doivent cesser.", "immigration", 1],
    ["Les étrangers établis en France doivent voter aux élections municipales.", "immigration", -1],
    ["Les tests ADN pour le regroupement familial étaient justifiés.", "immigration", 1],
    ["La France doit accueillir les réfugiés du Darfour.", "immigration", -1],
    ["La préférence nationale doit s'appliquer à l'attribution des logements sociaux.", "immigration", 1],
    ["Les quotas migratoires doivent être fixés par le Parlement.", "immigration", 1],
    ["Les sans-papiers dont les enfants sont scolarisés doivent être régularisés.", "immigration", -1],
    ["L'intégration républicaine passe d'abord par la maîtrise de la langue.", "immigration", 1],
  ],
  securite: [
    ["Des peines planchers doivent être instituées pour les récidivistes.", "autorite", 1, { express: true }],
    ["La vidéosurveillance doit être généralisée dans l'espace public.", "libertes-publiques", -1, { express: true }],
    ["Les émeutes de 2005 appelaient plus de prévention sociale que de répression.", "autorite", -1],
    ["La police doit pouvoir contrôler les identités plus facilement.", "libertes-publiques", -1],
    ["Les mineurs récidivistes doivent être sanctionnés dès 16 ans.", "autorite", 1],
    ["La garde à vue doit être réformée avec la présence de l'avocat.", "libertes-publiques", 1],
    ["La rétention de sûreté pour les criminels dangereux est justifiée.", "autorite", 1],
    ["Le cannabis doit être dépénalisé.", "libertes-publiques", 1],
    ["Les quartiers doivent recevoir plus de policiers de proximité.", "autorite", -1],
    ["L'armement de la police municipale doit être généralisé.", "autorite", 1],
  ],
  ecologie: [
    ["La sortie du nucléaire civil doit être engagée.", "nucleaire", -1, { express: true }],
    ["Le Grenelle de l'environnement doit fixer des objectifs contraignants.", "ecologie-contrainte", 1, { express: true }],
    ["Une taxe carbone doit être introduite.", "ecologie-contrainte", 1],
    ["Le nucléaire est indispensable pour lutter contre le réchauffement climatique.", "nucleaire", 1],
    ["Les cultures d'OGM doivent être interdites.", "ecologie-contrainte", 1],
    ["La France doit construire un second réacteur EPR.", "nucleaire", 1],
    ["Les éoliennes doivent être développées même si elles modifient les paysages.", "ecologie-contrainte", 1],
    ["Les normes environnementales pèsent trop lourdement sur les agriculteurs.", "ecologie-contrainte", -1],
    ["Les transports en commun doivent être développés en priorité.", "ecologie-contrainte", 1],
    ["La chasse doit être préservée comme activité rurale.", "ruralite", 1],
  ],
  europe: [
    ["Le traité constitutionnel de 2005 devait être rejeté.", "europe", -1, { express: true }],
    ["Le traité simplifié doit être ratifié par le Parlement, sans référendum.", "europe", 1, { express: true }],
    ["La Turquie doit entrer dans l'Union européenne.", "europe", 1],
    ["L'Europe doit se doter d'une défense commune.", "europe", 1],
    ["L'euro protège l'économie française.", "europe", 1],
    ["Le droit européen doit primer sur la loi nationale.", "europe", 1],
    ["Tout nouveau transfert de souveraineté doit passer par référendum.", "europe", -1],
    ["La directive Bolkestein menaçait le modèle social français.", "europe", -1],
    ["L'Assemblée nationale doit être élue à la proportionnelle.", "institutions", 1],
    ["Le cumul des mandats doit être interdit.", "institutions", 1, { open: true }],
  ],
  international: [
    ["Les troupes françaises doivent rester en Afghanistan.", "alliances", 1, { express: true }],
    ["La dissuasion nucléaire doit être maintenue.", "defense", 1, { express: true }],
    ["La France doit réintégrer le commandement intégré de l'OTAN.", "alliances", 1],
    ["Le refus français d'intervenir en Irak en 2003 était justifié.", "alliances", -1],
    ["Le budget de la défense doit être augmenté.", "defense", 1],
    ["La dissuasion française doit rester indépendante de l'OTAN.", "defense", 1],
    ["L'aide publique au développement doit atteindre 0,7 % du PIB.", "defense", -1],
    ["L'indépendance du Kosovo doit être reconnue.", "alliances", 1],
    ["Toute intervention militaire doit être autorisée par l'ONU.", "alliances", -1],
    ["La France doit continuer à exporter des armes.", "defense", 1],
  ],
  societe: [
    ["Le mariage doit être ouvert aux couples de même sexe.", "progressisme-societal", 1, { express: true }],
    ["L'adoption doit être ouverte aux couples homosexuels.", "progressisme-societal", 1],
    ["La gestation pour autrui doit être autorisée.", "progressisme-societal", 1, { express: true }],
    ["L'euthanasie doit être légalisée.", "progressisme-societal", 1],
    ["Le port du voile doit être interdit à l'université.", "laicite", 1],
    ["Les signes religieux ostensibles doivent être interdits dans l'espace public.", "laicite", 1],
    ["La parité doit être imposée dans les conseils d'administration.", "progressisme-societal", 1],
    ["Le quotient familial doit être plafonné.", "redistribution", 1],
    ["La culture doit être financée à la hauteur de son rôle social.", "redistribution", 1],
    ["Un service national obligatoire doit être rétabli.", "autorite", 1],
  ],
};

/**
 * Un contexte par identifiant de question du scrutin : sigles développés,
 * mesures, montants et état du droit tel qu'il était en 2007.
 */
export const CONTEXT_2007: RawContexts = {
  "2007-economie-1":
    "Le bouclier fiscal, créé en 2006, plafonne à 50 % de ses revenus l'ensemble des impôts directs acquittés par un contribuable. Son coût et son bénéfice concentré sur les plus aisés alimentent la critique.",
  "2007-economie-2":
    "La TVA sociale consiste à transférer une partie des cotisations patronales sur la TVA, pour alléger le coût du travail et taxer les importations. Le taux normal de TVA est alors de 19,6 %.",
  "2007-economie-3":
    "Les droits de succession sont calculés par tranches après un abattement de 50 000 euros par enfant et par parent, et les transmissions entre époux sont déjà exonérées depuis 2007.",
  "2007-economie-4":
    "L'impôt de solidarité sur la fortune (ISF), créé en 1989, taxe les patrimoines supérieurs à 760 000 euros. Il concerne près de 600 000 foyers et rapporte environ quatre milliards d'euros par an.",
  "2007-economie-5":
    "La loi du 21 août 2007, dite loi TEPA, a exonéré d'impôt sur le revenu et de cotisations salariales les heures supplémentaires, majorées de 25 % au-delà de 35 heures.",
  "2007-economie-6":
    "La dette publique dépasse 1 200 milliards d'euros, soit environ 64 % du PIB en 2007. La France est sous procédure européenne pour déficit excessif depuis 2003.",
  "2007-economie-7":
    "La taxe sur les transactions financières, portée par des ONG et plusieurs partis de gauche européenne, n'existe encore dans aucun pays en 2007.",
  "2007-economie-8":
    "L'État peut entrer au capital d'une entreprise en difficulté par prise de participation, comme il l'a fait pour Alstom ou France Télécom. Ce type d'opération reste exceptionnel.",
  "2007-economie-9":
    "Le pouvoir d'achat du revenu disponible brut progresse d'environ 1,5 % par an depuis 2000, alors que le coût du travail français reste supérieur à celui de l'Allemagne.",
  "2007-economie-10":
    "La durée légale de 35 heures a été fixée par les lois Aubry de 1998 et 2000. Plusieurs rapports publics ont depuis contesté ses effets sur l'emploi et la compétitivité.",

  "2007-travail-1":
    "Le contrat première embauche (CPE), créé par la loi du 31 mars 2006, offrait aux moins de 26 ans un contrat sans durée déterminée avec deux ans de période de consolidation. Il a été retiré en avril 2006 après les mobilisations.",
  "2007-travail-2":
    "Le contrat de travail unique fusionnerait le CDI et le CDD en un seul contrat à droits progressifs, pour réduire la précarité. Plusieurs économistes le défendent, les syndicats y sont hostiles.",
  "2007-travail-3":
    "La loi Fillon de 2003 a allongé la durée de cotisation et ouvert un départ anticipé à ceux qui ont commencé à travailler avant 16 ans ou validé cinq trimestres avant 20 ans.",
  "2007-travail-4":
    "Le droit de grève est garanti par la Constitution. En 2007, seules des conventions de continuité du service existent dans certaines entreprises de transport ; un projet de loi sur le service minimum est annoncé.",
  "2007-travail-5":
    "Les régimes spéciaux (SNCF, RATP, industries électriques et gazières, marins) permettent des départs anticipés et reposent sur des caisses autonomes. Leur alignement sur le régime général est réclamé depuis le rapport de 2003.",
  "2007-travail-6":
    "Le SMIC est revalorisé chaque 1er juillet au minimum au niveau de l'inflation. Le « coup de pouce » de juillet 2006, limité à 3,05 %, a été dénoncé par les syndicats.",
  "2007-travail-7":
    "Le licenciement économique doit reposer sur une cause réelle et sérieuse, contrôlée par le juge. La loi de cohésion sociale de 2005 a créé pour les petites entreprises le contrat nouvelles embauches (CNE).",
  "2007-travail-8":
    "La représentativité syndicale est présumée pour cinq confédérations depuis 1966. Une réforme fondée sur l'audience électorale des syndicats est annoncée pour 2008.",
  "2007-travail-9":
    "La durée légale de 35 heures hebdomadaires s'applique à toutes les entreprises depuis 2002. Les heures supplémentaires sont majorées de 25 % puis de 50 %.",
  "2007-travail-10":
    "En 2007, aucune loi n'encadre les rémunérations des dirigeants : le code AFEP-Medef, non contraignant, recommande seulement la transparence. Plusieurs parachutes dorés ont défrayé la chronique pendant la campagne.",

  "2007-social-1":
    "La participation forfaitaire de 1 euro, instaurée par la réforme de l'assurance maladie de 2004, s'applique à chaque consultation et acte médical, hors hospitalisation et affections de longue durée.",
  "2007-social-2":
    "L'assurance maladie rembourse en moyenne 70 % des soins de ville. Le reste est couvert par les contrats complémentaires ou laissé à la charge du patient.",
  "2007-social-3":
    "La dépendance des personnes âgées est financée par l'allocation personnalisée d'autonomie (APA), créée en 2002 et versée par les départements. La Sécurité sociale n'a pas de branche dédiée.",
  "2007-social-4":
    "Le revenu de solidarité active (RSA) compléterait les revenus du travail pour rendre l'activité toujours plus rémunératrice que l'assistance. Il sera expérimenté en 2008 puis généralisé en 2009.",
  "2007-social-5":
    "Les cliniques privées réalisent une part importante de la chirurgie. Elles ne sont pas intégrées au service public hospitalier et leurs tarifs sont négociés avec l'assurance maladie.",
  "2007-social-6":
    "La loi du 5 mars 2007 institue le droit au logement opposable (DALO) : une commission peut contraindre l'État à reloger une personne mal logée, avec recours devant le juge administratif.",
  "2007-social-7":
    "L'épargne retraite individuelle (PERP, assurance-vie) complète facultativement les régimes obligatoires, qui restent tous par répartition.",
  "2007-social-8":
    "L'aide médicale d'État (AME) couvre les soins des étrangers en situation irrégulière présents en France depuis plus de trois mois. Elle a déjà été restreinte par la loi de 2003 sur l'immigration.",
  "2007-social-9":
    "En 2007, environ sept millions de personnes vivent sous le seuil de pauvreté, fixé à 60 % du revenu médian, soit près de 880 euros par mois.",
  "2007-social-10":
    "Les allocations familiales sont versées dès le deuxième enfant, sans condition de ressources. Leur modulation selon les revenus est proposée par plusieurs rapports depuis 2003.",

  "2007-education-1":
    "La carte scolaire date de 1963. Depuis 2006, son assouplissement est expérimenté dans certains départements, et un décret généralise les dérogations à la rentrée 2007.",
  "2007-education-2":
    "L'accès à l'université est ouvert à tous les bacheliers de l'académie ; seules les filières à capacité limitée et les sections de techniciens supérieurs sélectionnent. La loi d'août 2007 donnera aux universités plus d'autonomie.",
  "2007-education-3":
    "La rémunération des enseignants suit une grille indiciaire nationale, identique quel que soit l'établissement. Aucune part variable liée aux résultats n'est prévue.",
  "2007-education-4":
    "Les zones d'éducation prioritaires (ZEP), créées en 1981, bénéficient de moyens renforcés ; depuis 2006, les réseaux les plus en difficulté portent le label « ambition réussite ».",
  "2007-education-5":
    "L'apprentissage commence à 16 ans, après la troisième. Un dispositif d'initiation aux métiers en alternance (DIMA) a été créé en 2006 pour les jeunes de 14 à 15 ans.",
  "2007-education-6":
    "Le baccalauréat général repose sur des épreuves terminales nationales et une part de contrôle continu (éducation physique, options, travaux personnels encadrés).",
  "2007-education-7":
    "Les élèves du primaire sont évalués par des notes chiffrées, et des évaluations nationales ont lieu en CE1 et en CM2 depuis 1989.",
  "2007-education-8":
    "Les enseignants du second degré sont recrutés par concours national puis affectés par l'État selon un mouvement annuel ; les établissements n'ont pas de pouvoir de recrutement.",
  "2007-education-9":
    "Les étudiants bénéficient de bourses sur critères sociaux et leurs familles de prestations familiales jusqu'à leurs 20 ans. Aucune allocation d'autonomie universelle n'existe.",
  "2007-education-10":
    "La loi d'orientation de 2005 fixe un socle commun de connaissances et de compétences, qui comprend la culture humaniste et la vie en société.",

  "2007-immigration-1":
    "L'immigration choisie désigne une politique d'admission fondée sur les compétences, par opposition à l'immigration subie, majoritairement familiale. La carte « compétences et talents » a été créée en 2006.",
  "2007-immigration-2":
    "Un ministère de l'Immigration, de l'Intégration, de l'Identité nationale et du Développement solidaire est créé en 2007. Il regroupe des services auparavant répartis entre l'Intérieur et les Affaires sociales.",
  "2007-immigration-3":
    "Les régularisations sont décidées par les préfets au cas par cas, sur critères de séjour, de travail et de liens familiaux. La circulaire de 2006 a durci ces conditions.",
  "2007-immigration-4":
    "Le droit de vote des étrangers non communautaires aux élections municipales supposerait de réviser l'article 3 de la Constitution, qui réserve le corps électoral aux nationaux.",
  "2007-immigration-5":
    "Un amendement à la loi de 2007 sur l'immigration a prévu des tests ADN pour certains regroupements familiaux. Le Conseil constitutionnel en censurera l'essentiel en novembre 2007.",
  "2007-immigration-6":
    "La crise du Darfour, au Soudan, a déplacé plus de deux millions de personnes depuis 2003. Les réfugiés sont reconnus par l'Office français de protection des réfugiés et apatrides (OFPRA).",
  "2007-immigration-7":
    "L'attribution des logements sociaux relève de commissions, sur critères de ressources et de situation familiale. Le Conseil constitutionnel a jugé en 1990 que le législateur ne pouvait pas exclure les étrangers du bénéfice de prestations sociales.",
  "2007-immigration-8":
    "Aucun quota annuel d'entrées n'est voté par le Parlement en 2007 : les flux sont encadrés par les visas et les titres de séjour délivrés par les préfectures.",
  "2007-immigration-9":
    "La circulaire du 13 juin 2006 prévoit la régularisation des familles dont un enfant est scolarisé depuis au moins trois ans, à condition d'un séjour d'au moins cinq ans.",
  "2007-immigration-10":
    "Le contrat d'accueil et d'intégration (CAI), créé en 2003, prévoit une formation civique et linguistique pour les nouveaux arrivants, signée avec l'État.",

  "2007-securite-1":
    "La loi du 10 août 2007 crée des peines planchers : un minimum de peine s'impose au juge pour les récidivistes. Elles seront supprimées par la loi du 15 août 2014.",
  "2007-securite-2":
    "La vidéosurveillance de l'espace public est autorisée sous contrôle préfectoral depuis la loi de 1995. Le plan gouvernemental de 2007 prévoit de multiplier le nombre de caméras.",
  "2007-securite-3":
    "Les émeutes de l'automne 2005 ont suivi la mort de deux adolescents à Clichy-sous-Bois, poursuivis par des policiers. Elles ont duré trois semaines et conduit au décret d'état d'urgence.",
  "2007-securite-4":
    "Les contrôles d'identité sont possibles sur réquisition du procureur ou pour prévenir une atteinte à l'ordre public. La jurisprudence exige des éléments objectifs, indépendants de l'apparence physique.",
  "2007-securite-5":
    "L'excuse de minorité atténue de moitié les peines encourues par les mineurs ; elle peut être écartée pour les plus de 16 ans. La loi de 2002 a créé des centres éducatifs fermés.",
  "2007-securite-6":
    "Une personne placée en garde à vue peut être assistée d'un avocat à partir de la 20e heure pour les crimes et délits graves. Le droit à la présence de l'avocat sera élargi par la loi du 14 avril 2011.",
  "2007-securite-7":
    "La rétention de sûreté consiste à maintenir en détention, après l'exécution de leur peine, certains criminels jugés dangereux. Elle sera créée par la loi du 25 février 2008.",
  "2007-securite-8":
    "La consommation de cannabis est un délit depuis 1970, puni d'un an d'emprisonnement et de 3 750 euros d'amende. Les simples usagers font rarement l'objet de poursuites.",
  "2007-securite-9":
    "La police de proximité, généralisée à partir de 1999, a été recentrée depuis 2003 sur des unités de quartier rattachées aux circonscriptions de sécurité publique.",
  "2007-securite-10":
    "Les agents de police municipale sont armés ou non selon la commune. L'armement est autorisé par convention avec l'État depuis la loi de 1999, et se généralise dans les villes moyennes.",

  "2007-ecologie-1":
    "Le nucléaire fournit près de 80 % de l'électricité française en 2007, avec 58 réacteurs en service. Aucun réacteur n'a été fermé depuis l'arrêt de Superphénix en 1997.",
  "2007-ecologie-2":
    "Le Grenelle de l'environnement réunit à l'automne 2007 l'État, les collectivités, les ONG et les syndicats pour fixer des objectifs sur le climat, l'énergie et les transports.",
  "2007-ecologie-3":
    "La taxe carbone, ou contribution climat-énergie, taxerait les émissions de CO2 liées aux énergies fossiles. Aucune contribution de ce type n'existe en France en 2007.",
  "2007-ecologie-4":
    "Le nucléaire n'émet quasiment pas de CO2 en production. La France s'en sert comme argument dans les négociations climatiques, alors que plusieurs pays européens ont engagé une sortie.",
  "2007-ecologie-5":
    "Les cultures d'OGM autorisées en France sont soumises à l'évaluation de l'Agence française de sécurité sanitaire des aliments. Elles concernent surtout le maïs, et les essais sont très contestés.",
  "2007-ecologie-6":
    "Un seul EPR est engagé en France en 2007 : celui de Flamanville, dont le chantier démarre. Le retard du réacteur finlandais du même type nourrit les critiques sur la filière.",
  "2007-ecologie-7":
    "L'éolien est freiné par les recours contre les permis de construire et par la protection des paysages. La France compte environ 2 000 mégawatts raccordés en 2007.",
  "2007-ecologie-8":
    "Les exploitations agricoles doivent respecter la directive européenne sur les nitrates et la conditionnalité des aides. Les organisations agricoles dénoncent une surtransposition des règles par la France.",
  "2007-ecologie-9":
    "Le Grenelle fixe l'objectif de doubler les réseaux de transports urbains et de construire 2 000 km de lignes de tramway. La fréquentation des réseaux repart à la hausse depuis 2005.",
  "2007-ecologie-10":
    "La chasse est reconnue comme activité rurale par la loi de 2000. Elle s'exerce sur plus de la moitié du territoire métropolitain, avec un permis national délivré chaque année.",

  "2007-europe-1":
    "Le référendum du 29 mai 2005 a rejeté le traité constitutionnel européen avec 54,7 % des voix, alors que douze pays l'avaient déjà ratifié.",
  "2007-europe-2":
    "Un traité simplifié est en préparation pour sortir de la crise institutionnelle ouverte par les « non » français et néerlandais de 2005. La ratification parlementaire, sans référendum, est la voie annoncée.",
  "2007-europe-3":
    "La Turquie est candidate depuis 1999 et les négociations d'adhésion sont ouvertes depuis 2005. Plusieurs États membres lui préfèrent un « partenariat privilégié ».",
  "2007-europe-4":
    "L'Union s'est dotée en 1999 d'objectifs de défense autonomes, avec une force de réaction rapide. La plupart de ses États membres appartiennent aussi à l'OTAN, qui fournit l'essentiel des moyens.",
  "2007-europe-5":
    "L'euro est la monnaie unique de treize pays en 2007. Son cours face au dollar atteint des sommets, ce qui pénalise les exportateurs et allège la facture des importations.",
  "2007-europe-6":
    "La primauté du droit communautaire sur la loi nationale est établie par la Cour de justice depuis 1964 et reconnue par la Constitution française depuis 1992.",
  "2007-europe-7":
    "L'article 88-5 de la Constitution, issu de 2005, impose un référendum pour toute nouvelle adhésion, sauf si le Parlement adopte une motion à la majorité des trois cinquièmes.",
  "2007-europe-8":
    "La directive sur les services, dite Bolkestein, a été adoptée en 2006 après avoir été recentrée sur la libre prestation de services, en excluant notamment l'application du droit du travail du pays d'accueil.",
  "2007-europe-9":
    "Les députés sont élus au scrutin majoritaire uninominal à deux tours. La proportionnelle intégrale est réclamée par plusieurs partis pour corriger l'écart entre voix et sièges.",
  "2007-europe-10":
    "Un parlementaire peut cumuler son mandat avec une fonction exécutive locale. La limitation à deux mandats locaux de même nature date de 1985 ; un texte interdisant le cumul est annoncé.",

  "2007-international-1":
    "La France déploie environ 3 000 soldats en Afghanistan, au sein de la force internationale de l'OTAN et aux côtés des Américains. Le retrait des troupes de combat s'achèvera fin 2012.",
  "2007-international-2":
    "La dissuasion nucléaire représente près d'un dixième du budget de la défense et repose sur deux composantes, océanique et aérienne. Aucune remise en cause n'a eu lieu depuis 1996.",
  "2007-international-3":
    "La France est membre de l'Alliance atlantique depuis 1949 mais a quitté son commandement militaire intégré en 1966. Elle y reviendra en 2009.",
  "2007-international-4":
    "En 2003, la France a refusé de participer à l'intervention américaine en Irak sans mandat explicite du Conseil de sécurité, provoquant une grave crise diplomatique avec Washington.",
  "2007-international-5":
    "Le budget de la défense représente environ 2 % du PIB en 2007. La loi de programmation militaire 2003-2008 a stabilisé les effectifs après la fin de la conscription.",
  "2007-international-6":
    "La force de dissuasion française n'est pas placée sous commandement de l'OTAN : son emploi reste une décision nationale, même si la France participe au groupe de planification nucléaire de l'Alliance.",
  "2007-international-7":
    "La France consacre environ 0,4 % de son PIB à l'aide publique au développement. L'objectif de 0,7 % fixé par l'ONU en 1970 n'est atteint que par cinq pays.",
  "2007-international-8":
    "Le Kosovo est administré par les Nations unies depuis 1999. Sa déclaration d'indépendance, en février 2008, sera reconnue par une soixantaine d'États dont les États-Unis et une majorité de pays de l'Union.",
  "2007-international-9":
    "La Charte des Nations unies réserve au Conseil de sécurité l'autorisation de l'usage de la force, sauf en cas de légitime défense.",
  "2007-international-10":
    "La France figure parmi les quatre premiers exportateurs mondiaux d'armement en 2007. Chaque contrat est examiné par une commission interministérielle et fait l'objet d'un rapport annuel au Parlement.",

  "2007-societe-1":
    "Le pacte civil de solidarité (PACS) de 1999 offre aux couples de même sexe un cadre de vie commune, sans mariage ni filiation commune. L'Espagne a ouvert le mariage en 2005.",
  "2007-societe-2":
    "L'adoption conjointe est réservée aux couples mariés. Une personne seule peut adopter depuis 1966, mais son orientation sexuelle ne peut pas être un motif de refus.",
  "2007-societe-3":
    "La gestation pour autrui (GPA) est interdite en France depuis les lois de bioéthique de 1994 : toute convention portant sur la procréation est nulle. Des couples se tournent vers l'étranger.",
  "2007-societe-4":
    "La loi de 2005 sur la fin de vie, dite loi Leonetti, interdit l'acharnement thérapeutique et permet d'arrêter des traitements, sans dépénaliser l'euthanasie.",
  "2007-societe-5":
    "La loi du 15 mars 2004 interdit les signes religieux ostensibles dans les écoles, collèges et lycées publics. Elle ne s'applique pas à l'université, où le voile reste admis sous conditions.",
  "2007-societe-6":
    "La loi de 2004 ne concerne que l'école publique. Dans l'espace public, la liberté de conscience et de religion protège le port de signes, sauf trouble à l'ordre public ou nécessité de service.",
  "2007-societe-7":
    "En 2007, aucune obligation légale de mixité ne s'applique aux conseils d'administration des entreprises. Seules les élections politiques sont soumises à des règles de parité depuis 2000.",
  "2007-societe-8":
    "Le quotient familial réduit l'impôt sur le revenu selon le nombre d'enfants. L'avantage procuré par chaque demi-part supplémentaire est plafonné, et ce plafond a été relevé en 2006.",
  "2007-societe-9":
    "Le budget du ministère de la Culture atteint environ 2,9 milliards d'euros en 2007. Le crédit d'impôt cinéma, les quotas de diffusion et le prix unique du livre protègent la production française.",
  "2007-societe-10":
    "Le service militaire est suspendu depuis 1997 et remplacé par la journée d'appel de préparation à la défense. Un service civil volontaire a été créé en 2006 pour les jeunes de 16 à 25 ans.",
};
