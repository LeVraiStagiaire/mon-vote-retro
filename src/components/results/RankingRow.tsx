import { Link } from "react-router-dom";
import { CandidateAvatar } from "@/components/candidates/CandidateAvatar";
import { CoverageBadge } from "./CoverageBadge";
import { fullName } from "@/data/candidates";
import { formatScore } from "@/lib/format";
import type { ScoredCandidate } from "@/lib/scoring";
import { cn } from "@/lib/utils";

interface RankingRowProps {
  scored: ScoredCandidate;
  rank: number;
  /** Position dans la liste, pour décaler l'entrée en cascade. */
  index?: number;
}

export function RankingRow({ scored, rank, index = 0 }: RankingRowProps) {
  const candidate = scored.candidate;
  const percent = scored.score == null ? 0 : Math.round(scored.score * 100);
  const top = rank === 1;

  return (
    <Link
      to={`/candidat/${candidate.id}`}
      data-testid={`ranking-row-${candidate.id}`}
      style={{ animationDelay: `${Math.min(index * 35, 350)}ms` }}
      className={cn(
        "group flex animate-fade-slide-in items-center gap-3 rounded-2xl border px-3 py-3 transition sm:gap-4 sm:px-4",
        top
          ? "border-primary/25 bg-lavender/40"
          : "border-transparent bg-white hover:border-ink/10 hover:bg-cream/60",
      )}
    >
      <span
        className={cn(
          "w-5 shrink-0 text-center font-display text-lg leading-none",
          top ? "text-primary" : "text-ink/30",
        )}
      >
        {rank}
      </span>
      <CandidateAvatar candidate={candidate} size="sm" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-ink">{fullName(candidate)}</p>
          <p
            className={cn(
              "shrink-0 font-display text-xl leading-none",
              top ? "text-primary" : "text-ink",
            )}
          >
            {percent}
            <span className="text-xs text-ink/40"> %</span>
          </p>
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/8">
            <div
              className={cn("h-full rounded-full transition-all duration-700", top ? "bg-primary" : "bg-ink/30")}
              style={{ width: `${Math.max(percent, 2)}%` }}
            />
          </div>
          <span className="hidden shrink-0 text-[11px] text-ink/40 sm:block">
            {candidate.partyShort} · {formatScore(candidate.score)} %
          </span>
        </div>
        {scored.flags.lowCoverage && (
          <div className="mt-1.5">
            <CoverageBadge coverage={scored.coverage} lowCoverage />
          </div>
        )}
      </div>
    </Link>
  );
}
