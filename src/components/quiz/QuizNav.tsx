import { ArrowLeft, ArrowRight } from "lucide-react";

interface QuizNavProps {
  onPrevious: () => void;
  onNext: () => void;
  canPrevious: boolean;
  isLast: boolean;
  answeredCurrent: boolean;
}

export function QuizNav({ onPrevious, onNext, canPrevious, isLast, answeredCurrent }: QuizNavProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <button
        type="button"
        onClick={onPrevious}
        disabled={!canPrevious}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/10 bg-white px-4 text-sm font-semibold text-ink/70 transition hover:border-ink/25 hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowLeft className="h-4 w-4" />
        Précédent
      </button>

      <div className="flex items-center gap-3">
        <p className="hidden text-xs text-ink/40 sm:block">
          Touches 1 à 5 · 0 pour sans opinion · ← pour revenir
        </p>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-cream transition hover:bg-ink/90"
        >
          {isLast ? "Voir mes résultats" : answeredCurrent ? "Suivant" : "Passer"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
