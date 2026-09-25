import BrandMark from "./BrandMark.jsx";
import SectionLink from "./SectionLink.jsx";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span className="eyebrow" style={{ color: "var(--rose-soft)" }}>Ready when you are</span>
        <h2>Let's grow the right way.</h2>
        <p>Start with a free assessment, we'll show you where you stand and where you'll grow fastest.</p>
        <SectionLink id="contact" className="btn btn-solid">Book a free assessment</SectionLink>
        <div className="foot-brand">
          <BrandMark size={26} leaf="#9cc0a0" leaf2="#ffffff" />
          <div>
            Gardner Solutions
            <small>Digital engagement, cultivated. · Demo experience</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
