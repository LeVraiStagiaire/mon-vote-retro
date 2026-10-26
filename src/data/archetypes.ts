import { AXIS_IDS, type AxisId } from "./axes";

export type ArchetypeId =
  | "extreme-gauche"
  | "gauche-radicale"
  | "social-democratie"
  | "ecologie-politique"
  | "centre-social-liberal"
  | "droite-liberale"
  | "droite-gaulliste"
  | "droite-conservatrice"
  | "souverainisme"
  | "droite-nationale"
  | "ruralite-chasse"
  | "altermondialisme"
  | "gaullisme-social"
  | "divers";

export interface Archetype {
  id: ArchetypeId;
  label: string;
  description: string;
  /**
   * Position de l'archétype sur chaque axe idéologique (−2 à +2). La position
   * sur une question se déduit de l'axe de la question et de sa polarité, puis
   * des exceptions et des ajustements propres au candidat.
   */
  axes: Record<AxisId, number>;
}

type ArchetypeSource = Omit<Archetype, "axes"> & { axes: Partial<Record<AxisId, number>> };

const SOURCES: ArchetypeSource[] = [
  {
    id: "extreme-gauche",
    label: "Extrême gauche",
    description:
      "Anticapitalisme, rupture avec les institutions européennes, priorité aux salaires et aux services publics.",
    axes: {
      redistribution: 2,
      "etat-economie": 2,
      dette: -2,
      "flexibilite-travail": -2,
      retraites: -2,
      "universalite-sociale": 2,
      "education-egalite": 2,
      immigration: -1,
      autorite: -2,
      "libertes-publiques": 2,
      "ecologie-contrainte": 1,
      nucleaire: -2,
      ruralite: 0,
      europe: -2,
      alliances: -2,
      defense: -2,
      "progressisme-societal": 1,
      laicite: 2,
      protectionnisme: 1,
      institutions: 1,
    },
  },
  {
    id: "gauche-radicale",
    label: "Gauche radicale",
    description:
      "Rupture avec la logique libérale, planification écologique, défense des salariés et de l'hôpital public.",
    axes: {
      redistribution: 2,
      "etat-economie": 2,
      dette: -1,
      "flexibilite-travail": -2,
      retraites: -2,
      "universalite-sociale": 1,
      "education-egalite": 2,
      immigration: -1,
      autorite: -1,
      "libertes-publiques": 1,
      "ecologie-contrainte": 2,
      nucleaire: -1,
      ruralite: 0,
      europe: -1,
      alliances: -2,
      defense: -1,
      "progressisme-societal": 2,
      laicite: 2,
      protectionnisme: 2,
      institutions: 2,
    },
  },
  {
    id: "social-democratie",
    label: "Social-démocratie",
    description:
      "Réforme progressiste, régulation du marché, attachement à la construction européenne et au dialogue social.",
    axes: {
      redistribution: 1,
      "etat-economie": 1,
      dette: 0,
      "flexibilite-travail": -1,
      retraites: 0,
      "universalite-sociale": 1,
      "education-egalite": 1,
      immigration: 0,
      autorite: 0,
      "libertes-publiques": 1,
      "ecologie-contrainte": 1,
      nucleaire: 0,
      ruralite: 0,
      europe: 2,
      alliances: 2,
      defense: 0,
      "progressisme-societal": 2,
      laicite: 1,
      protectionnisme: 0,
      institutions: 0,
    },
  },
  {
    id: "ecologie-politique",
    label: "Écologie politique",
    description:
      "Transition écologique contraignante, sortie du nucléaire, justice sociale et Europe fédérale.",
    axes: {
      redistribution: 1,
      "etat-economie": 1,
      dette: 0,
      "flexibilite-travail": -1,
      retraites: 0,
      "universalite-sociale": 1,
      "education-egalite": 1,
      immigration: -2,
      autorite: -1,
      "libertes-publiques": 2,
      "ecologie-contrainte": 2,
      nucleaire: -2,
      ruralite: 1,
      europe: 2,
      alliances: 1,
      defense: -2,
      "progressisme-societal": 2,
      laicite: 1,
      protectionnisme: 1,
      institutions: 2,
    },
  },
  {
    id: "centre-social-liberal",
    label: "Centre social-libéral",
    description:
      "Équilibre budgétaire, ouverture européenne et sociétale, réformes pragmatiques plutôt qu'idéologiques.",
    axes: {
      redistribution: 0,
      "etat-economie": 0,
      dette: 1,
      "flexibilite-travail": 0,
      retraites: 1,
      "universalite-sociale": 0,
      "education-egalite": 0,
      immigration: 0,
      autorite: 0,
      "libertes-publiques": 0,
      "ecologie-contrainte": 1,
      nucleaire: 1,
      ruralite: 0,
      europe: 2,
      alliances: 1,
      defense: 1,
      "progressisme-societal": 1,
      laicite: 1,
      protectionnisme: -1,
      institutions: 0,
    },
  },
  {
    id: "droite-liberale",
    label: "Droite libérale",
    description:
      "Baisse des prélèvements, libération du marché du travail, Europe ouverte et réduction de la dépense publique.",
    axes: {
      redistribution: -2,
      "etat-economie": -2,
      dette: 2,
      "flexibilite-travail": 2,
      retraites: 1,
      "universalite-sociale": -1,
      "education-egalite": -1,
      immigration: 0,
      autorite: 1,
      "libertes-publiques": -1,
      "ecologie-contrainte": 0,
      nucleaire: 1,
      ruralite: 0,
      europe: 1,
      alliances: 1,
      defense: 1,
      "progressisme-societal": 0,
      laicite: 1,
      protectionnisme: -2,
      institutions: -1,
    },
  },
  {
    id: "droite-gaulliste",
    label: "Droite gaulliste",
    description:
      "Ordre républicain, souveraineté nationale tempérée, attachement à la fonction publique et à la grandeur de l'État.",
    axes: {
      redistribution: 0,
      "etat-economie": 1,
      dette: 1,
      "flexibilite-travail": 1,
      retraites: 1,
      "universalite-sociale": 0,
      "education-egalite": 0,
      immigration: 1,
      autorite: 2,
      "libertes-publiques": -1,
      "ecologie-contrainte": 1,
      nucleaire: 2,
      ruralite: 1,
      europe: 0,
      alliances: -1,
      defense: 2,
      "progressisme-societal": -1,
      laicite: 1,
      protectionnisme: 1,
      institutions: -1,
    },
  },
  {
    id: "droite-conservatrice",
    label: "Droite conservatrice",
    description:
      "Ordre moral et sécuritaire, immigration restreinte, famille traditionnelle, effort et mérite à l'école.",
    axes: {
      redistribution: -1,
      "etat-economie": 0,
      dette: 2,
      "flexibilite-travail": 1,
      retraites: 1,
      "universalite-sociale": -2,
      "education-egalite": -1,
      immigration: 2,
      autorite: 2,
      "libertes-publiques": -2,
      "ecologie-contrainte": 0,
      nucleaire: 1,
      ruralite: 1,
      europe: 0,
      alliances: 1,
      defense: 1,
      "progressisme-societal": -2,
      laicite: 1,
      protectionnisme: 1,
      institutions: -2,
    },
  },
  {
    id: "souverainisme",
    label: "Souverainisme",
    description:
      "Primat de la nation et de la loi française, rejet des transferts de souveraineté, État stratège et ordre républicain.",
    axes: {
      redistribution: 0,
      "etat-economie": 1,
      dette: 1,
      "flexibilite-travail": 1,
      retraites: 1,
      "universalite-sociale": 0,
      "education-egalite": 0,
      immigration: 1,
      autorite: 1,
      "libertes-publiques": -1,
      "ecologie-contrainte": 0,
      nucleaire: 1,
      ruralite: 1,
      europe: -2,
      alliances: -2,
      defense: 2,
      "progressisme-societal": -1,
      laicite: 1,
      protectionnisme: 2,
      institutions: 1,
    },
  },
  {
    id: "droite-nationale",
    label: "Droite nationale",
    description:
      "Priorité nationale, fronde contre l'Union européenne, autorité et sécurité, protection sociale des nationaux.",
    axes: {
      redistribution: 1,
      "etat-economie": 1,
      dette: 1,
      "flexibilite-travail": 0,
      retraites: 1,
      "universalite-sociale": -1,
      "education-egalite": -1,
      immigration: 2,
      autorite: 2,
      "libertes-publiques": -2,
      "ecologie-contrainte": 0,
      nucleaire: 1,
      ruralite: 1,
      europe: -2,
      alliances: -2,
      defense: 1,
      "progressisme-societal": -2,
      laicite: 2,
      protectionnisme: 2,
      institutions: 1,
    },
  },
  {
    id: "ruralite-chasse",
    label: "Ruralité & territoires",
    description:
      "Défense des terroirs, de la chasse et de l'agriculture, méfiance envers les normes et les métropoles.",
    axes: {
      redistribution: 0,
      "etat-economie": 0,
      dette: 1,
      "flexibilite-travail": 0,
      retraites: 1,
      "universalite-sociale": -1,
      "education-egalite": -1,
      immigration: 1,
      autorite: 1,
      "libertes-publiques": -1,
      "ecologie-contrainte": -1,
      nucleaire: 1,
      ruralite: 2,
      europe: -1,
      alliances: 0,
      defense: 1,
      "progressisme-societal": -2,
      laicite: 0,
      protectionnisme: 1,
      institutions: 1,
    },
  },
  {
    id: "altermondialisme",
    label: "Altermondialisme",
    description:
      "Critique de la mondialisation financière, écologie radicale, démocratie directe et solidarité internationale.",
    axes: {
      redistribution: 2,
      "etat-economie": 2,
      dette: -2,
      "flexibilite-travail": -1,
      retraites: -1,
      "universalite-sociale": 1,
      "education-egalite": 1,
      immigration: -2,
      autorite: -2,
      "libertes-publiques": 2,
      "ecologie-contrainte": 2,
      nucleaire: -2,
      ruralite: 1,
      europe: -1,
      alliances: -2,
      defense: -2,
      "progressisme-societal": 2,
      laicite: 2,
      protectionnisme: 2,
      institutions: 2,
    },
  },
  {
    id: "gaullisme-social",
    label: "Gaullisme social",
    description:
      "Souveraineté et État protecteur : intervention économique, Nation forte, référendum et laïcité.",
    axes: {
      redistribution: 1,
      "etat-economie": 2,
      dette: 0,
      "flexibilite-travail": -1,
      retraites: 0,
      "universalite-sociale": 1,
      "education-egalite": 1,
      immigration: 0,
      autorite: 1,
      "libertes-publiques": -1,
      "ecologie-contrainte": 1,
      nucleaire: 2,
      ruralite: 1,
      europe: 0,
      alliances: -1,
      defense: 2,
      "progressisme-societal": 0,
      laicite: 2,
      protectionnisme: 1,
      institutions: 1,
    },
  },
  {
    id: "divers",
    label: "Divers & petites candidatures",
    description:
      "Profils singuliers, souvent peu classables : thèmes de niche, critique du système politique, engagements locaux.",
    axes: {
      redistribution: 0,
      "etat-economie": 1,
      dette: 0,
      "flexibilite-travail": 0,
      retraites: 0,
      "universalite-sociale": 0,
      "education-egalite": 0,
      immigration: 1,
      autorite: 0,
      "libertes-publiques": 0,
      "ecologie-contrainte": 0,
      nucleaire: 1,
      ruralite: 0,
      europe: -1,
      alliances: -1,
      defense: 1,
      "progressisme-societal": 0,
      laicite: 0,
      protectionnisme: 2,
      institutions: 1,
    },
  },
];

function completeAxes(id: ArchetypeId, partial: Partial<Record<AxisId, number>>): Record<AxisId, number> {
  const axes = {} as Record<AxisId, number>;
  for (const axisId of AXIS_IDS) {
    const value = partial[axisId];
    if (typeof value !== "number" || !Number.isInteger(value) || value < -2 || value > 2) {
      throw new Error(`Archétype ${id} : position manquante ou invalide sur l'axe « ${axisId} ».`);
    }
    axes[axisId] = value;
  }
  return axes;
}

export const ARCHETYPES: Archetype[] = SOURCES.map((source) => ({
  id: source.id,
  label: source.label,
  description: source.description,
  axes: completeAxes(source.id, source.axes),
}));

export const ARCHETYPE_MAP: Record<ArchetypeId, Archetype> = ARCHETYPES.reduce(
  (acc, archetype) => {
    acc[archetype.id] = archetype;
    return acc;
  },
  {} as Record<ArchetypeId, Archetype>,
);
