import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";

import { siteConfig } from "@/content/site";

import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const metadataBase = new URL(siteConfig.baseUrl);

export const metadata: Metadata = {
  metadataBase,
  applicationName: siteConfig.name,
  title: siteConfig.name,
  description: siteConfig.shortDescription,
  keywords: [
    "decision traceability",
    "financial workflows",
    "AI governance",
    "exception review",
    "audit-ready dossiers",
    "compliance operations",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.statement,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: `${siteConfig.baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} website preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.shortDescription,
    images: [`${siteConfig.baseUrl}/opengraph-image`],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  email: siteConfig.email,
  description: siteConfig.statement,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  description: siteConfig.shortDescription,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakarta.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </body>
    </html>
  );
}
