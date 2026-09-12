import type { DimensionResult } from "../types/diagnostic";
import { dimensionMeta } from "../data/messages";
import { dimensionStyles } from "../data/dimensionStyles";

type ScoreCardProps = {
  result: DimensionResult;
};

export function ScoreCard({ result }: ScoreCardProps) {
  const { icon: Icon, text, bg, bar } = dimensionStyles[result.dimension];
  const label = dimensionMeta[result.dimension].label;

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${bg} ${text}`}>
          <Icon size={16} />
        </span>
        <span className="font-medium text-text">{label}</span>
      </div>
      <p className="mb-3 font-display text-2xl font-semibold text-text">
        {result.score} <span className="text-base font-normal text-text-secondary">/ 100</span>
      </p>
      <div className="h-2 w-full rounded-full bg-border/60">
        <div
          className={`h-full rounded-full ${bar}`}
          style={{ width: `${result.score}%` }}
        />
      </div>
    </div>
  );
}
