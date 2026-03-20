"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-now", label: "Why Now" },
];

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`} id="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo">
          Provenance
        </Link>
        <div className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} data-hover>
              {l.label}
            </a>
          ))}
        </div>
        <a href="https://forms.gle/HZ69m91DXsJJdPkM6" target="_blank" rel="noopener noreferrer" className="nav__cta magnetic" data-hover>
          Request Demo
        </a>
        <button
          ref={toggleRef}
          className={`nav__toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`nav__mobile${menuOpen ? " open" : ""}`} id="nav-mobile">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="https://forms.gle/HZ69m91DXsJJdPkM6" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
          Request Demo
        </a>
      </div>
    </nav>
  );
}
