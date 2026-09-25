import SectionLink from "../SectionLink.jsx";

const solid = { background: "var(--moss)", color: "#fff", border: "1.5px solid var(--moss)", marginTop: "auto" };
const ghost = { marginTop: "auto" };

export default function Packages() {
  return (
    <section id="packages">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Packages</span>
          <h2>Three ways to work together. One fixed price each.</h2>
          <p>
            No itemized menus, no surprise quotes. Every tier can cover any area you need. What changes is
            how much we do, and your Grid results show how far you have to grow.
          </p>
        </div>
        <p className="pkg-baseline">
          <b>Every tier starts with the same foundation:</b> the Grid diagnostic, tailored recommendations,
          and a branding &amp; strategy workshop. From there you choose how much we do: the playbook to run
          yourself, built with your team, or fully done for you.
        </p>
        <div className="pkg-grid">
          <div className="pkg reveal">
            <h3>The Foundation</h3>
            <div className="tag">The Playbook, you run it</div>
            <p className="pkg-who">For businesses that are mostly in good shape and want the plan and templates to run themselves.</p>
            <div className="pkg-inc">What's included</div>
            <ul className="pkg-list">
              <li>The baseline: Grid diagnostic, tailored recommendations, and a branding &amp; strategy workshop</li>
              <li>A playbook and templates for every area you need: advertising, social, website, interior, course content, and more</li>
              <li>You execute; we hand you the how</li>
            </ul>
            <div className="pkg-price"><span>Your price</span>$4,500</div>
            <div className="pkg-pay">Pay in full or in installments</div>
            <SectionLink id="contact" className="btn btn-ghost" style={ghost}>Start with a free assessment</SectionLink>
          </div>
          <div className="pkg feat reveal">
            <span className="pkg-badge">Most popular</span>
            <h3>The Full Experience</h3>
            <div className="tag">Built with your team</div>
            <p className="pkg-who">For businesses ready to level up, where we do the heavy lifting and your team handles the day-to-day.</p>
            <div className="pkg-inc">What's included</div>
            <ul className="pkg-list">
              <li>Everything in the baseline</li>
              <li>We build the core and bring the tools and direction: custom website and integrations, campaigns, social, course, and experience</li>
              <li>We do the hard part; your team runs the day-to-day alongside us</li>
            </ul>
            <div className="pkg-price"><span>Your price</span>$16,500</div>
            <div className="pkg-pay">Pay in full or in installments</div>
            <SectionLink id="contact" className="btn" style={solid}>Start with a free assessment</SectionLink>
          </div>
          <div className="pkg reveal">
            <h3>The Flagship</h3>
            <div className="tag">Fully done for you</div>
            <p className="pkg-who">For businesses with a lot to build who want it fully handled, end to end.</p>
            <div className="pkg-inc">What's included</div>
            <ul className="pkg-list">
              <li>Everything in Full, built to the most complex, fully integrated version</li>
              <li>We run it all: a website integrated with portal and scheduling, advertising, PR, community, social, and ongoing content</li>
              <li>You just approve</li>
            </ul>
            <div className="pkg-price"><span>Your price</span>$65,000</div>
            <div className="pkg-pay">Pay in full or in installments</div>
            <SectionLink id="contact" className="btn btn-ghost" style={ghost}>Apply for the Flagship</SectionLink>
          </div>
        </div>
        <p className="wwd-foot">
          Every tier is one fixed price; the scope flexes to your Grid results. Already have a great website?
          We reallocate that effort to what you actually need. Not sure where you'd land? Start with the free
          assessment.
        </p>
        <div className="assure">
          <div className="assure-item">
            <span className="assure-ic">🤝</span>
            <p>
              <b>The Gardner Solutions Zero-Risk Commitment.</b> We don't believe you should pay for delays.
              Every project we accept receives a customized timeline based on your selected pillars. We
              guarantee to deliver 100% of the assets on your checklist within our agreed-upon timeframe, or
              you don't pay us a dime. We take on all the operational risk so you can focus entirely on your
              launch.
            </p>
          </div>
          <div className="assure-item">
            <span className="assure-ic">🌿</span>
            <p>
              <b>A few clients each quarter.</b> We take on only a small number of new clients at a time, so
              every engagement gets our full attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
