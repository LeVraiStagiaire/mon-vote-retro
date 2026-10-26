import { Link } from "react-router-dom";
import { ArrowUpRight, Info } from "lucide-react";

export function MethodCallout() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-ink/8 bg-lavender/60 p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-soft">
          <Info className="h-5 w-5" />
        </span>
        <div className="max-w-2xl">
          <h2 className="text-2xl text-ink sm:text-[1.75rem]">Un outil indicatif, assumé comme tel</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">
            Les positions ne sont pas des citations de programmes : elles sont déduites de quatorze
            archétypes idéologiques, puis ajustées candidat par candidat sur deux à quatre marqueurs
            personnels. Une question sans position documentée est exclue du calcul et la couverture est
            affichée à côté de chaque score.
          </p>
          <Link
            to="/methode"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
          >
            Lire la méthode complète
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
