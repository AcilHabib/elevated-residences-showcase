export const COMMERCIAL_SPACES = [
  { type: "F2", spaces: [49.75, 56.23, 67.89, 68.02] },
  { type: "F3", spaces: [80.08, 84.36, 87.18, 89.72, 90.35, 97.37] },
  { type: "F4", spaces: [170.9] },
] as const;

export function formatCommercialSpace(m2: number) {
  return `${m2.toFixed(2)} m²`;
}
