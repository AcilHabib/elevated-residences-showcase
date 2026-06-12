import { NextResponse } from "next/server";

import type { ApartmentCategory } from "@/lib/apartment-plans";
import { apartmentPlanCategories } from "@/lib/apartment-plans";
import { getAllAvailability, updateAvailability } from "@/lib/availability.server";
import { isAdminAuthenticated } from "@/lib/admin-auth.server";

export async function GET() {
  try {
    const records = await getAllAvailability();
    return NextResponse.json(records);
  } catch (error) {
    console.error("[availability GET]", error);
    return NextResponse.json({ error: "Failed to load availability" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const authed = await isAdminAuthenticated();
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const category = body.category as ApartmentCategory;
    const type = Number(body.type);
    const available = Boolean(body.available);

    if (!["f2", "f3", "f4"].includes(category) || !Number.isFinite(type)) {
      return NextResponse.json({ error: "Invalid category or type" }, { status: 400 });
    }

    const planCat = apartmentPlanCategories.find((c) => c.id === category);
    if (!planCat?.variants.some((v) => v.type === type)) {
      return NextResponse.json({ error: "Unknown unit variant" }, { status: 400 });
    }

    const record = await updateAvailability(category, type, available);
    return NextResponse.json(record);
  } catch (error) {
    console.error("[availability PATCH]", error);
    return NextResponse.json({ error: "Failed to update availability" }, { status: 500 });
  }
}
