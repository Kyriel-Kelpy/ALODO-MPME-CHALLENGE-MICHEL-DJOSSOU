import { Coins, Megaphone, Monitor } from "lucide-react";
import type { Dimension } from "../types/diagnostic";

export const dimensionStyles: Record<
  Dimension,
  { icon: typeof Coins; text: string; bg: string; bar: string }
> = {
  finance: {
    icon: Coins,
    text: "text-primary",
    bg: "bg-primary/10",
    bar: "bg-primary",
  },
  commercial: {
    icon: Megaphone,
    text: "text-blue",
    bg: "bg-blue/10",
    bar: "bg-blue",
  },
  digitalisation: {
    icon: Monitor,
    text: "text-cyan",
    bg: "bg-cyan/10",
    bar: "bg-cyan",
  },
};
