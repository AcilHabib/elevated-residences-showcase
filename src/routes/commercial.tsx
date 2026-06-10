import { createFileRoute } from "@tanstack/react-router";
import { Store, ArrowRight } from "lucide-react";
import commercialImg from "@/assets/commercial.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Locaux commerciaux — P.B.A Béjaïa" },
      { name: "description", content: "Opportunités d'investissement : locaux commerciaux F2, F3 et F4 au sein de la résidence." },
    ],
  }),
  component: CommercialPage,
});

const categories = [
  { type: "F2", spaces: [49.75, 56.23, 67.89, 68.02] },
  { type: "F3", spaces: [80.08, 84.36, 87.18, 89.72, 90.35, 97.37] },
  { type: "F4", spaces: [170.90] },
];

function CommercialPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={commercialImg} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container-luxury relative">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">Locaux commerciaux</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
              Investissements <span className="italic text-gradient-gold">stratégiques</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Des opportunités d'investissement stratégiques au sein de la résidence — emplacements à fort potentiel et flux assuré.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxury space-y-16">
          {categories.map((cat) => (
            <Reveal key={cat.type}>
              <div>
                <div className="flex items-baseline gap-4 mb-8">
                  <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">{cat.type}</h2>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{cat.spaces.length} surfaces disponibles</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cat.spaces.map((m2, i) => (
                    <Reveal key={m2} delay={i * 0.04}>
                      <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-luxury)] overflow-hidden">
                        <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gold/5 blur-2xl group-hover:bg-gold/15 transition-colors" />
                        <Store className="h-6 w-6 text-gold mb-4" />
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-4xl">{m2.toFixed(2)}</span>
                          <span className="text-gold font-medium">m²</span>
                        </div>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Local {cat.type}</p>
                        <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold group-hover:gap-3 transition-all">
                          Se renseigner <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
