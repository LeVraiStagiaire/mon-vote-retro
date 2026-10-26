import type { Theme } from "@/data/themes";
import { cn } from "@/lib/utils";

interface ThemePillProps {
  theme: Theme;
  showDescription?: boolean;
  className?: string;
}

export function ThemePill({ theme, showDescription = false, className }: ThemePillProps) {
  const Icon = theme.icon;
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
        style={{ backgroundColor: theme.soft, color: theme.color }}
      >
        <Icon className="h-3.5 w-3.5" />
        {theme.label}
      </span>
      {showDescription && <span className="hidden text-xs text-ink/45 sm:inline">{theme.description}</span>}
    </span>
  );
}
