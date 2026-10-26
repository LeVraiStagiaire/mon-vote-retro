import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useQuiz } from "@/context/QuizContext";
import { ELECTION_MAP } from "@/data/elections";

export function ResumeBanner() {
  const { session, questions, answered, start, restart } = useQuiz();

  if (session.status !== "running" || session.year == null) return null;

  const election = ELECTION_MAP[session.year];
  const remaining = Math.max(questions.length - answered, 0);

  return (
    <div className="flex animate-fade-slide-in flex-col gap-4 rounded-[1.75rem] border border-agree/20 bg-agree-soft/70 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-agree shadow-soft">
          <RotateCcw className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">
            Questionnaire en cours — {election.label}
          </p>
          <p className="text-xs text-ink/60">
            {answered} réponse{answered > 1 ? "s" : ""} enregistrée{answered > 1 ? "s" : ""} · encore{" "}
            {remaining} question{remaining > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Link
          to="/questionnaire"
          onClick={start}
          className="inline-flex h-10 items-center gap-1.5 rounded-full bg-agree px-4 text-sm font-semibold text-white transition hover:bg-agree/90"
        >
          Reprendre
          <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={restart}
          className="inline-flex h-10 items-center rounded-full px-3 text-xs font-semibold text-ink/50 transition hover:text-ink"
        >
          Effacer
        </button>
      </div>
    </div>
  );
}
