"use client";

import { Box, Move3d, Sparkles } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

export function InteractiveSimulationPlaceholder() {
  const { t } = useI18n();

  return (
    <section className="py-20">
      <div className="container-luxury">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-luxury)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]" />

            <div className="relative aspect-[16/9] min-h-[320px] flex flex-col items-center justify-center p-8 md:p-16 text-center">
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Box className="h-10 w-10" />
              </div>

              <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                {t("sim3d.subtitle")}
              </p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl max-w-xl">
                {t("sim3d.title")}
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
                {t("sim3d.desc")}
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-6 py-3">
                <Sparkles className="h-4 w-4 text-gold animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  {t("sim3d.coming")}
                </span>
                <Move3d className="h-4 w-4 text-gold/70" />
              </div>

              <p className="mt-6 text-xs text-muted-foreground max-w-sm">{t("sim3d.hint")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
