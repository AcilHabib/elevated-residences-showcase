"use client";

import Link from "next/link";
import { ArrowRight, Layers, Home } from "lucide-react";
import aerialImg from "@/assets/aerial-view.jpg";
import blockImg from "@/assets/block-render.jpg";
import { Reveal } from "@/components/Reveal";

const blocks = ["A", "B", "C", "D", "E", "F"].map((id) => ({
  id,
  name: `Bloc ${id}`,
  floors: 5,
  desc: `Bloc résidentiel de prestige composé de 5 étages, finitions haut de gamme et vues dégagées.`,
}));

export default function ResidencePage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aerialImg.src} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container-luxury relative">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              La Résidence
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
              Une architecture pensée comme{" "}
              <span className="italic text-gradient-gold">un art de vivre</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Six blocs résidentiels, trente étages, des centaines de fenêtres ouvertes sur la
              Méditerranée. Découvrez l'interactif d'implantation des blocs et accédez aux plans
              détaillés.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Interactive map */}
      <section className="py-20">
        <div className="container-luxury">
          <Reveal>
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)]">
              <img
                src={aerialImg.src}
                alt="Plan d'implantation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              {/* clickable block markers */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-4 p-8 md:p-16">
                {blocks.map((b, i) => (
                  <Link
                    key={b.id}
                    href={`/plans#bloc-${b.id}`}
                    className="group relative flex items-center justify-center"
                    style={{ animation: `scale-in 0.6s var(--ease-luxury) ${i * 0.1}s both` }}
                  >
                    <span className="absolute inset-0 rounded-2xl glass-strong opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex flex-col items-center gap-2 px-6 py-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/90 text-gold-foreground font-display text-2xl shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform">
                        {b.id}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Voir les plans
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Block cards */}
      <section className="py-20">
        <div className="container-luxury">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-12">Les six blocs</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.05}>
                <Link
                  href={`/plans#bloc-${b.id}`}
                  className="group block rounded-3xl overflow-hidden bg-card border border-border hover:border-gold/40 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-luxury)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={blockImg.src}
                      alt={b.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground font-display text-2xl shadow-[var(--shadow-gold)]">
                      {b.id}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl">{b.name}</h3>
                    <div className="mt-2 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-gold" /> {b.floors} étages
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Home className="h-3.5 w-3.5 text-gold" /> Plans PDF
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold group-hover:gap-3 transition-all">
                      Voir les plans <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
