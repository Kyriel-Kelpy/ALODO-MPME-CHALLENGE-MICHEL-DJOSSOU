import { Loader2 } from "lucide-react";
import { calculatingCopy } from "../data/messages";

export function Calculating() {
  return (
    <div className="flex min-h-[calc(100svh-73px)] flex-col items-center justify-center gap-4 px-6 text-center">
      <Loader2 className="animate-spin text-primary" size={28} />
      <p className="text-lg font-medium text-text">{calculatingCopy.title}</p>
    </div>
  );
}
