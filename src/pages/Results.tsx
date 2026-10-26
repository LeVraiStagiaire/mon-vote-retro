import { useEffect, useMemo, useRef } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AlertCircle, ArrowRight, History, TriangleAlert } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/Reveal";
import { EraContextCard } from "@/components/era/EraContextCard";
import { ResultHero } from "@/components/results/ResultHero";
import { RankingList } from "@/components/results/RankingList";
import { ThemeWeights } from "@/components/results/ThemeWeights";
import { ThemeRadar } from "@/components/results/ThemeRadar";
import { ShareBar } from "@/components/results/ShareBar";
import { useQuiz } from "@/context/QuizContext";
import { ELECTION_MAP } from "@/data/elections";
import { questionSet } from "@/data/questions";
import {
  MIN_ANSWERS,
  answeredCount,
  hasActiveWeights,
  rankCandidates,
} from "@/lib/scoring";
import { decodeShareResult } from "@/lib/share";

const Results = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("s");
  const { session, answers, weights, applyShared, start } = useQuiz();
  const appliedToken = useRef<string | null>(null);

  const decoded = useMemo(() => decodeShareResult(token), [token]);
  const shared = decoded.ok ? decoded.payload : null;
  const linkError = token != null && decoded.ok === false ? decoded.reason : null;

  useEffect(() => {
    if (!token || decoded.ok === false) return;
    if (appliedToken.current === token) return;
    appliedToken.current = token;
    applyShared(decoded.payload);
  }, [applyShared, decoded, token]);

  const year = session.year;
  const questions = useMemo(() => (year == null ? [] : questionSet(year, session.mode)), [
    session.mode,
    year,
  ]);
  const answered = answeredCount(answers, questions);
  const ranking = useMemo(
    () => (year == null ? [] : rankCandidates(answers, weights, year, session.mode)),
    [answers, session.mode, weights, year],
  );
  const champion = ranking.find((scored) => scored.score != null) ?? ranking[0] ?? null;
  const weightsOk = hasActiveWeights(answers, weights, questions);

  if (linkError) {
    const legacy = linkError === "legacy";
    return (
      <PageShell width="narrow" className="py-16">
        <div className="rounded-[2rem] border border-ink/8 bg-white p-8 text-center shadow-lift">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-disagree-soft text-disagree">
            <TriangleAlert className="h-6 w-6" />
          </span>
          <h1 className="mt-4 font-display text-3xl text-ink">
            {legacy ? "Ce lien vient d'une ancienne version" : "Ce lien de partage est illisible"}
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink/60">
            {legacy
              ? "Depuis, chaque scrutin a son propre questionnaire : les réponses encodées dans ce lien ne correspondent plus aux questions actuelles. Refaites le questionnaire, c'est rapide."
              : "Le lien a peut-être été tronqué. Refaites le questionnaire, c'est rapide, et votre résultat sera de nouveau partageable."}
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-cream"
          >
            Choisir une époque
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageShell>
    );
  }

  if (year == null) {
    if (shared) {
      return (
        <PageShell width="narrow" className="py-16">
          <div className="h-40 animate-pulse rounded-[2rem] border border-ink/8 bg-white/70" />
        </PageShell>
      );
    }
    return <Navigate to="/" replace />;
  }

  if (session.status === "idle") return <Navigate to="/" replace />;

  const election = ELECTION_MAP[year];

  return (
    <PageShell className="pb-16 pt-6 sm:pt-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
          Questionnaire {year} — {questions.length} questions propres à ce scrutin ·{" "}
          {session.mode === "express" ? "Format express" : "Format complet"} · {answered} /{" "}
          {questions.length} réponses
        </p>
        <Link
          to="/"
          className="text-xs font-semibold text-ink/45 transition hover:text-ink"
        >
          Changer d'époque
        </Link>
      </div>

      {answered < MIN_ANSWERS ? (
        <section className="mt-4 animate-pop-in rounded-[2rem] border border-ink/8 bg-white p-7 shadow-lift sm:p-10">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lavender text-primary">
            <AlertCircle className="h-5 w-5" />
          </span>
          <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            Encore {MIN_ANSWERS - answered} réponse{MIN_ANSWERS - answered > 1 ? "s" : ""} pour un résultat
          </h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/60">
            Nous demandons au moins {MIN_ANSWERS} réponses pour éviter un classement trop fragile.
            Reprenez là où vous vous êtes arrêté — vos réponses sont conservées dans ce navigateur.
          </p>
          <button
            type="button"
            onClick={() => {
              start();
              navigate("/questionnaire");
            }}
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-cream"
          >
            Continuer le questionnaire
            <ArrowRight className="h-4 w-4" />
          </button>
        </section>
      ) : !weightsOk ? (
        <section className="mt-4 animate-pop-in rounded-[2rem] border border-ink/8 bg-white p-7 shadow-lift sm:p-10">
          <h1 className="font-display text-3xl text-ink sm:text-4xl">Tous les thèmes sont à zéro</h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/60">
            Avec une pondération nulle partout, aucun score n'est calculable. Remontez au moins un
            curseur pour relancer le classement.
          </p>
          <ThemeWeights />
        </section>
      ) : (
        <div className="mt-4 space-y-4">
          {champion && (
            <Reveal y={12}>
              <ResultHero scored={champion} year={year} answered={answered} />
            </Reveal>
          )}

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <Reveal delay={80}>
                <RankingList
                  ranking={ranking}
                  year={year}
                  mode={session.mode}
                  answered={answered}
                  total={questions.length}
                />
              </Reveal>
              <Reveal delay={140}>
                <ThemeWeights />
              </Reveal>
            </div>
            <div className="space-y-4">
              {champion && (
                <Reveal delay={120}>
                  <ThemeRadar
                    candidate={champion.candidate}
                    answers={answers}
                    year={year}
                    mode={session.mode}
                  />
                </Reveal>
              )}
              <Reveal delay={180}>
                <ShareBar />
              </Reveal>
            </div>
          </div>

          <Reveal delay={220}>
            <div>
              <div className="mb-2 flex items-center gap-2 px-1">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-lavender text-primary">
                  <History className="h-3.5 w-3.5" />
                </span>
                <h2 className="text-lg text-ink">Le contexte de ce scrutin</h2>
              </div>
              <EraContextCard year={year} variant="full" />
            </div>
          </Reveal>
        </div>
      )}
    </PageShell>
  );
};

export default Results;
