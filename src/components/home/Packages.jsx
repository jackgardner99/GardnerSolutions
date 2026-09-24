import { PILLARS } from "../../data/pillars.js";

export default function Packages() {
  return (
    <section id="packages">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Packages</span>
          <h2>Ways we can work together.</h2>
          <p>
            These are starting points, not fixed menus. Every engagement begins with the free assessment,
            and from there we tailor the mix and the pricing to your business's needs, goals, and
            volume. Nothing here is one-size-fits-all.
          </p>
        </div>
        <div className="pkg-grid">
          <div className="pkg feat reveal">
            <span className="pkg-badge">Start here</span>
            <h3>The Grid Diagnostic</h3>
            <div className="tag">Where every engagement begins</div>
            <ul>
              <li>Free initial assessment of your business across all {PILLARS.length} areas</li>
              <li>A clear read on who your audience is and where to focus</li>
              <li>What you're doing well, and the specific areas to grow</li>
              <li>A tailored roadmap and recommendations scoped to your goals</li>
            </ul>
          </div>
          <div className="pkg reveal">
            <h3>Founder Story &amp; Brand</h3>
            <div className="tag">Our signature</div>
            <ul>
              <li>Story discovery: your real origin and your "why," made clear</li>
              <li>Founder interview and story series, with clips for your channels</li>
              <li>Customer stories and testimonials, captured as proof</li>
              <li>Brand messaging and narrative your whole team can carry</li>
            </ul>
          </div>
          <div className="pkg reveal">
            <h3>Content, Systems &amp; Growth</h3>
            <div className="tag">Ongoing growth</div>
            <ul>
              <li>A content engine that turns your story into a steady stream across social and email</li>
              <li>Website, e-commerce, booking, and customer portals built end to end</li>
              <li>A customer engine that turns purchases into personalized follow-ups and loyalty</li>
              <li>In-store experience, staff training, and the community that keeps customers close</li>
            </ul>
          </div>
        </div>
        <p className="wwd-foot">
          Not sure what you need? That's exactly what the free assessment is for, and we'll map it to your
          business and build a plan that fits, at a price scoped to your needs.
        </p>
      </div>
    </section>
  );
}
