const steps = [
  {
    letter: "T",
    label: "Trigger",
    title: "What initiated the decision",
    body: "A trader requests a position limit increase above the standard threshold.",
    sources: null,
    inferred: false,
  },
  {
    letter: "E",
    label: "Evidence",
    title: "What information was consulted",
    body: "Portfolio exposure, market volatility, historical performance, relevant policy documents.",
    sources: ["Risk system log", "Policy DB v3.2", "Bloomberg terminal export"],
    inferred: false,
  },
  {
    letter: "L",
    label: "Logic",
    title: "The reasoning connecting evidence to outcome",
    body: "Strong track record, supportive market conditions, consistent with three similar approvals last quarter.",
    sources: null,
    inferred: true,
  },
  {
    letter: "O",
    label: "Outcome",
    title: "What was decided and what happened next",
    body: "Override approved. Position held 72 hours, $340K gain, closed within risk parameters.",
    sources: null,
    inferred: false,
  },
];

export function HowItWorksSection() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-num">04</span>
          <span className="section-label">How It Works</span>
        </div>

        <h2 className="large-text reveal" style={{ maxWidth: 680 }}>
          What Provenance produces: the decision dossier.
        </h2>

        <div className="trace">
          <div className="trace__progress" id="trace-progress" />
          {steps.map((s) => (
            <div key={s.letter} className="trace__step reveal">
              <div className="trace__marker">
                <span>{s.letter}</span>
              </div>
              <div className="trace__content">
                <span className="trace__label">
                  {s.label}
                  {s.inferred && (
                    <span className="trace__inferred-badge">Inferred</span>
                  )}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                {s.sources && (
                  <div className="trace__sources">
                    <span className="trace__sources-label">Sources:</span>
                    {s.sources.map((src) => (
                      <span key={src} className="trace__source-tag">{src}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="trace-note reveal">
          <p>
            Each dossier is tagged with applicable regulatory frameworks &mdash;{" "}
            <strong>FINRA, SEC, SOX, Reg BI, BSA/AML</strong> &mdash; and
            stored in a structured, audit-ready format.
          </p>
        </div>
      </div>
    </section>
  );
}
