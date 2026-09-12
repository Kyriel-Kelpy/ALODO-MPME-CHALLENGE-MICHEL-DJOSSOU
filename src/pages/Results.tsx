import { RotateCcw, Target, Star, AlertTriangle, Lightbulb } from "lucide-react";
import type { DiagnosticResult } from "../types/diagnostic";
import { dimensionMeta, resultsCopy, dimensionStrengthCopy, dimensionVigilanceCopy } from "../data/messages";
import { getResultNarrative } from "../utils/results";
import { ScoreRing } from "../components/ScoreRing";
import { ScoreCard } from "../components/ScoreCard";
import { InfoCard } from "../components/InfoCard";
import { RecommendationCard } from "../components/RecommendationCard";
import { Button } from "../components/Button";

type ResultsProps = {
  result: DiagnosticResult;
  onRestart: () => void;
};

export function Results({ result, onRestart }: ResultsProps) {
  const narrative = getResultNarrative(result);
  const priorityLabel = dimensionMeta[result.priorityDimension].label;

  // Deux dimensions les plus fortes affichées comme "points forts"
  const topStrengths = result.strengths.slice(0, 2);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10 sm:py-14">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
        {resultsCopy.eyebrow}
      </p>
      <h1 className="mb-8 font-display text-3xl font-semibold text-text sm:text-4xl">
        {resultsCopy.title}
      </h1>

      <div className="mb-10 rounded-2xl border border-border bg-surface p-6">
        <ScoreRing score={result.globalScore} level={result.globalLevel} />
      </div>

      <h2 className="mb-4 font-display text-xl font-semibold text-text">
        {resultsCopy.dimensionsTitle}
      </h2>
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {result.dimensions.map((d) => (
          <ScoreCard key={d.dimension} result={d} />
        ))}
      </div>

      <div className="mb-8 rounded-2xl border border-primary/30 bg-primary/5 p-5">
        <div className="mb-2 flex items-center gap-2">
          <Target size={18} className="text-primary" />
          <p className="font-medium text-text">
            Votre priorité : <span className="text-primary">{priorityLabel}</span>
          </p>
        </div>
        <p className="text-sm text-text-secondary">{narrative}</p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <InfoCard
          icon={<Star size={14} />}
          iconClassName="bg-success/10 text-success"
          title={resultsCopy.strengthsTitle}
        >
          {topStrengths.map((dim) => (
            <div key={dim}>
              <p className="text-sm font-medium text-text">{dimensionMeta[dim].label}</p>
              <p className="text-sm text-text-secondary">{dimensionStrengthCopy[dim]}</p>
            </div>
          ))}
        </InfoCard>

        <InfoCard
          icon={<AlertTriangle size={14} />}
          iconClassName="bg-warning/10 text-warning"
          title={resultsCopy.vigilanceTitle}
        >
          <div>
            <p className="text-sm font-medium text-text">{dimensionMeta[result.vigilance].label}</p>
            <p className="text-sm text-text-secondary">
              {dimensionVigilanceCopy[result.vigilance]}
            </p>
          </div>
        </InfoCard>

        <InfoCard
          icon={<Lightbulb size={14} />}
          iconClassName="bg-blue/10 text-blue"
          title={resultsCopy.recommendationsTitle}
        >
          <RecommendationCard recommendations={result.recommendations} />
        </InfoCard>
      </div>

      <div className="flex justify-center">
        <Button variant="primary" onClick={onRestart} icon={<RotateCcw size={16} />} iconPosition="left">
          {resultsCopy.restartCta}
        </Button>
      </div>
    </div>
  );
}
