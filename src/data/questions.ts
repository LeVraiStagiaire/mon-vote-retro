import { shuffleWithSeed } from "@/lib/shuffle";
import { AXIS_MAP } from "./axes";
import { YEARS, type ElectionYear } from "./elections";
import { THEME_IDS } from "./themes";
import { RAW_2002 } from "./questions/2002";
import { RAW_2007 } from "./questions/2007";
import { RAW_2012 } from "./questions/2012";
import { RAW_2017 } from "./questions/2017";
import { RAW_2022 } from "./questions/2022";
import type { Question, QuizMode, RawYear } from "./questions/types";

export type { Question, QuizMode } from "./questions/types";

/** Une banque indépendante par scrutin : 100 questions, 10 par thème. */
const BANKS: Record<ElectionYear, RawYear> = {
  2002: RAW_2002,
  2007: RAW_2007,
  2012: RAW_2012,
  2017: RAW_2017,
  2022: RAW_2022,
};

const QUESTIONS_PER_THEME = 10;
const EXPRESS_PER_THEME = 2;

function buildYear(year: ElectionYear, raw: RawYear): Question[] {
  const questions: Question[] = [];
  for (const themeId of THEME_IDS) {
    const entries = raw[themeId];
    if (!entries) {
      throw new Error(`Banque ${year} : thème « ${themeId} » absent.`);
    }
    entries.forEach(([text, axis, polarity, options], index) => {
      questions.push({
        id: `${year}-${themeId}-${index + 1}`,
        year,
        themeId,
        text,
        express: options?.express === true,
        axis,
        polarity,
        note: options?.note,
        open: options?.open === true,
      });
    });
  }
  return questions;
}

export const QUESTIONS_BY_YEAR: Record<ElectionYear, Question[]> = YEARS.reduce(
  (acc, year) => {
    acc[year] = buildYear(year, BANKS[year]);
    return acc;
  },
  {} as Record<ElectionYear, Question[]>,
);

export const EXPRESS_QUESTIONS_BY_YEAR: Record<ElectionYear, Question[]> = YEARS.reduce(
  (acc, year) => {
    acc[year] = QUESTIONS_BY_YEAR[year].filter((question) => question.express);
    return acc;
  },
  {} as Record<ElectionYear, Question[]>,
);

/** Les 500 questions, dans l'ordre des scrutins puis des thèmes. */
export const QUESTIONS: Question[] = YEARS.flatMap((year) => QUESTIONS_BY_YEAR[year]);

export const QUESTION_MAP: Record<string, Question> = QUESTIONS.reduce(
  (acc, question) => {
    acc[question.id] = question;
    return acc;
  },
  {} as Record<string, Question>,
);

export const TOTAL_QUESTIONS = QUESTIONS.length;

export const QUESTIONS_PER_YEAR = QUESTIONS_BY_YEAR[YEARS[0]].length;

/** Ordre canonique de l'année (partage, fiches candidat, affichage). */
export function questionsForYear(year: ElectionYear): Question[] {
  return QUESTIONS_BY_YEAR[year];
}

export function questionSet(year: ElectionYear, mode: QuizMode): Question[] {
  return mode === "express" ? EXPRESS_QUESTIONS_BY_YEAR[year] : QUESTIONS_BY_YEAR[year];
}

export function questionCountForMode(year: ElectionYear, mode: QuizMode): number {
  return questionSet(year, mode).length;
}

/**
 * Questions dans l'ordre de la session : mélangées à partir de la graine
 * (donc stables d'un rendu et d'un rechargement à l'autre). Sans graine, on
 * retombe sur l'ordre canonique de l'année.
 */
export function orderedQuestions(
  year: ElectionYear,
  mode: QuizMode,
  seed: number | null,
): Question[] {
  const base = questionSet(year, mode);
  return seed == null ? base : shuffleWithSeed(base, seed);
}

/** Contrôles d'intégrité des cinq banques, exécutés à l'import. */
function validateBanks(): void {
  const ids = new Set<string>();

  for (const year of YEARS) {
    const questions = QUESTIONS_BY_YEAR[year];
    if (questions.length !== THEME_IDS.length * QUESTIONS_PER_THEME) {
      throw new Error(
        `Banque ${year} : ${questions.length} questions au lieu de ${THEME_IDS.length * QUESTIONS_PER_THEME}.`,
      );
    }

    for (const themeId of THEME_IDS) {
      const ofTheme = questions.filter((question) => question.themeId === themeId);
      if (ofTheme.length !== QUESTIONS_PER_THEME) {
        throw new Error(`Banque ${year}, thème ${themeId} : ${ofTheme.length} questions.`);
      }
      const express = ofTheme.filter((question) => question.express);
      if (express.length !== EXPRESS_PER_THEME) {
        throw new Error(
          `Banque ${year}, thème ${themeId} : ${express.length} questions clés au lieu de ${EXPRESS_PER_THEME}.`,
        );
      }
    }

    for (const question of questions) {
      if (ids.has(question.id)) {
        throw new Error(`Identifiant de question en double : ${question.id}`);
      }
      ids.add(question.id);

      if (!question.id.startsWith(`${year}-`)) {
        throw new Error(`Identifiant non préfixé par l'année : ${question.id}`);
      }
      if (!AXIS_MAP[question.axis]) {
        throw new Error(`Axe inconnu pour ${question.id} : ${question.axis}`);
      }
      if (question.polarity !== 1 && question.polarity !== -1) {
        throw new Error(`Polarité invalide pour ${question.id} : ${question.polarity}`);
      }
    }
  }
}

validateBanks();
