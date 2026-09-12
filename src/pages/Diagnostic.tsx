import { questions } from "../data/questions";
import { QuestionCard } from "../components/QuestionCard";
import { AnswerCard } from "../components/AnswerCard";
import { OptionalFieldInput } from "../components/OptionalFieldInput";
import type { Answers } from "../types/diagnostic";

type DiagnosticProps = {
  stepIndex: number; // 0..9
  currentStepNumber: number; // position affichée dans "Question X sur 12"
  totalSteps: number;
  answers: Answers;
  onAnswer: (questionId: string, optionId: string) => void;
  onOptionalField: (fieldId: string, value: string | string[]) => void;
  onNext: () => void;
  onBack: () => void;
};

export function Diagnostic({
  stepIndex,
  currentStepNumber,
  totalSteps,
  answers,
  onAnswer,
  onOptionalField,
  onNext,
  onBack,
}: DiagnosticProps) {
  const question = questions[stepIndex];
  const selectedOptionId = answers.diagnostic[question.id];
  const canContinue = Boolean(selectedOptionId);

  return (
    <QuestionCard
      dimension={question.dimension}
      currentStep={currentStepNumber}
      totalSteps={totalSteps}
      question={question.question}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!canContinue}
      hint="Votre réponse nous aidera à mieux analyser votre situation."
    >
      <div
        role="radiogroup"
        aria-label={question.question}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {question.options.map((option) => (
          <AnswerCard
            key={option.id}
            label={option.label}
            selected={selectedOptionId === option.id}
            onSelect={() => onAnswer(question.id, option.id)}
          />
        ))}
      </div>

      {question.optionalFields && question.optionalFields.length > 0 && (
        <div className="space-y-4">
          {question.optionalFields.map((field) => (
            <OptionalFieldInput
              key={field.id}
              field={field}
              value={answers.optionalFields[field.id]}
              onChange={(value) => onOptionalField(field.id, value)}
            />
          ))}
        </div>
      )}
    </QuestionCard>
  );
}