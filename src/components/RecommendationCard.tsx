type RecommendationCardProps = {
  recommendations: string[];
};

export function RecommendationCard({ recommendations }: RecommendationCardProps) {
  return (
    <ol className="space-y-3">
      {recommendations.map((rec, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/10 text-xs font-semibold text-blue">
            {index + 1}
          </span>
          <span className="text-sm text-text-secondary">{rec}</span>
        </li>
      ))}
    </ol>
  );
}
