import { PILLARS } from "../../data/pillars.js";

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">The path</span>
          <h2>How working together works.</h2>
          <p>However we help, the journey is the same: a free quiz gives you a rough idea, the Grid Diagnostic gives you the real map, and we grow from there.</p>
        </div>
        <div className="steps">
          <div className="step reveal">
            <span className="num">01</span>
            <h3>Take the fit quiz</h3>
            <p>Free and about 2 minutes, one question per pillar. It suggests the package you'd likely fit. It's a rough guide, not a diagnosis.</p>
          </div>
          <div className="step reveal">
            <span className="num">02</span>
            <h3>Get your Grid Diagnostic</h3>
            <p>$500, credited in full toward any package. We sit down with you and go through all 57 details across the {PILLARS.length} pillars.</p>
          </div>
          <div className="step reveal">
            <span className="num">03</span>
            <h3>Pick your path</h3>
            <p>You leave with a written roadmap. Run it yourself, build it with us, or let us keep it growing month to month.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
