import { NextResponse } from "next/server";

import { setAdminSession, verifyAdminPassword } from "@/lib/admin-auth.server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    if (!password || typeof password !== "string") {
      return NextResponse.json({ error: "Password required" }, { status: 400 });
    }

    if (!verifyAdminPassword(password)) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    await setAdminSession();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin login]", error);
    const message =
      error instanceof Error && error.message.includes("ADMIN_PASSWORD")
        ? "Admin password is not configured on the server."
        : "Login failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
