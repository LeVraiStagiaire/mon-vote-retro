import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { THEME_MAP } from "@/data/themes";
import type { Question } from "@/data/questions";
import { ThemePill } from "./ThemePill";
import { LikertScale } from "./LikertScale";

interface QuestionCardProps {
  question: Question;
  value: number | null | undefined;
  onSelect: (value: number) => void;
  onSkip: () => void;
  disabled?: boolean;
}

export function QuestionCard({ question, value, onSelect, onSkip, disabled }: QuestionCardProps) {
  const theme = THEME_MAP[question.themeId];
  const [contextOpen, setContextOpen] = useState(false);

  return (
    <div className="rounded-[2rem] border border-ink/8 bg-white p-5 shadow-lift sm:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ThemePill theme={theme} />
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink/30">
          {question.express ? "Question clé" : theme.shortLabel}
        </span>
      </div>

      <h1
        className="mt-6 text-balance font-display text-[1.75rem] leading-[1.15] text-ink sm:text-4xl"
        data-testid="question-text"
      >
        {question.text}
      </h1>

      <div className="mt-4">
        <button
          type="button"
          onClick={() => setContextOpen((open) => !open)}
          aria-expanded={contextOpen}
          aria-controls="question-context"
          data-testid="question-context-toggle"
          className="inline-flex w-full items-center gap-2 rounded-xl px-2 py-2 text-left text-[13px] font-medium text-ink/55 transition-colors hover:bg-cream hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <Info className="h-4 w-4 shrink-0 text-ink/35" aria-hidden="true" />
          <span className="flex-1">Le contexte de cette question</span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-ink/35 transition-transform duration-300 ease-soft ${
              contextOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {contextOpen && (
          <div
            id="question-context"
            data-testid="question-context"
            className="mt-2 max-w-2xl animate-fade-slide-in rounded-2xl border border-ink/6 bg-cream/70 px-4 py-3 text-[13px] leading-relaxed text-ink/65"
          >
            {question.context}
          </div>
        )}
      </div>

      <p className="mt-3 text-sm text-ink/45">
        Êtes-vous d'accord avec cette proposition&nbsp;?
      </p>

      <div className="mt-6">
        <LikertScale value={value} onSelect={onSelect} disabled={disabled} />
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-ink/8 pt-4">
        <button
          type="button"
          onClick={onSkip}
          disabled={disabled}
          data-testid="answer-skip"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-ink/50 transition hover:bg-ink/5 hover:text-ink"
        >
          Je ne sais pas
          <kbd className="rounded border border-ink/15 bg-cream px-1.5 py-0.5 text-[10px] font-semibold text-ink/40">
            0
          </kbd>
        </button>
        <p className="text-xs text-ink/35">Votre choix est enregistré automatiquement.</p>
      </div>
    </div>
  );
}
