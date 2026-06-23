"use client";

import { Award } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { awardImages, fairAwardImages } from "@/lib/awards";
import { useI18n } from "@/lib/i18n";

export function AwardsSection() {
  const { t } = useI18n();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-radial)] pointer-events-none" />
      <div className="container-luxury relative">
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                {t("awards.subtitle")}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">{t("awards.title")}</h2>
            <p className="mt-3 text-lg text-primary font-medium">{t("awards.event")}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{t("awards.desc")}</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awardImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-gold/40 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-luxury)]">
                <div className="aspect-[3/4] overflow-hidden bg-muted/30">
                  <img
                    src={img.src}
                    alt={t(`awards.alt.${i}`)}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t(`awards.caption.${i}`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 mb-8">
            <h3 className="font-display text-2xl md:text-3xl leading-tight">
              {t("awards.fair2026.title")}
            </h3>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fairAwardImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-gold/40 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-luxury)]">
                <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t("awards.fair2026.title")}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
