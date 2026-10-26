import { isElectionYear, type ElectionYear } from "@/data/elections";
import { questionsForYear, type QuizMode } from "@/data/questions";
import { THEME_IDS } from "@/data/themes";
import { DEFAULT_WEIGHTS, MAX_WEIGHT, type Answers, type Weights } from "./scoring";

const VERSION = "v2";

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

export type ShareDecodeResult =
  | { ok: true; payload: SharedPayload }
  | { ok: false; reason: "legacy" | "invalid" };

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
  // 100 caractères alignés sur l'ordre canonique des questions de l'année :
  // un lien reste lisible même si l'ordre de session est mélangé.
  const answers = questionsForYear(payload.year)
    .map((question) => {
      const value = payload.answers[question.id];
      return value == null ? "-" : VALUE_TO_CHAR[value] ?? "-";
    })
    .join("");

  const weights = THEME_IDS.map((themeId) => {
    const weight = Math.max(0, Math.min(MAX_WEIGHT, Math.round(payload.weights[themeId] ?? 1)));
    return String(weight);
  }).join("");

  return toBase64Url(
    [VERSION, String(payload.year), payload.mode, answers, weights].join("~"),
  );
}

export function decodeShareResult(token: string | null | undefined): ShareDecodeResult {
  if (!token) return { ok: false, reason: "invalid" };

  let decoded: string;
  try {
    decoded = fromBase64Url(token);
  } catch {
    return { ok: false, reason: "invalid" };
  }

  const parts = decoded.split("~");
  if (parts.length !== 5) return { ok: false, reason: "invalid" };

  const [version, rawYear, rawMode, rawAnswers, rawWeights] = parts;
  if (version !== VERSION) {
    return { ok: false, reason: version.startsWith("v") ? "legacy" : "invalid" };
  }

  const year = Number(rawYear);
  if (!isElectionYear(year)) return { ok: false, reason: "invalid" };
  if (rawMode !== "express" && rawMode !== "complet") return { ok: false, reason: "invalid" };

  const questions = questionsForYear(year);
  if (rawAnswers.length !== questions.length) return { ok: false, reason: "invalid" };
  if (rawWeights.length !== THEME_IDS.length) return { ok: false, reason: "invalid" };

  const answers: Answers = {};
  for (let i = 0; i < rawAnswers.length; i += 1) {
    const char = rawAnswers[i];
    if (char === "-") {
      answers[questions[i].id] = null;
      continue;
    }
    const value = CHAR_TO_VALUE[char];
    if (value === undefined) return { ok: false, reason: "invalid" };
    answers[questions[i].id] = value;
  }

  const weights: Weights = { ...DEFAULT_WEIGHTS };
  for (let i = 0; i < rawWeights.length; i += 1) {
    const digit = Number(rawWeights[i]);
    if (!Number.isInteger(digit) || digit < 0 || digit > MAX_WEIGHT) {
      return { ok: false, reason: "invalid" };
    }
    weights[THEME_IDS[i]] = digit;
  }

  return { ok: true, payload: { year, mode: rawMode, answers, weights } };
}

export function decodeShare(token: string | null | undefined): SharedPayload | null {
  const result = decodeShareResult(token);
  return result.ok ? result.payload : null;
}
