"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";
import { PROMO_VIDEO_POSTER, PROMO_VIDEO_SRC } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PromoVideoSection() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
    setIsPlaying(true);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-radial)] pointer-events-none" />
      <div className="container-luxury relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="max-w-xl">
              <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                {t("video.subtitle")}
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
                {t("video.title")}{" "}
                <span className="italic text-gradient-gold">{t("video.titleAccent")}</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                {t("video.desc")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[min(100%,340px)] lg:ml-auto lg:mr-0">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gold/10 blur-3xl opacity-60" />
              <div className="relative rounded-[2rem] border border-border bg-card/80 p-2.5 shadow-[var(--shadow-luxury)] backdrop-blur-sm">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.35rem] bg-black">
                  <video
                    ref={videoRef}
                    className={cn(
                      "h-full w-full object-cover",
                      "contrast-[1.07] saturate-[1.12] brightness-[1.04]",
                      "[image-rendering:auto]",
                    )}
                    src={PROMO_VIDEO_SRC}
                    poster={PROMO_VIDEO_POSTER}
                    controls={isPlaying}
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15"
                    aria-hidden
                  />
                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={handlePlay}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25 transition-colors hover:bg-black/35"
                      aria-label={t("video.play")}
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105">
                        <Play className="h-7 w-7 ml-1" fill="currentColor" />
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-white/90 font-semibold">
                        {t("video.play")}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
