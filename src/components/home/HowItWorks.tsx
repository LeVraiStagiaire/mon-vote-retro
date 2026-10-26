import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Vous répondez",
    text: "Cinq niveaux d'accord, de « pas du tout » à « tout à fait », plus une échappatoire « je ne sais pas » pour chaque question.",
  },
  {
    number: "02",
    title: "Nous comparons",
    text: "Chaque réponse est confrontée aux positions prêtées aux candidats, thème par thème, avec une pondération que vous pouvez ajuster.",
  },
  {
    number: "03",
    title: "Vous explorez",
    text: "Classement complet, radar des thèmes, fiche détaillée par candidat, et le contexte politique de l'année choisie sous votre classement.",
  },
];

export function HowItWorks() {
  return (
    <section>
      <Reveal>
        <h2 className="text-3xl text-ink sm:text-4xl">Trois étapes, aucune inscription</h2>
      </Reveal>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <Reveal key={step.number} delay={index * 90} className="h-full">
            <article className="h-full rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
              <span className="font-display text-3xl text-primary/30">{step.number}</span>
              <h3 className="mt-3 text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
