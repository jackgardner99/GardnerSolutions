import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCode } from "@fortawesome/free-solid-svg-icons";

export default function CredStrip() {
  return (
    <section className="cred-strip">
      <div className="wrap cred-in">
        <div className="cred-item">
          <div className="cred-ic"><FontAwesomeIcon icon={faBullseye} /></div>
          <div>
            <b>Kadi — Strategy &amp; Story.</b> A Big 4 alum who helped Fortune 500 companies
            define their goals, sharpen their narrative, and close the gap between where they were and where
            they wanted to be — through current-state assessments, gap analyses, and transformation roadmaps.
            She brings that same work to your business: clarifying your goals, finding your story, and
            building the roadmap to get there.
          </div>
        </div>
        <div className="cred-item">
          <div className="cred-ic"><FontAwesomeIcon icon={faCode} /></div>
          <div>
            <b>Jack — Technology &amp; Build.</b> A full-stack developer (front and back end) who builds the
            technology most agencies can only advise on: custom websites, customer portals, databases,
            content and social systems, and integrations that connect the tools a business already uses. He
            designed Gig Gazette, an app mapping Nashville's local live-music scene, from the ground up.
          </div>
        </div>
      </div>
      <div className="wrap" style={{ textAlign: "center", marginTop: 6 }}>
        <Link to="/about" style={{ color: "var(--moss)", fontWeight: 700, fontSize: "14.5px", textDecoration: "none" }}>
          Read more about us →
        </Link>
      </div>
    </section>
  );
}
