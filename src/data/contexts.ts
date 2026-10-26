import type { ElectionYear } from "./elections";

export interface EraTimelineEntry {
  date: string;
  label: string;
}

export interface EraContext {
  year: ElectionYear;
  /** Accroche affichée en tête de carte. */
  lead: string;
  /** Résumé du climat politique de l'élection. */
  summary: string;
  /** Trois à cinq enjeux de campagne, affichés en puces. */
  keyIssues: string[];
  /** Frise datée des événements qui structurent le débat. */
  timeline: EraTimelineEntry[];
  /** Ce qui n'existait pas encore à l'époque. */
  notYet: string[];
  sources: string[];
  /** Colonne « enjeu dominant » du tableau de la page Méthode. */
  dominantIssue: string;
  /** Colonne « fait marquant » du tableau de la page Méthode. */
  fact: string;
}

export const ERA_CONTEXTS: Record<ElectionYear, EraContext> = {
  2002: {
    year: 2002,
    lead: "Cinq ans de cohabitation, une monnaie nouvelle, et un séisme le soir du 21 avril.",
    summary:
      "Jacques Chirac et Lionel Jospin cohabitent depuis 1997. La campagne s'ouvre sur l'insécurité et les 35 heures, dans une France qui découvre les pièces et les billets en euros. Le 21 avril, Jean-Marie Le Pen élimine le Premier ministre sortant et provoque un réflexe républicain massif au second tour.",
    keyIssues: ["Insécurité", "35 heures", "21 avril", "Euro fiduciaire", "Corse"],
    timeline: [
      { date: "1er janvier 2002", label: "L'euro fiduciaire entre en circulation" },
      { date: "1998-2000", label: "Les deux lois Aubry passent le temps de travail à 35 heures" },
      { date: "1999", label: "Le PACS est voté, la couverture maladie universelle créée" },
      { date: "2000", label: "Le quinquennat est adopté par référendum" },
      { date: "21 avril 2002", label: "Jean-Marie Le Pen au second tour (16,9 %)" },
      { date: "5 mai 2002", label: "Jacques Chirac réélu avec 82,2 % des voix" },
    ],
    notYet: [
      "Les zones à faibles émissions et le pass sanitaire",
      "Le mariage pour tous (loi de 2013)",
      "L'euro comme monnaie unique de la France : il n'entre en poche qu'en 2002",
    ],
    sources: [
      "Ministère de l'Intérieur, résultats officiels du 1er tour",
      "Insee, chronologie de l'introduction de l'euro fiduciaire",
    ],
    dominantIssue: "Insécurité et cohabitation",
    fact: "Le 21 avril, Lionel Jospin est éliminé au 1er tour avec 16,2 % des voix.",
  },
  2007: {
    year: 2007,
    lead: "« La rupture » face à « l'ordre juste » : une campagne sur le travail, la dette et l'identité.",
    summary:
      "Deux ans après les émeutes de 2005 et le rejet du traité constitutionnel, la droite et la gauche promettent chacune une rupture. Nicolas Sarkozy capitalise sur la sécurité et le pouvoir d'achat, Ségolène Royal sur la démocratie participative. La dette publique et le CPE restent au centre des débats.",
    keyIssues: ["Rupture", "Émeutes de 2005", "CPE", "Bouclier fiscal", "Référendum de 2005"],
    timeline: [
      { date: "29 mai 2005", label: "Le traité constitutionnel européen est rejeté par référendum (54,7 % de non)" },
      { date: "octobre-novembre 2005", label: "Émeutes urbaines après la mort de deux adolescents à Clichy-sous-Bois" },
      { date: "2006", label: "Le contrat première embauche est créé puis retiré après les mobilisations" },
      { date: "2007", label: "Le bouclier fiscal est plafonné à 50 % des revenus" },
      { date: "22 avril 2007", label: "Nicolas Sarkozy arrive en tête du 1er tour (31,2 %)" },
      { date: "6 mai 2007", label: "Nicolas Sarkozy élu avec 53,1 % des voix" },
    ],
    notYet: [
      "Le revenu de solidarité active, généralisé en 2009",
      "La taxe carbone, créée en 2014",
      "Le mariage pour tous et la loi de 2013 sur l'école",
    ],
    sources: [
      "Ministère de l'Intérieur, résultats officiels du 1er tour",
      "Conseil constitutionnel, décision sur le traité de Lisbonne (2008)",
    ],
    dominantIssue: "Travail, dette et identité nationale",
    fact: "Le CPE, créé en 2006, est retiré après des semaines de mobilisation.",
  },
  2012: {
    year: 2012,
    lead: "La crise de l'euro rattrape la campagne : austérité, traité budgétaire et retraite à 62 ans.",
    summary:
      "La France a perdu son triple A en janvier 2012 et la zone euro vacille depuis la crise grecque. Nicolas Sarkozy défend le traité budgétaire et la TVA sociale, François Hollande promet de renégocier le traité, de taxer à 75 % les très hauts revenus et d'ouvrir le mariage aux couples de même sexe.",
    keyIssues: ["Crise de l'euro", "Traité budgétaire", "Retraite à 62 ans", "Taxe à 75 %", "Fukushima"],
    timeline: [
      { date: "mars 2011", label: "L'accident de Fukushima relance le débat sur le nucléaire" },
      { date: "août 2011", label: "La réforme des retraites porte l'âge légal à 62 ans" },
      { date: "janvier 2012", label: "La France perd son triple A" },
      { date: "2 mars 2012", label: "Signature du traité sur la stabilité (TSCG)" },
      { date: "22 avril 2012", label: "François Hollande devance Nicolas Sarkozy (28,6 % contre 27,2 %)" },
      { date: "6 mai 2012", label: "François Hollande élu avec 51,6 % des voix" },
    ],
    notYet: [
      "La loi sur le mariage pour tous, promulguée en 2013",
      "Le crédit d'impôt pour la compétitivité et l'emploi (CICE), créé en 2013",
      "La contribution climat-énergie et la PMA ouverte à toutes les femmes",
    ],
    sources: [
      "Ministère de l'Intérieur, résultats officiels du 1er tour",
      "Traité sur la stabilité, la coordination et la gouvernance (TSCG), 2012",
    ],
    dominantIssue: "Crise de l'euro et traité budgétaire",
    fact: "Le traité budgétaire est signé le 2 mars 2012, en pleine campagne.",
  },
  2017: {
    year: 2017,
    lead: "Une recomposition inédite : l'état d'urgence, le Brexit, et deux outsiders au second tour.",
    summary:
      "La campagne se déroule sous état d'urgence, après les attentats de 2015 et 2016, et dans le sillage du Brexit. François Fillon s'effondre dans les affaires, Benoît Hamon porte le revenu universel, Jean-Luc Mélenchon et Marine Le Pen contestent l'euro. Emmanuel Macron, candidat pour la première fois, termine en tête.",
    keyIssues: ["État d'urgence", "Brexit", "Loi travail de 2016", "Revenu universel", "Sortie de l'euro"],
    timeline: [
      { date: "13 novembre 2015", label: "Attentats de Paris : l'état d'urgence est déclenché" },
      { date: "23 juin 2016", label: "Le Royaume-Uni vote la sortie de l'Union européenne" },
      { date: "8 août 2016", label: "La loi travail est promulguée après des mois de mobilisation" },
      { date: "novembre 2016", label: "François Fillon remporte la primaire de la droite" },
      { date: "23 avril 2017", label: "Emmanuel Macron et Marine Le Pen qualifiés pour le second tour" },
      { date: "7 mai 2017", label: "Emmanuel Macron élu avec 66,1 % des voix" },
    ],
    notYet: [
      "L'impôt sur la fortune immobilière, qui remplace l'ISF en 2018",
      "Le prélèvement forfaitaire unique de 30 % sur les revenus du capital",
      "La suppression de la taxe d'habitation, engagée en 2018",
    ],
    sources: [
      "Ministère de l'Intérieur, résultats officiels du 1er tour",
      "Loi du 8 août 2016 relative au travail, à la modernisation du dialogue social",
    ],
    dominantIssue: "Recomposition et contestation de l'euro",
    fact: "Jean-Luc Mélenchon rate le second tour pour 590 000 voix.",
  },
  2022: {
    year: 2022,
    lead: "Une campagne de guerre et d'inflation : pouvoir d'achat, Covid, retraites et nucléaire.",
    summary:
      "La guerre en Ukraine éclate trois semaines avant le premier tour, après deux ans de crise sanitaire. Le pouvoir d'achat domine les préoccupations, la réforme des retraites revient au centre, et la relance du nucléaire est annoncée en février. Le duel de 2017 est reconduit, avec un écart nettement réduit.",
    keyIssues: ["Pouvoir d'achat", "Guerre en Ukraine", "Retraite à 65 ans", "Relance du nucléaire", "ZFE"],
    timeline: [
      { date: "mars 2020", label: "Le premier confinement ouvre deux ans de crise sanitaire" },
      { date: "juillet 2021", label: "Le pass sanitaire est instauré" },
      { date: "février 2022", label: "Emmanuel Macron annonce la construction de six EPR2" },
      { date: "24 février 2022", label: "Début de l'invasion russe en Ukraine" },
      { date: "10 avril 2022", label: "Emmanuel Macron et Marine Le Pen au second tour" },
      { date: "24 avril 2022", label: "Emmanuel Macron réélu avec 58,5 % des voix" },
    ],
    notYet: [
      "La réforme des retraites à 64 ans, adoptée en 2023",
      "La constitutionnalisation de l'IVG, votée en 2024",
      "La Convention citoyenne sur la fin de vie, réunie en 2023",
    ],
    sources: [
      "Ministère de l'Intérieur, résultats officiels du 1er tour",
      "Gouvernement, plan France Relance et programme EPR2 (2022)",
    ],
    dominantIssue: "Pouvoir d'achat, guerre et retraites",
    fact: "La guerre en Ukraine éclate le 24 février 2022, en pleine campagne.",
  },
};

export function eraContext(year: ElectionYear): EraContext {
  return ERA_CONTEXTS[year];
}
