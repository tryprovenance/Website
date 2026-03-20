"use client";

import { SpecialText } from "@/components/ui/special-text";
import { HeroBackgroundPaths } from "@/components/ui/background-paths";

export function Hero() {
  return (
    <header className="hero" id="hero">
      <HeroBackgroundPaths />
      <div className="hero__inner hero__split">
        <div className="hero__left">
          <p className="hero__eyebrow">
            Decision Traceability for Financial Services
          </p>
          <h1 className="hero__headline" id="hero-title">
            <SpecialText
              text="Every financial decision. Structured, traceable, audit-ready."
              speed={22}
              delay={600}
              className="hero__scramble"
            />
          </h1>
          <p className="hero__sub">
            Provenance builds structured decision records from your existing
            audit data and captures new reasoning as decisions happen. Every
            trace is source-linked, reviewable, and mapped to your compliance
            obligations.
          </p>
          <div className="hero__actions">
            <a href="https://forms.gle/HZ69m91DXsJJdPkM6" target="_blank" rel="noopener noreferrer" className="btn magnetic" data-hover>
              Request Demo
            </a>
            <a href="#how-it-works" className="btn btn--secondary magnetic" data-hover>
              See How It Works
            </a>
          </div>
        </div>
        <div className="hero__right">
          <div className="dossier-mock">
            <div className="dossier-mock__header">
              <div className="dossier-mock__id">
                <span className="dossier-mock__badge">CASE-2024-0847</span>
                <span className="dossier-mock__type">Risk Limit Override</span>
              </div>
              <span className="dossier-mock__status">Reviewed</span>
            </div>

            <div className="dossier-mock__section">
              <span className="dossier-mock__label dossier-mock__label--t">T</span>
              <div>
                <span className="dossier-mock__field-label">Trigger</span>
                <p>Trader requested 2x position limit increase on macro desk ahead of FOMC announcement.</p>
              </div>
            </div>

            <div className="dossier-mock__section">
              <span className="dossier-mock__label dossier-mock__label--e">E</span>
              <div>
                <span className="dossier-mock__field-label">Evidence</span>
                <p>Portfolio exposure report, VaR analysis, 3 prior similar approvals in Q3.</p>
                <div className="dossier-mock__sources">
                  <span>Risk system log</span>
                  <span>Policy DB v3.2</span>
                  <span>Bloomberg export</span>
                </div>
              </div>
            </div>

            <div className="dossier-mock__section">
              <span className="dossier-mock__label dossier-mock__label--l">L</span>
              <div>
                <span className="dossier-mock__field-label">
                  Logic
                  <span className="dossier-mock__inferred">Inferred</span>
                </span>
                <p>Strong track record, supportive conditions, consistent with three similar approvals last quarter.</p>
              </div>
            </div>

            <div className="dossier-mock__section">
              <span className="dossier-mock__label dossier-mock__label--o">O</span>
              <div>
                <span className="dossier-mock__field-label">Outcome</span>
                <p>Override approved. Position held 72 hrs, $340K gain, closed within risk parameters.</p>
              </div>
            </div>

            <div className="dossier-mock__footer">
              <div className="dossier-mock__meta">
                <span className="dossier-mock__confidence">Evidence completeness: 84%</span>
                <span className="dossier-mock__reviewer">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#3d8c5c" strokeWidth="1.5"/>
                    <path d="M4.5 7l1.5 1.5 3-3" stroke="#3d8c5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Reviewed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
