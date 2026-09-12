import { profileQuestions } from "../data/profileQuestions";
import { QuestionCard } from "../components/QuestionCard";
import { AnswerCard } from "../components/AnswerCard";
import type { Answers } from "../types/diagnostic";

type ProfileProps = {
  stepIndex: number; // 0 ou 1
  totalSteps: number;
  answers: Answers;
  onAnswer: (questionId: string, optionId: string) => void;
  onFreeText: (questionId: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export function Profile({
  stepIndex,
  totalSteps,
  answers,
  onAnswer,
  onFreeText,
  onNext,
  onBack,
}: ProfileProps) {
  const question = profileQuestions[stepIndex];
  const selectedOptionId = answers.profile[question.id];
  const needsFreeText =
    question.freeTextOptionId && selectedOptionId === question.freeTextOptionId;
  const freeTextValue = answers.profileFreeText[question.id] ?? "";

  const canContinue = Boolean(selectedOptionId) && (!needsFreeText || freeTextValue.trim().length > 0);

  return (
    <QuestionCard
      currentStep={stepIndex + 1}
      totalSteps={totalSteps}
      question={question.question}
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!canContinue}
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

      {needsFreeText && (
        <input
          type="text"
          value={freeTextValue}
          onChange={(e) => onFreeText(question.id, e.target.value)}
          placeholder={question.freeTextPlaceholder}
          className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/60 focus:border-primary"
        />
      )}
    </QuestionCard>
  );
}