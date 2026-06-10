import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — P.B.A Béjaïa" },
      { name: "description", content: "Crédit bancaire, modes de paiement, tranches, locaux commerciaux, prix : toutes les réponses." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Peut-on bénéficier d'un crédit bancaire ?",
    a: (
      <>
        <p>Oui. Nous travaillons avec plusieurs banques partenaires :</p>
        <ul className="mt-3 space-y-1.5 ml-4 list-disc">
          <li>BNA</li>
          <li>CNEP</li>
          <li>BDL</li>
        </ul>
        <p className="mt-3">Le client peut choisir l'établissement bancaire qui lui convient.</p>
      </>
    ),
  },
  {
    q: "Quels sont les modes de paiement disponibles ?",
    a: <p>Paiement au comptant ou par tranches selon l'avancement des travaux.</p>,
  },
  {
    q: "Comment sont réparties les tranches de paiement ?",
    a: (
      <>
        <p>Les paiements sont effectués selon l'avancement du projet, répartis ainsi :</p>
        <div className="mt-4 grid grid-cols-5 gap-2">
          {["20%", "15%", "35%", "25%", "5%"].map((p, i) => (
            <div key={p} className="rounded-xl bg-gold/10 border border-gold/30 p-3 text-center">
              <div className="font-display text-2xl text-gold">{p}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">Tranche {i + 1}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    q: "Des locaux commerciaux sont-ils disponibles ?",
    a: <p>Oui. Plusieurs surfaces sont proposées afin de répondre à différents besoins commerciaux (F2, F3, F4).</p>,
  },
  {
    q: "Comment sont déterminés les prix ?",
    a: (
      <>
        <p>Les prix varient selon l'emplacement et la vue du logement, notamment :</p>
        <ul className="mt-3 space-y-1.5 ml-4 list-disc">
          <li>Vue sur mer</li>
          <li>Vue sur piscine</li>
        </ul>
      </>
    ),
  },
];

function FaqPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <Reveal>
          <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">Questions fréquentes</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight">
            Toutes les <span className="italic text-gradient-gold">réponses</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Crédit bancaire, modalités de paiement, locaux commerciaux : voici l'essentiel à connaître.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl bg-card border border-border px-6 hover:border-gold/40 transition-colors"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl text-left hover:no-underline hover:text-gold py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
