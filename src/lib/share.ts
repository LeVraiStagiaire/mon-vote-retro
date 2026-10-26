import { isElectionYear, type ElectionYear } from "@/data/elections";
import { QUESTIONS, type QuizMode } from "@/data/questions";
import { THEME_IDS } from "@/data/themes";
import { DEFAULT_WEIGHTS, MAX_WEIGHT, type Answers, type Weights } from "./scoring";

const VERSION = "v1";

const VALUE_TO_CHAR: Record<number, string> = {
  [-2]: "a",
  [-1]: "b",
  0: "c",
  1: "d",
  2: "e",
};

const CHAR_TO_VALUE: Record<string, number> = {
  a: -2,
  b: -1,
  c: 0,
  d: 1,
  e: 2,
};

export interface SharedPayload {
  year: ElectionYear;
  mode: QuizMode;
  answers: Answers;
  weights: Weights;
}

function toBase64Url(input: string): string {
  return btoa(unescape(encodeURIComponent(input)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function fromBase64Url(input: string): string {
  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
  return decodeURIComponent(escape(atob(padded)));
}

export function encodeShare(payload: SharedPayload): string {
  const answers = QUESTIONS.map((question) => {
    const value = payload.answers[question.id];
    return value == null ? "-" : VALUE_TO_CHAR[value] ?? "-";
  }).join("");

  const weights = THEME_IDS.map((themeId) => {
    const weight = Math.max(0, Math.min(MAX_WEIGHT, Math.round(payload.weights[themeId] ?? 1)));
    return String(weight);
  }).join("");

  return toBase64Url(
    [VERSION, String(payload.year), payload.mode, answers, weights].join("~"),
  );
}

export function decodeShare(token: string | null | undefined): SharedPayload | null {
  if (!token) return null;

  let decoded: string;
  try {
    decoded = fromBase64Url(token);
  } catch {
    return null;
  }

  const parts = decoded.split("~");
  if (parts.length !== 5) return null;

  const [version, rawYear, rawMode, rawAnswers, rawWeights] = parts;
  if (version !== VERSION) return null;

  const year = Number(rawYear);
  if (!isElectionYear(year)) return null;
  if (rawMode !== "express" && rawMode !== "complet") return null;
  if (rawAnswers.length !== QUESTIONS.length) return null;
  if (rawWeights.length !== THEME_IDS.length) return null;

  const answers: Answers = {};
  for (let i = 0; i < rawAnswers.length; i += 1) {
    const char = rawAnswers[i];
    if (char === "-") {
      answers[QUESTIONS[i].id] = null;
      continue;
    }
    const value = CHAR_TO_VALUE[char];
    if (value === undefined) return null;
    answers[QUESTIONS[i].id] = value;
  }

  const weights: Weights = { ...DEFAULT_WEIGHTS };
  for (let i = 0; i < rawWeights.length; i += 1) {
    const digit = Number(rawWeights[i]);
    if (!Number.isInteger(digit) || digit < 0 || digit > MAX_WEIGHT) return null;
    weights[THEME_IDS[i]] = digit;
  }

  return { year, mode: rawMode, answers, weights };
}
