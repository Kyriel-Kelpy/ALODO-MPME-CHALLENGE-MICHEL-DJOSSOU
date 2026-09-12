import type { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  iconClassName?: string;
  title: string;
  children: ReactNode;
};

export function InfoCard({ icon, iconClassName = "", title, children }: InfoCardProps) {
  return (
    <div className="flex-1 rounded-2xl border border-border bg-surface p-5">
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full ${iconClassName}`}
        >
          {icon}
        </span>
        <span className="font-medium text-text">{title}</span>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
