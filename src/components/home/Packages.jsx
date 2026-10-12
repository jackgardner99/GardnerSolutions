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
            No itemized menus, no surprise quotes. Your Grid results show which areas matter most, and each
            tier sets how many we take on and how much of the work we do.
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
            <div className="pkg-inc">What's included · 30 days</div>
            <ul className="pkg-list">
              <li>The baseline: Grid diagnostic, tailored recommendations, and a branding &amp; strategy workshop</li>
              <li>Playbooks and templates for your top 3 areas from the Grid</li>
              <li>A ready-to-launch template website</li>
              <li>You execute; we hand you the how</li>
            </ul>
            <div className="pkg-price"><span>Your price</span>$4,500</div>
            <div className="pkg-pay">Paid in full. Upgrade to the Full Experience within 60 days and your $4,500 is credited.</div>
            <SectionLink id="quiz" className="btn btn-ghost" style={ghost}>See what's right for you →</SectionLink>
          </div>
          <div className="pkg feat reveal">
            <span className="pkg-badge">Most popular</span>
            <h3>The Full Experience</h3>
            <div className="tag">Built with your team</div>
            <p className="pkg-who">For businesses ready to level up, where we do the heavy lifting and your team handles the day-to-day.</p>
            <div className="pkg-inc">What's included · 90 days</div>
            <ul className="pkg-list">
              <li>Everything in the baseline</li>
              <li>Up to 6 areas from your Grid: campaigns, social, email, story, course, and experience</li>
              <li>One custom build: your website or a customer portal</li>
              <li>We do the hard part; your team runs the day-to-day alongside us</li>
            </ul>
            <div className="pkg-price"><span>Founding-client price</span>$16,500</div>
            <div className="pkg-pay">Pay in full, or 3 payments of $5,750. Optional support plan afterward, $500/month.</div>
            <SectionLink id="quiz" className="btn" style={solid}>See what's right for you →</SectionLink>
          </div>
          <div className="pkg reveal">
            <h3>The Flagship</h3>
            <div className="tag">Fully done for you</div>
            <p className="pkg-who">For businesses with a lot to build who want it fully handled, end to end.</p>
            <div className="pkg-inc">What's included · 12 months</div>
            <ul className="pkg-list">
              <li>Everything in Full, across every area your Grid flags</li>
              <li>Every build you need: a website integrated with portal and scheduling</li>
              <li>We run it all: advertising, PR, community, social, and ongoing content</li>
              <li>You just approve</li>
            </ul>
            <div className="pkg-price"><span>Your price</span>$65,000</div>
            <div className="pkg-pay">Pay in full ($65,000), quarterly (4 &times; $17,000), or monthly (12 &times; $6,000) on a 12-month agreement.</div>
            <SectionLink id="quiz" className="btn btn-ghost" style={ghost}>See what's right for you →</SectionLink>
          </div>
        </div>
        <p className="wwd-foot">
          Every tier is one fixed price, and the scope is set by your Grid results. Already have a great
          website? We put that effort toward what you actually need. Not sure where you'd land? Take the
          sample assessment above.
        </p>
        <div className="assure">
          <div className="assure-item">
            <span className="assure-ic">🤝</span>
            <p>
              <b>The Gardner Solutions Zero-Risk Commitment.</b> We don't believe you should pay for delays.
              Every project we accept receives a customized timeline based on your selected pillars. We
              guarantee to deliver 100% of the assets on your checklist within our agreed-upon timeframe, or
              you don't pay us a dime.
            </p>
          </div>
          <div className="assure-item">
            <span className="assure-ic">🌿</span>
            <p>
              <b>A few clients each quarter.</b> We take on only a small number of new clients at a time, and
              no more than three Flagship clients at once, so every engagement gets our full attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
