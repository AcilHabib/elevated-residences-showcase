"use client";

import { useI18n } from "@/lib/i18n";
import {
  polygonBounds,
  polygonCentroid,
  RESIDENCE_BLOCK_HOTSPOTS,
  RESIDENCE_BLOCK_RENDER_ORDER,
  RESIDENCE_BLOCKS_MAP_ASPECT,
  RESIDENCE_BLOCKS_MAP_SRC,
} from "@/lib/residence-blocks";

export function ResidenceBlockMap() {
  const { t } = useI18n();
  const blocksById = Object.fromEntries(RESIDENCE_BLOCK_HOTSPOTS.map((block) => [block.id, block]));

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl shadow-[var(--shadow-luxury)] bg-muted/20"
      style={{ aspectRatio: RESIDENCE_BLOCKS_MAP_ASPECT }}
    >
      <img
        src={RESIDENCE_BLOCKS_MAP_SRC}
        alt={t("residence.mapAlt")}
        className="absolute inset-0 h-full w-full object-contain select-none"
        draggable={false}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-label={t("residence.mapAlt")}
      >
        {RESIDENCE_BLOCK_RENDER_ORDER.map((id, i) => {
          const block = blocksById[id];
          if (!block) return null;
          const bounds = polygonBounds(block.polygon);
          const center = polygonCentroid(block.polygon);

          return (
            <a
              key={block.id}
              href={block.href}
              className="block-map-hotspot group"
              aria-label={`${t("common.block")} ${block.id} — ${t("common.viewPlans")}`}
            >
              <rect
                x={bounds.x}
                y={bounds.y}
                width={bounds.width}
                height={bounds.height}
                className="block-map-shape"
                style={{ animation: `scale-in 0.6s var(--ease-luxury) ${i * 0.08}s both` }}
              />
              <text
                x={center.x}
                y={center.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="block-map-label pointer-events-none select-none"
              >
                {block.id}
              </text>
              <title>
                {t("common.block")} {block.id} — {t("common.viewPlans")}
              </title>
            </a>
          );
        })}
      </svg>

      <p className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-background/85 px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
        {t("residence.mapHint")}
      </p>
    </div>
  );
}
