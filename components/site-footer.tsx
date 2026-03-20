import Link from "next/link";

import { navItems, pagePaths, siteConfig } from "@/content/site";

import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo compact className="footer-logo" />
          <div>
            <h2 className="footer-brand-name">{siteConfig.name}</h2>
            <p className="footer-copy">
              Decision traceability for AI-assisted and exception-heavy
              financial workflows.
            </p>
          </div>
        </div>

        <div className="footer-column">
          <span className="footer-label">Pages</span>
          <div className="footer-links">
            <Link href="/">Home</Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/request-demo">Request Demo</Link>
          </div>
        </div>

        <div className="footer-column">
          <span className="footer-label">Contact</span>
          <div className="footer-links">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>{siteConfig.socialLabel}</span>
          </div>
        </div>

        <div className="footer-column">
          <span className="footer-label">Discoverability</span>
          <div className="footer-links">
            {pagePaths.map((path) => (
              <Link key={path} href={path}>
                {path === "/" ? "Root URL" : path.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="shell footer-meta">
        <span>© {new Date().getFullYear()} Provenance</span>
        <div className="footer-legal">
          <a href={`mailto:${siteConfig.email}`}>Email</a>
          <span>Privacy placeholder</span>
          <span>Terms placeholder</span>
        </div>
      </div>
    </footer>
  );
}
