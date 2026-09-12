import type { OptionalField } from "../types/diagnostic";

type OptionalFieldInputProps = {
  field: OptionalField;
  value: string | string[] | undefined;
  onChange: (value: string | string[]) => void;
};

export function OptionalFieldInput({
  field,
  value,
  onChange,
}: OptionalFieldInputProps) {
  if (field.type === "text") {
    return (
      <div className="space-y-1.5">
        <label
          htmlFor={field.id}
          className="text-sm text-text-secondary"
        >
          {field.label}
        </label>
        <input
          id={field.id}
          type="text"
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/60 focus:border-primary"
        />
      </div>
    );
  }

  const selected = (value as string[]) ?? [];

  function toggle(option: string) {
    const next = selected.includes(option)
      ? selected.filter((o) => o !== option)
      : [...selected, option];
    onChange(next);
  }

  return (
    <div className="space-y-2">
      <p className="text-sm text-text-secondary">{field.label}</p>
      <div className="flex flex-wrap gap-2">
        {field.options?.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggle(option)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                isSelected
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-surface text-text-secondary hover:border-text/30"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
