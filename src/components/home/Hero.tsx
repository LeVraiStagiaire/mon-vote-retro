import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { CANDIDATE_MAP, fullName } from "@/data/candidates";
import { CandidateAvatar } from "@/components/candidates/CandidateAvatar";
import { formatScore } from "@/lib/format";

const SHOWCASE = [
  { id: "chirac-2002", year: 2002, label: "Chirac" },
  { id: "royal-2007", year: 2007, label: "Royal" },
  { id: "melenchon-2012", year: 2012, label: "Mélenchon" },
  { id: "macron-2017", year: 2017, label: "Macron" },
  { id: "lepen-2022", year: 2022, label: "Le Pen" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-10 sm:pb-16 sm:pt-16">
      <div className="hero-grain pointer-events-none absolute inset-x-0 -top-24 h-72 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span
            className="inline-flex animate-reveal-up items-center gap-2 rounded-full border border-ink/8 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink/60 shadow-soft"
            style={{ animationDelay: "0ms" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            5 scrutins · 61 candidats · 10 thèmes
          </span>

          <h1
            className="mt-6 animate-reveal-up text-balance font-display text-[2.75rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.2rem]"
            style={{ animationDelay: "100ms" }}
          >
            Pour qui auriez-vous <span className="text-primary">voté</span> ?
          </h1>

          <p
            className="mt-5 max-w-xl animate-reveal-up text-base leading-relaxed text-ink/65 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Choisissez une époque, répondez à un questionnaire sur dix grands sujets, et découvrez à
            quel candidat du premier tour vos convictions ressemblent le plus — de 2002 à 2022.
          </p>

          <div
            className="mt-8 flex animate-reveal-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#epoques"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-cream shadow-soft transition hover:bg-primary/90"
            >
              Choisir une époque
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/methode"
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink/10 bg-white px-6 text-sm font-semibold text-ink/70 transition hover:border-ink/20 hover:text-ink"
            >
              Comment ça marche ?
            </Link>
          </div>

          <p className="mt-4 text-xs text-ink/40">
            Sans compte, sans données personnelles. Vos réponses restent dans votre navigateur.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-ink/8 bg-white p-5 shadow-lift sm:p-7">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                Cinq générations de candidats
              </p>
              <span className="rounded-full bg-lavender px-2.5 py-1 text-[11px] font-semibold text-primary">
                1er tour
              </span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {SHOWCASE.map((item) => {
                const candidate = CANDIDATE_MAP[item.id];
                if (!candidate) return null;
                return (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-cream/60 px-3 py-2.5"
                  >
                    <CandidateAvatar candidate={candidate} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-ink">{fullName(candidate)}</p>
                      <p className="truncate text-xs text-ink/50">{candidate.partyShort}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg leading-none text-ink">
                        {formatScore(candidate.score)}
                        <span className="ml-0.5 text-xs text-ink/40">%</span>
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-ink/40">{item.year}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <p className="mt-4 text-[11px] leading-relaxed text-ink/40">
              Scores officiels du 1er tour. Photos issues de l'API Wikipédia (monogramme si
              indisponible).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
