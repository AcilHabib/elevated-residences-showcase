import { useMemo } from "react";

import { useI18n } from "./i18n";

export type SimulationImage = {
  src: string;
  alt: string;
  title?: string;
};

const simulationSources = [
  "/images/simulations/01.jpg",
  "/images/simulations/02.jpg",
  "/images/simulations/03.jpg",
  "/images/simulations/04.jpg",
  "/images/simulations/05.jpg",
  "/images/simulations/06.jpg",
  "/images/simulations/07.jpg",
  "/images/simulations/08.jpg",
  "/images/simulations/09.jpg",
  "/images/simulations/10.jpg",
  "/images/simulations/11.jpg",
  "/images/simulations/12.jpg",
  "/images/simulations/13.jpg",
  "/images/simulations/14.jpg",
];

export function useSimulationImages(indices?: number[]): SimulationImage[] {
  const { t } = useI18n();

  return useMemo(() => {
    const list = indices ?? simulationSources.map((_, i) => i);
    return list.map((i) => ({
      src: simulationSources[i],
      alt: t(`sim.${i}.alt`),
      title: t(`sim.${i}.title`),
    }));
  }, [t, indices]);
}

/** @deprecated Use useSimulationImages() for translated labels */
export const simulationImages: SimulationImage[] = simulationSources.map((src, i) => ({
  src,
  alt: `sim.${i}.alt`,
  title: `sim.${i}.title`,
}));

export function useResidenceGallery(): SimulationImage[] {
  return useSimulationImages([0, 2, 3, 6, 7, 8, 12]);
}

export function useLocationGallery(): SimulationImage[] {
  return useSimulationImages([3, 4, 8, 11, 13]);
}

/** @deprecated Use useResidenceGallery() */
export const residenceGallery = simulationImages.filter((_, i) =>
  [0, 2, 3, 6, 7, 8, 12].includes(i),
);

/** @deprecated Use useLocationGallery() */
export const locationGallery = simulationImages.filter((_, i) => [3, 4, 8, 11, 13].includes(i));
