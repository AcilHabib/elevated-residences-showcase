"use client";

import { useCallback, useEffect, useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { useAvailability } from "@/hooks/use-availability";
import { cn } from "@/lib/utils";
import {
  apartmentPlanCategories,
  getApartmentCategory,
  getPlanVariant,
  type ApartmentCategory,
} from "@/lib/apartment-plans";
import { isUnitAvailable } from "@/lib/availability.types";
import { useI18n } from "@/lib/i18n";

function parseHash(): { category: ApartmentCategory | null; type: number | null } {
  if (typeof window === "undefined") return { category: null, type: null };
  const raw = window.location.hash.replace(/^#/, "");
  const [cat, typeStr] = raw.split("-");
  if (cat !== "f2" && cat !== "f3" && cat !== "f4") return { category: null, type: null };
  const type = typeStr ? Number.parseInt(typeStr, 10) : null;
  return { category: cat, type: Number.isFinite(type) ? type : null };
}

export default function PlansPage() {
  const { t } = useI18n();
  const { map: availability } = useAvailability();
  const [category, setCategory] = useState<ApartmentCategory | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);

  const applyHash = useCallback(() => {
    const { category: cat, type } = parseHash();
    if (!cat) return;
    const planCat = getApartmentCategory(cat);
    if (!planCat) return;
    setCategory(cat);
    if (type && planCat.variants.some((v) => v.type === type)) {
      setSelectedType(type);
    } else if (planCat.variants.length === 1) {
      setSelectedType(1);
    } else {
      setSelectedType(null);
    }
  }, []);

  useEffect(() => {
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [applyHash]);

  const activeCategory = category ? getApartmentCategory(category) : null;
  const activeVariant = category && selectedType ? getPlanVariant(category, selectedType) : null;
  const activeAvailable =
    activeVariant && category ? isUnitAvailable(availability, category, activeVariant.type) : false;

  const countAvailable = (catId: ApartmentCategory) => {
    const cat = getApartmentCategory(catId);
    if (!cat) return 0;
    return cat.variants.filter((v) => isUnitAvailable(availability, catId, v.type)).length;
  };

  const selectCategory = (id: ApartmentCategory) => {
    setCategory(id);
    const planCat = getApartmentCategory(id);
    if (!planCat) return;
    if (planCat.variants.length === 1) {
      const onlyType = planCat.variants[0].type;
      if (isUnitAvailable(availability, id, onlyType)) {
        setSelectedType(onlyType);
        window.history.replaceState(null, "", `#${id}-${onlyType}`);
      } else {
        setSelectedType(null);
        window.history.replaceState(null, "", `#${id}`);
      }
    } else {
      setSelectedType(null);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const selectType = (type: number) => {
    if (!category) return;
    if (!isUnitAvailable(availability, category, type)) return;
    setSelectedType(type);
    window.history.replaceState(null, "", `#${category}-${type}`);
  };

  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-luxury">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              {t("plans.subtitle")}
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-3xl">
              {t("plans.title")}{" "}
              <span className="italic text-gradient-gold">{t("plans.titleAccent")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {t("plans.intro")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxury space-y-12">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                {t("plans.step1")}
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {apartmentPlanCategories.map((cat) => {
                  const availableCount = countAvailable(cat.id);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => selectCategory(cat.id)}
                      className={cn(
                        "group rounded-2xl border p-8 text-left transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-luxury)]",
                        category === cat.id
                          ? "border-gold bg-gold/10 shadow-[var(--shadow-gold)]"
                          : "border-border bg-card hover:border-gold/40",
                        availableCount === 0 && "opacity-60",
                      )}
                    >
                      <FileText
                        className={cn(
                          "h-8 w-8 mb-4 transition-colors",
                          category === cat.id
                            ? "text-gold"
                            : "text-muted-foreground group-hover:text-gold",
                        )}
                      />
                      <p className="font-display text-4xl text-gradient-gold">{cat.label}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {availableCount}{" "}
                        {availableCount === 1
                          ? t("plans.variantSingular")
                          : t("plans.variantPlural")}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {activeCategory && activeCategory.variants.length > 1 && (
            <Reveal>
              <div id={`${activeCategory.id}-types`} className="scroll-mt-32">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  {t("plans.step2")} — {activeCategory.label}
                </p>
                <div className="flex flex-wrap gap-3">
                  {activeCategory.variants.map((variant) => {
                    const available = isUnitAvailable(
                      availability,
                      activeCategory.id,
                      variant.type,
                    );

                    return (
                      <button
                        key={variant.type}
                        type="button"
                        disabled={!available}
                        onClick={() => selectType(variant.type)}
                        className={cn(
                          "rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] border transition-all",
                          !available &&
                            "opacity-50 cursor-not-allowed border-border bg-muted text-muted-foreground",
                          available &&
                            selectedType === variant.type &&
                            "bg-gold text-gold-foreground border-gold shadow-[var(--shadow-gold)]",
                          available &&
                            selectedType !== variant.type &&
                            "bg-card border-border hover:border-gold/50 text-foreground",
                        )}
                      >
                        {t("plans.type")} {variant.type}
                        {!available && (
                          <span className="ml-2 text-[10px] normal-case tracking-normal">
                            ({t("plans.unavailable")})
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          )}

          {activeVariant && activeAvailable && (
            <Reveal>
              <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-[var(--shadow-luxury)]">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                      {activeCategory?.label} — {t("plans.type")} {activeVariant.type}
                    </p>
                    <p className="mt-1 font-display text-2xl">{t("plans.viewerTitle")}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={activeVariant.pdf}
                      download
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      {t("common.download")}
                    </a>
                    <a
                      href={activeVariant.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-transform"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("plans.openNewTab")}
                    </a>
                  </div>
                </div>
                <div className="bg-muted/30 p-2 md:p-4">
                  <iframe
                    title={`${activeCategory?.label} ${t("plans.type")} ${activeVariant.type}`}
                    src={`${activeVariant.pdf}#view=FitH`}
                    className="w-full h-[70vh] min-h-[480px] rounded-xl border border-border bg-white"
                  />
                </div>
              </div>
            </Reveal>
          )}

          {activeVariant && !activeAvailable && (
            <Reveal>
              <div className="rounded-2xl border border-border bg-muted/40 px-6 py-10 text-center">
                <p className="font-display text-2xl text-muted-foreground">
                  {t("plans.unavailableMessage")}
                </p>
              </div>
            </Reveal>
          )}

          {category && !selectedType && activeCategory && activeCategory.variants.length > 1 && (
            <Reveal>
              <p className="text-center text-muted-foreground text-sm uppercase tracking-[0.18em]">
                {t("plans.selectTypeHint")}
              </p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
