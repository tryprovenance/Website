import type { Metadata } from "next";

import { LandingFooter, LandingNav } from "@/components/landing";
import { RequestDemoForm } from "@/components/request-demo-form";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `Request Demo | ${siteConfig.name}`,
  description:
    "Talk to the founder, discuss pilot workflows, and see how Provenance can structure evidence and reasoning into reviewable decision dossiers.",
};

export default function RequestDemoPage() {
  return (
    <>
      <LandingNav />
      <section className="demo-page">
        <div className="container">
          <div className="demo-page__inner">
            <div className="demo-page__header">
              <h1 className="demo-page__title">
                See Provenance on your workflow.
              </h1>
              <p className="demo-page__desc">
                Request a walkthrough or talk to the founder about pilots,
                design partnerships, and early use cases.
              </p>
            </div>
            <RequestDemoForm />
            <div className="demo-contact">
              <p>
                Or reach out directly at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <LandingFooter />
    </>
  );
}
