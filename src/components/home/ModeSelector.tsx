import { Gauge, ListChecks } from "lucide-react";
import type { QuizMode } from "@/data/questions";
import { cn } from "@/lib/utils";

interface ModeSelectorProps {
  mode: QuizMode;
  onSelect: (mode: QuizMode) => void;
}

const MODES = [
  {
    id: "express" as QuizMode,
    title: "Express",
    questions: "20 questions",
    duration: "≈ 4 minutes",
    description: "2 questions par thème, l'essentiel pour dégager une tendance.",
    icon: Gauge,
  },
  {
    id: "complet" as QuizMode,
    title: "Complet",
    questions: "100 questions",
    duration: "≈ 15 minutes",
    description: "10 questions par thème, un classement nettement plus fin.",
    icon: ListChecks,
  },
];

export function ModeSelector({ mode, onSelect }: ModeSelectorProps) {
  return (
    <div className="animate-fade-slide-in">
      <h2 className="text-3xl text-ink sm:text-4xl">2. Choisissez le format</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
        Les deux formats reposent sur le questionnaire de l'année, en 10 thèmes. L'Express reprend les
        20 questions clés (2 par thème) du Complet, sans dupliquer aucune donnée. L'ordre des questions
        est tiré au sort à chaque nouvelle partie.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {MODES.map((item) => {
          const Icon = item.icon;
          const selected = mode === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              aria-pressed={selected}
              data-testid={`mode-${item.id}`}
              className={cn(
                "flex flex-col gap-3 rounded-[1.75rem] border p-5 text-left transition-all duration-300",
                selected
                  ? "border-primary/40 bg-white shadow-lift ring-2 ring-primary"
                  : "border-ink/8 bg-white/70 shadow-soft hover:border-ink/20",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-2xl",
                    selected ? "bg-primary text-cream" : "bg-lavender text-primary",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-semibold text-ink/60">
                  {item.duration}
                </span>
              </div>
              <div>
                <p className="font-display text-2xl text-ink">{item.title}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                  {item.questions}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-ink/60">{item.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
