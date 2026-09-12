/**
 * Décor discret inspiré du langage visuel ALODO (points, lignes fines,
 * réseau abstrait). Purement décoratif, en arrière-plan, sans jamais
 * réduire la lisibilité du contenu.
 */
export function DataDecor() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-40"
      aria-hidden="true"
    >
      <circle cx="6%" cy="18%" r="4" fill="var(--color-blue)" opacity="0.5" />
      <circle cx="3%" cy="55%" r="6" fill="var(--color-cyan)" opacity="0.35" />
      <circle cx="10%" cy="82%" r="3" fill="var(--color-blue)" opacity="0.4" />
      <line x1="6%" y1="18%" x2="3%" y2="55%" stroke="var(--color-border)" strokeWidth="1" />
      <line x1="3%" y1="55%" x2="10%" y2="82%" stroke="var(--color-border)" strokeWidth="1" />

      <circle cx="95%" cy="12%" r="5" fill="var(--color-cyan)" opacity="0.4" />
      <circle cx="92%" cy="40%" r="3" fill="var(--color-blue)" opacity="0.5" />
      <circle cx="97%" cy="70%" r="4" fill="var(--color-cyan)" opacity="0.35" />
      <line x1="95%" y1="12%" x2="92%" y2="40%" stroke="var(--color-border)" strokeWidth="1" />
      <line x1="92%" y1="40%" x2="97%" y2="70%" stroke="var(--color-border)" strokeWidth="1" />
    </svg>
  );
}
