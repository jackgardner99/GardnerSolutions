import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SITES = [
  {
    name: "In Your Nature",
    img: "portfolio/getinyournature.jpg",
    alt: "In Your Nature website",
    description: "A coaching site built around one voice and story, soft color washes, a cursive mark, and a clear path from question to booked call.",
    url: "https://getinyournature.com/",
  },
  {
    name: "Gig Gazette",
    img: "portfolio/giggazette.jpg",
    alt: "Gig Gazette website",
    description: "An interactive map of Nashville's live music scene, shows, open mics, and writers rounds, filterable by date, venue, and amenities.",
    url: "https://giggazette.com/",
  },
  {
    name: "The Gardners",
    img: "portfolio/thegardnersmusic.jpg",
    alt: "The Gardners website",
    description: "A band's home base for shows, merch, and music, built to link straight into Gig Gazette's gig listings.",
    url: "https://thegardnersmusic.com/",
  },
];

function SitesModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div className="site-modal-overlay" onClick={onClose}>
      <div className="site-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="site-modal-close" aria-label="Close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <span className="eyebrow">Our work</span>
        <h3>Websites we've made</h3>
        <p>Three live sites, built end to end for real clients.</p>
        <div className="site-modal-grid">
          {SITES.map((s) => (
            <div className="pf-card" key={s.name}>
              <div className="pf-visual">
                <span className="pf-tag">Live site</span>
                <img src={s.img} alt={s.alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div className="pf-body">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 10, color: "var(--moss)", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Visit site →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Sample solutions</span>
          <h2>A look at what we grow.</h2>
          <p>
            From your founder's story to the site it lives on, here's the kind of tailored work we build
            for clients. These are samples that show our range; the specific mix is always scoped to what
            your business needs. <em>Sample visuals shown; client outcomes coming soon.</em>
          </p>
        </div>
        <div className="pf-grid">

          <div className="pf-card pf-feat reveal">
            <div className="pf-visual">
              {!videoPlaying && <span className="pf-tag">Meet the Founders</span>}
              <video
                controls
                playsInline
                preload="metadata"
                poster="videos/founder-story-poster.jpg"
                onPlay={() => setVideoPlaying(true)}
                onPause={() => setVideoPlaying(false)}
                onEnded={() => setVideoPlaying(false)}
                style={{ width: "100%", height: "100%", objectFit: "cover", background: "#000" }}
              >
                <source src="videos/founder-story.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="pf-body">
              <h3>Founder story series</h3>
              <p>We sit down with owners and turn their "why" into a warm, on-brand video series customers actually connect with, the heart of a brand people remember.</p>
            </div>
          </div>

          <button
            type="button"
            className="pf-card reveal pf-trigger"
            onClick={() => setModalOpen(true)}
          >
            <div className="pf-visual" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4, padding: 4, background: "#fff" }}>
              <span className="pf-tag">Websites we've made</span>
              {SITES.map((s) => (
                <img key={s.name} src={s.img} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", borderRadius: 6 }} />
              ))}
            </div>
            <div className="pf-body">
              <h3>Websites we've made</h3>
              <p>Three live sites we've built for real clients. Tap to see them, and visit each one.</p>
            </div>
          </button>

        </div>
      </div>
      {modalOpen && <SitesModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
