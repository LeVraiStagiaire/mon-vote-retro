import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/Reveal";
import { CandidateAvatar } from "@/components/candidates/CandidateAvatar";
import { AgreementHighlights } from "@/components/candidates/AgreementHighlights";
import { PositionList } from "@/components/candidates/PositionList";
import { CoverageBadge } from "@/components/results/CoverageBadge";
import { useQuiz } from "@/context/QuizContext";
import { ARCHETYPE_MAP } from "@/data/archetypes";
import { CANDIDATE_MAP, candidatesForYear, fullName } from "@/data/candidates";
import { ELECTION_MAP } from "@/data/elections";
import { questionSet } from "@/data/questions";
import { THEMES } from "@/data/themes";
import { formatScore } from "@/lib/format";
import { hasEnoughAnswers, scoreCandidate, topAgreements } from "@/lib/scoring";

const CandidateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = id ? CANDIDATE_MAP[id] : undefined;
  const { answers, weights, session } = useQuiz();
  const questions = questionSet(session.mode);
  const enough = hasEnoughAnswers(answers, questions);

  const scored = useMemo(
    () => (candidate && enough ? scoreCandidate(candidate, answers, weights, questions) : null),
    [answers, candidate, enough, questions, weights],
  );

  if (!candidate) {
    return (
      <PageShell width="narrow" className="py-16">
        <div className="rounded-[2rem] border border-ink/8 bg-white p-8 text-center shadow-lift">
          <h1 className="font-display text-3xl text-ink">Candidat introuvable</h1>
          <p className="mt-2 text-sm text-ink/60">
            Cette fiche n'existe pas ou a changé d'adresse.
          </p>
          <Link
            to="/candidats"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-cream"
          >
            Voir tous les candidats
          </Link>
        </div>
      </PageShell>
    );
  }

  const election = ELECTION_MAP[candidate.year];
  const archetype = ARCHETYPE_MAP[candidate.archetype];
  const peers = candidatesForYear(candidate.year).filter((item) => item.id !== candidate.id);
  const percent = scored?.score == null ? null : Math.round(scored.score * 100);

  return (
    <PageShell className="pb-16 pt-6 sm:pt-10">
      <Link
        to="/candidats"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink/45 transition hover:text-ink"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Tous les candidats
      </Link>

      <Reveal y={12}>
        <header className="mt-4 grid gap-6 rounded-[2rem] border border-ink/8 bg-white p-6 shadow-lift sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <CandidateAvatar candidate={candidate} size="xl" />

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {election.label} · {election.date}
          </p>
          <h1 className="mt-2 text-balance font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            {fullName(candidate)}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${candidate.color}18`, color: candidate.color }}
            >
              {candidate.party}
            </span>
            <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/60">
              {formatScore(candidate.score)} % au 1er tour
            </span>
            {candidate.runoff && (
              <span className="rounded-full bg-lavender px-3 py-1 text-xs font-semibold text-primary">
                Qualifié au 2d tour
              </span>
            )}
            {scored && <CoverageBadge coverage={scored.coverage} lowCoverage={scored.flags.lowCoverage} />}
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/65">{candidate.bio}</p>
          <p className="mt-3 text-xs text-ink/40">
            Archétype de référence : <span className="font-semibold text-ink/60">{archetype.label}</span> —{" "}
            {archetype.description}
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-lavender/60 px-6 py-5 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
            {percent != null ? "Votre compatibilité" : "Score 1er tour"}
          </p>
          <p className="mt-1 font-display text-5xl leading-none text-primary">
            {percent != null ? `${percent} %` : `${formatScore(candidate.score)} %`}
          </p>
          <p className="mt-2 text-[11px] text-ink/45">
            {percent != null ? `${scored?.compared} questions comparées` : `en ${candidate.year}`}
          </p>
        </div>
        </header>
      </Reveal>

      {!enough && (
        <div className="mt-4 animate-fade-slide-in flex flex-col gap-3 rounded-[1.5rem] border border-ink/8 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-ink/60">
            Les positions ci-dessous sont celles de l'archétype et de ses ajustements. Répondez au
            questionnaire pour voir vos accords et désaccords question par question.
          </p>
          <Link
            to="/"
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 text-sm font-semibold text-cream"
          >
            Répondre
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      {enough && (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal delay={60} className="h-full">
            <AgreementHighlights
              title="Vos accords les plus forts"
              direction="agree"
              entries={topAgreements(candidate, answers, questions, { limit: 3, direction: "agree" })}
            />
          </Reveal>
          <Reveal delay={120} className="h-full">
            <AgreementHighlights
              title="Vos désaccords les plus nets"
              direction="disagree"
              entries={topAgreements(candidate, answers, questions, { limit: 3, direction: "disagree" })}
            />
          </Reveal>
        </div>
      )}

      <div className="mt-6 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 no-scrollbar">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() =>
              document
                .getElementById(`theme-${theme.id}`)
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="shrink-0 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink/60 transition hover:text-ink"
          >
            {theme.shortLabel}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <PositionList candidate={candidate} answers={answers} hasAnswers={enough} />
      </div>

      <Reveal>
        <section className="mt-6 rounded-[1.75rem] border border-ink/8 bg-white p-5 shadow-soft">
          <h2 className="text-xl text-ink">Autres candidats de {candidate.year}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {peers.map((peer) => (
              <Link
                key={peer.id}
                to={`/candidat/${peer.id}`}
                className="rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium text-ink/60 transition hover:border-primary/30 hover:text-primary"
              >
                {fullName(peer)}
              </Link>
            ))}
          </div>
        </section>
      </Reveal>
    </PageShell>
  );
};

export default CandidateDetail;
