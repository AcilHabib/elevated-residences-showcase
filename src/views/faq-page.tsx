"use client";

import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";

const faqCount = 5;
const tranches = ["20%", "15%", "35%", "25%", "5%"];

export default function FaqPage() {
  const { t } = useI18n();

  const renderAnswer = (i: number) => {
    if (i === 2) {
      return (
        <>
          <p>{t("faq.2.a.intro")}</p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {tranches.map((p, j) => (
              <div key={p} className="rounded-xl bg-gold/10 border border-gold/30 p-3 text-center">
                <div className="font-display text-2xl text-gold">{p}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  {t("common.tranche")} {j + 1}
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    if (i === 4) {
      return (
        <>
          <p>{t("faq.4.a.intro")}</p>
          <ul className="mt-3 space-y-1.5 ml-4 list-disc">
            <li>{t("faq.4.view.sea")}</li>
            <li>{t("faq.4.view.pool")}</li>
          </ul>
        </>
      );
    }
    return <p>{t(`faq.${i}.a`)}</p>;
  };

  return (
    <section className="pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <Reveal>
          <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            {t("faq.subtitle")}
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight">
            {t("faq.title")}{" "}
            <span className="italic text-gradient-gold">{t("faq.titleAccent")}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("faq.intro")}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {Array.from({ length: faqCount }, (_, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl bg-card border border-border px-6 hover:border-gold/40 transition-colors"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl text-left hover:no-underline hover:text-gold py-5">
                  {t(`faq.${i}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {renderAnswer(i)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
