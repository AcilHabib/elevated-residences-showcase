"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { SimulationImage } from "@/lib/simulations";

type SimulationsGalleryProps = {
  images: SimulationImage[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  className?: string;
};

export function SimulationsGallery({
  images,
  title = "Galerie du projet",
  subtitle = "Simulations 3D officielles",
  columns = 3,
  className,
}: SimulationsGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <section className={cn("py-20", className)}>
      <div className="container-luxury">
        <Reveal>
          <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            {subtitle}
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">{title}</h2>
        </Reveal>

        <div className={cn("mt-12 grid gap-4", gridCols)}>
          {images.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.04}>
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-luxury)] text-left"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {image.title && (
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                      {image.title}
                    </p>
                  </div>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer"
            className="absolute top-6 right-6 glass rounded-full p-2.5 z-10"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showPrev}
            aria-label="Image précédente"
            className="absolute left-4 md:left-8 glass rounded-full p-3 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Image suivante"
            className="absolute right-4 md:right-8 glass rounded-full p-3 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            {images[lightboxIndex].title && (
              <p className="mt-4 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {images[lightboxIndex].title}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
