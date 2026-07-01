"use client";

import { MapPin, Route, GraduationCap, Mail, Stethoscope, Shield, Siren } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CompanyPortfolioSection } from "@/components/CompanyPortfolioSection";
import { QrCodeCard } from "@/components/QrCodeCard";
import { SimulationsGallery } from "@/components/SimulationsGallery";
import { useI18n } from "@/lib/i18n";
import { useLocationGallery } from "@/lib/simulations";
import {
  MAPS_EMBED_URL,
  MAPS_LINK_URL,
  OFFICE_COORDS,
  OFFICE_MAPS_EMBED_URL,
  OFFICE_MAPS_LINK,
  RESIDENCE_COORDS,
  RESIDENCE_NAME,
} from "@/lib/site";
import { Building2 } from "lucide-react";

const nearbyIcons = [Route, GraduationCap, GraduationCap, Mail, Stethoscope, Shield, Siren];
const nearbyCount = 7;

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

      <CompanyPortfolioSection />

      <section className="pb-16">
        <div className="container-luxury">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-gold" />
              <h2 className="font-display text-3xl md:text-4xl">{t("location.projectMapTitle")}</h2>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl">{t("location.projectMapDesc")}</p>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)] mb-8">
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
                  <p className="mt-2 font-display text-2xl md:text-3xl">{RESIDENCE_COORDS.place}</p>
                  <p className="mt-1 text-sm text-foreground/80">{t("location.siteHighlight")}</p>
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
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h3 className="font-display text-xl">
                {RESIDENCE_NAME} — {RESIDENCE_COORDS.place}
              </h3>
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
                title={`${RESIDENCE_NAME} — ${RESIDENCE_COORDS.place}`}
                src={MAPS_EMBED_URL}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 bg-surface/30">
        <div className="container-luxury grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl mb-2">
                {t("location.officeTitle")}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">{t("location.officeDesc")}</p>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p className="font-display text-lg">{OFFICE_COORDS.place}</p>
                <a
                  href={OFFICE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:text-gold transition-colors"
                >
                  {t("location.openMaps")} →
                </a>
              </div>
              <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-luxury)] aspect-[16/9]">
                <iframe
                  title={t("location.officeTitle")}
                  src={OFFICE_MAPS_EMBED_URL}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {t("location.coords")}: {OFFICE_COORDS.label}
              </p>
            </Reveal>
          </div>
          <QrCodeCard />
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxury">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-12">{t("location.nearbyTitle")}</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: nearbyCount }, (_, i) => {
              const Icon = nearbyIcons[i] ?? MapPin;
              const dist = t(`location.nearby.${i}.dist`);

              return (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="group flex items-center gap-5 p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl">{t(`location.nearby.${i}.name`)}</h3>
                      {dist ? <p className="text-sm text-gold mt-0.5">{dist}</p> : null}
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
