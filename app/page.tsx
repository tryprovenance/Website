import type { Metadata } from "next";

import {
  CtaSection,
  Hero,
  HowItWorksSection,
  LandingFooter,
  LandingNav,
  MotionProvider,
  ProblemSection,
  SolutionSection,
  WhoItsForSection,
  WhyNowSection,
} from "@/components/landing";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Audit-Ready Decision Traceability`,
  description: siteConfig.shortDescription,
};

export default function HomePage() {
  return (
    <MotionProvider>
      <div className="progress" id="progress" />

      <LandingNav />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhoItsForSection />
      <HowItWorksSection />
      <WhyNowSection />
      <CtaSection />
      <LandingFooter />
    </MotionProvider>
  );
}
