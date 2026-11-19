import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

// Shared frame for the privacy policy and terms of service.
export default function LegalPage({ eyebrow, title, updated, children }) {
  return (
    <>
      <Nav />
      <header className="hero">
        <div className="wrap" style={{ padding: "60px 24px 12px" }}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 style={{ fontSize: "clamp(34px,5vw,54px)", color: "var(--moss)", marginTop: 14 }}>{title}</h1>
          <p className="lead" style={{ marginTop: 16 }}>Last updated {updated}</p>
        </div>
      </header>
      <main className="wrap legal">{children}</main>
      <Footer />
    </>
  );
}
