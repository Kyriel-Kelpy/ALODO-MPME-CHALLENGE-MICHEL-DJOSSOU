import type { ReactNode } from "react";
import { Share2 } from "lucide-react";

type HeaderProps = {
  right?: ReactNode;
};

export function Header({ right }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-10">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Share2 size={16} />
        </span>
        <span className="font-display text-lg font-semibold tracking-tight">
          <span className="text-primary">ALODO</span> MPME
        </span>
        <span className="hidden text-sm text-text-secondary sm:inline">
          | Diagnostic de maturité
        </span>
      </div>
      {right}
    </header>
  );
}
