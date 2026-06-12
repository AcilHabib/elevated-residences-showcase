"use client";

import { Building2, Shield, Users } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useI18n();

  const pillars = [
    { icon: Building2, label: t("about.pillar.since") },
    { icon: Shield, label: t("about.pillar.quality") },
    { icon: Users, label: t("about.pillar.trust") },
  ];

  return (
    <section className="relative py-32 bg-surface/50">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                {t("about.subtitle")}
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                {t("about.title")}
              </h2>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
                <p className="font-medium text-foreground">{t("about.p4")}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative rounded-3xl border border-border bg-card p-10 md:p-12 overflow-hidden">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative grid grid-cols-3 gap-4">
                {pillars.map((p, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 rounded-2xl bg-muted/40 p-6 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.18em] font-semibold text-foreground">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative mt-8 pt-8 border-t border-border">
                <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold">P.B.A</p>
                <p className="mt-2 font-display text-2xl">{t("common.companyName")}</p>
                <p className="text-muted-foreground">{t("common.companyShort")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
