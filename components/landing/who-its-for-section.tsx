const workflows = [
  {
    title: "Risk limit overrides",
    body: "When a trader exceeds a position threshold and a risk manager approves it, Provenance captures the full reasoning chain.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Compliance exception reviews",
    body: "When a compliance officer grants an exception to a trading restriction, the evidence and judgment are preserved.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      </svg>
    ),
  },
  {
    title: "Surveillance case closures",
    body: "When an alert is investigated and closed, the triage reasoning becomes a searchable, reviewable record.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
];

export function WhoItsForSection() {
  return (
    <section className="section" id="who-its-for">
      <div className="container">
        <div className="section-header">
          <span className="section-num">03</span>
          <span className="section-label">Who It&rsquo;s For</span>
        </div>

        <h2 className="large-text reveal" style={{ maxWidth: 700 }}>
          Built for exception-heavy financial workflows.
        </h2>

        <div className="workflows">
          {workflows.map((w) => (
            <div key={w.title} className="workflow-card reveal">
              <div className="workflow-card__icon">{w.icon}</div>
              <h3 className="workflow-card__title">{w.title}</h3>
              <p className="workflow-card__body">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
