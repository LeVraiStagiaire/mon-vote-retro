import { AlertTriangle, CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoverageBadgeProps {
  coverage: number;
  lowCoverage: boolean;
  className?: string;
}

export function CoverageBadge({ coverage, lowCoverage, className }: CoverageBadgeProps) {
  const percent = Math.round(coverage * 100);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold",
        lowCoverage ? "bg-disagree-soft text-disagree" : "bg-ink/5 text-ink/45",
        className,
      )}
      title={
        lowCoverage
          ? `Seulement ${percent} % des questions répondues ont une position connue pour ce candidat.`
          : `${percent} % des questions répondues ont une position connue pour ce candidat.`
      }
    >
      {lowCoverage ? <AlertTriangle className="h-3 w-3" /> : <CircleCheck className="h-3 w-3" />}
      {lowCoverage ? "Faible couverture" : `${percent} % couvert`}
    </span>
  );
}
