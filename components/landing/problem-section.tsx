const whereCards = [
  {
    label: "People's Heads",
    body: "Institutional knowledge walks out the door when employees leave. No system captures what they knew.",
  },
  {
    label: "Slack & Email",
    body: "Compliance reasoning buried in six-month-old threads, disconnected from any decision record.",
  },
  {
    label: "Meeting Notes",
    body: "Risk committee minutes with critical context sit in shared drives nobody searches.",
  },
];

export function ProblemSection() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section-header">
          <span className="section-num">01</span>
          <span className="section-label">The Problem</span>
        </div>

        <div className="problem-hero reveal">
          <h2 className="large-text">
            Financial systems record <em>what</em> was decided. Never{" "}
            <em>why.</em>
          </h2>
        </div>

        <div className="problem-body">
          <div className="problem-left reveal">
            <p className="body-lg">
              When a risk manager approves a limit override, the system logs{" "}
              <strong>&ldquo;Approved.&rdquo;</strong> When a compliance
              officer grants an exception &mdash;{" "}
              <strong>&ldquo;Exception granted.&rdquo;</strong>
            </p>
            <p className="body-lg">
              The reasoning &mdash; what was considered, who was consulted,
              what trade-offs were weighed &mdash; is systematically
              discarded.
            </p>
          </div>
          <div className="problem-right">
            {whereCards.map((card) => (
              <div key={card.label} className="where-card reveal">
                <span className="where-card__label">{card.label}</span>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="problem-callout reveal">
          <p>
            When an examiner asks &ldquo;why was this decision made?&rdquo;
            most firms spend weeks manually reconstructing the answer from
            scattered systems.
          </p>
        </div>

        <div className="problem-escalation">
          <div className="problem-escalation__body">
            <div className="problem-escalation__left reveal">
              <span className="where-card__label">What&rsquo;s Coming</span>
              <h3 className="problem-escalation__heading">
                Now add AI agents to the mix.
              </h3>
              <p className="body-lg">
                Firms are adopting AI agents for risk assessment, trading
                surveillance, and compliance monitoring. FINRA&rsquo;s 2026
                report now requires governance frameworks for AI-assisted
                decisions. The SEC&rsquo;s examination priorities say the same
                thing: if AI contributed to a decision, you need to explain how
                and why.
              </p>
              <p className="body-lg">
                When a human makes an undocumented decision, you can pull them
                into a room and ask what they were thinking. When an AI agent
                makes one, there is nothing to reconstruct. No Slack thread. No
                memory. No institutional knowledge. Just an output with no
                reasoning trail.
              </p>
            </div>
            <div className="problem-escalation__right">
              <div className="where-card reveal">
                <span className="where-card__label">
                  The Regulatory Shift
                </span>
                <p>
                  FINRA&rsquo;s 2026 Regulatory Oversight Report includes
                  dedicated AI governance guidance for the first time. Firms
                  using AI in decision-making must demonstrate explainability,
                  supervision, and auditability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="problem-callout reveal">
          <p>
            The missing reasoning problem costs firms millions today. AI
            adoption is about to make it the defining compliance challenge of
            the next decade.
          </p>
        </div>
      </div>
    </section>
  );
}
