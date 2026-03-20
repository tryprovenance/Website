export function CtaSection() {
  return (
    <section className="section section--cta" id="cta">
      <div className="container">
        <div className="cta-block">
          <h2 className="cta-title reveal">
            See Provenance on
            <br />
            your workflow.
          </h2>
          <p className="cta-desc reveal">
            We work with risk and compliance teams at trading firms, hedge
            funds, and broker-dealers. Bring us one workflow and we&rsquo;ll
            show you what reviewable decision traceability looks like.
          </p>
          <div className="cta-actions reveal">
            <a
              href="https://forms.gle/HZ69m91DXsJJdPkM6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn magnetic"
              data-hover
            >
              Request Demo
            </a>
            <a
              href="https://www.linkedin.com/in/nayan-kanaparthi/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary magnetic"
              data-hover
            >
              Talk to Founder
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
