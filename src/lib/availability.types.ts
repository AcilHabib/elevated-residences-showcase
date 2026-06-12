import type { ApartmentCategory } from "@/lib/apartment-plans";

export type UnitAvailabilityRecord = {
  category: ApartmentCategory;
  type: number;
  available: boolean;
  updatedAt: string;
};

export type AvailabilityMap = Record<ApartmentCategory, Record<number, boolean>>;

export function buildAvailabilityMap(records: UnitAvailabilityRecord[]): AvailabilityMap {
  const map: AvailabilityMap = { f2: {}, f3: {}, f4: {} };
  for (const record of records) {
    map[record.category][record.type] = record.available;
  }
  return map;
}

export function isUnitAvailable(
  map: AvailabilityMap | undefined,
  category: ApartmentCategory,
  type: number,
): boolean {
  if (!map) return true;
  return map[category]?.[type] ?? true;
}
