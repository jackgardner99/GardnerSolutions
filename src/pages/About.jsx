import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import SectionLink from "../components/SectionLink.jsx";
import { PILLARS } from "../data/pillars.js";

export default function About() {
  return (
    <>
      <Nav />

      <header className="hero" style={{ overflow: "visible" }}>
        <div className="wrap" style={{ padding: "60px 24px 12px" }}>
          <span className="eyebrow">About Gardner Solutions</span>
          <h1 style={{ fontSize: "clamp(34px,5vw,54px)", color: "var(--moss)", marginTop: 14 }}>
            Consulting rigor,<br />
            <em style={{ fontStyle: "italic", color: "var(--rose)" }}>builder's</em> hands.
          </h1>
          <p className="lead" style={{ maxWidth: "60ch", marginTop: 20 }}>
            We started Gardner Solutions on a simple belief: most small businesses don't need more posts,
            they need to reconnect with why they started, say it clearly, and let that story reach the right
            people. We pair strategic consulting with real technical build, so we don't just tell you what to
            do. We understand your business at its core, shape the story, and build what carries it.
          </p>
        </div>
      </header>

      <section className="about-band" style={{ padding: "44px 0 52px" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The team</span>
            <h2>Two people, two crafts.</h2>
            <p>A strategist who finds the story and a builder who makes it real.</p>
          </div>
          <div className="founders">
            <div className="founder">
              <div className="fphoto">
                <img src="photos/KadiPhoto.jpeg" alt="Kadi" />
              </div>
              <div>
                <h3>Kadi</h3>
                <div className="role">Strategy &amp; Story</div>
                <p>
                  Kadi spent six years in Big 4 consulting, where she helped Fortune 500 companies as a
                  project and program manager, conducting current state assessments, running gap analyses,
                  and building transformation roadmaps to help companies meet their goals. Her focus was
                  moving organizations from a reactive posture to a proactive, strategic one, and creating
                  efficiency across the business from end to end.
                </p>
                <p style={{ marginTop: 10 }}>
                  She brings that same discipline to small businesses, the ability to assess honestly where
                  a business stands, find what's holding it back, and lay out a clear path forward, paired
                  with a genuine gift for finding the story at the heart of a brand and making it land with
                  the people who matter.
                </p>
              </div>
            </div>
            <div className="founder">
              <div className="fphoto" style={{ background: "linear-gradient(135deg,#E4A64A,#F5DCA9)" }}>
                <img src="photos/JackPhoto.JPG" alt="Jack" />
              </div>
              <div>
                <h3>Jack</h3>
                <div className="role">Technology &amp; Build</div>
                <p>
                  Jack is a full stack software developer, experienced across both front end and back end. He
                  has built custom websites, databases, content calendars, and social media systems from the
                  ground up, the full stack of tools a modern business runs on.
                </p>
                <p style={{ marginTop: 10 }}>
                  Where most agencies can only advise on the technical side, Jack actually builds it: the
                  website, the booking system, the customer portal, the databases and integrations behind
                  them. When strategy calls for something to be built, it gets built right, and built to
                  last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "44px 0 56px" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Why we're different</span>
            <h2>Strategy and build, under one roof.</h2>
            <p>
              Most help falls into one of two camps: strategists who hand you a slide deck, or freelancers
              who post without a plan. We're neither.
            </p>
          </div>
          <div className="wwd-grid">
            <div className="wwd">
              <span className="wwd-n">01</span>
              <h3>We diagnose first</h3>
              <p>Consulting grade assessment across all {PILLARS.length} areas shows exactly where you stand and where you'll grow fastest, before anyone touches a post.</p>
            </div>
            <div className="wwd">
              <span className="wwd-n">02</span>
              <h3>We build what we recommend</h3>
              <p>Website, booking, portals, content systems, we don't just advise on the technical side, we deliver it.</p>
            </div>
            <div className="wwd">
              <span className="wwd-n">03</span>
              <h3>We start at the root</h3>
              <p>We're not a social media company. We find why your business started, get the message right, and let it grow across everything you do.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 34 }}>
            <SectionLink id="contact" className="btn btn-solid">Book a free assessment</SectionLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
