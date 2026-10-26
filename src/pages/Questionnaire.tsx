import { useCallback, useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { QuizNav } from "@/components/quiz/QuizNav";
import { ThemePill } from "@/components/quiz/ThemePill";
import { useQuiz } from "@/context/QuizContext";
import { ELECTION_MAP } from "@/data/elections";
import { THEME_MAP } from "@/data/themes";
import { cn } from "@/lib/utils";

const KEY_VALUES: Record<string, number> = {
  "1": -2,
  "2": -1,
  "3": 0,
  "4": 1,
  "5": 2,
};

const Questionnaire = () => {
  const navigate = useNavigate();
  const { session, questions, currentQuestion, answered, answer, next, previous, finish } = useQuiz();
  const [selected, setSelected] = useState<number | null | undefined>(undefined);
  const [interlude, setInterlude] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const halfShown = useRef(false);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  const commit = useCallback(
    (value: number | null) => {
      if (!currentQuestion) return;
      setSelected(value);
      setDirection("forward");
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        answer(currentQuestion.id, value);
        setSelected(undefined);
        const nextIndex = session.index + 1;
        if (nextIndex >= questions.length) {
          finish();
          navigate("/resultats");
          return;
        }
        next();
        if (!halfShown.current && nextIndex === Math.floor(questions.length / 2)) {
          halfShown.current = true;
          setInterlude(true);
        }
      }, 180);
    },
    [answer, currentQuestion, finish, navigate, next, questions.length, session.index],
  );

  useEffect(() => {
    if (interlude) return;
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setDirection("backward");
        previous();
        return;
      }
      if (event.key === "0") {
        event.preventDefault();
        commit(null);
        return;
      }
      const value = KEY_VALUES[event.key];
      if (value !== undefined) {
        event.preventDefault();
        commit(value);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [commit, interlude, previous]);

  if (session.year == null) return <Navigate to="/" replace />;
  if (session.status === "idle") return <Navigate to="/" replace />;
  if (session.status === "done") return <Navigate to="/resultats" replace />;
  if (!currentQuestion) return <Navigate to="/" replace />;

  const election = ELECTION_MAP[session.year];
  const currentValue = selected !== undefined ? selected : session.answers[currentQuestion.id];
  const isLast = session.index === questions.length - 1;
  const halfway = Math.floor(questions.length / 2);
  const nextQuestion = questions[session.index + 1];
  const nextTheme = nextQuestion ? THEME_MAP[nextQuestion.themeId] : null;

  if (interlude) {
    return (
      <PageShell width="narrow" className="pb-16 pt-8 sm:pt-12">
        <div className="animate-pop-in rounded-[2rem] border border-ink/8 bg-white p-7 text-center shadow-lift sm:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            À mi-parcours
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            {answered} questions, {questions.length - answered} à tenir
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/60">
            Vous avez déjà couvert la moitié du questionnaire. Les thèmes se succèdent dans un ordre
            mélangé — on continue.
          </p>
          {nextTheme && (
            <div className="mt-6 flex justify-center">
              <ThemePill theme={nextTheme} />
            </div>
          )}
          <button
            type="button"
            onClick={() => setInterlude(false)}
            data-testid="interlude-continue"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-cream shadow-soft transition hover:bg-primary/90"
          >
            Continuer
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell width="narrow" className="pb-16 pt-6 sm:pt-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/35">
            {election.label} · {session.mode === "express" ? "Format express" : "Format complet"}
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3 text-xs font-semibold text-ink/55 transition hover:text-ink"
        >
          <X className="h-3.5 w-3.5" />
          Quitter
        </Link>
      </div>

      <div className="mt-4">
        <QuizProgress index={session.index} total={questions.length} answered={answered} />
      </div>

      <div
        key={currentQuestion.id}
        className={cn(
          "mt-5",
          direction === "forward" ? "animate-enter-forward" : "animate-enter-backward",
        )}
      >
        <QuestionCard
          question={currentQuestion}
          value={currentValue}
          onSelect={(value) => commit(value)}
          onSkip={() => commit(null)}
        />
      </div>

      <div className="mt-5">
        <QuizNav
          onPrevious={() => {
            setDirection("backward");
            previous();
          }}
          onNext={() => {
            setDirection("forward");
            if (isLast) {
              finish();
              navigate("/resultats");
              return;
            }
            if (session.index + 1 === halfway && !halfShown.current) {
              halfShown.current = true;
              setInterlude(true);
            }
            next();
          }}
          canPrevious={session.index > 0}
          isLast={isLast}
          answeredCurrent={session.answers[currentQuestion.id] != null}
        />
      </div>
    </PageShell>
  );
};

export default Questionnaire;
