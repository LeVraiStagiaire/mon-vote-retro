import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useQuiz } from "@/context/QuizContext";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Le test" },
  { to: "/candidats", label: "Candidats" },
  { to: "/methode", label: "Méthode" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { hasSession, session } = useQuiz();

  const ctaTo = hasSession ? "/resultats" : "/";
  const ctaLabel = hasSession ? "Mes résultats" : "Commencer";

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="MonVote Rétro, accueil">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-cream shadow-soft transition-transform duration-300 group-hover:-rotate-3">
            <span className="font-display text-xl leading-none">M</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-tight text-ink sm:text-2xl">MonVote</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/50">
              Rétro 2002 → 2022
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-lavender text-primary" : "text-ink/60 hover:bg-ink/5 hover:text-ink",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={ctaTo}
            className={cn(
              "hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition hover:bg-primary/90 sm:inline-flex",
              hasSession && session.status === "running" && "bg-agree hover:bg-agree/90",
            )}
          >
            {hasSession && session.status === "running" ? "Reprendre" : ctaLabel}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink md:hidden"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/8 bg-background px-5 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-2xl px-4 py-3 text-base font-medium",
                    isActive ? "bg-lavender text-primary" : "text-ink/70",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to={ctaTo}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl bg-primary px-4 py-3 text-center text-base font-semibold text-cream"
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
