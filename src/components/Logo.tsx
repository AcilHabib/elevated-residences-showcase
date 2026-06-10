export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src="/pba-logo.png"
      alt="P.B.A — Promotion Immobilière Benchallal A. Halim"
      className={`${className} w-auto object-contain`}
    />
  );
}
