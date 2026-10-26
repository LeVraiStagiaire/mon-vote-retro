import { isElectionYear, type ElectionYear } from "@/data/elections";
import type { QuizMode } from "@/data/questions";
import { THEME_IDS, type ThemeId } from "@/data/themes";
import { DEFAULT_WEIGHTS, MAX_WEIGHT, type Answers, type Weights } from "./scoring";

export const STORAGE_KEY = "monvote:session:v1";

export type SessionStatus = "idle" | "running" | "done";

export interface QuizSession {
  year: ElectionYear | null;
  mode: QuizMode;
  answers: Answers;
  weights: Weights;
  index: number;
  status: SessionStatus;
  /** Graine du mélange des questions : garantit un ordre stable pendant la partie. */
  seed: number | null;
}

export const EMPTY_SESSION: QuizSession = {
  year: null,
  mode: "express",
  answers: {},
  weights: DEFAULT_WEIGHTS,
  index: 0,
  status: "idle",
  seed: null,
};

export function loadSession(): QuizSession | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<QuizSession>;
    if (!parsed || typeof parsed !== "object") return null;

    const year = isElectionYear(parsed.year) ? (parsed.year as ElectionYear) : null;
    const mode: QuizMode = parsed.mode === "complet" ? "complet" : "express";
    const status: SessionStatus =
      parsed.status === "running" || parsed.status === "done" ? parsed.status : "idle";

    const answers: Answers = {};
    if (parsed.answers && typeof parsed.answers === "object") {
      for (const [key, value] of Object.entries(parsed.answers)) {
        if (value === null || (typeof value === "number" && value >= -2 && value <= 2)) {
          answers[key] = value;
        }
      }
    }

    const weights: Weights = { ...DEFAULT_WEIGHTS };
    if (parsed.weights && typeof parsed.weights === "object") {
      for (const themeId of THEME_IDS) {
        const value = (parsed.weights as Record<string, unknown>)[themeId];
        if (typeof value === "number" && value >= 0 && value <= MAX_WEIGHT) {
          weights[themeId as ThemeId] = value;
        }
      }
    }

    const index =
      typeof parsed.index === "number" && parsed.index >= 0 ? Math.floor(parsed.index) : 0;

    const seed =
      typeof parsed.seed === "number" && Number.isFinite(parsed.seed) && parsed.seed > 0
        ? Math.floor(parsed.seed)
        : null;

    return { year, mode, answers, weights, index, status, seed };
  } catch {
    return null;
  }
}

export function saveSession(session: QuizSession): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {
    // Stockage indisponible (mode privé strict, quota) : la session reste en mémoire.
  }
}

export function clearSession(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Rien à faire.
  }
}
