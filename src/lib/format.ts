export function formatScore(value: number): string {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

/** Libellés de l'échelle de réponse. */
export const SCALE_LABELS: Record<number, { short: string; long: string }> = {
  [-2]: { short: "Pas du tout d'accord", long: "Pas du tout d'accord" },
  [-1]: { short: "Plutôt pas d'accord", long: "Plutôt pas d'accord" },
  0: { short: "Ni l'un ni l'autre", long: "Ni d'accord ni pas d'accord" },
  1: { short: "Plutôt d'accord", long: "Plutôt d'accord" },
  2: { short: "Tout à fait d'accord", long: "Tout à fait d'accord" },
};

export function positionLabel(value: number | null): string {
  if (value == null) return "Pas de position documentée";
  return SCALE_LABELS[value]?.short ?? "—";
}
