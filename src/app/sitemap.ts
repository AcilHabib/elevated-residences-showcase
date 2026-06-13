import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const entries = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/residence", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/plans", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/commercial", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/location", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return entries.map((entry) => ({
    url: `${siteUrl}${entry.path}`,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
