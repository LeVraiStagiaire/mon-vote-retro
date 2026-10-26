import { useMemo } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import type { Candidate } from "@/data/candidates";
import type { ElectionYear } from "@/data/elections";
import { questionSet, type QuizMode } from "@/data/questions";
import { THEMES, type ThemeId } from "@/data/themes";
import { candidatesOfYear, themeScores, type Answers } from "@/lib/scoring";

interface ThemeRadarProps {
  candidate: Candidate;
  answers: Answers;
  year: ElectionYear;
  mode: QuizMode;
}

export function ThemeRadar({ candidate, answers, year, mode }: ThemeRadarProps) {
  const data = useMemo(() => {
    const questions = questionSet(mode);
    const primary = themeScores(candidate, answers, questions);
    const others = candidatesOfYear(year).filter((item) => item.id !== candidate.id);
    const averages = others.map((item) => themeScores(item, answers, questions));

    return THEMES.map((theme) => {
      const values = averages
        .map((scores) => scores[theme.id as ThemeId])
        .filter((value): value is number => value != null);
      const average = values.length
        ? values.reduce((sum, value) => sum + value, 0) / values.length
        : 0;
      return {
        theme: theme.shortLabel,
        candidat: Math.round((primary[theme.id] ?? 0) * 100),
        moyenne: Math.round(average * 100),
      };
    });
  }, [answers, candidate, mode, year]);

  return (
    <section className="rounded-[2rem] border border-ink/8 bg-white p-4 shadow-soft sm:p-6">
      <h2 className="text-2xl text-ink">Accord par thème</h2>
      <p className="mt-1 text-xs leading-relaxed text-ink/45">
        Votre compatibilité avec {candidate.lastName}, comparée à la moyenne des candidats de {year}.
      </p>

      <div className="mt-2 h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="72%">
            <PolarGrid stroke="#E4E1EC" />
            <PolarAngleAxis
              dataKey="theme"
              tick={{ fill: "#6B677D", fontSize: 11, fontFamily: "Plus Jakarta Sans" }}
            />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Moyenne"
              dataKey="moyenne"
              stroke="#B8B3C7"
              fill="#B8B3C7"
              fillOpacity={0.25}
            />
            <Radar
              name={candidate.lastName}
              dataKey="candidat"
              stroke="#4F46E5"
              fill="#4F46E5"
              fillOpacity={0.32}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-1 flex items-center justify-center gap-4 text-[11px] font-medium text-ink/50">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary" />
          {candidate.lastName}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#B8B3C7]" />
          Moyenne des candidats
        </span>
      </div>
    </section>
  );
}
