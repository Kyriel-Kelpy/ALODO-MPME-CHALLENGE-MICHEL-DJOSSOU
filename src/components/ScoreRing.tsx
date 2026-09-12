import { CheckCircle2 } from "lucide-react";
import type { MaturityLevel } from "../types/diagnostic";

type ScoreRingProps = {
  score: number;
  level: MaturityLevel;
};

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const levelStyles: Record<MaturityLevel, string> = {
  "À structurer": "bg-danger/10 text-danger",
  "En construction": "bg-warning/10 text-warning",
  "Structuré": "bg-success/10 text-success",
  "Maîtrisé": "bg-success/10 text-success",
};

export function ScoreRing({ score, level }: ScoreRingProps) {
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
      <svg width="112" height="112" viewBox="0 0 112 112" className="shrink-0">
        <circle
          cx="56"
          cy="56"
          r={RADIUS}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="10"
        />
        <circle
          cx="56"
          cy="56"
          r={RADIUS}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          transform="rotate(-90 56 56)"
        />
        <text
          x="56"
          y="52"
          textAnchor="middle"
          className="font-display"
          fontSize="28"
          fontWeight="700"
          fill="var(--color-text)"
        >
          {score}
        </text>
        <text
          x="56"
          y="70"
          textAnchor="middle"
          fontSize="12"
          fill="var(--color-text-secondary)"
        >
          /100
        </text>
      </svg>

      <span
        className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${levelStyles[level]}`}
      >
        <CheckCircle2 size={16} />
        {level}
      </span>
    </div>
  );
}
