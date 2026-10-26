export type ElectionYear = 2002 | 2007 | 2012 | 2017 | 2022;

export interface Election {
  year: ElectionYear;
  label: string;
  tagline: string;
  date: string;
  /** Vainqueur du 1er tour. */
  firstRoundWinner: string;
  /** Affiche du second tour. */
  runoff: string;
  candidateCount: number;
}

export const ELECTIONS: Election[] = [
  {
    year: 2002,
    label: "Présidentielle 2002",
    tagline: "L'onde de choc du 21 avril",
    date: "21 avril 2002",
    firstRoundWinner: "Jacques Chirac",
    runoff: "Jacques Chirac — Jean-Marie Le Pen",
    candidateCount: 16,
  },
  {
    year: 2007,
    label: "Présidentielle 2007",
    tagline: "L'alternance à droite",
    date: "22 avril 2007",
    firstRoundWinner: "Nicolas Sarkozy",
    runoff: "Nicolas Sarkozy — Ségolène Royal",
    candidateCount: 12,
  },
  {
    year: 2012,
    label: "Présidentielle 2012",
    tagline: "Le retour de la gauche",
    date: "22 avril 2012",
    firstRoundWinner: "François Hollande",
    runoff: "François Hollande — Nicolas Sarkozy",
    candidateCount: 10,
  },
  {
    year: 2017,
    label: "Présidentielle 2017",
    tagline: "La recomposition Macron",
    date: "23 avril 2017",
    firstRoundWinner: "Emmanuel Macron",
    runoff: "Emmanuel Macron — Marine Le Pen",
    candidateCount: 11,
  },
  {
    year: 2022,
    label: "Présidentielle 2022",
    tagline: "Le duel reconduit",
    date: "10 avril 2022",
    firstRoundWinner: "Emmanuel Macron",
    runoff: "Emmanuel Macron — Marine Le Pen",
    candidateCount: 12,
  },
];

export const YEARS: ElectionYear[] = ELECTIONS.map((election) => election.year);

export const ELECTION_MAP: Record<ElectionYear, Election> = ELECTIONS.reduce(
  (acc, election) => {
    acc[election.year] = election;
    return acc;
  },
  {} as Record<ElectionYear, Election>,
);

export function isElectionYear(value: unknown): value is ElectionYear {
  return typeof value === "number" && YEARS.includes(value as ElectionYear);
}
