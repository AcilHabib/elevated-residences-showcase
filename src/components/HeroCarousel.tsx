"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { SimulationImage } from "@/lib/simulations";

type HeroCarouselProps = {
  images: SimulationImage[];
  className?: string;
  autoplayMs?: number;
};

export function HeroCarousel({ images, className, autoplayMs = 5500 }: HeroCarouselProps) {
  const { t } = useI18n();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 35 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || autoplayMs <= 0) return;
    const interval = setInterval(() => emblaApi.scrollNext(), autoplayMs);
    return () => clearInterval(interval);
  }, [emblaApi, autoplayMs]);

  return (
    <div className={cn("absolute inset-0", className)}>
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {images.map((image, index) => (
            <div key={image.src} className="relative min-w-0 shrink-0 grow-0 basis-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className={cn(
                  "h-full w-full object-cover",
                  index === selectedIndex && "animate-slow-zoom",
                )}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        aria-label={t("gallery.prev")}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 glass rounded-full p-2.5 text-foreground/90 hover:text-primary transition-colors hidden md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label={t("gallery.next")}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 glass rounded-full p-2.5 text-foreground/90 hover:text-primary transition-colors hidden md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-36 inset-x-0 z-20 flex justify-center gap-2 px-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`${t("gallery.show")} ${image.title ?? image.alt}`}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === selectedIndex
                ? "w-8 bg-[var(--gold)]"
                : "w-1.5 bg-foreground/40 hover:bg-foreground/70",
            )}
          />
        ))}
      </div>
    </div>
  );
}
