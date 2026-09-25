import { PILLARS } from "../../data/pillars.js";

export default function WhatWeDo() {
  return (
    <section id="whatwedo">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">What we do</span>
          <h2>What we can build for you.</h2>
          <p>
            Every business is different, so we don't sell a one-size package, we mix these to fit what you
            actually need. <a href="#packages" style={{ color: "var(--moss)", fontWeight: 700 }}>See how they package up →</a>
          </p>
        </div>
        <div className="wwd-grid cols-5">
          <div className="wwd reveal">
            <h3>Diagnosis &amp; strategy</h3>
            <p>A clear read on where your business stands across all {PILLARS.length} areas of engagement, with tailored recommendations and a roadmap to your goals.</p>
          </div>
          <div className="wwd reveal">
            <h3>Brand &amp; story</h3>
            <p>Your founder story, messaging, and the customer stories and assets that carry it, the core of why you started, shaped so the right people connect.</p>
          </div>
          <div className="wwd reveal">
            <h3>Content &amp; presence</h3>
            <p>A content engine that turns your story into a steady stream across social, email, and your site, plus photography, video, and podcasts when they fit.</p>
          </div>
          <div className="wwd reveal">
            <h3>Websites &amp; systems</h3>
            <p>Websites, e-commerce, booking, and customer portals, built end to end. Plus a customer engine that turns purchases into personalized follow-ups.</p>
          </div>
          <div className="wwd reveal">
            <h3>Experience &amp; results</h3>
            <p>The in-store experience and staff training that keep your brand consistent off-screen, and the reporting that shows what's working.</p>
          </div>
        </div>
        <p className="wwd-foot">
          The work is tailored to you, but each package is one fixed price, so there are no surprise quotes.{" "}
          <a href="#work" style={{ color: "var(--moss)", fontWeight: 700, fontStyle: "normal" }}>See sample work →</a>
        </p>
      </div>
    </section>
  );
}
