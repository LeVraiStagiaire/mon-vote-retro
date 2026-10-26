import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Link2, RotateCcw, Scale } from "lucide-react";
import { toast } from "sonner";
import { useQuiz } from "@/context/QuizContext";
import { encodeShare } from "@/lib/share";

export function ShareBar() {
  const navigate = useNavigate();
  const { session, answers, weights, restart } = useQuiz();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (session.year == null) return;
    let base = window.location.pathname.replace(/index\.html$/, "");
    if (!base.endsWith("/")) base += "/";
    const link = `${window.location.origin}${base}#/resultats?s=${encodeShare({
      year: session.year,
      mode: session.mode,
      answers,
      weights,
    })}`;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      toast.success("Lien de partage copié", {
        description: "Il encode vos réponses, sans aucune donnée personnelle.",
      });
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      toast.error("Copie impossible", {
        description: "Votre navigateur bloque l'accès au presse-papiers. Le lien reste affiché dans la barre d'adresse après partage.",
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-[1.75rem] border border-ink/8 bg-white p-4 shadow-soft sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={handleCopy}
        data-testid="copy-share-link"
        className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-cream transition hover:bg-primary/90 active:scale-[0.98]"
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        {copied ? "Lien copié" : "Copier le lien de partage"}
      </button>
      <button
        type="button"
        onClick={() => navigate("/methode")}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink/10 px-4 text-sm font-semibold text-ink/65 transition hover:text-ink"
      >
        <Scale className="h-4 w-4" />
        Méthode
      </button>
      <button
        type="button"
        onClick={() => {
          restart();
          navigate("/");
        }}
        data-testid="restart-quiz"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-ink/50 transition hover:text-ink"
      >
        <RotateCcw className="h-4 w-4" />
        Recommencer
      </button>
    </div>
  );
}
