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
  ArrowRight,
  Thermometer,
  Square,
  Volume2,
  ChefHat,
  Gem,
  Layers,
  Download,
} from "lucide-react";
import heroImg from "@/assets/hero-residence.jpg";
import aerialImg from "@/assets/aerial-view.jpg";
import interiorImg from "@/assets/interior-luxury.jpg";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

const advantages = [
  {
    icon: Waves,
    title: "400 m de la mer",
    desc: "Une localisation d'exception, à quelques pas du rivage.",
  },
  {
    icon: Shield,
    title: "Résidence sécurisée",
    desc: "Enceinte clôturée avec contrôle d'accès permanent.",
  },
  {
    icon: Camera,
    title: "Surveillance 24/7",
    desc: "Vidéosurveillance et présence continue sur site.",
  },
  { icon: Waves, title: "Deux piscines", desc: "Bassins paysagers pour adultes et enfants." },
  { icon: Car, title: "Grand parking", desc: "Stationnement privatif sécurisé pour résidents." },
  {
    icon: Trees,
    title: "Espaces communs",
    desc: "Jardins, allées et lieux de vie pensés pour vous.",
  },
  {
    icon: Sparkles,
    title: "Confort & tranquillité",
    desc: "Un cadre serein, à l'abri de l'agitation urbaine.",
  },
];

const features = [
  {
    icon: Thermometer,
    title: "Pré-installation chauffage central",
    desc: "Système prêt pour un confort thermique optimal.",
  },
  {
    icon: Square,
    title: "Double vitrage à gaz isolant",
    desc: "Performance acoustique et thermique de premier ordre.",
  },
  {
    icon: Volume2,
    title: "Isolation phonique renforcée",
    desc: "Une tranquillité absolue dans chaque pièce.",
  },
  {
    icon: ChefHat,
    title: "Cuisine entièrement équipée",
    desc: "Aménagements modernes prêts à vivre.",
  },
  { icon: Gem, title: "Finitions premium", desc: "Marbre, bois noble et détails soignés." },
  {
    icon: Layers,
    title: "Matériaux haut de gamme",
    desc: "Sélection rigoureuse de matériaux durables.",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100vh] min-h-[700px] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroImg.src}
            alt="Résidence de prestige Benchallal"
            className="h-full w-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_50%)]" />
        </motion.div>

        {/* floating particles */}
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
                Béjaïa · Algérie
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-foreground animate-fade-up">
              Votre résidence
              <br />
              <span className="text-gradient-gold italic">de prestige</span>
              <br />à Béjaïa
            </h1>

            <p
              className="mt-8 max-w-xl text-lg text-foreground/80 leading-relaxed"
              style={{ animation: "fade-up 0.9s var(--ease-luxury) 0.2s both" }}
            >
              Confort, sécurité et qualité de vie à seulement{" "}
              <span className="text-gold font-medium">400 mètres de la mer</span>.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4"
              style={{ animation: "fade-up 0.9s var(--ease-luxury) 0.4s both" }}
            >
              <Link
                href="/residence"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gold)] to-[oklch(from_var(--gold)_calc(l+0.08)_c_h)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
              >
                Découvrir le projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#brochure"
                className="group inline-flex items-center gap-3 rounded-full glass px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground hover:border-gold/50 transition-colors"
              >
                <Download className="h-4 w-4" />
                Télécharger la brochure
              </a>
            </div>
          </div>
        </motion.div>

        {/* stats bar */}
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="container-luxury">
            <div className="glass-strong rounded-t-2xl border-b-0 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {[
                { v: 6, s: "", l: "Blocs résidentiels" },
                { v: 30, s: "", l: "Étages au total" },
                { v: 400, s: " m", l: "De la mer" },
                { v: 2, s: "", l: "Piscines paysagères" },
              ].map((s) => (
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

      {/* ADVANTAGES */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-radial)] pointer-events-none" />
        <div className="container-luxury relative">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                Vos avantages
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Un cadre de vie pensé pour{" "}
                <span className="italic text-gradient-gold">l'exception</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="group relative h-full p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-luxury)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gold/10 text-gold mb-5 group-hover:scale-110 transition-transform">
                      <a.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl mb-2">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AERIAL VIEW SPLIT */}
      <section className="relative py-32">
        <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                Vue d'ensemble
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Six blocs résidentiels au cœur d'un écrin paysager
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Pensée comme un véritable village méditerranéen, la résidence déploie six blocs
                d'architecture contemporaine autour de jardins luxuriants et de bassins paysagers.
                Un équilibre rare entre intimité et art de vivre.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Bloc A — 5 étages",
                  "Bloc B — 5 étages",
                  "Bloc C — 5 étages",
                  "Bloc D — 5 étages",
                  "Bloc E — 5 étages",
                  "Bloc F — 5 étages",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-gold" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/residence"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold hover:gap-3 transition-all"
              >
                Explorer la résidence <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)] group">
              <img
                src={aerialImg.src}
                alt="Vue aérienne de la résidence"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                  Vue aérienne
                </p>
                <p className="mt-1 font-display text-xl">Mer Méditerranée à 400 m</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTERIOR FEATURES */}
      <section className="relative py-32 bg-surface/50">
        <div className="container-luxury">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                Finitions intérieures
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                Chaque détail, <span className="italic text-gradient-gold">une signature</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden lg:sticky lg:top-28">
                <img
                  src={interiorImg.src}
                  alt="Intérieur d'appartement de luxe"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all">
                    <f.icon className="h-6 w-6 text-gold mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-lg mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="brochure" className="relative py-32">
        <div className="container-luxury">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-[oklch(from_var(--primary)_calc(l-0.1)_c_h)] p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--gold)_30%,transparent),transparent_60%)]" />
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative">
                <Building2 className="h-10 w-10 text-gold mx-auto mb-6" />
                <h2 className="font-display text-4xl md:text-6xl text-primary-foreground leading-tight max-w-3xl mx-auto">
                  Réservez votre <span className="italic text-gradient-gold">visite privée</span>
                </h2>
                <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto">
                  Notre équipe commerciale vous accueille pour une présentation personnalisée du
                  projet et des disponibilités.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition-transform"
                  >
                    Demander un rendez-vous <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+213770275755"
                    className="inline-flex items-center gap-2 rounded-full glass-strong px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground"
                  >
                    0770 27 57 55
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
