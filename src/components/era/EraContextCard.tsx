import { Link } from "react-router-dom";
import { ArrowUpRight, CircleSlash, Flag, History } from "lucide-react";
import { ERA_CONTEXTS } from "@/data/contexts";
import type { ElectionYear } from "@/data/elections";
import { cn } from "@/lib/utils";

interface EraContextCardProps {
  year: ElectionYear;
  variant?: "compact" | "full";
}

/**
 * Carte de contexte historique : accroche, enjeux de campagne, frise datée et
 * « ce qui n'existait pas encore ». La variante `full` ajoute le résumé et les
 * sources, et renvoie vers la méthode.
 */
export function EraContextCard({ year, variant = "compact" }: EraContextCardProps) {
  const context = ERA_CONTEXTS[year];
  const full = variant === "full";
  const timeline = full ? context.timeline : context.timeline.slice(0, 4);
  const notYet = full ? context.notYet : context.notYet.slice(0, 2);

  return (
    <section
      data-testid={`era-context-${variant}`}
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white shadow-soft",
        full ? "p-6 sm:p-8" : "p-5 sm:p-6",
      )}
    >
      <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lavender/70" />

      <div className="relative flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream">
          <History className="h-3 w-3" />
          Contexte {year}
        </span>
        <span className="rounded-full border border-ink/10 px-2.5 py-1 text-[11px] font-medium text-ink/50">
          {context.dominantIssue}
        </span>
      </div>

      <h3
        className={cn(
          "relative mt-4 max-w-2xl text-balance font-display leading-[1.15] text-ink",
          full ? "text-3xl sm:text-4xl" : "text-2xl sm:text-[1.75rem]",
        )}
      >
        {context.lead}
      </h3>

      {full && (
        <p className="relative mt-3 max-w-3xl text-sm leading-relaxed text-ink/65">{context.summary}</p>
      )}

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {context.keyIssues.map((issue) => (
          <span
            key={issue}
            className="inline-flex items-center gap-1.5 rounded-full bg-lavender/60 px-3 py-1 text-xs font-medium text-primary"
          >
            <Flag className="h-3 w-3" />
            {issue}
          </span>
        ))}
      </div>

      <div className={cn("relative mt-5 grid gap-5", full ? "md:grid-cols-[1.1fr_0.9fr]" : "sm:grid-cols-2")}>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/35">
            La campagne en dates
          </p>
          <ol className="mt-3 space-y-2.5">
            {timeline.map((entry) => (
              <li key={entry.date} className="relative flex gap-3 pl-1">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/80">
                    {entry.date}
                  </p>
                  <p className="text-[13px] leading-snug text-ink/70">{entry.label}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl bg-cream/80 p-4">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/35">
            <CircleSlash className="h-3 w-3" />
            Ce qui n'existait pas encore
          </p>
          <ul className="mt-2.5 space-y-2">
            {notYet.map((item) => (
              <li key={item} className="flex gap-2 text-[13px] leading-snug text-ink/65">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink/25" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {full && (
        <div className="relative mt-5 flex flex-col gap-3 border-t border-ink/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-relaxed text-ink/40">{context.sources.join(" · ")}</p>
          <Link
            to="/methode"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition hover:gap-2.5"
          >
            Comment les questions sont écrites
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </section>
  );
}
