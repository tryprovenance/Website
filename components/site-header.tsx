"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems, siteConfig } from "@/content/site";

import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header-wrap">
      <div className="site-header shell">
        <Link
          href="/"
          className="brand-mark"
          onClick={() => setMenuOpen(false)}
          aria-label={`${siteConfig.name} home`}
        >
          <Logo className="brand-logo" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive ? " nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link href="/request-demo" className="button button-primary header-cta">
            <span>{siteConfig.ctaLabel}</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav-panel${menuOpen ? " mobile-nav-open" : ""}`}>
        <nav className="mobile-nav shell" aria-label="Mobile">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link${isActive ? " mobile-nav-link-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/request-demo"
            className="button button-secondary mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            <span>{siteConfig.ctaLabel}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
