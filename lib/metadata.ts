import type { Metadata } from "next";

import { buildPageTitle, metadataContent, siteConfig } from "@/content/site";

type PageKey = keyof typeof metadataContent;

export function createPageMetadata(key: PageKey, path: string): Metadata {
  const entry = metadataContent[key];
  const url = path === "/" ? siteConfig.baseUrl : `${siteConfig.baseUrl}${path}`;

  return {
    title: buildPageTitle(entry.title),
    description: entry.description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: buildPageTitle(entry.title),
      description: entry.description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.baseUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} website preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: buildPageTitle(entry.title),
      description: entry.description,
      images: [`${siteConfig.baseUrl}/opengraph-image`]
    }
  };
}
