import type { AwardType } from "@/types/award";
import { AWARD_TYPE_SHORT_LABELS } from "@/lib/constants";

const badgeStyles: Record<AwardType, string> = {
  gold: "bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light text-bg-primary font-bold",
  grandprix: "bg-gold-dark/30 text-gold-light border border-gold-primary/30",
  "best-cp": "bg-tier-silver/15 text-tier-silver border border-tier-silver/30",
  "special-development": "bg-tier-blue/15 text-tier-blue border border-tier-blue/30",
  accessory: "bg-tier-bronze/15 text-tier-bronze border border-tier-bronze/30",
};

interface AwardBadgeProps {
  type: AwardType;
  className?: string;
}

export function AwardBadge({ type, className = "" }: AwardBadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${badgeStyles[type]} ${className}`}
    >
      {AWARD_TYPE_SHORT_LABELS[type]}
    </span>
  );
}
