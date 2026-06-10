"use client";
import { MapPin, Waves, Car, ShoppingBag, GraduationCap, Heart } from "lucide-react";
import aerialImg from "@/assets/aerial-view.jpg";
import { Reveal } from "@/components/Reveal";

const nearby = [
  { icon: Waves, name: "Mer Méditerranée", dist: "400 m" },
  { icon: ShoppingBag, name: "Commerces & boutiques", dist: "5 min" },
  { icon: GraduationCap, name: "Écoles & universités", dist: "10 min" },
  { icon: Heart, name: "Centres médicaux", dist: "8 min" },
  { icon: Car, name: "Axes routiers majeurs", dist: "Accès direct" },
  { icon: MapPin, name: "Centre-ville Béjaïa", dist: "12 min" },
];

export default function LocationPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-luxury">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Localisation
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
              Béjaïa, à <span className="italic text-gradient-gold">400 mètres</span> de la mer
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Une adresse rare, au croisement de la nature, de la culture et des commodités
              urbaines.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Aerial */}
      <section className="pb-16">
        <div className="container-luxury">
          <Reveal>
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)]">
              <img
                src={aerialImg.src}
                alt="Vue aérienne du site"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                    Béjaïa · Algérie
                  </p>
                  <p className="mt-2 font-display text-3xl md:text-4xl">
                    À 400 m de la côte méditerranéenne
                  </p>
                </div>
                <div className="glass-strong rounded-2xl px-5 py-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Coordonnées
                  </p>
                  <p className="font-display text-lg">36.7525° N · 5.0566° E</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-luxury">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-luxury)] aspect-[16/9]">
              <iframe
                title="Carte Béjaïa"
                src="https://www.google.com/maps?q=Bejaia,Algeria&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nearby */}
      <section className="pb-32">
        <div className="container-luxury">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-12">À proximité immédiate</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nearby.map((n, i) => (
              <Reveal key={n.name} delay={i * 0.05}>
                <div className="group flex items-center gap-5 p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:scale-110 transition-transform">
                    <n.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{n.name}</h3>
                    <p className="text-sm text-gold mt-0.5">{n.dist}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
