/**
 * Décor discret inspiré du langage visuel ALODO (points, lignes fines,
 * réseau abstrait). Purement décoratif, en arrière-plan, sans jamais
 * réduire la lisibilité du contenu.
 */
export function DataDecor() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    >
      {/* Réseau côté gauche */}
      <circle cx="5%" cy="14%" r="6" fill="var(--color-blue)" opacity="0.5" />
      <circle cx="8%" cy="30%" r="10" fill="var(--color-cyan)" opacity="0.3" />
      <circle cx="3%" cy="52%" r="5" fill="var(--color-blue)" opacity="0.55" />
      <circle cx="9%" cy="72%" r="8" fill="var(--color-cyan)" opacity="0.35" />
      <circle cx="4%" cy="90%" r="4" fill="var(--color-blue)" opacity="0.45" />
      <line x1="5%" y1="14%" x2="8%" y2="30%" stroke="var(--color-border)" strokeWidth="1" />
      <line x1="8%" y1="30%" x2="3%" y2="52%" stroke="var(--color-border)" strokeWidth="1" />
      <line x1="3%" y1="52%" x2="9%" y2="72%" stroke="var(--color-border)" strokeWidth="1" />
      <line x1="9%" y1="72%" x2="4%" y2="90%" stroke="var(--color-border)" strokeWidth="1" />

      {/* Petits points isolés côté gauche */}
      <circle cx="14%" cy="8%" r="2.5" fill="var(--color-cyan)" opacity="0.4" />
      <circle cx="13%" cy="62%" r="2" fill="var(--color-blue)" opacity="0.35" />
      <circle cx="16%" cy="82%" r="2.5" fill="var(--color-cyan)" opacity="0.3" />

      {/* Réseau côté droit */}
      <circle cx="95%" cy="10%" r="7" fill="var(--color-cyan)" opacity="0.4" />
      <circle cx="91%" cy="28%" r="5" fill="var(--color-blue)" opacity="0.5" />
      <circle cx="97%" cy="48%" r="9" fill="var(--color-cyan)" opacity="0.3" />
      <circle cx="92%" cy="68%" r="4" fill="var(--color-blue)" opacity="0.55" />
      <circle cx="96%" cy="87%" r="6" fill="var(--color-cyan)" opacity="0.35" />
      <line x1="95%" y1="10%" x2="91%" y2="28%" stroke="var(--color-border)" strokeWidth="1" />
      <line x1="91%" y1="28%" x2="97%" y2="48%" stroke="var(--color-border)" strokeWidth="1" />
      <line x1="97%" y1="48%" x2="92%" y2="68%" stroke="var(--color-border)" strokeWidth="1" />
      <line x1="92%" y1="68%" x2="96%" y2="87%" stroke="var(--color-border)" strokeWidth="1" />

      {/* Petits points isolés côté droit */}
      <circle cx="86%" cy="18%" r="2" fill="var(--color-blue)" opacity="0.35" />
      <circle cx="88%" cy="58%" r="2.5" fill="var(--color-cyan)" opacity="0.4" />
      <circle cx="85%" cy="78%" r="2" fill="var(--color-blue)" opacity="0.3" />
    </svg>
  );
}