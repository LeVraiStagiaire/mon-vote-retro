import { RotateCcw } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useQuiz } from "@/context/QuizContext";
import { THEMES } from "@/data/themes";

export function ThemeWeights() {
  const { weights, setWeight, resetWeights } = useQuiz();

  return (
    <section className="rounded-[2rem] border border-ink/8 bg-white p-4 shadow-soft sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-2xl text-ink">Pondérer les thèmes</h2>
          <p className="mt-1 text-xs leading-relaxed text-ink/45">
            Mettez à zéro ce qui compte peu pour vous, doublez ce qui compte le plus. Le classement se
            recalcule instantanément.
          </p>
        </div>
        <button
          type="button"
          onClick={resetWeights}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 text-xs font-semibold text-ink/55 transition hover:text-ink"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Réinitialiser
        </button>
      </div>

      <div className="mt-4 space-y-3.5">
        {THEMES.map((theme) => {
          const weight = weights[theme.id] ?? 1;
          const Icon = theme.icon;
          return (
            <div key={theme.id} className="flex items-center gap-3">
              <span
                className="grid h-8 w-8 shrink-0 place-items-center rounded-xl"
                style={{ backgroundColor: theme.soft, color: theme.color }}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-xs font-semibold text-ink/75">{theme.shortLabel}</p>
                  <p className="shrink-0 text-[11px] font-semibold text-ink/40">×{weight}</p>
                </div>
                <Slider
                  value={[weight]}
                  min={0}
                  max={2}
                  step={1}
                  onValueChange={(values) => setWeight(theme.id, values[0] ?? 1)}
                  aria-label={`Poids du thème ${theme.label}`}
                  className="mt-2 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:border-primary"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
