import type { RawContexts, RawYear } from "./types";

/**
 * Présidentielle 2022 — pouvoir d'achat et inflation, guerre en Ukraine, Covid,
 * retraite à 65 ans, relance du nucléaire, zones à faibles émissions.
 */
export const RAW_2022: RawYear = {
  economie: [
    ["L'impôt de solidarité sur la fortune doit être rétabli.", "redistribution", 1, { express: true }],
    ["L'impôt sur les successions doit être fortement réduit.", "redistribution", -1, { express: true }],
    ["Le chèque alimentaire est une bonne réponse à l'inflation.", "redistribution", 1],
    ["La prime exceptionnelle de pouvoir d'achat doit être généralisée.", "redistribution", 1],
    ["Le déficit public doit être réduit avant 2027.", "dette", 1],
    ["L'État doit reprendre 100 % du capital d'EDF.", "etat-economie", 1],
    ["La réindustrialisation doit être financée par l'argent public.", "etat-economie", 1],
    ["Le SMIC doit être porté à 1 500 euros net.", "redistribution", 1],
    ["La « flat tax » sur les revenus du capital doit être supprimée.", "redistribution", 1],
    ["La France doit instaurer un impôt sur les super-profits.", "redistribution", 1],
  ],
  travail: [
    ["Reporter l'âge légal de départ à la retraite à 65 ans est indispensable.", "retraites", 1, { express: true }],
    ["La retraite à 60 ans doit être rétablie.", "retraites", -1, { express: true }],
    ["Les 35 heures doivent être remises en cause.", "flexibilite-travail", 1],
    ["La réforme de l'assurance chômage de 2021 doit être abrogée.", "flexibilite-travail", -1],
    ["Les salaires doivent augmenter en priorité sur les profits.", "redistribution", 1],
    ["Le télétravail doit être un droit opposable.", "flexibilite-travail", -1],
    ["Le nombre de fonctionnaires doit être réduit.", "etat-economie", -1],
    ["Les pensions doivent être indexées sur l'inflation.", "redistribution", 1],
    ["Les régimes spéciaux de retraite doivent être supprimés.", "retraites", 1],
    ["La pénibilité doit être prise en compte dans la réforme des retraites.", "retraites", -1],
  ],
  social: [
    ["Le pass sanitaire était une atteinte inacceptable aux libertés.", "libertes-publiques", 1, { express: true }],
    ["L'obligation vaccinale des soignants était justifiée.", "libertes-publiques", -1, { express: true }],
    ["La suppression du pass vaccinal au printemps 2022 était justifiée.", "libertes-publiques", 1],
    ["Le reste à charge zéro doit être étendu aux soins courants.", "universalite-sociale", 1],
    ["L'aide médicale d'État doit être supprimée.", "immigration", 1],
    ["Les déserts médicaux doivent être traités par l'obligation d'installation des médecins.", "universalite-sociale", 1],
    ["Les retraites par capitalisation doivent être encouragées.", "retraites", 1],
    ["La dépendance doit être financée par la solidarité nationale.", "universalite-sociale", 1],
    ["Le RSA doit être conditionné à 15 heures d'activité.", "universalite-sociale", -1],
    ["La PMA doit être prise en charge par la Sécurité sociale.", "universalite-sociale", 1],
  ],
  education: [
    ["Les enseignants doivent être mieux payés, y compris en début de carrière.", "education-egalite", 1, { express: true }],
    ["Le baccalauréat doit être réformé avec plus de contrôle continu.", "education-egalite", 1, { express: true }],
    ["Les élèves doivent être notés et classés dès le primaire.", "education-egalite", -1],
    ["L'université doit sélectionner ses étudiants à l'entrée.", "education-egalite", -1],
    ["Les écoles doivent pouvoir recruter elles-mêmes leurs enseignants.", "education-egalite", -1],
    ["Les zones d'éducation prioritaires doivent recevoir des moyens renforcés.", "education-egalite", 1],
    ["L'apprentissage doit être développé dès 15 ans.", "education-egalite", -1],
    ["L'école privée ne doit plus être financée sur fonds publics.", "laicite", 1],
    ["L'uniforme doit être expérimenté à l'école.", "autorite", 1],
    ["La laïcité doit être renforcée à l'école par une charte.", "laicite", 1],
  ],
  immigration: [
    ["La préférence nationale doit s'appliquer aux aides sociales.", "immigration", 1, { express: true }],
    ["Les régularisations des travailleurs sans papiers sont nécessaires.", "immigration", -1, { express: true }],
    ["Le droit du sol doit être remis en cause.", "immigration", 1],
    ["Les quotas migratoires doivent être votés par le Parlement.", "immigration", 1],
    ["L'aide médicale d'État doit être maintenue.", "immigration", -1],
    ["Les demandes d'asile doivent être examinées dans des pays tiers.", "immigration", 1],
    ["Le droit de vote des étrangers aux élections municipales doit être accordé.", "immigration", -1],
    ["La double nationalité doit être supprimée.", "immigration", 1],
    ["L'accueil des réfugiés ukrainiens doit être facilité.", "immigration", -1],
    ["La naturalisation doit exiger un niveau de français plus élevé.", "immigration", 1],
  ],
  securite: [
    ["Les peines doivent être systématiquement exécutées, même courtes.", "autorite", 1, { express: true }],
    ["La vidéosurveillance doit être développée dans l'espace public.", "libertes-publiques", -1, { express: true }],
    ["La police doit pouvoir utiliser les drones et la reconnaissance faciale.", "libertes-publiques", -1],
    ["Le cannabis doit être légalisé et encadré.", "libertes-publiques", 1],
    ["La présomption de légitime défense des policiers doit être instaurée.", "autorite", 1],
    ["Les mineurs délinquants doivent être jugés plus rapidement.", "autorite", 1],
    ["Les contrôles au faciès doivent être sanctionnés.", "libertes-publiques", 1],
    ["La prévention sociale compte plus que la répression.", "autorite", -1],
    ["Les quartiers prioritaires doivent recevoir plus de policiers.", "autorite", 1],
    ["L'armement de la police municipale doit être généralisé.", "autorite", 1],
  ],
  ecologie: [
    ["La France doit construire de nouveaux réacteurs nucléaires.", "nucleaire", 1, { express: true }],
    ["Les zones à faibles émissions doivent être abandonnées.", "ecologie-contrainte", -1, { express: true }],
    ["La France doit sortir du nucléaire civil.", "nucleaire", -1],
    ["La taxe carbone doit augmenter.", "ecologie-contrainte", 1],
    ["Les éoliennes doivent être développées.", "ecologie-contrainte", 1],
    ["Le glyphosate doit être interdit.", "ecologie-contrainte", 1],
    ["La France doit cesser d'explorer les hydrocarbures.", "ecologie-contrainte", 1],
    ["Les normes environnementales freinent trop l'agriculture française.", "ecologie-contrainte", -1],
    ["La rénovation thermique des logements doit être massivement subventionnée.", "ecologie-contrainte", 1],
    ["L'achat de voitures électriques doit être massivement subventionné.", "ecologie-contrainte", 1],
  ],
  europe: [
    ["La présidence française de l'Union européenne devait déboucher sur une réforme des traités.", "europe", 1, { express: true }],
    ["La France doit sortir de l'euro.", "europe", -1, { express: true }],
    ["L'Union européenne doit se doter d'une défense commune.", "europe", 1],
    ["Le droit européen doit primer sur la loi française.", "europe", 1],
    ["L'Ukraine doit obtenir le statut de candidat à l'Union européenne.", "europe", 1],
    ["Les frontières de Schengen doivent être rétablies.", "europe", -1],
    ["L'Union européenne doit mutualiser sa dette.", "europe", 1],
    ["La France doit quitter l'OTAN.", "alliances", -1],
    ["Le cumul des mandats doit être interdit.", "institutions", 1, { open: true }],
    ["Le référendum d'initiative citoyenne doit être instauré.", "institutions", 1],
  ],
  international: [
    ["La France doit livrer des armes à l'Ukraine.", "alliances", 1, { express: true }],
    ["La France doit quitter le commandement intégré de l'OTAN.", "alliances", -1, { express: true }],
    ["La France doit augmenter son budget de défense.", "defense", 1],
    ["La dissuasion nucléaire doit être maintenue.", "defense", 1],
    ["La France doit accueillir les réfugiés ukrainiens.", "immigration", -1],
    ["Des sanctions économiques sévères contre la Russie sont justifiées.", "alliances", 1],
    ["La France doit cesser d'exporter des armes.", "defense", -1],
    ["La France doit reconnaître l'État palestinien.", "alliances", -1],
    ["L'aide publique au développement doit être préservée.", "defense", -1],
    ["Le retrait des troupes françaises du Mali était la bonne décision.", "defense", -1],
  ],
  societe: [
    ["L'aide active à mourir doit être légalisée.", "progressisme-societal", 1, { express: true }],
    ["La procréation médicalement assistée doit être ouverte à toutes les femmes, y compris les couples de femmes.", "progressisme-societal", 1, { express: true }],
    ["La gestation pour autrui doit être autorisée.", "progressisme-societal", 1],
    ["Le port du voile doit être interdit dans l'espace public.", "laicite", 1],
    ["Le port du voile doit être interdit dans les compétitions sportives.", "laicite", 1],
    ["La famille traditionnelle doit rester protégée par la loi.", "progressisme-societal", -1],
    ["Le droit à l'IVG doit être inscrit dans la Constitution.", "progressisme-societal", 1],
    ["La parité doit être imposée dans les conseils d'administration.", "progressisme-societal", 1],
    ["Les plateformes doivent être responsables des contenus illégaux.", "autorite", 1],
    ["La culture doit être financée à la hauteur de son rôle social.", "redistribution", 1],
  ],
};

/**
 * Un contexte par identifiant de question du scrutin : sigles développés,
 * mesures, montants et état du droit tel qu'il était en 2022.
 */
export const CONTEXT_2022: RawContexts = {
  "2022-economie-1":
    "L'impôt sur la fortune immobilière (IFI), qui a remplacé l'impôt de solidarité sur la fortune en 2018, ne taxe que l'immobilier après un abattement de 1,3 million d'euros. Rétablir l'ISF élargirait l'assiette aux actifs financiers et professionnels.",
  "2022-economie-2":
    "Les droits de succession comportent un abattement de 100 000 euros par enfant et par parent depuis 2011, et les transmissions entre époux sont totalement exonérées.",
  "2022-economie-3":
    "Le chèque alimentaire, annoncé en 2020 pour soutenir les ménages modestes, n'a jamais été généralisé. Une aide alimentaire ponctuelle a été versée à certains foyers en 2022.",
  "2022-economie-4":
    "La prime exceptionnelle de pouvoir d'achat, créée en décembre 2018 en réponse au mouvement des Gilets jaunes, a été reconduite et élargie chaque année. Elle est exonérée d'impôt et de cotisations sous conditions de rémunération.",
  "2022-economie-5":
    "Le déficit public atteint 6,5 % du PIB en 2021, après les dépenses liées à la crise sanitaire, et la dette publique dépasse 115 % du PIB, un niveau inédit depuis la Seconde Guerre mondiale.",
  "2022-economie-6":
    "EDF est une société dont l'État détient 84 % du capital en 2022. La renationalisation complète a été annoncée en juillet 2022, dans un contexte de crise énergétique.",
  "2022-economie-7":
    "L'industrie représente environ 10 % du PIB et 12 % de l'emploi en France, contre 20 % il y a quarante ans. Le plan France 2030, lancé en 2021, prévoit 30 milliards d'euros d'investissements.",
  "2022-economie-8":
    "Le SMIC net mensuel est d'environ 1 270 euros en 2022. Le porter à 1 500 euros représenterait une hausse de près de 18 %.",
  "2022-economie-9":
    "Le prélèvement forfaitaire unique de 30 % sur les revenus du capital a été instauré en 2018. Sa suppression ramènerait ces revenus au barème de l'impôt sur le revenu, jusqu'à 45 %.",
  "2022-economie-10":
    "Une taxe sur les superprofits viserait les bénéfices exceptionnels des entreprises de l'énergie. Une contribution sur les rentes des producteurs d'électricité a été adoptée en 2022.",

  "2022-travail-1":
    "L'âge légal de départ à la retraite est de 62 ans depuis 2010, avec un âge du taux plein à 67 ans. La réforme adoptée en 2023 portera l'âge légal à 64 ans.",
  "2022-travail-2":
    "La retraite à 60 ans a été instaurée en 1982 puis repoussée à 62 ans par la réforme de 2010. Un retour à 60 ans coûterait plusieurs dizaines de milliards d'euros par an selon le Conseil d'orientation des retraites.",
  "2022-travail-3":
    "La durée légale de 35 heures s'applique depuis 2002. La loi de 2016 permet à un accord d'entreprise de déroger à la durée collective, dans la limite de 46 heures par semaine.",
  "2022-travail-4":
    "La réforme de l'assurance chômage de 2021 a modifié le calcul de l'allocation, désormais fondé sur les jours travaillés des 24 derniers mois. Ses règles sont modulées selon la conjoncture depuis 2022.",
  "2022-travail-5":
    "Le partage de la valeur ajoutée entre travail et capital est stable depuis les années 1990, autour de deux tiers pour le travail. Avec l'inflation de 2022, les salaires réels reculent.",
  "2022-travail-6":
    "L'accord national interprofessionnel de novembre 2020 encadre le télétravail dans le privé. Un droit opposable permettrait au salarié d'imposer le télétravail à son employeur.",
  "2022-travail-7":
    "La France compte environ 5,6 millions d'agents publics. Le débat porte sur la réduction des effectifs de l'État et sur les fermetures de services publics en zone rurale.",
  "2022-travail-8":
    "Les pensions de retraite sont revalorisées chaque année selon l'inflation, avec un décalage de quelques mois. La sous-indexation décidée en 2023 et 2024 a été contestée.",
  "2022-travail-9":
    "Les régimes spéciaux de la RATP, de la SNCF et des industries électriques maintiennent des départs anticipés. La réforme de 2023 prévoit leur fermeture progressive aux nouveaux entrants.",
  "2022-travail-10":
    "Le compte professionnel de prévention, créé en 2017, permet d'accumuler des points pour partir plus tôt en cas d'exposition à des facteurs de risque. Dix facteurs de pénibilité sont reconnus.",

  "2022-social-1":
    "Le pass sanitaire, en vigueur de juillet 2021 à août 2022, conditionnait l'accès à de nombreux lieux à une vaccination complète ou à un test négatif. Le pass vaccinal l'a remplacé de janvier à mars 2022.",
  "2022-social-2":
    "L'obligation vaccinale des soignants est entrée en vigueur en septembre 2021, avec suspension des professionnels non vaccinés. Elle sera levée en mai 2023.",
  "2022-social-3":
    "Le pass vaccinal a été levé le 14 mars 2022, avec la fin de la plupart des restrictions sanitaires. L'obligation du port du masque prendra fin en août 2022.",
  "2022-social-4":
    "Le « reste à charge zéro » couvre les lunettes, les prothèses dentaires et auditives depuis 2019 et 2021. Son extension aux soins courants supposerait de relever les tarifs remboursés.",
  "2022-social-5":
    "L'aide médicale d'État couvre les soins des étrangers en situation irrégulière présents depuis plus de trois mois, pour un coût estimé autour d'un milliard d'euros par an.",
  "2022-social-6":
    "Environ six millions de Français vivent dans une zone sous-dense en médecins généralistes. L'obligation d'installation, proposée par plusieurs élus, se heurte à la liberté d'installation des médecins libéraux.",
  "2022-social-7":
    "Les contrats d'épargne retraite individuelle complètent facultativement les régimes obligatoires, tous par répartition. Leur rôle est débattu face au vieillissement démographique.",
  "2022-social-8":
    "La perte d'autonomie est financée par l'allocation personnalisée d'autonomie, versée par les départements, et par l'assurance maladie. Un projet de loi sur le grand âge est annoncé depuis 2018.",
  "2022-social-9":
    "Le revenu de solidarité active complète les revenus du travail depuis 2009. Son conditionnement à 15 heures d'activité est expérimenté dans plusieurs départements depuis 2020.",
  "2022-social-10":
    "La procréation médicalement assistée est prise en charge par l'assurance maladie depuis la loi de bioéthique de 2021, qui l'a aussi ouverte aux couples de femmes et aux femmes seules.",

  "2022-education-1":
    "Le salaire des enseignants débutants est d'environ 1 800 euros net par mois en 2022. Les comparaisons internationales situent la France parmi les pays qui rémunèrent le moins leurs enseignants.",
  "2022-education-2":
    "La réforme du baccalauréat appliquée en 2021 porte la part du contrôle continu à 40 %, avec des épreuves de spécialité en terminale.",
  "2022-education-3":
    "Les élèves du primaire reçoivent des notes chiffrées et passent des évaluations nationales depuis 2018. Le débat porte aussi sur le classement des élèves et les évaluations à l'entrée en sixième.",
  "2022-education-4":
    "L'accès à la licence est ouvert à tous les bacheliers depuis la loi de 2018, mais les candidatures sont examinées au regard d'attendus et les filières peuvent classer les dossiers.",
  "2022-education-5":
    "Les enseignants sont recrutés par concours national puis affectés par l'État selon un mouvement annuel. Un recrutement local supposerait de modifier leur statut de fonctionnaires d'État.",
  "2022-education-6":
    "Les réseaux d'éducation prioritaire (REP et REP+) bénéficient d'effectifs réduits et de primes pour les enseignants. Le dédoublement des classes de CP et de CE1 y est généralisé depuis 2019.",
  "2022-education-7":
    "L'apprentissage est accessible dès 15 ans avec le préapprentissage depuis la loi de 2018, qui a aussi libéralisé l'ouverture des centres de formation et relevé la limite d'âge.",
  "2022-education-8":
    "Les établissements privés sous contrat reçoivent des fonds publics au titre de la loi Debré de 1959 et scolarisent environ 17 % des élèves.",
  "2022-education-9":
    "L'uniforme scolaire n'est pas imposé par la loi en 2022 : quelques établissements et communes l'expérimentent, la décision relevant des conseils d'administration.",
  "2022-education-10":
    "Une charte de la laïcité est affichée dans les établissements scolaires depuis 2013. Le principe de laïcité est inscrit dans la Constitution et encadré par la loi de 2004.",

  "2022-immigration-1":
    "Réserver certaines aides sociales aux nationaux supposerait une révision de la Constitution : le Conseil constitutionnel a jugé en 1993 que le législateur ne pouvait pas priver les étrangers en situation régulière de prestations sociales.",
  "2022-immigration-2":
    "Les régularisations relèvent des préfets, au cas par cas, sur critères de séjour, de travail et de liens familiaux. La loi de janvier 2024 introduira une procédure pour les métiers en tension.",
  "2022-immigration-3":
    "Le droit du sol permet à un enfant né en France de parents étrangers d'obtenir la nationalité à sa majorité, ou dès 13 ans sur demande après cinq ans de résidence.",
  "2022-immigration-4":
    "Aucun quota annuel contraignant d'immigration n'est voté par le Parlement en 2022. La loi de 2024 prévoira des objectifs chiffrés fixés pour trois ans.",
  "2022-immigration-5":
    "L'aide médicale d'État couvre les soins des étrangers en situation irrégulière présents depuis plus de trois mois. Son coût est estimé autour d'un milliard d'euros par an.",
  "2022-immigration-6":
    "Examiner les demandes d'asile dans des pays tiers suppose que ces États offrent des garanties suffisantes. Le Royaume-Uni a tenté une telle politique avec le Rwanda en 2022.",
  "2022-immigration-7":
    "Le droit de vote des étrangers aux élections municipales suppose une révision de l'article 3 de la Constitution. Une proposition de loi votée par l'Assemblée en 2022 n'a pas abouti au Sénat.",
  "2022-immigration-8":
    "La double nationalité est autorisée en France depuis 1973, sans limitation. Sa suppression supposerait de dénoncer des conventions internationales et de modifier le code civil.",
  "2022-immigration-9":
    "Après l'invasion russe de février 2022, l'Union européenne a activé pour la première fois la protection temporaire. Environ 100 000 Ukrainiens ont été accueillis en France en 2022.",
  "2022-immigration-10":
    "La naturalisation exige cinq ans de résidence, un niveau de français B1 depuis 2020 et une connaissance des valeurs de la République.",

  "2022-securite-1":
    "Une part importante des peines d'emprisonnement ferme n'est pas exécutée faute de places et de suivi. La France compte environ 70 000 détenus pour 60 000 places.",
  "2022-securite-2":
    "La vidéosurveillance de l'espace public est autorisée depuis la loi de 1995, sous contrôle préfectoral. Les caméras municipales se comptent en dizaines de milliers sur le territoire.",
  "2022-securite-3":
    "Les drones sont utilisés par les forces de l'ordre depuis 2020, sous le contrôle de la CNIL. La reconnaissance faciale dans l'espace public est en principe interdite par le règlement européen sur les données et par la loi informatique et libertés.",
  "2022-securite-4":
    "La consommation de cannabis reste un délit, assorti depuis 2020 d'une amende forfaitaire de 200 euros. La légalisation encadrée est défendue par plusieurs élus et associations.",
  "2022-securite-5":
    "Une présomption de légitime défense pour les policiers a été créée par la loi du 28 février 2017, lorsqu'ils font usage de leur arme après des sommations.",
  "2022-securite-6":
    "Les mineurs délinquants relèvent de tribunaux pour enfants. Le code de justice pénale des mineurs de 2021 a créé une audience unique et des procédures à délai rapproché.",
  "2022-securite-7":
    "Un contrôle au faciès est un contrôle d'identité fondé sur l'apparence ethnique. La jurisprudence exige des éléments objectifs, et le Défenseur des droits recommande depuis 2016 un récépissé remis à la personne contrôlée.",
  "2022-securite-8":
    "La prévention de la délinquance mobilise la politique de la ville, les conseils locaux de sécurité et la prévention spécialisée, dont les crédits ont diminué depuis 2010.",
  "2022-securite-9":
    "Les quartiers prioritaires de la politique de la ville concentrent une part importante des violences. Les effectifs de police y sont renforcés, notamment depuis la création des zones de sécurité prioritaires en 2012.",
  "2022-securite-10":
    "Les agents de police municipale peuvent être armés sur autorisation préfectorale depuis 1999. Ils sont près de 25 000 en 2022.",

  "2022-ecologie-1":
    "Le programme de six réacteurs EPR2, annoncé en février 2022 à Belfort, s'ajoute à l'EPR de Flamanville, toujours en construction. La mise en service du premier EPR2 est envisagée vers 2035.",
  "2022-ecologie-2":
    "Les zones à faibles émissions (ZFE), créées par la loi d'orientation des mobilités de 2019 et généralisées par la loi Climat et résilience de 2021, restreignent la circulation des véhicules les plus polluants dans les agglomérations de plus de 150 000 habitants.",
  "2022-ecologie-3":
    "Le nucléaire fournit environ 70 % de l'électricité française en 2022, une part en baisse en raison des arrêts de réacteurs pour maintenance et des problèmes de corrosion.",
  "2022-ecologie-4":
    "La contribution climat-énergie est de 44,6 euros la tonne de CO2 en 2022. Son montant est gelé depuis 2018, après le mouvement des Gilets jaunes.",
  "2022-ecologie-5":
    "La France compte environ 19 000 mégawatts d'éolien terrestre en 2022 et les premiers parcs en mer entrent en service. Le rythme d'installation reste inférieur aux objectifs.",
  "2022-ecologie-6":
    "L'autorisation européenne du glyphosate court jusqu'en décembre 2022 ; elle sera renouvelée pour dix ans en 2023. La France avait annoncé vouloir l'interdire, sans y parvenir.",
  "2022-ecologie-7":
    "La loi de 2017 interdit les nouveaux permis d'exploration d'hydrocarbures et prévoit l'arrêt de la production française en 2040. La France importe la quasi-totalité de son pétrole et de son gaz.",
  "2022-ecologie-8":
    "Les agriculteurs doivent respecter les directives européennes sur les nitrates et les pesticides ainsi que la conditionnalité des aides. Les organisations agricoles dénoncent une surtransposition française des règles.",
  "2022-ecologie-9":
    "Le parc compte environ 30 millions de résidences principales, dont près de cinq millions sont des passoires thermiques. MaPrimeRénov' soutient les travaux depuis 2020.",
  "2022-ecologie-10":
    "Le bonus écologique pour l'achat d'un véhicule électrique atteint 6 000 euros en 2022, sous plafond de prix. L'Union européenne fixe à 2035 la fin des ventes de voitures thermiques neuves.",

  "2022-europe-1":
    "La France a présidé le Conseil de l'Union européenne du 1er janvier au 30 juin 2022. La conférence sur l'avenir de l'Europe a rendu ses conclusions en mai 2022, sans ouvrir de révision des traités.",
  "2022-europe-2":
    "Sortir de l'euro impliquerait une dévaluation et un contrôle des capitaux ; les traités ne prévoient aucune clause de retrait. Plusieurs économistes en discutent les effets sur la dette.",
  "2022-europe-3":
    "La « boussole stratégique » adoptée en mars 2022 fixe les orientations de défense de l'Union européenne. Les capacités militaires restent toutefois très largement nationales.",
  "2022-europe-4":
    "La primauté du droit de l'Union sur la loi nationale est établie depuis 1964 et reconnue par la Constitution française depuis 1992.",
  "2022-europe-5":
    "L'Ukraine a obtenu le statut de candidat à l'Union européenne en juin 2022, quatre mois après l'invasion russe. Les négociations d'adhésion s'annoncent longues.",
  "2022-europe-6":
    "L'espace Schengen autorise le rétablissement temporaire des contrôles intérieurs en cas de menace. Plusieurs États y ont recouru depuis 2015.",
  "2022-europe-7":
    "Mutualiser la dette européenne suppose un emprunt commun, comme l'ont fait les 750 milliards d'euros du plan de relance de 2020. Plusieurs États du nord y restent réticents.",
  "2022-europe-8":
    "La France est membre de l'Alliance atlantique depuis 1949 et du commandement militaire intégré depuis 2009. Quitter l'OTAN supposerait de dénoncer le traité de Washington.",
  "2022-europe-9":
    "La loi du 14 février 2014 interdit le cumul d'un mandat parlementaire avec une fonction exécutive locale. Elle s'applique aux députés et aux sénateurs depuis 2017.",
  "2022-europe-10":
    "Le référendum d'initiative citoyenne permettrait à des citoyens, après un certain nombre de signatures, de provoquer un référendum. La Constitution prévoit depuis 2008 un référendum d'initiative partagée, porté par des parlementaires.",

  "2022-international-1":
    "Après l'invasion russe de février 2022, la France a livré à l'Ukraine des canons Caesar, des missiles antichars et des systèmes de défense aérienne.",
  "2022-international-2":
    "La France a réintégré le commandement militaire intégré de l'OTAN en 2009. Le quitter à nouveau ne signifierait pas sortir de l'Alliance atlantique.",
  "2022-international-3":
    "La loi de programmation militaire 2019-2025 porte l'effort de défense à 2 % du PIB en 2025. La guerre en Ukraine accélère les dépenses au-delà de cette trajectoire.",
  "2022-international-4":
    "La dissuasion nucléaire représente environ un dixième du budget de la défense. Le Président de la République a confirmé en 2020 son maintien pour les décennies à venir.",
  "2022-international-5":
    "Environ 100 000 Ukrainiens ont été accueillis en France en 2022. Ils bénéficient pour la première fois de la protection temporaire activée par l'Union européenne.",
  "2022-international-6":
    "L'Union européenne a adopté plusieurs trains de sanctions contre la Russie depuis février 2022 : gel des avoirs, embargo sur le pétrole, exclusion de banques du système interbancaire Swift.",
  "2022-international-7":
    "La France figure parmi les cinq premiers exportateurs mondiaux d'armement. Les ventes sont autorisées par une commission interministérielle et font l'objet d'un rapport annuel au Parlement.",
  "2022-international-8":
    "La France soutient la solution à deux États. La reconnaissance de l'État palestinien est réclamée par plusieurs partis alors que le processus de paix est interrompu depuis 2014.",
  "2022-international-9":
    "La France consacre environ 0,55 % de son PIB à l'aide publique au développement en 2021, en progression vers l'objectif de 0,7 % fixé par l'ONU.",
  "2022-international-10":
    "L'opération Barkhane, engagée en 2014, s'est achevée en 2022 après le retrait des forces françaises du Mali, en conflit avec la junte au pouvoir.",

  "2022-societe-1":
    "La loi Claeys-Leonetti de 2016 ouvre un droit à la sédation profonde et continue, sans légaliser l'euthanasie. Une convention citoyenne sur la fin de vie rendra ses conclusions en 2023.",
  "2022-societe-2":
    "La procréation médicalement assistée est ouverte aux couples de femmes et aux femmes seules depuis la loi de bioéthique de 2021, et prise en charge par l'assurance maladie.",
  "2022-societe-3":
    "La gestation pour autrui est interdite en France depuis les lois de bioéthique de 1994 : toute convention portant sur la procréation est déclarée nulle.",
  "2022-societe-4":
    "Dans l'espace public, la liberté de religion protège le port de signes, sauf trouble à l'ordre public ou nécessité de service. La loi de 2004 ne concerne que l'école publique.",
  "2022-societe-5":
    "La question du voile dans le sport relève des fédérations, qui peuvent imposer la neutralité religieuse en compétition. Plusieurs d'entre elles l'interdisent déjà.",
  "2022-societe-6":
    "Le mariage, le pacte civil de solidarité et le concubinage donnent des droits différents en matière de succession, de fiscalité et de filiation.",
  "2022-societe-7":
    "Le droit à l'avortement est garanti par la loi Veil de 1975. La liberté de recourir à l'interruption volontaire de grossesse sera inscrite dans la Constitution en mars 2024.",
  "2022-societe-8":
    "La loi du 27 janvier 2011 impose 40 % de femmes dans les conseils d'administration des grandes entreprises depuis 2017, sous peine de nullité des nominations.",
  "2022-societe-9":
    "Le règlement européen sur les services numériques (DSA), adopté à l'été 2022, obligera les plateformes à retirer rapidement les contenus illégaux et à évaluer leurs risques systémiques à partir de 2024.",
  "2022-societe-10":
    "Le budget du ministère de la Culture atteint environ quatre milliards d'euros en 2022. Le pass Culture, généralisé en 2021, bénéficie aux jeunes de 18 ans.",
};
