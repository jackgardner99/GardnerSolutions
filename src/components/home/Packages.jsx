import SectionLink from "../SectionLink.jsx";

const solid = { background: "var(--moss)", color: "#fff", border: "1.5px solid var(--moss)", marginTop: "auto" };
const ghost = { marginTop: "auto" };

export default function Packages() {
  return (
    <section id="packages">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Packages</span>
          <h2>Start with a diagnosis. Grow from there.</h2>
          <p>
            Every engagement starts with the Grid Diagnostic. From there, pick the path that fits: run it
            yourself, build it with us, or let us keep it growing month to month.
          </p>
        </div>

        <div className="diag-card reveal">
          <div>
            <span className="eyebrow" style={{ color: "var(--rose)" }}>Step one for everyone</span>
            <h3>The Grid Diagnostic</h3>
            <p>
              We sit down with you, go through all 57 details across the 11 pillars, and hand you a written
              roadmap with tailored recommendations and the package that fits. The roadmap is yours to keep
              whether or not we work together.
            </p>
          </div>
          <div className="diag-price">
            <div className="pkg-price"><span>One-time</span>$500</div>
            <p className="pkg-pay">Credited in full toward any package.</p>
            <SectionLink id="contact" className="btn btn-solid">Book your Grid Diagnostic</SectionLink>
          </div>
        </div>

        <div className="pkg-grid">
          <div className="pkg reveal">
            <h3>Foundation</h3>
            <div className="tag">The playbook, you run it</div>
            <p className="pkg-who">For businesses that want a clear plan and the tools to run it themselves.</p>
            <div className="pkg-inc">What's included · 30 days</div>
            <ul className="pkg-list">
              <li>Grid Diagnostic and a branding &amp; strategy workshop</li>
              <li>Playbooks and templates for 2–3 areas from your Grid</li>
              <li>Those areas can include a ready-to-launch website, set up with your brand</li>
              <li>You execute; we hand you the how</li>
            </ul>
            <div className="pkg-price"><span>Founding-client price · one-time</span>$2,500</div>
            <div className="pkg-pay">Upgrade to Build within 60 days and your $2,500 is credited.</div>
            <SectionLink id="quiz" className="btn btn-ghost" style={ghost}>Take the fit quiz →</SectionLink>
          </div>
          <div className="pkg feat reveal">
            <h3>Build</h3>
            <div className="tag">Built with your team · one-time project</div>
            <p className="pkg-who">For businesses ready to fix their biggest gaps, with us doing the heavy lifting.</p>
            <div className="pkg-inc">What's included · 60–90 days</div>
            <ul className="pkg-list">
              <li>Everything in Foundation</li>
              <li>2–3 areas from your Grid, built out with you</li>
              <li>Those areas can include a custom website or customer portal</li>
              <li>Your team trained to run it day to day</li>
            </ul>
            <div className="pkg-price"><span>One-time project</span>$7,500</div>
            <div className="pkg-pay">$7,500 total, or 3 payments of $2,500. The project ends when the work is delivered.</div>
            <SectionLink id="quiz" className="btn" style={solid}>Take the fit quiz →</SectionLink>
          </div>
          <div className="pkg reveal">
            <h3>Grow</h3>
            <div className="tag">Done for you · monthly</div>
            <p className="pkg-who">For businesses that want their marketing run for them, month after month.</p>
            <div className="pkg-inc">What's included · every month</div>
            <ul className="pkg-list">
              <li>2–3 areas from your Grid, run for you every month</li>
              <li>Recurring work like social media, ads, email, or content</li>
              <li>Monthly reporting on what's working</li>
              <li>A monthly check-in to adjust the plan</li>
            </ul>
            <div className="pkg-price"><span>Monthly plan</span>$1,500<em className="per"> /month</em></div>
            <div className="pkg-pay">3-month minimum, then month to month. Often follows Build, to keep what we built growing.</div>
            <SectionLink id="quiz" className="btn btn-ghost" style={ghost}>Take the fit quiz →</SectionLink>
          </div>
        </div>
        <p className="wwd-foot">
          Bigger project or a multi-location business? We'll quote it to fit after your Grid Diagnostic.
        </p>
        <div className="assure">
          <div className="assure-item">
            {/* <span className="assure-ic">🤝</span> */}
            <p>
              <b>The Gardner Solutions Zero-Risk Commitment.</b> We don't believe you should pay for delays.
              Every project we accept receives a customized timeline based on your selected pillars. We
              guarantee to deliver 100% of the assets on your checklist within our agreed-upon timeframe, or
              you don't pay us a dime. The clock pauses while we're waiting on your approvals or content.
            </p>
          </div>
          <div className="assure-item">
            {/* <span className="assure-ic">🌿</span> */}
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
