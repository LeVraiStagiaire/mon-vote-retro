import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { candidatesForYear } from "@/data/candidates";
import { ERA_CONTEXTS } from "@/data/contexts";
import { ELECTIONS, type ElectionYear } from "@/data/elections";
import { cn } from "@/lib/utils";

interface EraSelectorProps {
  selectedYear: ElectionYear | null;
  onSelect: (year: ElectionYear) => void;
}

export function EraSelector({ selectedYear, onSelect }: EraSelectorProps) {
  return (
    <section id="epoques" className="scroll-mt-24">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl text-ink sm:text-4xl">1. Choisissez une époque</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
            Chaque scrutin a son propre questionnaire de 100 questions, écrit avec les débats et le
            vocabulaire de l'année. Choisissez une campagne, vous verrez ses enjeux et son contexte.
          </p>
        </div>
        <span className="text-xs font-medium text-ink/40">5 scrutins · 500 questions</span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {ELECTIONS.map((election, index) => {
          const selected = selectedYear === election.year;
          const candidates = candidatesForYear(election.year);
          const context = ERA_CONTEXTS[election.year];
          return (
            <Reveal key={election.year} delay={index * 60} className="h-full">
              <button
                type="button"
                onClick={() => onSelect(election.year)}
                aria-pressed={selected}
                data-testid={`era-${election.year}`}
                className={cn(
                  "group relative flex h-full flex-col justify-between gap-4 rounded-[1.75rem] border bg-white p-5 text-left transition-all duration-300 active:scale-[0.99]",
                  selected
                    ? "border-primary/40 bg-lavender/40 shadow-lift ring-2 ring-primary"
                    : "border-ink/8 shadow-soft hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-lift",
                )}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-display text-4xl leading-none text-ink">{election.year}</span>
                    <span
                      className={cn(
                        "grid h-6 w-6 place-items-center rounded-full transition-colors",
                        selected
                          ? "animate-ring-in bg-primary text-cream"
                          : "bg-ink/5 text-transparent",
                      )}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-snug text-ink/80">{election.tagline}</p>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {context.keyIssues.slice(0, 3).map((issue) => (
                      <span
                        key={issue}
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-medium",
                          selected ? "bg-white text-primary" : "bg-cream text-ink/50",
                        )}
                      >
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink/35">
                    Vainqueur du 1er tour
                  </p>
                  <p className="text-sm font-medium text-ink">{election.firstRoundWinner}</p>
                  <p className="text-xs text-ink/45">
                    {candidates.length} candidats · {election.date}
                  </p>
                  <p className="text-[11px] font-semibold text-primary/70">100 questions propres</p>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
