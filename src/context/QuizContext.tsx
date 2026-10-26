import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { ElectionYear } from "@/data/elections";
import { orderedQuestions, type Question, type QuizMode } from "@/data/questions";
import type { ThemeId } from "@/data/themes";
import { DEFAULT_WEIGHTS, answeredCount, type Answers, type Weights } from "@/lib/scoring";
import { randomSeed } from "@/lib/shuffle";
import type { SharedPayload } from "@/lib/share";
import {
  EMPTY_SESSION,
  clearSession,
  loadSession,
  purgeAnswers,
  saveSession,
  type QuizSession,
} from "@/lib/storage";

type Action =
  | { type: "selectYear"; year: ElectionYear }
  | { type: "setMode"; mode: QuizMode }
  | { type: "start" }
  | { type: "answer"; questionId: string; value: number | null }
  | { type: "goTo"; index: number }
  | { type: "next" }
  | { type: "previous" }
  | { type: "setWeight"; themeId: ThemeId; weight: number }
  | { type: "resetWeights" }
  | { type: "restart" }
  | { type: "hydrate"; session: SharedPayload };

function questionsFor(session: QuizSession): Question[] {
  if (session.year == null) return [];
  return orderedQuestions(session.year, session.mode, session.seed);
}

function firstUnanswered(answers: Answers, questions: Question[]): number {
  const index = questions.findIndex((question) => answers[question.id] == null);
  return index === -1 ? 0 : index;
}

function clampIndex(index: number, length: number): number {
  if (length === 0) return 0;
  return Math.min(Math.max(index, 0), length - 1);
}

function reducer(state: QuizSession, action: Action): QuizSession {
  switch (action.type) {
    case "selectYear": {
      // Recliquer sur l'année courante ne doit rien effacer.
      if (state.year === action.year) return state;
      return {
        ...state,
        year: action.year,
        answers: {},
        index: 0,
        status: "idle",
        seed: null,
      };
    }
    case "setMode": {
      const questions = questionsFor({ ...state, mode: action.mode });
      const index = state.status === "running" ? firstUnanswered(state.answers, questions) : 0;
      return { ...state, mode: action.mode, index };
    }
    case "start": {
      // Nouvelle graine uniquement si la partie n'en a pas encore : reprendre
      // une session ne rebat pas les cartes.
      const seed = state.seed ?? randomSeed();
      const questions = questionsFor({ ...state, seed });
      return {
        ...state,
        seed,
        status: "running",
        index: firstUnanswered(state.answers, questions),
      };
    }
    case "answer":
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.value },
      };
    case "goTo": {
      const questions = questionsFor(state);
      return { ...state, index: clampIndex(action.index, questions.length) };
    }
    case "next": {
      const questions = questionsFor(state);
      if (state.index >= questions.length - 1) {
        return { ...state, index: questions.length - 1, status: "done" };
      }
      return { ...state, index: state.index + 1 };
    }
    case "previous": {
      const questions = questionsFor(state);
      return { ...state, index: clampIndex(state.index - 1, questions.length) };
    }
    case "setWeight":
      return {
        ...state,
        weights: {
          ...state.weights,
          [action.themeId]: Math.min(Math.max(action.weight, 0), 2),
        },
      };
    case "resetWeights":
      return { ...state, weights: { ...DEFAULT_WEIGHTS } };
    case "restart":
      clearSession();
      return {
        ...EMPTY_SESSION,
        year: state.year,
        mode: state.mode,
        weights: { ...DEFAULT_WEIGHTS },
      };
    case "hydrate": {
      const payload = action.session;
      const questions = orderedQuestions(payload.year, payload.mode, null);
      const answers = purgeAnswers(payload.answers, payload.year);
      return {
        year: payload.year,
        mode: payload.mode,
        answers,
        weights: payload.weights,
        index: firstUnanswered(answers, questions),
        status: "done",
        seed: null,
      };
    }
    default:
      return state;
  }
}

interface QuizContextValue {
  session: QuizSession;
  questions: Question[];
  currentQuestion: Question | null;
  answered: number;
  progress: number;
  hasSession: boolean;
  isActiveYear: (year: ElectionYear) => boolean;
  selectYear: (year: ElectionYear) => void;
  setMode: (mode: QuizMode) => void;
  start: () => void;
  answer: (questionId: string, value: number | null) => void;
  goTo: (index: number) => void;
  finish: () => void;
  goToQuestion: (questionId: string) => void;
  next: () => void;
  previous: () => void;
  setWeight: (themeId: ThemeId, weight: number) => void;
  resetWeights: () => void;
  restart: () => void;
  applyShared: (payload: SharedPayload) => void;
  weights: Weights;
  answers: Answers;
}

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [session, dispatch] = useReducer(
    reducer,
    undefined,
    () => loadSession() ?? { ...EMPTY_SESSION, weights: { ...DEFAULT_WEIGHTS } },
  );

  useEffect(() => {
    saveSession(session);
  }, [session]);

  const questions = useMemo(
    () => (session.year == null ? [] : orderedQuestions(session.year, session.mode, session.seed)),
    [session.mode, session.seed, session.year],
  );
  const answered = useMemo(
    () => answeredCount(session.answers, questions),
    [session.answers, questions],
  );
  const currentQuestion = questions[session.index] ?? null;

  const value = useMemo<QuizContextValue>(() => {
    const progress = questions.length === 0 ? 0 : answered / questions.length;
    return {
      session,
      questions,
      currentQuestion,
      answered,
      progress,
      weights: session.weights,
      answers: session.answers,
      hasSession: session.status !== "idle" && session.year != null,
      isActiveYear: (year: ElectionYear) => session.year === year,
      selectYear: (year) => dispatch({ type: "selectYear", year }),
      setMode: (mode) => dispatch({ type: "setMode", mode }),
      start: () => dispatch({ type: "start" }),
      answer: (questionId, answerValue) =>
        dispatch({ type: "answer", questionId, value: answerValue }),
      goTo: (index) => dispatch({ type: "goTo", index }),
      finish: () => dispatch({ type: "next" }),
      goToQuestion: (questionId) => {
        const index = questions.findIndex((question) => question.id === questionId);
        if (index >= 0) dispatch({ type: "goTo", index });
      },
      next: () => dispatch({ type: "next" }),
      previous: () => dispatch({ type: "previous" }),
      setWeight: (themeId, weight) => dispatch({ type: "setWeight", themeId, weight }),
      resetWeights: () => dispatch({ type: "resetWeights" }),
      restart: () => dispatch({ type: "restart" }),
      applyShared: (payload) => dispatch({ type: "hydrate", session: payload }),
    };
  }, [answered, currentQuestion, questions, session]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz(): QuizContextValue {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz doit être utilisé à l'intérieur de QuizProvider.");
  }
  return context;
}
