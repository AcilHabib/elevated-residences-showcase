"use client";

import { ArrowRight, Home, Store } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { APARTMENT_SURFACES, RETAIL_SPACES } from "@/lib/commercial-spaces";
import { useI18n } from "@/lib/i18n";

export default function CommercialPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/simulations/05.jpg"
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container-luxury relative">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              {t("commercial.subtitle")}
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
              {t("commercial.title")}{" "}
              <span className="italic text-gradient-gold">{t("commercial.titleAccent")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {t("commercial.intro")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxury space-y-20">
          <Reveal>
            <div>
              <div className="flex items-baseline gap-4 mb-8">
                <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">
                  {t("commercial.apartmentsTitle")}
                </h2>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {t("commercial.apartmentsSubtitle")}
                </p>
              </div>
              <div className="space-y-16">
                {APARTMENT_SURFACES.map((cat) => (
                  <div key={cat.type}>
                    <div className="flex items-baseline gap-4 mb-6">
                      <h3 className="font-display text-3xl">{cat.type}</h3>
                      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        {cat.surfaces.length}{" "}
                        {cat.surfaces.length === 1
                          ? t("commercial.surfaceSingular")
                          : t("commercial.surfacesPlural")}
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {cat.surfaces.map((m2, i) => (
                        <Reveal key={`${cat.type}-${m2}-${i}`} delay={i * 0.04}>
                          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-luxury)]">
                            <Home className="mb-4 h-6 w-6 text-gold" />
                            <div className="flex items-baseline gap-1">
                              <span className="font-display text-4xl">{m2.toFixed(2)}</span>
                              <span className="font-medium text-gold">m²</span>
                            </div>
                            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                              {t("commercial.apartmentLabel")} {cat.type}
                            </p>
                            <a
                              href="/contact"
                              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-all group-hover:gap-3"
                            >
                              {t("common.inquire")} <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-gold/30 bg-gold/5 p-8 md:p-10">
              <div className="flex items-baseline gap-4 mb-8">
                <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">
                  {t("commercial.retailTitle")}
                </h2>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {RETAIL_SPACES.length} {t("commercial.retailSubtitle")}
                </p>
              </div>
              <p className="mb-8 max-w-2xl text-muted-foreground leading-relaxed">
                {t("commercial.retailIntro")}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {RETAIL_SPACES.map((space, i) => (
                  <Reveal key={space.id} delay={i * 0.04}>
                    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-luxury)]">
                      <Store className="mb-4 h-6 w-6 text-gold" />
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl">{space.surface.toFixed(2)}</span>
                        <span className="font-medium text-gold">m²</span>
                      </div>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {t("commercial.retailLabel")} {space.id}
                      </p>
                      <a
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-all group-hover:gap-3"
                      >
                        {t("common.inquire")} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
