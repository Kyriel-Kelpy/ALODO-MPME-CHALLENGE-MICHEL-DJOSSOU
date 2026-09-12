import { CheckCircle2, Waypoints } from "lucide-react";
import type { Dimension } from "../types/diagnostic";
import { DimensionBadge } from "./DimensionBadge";

type HeaderProps = {
  /** Dimension en cours — affiche un badge à droite (masqué sur mobile, comme sur la maquette) */
  dimension?: Dimension;
  /** Affiche le stepper Profil/Questions/Calcul/Résultats (desktop uniquement) */
  showStepper?: boolean;
};

const STEPPER_LABELS = ["Profil", "Questions", "Calcul", "Résultats"];

function ResultsStepper() {
  return (
    <div className="hidden items-start gap-2 sm:flex">
      {STEPPER_LABELS.map((label, index) => {
        const isLast = index === STEPPER_LABELS.length - 1;
        return (
          <div key={label} className="flex items-start gap-2">
            <div className="flex flex-col items-center gap-1">
              {isLast ? (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary" />
              ) : (
                <CheckCircle2 size={16} className="text-blue" />
              )}
              <span
                className={`text-xs ${
                  isLast ? "font-medium text-primary" : "text-text-secondary"
                }`}
              >
                {label}
              </span>
            </div>
            {!isLast && <span className="mt-2 h-px w-8 bg-border" />}
          </div>
        );
      })}
    </div>
  );
}

export function Header({ dimension, showStepper }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-10">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Waypoints size={16} />
        </span>
        <span className="font-display text-lg font-semibold tracking-tight">
          <span className="text-primary">ALODO</span> MPME
        </span>
        <span className="hidden text-sm text-text-secondary sm:inline">
          | Diagnostic de maturité
        </span>
      </div>

      {dimension && (
        <span className="hidden sm:inline-flex">
          <DimensionBadge dimension={dimension} />
        </span>
      )}

      {showStepper && <ResultsStepper />}
    </header>
  );
}