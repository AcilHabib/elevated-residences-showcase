export type ResidenceBlockHotspot = {
  id: string;
  href: string;
  /** Polygon vertices as [x%, y%] — traced from the annotated block outline map */
  polygon: [number, number][];
};

/** Hotspots traced from the annotated block map, calibrated for the clean original (1024×682) */
export const RESIDENCE_BLOCK_HOTSPOTS: ResidenceBlockHotspot[] = [
  {
    id: "A",
    href: "/plans",
    polygon: [
      [61.7, 48.8],
      [60.6, 51.4],
      [61.1, 61.4],
      [59.5, 77.3],
      [60.6, 93.1],
      [67.5, 92.6],
      [76.8, 95.6],
      [82.8, 94.5],
      [83.7, 71.5],
      [81.6, 55.9],
      [78.9, 50.0],
    ],
  },
  {
    id: "B",
    href: "/plans",
    polygon: [
      [41.3, 48.0],
      [41.2, 54.8],
      [39.2, 58.7],
      [40.4, 60.7],
      [38.2, 61.3],
      [38.2, 73.9],
      [36.2, 82.3],
      [35.8, 92.1],
      [56.0, 93.4],
      [57.2, 72.4],
      [58.1, 72.2],
      [56.6, 61.2],
      [56.9, 50.3],
      [50.0, 48.8],
      [48.6, 50.6],
      [48.3, 48.5],
      [45.2, 48.2],
      [43.7, 53.1],
      [42.1, 53.5],
      [44.1, 48.0],
    ],
  },
  {
    id: "C",
    href: "/plans",
    polygon: [
      [17.3, 46.5],
      [13.9, 57.2],
      [11.7, 79.4],
      [9.1, 91.3],
      [30.0, 97.6],
      [34.7, 79.4],
      [34.5, 69.4],
      [36.3, 57.6],
      [35.1, 60.1],
      [33.7, 57.9],
      [37.2, 48.4],
      [31.9, 48.0],
      [29.7, 50.1],
      [27.8, 47.1],
      [22.8, 52.5],
      [22.9, 50.1],
      [26.0, 47.2],
    ],
  },
  {
    id: "D",
    href: "/plans",
    polygon: [
      [48.6, 26.4],
      [47.9, 30.7],
      [50.3, 31.7],
      [50.4, 33.4],
      [48.9, 34.5],
      [48.8, 33.0],
      [47.4, 32.9],
      [45.5, 42.7],
      [45.9, 45.6],
      [58.6, 46.4],
      [59.3, 42.1],
      [58.5, 27.7],
    ],
  },
  {
    id: "E",
    href: "/plans",
    polygon: [
      [45.3, 26.1],
      [41.1, 25.1],
      [37.6, 29.7],
      [37.8, 32.3],
      [36.7, 32.9],
      [34.9, 38.6],
      [34.9, 45.1],
      [38.3, 46.1],
      [38.8, 45.5],
      [44.0, 45.6],
      [44.3, 40.1],
      [45.2, 36.2],
    ],
  },
  {
    id: "F",
    href: "/plans",
    polygon: [
      [36.7, 23.9],
      [28.3, 22.4],
      [24.1, 23.6],
      [22.7, 29.0],
      [21.3, 44.7],
      [33.0, 44.0],
      [32.6, 32.3],
      [35.9, 28.7],
    ],
  },
];

/** Draw back blocks first so foreground blocks stay easy to click */
export const RESIDENCE_BLOCK_RENDER_ORDER = ["D", "E", "F", "C", "B", "A"] as const;

export const RESIDENCE_BLOCKS_MAP_SRC = "/images/residence-blocks-map.png";
export const RESIDENCE_BLOCKS_MAP_ASPECT = 1024 / 682;

export function polygonPoints(points: [number, number][]) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

export function polygonCentroid(points: [number, number][]) {
  const x = points.reduce((sum, [px]) => sum + px, 0) / points.length;
  const y = points.reduce((sum, [, py]) => sum + py, 0) / points.length;
  return { x, y };
}

export function polygonBounds(points: [number, number][]) {
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const left = Math.min(...xs);
  const top = Math.min(...ys);
  const right = Math.max(...xs);
  const bottom = Math.max(...ys);

  return { x: left, y: top, width: right - left, height: bottom - top };
}
