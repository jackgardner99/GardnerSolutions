import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

export default function NotFound() {
  return (
    <>
      <Nav />
      <header className="hero">
        <div className="wrap" style={{ padding: "90px 24px 80px" }}>
          <span className="eyebrow">404</span>
          <h1 style={{ fontSize: "clamp(34px,5vw,54px)", color: "var(--moss)", marginTop: 14 }}>
            This page didn't take root.
          </h1>
          <p className="lead" style={{ marginTop: 20 }}>The page you're looking for doesn't exist or has moved.</p>
          <div className="hero-cta">
            <Link to="/" className="btn btn-solid">Back to home</Link>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
}
