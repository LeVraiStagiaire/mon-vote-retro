import { RankingRow } from "./RankingRow";
import type { ScoredCandidate } from "@/lib/scoring";

interface RankingListProps {
  ranking: ScoredCandidate[];
  year: number;
}

export function RankingList({ ranking, year }: RankingListProps) {
  return (
    <section className="rounded-[2rem] border border-ink/8 bg-white p-4 shadow-soft sm:p-6">
      <div className="flex items-baseline justify-between gap-3 px-1">
        <h2 className="text-2xl text-ink">Classement {year}</h2>
        <span className="text-xs text-ink/40">{ranking.length} candidats</span>
      </div>
      <p className="mt-1 px-1 text-xs text-ink/45">
        Cliquez sur un candidat pour voir le détail de vos accords, question par question.
      </p>
      <div className="mt-3 space-y-1">
        {ranking.map((scored, index) => (
          <RankingRow key={scored.candidate.id} scored={scored} rank={index + 1} />
        ))}
      </div>
    </section>
  );
}
