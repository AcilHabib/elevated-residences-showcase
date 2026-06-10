import logo from "@/assets/pba-logo.png.asset.json";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="P.B.A — Promotion Immobilière Benchallal A. Halim"
      className={`${className} w-auto object-contain`}
    />
  );
}
