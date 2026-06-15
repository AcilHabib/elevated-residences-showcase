"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Shield,
  Waves,
  Car,
  Camera,
  Building2,
  Sparkles,
  Trees,
  Warehouse,
  Baby,
  ArrowRight,
  Thermometer,
  Square,
  Volume2,
  ChefHat,
  Gem,
  Layers,
  Download,
} from "lucide-react";
import interiorImg from "@/assets/interior-luxury.jpg";
import { AboutSection } from "@/components/AboutSection";
import { CompanyPortfolioSection } from "@/components/CompanyPortfolioSection";
import { PromoVideoSection } from "@/components/PromoVideoSection";
import { AwardsSection } from "@/components/AwardsSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Reveal } from "@/components/Reveal";
import { SimulationsGallery } from "@/components/SimulationsGallery";
import { Counter } from "@/components/Counter";
import { useI18n } from "@/lib/i18n";
import { useSimulationImages } from "@/lib/simulations";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/site";

const advantageIcons = [Waves, Shield, Camera, Waves, Car, Warehouse, Baby, Trees, Sparkles];
const featureIcons = [Thermometer, Square, Volume2, ChefHat, Gem, Layers];
const blockIds = ["A", "B", "C", "D", "E", "F"];

export default function HomePage() {
  const { t } = useI18n();
  const simulationImages = useSimulationImages();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const stats = [
    { v: 6, s: "", l: t("home.stat.0") },
    { v: 198, s: "", l: t("home.stat.1") },
    { v: 400, s: " m", l: t("home.stat.2") },
    { v: 2, s: "", l: t("home.stat.3") },
  ];

  return (
    <>
      <section ref={heroRef} className="relative h-[100vh] min-h-[700px] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <HeroCarousel images={simulationImages} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/45 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,color-mix(in_oklab,var(--primary)_20%,transparent),transparent_55%)]" />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-gold/60 animate-float"
              style={{
                left: `${(i * 7.3) % 95}%`,
                top: `${(i * 11.7) % 85}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full container-luxury flex items-end pb-32"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-foreground/90">
                {t("home.hero.location")}
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-foreground animate-fade-up">
              {t("home.hero.title1")}
              <br />
              <span className="text-gradient-gold italic">{t("home.hero.titleAccent")}</span>
              <br />
              {t("home.hero.title2")}
            </h1>

            <p
              className="mt-8 max-w-xl text-lg text-foreground/80 leading-relaxed"
              style={{ animation: "fade-up 0.9s var(--ease-luxury) 0.2s both" }}
            >
              {t("home.hero.subtitle")}{" "}
              <span className="text-gold font-medium">{t("home.hero.seaDistance")}</span>.
            </p>

            <div
              className="luxury-btn-row mt-10"
              style={{ animation: "fade-up 0.9s var(--ease-luxury) 0.4s both" }}
            >
              <Link
                href="/residence"
                className="group luxury-btn flex-1 sm:flex-initial sm:min-w-[14rem] sm:max-w-[16rem] bg-gradient-to-r from-primary to-[var(--gold)] text-primary-foreground shadow-[var(--shadow-luxury)] transition-transform hover:scale-[1.03]"
              >
                <span>{t("cta.discover")}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <a
                href="#brochure"
                className="group luxury-btn flex-1 sm:flex-initial sm:min-w-[14rem] sm:max-w-[16rem] glass text-foreground hover:border-gold/50 transition-colors"
              >
                <Download className="h-4 w-4 shrink-0" />
                <span>{t("cta.brochure")}</span>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="container-luxury">
            <div className="glass-strong rounded-t-2xl border-b-0 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {stats.map((s) => (
                <div key={s.l} className="px-4 py-6 md:py-8 text-center">
                  <div className="font-display text-3xl md:text-4xl text-gold">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-radial)] pointer-events-none" />
        <div className="container-luxury relative">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                {t("home.advantages.subtitle")}
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                {t("home.advantages.title")}{" "}
                <span className="italic text-gradient-gold">
                  {t("home.advantages.titleAccent")}
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {advantageIcons.map((Icon, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group relative h-full p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-luxury)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gold/10 text-gold mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl mb-2">{t(`home.adv.${i}.title`)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`home.adv.${i}.desc`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <CompanyPortfolioSection />
      <PromoVideoSection />
      <AwardsSection />

      <SimulationsGallery
        images={simulationImages}
        title={t("home.gallery.title")}
        subtitle={t("home.gallery.subtitle")}
        columns={4}
      />

      <section className="relative py-32">
        <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                {t("home.overview.subtitle")}
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                {t("home.overview.title")}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                {t("home.overview.desc")}
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {blockIds.map((id) => (
                  <li key={id} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-gold" />
                    <span className="text-foreground/90">
                      {t("common.block")} {id} — {t("home.overview.block")}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/residence"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold hover:gap-3 transition-all"
              >
                {t("home.overview.explore")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)] group">
              <img
                src="/images/simulations/04.jpg"
                alt={t("home.aerial.alt")}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                  {t("common.aerialView")}
                </p>
                <p className="mt-1 font-display text-xl">{t("common.mediterranean")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-32 bg-surface/50">
        <div className="container-luxury">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                {t("home.interior.subtitle")}
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                {t("home.interior.title")}{" "}
                <span className="italic text-gradient-gold">{t("home.interior.titleAccent")}</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden lg:sticky lg:top-28">
                <img
                  src={interiorImg.src}
                  alt={t("home.interior.alt")}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {featureIcons.map((Icon, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all">
                    <Icon className="h-6 w-6 text-gold mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-lg mb-2">{t(`home.feat.${i}.title`)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`home.feat.${i}.desc`)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="brochure" className="relative py-32">
        <div className="container-luxury">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-[oklch(from_var(--primary)_calc(l-0.1)_c_h)] p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--gold)_30%,transparent),transparent_60%)]" />
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative">
                <Building2 className="h-10 w-10 text-gold mx-auto mb-6" />
                <h2 className="font-display text-4xl md:text-6xl text-primary-foreground leading-tight max-w-3xl mx-auto">
                  {t("home.cta.title")}{" "}
                  <span className="italic text-gradient-gold">{t("home.cta.titleAccent")}</span>
                </h2>
                <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto">
                  {t("home.cta.desc")}
                </p>
                <div className="luxury-btn-row mt-10 justify-center">
                  <Link
                    href="/contact"
                    className="luxury-btn flex-1 sm:flex-initial sm:min-w-[14rem] sm:max-w-[16rem] bg-gold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition-transform"
                  >
                    <span>{t("home.cta.button")}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                  <a
                    href={buildWhatsAppUrl(t("home.cta.whatsappMessage"))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-btn flex-1 sm:flex-initial sm:min-w-[14rem] sm:max-w-[16rem] glass-strong text-primary-foreground"
                  >
                    <span>WhatsApp {WHATSAPP_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
