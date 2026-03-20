import type { MetadataRoute } from "next";

import { pagePaths, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pagePaths.map((path) => ({
    url: path === "/" ? siteConfig.baseUrl : `${siteConfig.baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.78
  }));
}
