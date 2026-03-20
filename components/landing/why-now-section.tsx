const panels = [
  {
    num: "01",
    title: "Regulatory\nPressure",
    body: "FINRA\u2019s 2026 oversight report dedicates new guidance to AI governance. SEC examination priorities focus on firms\u2019 policies for supervising AI-assisted workflows. The bar for reviewable decision-making is rising.",
  },
  {
    num: "02",
    title: "AI Adoption\nCreates the Problem",
    body: "As firms deploy AI for trading surveillance and risk assessment, documenting how these tools contribute to decisions becomes urgent. You can\u2019t explain an AI-assisted decision without infrastructure for recording decision reasoning.",
  },
  {
    num: "03",
    title: "LLM Capability\nEnables the Solution",
    body: "Reconstructing decision reasoning from unstructured audit logs requires contextual understanding that only became reliable with recent LLM advances. The technology matured at precisely the moment the regulatory requirement appeared.",
  },
];

export function WhyNowSection() {
  return (
    <section className="horizontal" id="why-now">
      <div className="horizontal__header">
        <div className="container">
          <div className="section-header">
            <span className="section-num">05</span>
            <span className="section-label">Why Now</span>
          </div>
        </div>
      </div>
      <div className="horizontal__track" id="h-track">
        {panels.map((p) => (
          <div key={p.num} className="horizontal__panel">
            <span className="hpanel__num">{p.num}</span>
            <h3 className="hpanel__title">
              {p.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < p.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>
            <div className="hpanel__line" />
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
