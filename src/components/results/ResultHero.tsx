import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Info } from "lucide-react";
import { CandidateAvatar } from "@/components/candidates/CandidateAvatar";
import { CoverageBadge } from "./CoverageBadge";
import { fullName } from "@/data/candidates";
import { ELECTION_MAP, type ElectionYear } from "@/data/elections";
import { formatScore } from "@/lib/format";
import type { ScoredCandidate } from "@/lib/scoring";

function useCountUp(target: number, duration = 900) {
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [duration, target]);

  return value;
}

interface ResultHeroProps {
  scored: ScoredCandidate;
  year: ElectionYear;
  answered: number;
}

export function ResultHero({ scored, year, answered }: ResultHeroProps) {
  const election = ELECTION_MAP[year];
  const candidate = scored.candidate;
  const percent = (scored.score ?? 0) * 100;
  const animated = useCountUp(percent);

  return (
    <section className="overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-lift">
      <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <div className="flex items-center gap-4">
          <CandidateAvatar candidate={candidate} size="xl" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            En {year}, vous auriez voté pour
          </p>
          <h1
            data-testid="winner-name"
            className="mt-2 text-balance font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
          >
            {fullName(candidate)}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${candidate.color}18`, color: candidate.color }}
            >
              {candidate.party}
            </span>
            <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/60">
              {formatScore(candidate.score)} % au 1er tour {year}
            </span>
            <CoverageBadge coverage={scored.coverage} lowCoverage={scored.flags.lowCoverage} />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/60">{candidate.bio}</p>
          <Link
            to={`/candidat/${candidate.id}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
          >
            Voir sa fiche et vos accords
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col items-start rounded-[1.5rem] bg-lavender/60 px-6 py-5 lg:items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
            Compatibilité
          </p>
          <p className="mt-1 font-display text-6xl leading-none text-primary" data-testid="winner-score">
            {animated.toLocaleString("fr-FR", { maximumFractionDigits: 0 })}
            <span className="text-2xl text-primary/60">%</span>
          </p>
          <p className="mt-2 text-center text-[11px] leading-relaxed text-ink/45">
            sur {answered} réponse{answered > 1 ? "s" : ""} · {election.year}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-ink/8 bg-cream/60 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-9">
        <p className="flex items-center gap-2 text-xs text-ink/45">
          <Info className="h-3.5 w-3.5 shrink-0" />
          Score indicatif, calculé sur des positions éditorialisées — pas une citation de programme.
        </p>
        <Link to="/methode" className="text-xs font-semibold text-primary hover:underline">
          Comprendre le calcul
        </Link>
      </div>
    </section>
  );
}
