export const APARTMENT_SURFACES = [
  {
    type: "F2",
    surfaces: [49.75, 56.23, 67.89, 68.02],
  },
  {
    type: "F3",
    surfaces: [68.45, 97.73, 84.36, 87.53, 80.08, 57.72, 90.35],
  },
  {
    type: "F4",
    surfaces: [170.85],
  },
] as const;

export const RETAIL_SPACES = [
  { id: "01", surface: 49.97 },
  { id: "02", surface: 27.3 },
  { id: "03", surface: 27.3 },
  { id: "04", surface: 32.54 },
  { id: "05", surface: 27.16 },
] as const;

export function formatSurface(m2: number) {
  return `${m2.toFixed(2)} m²`;
}

/** @deprecated Use APARTMENT_SURFACES and RETAIL_SPACES */
export const COMMERCIAL_SPACES = APARTMENT_SURFACES.map((cat) => ({
  type: cat.type,
  spaces: [...cat.surfaces],
}));

export function formatCommercialSpace(m2: number) {
  return formatSurface(m2);
}
