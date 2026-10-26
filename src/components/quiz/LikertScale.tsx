import { cn } from "@/lib/utils";

const OPTIONS = [
  { value: -2, label: "Pas du tout d'accord", short: "Pas du tout", tone: "#F97360" },
  { value: -1, label: "Plutôt pas d'accord", short: "Plutôt non", tone: "#F9A38F" },
  { value: 0, label: "Ni d'accord ni pas d'accord", short: "Ni l'un ni l'autre", tone: "#C9C5D6" },
  { value: 1, label: "Plutôt d'accord", short: "Plutôt oui", tone: "#6FC5B7" },
  { value: 2, label: "Tout à fait d'accord", short: "Tout à fait", tone: "#0F9D8A" },
];

interface LikertScaleProps {
  value: number | null | undefined;
  onSelect: (value: number) => void;
  disabled?: boolean;
}

export function LikertScale({ value, onSelect, disabled }: LikertScaleProps) {
  return (
    <div
      className="grid gap-2 md:grid-cols-5"
      role="group"
      aria-label="Votre degré d'accord avec cette proposition"
    >
      {OPTIONS.map((option, position) => {
        const selected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(option.value)}
            aria-pressed={selected}
            aria-label={`${option.label} (touche ${position + 1})`}
            data-testid={`answer-${option.value}`}
            className={cn(
              "group flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-200",
              "md:flex-col md:items-center md:gap-2.5 md:px-3 md:py-5 md:text-center",
              selected
                ? "border-primary bg-primary text-cream shadow-soft"
                : "border-ink/10 bg-white text-ink hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-soft",
              "active:scale-[0.98]",
            )}
          >
            <span
              className={cn(
                "grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold transition",
                selected && "animate-ring-in bg-cream/20 text-cream",
              )}
              style={selected ? undefined : { backgroundColor: `${option.tone}26`, color: option.tone }}
            >
              {position + 1}
            </span>
            <span className="text-sm font-semibold leading-tight">{option.short}</span>
          </button>
        );
      })}
    </div>
  );
}
