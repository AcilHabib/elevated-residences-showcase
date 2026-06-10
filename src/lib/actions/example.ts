"use server";

import { z } from "zod";

import { getServerConfig } from "@/lib/config.server";

const greetingSchema = z.object({ name: z.string().min(1) });

// Example Server Action — replace with real mutations when adding a backend.
// const result = await getGreeting({ name: "Ada" });

export async function getGreeting(input: { name: string }) {
  const data = greetingSchema.parse(input);
  const config = getServerConfig();

  return {
    greeting: `Hello, ${data.name}!`,
    mode: config.nodeEnv ?? "unknown",
  };
}
