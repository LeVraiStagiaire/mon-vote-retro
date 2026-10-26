import { ELECTIONS, type ElectionYear } from "@/data/elections";
import { cn } from "@/lib/utils";

export type YearFilter = ElectionYear | "all";

interface CandidateFiltersProps {
  year: YearFilter;
  onYearChange: (year: YearFilter) => void;
  party: string;
  onPartyChange: (party: string) => void;
  parties: string[];
  count: number;
}

export function CandidateFilters({
  year,
  onYearChange,
  party,
  onPartyChange,
  parties,
  count,
}: CandidateFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 no-scrollbar">
        <button
          type="button"
          onClick={() => onYearChange("all")}
          aria-pressed={year === "all"}
          className={cn(
            "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
            year === "all"
              ? "border-primary bg-primary text-cream"
              : "border-ink/10 bg-white text-ink/60 hover:text-ink",
          )}
        >
          Toutes les années
        </button>
        {ELECTIONS.map((election) => (
          <button
            key={election.year}
            type="button"
            onClick={() => onYearChange(election.year)}
            aria-pressed={year === election.year}
            data-testid={`filter-year-${election.year}`}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
              year === election.year
                ? "border-primary bg-primary text-cream"
                : "border-ink/10 bg-white text-ink/60 hover:text-ink",
            )}
          >
            {election.year}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="party-filter" className="text-xs font-semibold text-ink/40">
          Parti
        </label>
        <select
          id="party-filter"
          value={party}
          onChange={(event) => onPartyChange(event.target.value)}
          className="h-10 rounded-full border border-ink/10 bg-white px-4 text-sm font-medium text-ink/70 outline-none transition focus:border-primary"
        >
          <option value="all">Tous les partis</option>
          {parties.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="ml-auto text-xs text-ink/40">
          {count} candidat{count > 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}
