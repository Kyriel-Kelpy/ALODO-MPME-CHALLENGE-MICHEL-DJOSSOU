import type { Dimension } from "../types/diagnostic";
import { dimensionMeta } from "../data/messages";
import { dimensionStyles } from "../data/dimensionStyles";

type DimensionBadgeProps = {
  dimension: Dimension;
  size?: "sm" | "md";
};

export function DimensionBadge({ dimension, size = "sm" }: DimensionBadgeProps) {
  const { icon: Icon, text, bg } = dimensionStyles[dimension];
  const label = dimensionMeta[dimension].label;

  const sizeClasses =
    size === "sm" ? "text-sm px-3 py-1.5 gap-1.5" : "text-base px-4 py-2 gap-2";

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${bg} ${text} ${sizeClasses}`}
    >
      <Icon size={size === "sm" ? 14 : 16} />
      {label}
    </span>
  );
}
