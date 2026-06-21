import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://juliabusigina.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/price`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...projectPages,
  ];
}
