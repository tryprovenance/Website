export function LandingFooter() {
  return (
    <footer className="footer">
      <div className="container">
<div className="footer__inner">
          <span className="footer__brand">Provenance</span>
          <div className="footer__links">
            <a href="https://www.linkedin.com/in/nayan-kanaparthi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <span className="footer__copy">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
