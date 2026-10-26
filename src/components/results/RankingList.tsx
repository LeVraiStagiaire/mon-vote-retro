import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { RankingRow } from "./RankingRow";
import type { QuizMode } from "@/data/questions";
import { downloadRankingImage } from "@/lib/export-image";
import type { ScoredCandidate } from "@/lib/scoring";

interface RankingListProps {
  ranking: ScoredCandidate[];
  year: number;
  mode: QuizMode;
  answered: number;
  total: number;
}

export function RankingList({ ranking, year, mode, answered, total }: RankingListProps) {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      const filename = await downloadRankingImage({
        year,
        mode,
        answered,
        total,
        ranking: ranking
          .filter((scored) => scored.score != null)
          .map((scored) => ({ candidate: scored.candidate, score: scored.score as number })),
      });
      toast.success("Image du classement enregistrée", { description: filename });
    } catch {
      toast.error("Export impossible", {
        description: "Votre navigateur n'a pas pu générer l'image. Réessayez depuis un autre navigateur.",
      });
    } finally {
      setExporting(false);
    }
  };

  return (
    <section className="rounded-[2rem] border border-ink/8 bg-white p-4 shadow-soft sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 px-1">
        <div>
          <h2 className="text-2xl text-ink">Classement {year}</h2>
          <p className="mt-1 text-xs text-ink/45">
            Cliquez sur un candidat pour voir le détail de vos accords, question par question.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-medium text-ink/50">
            {ranking.length} candidats
          </span>
          <button
            type="button"
            onClick={handleExport}
            disabled={exporting}
            data-testid="export-ranking-image"
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 text-xs font-semibold text-ink/65 transition hover:border-primary/30 hover:text-primary disabled:cursor-progress disabled:opacity-70"
          >
            {exporting ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Download className="h-3.5 w-3.5" />
            )}
            {exporting ? "Création…" : "Exporter en image"}
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        {ranking.map((scored, index) => (
          <RankingRow key={scored.candidate.id} scored={scored} rank={index + 1} />
        ))}
      </div>

      <p className="mt-3 px-1 text-[11px] leading-relaxed text-ink/35">
        L'image exportée reprend votre podium et les six premières places, avec mention de la méthode.
      </p>
    </section>
  );
}
