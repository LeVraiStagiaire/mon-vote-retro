import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CandidateAvatar } from "./CandidateAvatar";
import { CoverageBadge } from "@/components/results/CoverageBadge";
import { fullName, type Candidate } from "@/data/candidates";
import { formatScore } from "@/lib/format";
import type { ScoredCandidate } from "@/lib/scoring";

interface CandidateCardProps {
  candidate: Candidate;
  scored?: ScoredCandidate | null;
  /** Candidat d'un autre scrutin : son questionnaire diffère, donc pas de score. */
  otherEra?: boolean;
}

export function CandidateCard({ candidate, scored, otherEra }: CandidateCardProps) {
  const percent = scored?.score == null ? null : Math.round(scored.score * 100);

  return (
    <Link
      to={`/candidat/${candidate.id}`}
      data-testid={`candidate-card-${candidate.id}`}
      className="group flex h-full flex-col gap-4 rounded-[1.75rem] border border-ink/8 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-lift active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-3">
        <CandidateAvatar candidate={candidate} size="md" />
        <div className="flex flex-col items-end gap-1">
          <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-semibold text-ink/55">
            {candidate.year}
          </span>
          {candidate.runoff && (
            <span className="rounded-full bg-lavender px-2.5 py-1 text-[10px] font-semibold text-primary">
              2d tour
            </span>
          )}
        </div>
      </div>

      <div>
        <p className="text-base font-semibold leading-tight text-ink">{fullName(candidate)}</p>
        <p className="mt-0.5 text-xs text-ink/50">{candidate.party}</p>
      </div>

      <div className="mt-auto space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-ink/40">1er tour</span>
          <span className="font-semibold text-ink/70">{formatScore(candidate.score)} %</span>
        </div>

        {percent != null && (
          <div className="rounded-xl bg-lavender/50 px-3 py-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/45">
                Compatibilité
              </span>
              <span className="font-display text-lg leading-none text-primary">{percent} %</span>
            </div>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-primary" style={{ width: `${percent}%` }} />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-2">
          {scored ? (
            <CoverageBadge coverage={scored.coverage} lowCoverage={scored.flags.lowCoverage} />
          ) : otherEra ? (
            <span
              data-testid={`other-era-${candidate.id}`}
              className="rounded-full bg-ink/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink/40"
            >
              Autre scrutin
            </span>
          ) : (
            <span className="text-[10px] uppercase tracking-[0.12em] text-ink/30">
              {candidate.partyShort}
            </span>
          )}
          <ArrowUpRight className="h-4 w-4 text-ink/25 transition group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
}
