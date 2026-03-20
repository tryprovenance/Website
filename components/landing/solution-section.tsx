const modes = [
  {
    num: "I",
    title: "Decision Archaeology",
    dir: "Looking backward",
    body: "Connect to audit trails and data exports you already have. Provenance clusters related events into decision episodes and generates structured dossiers with source-linked evidence and confidence scoring.",
    bullets: [
      "Risk system logs, compliance records, approval chains",
      "Confidence scoring on every reconstructed trace",
      "Human-in-the-loop validation",
    ],
    foot: "Value on Day 1 \u2014 no process changes required.",
  },
  {
    num: "II",
    title: "Decision Capture",
    dir: "Looking forward",
    body: "Deploy real-time reasoning capture with minimal friction \u2014 under 10 seconds per decision.",
    bullets: [
      "Automated \u2014 listens to API events, records context",
      "Quick-tag \u2014 lightweight reasoning category selection",
      "Voice-note \u2014 15\u201330s audio, auto-transcribed",
    ],
    foot: "Every trace is structured, timestamped, and linked to source evidence.",
  },
];

export function SolutionSection() {
  return (
    <section className="section section--alt" id="solution">
      <div className="container">
        <div className="section-header">
          <span className="section-num">02</span>
          <span className="section-label">The Solution</span>
        </div>

        <h2 className="large-text reveal" style={{ maxWidth: 700 }}>
          One platform.
          <br />
          Two directions.
        </h2>

        <div className="modes">
          {modes.map((m) => (
            <div key={m.num} className="mode reveal" data-hover>
              <div className="mode__top">
                <span className="mode__num">{m.num}</span>
                <h3 className="mode__title">{m.title}</h3>
                <p className="mode__dir">{m.dir}</p>
              </div>
              <div className="mode__body">
                <p>{m.body}</p>
                <ul>
                  {m.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="mode__foot">{m.foot}</div>
            </div>
          ))}
        </div>

        <p className="solution-graph-note reveal">
          Every dossier compounds into a decision graph &mdash; a structured
          context layer that makes future reviews faster, precedent queryable,
          and AI-assisted workflows auditable.
        </p>
      </div>
    </section>
  );
}
