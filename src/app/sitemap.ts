import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/residence", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/plans", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/commercial", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/location", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return entries.map((entry) => ({
    url: `${siteUrl}${entry.path}`,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
