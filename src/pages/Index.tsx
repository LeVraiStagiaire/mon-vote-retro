import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/home/Hero";
import { EraSelector } from "@/components/home/EraSelector";
import { ModeSelector } from "@/components/home/ModeSelector";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MethodCallout } from "@/components/home/MethodCallout";
import { ResumeBanner } from "@/components/quiz/ResumeBanner";
import { Reveal } from "@/components/Reveal";
import { useQuiz } from "@/context/QuizContext";
import { ELECTION_MAP } from "@/data/elections";
import { questionCountForMode } from "@/data/questions";
import { cn } from "@/lib/utils";

const Index = () => {
  const navigate = useNavigate();
  const { session, selectYear, setMode, start } = useQuiz();
  const year = session.year;
  const election = year ? ELECTION_MAP[year] : null;
  const total = questionCountForMode(session.mode);

  const handleStart = () => {
    if (!year) return;
    start();
    navigate("/questionnaire");
  };

  return (
    <PageShell>
      <Hero />

      <div className="space-y-14 pb-10 pt-2 sm:space-y-20">
        <ResumeBanner />

        <div className="space-y-8">
          <EraSelector selectedYear={year} onSelect={selectYear} />

          {year ? (
            <div className="space-y-6 rounded-[2rem] border border-ink/8 bg-white/70 p-5 shadow-soft sm:p-8">
              <ModeSelector mode={session.mode} onSelect={setMode} />

              <div className="flex flex-col gap-3 border-t border-ink/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {election?.label} · {total} questions
                  </p>
                  <p className="text-xs text-ink/50">
                    Second tour : {election?.runoff}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleStart}
                  data-testid="start-quiz"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-cream shadow-soft transition hover:bg-primary/90 active:scale-[0.98]"
                >
                  Commencer le questionnaire
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center rounded-[1.75rem] border border-dashed border-ink/15 bg-white/50 px-5 py-6 text-center">
              <p className="text-sm text-ink/50">
                Sélectionnez une année ci-dessus pour choisir votre format et démarrer.
              </p>
            </div>
          )}
        </div>

        <HowItWorks />
        <MethodCallout />

        <Reveal>
          <section className="rounded-[2rem] border border-ink/8 bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { value: "61", label: "candidats du 1er tour" },
                { value: "10", label: "thèmes, 10 questions chacun" },
                { value: "0", label: "donnée personnelle collectée" },
              ].map((stat) => (
                <div key={stat.label} className={cn("text-center sm:text-left")}>
                  <p className="font-display text-5xl leading-none text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-ink/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
};

export default Index;
