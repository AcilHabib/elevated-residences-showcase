import "server-only";

import type { ApartmentCategory } from "@/lib/apartment-plans";
import { apartmentPlanCategories } from "@/lib/apartment-plans";
import type { UnitAvailabilityRecord } from "@/lib/availability.types";
import { getDb } from "@/lib/mongodb";

const COLLECTION = "unit_availability";

type DbRecord = {
  category: ApartmentCategory;
  type: number;
  available: boolean;
  updatedAt: Date;
};

function toRecord(doc: DbRecord): UnitAvailabilityRecord {
  return {
    category: doc.category,
    type: doc.type,
    available: doc.available,
    updatedAt: doc.updatedAt.toISOString(),
  };
}

function defaultSeedDocs(): DbRecord[] {
  const now = new Date();
  const docs: DbRecord[] = [];

  for (const cat of apartmentPlanCategories) {
    for (const variant of cat.variants) {
      docs.push({
        category: cat.id,
        type: variant.type,
        available: true,
        updatedAt: now,
      });
    }
  }

  return docs;
}

async function ensureIndexes() {
  const db = await getDb();
  await db.collection(COLLECTION).createIndex({ category: 1, type: 1 }, { unique: true });
}

export async function ensureAvailabilitySeeded(): Promise<void> {
  const db = await getDb();
  const collection = db.collection<DbRecord>(COLLECTION);
  await ensureIndexes();

  const count = await collection.countDocuments();
  if (count > 0) return;

  await collection.insertMany(defaultSeedDocs());
}

export async function getAllAvailability(): Promise<UnitAvailabilityRecord[]> {
  await ensureAvailabilitySeeded();
  const db = await getDb();
  const docs = await db
    .collection<DbRecord>(COLLECTION)
    .find()
    .sort({ category: 1, type: 1 })
    .toArray();

  return docs.map(toRecord);
}

export async function updateAvailability(
  category: ApartmentCategory,
  type: number,
  available: boolean,
): Promise<UnitAvailabilityRecord> {
  await ensureAvailabilitySeeded();
  const db = await getDb();
  const now = new Date();

  const result = await db
    .collection<DbRecord>(COLLECTION)
    .findOneAndUpdate(
      { category, type },
      { $set: { available, updatedAt: now } },
      { returnDocument: "after" },
    );

  if (!result) {
    throw new Error(`Unit not found: ${category} type ${type}`);
  }

  return toRecord(result);
}
