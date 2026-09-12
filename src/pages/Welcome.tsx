import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button";
import { welcomeCopy } from "../data/messages";

type WelcomeProps = {
  onStart: () => void;
};

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="mx-auto flex min-h-[calc(100svh-73px)] w-full max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="mb-4 font-display text-4xl font-semibold leading-tight text-text sm:text-5xl">
        {welcomeCopy.title}
      </h1>
      <p className="mb-3 text-lg text-text">{welcomeCopy.subtitle}</p>
      <p className="mb-8 max-w-xl text-text-secondary">{welcomeCopy.description}</p>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {welcomeCopy.stats.map((stat) => (
          <span
            key={stat}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-secondary"
          >
            {stat}
          </span>
        ))}
      </div>

      <Button onClick={onStart} icon={<ArrowRight size={18} />}>
        {welcomeCopy.cta}
      </Button>
      <p className="mt-4 text-sm text-text-secondary">{welcomeCopy.duration}</p>
    </div>
  );
}
