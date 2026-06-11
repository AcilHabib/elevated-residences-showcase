import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/pba-logo.png"
      alt="P.B.A — Promotion Immobilière Benchallal A. Halim"
      className={cn(
        "w-auto object-contain object-left",
        className ??
          "h-14 min-w-[180px] sm:h-16 sm:min-w-[210px] md:h-[4.5rem] md:min-w-[250px] lg:min-w-[280px]",
      )}
    />
  );
}
