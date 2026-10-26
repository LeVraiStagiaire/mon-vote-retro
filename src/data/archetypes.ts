import { QUESTIONS } from "./questions";

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
  /** Position sur chacune des 100 questions, dans l'ordre de QUESTIONS. */
  positions: (number | null)[];
}

/**
 * Encodage compact : `a` = -2 (pas du tout d'accord) … `e` = +2 (tout à fait
 * d'accord), `x` = pas de position. 10 thèmes × 10 caractères par archétype.
 */
const DECODE: Record<string, number | null> = {
  a: -2,
  b: -1,
  c: 0,
  d: 1,
  e: 2,
  x: null,
};

const QUESTIONS_PER_THEME = 10;

type ArchetypeSource = {
  id: ArchetypeId;
  label: string;
  description: string;
  blocks: string[];
};

const SOURCES: ArchetypeSource[] = [
  {
    id: "extreme-gauche",
    label: "Extrême gauche",
    description:
      "Anticapitalisme, rupture avec les institutions européennes, priorité aux salaires et aux services publics.",
    blocks: ["aeaeaeaeea", "eaeaeeeaea", "eaeaeaeaea", "eaaeaeeaae", "eaeaeaeaaa", "aaeaaeeaea", "ebedaeabde", "eaeaeeaxxx", "eaeaeaeeea", "eeeaeaxexa"],
  },
  {
    id: "gauche-radicale",
    label: "Gauche radicale",
    description:
      "Rupture avec la logique libérale, planification écologique, défense des salariés et de l'hôpital public.",
    blocks: ["aeaeaeaeea", "eaeaeeeaea", "dbdbdadbea", "dbbdbddabd", "ebeadbdbba", "abdbbddbda", "dbddbdabee", "dbdbedbxxx", "dbdbeaeddb", "dedbebxdxa"],
  },
  {
    id: "social-democratie",
    label: "Social-démocratie",
    description:
      "Réforme progressiste, régulation du marché, attachement à la construction européenne et au dialogue social.",
    blocks: ["aeadbdbedb", "eadbedeadb", "eaeadadbea", "dbbdbedbbd", "ccccdccccd", "ccccccdccc", "dbddbdbade", "bdbdbadxxx", "ccbccccdcc", "ccdccdxcxc"],
  },
  {
    id: "ecologie-politique",
    label: "Écologie politique",
    description:
      "Transition écologique contraignante, sortie du nucléaire, justice sociale et Europe fédérale.",
    blocks: ["adbeaebdea", "dbebeddadb", "dbebdadbdb", "cccbccdccc", "dccccccccd", "abdbadeadb", "eaeeaeaaee", "aebdbaexxx", "eadadbeddb", "deeaeaxdxa"],
  },
  {
    id: "centre-social-liberal",
    label: "Centre social-libéral",
    description:
      "Équilibre budgétaire, ouverture européenne et sociétale, réformes pragmatiques plutôt qu'idéologiques.",
    blocks: ["cccccccbcc", "ccdccccccc", "cccbcccccc", "cccccccdcc", "ccccccbcdc", "cdcccccccc", "ebedaeabde", "aeaebaexxx", "bebdbdaabd", "ccccccxcxc"],
  },
  {
    id: "droite-liberale",
    label: "Droite libérale",
    description:
      "Baisse des prélèvements, libération du marché du travail, Europe ouverte et réduction de la dépense publique.",
    blocks: ["eaebdbdbbd", "bdbdabbebd", "aeaebdbdae", "bedbdbaddb", "bebebdbdde", "debeeaaebd", "cccbccdccc", "adaeabdxxx", "adaebdbabe", "babdadxbxd"],
  },
  {
    id: "droite-gaulliste",
    label: "Droite gaulliste",
    description:
      "Ordre républicain, souveraineté nationale tempérée, attachement à la fonction publique et à la grandeur de l'État.",
    blocks: ["ccccccbccc", "bccccccdcc", "ebeadbdbea", "cccccdcccc", "aebebdadde", "edbdeaaeae", "cccbccbccc", "cccccdcxxx", "cbccccbcbc", "bbbdbdxaxd"],
  },
  {
    id: "droite-conservatrice",
    label: "Droite conservatrice",
    description:
      "Ordre moral et sécuritaire, immigration restreinte, famille traditionnelle, effort et mérite à l'école.",
    blocks: ["eadbdbdbae", "aeaebabdbd", "aeaebdbdae", "bedadbaedb", "aeaeaeaeee", "edbedbaead", "bdbadbdeba", "ccccccdxxx", "bdbebdbabe", "aaaeaexaxe"],
  },
  {
    id: "souverainisme",
    label: "Souverainisme",
    description:
      "Primat de la nation et de la loi française, rejet des transferts de souveraineté, État stratège et ordre républicain.",
    blocks: ["bdbdaebeda", "cccccccdcc", "daeaeadbea", "cdccdccccc", "aeaebdbddd", "edadebbdae", "aebadbdeab", "eaeaeeaxxx", "eaeaeaeeea", "bbaebdxaxd"],
  },
  {
    id: "droite-nationale",
    label: "Droite nationale",
    description:
      "Priorité nationale, fronde contre l'Union européenne, autorité et sécurité, protection sociale des nationaux.",
    blocks: ["cbccccbccc", "cccbcdcccd", "eaeadbdbdb", "aedbdaaeeb", "aeaeaeaeee", "eeaeeaaeae", "aeabeaedbb", "eaeaeeaxxx", "eaeaebdedb", "aaaeaexaxe"],
  },
  {
    id: "ruralite-chasse",
    label: "Ruralité & territoires",
    description:
      "Défense des terroirs, de la chasse et de l'agriculture, méfiance envers les normes et les métropoles.",
    blocks: ["aebebdbdda", "cbccbccccc", "ebdbdbdaea", "eabdbddbae", "bdbdaeaddd", "ddaeeabdbd", "eadebdbade", "dbdbedbxxx", "eaeadbdedb", "abadaexbxe"],
  },
  {
    id: "altermondialisme",
    label: "Altermondialisme",
    description:
      "Critique de la mondialisation financière, écologie radicale, démocratie directe et solidarité internationale.",
    blocks: ["aeaeaeaeea", "eaeaeeeaea", "dbdbdaebdb", "eabdaedbbd", "dbdbdbeaba", "badbaedbea", "eaeeaeaaee", "dbdbedaxxx", "eaeaeaeeea", "ddeaeaxexb"],
  },
  {
    id: "gaullisme-social",
    label: "Gaullisme social",
    description:
      "Souveraineté et État protecteur : intervention économique, Nation forte, référendum et laïcité.",
    blocks: ["aeaeaeaeea", "ebdbeddaeb", "ebeadbdbdb", "dbbdbedbbd", "cccbcccccb", "cccdccccdc", "cccccccdcc", "eaebdeaxxx", "cbccbccccc", "cdccbcxcxc"],
  },
  {
    id: "divers",
    label: "Divers & petites candidatures",
    description:
      "Profils singuliers, souvent peu classables : thèmes de niche, critique du système politique, engagements locaux.",
    blocks: ["bdbdaebddb", "ccbcccccdc", "ccbccbcccd", "cccccccdcc", "cdccccccdc", "abdbbdeada", "dbedbdbbde", "cdccccbxxx", "dccccbcccc", "edeadbxexb"],
  },
];

function decodeBlocks(id: string, blocks: string[]): (number | null)[] {
  if (blocks.length * QUESTIONS_PER_THEME !== QUESTIONS.length) {
    throw new Error(
      `Archétype ${id} : ${blocks.length * QUESTIONS_PER_THEME} positions pour ${QUESTIONS.length} questions.`,
    );
  }
  const positions: (number | null)[] = [];
  blocks.forEach((block, blockIndex) => {
    if (block.length !== QUESTIONS_PER_THEME) {
      throw new Error(
        `Archétype ${id}, bloc ${blockIndex} : ${block.length} caractères au lieu de ${QUESTIONS_PER_THEME}.`,
      );
    }
    for (const char of block) {
      const value = DECODE[char];
      if (value === undefined) {
        throw new Error(`Archétype ${id} : caractère inconnu « ${char} ».`);
      }
      positions.push(value);
    }
  });
  return positions;
}

export const ARCHETYPES: Archetype[] = SOURCES.map((source) => ({
  id: source.id,
  label: source.label,
  description: source.description,
  positions: decodeBlocks(source.id, source.blocks),
}));

export const ARCHETYPE_MAP: Record<ArchetypeId, Archetype> = ARCHETYPES.reduce(
  (acc, archetype) => {
    acc[archetype.id] = archetype;
    return acc;
  },
  {} as Record<ArchetypeId, Archetype>,
);
