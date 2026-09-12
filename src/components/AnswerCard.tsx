type AnswerCardProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export function AnswerCard({ label, selected, onSelect }: AnswerCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={`flex min-h-[44px] w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-colors ${
        selected
          ? "border-primary bg-primary/5"
          : "border-border bg-surface hover:border-text/30"
      }`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-primary" : "border-border"
        }`}
      >
        {selected && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
      </span>
      <span className="text-text">{label}</span>
    </button>
  );
}
