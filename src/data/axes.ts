/**
 * Les vingt axes idéologiques qui structurent les positions des archétypes.
 *
 * Chaque axe est bipolaire : une position positive (jusqu'à +2) exprime le
 * premier pôle décrit, une position négative (jusqu'à −2) le second. Les
 * questions portent l'axe qu'elles mobilisent et une polarité (`1` si l'accord
 * avec l'énoncé correspond au pôle positif, `-1` s'il correspond au pôle
 * négatif). La position d'un archétype sur une question se déduit donc de
 * `axes[axe] × polarité`, bornée à [−2, +2].
 */
export type AxisId =
  | "redistribution"
  | "etat-economie"
  | "dette"
  | "flexibilite-travail"
  | "retraites"
  | "universalite-sociale"
  | "education-egalite"
  | "immigration"
  | "autorite"
  | "libertes-publiques"
  | "ecologie-contrainte"
  | "nucleaire"
  | "ruralite"
  | "europe"
  | "alliances"
  | "defense"
  | "progressisme-societal"
  | "laicite"
  | "protectionnisme"
  | "institutions";

export interface Axis {
  id: AxisId;
  label: string;
  /** Pôle positif : la valeur +2 y correspond. */
  positivePole: string;
  /** Pôle négatif : la valeur −2 y correspond. */
  negativePole: string;
}

export const AXES: Axis[] = [
  {
    id: "redistribution",
    label: "Redistribution",
    positivePole: "réduire les inégalités par l'impôt et les transferts",
    negativePole: "laisser le marché et la propriété arbitrer les revenus",
  },
  {
    id: "etat-economie",
    label: "Place de l'État",
    positivePole: "État interventionniste, planificateur, actionnaire",
    negativePole: "marché, concurrence, secteur privé",
  },
  {
    id: "dette",
    label: "Dette et dépense publique",
    positivePole: "réduire la dette et la dépense en priorité",
    negativePole: "assumer la dépense publique et la relance",
  },
  {
    id: "flexibilite-travail",
    label: "Droit du travail",
    positivePole: "assouplir et flexibiliser le droit du travail",
    negativePole: "protéger les salariés et encadrer les ruptures",
  },
  {
    id: "retraites",
    label: "Retraites",
    positivePole: "reculer l'âge de départ, développer la capitalisation",
    negativePole: "partir tôt, défendre la répartition et la pénibilité",
  },
  {
    id: "universalite-sociale",
    label: "Protection sociale",
    positivePole: "universalité des droits, accès sans condition",
    negativePole: "conditionnalité, assurance privée, prestations ciblées",
  },
  {
    id: "education-egalite",
    label: "École",
    positivePole: "égalité, moyens, collège unique, mixité",
    negativePole: "sélection, autonomie, mérite, apprentissage tôt",
  },
  {
    id: "immigration",
    label: "Immigration",
    positivePole: "restreindre l'immigration et conditionner l'accueil",
    negativePole: "accueillir, régulariser, ouvrir des droits",
  },
  {
    id: "autorite",
    label: "Autorité et répression",
    positivePole: "autorité, peines, répression",
    negativePole: "prévention, réinsertion, droits de la défense",
  },
  {
    id: "libertes-publiques",
    label: "Libertés publiques",
    positivePole: "protéger les libertés individuelles",
    negativePole: "surveillance et contrôle au nom de la sécurité",
  },
  {
    id: "ecologie-contrainte",
    label: "Écologie",
    positivePole: "contrainte écologique, normes, fiscalité",
    negativePole: "liberté économique, production, normes allégées",
  },
  {
    id: "nucleaire",
    label: "Nucléaire",
    positivePole: "filière nucléaire civile assumée",
    negativePole: "sortie du nucléaire, énergies renouvelables",
  },
  {
    id: "ruralite",
    label: "Ruralité",
    positivePole: "défendre les terroirs, la chasse et l'agriculture",
    negativePole: "métropoles, normes urbaines, écologie des villes",
  },
  {
    id: "europe",
    label: "Europe",
    positivePole: "intégration européenne, primauté du droit européen",
    negativePole: "souveraineté nationale, renégociation, sortie",
  },
  {
    id: "alliances",
    label: "Alliances",
    positivePole: "ancrage atlantique et occidental",
    negativePole: "non-alignement, indépendance, refus des alliances",
  },
  {
    id: "defense",
    label: "Défense",
    positivePole: "effort de défense, dissuasion, exportations d'armes",
    negativePole: "désarmement, aide au développement, retrait",
  },
  {
    id: "progressisme-societal",
    label: "Société",
    positivePole: "droits nouveaux, familles diverses, égalité",
    negativePole: "valeurs traditionnelles, famille, ordre moral",
  },
  {
    id: "laicite",
    label: "Laïcité",
    positivePole: "laïcité stricte, neutralité de l'espace public",
    negativePole: "accommodement des pratiques religieuses",
  },
  {
    id: "protectionnisme",
    label: "Commerce",
    positivePole: "protéger la production nationale",
    negativePole: "libre-échange et ouverture",
  },
  {
    id: "institutions",
    label: "Institutions",
    positivePole: "démocratie directe, proportionnelle, décentralisation",
    negativePole: "stabilité des institutions de la Ve République",
  },
];

export const AXIS_IDS: AxisId[] = AXES.map((axis) => axis.id);

export const AXIS_MAP: Record<AxisId, Axis> = AXES.reduce(
  (acc, axis) => {
    acc[axis.id] = axis;
    return acc;
  },
  {} as Record<AxisId, Axis>,
);
