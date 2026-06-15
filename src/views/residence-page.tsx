"use client";

import { InteractiveSimulationPlaceholder } from "@/components/InteractiveSimulationPlaceholder";
import { Reveal } from "@/components/Reveal";
import { ResidenceBlockMap } from "@/components/ResidenceBlockMap";
import { SimulationsGallery } from "@/components/SimulationsGallery";
import { useI18n } from "@/lib/i18n";
import { useResidenceGallery } from "@/lib/simulations";

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
