import { Minus, ThumbsDown, ThumbsUp } from "lucide-react";
import type { AgreementEntry } from "@/lib/scoring";
import { cn } from "@/lib/utils";

interface AgreementHighlightsProps {
  title: string;
  entries: AgreementEntry[];
  direction: "agree" | "disagree";
}

export function AgreementHighlights({ title, entries, direction }: AgreementHighlightsProps) {
  if (entries.length === 0) return null;
  const Icon = direction === "agree" ? ThumbsUp : ThumbsDown;

  return (
    <section className="rounded-[1.75rem] border border-ink/8 bg-white p-4 shadow-soft sm:p-5">
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "grid h-8 w-8 place-items-center rounded-xl",
            direction === "agree" ? "bg-agree-soft text-agree" : "bg-disagree-soft text-disagree",
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="text-lg text-ink">{title}</h2>
      </div>
      <ul className="mt-3 space-y-3">
        {entries.map((entry) => (
          <li key={entry.question.id} className="flex items-start gap-3">
            <span className="mt-1 shrink-0">
              <Minus className="h-3.5 w-3.5 text-ink/20" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] leading-snug text-ink/75">{entry.question.text}</p>
              <p className="mt-0.5 text-[11px] text-ink/40">
                accord : {Math.round(entry.value * 100)} %
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
