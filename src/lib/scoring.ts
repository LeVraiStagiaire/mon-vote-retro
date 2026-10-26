import { CANDIDATES, positionsOf, type Candidate } from "@/data/candidates";
import type { ElectionYear } from "@/data/elections";
import { QUESTIONS, questionSet, type Question, type QuizMode } from "@/data/questions";
import { THEME_IDS, type ThemeId } from "@/data/themes";

export type Weights = Record<ThemeId, number>;

export type Answers = Record<string, number | null | undefined>;

export const MIN_ANSWERS = 5;
export const LOW_COVERAGE_THRESHOLD = 0.4;
export const MAX_WEIGHT = 2;

export const DEFAULT_WEIGHTS: Weights = THEME_IDS.reduce((acc, id) => {
  acc[id] = 1;
  return acc;
}, {} as Weights);

const QUESTION_INDEX: Record<string, number> = QUESTIONS.reduce(
  (acc, question, index) => {
    acc[question.id] = index;
    return acc;
  },
  {} as Record<string, number>,
);

const CANDIDATES_BY_YEAR: Partial<Record<ElectionYear, Candidate[]>> = CANDIDATES.reduce(
  (acc, candidate) => {
    (acc[candidate.year] ??= []).push(candidate);
    return acc;
  },
  {} as Partial<Record<ElectionYear, Candidate[]>>,
);

export function candidatesOfYear(year: ElectionYear): Candidate[] {
  return CANDIDATES_BY_YEAR[year] ?? [];
}

/** Accord entre une réponse utilisateur et une position de candidat, de 0 à 1. */
export function agreement(user: number, candidate: number): number {
  return 1 - Math.abs(user - candidate) / 4;
}

export interface ScoredCandidate {
  candidate: Candidate;
  /** Score pondéré de 0 à 1, `null` si aucun poids ne s'applique. */
  score: number | null;
  /** Part des questions répondues sur lesquelles le candidat a une position. */
  coverage: number;
  /** Nombre de questions réellement utilisées dans le calcul. */
  compared: number;
  flags: {
    /** Moins de 40 % des questions répondues sont couvertes par le candidat. */
    lowCoverage: boolean;
    /** Aucun poids actif sur les questions comparées. */
    noWeight: boolean;
  };
}

export function answeredCount(answers: Answers, questions: Question[] = QUESTIONS): number {
  return questions.filter((question) => answers[question.id] != null).length;
}

/** Une seule question répondue ne suffit pas : il en faut au moins 5. */
export function hasEnoughAnswers(answers: Answers, questions: Question[] = QUESTIONS): boolean {
  return answeredCount(answers, questions) >= MIN_ANSWERS;
}

export function hasActiveWeights(
  answers: Answers,
  weights: Weights,
  questions: Question[] = QUESTIONS,
): boolean {
  return questions.some(
    (question) => answers[question.id] != null && (weights[question.themeId] ?? 0) > 0,
  );
}

export function scoreCandidate(
  candidate: Candidate,
  answers: Answers,
  weights: Weights,
  questions: Question[] = QUESTIONS,
): ScoredCandidate {
  const positions = positionsOf(candidate);
  let weightedSum = 0;
  let weightTotal = 0;
  let answered = 0;
  let compared = 0;

  for (const question of questions) {
    const user = answers[question.id];
    if (user == null) continue;
    answered += 1;

    const position = positions[QUESTION_INDEX[question.id]];
    if (position == null) continue;
    compared += 1;

    const weight = weights[question.themeId] ?? 0;
    if (weight <= 0) continue;

    weightedSum += weight * agreement(user, position);
    weightTotal += weight;
  }

  const coverage = answered === 0 ? 0 : compared / answered;

  return {
    candidate,
    score: weightTotal > 0 ? weightedSum / weightTotal : null,
    coverage,
    compared,
    flags: {
      lowCoverage: answered > 0 && coverage < LOW_COVERAGE_THRESHOLD,
      noWeight: answered > 0 && weightTotal === 0,
    },
  };
}

export function rankCandidates(
  answers: Answers,
  weights: Weights,
  year: ElectionYear,
  mode: QuizMode,
): ScoredCandidate[] {
  const questions = questionSet(mode);
  return candidatesOfYear(year)
    .map((candidate) => scoreCandidate(candidate, answers, weights, questions))
    .sort((a, b) => {
      if (a.score == null && b.score == null) return b.candidate.score - a.candidate.score;
      if (a.score == null) return 1;
      if (b.score == null) return -1;
      if (Math.abs(b.score - a.score) > 0.0001) return b.score - a.score;
      return b.candidate.score - a.candidate.score;
    });
}

/** Taux d'accord moyen par thème, pour le radar et la fiche candidat. */
export function themeScores(
  candidate: Candidate,
  answers: Answers,
  questions: Question[] = QUESTIONS,
): Record<ThemeId, number | null> {
  const positions = positionsOf(candidate);
  const buckets: Record<ThemeId, { sum: number; count: number }> = THEME_IDS.reduce(
    (acc, id) => {
      acc[id] = { sum: 0, count: 0 };
      return acc;
    },
    {} as Record<ThemeId, { sum: number; count: number }>,
  );

  for (const question of questions) {
    const user = answers[question.id];
    if (user == null) continue;
    const position = positions[QUESTION_INDEX[question.id]];
    if (position == null) continue;
    buckets[question.themeId].sum += agreement(user, position);
    buckets[question.themeId].count += 1;
  }

  return THEME_IDS.reduce((acc, id) => {
    const bucket = buckets[id];
    acc[id] = bucket.count === 0 ? null : bucket.sum / bucket.count;
    return acc;
  }, {} as Record<ThemeId, number | null>);
}

export interface AgreementEntry {
  question: Question;
  user: number;
  candidate: number;
  value: number;
}

/** Questions où l'accord (ou le désaccord) est le plus marqué. */
export function topAgreements(
  candidate: Candidate,
  answers: Answers,
  questions: Question[] = QUESTIONS,
  options: { limit?: number; direction?: "agree" | "disagree" } = {},
): AgreementEntry[] {
  const { limit = 5, direction = "agree" } = options;
  const positions = positionsOf(candidate);
  const entries: AgreementEntry[] = [];

  for (const question of questions) {
    const user = answers[question.id];
    if (user == null) continue;
    const position = positions[QUESTION_INDEX[question.id]];
    if (position == null) continue;
    entries.push({ question, user, candidate: position, value: agreement(user, position) });
  }

  return entries
    .sort((a, b) => (direction === "agree" ? b.value - a.value : a.value - b.value))
    .slice(0, limit);
}

export interface EraChampion {
  year: ElectionYear;
  best: ScoredCandidate | null;
}

/** Meilleur candidat de chaque époque pour un jeu de réponses donné. */
export function championsByYear(
  answers: Answers,
  weights: Weights,
  mode: QuizMode,
  years: ElectionYear[],
): EraChampion[] {
  return years.map((year) => ({
    year,
    best: rankCandidates(answers, weights, year, mode)[0] ?? null,
  }));
}
