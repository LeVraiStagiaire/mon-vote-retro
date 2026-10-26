import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CandidateAvatar } from "@/components/candidates/CandidateAvatar";
import { useQuiz } from "@/context/QuizContext";
import { ELECTIONS } from "@/data/elections";
import { questionSet } from "@/data/questions";
import { championsByYear, hasEnoughAnswers } from "@/lib/scoring";
import { cn } from "@/lib/utils";

export function EraSwitch() {
  const navigate = useNavigate();
  const { session, answers, weights, selectYear } = useQuiz();
  const questions = questionSet(session.mode);
  const enough = hasEnoughAnswers(answers, questions);

  const champions = useMemo(
    () => championsByYear(answers, weights, session.mode, ELECTIONS.map((election) => election.year)),
    [answers, session.mode, weights],
  );

  if (!enough || session.year == null) return null;

  const others = champions.filter((champion) => champion.year !== session.year);

  return (
    <section className="rounded-[2rem] border border-ink/8 bg-white p-4 shadow-soft sm:p-6">
      <h2 className="text-2xl text-ink">Rejouer mes réponses</h2>
      <p className="mt-1 text-xs leading-relaxed text-ink/45">
        Vos réponses s'appliquent à tous les scrutins : voici qui vous auriez pu soutenir les autres
        années, sans repasser le questionnaire.
      </p>

      <div className="mt-4 space-y-2">
        {others.map((champion) => {
          const best = champion.best;
          if (!best) return null;
          const percent = best.score == null ? 0 : Math.round(best.score * 100);
          return (
            <button
              key={champion.year}
              type="button"
              onClick={() => {
                selectYear(champion.year);
                navigate("/resultats");
              }}
              data-testid={`era-switch-${champion.year}`}
              className={cn(
                "flex w-full items-center gap-3 rounded-2xl border border-transparent bg-cream/50 px-3 py-2.5 text-left transition",
                "hover:border-ink/10 hover:bg-lavender/30",
              )}
            >
              <span className="w-10 shrink-0 font-display text-sm text-ink/45">{champion.year}</span>
              <CandidateAvatar candidate={best.candidate} size="sm" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-ink">
                  {best.candidate.firstName} {best.candidate.lastName}
                </span>
                <span className="block truncate text-[11px] text-ink/45">{best.candidate.partyShort}</span>
              </span>
              <span className="shrink-0 font-display text-lg text-ink/70">{percent} %</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-ink/30" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
