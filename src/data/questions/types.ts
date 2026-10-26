import type { AxisId } from "../axes";
import type { ElectionYear } from "../elections";
import type { ThemeId } from "../themes";

export type QuizMode = "express" | "complet";

export interface Question {
  /** Identifiant préfixé par l'année : `2012-economie-3`. */
  id: string;
  year: ElectionYear;
  themeId: ThemeId;
  text: string;
  /** Question du format court : deux par thème et par scrutin. */
  express: boolean;
  axis: AxisId;
  /** `1` si l'accord correspond au pôle positif de l'axe, `-1` au pôle négatif. */
  polarity: 1 | -1;
  /** Contexte pédagogique (sigles, mesures, dates, état du droit), affiché dans un bloc repliable. */
  context: string;
  /** Question institutionnelle : aucun archétype ne détermine la position. */
  open?: boolean;
}

export interface RawQuestionOptions {
  express?: boolean;
  open?: boolean;
}

/** `[énoncé, axe, polarité, options]` — format compact des banques annuelles. */
export type RawQuestion = [
  text: string,
  axis: AxisId,
  polarity: 1 | -1,
  options?: RawQuestionOptions,
];

export type RawYear = Record<ThemeId, RawQuestion[]>;

/** Contexte pédagogique indexé par identifiant de question (`2012-economie-3`). */
export type RawContexts = Record<string, string>;
