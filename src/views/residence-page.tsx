"use client";

import Link from "next/link";
import { ArrowRight, Layers, Home } from "lucide-react";
import { InteractiveSimulationPlaceholder } from "@/components/InteractiveSimulationPlaceholder";
import { Reveal } from "@/components/Reveal";
import { ResidenceBlockMap } from "@/components/ResidenceBlockMap";
import { SimulationsGallery } from "@/components/SimulationsGallery";
import { useI18n } from "@/lib/i18n";
import { useResidenceGallery } from "@/lib/simulations";

const blockIds = ["A", "B", "C", "D", "E", "F"];

export default function ResidencePage() {
  const { t } = useI18n();
  const residenceGallery = useResidenceGallery();

  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/simulations/03.jpg"
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container-luxury relative">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              {t("residence.subtitle")}
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
              {t("residence.title")}{" "}
              <span className="italic text-gradient-gold">{t("residence.titleAccent")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {t("residence.intro")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxury">
          <Reveal>
            <ResidenceBlockMap />
          </Reveal>
        </div>
      </section>

      <InteractiveSimulationPlaceholder />

      <section className="py-20">
        <div className="container-luxury">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-12">
              {t("residence.blocksTitle")}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blockIds.map((id, i) => (
              <Reveal key={id} delay={i * 0.05}>
                <Link
                  href="/plans"
                  className="group block rounded-3xl overflow-hidden bg-card border border-border hover:border-gold/40 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-luxury)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={residenceGallery[(i + 1) % residenceGallery.length].src}
                      alt={`${t("common.block")} ${id}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground font-display text-2xl shadow-[var(--shadow-gold)]">
                      {id}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl">
                      {t("common.block")} {id}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-gold" /> 5 {t("common.floors")}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Home className="h-3.5 w-3.5 text-gold" /> {t("common.pdfPlans")}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {t("residence.blockDesc")}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold group-hover:gap-3 transition-all">
                      {t("common.viewPlans")} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SimulationsGallery
        images={residenceGallery}
        title={t("residence.gallery.title")}
        subtitle={t("residence.gallery.subtitle")}
        columns={3}
        className="pb-32"
      />
    </>
  );
}
