import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/Reveal";
import { CandidateCard } from "@/components/candidates/CandidateCard";
import { CandidateFilters, type YearFilter } from "@/components/candidates/CandidateFilters";
import { useQuiz } from "@/context/QuizContext";
import { CANDIDATES } from "@/data/candidates";
import { ELECTION_MAP } from "@/data/elections";
import { questionSet } from "@/data/questions";
import { hasEnoughAnswers, scoreCandidate, type ScoredCandidate } from "@/lib/scoring";

const Candidates = () => {
  const { answers, weights, session } = useQuiz();
  const [year, setYear] = useState<YearFilter>("all");
  const [party, setParty] = useState("all");

  const sessionYear = session.year;
  const questions = useMemo(
    () => (sessionYear == null ? [] : questionSet(sessionYear, session.mode)),
    [session.mode, sessionYear],
  );
  const enough = sessionYear != null && hasEnoughAnswers(answers, questions);

  const parties = useMemo(
    () => Array.from(new Set(CANDIDATES.map((candidate) => candidate.partyShort))).sort((a, b) => a.localeCompare(b, "fr")),
    [],
  );

  // Seuls les candidats du scrutin de la session peuvent être comparés : les
  // questionnaires diffèrent d'une année à l'autre.
  const scoredMap = useMemo(() => {
    if (!enough || sessionYear == null) return {} as Record<string, ScoredCandidate>;
    return CANDIDATES.filter((candidate) => candidate.year === sessionYear).reduce(
      (acc, candidate) => {
        acc[candidate.id] = scoreCandidate(candidate, answers, weights, questions);
        return acc;
      },
      {} as Record<string, ScoredCandidate>,
    );
  }, [answers, enough, questions, sessionYear, weights]);

  const filtered = useMemo(() => {
    const list = CANDIDATES.filter(
      (candidate) =>
        (year === "all" || candidate.year === year) && (party === "all" || candidate.partyShort === party),
    );
    return list.sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      if (sessionYear === a.year) {
        const scoreA = scoredMap[a.id]?.score ?? -1;
        const scoreB = scoredMap[b.id]?.score ?? -1;
        if (Math.abs(scoreB - scoreA) > 0.0001) return scoreB - scoreA;
      }
      return b.score - a.score;
    });
  }, [party, scoredMap, sessionYear, year]);

  return (
    <PageShell className="pb-16 pt-10 sm:pt-14">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Explorateur
        </p>
        <h1 className="mt-3 text-4xl text-ink sm:text-5xl">Les 61 candidats du 1er tour</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-base">
          Cinq scrutins, tous les candidats officiels, petits partis compris. Chaque époque a son propre
          questionnaire : la compatibilité n'est calculée que pour les candidats de l'année que vous
          avez jouée.
        </p>
      </header>

      {sessionYear == null ? (
        <div className="mt-6 flex flex-col gap-3 rounded-[1.75rem] border border-ink/8 bg-lavender/50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-ink/65">
            Choisissez une époque et répondez au questionnaire pour afficher votre compatibilité avec
            ses candidats.
          </p>
          <Link
            to="/"
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 text-sm font-semibold text-cream"
          >
            Commencer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : !enough ? (
        <div className="mt-6 flex flex-col gap-3 rounded-[1.75rem] border border-ink/8 bg-lavender/50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-ink/65">
            Encore quelques réponses sur le questionnaire de {sessionYear} pour afficher votre
            compatibilité avec ses candidats.
          </p>
          <Link
            to="/"
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 text-sm font-semibold text-cream"
          >
            Reprendre
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="mt-6 flex items-center gap-2 rounded-[1.5rem] border border-primary/15 bg-lavender/40 px-4 py-3">
          <p className="text-sm text-ink/65">
            Compatibilité calculée pour le questionnaire de{" "}
            <span className="font-semibold text-ink">{ELECTION_MAP[sessionYear].label}</span>. Les
            candidats des autres scrutins sont signalés « autre scrutin ».
          </p>
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
                scored={enough && candidate.year === sessionYear ? scoredMap[candidate.id] : null}
                otherEra={sessionYear != null && candidate.year !== sessionYear}
              />
            </Reveal>
          ))}
        </div>
      )}
    </PageShell>
  );
};

export default Candidates;
