import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "pba_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getAdminPassword(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("ADMIN_PASSWORD is not set in environment variables.");
  }
  return password;
}

function signToken(payload: string): string {
  return createHmac("sha256", getAdminPassword()).update(payload).digest("hex");
}

function createSessionToken(): string {
  const expiresAt = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = `admin:${expiresAt}`;
  const signature = signToken(payload);
  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

function verifySessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const lastColon = decoded.lastIndexOf(":");
    if (lastColon === -1) return false;

    const payload = decoded.slice(0, lastColon);
    const signature = decoded.slice(lastColon + 1);
    const expected = signToken(payload);

    const sigBuf = Buffer.from(signature, "hex");
    const expBuf = Buffer.from(expected, "hex");
    if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) {
      return false;
    }

    const [, expiresAtStr] = payload.split(":");
    const expiresAt = Number(expiresAtStr);
    return Number.isFinite(expiresAt) && Date.now() < expiresAt;
  } catch {
    return false;
  }
}

export function verifyAdminPassword(password: string): boolean {
  const expected = getAdminPassword();
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function setAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}
