import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Dimension } from "../types/diagnostic";
import { DimensionBadge } from "./DimensionBadge";
import { ProgressBar } from "./ProgressBar";
import { Button } from "./Button";

type QuestionCardProps = {
  dimension?: Dimension;
  currentStep: number;
  totalSteps: number;
  question: string;
  hint?: string;
  children: ReactNode;
  onBack?: () => void;
  onNext: () => void;
  nextDisabled: boolean;
};

export function QuestionCard({
  dimension,
  currentStep,
  totalSteps,
  question,
  hint,
  children,
  onBack,
  onNext,
  nextDisabled,
}: QuestionCardProps) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="mb-2 text-sm font-medium text-text-secondary">
            Question {currentStep} sur {totalSteps}
          </p>
          <ProgressBar current={currentStep} total={totalSteps} />
        </div>
        {dimension && <DimensionBadge dimension={dimension} />}
      </div>

      <h1 className="mb-6 font-display text-2xl font-semibold leading-tight text-text sm:text-3xl">
        {question}
      </h1>

      <div className="space-y-3">{children}</div>

      {hint && (
        <p className="mt-4 flex items-start gap-2 text-sm text-text-secondary">
          {hint}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between">
        {onBack ? (
          <Button variant="secondary" onClick={onBack} icon={<ArrowLeft size={18} />} iconPosition="left">
            Retour
          </Button>
        ) : (
          <span />
        )}
        <Button onClick={onNext} disabled={nextDisabled} icon={<ArrowRight size={18} />}>
          Continuer
        </Button>
      </div>
    </div>
  );
}
