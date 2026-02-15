export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-gold-primary/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold-primary/60" />
      <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-gold-primary/40" />
    </div>
  );
}
