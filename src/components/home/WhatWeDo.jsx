export default function WhatWeDo() {
  return (
    <section id="whatwedo">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">What we do</span>
          <h2>What we can build for you.</h2>
          <p>
            Every business is different, so we don't sell a one-size package — we mix these to fit what you
            actually need. <a href="#packages" style={{ color: "var(--moss)", fontWeight: 700 }}>See how they package up →</a>
          </p>
        </div>
        <div className="wwd-grid cols-4">
          <div className="wwd reveal">
            <h3>Diagnosis &amp; strategy</h3>
            <p>A clear read on where your business stands across all seven areas, with tailored recommendations and a roadmap to your goals.</p>
          </div>
          <div className="wwd reveal">
            <h3>Brand &amp; story</h3>
            <p>Your founder story, messaging, and narrative — the core of why you started, shaped so the right customers connect with it.</p>
          </div>
          <div className="wwd reveal">
            <h3>Content &amp; presence</h3>
            <p>A content calendar and coordinated voice across channels, plus photography and video when it fits your goals.</p>
          </div>
          <div className="wwd reveal">
            <h3>Websites &amp; systems</h3>
            <p>Websites, booking, and customer portals — built end to end, not just advised on.</p>
          </div>
        </div>
        <p className="wwd-foot">
          Pricing is tailored to your needs and volume — never a rigid template.{" "}
          <a href="#work" style={{ color: "var(--moss)", fontWeight: 700, fontStyle: "normal" }}>See sample work →</a>
        </p>
      </div>
    </section>
  );
}
