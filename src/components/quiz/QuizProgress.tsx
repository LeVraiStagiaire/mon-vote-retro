interface QuizProgressProps {
  index: number;
  total: number;
  answered: number;
}

export function QuizProgress({ index, total, answered }: QuizProgressProps) {
  const percent = total === 0 ? 0 : Math.round(((index + 1) / total) * 100);
  const answeredPercent = total === 0 ? 0 : Math.round((answered / total) * 100);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p
          className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40"
          data-testid="question-counter"
        >
          Question {Math.min(index + 1, total)} / {total}
        </p>
        <p className="text-xs text-ink/40">{answeredPercent} % répondu</p>
      </div>
      <div
        className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/8"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={index + 1}
        aria-label="Progression du questionnaire"
      >
        <div
          className="h-full rounded-full bg-lavender-deep/70 transition-all duration-500"
          style={{ width: `${answeredPercent}%` }}
        />
        <div className="absolute inset-y-0 left-0 h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
