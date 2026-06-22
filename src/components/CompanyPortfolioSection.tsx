"use client";

import { Building2, Clock, HardHat } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { COMPANY_PROJECTS } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function CompanyPortfolioSection() {
  const { t } = useI18n();

  return (
    <section className="relative py-32 bg-surface/30">
      <div className="container-luxury">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              {t("portfolio.subtitle")}
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              {t("portfolio.title")}{" "}
              <span className="italic text-gradient-gold">{t("portfolio.titleAccent")}</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              {t("portfolio.intro")}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {COMPANY_PROJECTS.map((project, i) => {
            const inProgress = project.status === "in_progress";

            return (
              <Reveal key={project.id} delay={i * 0.08}>
                <article
                  className={cn(
                    "h-full rounded-3xl border bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-luxury)]",
                    project.featured
                      ? "border-gold/50 shadow-[var(--shadow-gold)]"
                      : "border-border hover:border-gold/30",
                  )}
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      {inProgress ? <HardHat className="h-6 w-6" /> : <Clock className="h-6 w-6" />}
                    </div>
                    <span
                      className={cn(
                        "text-[10px] uppercase tracking-[0.18em] font-semibold rounded-full px-3 py-1",
                        project.featured
                          ? "bg-gold/15 text-gold border border-gold/30"
                          : inProgress
                            ? "bg-gold/15 text-gold border border-gold/30"
                            : "bg-muted text-muted-foreground",
                      )}
                    >
                      {t(project.statusKey)}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl">{t(project.nameKey)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(project.locationKey)}</p>
                  {project.units != null && (
                    <p className="mt-4 flex items-center gap-2 text-sm font-medium">
                      <Building2 className="h-4 w-4 text-gold" />
                      {project.units} {t("portfolio.apartments")}
                    </p>
                  )}
                  {project.highlightKey && (
                    <p className="mt-4 text-sm text-gold/90 leading-relaxed">
                      {t(project.highlightKey)}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
