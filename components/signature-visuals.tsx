import { dossierFields, trustTags } from "@/content/site";

export function HeroComposite() {
  return (
    <div className="hero-visual panel">
      <TraceGraph />
      <DecisionDossier mode="hero" />
      <TimelineStitcher compact />
    </div>
  );
}

type DecisionDossierProps = {
  mode?: "hero" | "detail";
};

export function DecisionDossier({ mode = "detail" }: DecisionDossierProps) {
  return (
    <article className={`dossier-card dossier-${mode}`}>
      <header className="dossier-topline">
        <div>
          <span className="panel-label">Decision dossier</span>
          <h3>Cross-border payment review</h3>
        </div>
        <ReviewState />
      </header>

      <div className="dossier-grid">
        <div className="dossier-column">
          <DossierField
            label="Trigger"
            value="Manual review triggered by anomaly rule and AI exception classification."
          />
          <DossierField
            label="Observed evidence"
            value="Transaction history, analyst note, KYC profile, escalation ticket, policy version 3.4."
          />
          <DossierField
            label="Inferred reasoning"
            value="Pattern matched prior false-positive cases, but geographic mismatch kept the case in review."
          />
        </div>
        <div className="dossier-column">
          <DossierField
            label="Policy references"
            value="AML exception playbook, sanctions review checkpoint, model escalation guidance."
          />
          <DossierField
            label="Approval chain"
            value="Analyst draft, controls review, compliance signoff."
          />
          <DossierField
            label="Outcome"
            value="Approved with documented override and export-ready rationale."
          />
        </div>
      </div>

      {mode === "detail" ? (
        <footer className="dossier-footer">
          <div className="pill-row">
            {dossierFields.slice(0, 6).map((field) => (
              <span key={field} className="evidence-pill">
                {field}
              </span>
            ))}
          </div>
          <div className="dossier-metrics">
            <MetricBlock label="Confidence" value="0.82" />
            <MetricBlock label="Sources" value="12" />
            <MetricBlock label="Review state" value="Verified" />
          </div>
        </footer>
      ) : null}
    </article>
  );
}

type DossierFieldProps = {
  label: string;
  value: string;
};

function DossierField({ label, value }: DossierFieldProps) {
  return (
    <div className="dossier-field">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}

function ReviewState() {
  return (
    <div className="review-state">
      <span className="review-status review-status-live">Reviewed</span>
      <span className="review-status review-status-muted">Confidence 82%</span>
    </div>
  );
}

type TimelineStitcherProps = {
  compact?: boolean;
};

export function TimelineStitcher({ compact = false }: TimelineStitcherProps) {
  const events = [
    "Alert triggered",
    "Analyst note",
    "Policy fetched",
    "AI rationale",
    "Compliance review",
    "Export"
  ];

  return (
    <div className={`timeline-card${compact ? " timeline-compact" : ""}`}>
      <div className="timeline-header">
        <span className="panel-label">Timeline stitcher</span>
        <span className="timeline-key">Case duration 18m</span>
      </div>
      <div className="timeline-events">
        {events.map((event, index) => (
          <div key={event} className="timeline-event">
            <span className="timeline-index">{index + 1}</span>
            <div>
              <strong>{event}</strong>
              <p>Linked to dossier and source references.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TraceGraph() {
  const nodes = [
    { label: "Log", style: { top: "18%", left: "6%" } },
    { label: "Note", style: { top: "62%", left: "8%" } },
    { label: "Policy", style: { top: "16%", left: "74%" } },
    { label: "Review", style: { top: "62%", left: "72%" } },
    { label: "Model", style: { top: "38%", left: "18%" } },
    { label: "Export", style: { top: "78%", left: "52%" } }
  ];

  return (
    <div className="trace-graph">
      <span className="panel-label trace-label">Trace graph</span>
      <div className="trace-core">
        <span>Decision episode</span>
      </div>
      <div className="trace-lines">
        <span className="trace-line trace-line-horizontal" />
        <span className="trace-line trace-line-diagonal-a" />
        <span className="trace-line trace-line-diagonal-b" />
        <span className="trace-line trace-line-vertical" />
      </div>
      {nodes.map((node) => (
        <div key={node.label} className="trace-node" style={node.style}>
          {node.label}
        </div>
      ))}
    </div>
  );
}

export function QueryPanel() {
  return (
    <div className="query-panel panel">
      <div className="query-head">
        <div>
          <span className="panel-label">Search and query</span>
          <h3>Inspect comparable decisions instantly</h3>
        </div>
        <div className="pill-row">
          <span className="evidence-pill">Exception type</span>
          <span className="evidence-pill">Policy version</span>
        </div>
      </div>
      <div className="query-input">Search dossiers, evidence links, reviewers, or policy markers</div>
      <div className="query-results">
        {[
          "Cases with sanctions review overrides",
          "Payment exceptions reviewed under policy 3.4",
          "Dossiers where AI rationale was revised before approval"
        ].map((item, index) => (
          <div key={item} className="query-row">
            <span className="query-rank">0{index + 1}</span>
            <div>
              <strong>{item}</strong>
              <p>Sources, reviewers, and confidence shifts remain visible.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReportPreview() {
  return (
    <div className="report-panel panel">
      <div className="report-sheet">
        <div className="report-sheet-header">
          <span className="panel-label">Export-ready report</span>
          <span className="report-stamp">PDF</span>
        </div>
        <h3>Decision dossier export</h3>
        <div className="report-block">
          <span>Summary</span>
          <p>
            Structured narrative of trigger, observed evidence, inferred
            reasoning, relevant policy, and reviewer signoff.
          </p>
        </div>
        <div className="report-columns">
          <div className="report-block">
            <span>Evidence appendix</span>
            <ul>
              <li>Source link matrix</li>
              <li>Reviewer comments</li>
              <li>Policy version snapshots</li>
            </ul>
          </div>
          <div className="report-block">
            <span>Governance signals</span>
            <ul>
              {trustTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

type MetricBlockProps = {
  label: string;
  value: string;
};

function MetricBlock({ label, value }: MetricBlockProps) {
  return (
    <div className="metric-block">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
