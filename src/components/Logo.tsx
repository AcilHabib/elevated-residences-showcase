import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority }: LogoProps) {
  return (
    <img
      src="/pba-logo.png"
      alt="P.B.A — Promotion Immobilière Benchallal A. Halim"
      width={1536}
      height={1024}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={cn(
        "block w-auto max-w-none object-contain object-left drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]",
        className ??
          "h-14 sm:h-16 md:h-[4.5rem] lg:h-20 xl:h-24 min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px]",
      )}
    />
  );
}
