import { AlertTriangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ELECTION_MAP, type ElectionYear } from "@/data/elections";

interface ChangeYearDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Année actuellement sélectionnée (celle dont les réponses seraient effacées). */
  currentYear: ElectionYear | null;
  /** Année vers laquelle on veut basculer. */
  nextYear: ElectionYear | null;
  answerCount: number;
  onConfirm: () => void;
}

export function ChangeYearDialog({
  open,
  onOpenChange,
  currentYear,
  nextYear,
  answerCount,
  onConfirm,
}: ChangeYearDialogProps) {
  const currentLabel = currentYear ? ELECTION_MAP[currentYear].label : "l'époque actuelle";
  const nextLabel = nextYear ? ELECTION_MAP[nextYear].label : "la nouvelle époque";

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent
        data-testid="change-year-dialog"
        className="rounded-[1.75rem] border-ink/10 bg-cream"
      >
        <AlertDialogHeader>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-disagree-soft text-disagree">
            <AlertTriangle className="h-5 w-5" />
          </span>
          <AlertDialogTitle className="mt-2 font-display text-2xl text-ink">
            Changer d'époque efface vos {answerCount} réponse{answerCount > 1 ? "s" : ""}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm leading-relaxed text-ink/60">
            Le questionnaire de {nextLabel} est différent de celui de {currentLabel} : vos{" "}
            {answerCount} réponse{answerCount > 1 ? "s" : ""} déjà enregistrée
            {answerCount > 1 ? "s" : ""} ne peuvent pas être transposées. Continuer effacera vos
            réponses actuelles.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-full border-ink/15 text-ink/70">
            Garder {currentYear ?? "cette année"}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            data-testid="change-year-confirm"
            className="rounded-full bg-primary text-cream hover:bg-primary/90"
          >
            Changer d'époque
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
