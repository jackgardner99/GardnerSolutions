import Plant from "../Plant.jsx";
import { scrollToId } from "../../utils/scrollTo.js";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-in">
        <div>
          <span className="eyebrow">Engagement studio for small business</span>
          <h1>Engagement that grows the <em>right</em> customers.</h1>
          <p className="lead">
            Great engagement doesn't come from posting more. It comes from knowing why your business exists
            and letting that story reach the people who are right for it. We start at the root, get your
            message clear, and help the right customers find you and stay.
          </p>
          <div className="hero-cta">
            <button className="btn btn-solid" onClick={() => scrollToId("contact")}>Book a free assessment</button>
            <button className="btn btn-ghost" onClick={() => scrollToId("quiz")}>See a sample assessment</button>
          </div>
          <p className="hero-note">🌱 Founded by a Big 4 alum and a full-stack lead developer.</p>
        </div>
        <div className="hero-art" id="heroArt" aria-hidden="true">
          <div className="hero-flowers" style={{ position: "absolute", bottom: 0, left: "50%", display: "flex", alignItems: "flex-end", gap: 6, width: "max-content" }}>
            <div className="sway d2"><Plant tier="Medium" scale={1.35} /></div>
            <div className="sway"><Plant tier="High" scale={2.1} /></div>
            <div className="sway d1"><Plant tier="Medium" scale={1.7} /></div>
            <div className="sway d3"><Plant tier="Low" scale={1.3} /></div>
            <div className="sway d2"><Plant tier="High" scale={1.7} /></div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: "-6%", right: "-6%", height: 20, background: "linear-gradient(180deg,#e7e0cf,#dbd2ba)", borderRadius: "40%" }} />
        </div>
      </div>
    </header>
  );
}
