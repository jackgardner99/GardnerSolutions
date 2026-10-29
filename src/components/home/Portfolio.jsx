import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
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

const PHOTOS = [
  { img: "portfolio/photos/drum-shop-session.jpg", alt: "Live podcast taping with an audience in a drum shop", label: "Events" },
  { img: "portfolio/photos/artist-night.jpg", alt: "Singer smiling on stage with her band at an artist night", label: "Live music" },
  { img: "portfolio/photos/headshot-window.jpg", alt: "Professional headshot by an office window", label: "Headshots" },
  { img: "portfolio/photos/tablescape.jpg", alt: "Brunch table set with coral napkins and citrus centerpieces", label: "Styled events" },
  { img: "portfolio/photos/business-dinner.jpg", alt: "Speaker addressing guests at a private business dinner", label: "Events" },
  { img: "portfolio/photos/brunch-spread.jpg", alt: "French toast and crepes on a brunch sideboard", label: "Food" },
  { img: "portfolio/photos/place-setting.jpg", alt: "Place setting with a handwritten name card and grapefruit mimosas", label: "Styled events" },
  { img: "portfolio/photos/headshot-studio.jpg", alt: "Studio headshot against a light gray wall", label: "Headshots" },
];

function Modal({ eyebrow, title, text, wide, onClose, children }) {
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
      <div className={`site-modal${wide ? " site-modal-wide" : ""}`} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="site-modal-close" aria-label="Close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <span className="eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        {children}
      </div>
    </div>,
    document.body
  );
}

function SitesModal({ onClose }) {
  return (
    <Modal eyebrow="Our work" title="Websites we've made" text="Three live sites, built end to end for real clients." onClose={onClose}>
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
    </Modal>
  );
}

function PhotosModal({ onClose }) {
  return (
    <Modal wide eyebrow="Our work" title="Photography" text="Events, live music, styled tables, and headshots, all shot by our team. Tap any photo to see it full size." onClose={onClose}>
      <div className="photo-gallery">
        {PHOTOS.map((p) => (
          <a key={p.img} href={p.img} target="_blank" rel="noopener noreferrer">
            <img src={p.img} alt={p.alt} loading="lazy" />
          </a>
        ))}
      </div>
    </Modal>
  );
}

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [photosOpen, setPhotosOpen] = useState(false);
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

          <Link to="/portal-demo" className="pf-card reveal pf-trigger" style={{ textDecoration: "none" }}>
            <div className="pf-visual">
              <span className="pf-tag">Try the demo</span>
              <img src="portfolio/portal-demo.jpg" alt="Sample client portal dashboard" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
            </div>
            <div className="pf-body">
              <h3>Customer portals</h3>
              <p>A secure, logged-in home for project updates, conversations, documents, and meetings. Click through a sample portal we built.</p>
            </div>
          </Link>

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

          <button
            type="button"
            className="pf-card pf-feat reveal pf-trigger"
            onClick={() => setPhotosOpen(true)}
          >
            <div className="pf-visual pf-photo-mosaic">
              <span className="pf-tag">Photography</span>
              {PHOTOS.slice(0, 4).map((p) => (
                <img key={p.img} src={p.img} alt="" aria-hidden="true" />
              ))}
            </div>
            <div className="pf-body">
              <h3>Photography</h3>
              <p>Events, live music, styled tables, and headshots, shot by our team so your brand looks like itself everywhere. Tap to see the gallery.</p>
            </div>
          </button>

        </div>
      </div>
      {modalOpen && <SitesModal onClose={() => setModalOpen(false)} />}
      {photosOpen && <PhotosModal onClose={() => setPhotosOpen(false)} />}
    </section>
  );
}
