import { ThumbsDown, ThumbsUp, Minus } from "lucide-react";
import { positionsOf, type Candidate } from "@/data/candidates";
import { QUESTIONS } from "@/data/questions";
import { THEMES } from "@/data/themes";
import { positionLabel } from "@/lib/format";
import { agreement, type Answers } from "@/lib/scoring";
import { cn } from "@/lib/utils";

const QUESTION_INDEX: Record<string, number> = QUESTIONS.reduce(
  (acc, question, index) => {
    acc[question.id] = index;
    return acc;
  },
  {} as Record<string, number>,
);

interface PositionListProps {
  candidate: Candidate;
  answers: Answers;
  hasAnswers: boolean;
}

export function PositionList({ candidate, answers, hasAnswers }: PositionListProps) {
  const positions = positionsOf(candidate);

  return (
    <div className="space-y-4">
      {THEMES.map((theme) => {
        const questions = QUESTIONS.filter((question) => question.themeId === theme.id);
        const Icon = theme.icon;
        const compared = questions.filter((question) => {
          const position = positions[QUESTION_INDEX[question.id]];
          return position != null && answers[question.id] != null;
        });
        const themeScore =
          compared.length === 0
            ? null
            : compared.reduce(
                (sum, question) =>
                  sum +
                  agreement(
                    answers[question.id] as number,
                    positions[QUESTION_INDEX[question.id]] as number,
                  ),
                0,
              ) / compared.length;

        return (
          <section
            key={theme.id}
            id={`theme-${theme.id}`}
            className="scroll-mt-24 rounded-[1.75rem] border border-ink/8 bg-white p-4 shadow-soft sm:p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="grid h-8 w-8 place-items-center rounded-xl"
                  style={{ backgroundColor: theme.soft, color: theme.color }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-lg text-ink">{theme.shortLabel}</h3>
              </div>
              {themeScore != null && (
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                    themeScore >= 0.6
                      ? "bg-agree-soft text-agree"
                      : themeScore >= 0.4
                        ? "bg-ink/5 text-ink/55"
                        : "bg-disagree-soft text-disagree",
                  )}
                >
                  {Math.round(themeScore * 100)} % d'accord
                </span>
              )}
            </div>

            <ul className="mt-3 divide-y divide-ink/8">
              {questions.map((question) => {
                const position = positions[QUESTION_INDEX[question.id]];
                const user = answers[question.id];
                const value =
                  position != null && user != null ? agreement(user as number, position) : null;

                return (
                  <li key={question.id} className="flex items-start gap-3 py-2.5">
                    <span className="mt-0.5 shrink-0">
                      {value == null ? (
                        <Minus className="h-4 w-4 text-ink/20" />
                      ) : value >= 0.75 ? (
                        <ThumbsUp className="h-4 w-4 text-agree" />
                      ) : value <= 0.25 ? (
                        <ThumbsDown className="h-4 w-4 text-disagree" />
                      ) : (
                        <Minus className="h-4 w-4 text-ink/30" />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] leading-snug text-ink/75">{question.text}</p>
                      <p className="mt-0.5 text-[11px] text-ink/40">
                        {position == null ? (
                          <span className="italic">Pas de position documentée</span>
                        ) : (
                          <>Position : {positionLabel(position)}</>
                        )}
                        {hasAnswers && user != null && position != null && (
                          <span className="ml-2 text-ink/30">
                            · vous : {positionLabel(user as number)}
                          </span>
                        )}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
