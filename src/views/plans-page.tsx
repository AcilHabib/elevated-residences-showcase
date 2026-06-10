"use client";
import { FileText, Download, Maximize2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const blocks = ["A", "B", "C", "D", "E", "F"];

export default function PlansPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-luxury">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Plans d'étage
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-3xl">
              Plans détaillés <span className="italic text-gradient-gold">par bloc</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Téléchargez ou prévisualisez les plans PDF de chaque étage pour les six blocs de la
              résidence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxury space-y-20">
          {blocks.map((b) => (
            <div key={b} id={`bloc-${b}`} className="scroll-mt-32">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground font-display text-2xl shadow-[var(--shadow-gold)]">
                    {b}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                      Bloc {b}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl">5 étages disponibles</h2>
                  </div>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((floor, i) => (
                  <Reveal key={floor} delay={i * 0.05}>
                    <div className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/40 transition-all">
                      <div className="aspect-[3/4] relative bg-gradient-to-br from-surface-elevated to-muted flex items-center justify-center overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage:
                              "linear-gradient(45deg, transparent 48%, var(--gold) 48% 52%, transparent 52%), linear-gradient(-45deg, transparent 48%, var(--gold) 48% 52%, transparent 52%)",
                            backgroundSize: "40px 40px",
                          }}
                        />
                        <FileText className="relative h-14 w-14 text-gold/80 group-hover:scale-110 transition-transform" />
                        <div className="absolute bottom-3 left-3 right-3 glass-strong rounded-lg px-3 py-2 text-center">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            PDF
                          </p>
                          <p className="font-display text-sm">Plan disponible bientôt</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                              Bloc {b}
                            </p>
                            <p className="font-display text-lg">Étage {floor}</p>
                          </div>
                          <div className="flex gap-1.5">
                            <button
                              title="Plein écran"
                              className="p-2 rounded-lg bg-muted/60 hover:bg-gold/20 text-foreground/80 hover:text-gold transition-colors"
                            >
                              <Maximize2 className="h-3.5 w-3.5" />
                            </button>
                            <button
                              title="Télécharger"
                              className="p-2 rounded-lg bg-muted/60 hover:bg-gold/20 text-foreground/80 hover:text-gold transition-colors"
                            >
                              <Download className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
