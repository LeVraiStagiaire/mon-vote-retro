import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-ink/8 bg-white/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-cream">
              <span className="font-display text-lg leading-none">M</span>
            </span>
            <span className="font-display text-lg text-ink">MonVote Rétro</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            Un outil pédagogique pour comparer vos convictions aux positions prêtées aux candidats des
            premiers tours de 2002 à 2022. Les scores sont indicatifs et ne constituent ni une citation
            officielle des programmes, ni une prédiction.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
            Explorer
          </span>
          <Link to="/" className="text-ink/70 transition hover:text-primary">
            Le questionnaire
          </Link>
          <Link to="/candidats" className="text-ink/70 transition hover:text-primary">
            Les 61 candidats
          </Link>
          <Link to="/methode" className="inline-flex items-center gap-1 text-ink/70 transition hover:text-primary">
            Notre méthode
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="max-w-xs text-xs leading-relaxed text-ink/45">
          <p>
            Résultats officiels du 1er tour arrondis, d'après le ministère de l'Intérieur. Outil
            indépendant, non affilié à un parti ni à une administration.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} MonVote Rétro · Fait en France.</p>
        </div>
      </div>
    </footer>
  );
}
