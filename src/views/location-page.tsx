"use client";

import { MapPin, Waves, Car, ShoppingBag, GraduationCap, Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SimulationsGallery } from "@/components/SimulationsGallery";
import { useI18n } from "@/lib/i18n";
import { useLocationGallery } from "@/lib/simulations";
import { MAPS_EMBED_URL, MAPS_LINK_URL, RESIDENCE_COORDS, RESIDENCE_NAME } from "@/lib/site";

const nearbyIcons = [Waves, ShoppingBag, GraduationCap, Heart, Car, MapPin];

export default function LocationPage() {
  const { t } = useI18n();
  const locationGallery = useLocationGallery();

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-luxury">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              {t("location.subtitle")}
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
              {t("location.title")}{" "}
              <span className="italic text-gradient-gold">{t("location.titleAccent")}</span>{" "}
              {t("location.titleEnd")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {t("location.intro")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxury">
          <Reveal>
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)]">
              <img
                src="/images/simulations/11.jpg"
                alt={t("location.aerialAlt")}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                    {RESIDENCE_NAME}
                  </p>
                  <p className="mt-2 font-display text-3xl md:text-4xl">{t("location.coast")}</p>
                </div>
                <div className="glass-strong rounded-2xl px-5 py-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {t("location.coords")}
                  </p>
                  <p className="font-display text-lg">{RESIDENCE_COORDS.label}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-luxury">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 className="font-display text-2xl">{RESIDENCE_NAME}</h2>
              <a
                href={MAPS_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:text-gold transition-colors"
              >
                {t("location.openMaps")} →
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-luxury)] aspect-[16/9]">
              <iframe
                title={RESIDENCE_NAME}
                src={MAPS_EMBED_URL}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxury">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-12">{t("location.nearbyTitle")}</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nearbyIcons.map((Icon, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group flex items-center gap-5 p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{t(`location.nearby.${i}.name`)}</h3>
                    <p className="text-sm text-gold mt-0.5">{t(`location.nearby.${i}.dist`)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SimulationsGallery
        images={locationGallery}
        title={t("location.gallery.title")}
        subtitle={t("location.gallery.subtitle")}
        columns={3}
        className="pb-32"
      />
    </>
  );
}
