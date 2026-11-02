import BrandMark from "./BrandMark.jsx";
import SectionLink from "./SectionLink.jsx";

export default function Footer() {
  return (
    <footer className="foot" id="book">
      <div className="wrap">
        <span className="eyebrow" style={{ color: "var(--rose-soft)" }}>Ready when you are</span>
        <h2>Let's grow the right way.</h2>
        <p>Start with our free assessment to see where you stand. For a deeper dive, the Grid Diagnostic walks all 57 details with you for $500, credited in full toward any package.</p>
        <SectionLink id="contact" className="btn btn-solid">Book your Grid Diagnostic</SectionLink>
        <div className="foot-brand">
          <BrandMark size={26} leaf="#9cc0a0" leaf2="#ffffff" />
          <div>
            Gardner Solutions
            <small>Let us help make your business bloom.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
