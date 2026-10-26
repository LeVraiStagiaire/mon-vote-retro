import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/Reveal";
import { CandidateCard } from "@/components/candidates/CandidateCard";
import { CandidateFilters, type YearFilter } from "@/components/candidates/CandidateFilters";
import { useQuiz } from "@/context/QuizContext";
import { CANDIDATES } from "@/data/candidates";
import { questionSet } from "@/data/questions";
import { hasEnoughAnswers, scoreCandidate, type ScoredCandidate } from "@/lib/scoring";

const Candidates = () => {
  const { answers, weights, session } = useQuiz();
  const [year, setYear] = useState<YearFilter>("all");
  const [party, setParty] = useState("all");

  const questions = questionSet(session.mode);
  const enough = hasEnoughAnswers(answers, questions);

  const parties = useMemo(
    () => Array.from(new Set(CANDIDATES.map((candidate) => candidate.partyShort))).sort((a, b) => a.localeCompare(b, "fr")),
    [],
  );

  const scoredMap = useMemo(() => {
    if (!enough) return {} as Record<string, ScoredCandidate>;
    return CANDIDATES.reduce(
      (acc, candidate) => {
        acc[candidate.id] = scoreCandidate(candidate, answers, weights, questions);
        return acc;
      },
      {} as Record<string, ScoredCandidate>,
    );
  }, [answers, enough, questions, weights]);

  const filtered = useMemo(() => {
    const list = CANDIDATES.filter(
      (candidate) =>
        (year === "all" || candidate.year === year) && (party === "all" || candidate.partyShort === party),
    );
    return list.sort((a, b) => {
      if (enough) {
        const scoreA = scoredMap[a.id]?.score ?? -1;
        const scoreB = scoredMap[b.id]?.score ?? -1;
        if (Math.abs(scoreB - scoreA) > 0.0001) return scoreB - scoreA;
      }
      if (a.year !== b.year) return a.year - b.year;
      return b.score - a.score;
    });
  }, [enough, party, scoredMap, year]);

  return (
    <PageShell className="pb-16 pt-10 sm:pt-14">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Explorateur
        </p>
        <h1 className="mt-3 text-4xl text-ink sm:text-5xl">Les 61 candidats du 1er tour</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-base">
          Cinq scrutins, tous les candidats officiels, petits partis compris. Filtrez par année ou par
          parti, puis ouvrez une fiche pour voir le détail des positions et vos accords.
        </p>
      </header>

      {!enough && (
        <div className="mt-6 flex flex-col gap-3 rounded-[1.75rem] border border-ink/8 bg-lavender/50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-ink/65">
            Répondez au questionnaire pour afficher votre score de compatibilité sur chaque fiche.
          </p>
          <Link
            to="/"
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 text-sm font-semibold text-cream"
          >
            Commencer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      <div className="mt-8">
        <CandidateFilters
          year={year}
          onYearChange={setYear}
          party={party}
          onPartyChange={setParty}
          parties={parties}
          count={filtered.length}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[1.75rem] border border-dashed border-ink/15 bg-white/60 p-10 text-center">
          <p className="text-sm text-ink/50">Aucun candidat ne correspond à ces filtres.</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((candidate, index) => (
            <Reveal
              key={candidate.id}
              delay={Math.min(index * 40, 320)}
              y={12}
              className="h-full"
            >
              <CandidateCard
                candidate={candidate}
                scored={enough ? scoredMap[candidate.id] : null}
              />
            </Reveal>
          ))}
        </div>
      )}
    </PageShell>
  );
};

export default Candidates;
