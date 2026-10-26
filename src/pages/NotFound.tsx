import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 : route inconnue", location.pathname);
  }, [location.pathname]);

  return (
    <PageShell width="narrow" className="py-16 sm:py-24">
      <div className="rounded-[2rem] border border-ink/8 bg-white p-8 text-center shadow-lift sm:p-12">
        <p className="font-display text-6xl text-primary/25">404</p>
        <h1 className="mt-3 text-3xl text-ink sm:text-4xl">Cette page n'existe pas</h1>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink/60">
          La page <span className="font-mono text-xs text-ink/70">{location.pathname}</span> n'a pas été
          trouvée. Le bulletin reste ouvert : revenez à l'accueil pour choisir une époque.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-cream"
          >
            Retour à l'accueil
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/candidats"
            className="inline-flex h-11 items-center rounded-full border border-ink/10 px-6 text-sm font-semibold text-ink/65 transition hover:text-ink"
          >
            Explorer les candidats
          </Link>
        </div>
      </div>
    </PageShell>
  );
};

export default NotFound;
