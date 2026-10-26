import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Database, Eye, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { ARCHETYPES } from "@/data/archetypes";
import { CANDIDATES } from "@/data/candidates";
import { QUESTIONS } from "@/data/questions";
import { THEMES } from "@/data/themes";

const Methode = () => {
  return (
    <PageShell width="narrow" className="pb-16 pt-10 sm:pt-14">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Méthode</p>
        <h1 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-5xl">
          Un outil pédagogique, sans boîte noire
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/65">
          MonVote Rétro ne scrape aucun programme et ne cite personne. Il confronte vos réponses à une
          base de positions construite à la main, à partir de profils idéologiques documentés. Voici
          exactement comment, et ce que cela ne dit pas.
        </p>
      </header>

      <div className="mt-8 space-y-4">
        <section className="rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-lavender text-primary">
              <Database className="h-4 w-4" />
            </span>
            <h2 className="text-2xl text-ink">1. D'où viennent les positions</h2>
          </div>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-ink/65">
            <li>
              <span className="font-semibold text-ink">Quatorze archétypes idéologiques</span> (extrême
              gauche, gauche radicale, social-démocratie, écologie politique, centre social-libéral,
              droite libérale, droite gaulliste, droite conservatrice, souverainisme, droite nationale,
              ruralité, altermondialisme, gaullisme social, divers) portent chacun une position sur les{" "}
              {QUESTIONS.length} questions, de « pas du tout d'accord » à « tout à fait d'accord ».
            </li>
            <li>
              <span className="font-semibold text-ink">Chaque candidat</span> est rattaché à un archétype,
              puis ajusté sur deux à quatre marqueurs personnels (ex. Chevènement et l'euro, Roussel et le
              nucléaire, Lassalle et le monde rural).
            </li>
            <li>
              <span className="font-semibold text-ink">Certaines questions n'ont pas de position</span>{" "}
              d'archétype : les questions institutionnelles (quinquennat, proportionnelle, cumul des
              mandats) restent ouvertes, sauf ajustement explicite. Elles ne comptent alors pas dans le
              score, et la couverture baisse d'autant.
            </li>
          </ol>
        </section>

        <section className="rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-lavender text-primary">
              <Calculator className="h-4 w-4" />
            </span>
            <h2 className="text-2xl text-ink">2. Le calcul, ligne par ligne</h2>
          </div>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/65">
            <p>
              Pour chaque question répondue où le candidat a une position, on mesure l'écart entre votre
              réponse <span className="font-mono text-xs text-ink">u</span> et sa position{" "}
              <span className="font-mono text-xs text-ink">c</span>, toutes deux sur une échelle de −2 à
              +2 :
            </p>
            <p className="rounded-xl bg-cream px-4 py-3 font-mono text-xs text-ink">
              accord = 1 − |u − c| / 4
            </p>
            <p>
              Le score final est la moyenne de ces accords, pondérée par thème. Un thème à ×2 compte
              double, un thème à ×0 est totalement neutralisé. La couverture indique la part des
              questions répondues sur lesquelles le candidat a effectivement une position.
            </p>

            <div className="rounded-2xl border border-ink/8 bg-cream/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                Exemple chiffré
              </p>
              <p className="mt-2 text-sm text-ink/70">
                Trois questions d'économie, poids 1. Vos réponses : +2, −1, 0. Positions du candidat :
                +2, −2, +1.
              </p>
              <ul className="mt-2 space-y-1 font-mono text-xs text-ink/70">
                <li>|+2 − +2| = 0 → accord 1,00</li>
                <li>|−1 − −2| = 1 → accord 0,75</li>
                <li>|0 − +1| = 1 → accord 0,75</li>
              </ul>
              <p className="mt-2 text-sm text-ink/70">
                Moyenne : (1,00 + 0,75 + 0,75) / 3 = <span className="font-semibold text-ink">0,833</span>,
                soit 83 %.
              </p>
            </div>

            <p>
              Seuil de fiabilité : il faut au moins 5 réponses pour afficher un classement. En dessous de
              40 % de couverture, le score est signalé comme peu fiable.
            </p>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-disagree-soft text-disagree">
              <Eye className="h-4 w-4" />
            </span>
            <h2 className="text-2xl text-ink">3. Les limites, dites franchement</h2>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/65">
            <li>
              <span className="font-semibold text-ink">Ce ne sont pas des citations.</span> Une position est
              une interprétation d'ensemble, pas une phrase de programme. Un candidat peut évoluer entre
              deux campagnes, et l'archétype lisse ces évolutions.
            </li>
            <li>
              <span className="font-semibold text-ink">Les petits partis sont moins documentés.</span> Leur
              profil repose souvent sur un seul marqueur, ce qui rend leur score plus fragile.
            </li>
            <li>
              <span className="font-semibold text-ink">Un vote n'est pas un programme.</span> Le vote
              d'adhésion, le vote utile, la personnalité ou le rejet d'un adversaire n'entrent pas dans le
              calcul.
            </li>
            <li>
              <span className="font-semibold text-ink">Les questions sont rédigées aujourd'hui.</span> Elles
              sont formulées pour rester compréhensibles en 2002 comme en 2022, ce qui peut créer des
              anachronismes sur les sujets les plus récents.
            </li>
          </ul>
        </section>

        <section className="rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-agree-soft text-agree">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <h2 className="text-2xl text-ink">4. Données factuelles & vie privée</h2>
          </div>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/65">
            <p>
              Les scores du 1er tour affichés sont les résultats officiels arrondis, d'après le ministère
              de l'Intérieur. Les portraits sont chargés à l'exécution depuis l'API publique de Wikipédia ;
              si le réseau est indisponible, un monogramme aux couleurs du parti prend le relais.
            </p>
            <p>
              Aucun compte, aucun serveur, aucun traceur : vos réponses restent dans le stockage local de
              votre navigateur. Un lien de partage encode vos réponses directement dans l'URL — rien n'est
              envoyé nulle part.
            </p>
            <p className="text-xs text-ink/45">
              Volume de la base : {QUESTIONS.length} questions, {THEMES.length} thèmes, {ARCHETYPES.length}{" "}
              archétypes ({ARCHETYPES.length * QUESTIONS.length} positions) et {CANDIDATES.length}{" "}
              candidats.
            </p>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-soft">
          <h2 className="text-2xl text-ink">Les dix thèmes</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {THEMES.map((theme) => {
              const Icon = theme.icon;
              return (
                <div key={theme.id} className="flex items-start gap-2.5 rounded-xl bg-cream/60 px-3 py-2.5">
                  <span
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg"
                    style={{ backgroundColor: theme.soft, color: theme.color }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-ink/80">{theme.label}</p>
                    <p className="text-[11px] leading-snug text-ink/45">{theme.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-soft">
          <h2 className="text-2xl text-ink">Les quatorze archétypes</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {ARCHETYPES.map((archetype) => (
              <div key={archetype.id} className="rounded-xl border border-ink/8 px-3.5 py-3">
                <p className="text-sm font-semibold text-ink">{archetype.label}</p>
                <p className="mt-1 text-[11px] leading-snug text-ink/50">{archetype.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-8 rounded-[2rem] bg-primary px-6 py-8 text-center sm:px-10">
        <h2 className="font-display text-3xl text-cream">Prêt à tester vos convictions ?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-cream/70">
          Vingt questions suffisent pour une première tendance, cent pour un classement vraiment détaillé.
        </p>
        <Link
          to="/"
          className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-cream px-6 text-sm font-semibold text-primary transition hover:bg-white"
        >
          Choisir une époque
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <p className="mt-6 text-center text-xs text-ink/40">
        Outil indépendant, non affilié à un parti politique ni à une administration.
      </p>
    </PageShell>
  );
};

export default Methode;
