import {
  BriefcaseBusiness,
  Flag,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Scale,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

export type ThemeId =
  | "economie"
  | "travail"
  | "social"
  | "education"
  | "immigration"
  | "securite"
  | "ecologie"
  | "europe"
  | "international"
  | "societe";

export interface Theme {
  id: ThemeId;
  label: string;
  shortLabel: string;
  description: string;
  color: string;
  soft: string;
  icon: LucideIcon;
}

export const THEMES: Theme[] = [
  {
    id: "economie",
    label: "Économie & fiscalité",
    shortLabel: "Économie",
    description: "Impôts, dépense publique, place du marché et de l'État.",
    color: "#4F46E5",
    soft: "#E7E5FE",
    icon: Landmark,
  },
  {
    id: "travail",
    label: "Travail & emploi",
    shortLabel: "Travail",
    description: "Droit du travail, salaires, retraites, dialogue social.",
    color: "#0F766E",
    soft: "#DEF3F1",
    icon: BriefcaseBusiness,
  },
  {
    id: "social",
    label: "Social & santé",
    shortLabel: "Social",
    description: "Protection sociale, hôpital, prestations, solidarité.",
    color: "#BE185D",
    soft: "#FBE4EF",
    icon: HeartPulse,
  },
  {
    id: "education",
    label: "Éducation",
    shortLabel: "Éducation",
    description: "École, université, sélection, moyens et autonomie.",
    color: "#B45309",
    soft: "#FCEEDC",
    icon: GraduationCap,
  },
  {
    id: "immigration",
    label: "Immigration & intégration",
    shortLabel: "Immigration",
    description: "Frontières, asile, régularisations, naturalisation.",
    color: "#7C3AED",
    soft: "#F0E9FE",
    icon: Users,
  },
  {
    id: "securite",
    label: "Sécurité & justice",
    shortLabel: "Sécurité",
    description: "Peines, police, libertés publiques, prévention.",
    color: "#1D4ED8",
    soft: "#E3EAFD",
    icon: Scale,
  },
  {
    id: "ecologie",
    label: "Écologie & énergie",
    shortLabel: "Écologie",
    description: "Climat, nucléaire, transports, agriculture, normes.",
    color: "#15803D",
    soft: "#E2F5E7",
    icon: Leaf,
  },
  {
    id: "europe",
    label: "Europe & institutions",
    shortLabel: "Europe",
    description: "Traits européens, souveraineté, fonctionnement des institutions.",
    color: "#0369A1",
    soft: "#E0F0FA",
    icon: Flag,
  },
  {
    id: "international",
    label: "International & défense",
    shortLabel: "International",
    description: "Alliances, opérations militaires, diplomatie, dissuasion.",
    color: "#4338CA",
    soft: "#E8E6FE",
    icon: Globe2,
  },
  {
    id: "societe",
    label: "Société & valeurs",
    shortLabel: "Société",
    description: "Famille, droits, laïcité, bioéthique, culture.",
    color: "#9D174D",
    soft: "#FBE3EE",
    icon: Sparkles,
  },
];

export const THEME_IDS: ThemeId[] = THEMES.map((t) => t.id);

export const THEME_MAP: Record<ThemeId, Theme> = THEMES.reduce(
  (acc, theme) => {
    acc[theme.id] = theme;
    return acc;
  },
  {} as Record<ThemeId, Theme>,
);
