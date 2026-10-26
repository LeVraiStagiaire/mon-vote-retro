import { useEffect, useRef, useState } from "react";
import { ChevronDown, History } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ERA_CONTEXTS } from "@/data/contexts";
import type { ElectionYear } from "@/data/elections";
import { cn } from "@/lib/utils";

interface EraContextPanelProps {
  year: ElectionYear;
  /** Index de la question courante : le bandeau est ouvert sur la première. */
  index: number;
}

/** Bandeau de contexte repliable, affiché en haut du questionnaire. */
export function EraContextPanel({ year, index }: EraContextPanelProps) {
  const context = ERA_CONTEXTS[year];
  const [open, setOpen] = useState(index === 0);
  const autoClosed = useRef(index !== 0);

  useEffect(() => {
    if (!autoClosed.current && index > 0) {
      autoClosed.current = true;
      setOpen(false);
    }
  }, [index]);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="overflow-hidden rounded-[1.5rem] border border-ink/8 bg-white/80 shadow-soft"
    >
      <CollapsibleTrigger
        data-testid="era-context-toggle"
        aria-label={`Contexte ${year}`}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-cream/60"
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-lavender text-primary">
            <History className="h-3.5 w-3.5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-ink">Contexte {year}</span>
            <span className="block truncate text-[11px] text-ink/45">{context.dominantIssue}</span>
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-1.5 text-[11px] font-semibold text-ink/40">
          {open ? "Replier" : "Déplier"}
          <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        </span>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="space-y-3 border-t border-ink/8 bg-cream/40 px-4 py-4">
          <p className="text-sm leading-relaxed text-ink/70">{context.lead}</p>

          <div className="flex flex-wrap gap-1.5">
            {context.keyIssues.map((issue) => (
              <span
                key={issue}
                className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-primary"
              >
                {issue}
              </span>
            ))}
          </div>

          <ol className="space-y-1.5">
            {context.timeline.slice(0, 4).map((entry) => (
              <li key={entry.date} className="flex gap-2 text-[12px] leading-snug text-ink/60">
                <span className="shrink-0 font-semibold text-primary/75">{entry.date}</span>
                <span>{entry.label}</span>
              </li>
            ))}
          </ol>

          <p className="text-[11px] leading-relaxed text-ink/40">
            Ce qui n'existait pas encore : {context.notYet.slice(0, 2).join(" · ").toLowerCase()}.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
