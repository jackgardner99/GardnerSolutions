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

          <div className="pf-card reveal">
            <div className="pf-visual">
              <span className="pf-tag">Sample · Portal</span>
              <div style={{ position: "absolute", inset: 0, display: "flex", background: "#fff" }}>
                <div style={{ width: "34%", background: "linear-gradient(180deg,#2E5E3A,#24492e)", padding: "14px 10px", display: "flex", flexDirection: "column", gap: 9 }}>
                  <span style={{ width: "62%", height: 9, borderRadius: 4, background: "rgba(255,255,255,.55)" }} />
                  <span style={{ width: "82%", height: 7, borderRadius: 4, background: "rgba(255,255,255,.28)" }} />
                  <span style={{ width: "72%", height: 7, borderRadius: 4, background: "rgba(255,255,255,.28)" }} />
                  <span style={{ width: "78%", height: 7, borderRadius: 4, background: "rgba(255,255,255,.42)" }} />
                </div>
                <div style={{ flex: 1, padding: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#E0808F,#E4A64A)" }} />
                    <span style={{ width: "52%", height: 9, borderRadius: 4, background: "var(--sage-line)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    <div style={{ height: 44, borderRadius: 8, background: "#eef2ea", border: "1px solid var(--sage)" }} />
                    <div style={{ height: 44, borderRadius: 8, background: "#eef2ea", border: "1px solid var(--sage)" }} />
                    <div style={{ height: 30, borderRadius: 8, background: "#fbf3e2", border: "1px solid #f0deb0" }} />
                    <div style={{ height: 30, borderRadius: 8, background: "#faeceb", border: "1px solid #f0cfcf" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="pf-body">
              <h3>Customer portals</h3>
              <p>A secure, logged-in home for bookings, orders, and documents, the space that keeps customers coming back.</p>
            </div>
          </div>

          <div className="pf-card reveal">
            <div className="pf-visual">
              <span className="pf-tag">Sample · Course</span>
              <div style={{ position: "absolute", inset: 0, display: "flex", background: "#fff" }}>
                <div style={{ flex: 1.3, background: "linear-gradient(135deg,#4E8A57,#7FB183)", position: "relative" }}>
                  <div className="playbtn" style={{ width: 46, height: 46 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#2E5E3A" /></svg>
                  </div>
                </div>
                <div style={{ flex: 1, padding: "12px 11px", display: "flex", flexDirection: "column", gap: 10, justifyContent: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--high)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="9" height="9" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span style={{ flex: 1, height: 7, borderRadius: 4, background: "var(--sage-line)" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--high)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="9" height="9" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span style={{ flex: 1, height: 7, borderRadius: 4, background: "var(--sage-line)" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--med)" }} />
                    <span style={{ flex: 1, height: 7, borderRadius: 4, background: "#e7d9bd" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid var(--sage-line)" }} />
                    <span style={{ flex: 1, height: 7, borderRadius: 4, background: "#eef2ea" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="pf-body">
              <h3>Course content</h3>
              <p>Structured lessons and curriculum that turn your expertise into something students follow, and buy.</p>
            </div>
          </div>

          <div className="pf-card reveal">
            <div className="pf-visual" style={{ background: "var(--paper-2)", padding: 18 }}>
              <span className="pf-tag">Sample · Strategy</span>
              <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
                <div className="lane">
                  <span className="ll">Social</span>
                  <span className="chip" style={{ width: "22%", background: "var(--rose)" }} />
                  <span className="chip" style={{ width: "30%", background: "var(--rose-soft)" }} />
                  <span className="chip" style={{ width: "18%", background: "var(--rose)" }} />
                </div>
                <div className="lane">
                  <span className="ll">Email</span>
                  <span className="chip" style={{ width: "34%", background: "var(--apricot)" }} />
                  <span className="chip" style={{ width: "24%", background: "var(--apricot-soft)" }} />
                </div>
                <div className="lane">
                  <span className="ll">Web</span>
                  <span className="chip" style={{ width: "28%", background: "var(--leaf)" }} />
                  <span className="chip" style={{ width: "20%", background: "var(--sage)" }} />
                  <span className="chip" style={{ width: "26%", background: "var(--leaf-2)" }} />
                </div>
              </div>
            </div>
            <div className="pf-body">
              <h3>Content strategy</h3>
              <p>A calendar and a voice that keep every channel saying the same, right thing.</p>
            </div>
          </div>

          <div className="pf-card reveal">
            <div className="pf-visual" style={{ padding: 4, background: "#fff" }}>
              <span className="pf-tag">Sample · Photography</span>
              <div style={{ position: "absolute", inset: 4, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(2,1fr)", gap: 4 }}>
                <span style={{ borderRadius: 6, background: "linear-gradient(135deg,#E0808F,#f0c3c9)" }} />
                <span style={{ borderRadius: 6, background: "linear-gradient(135deg,#6BA46F,#C4D6BE)" }} />
                <span style={{ borderRadius: 6, background: "linear-gradient(135deg,#E4A64A,#F5DCA9)" }} />
                <span style={{ borderRadius: 6, background: "linear-gradient(135deg,#4E8A57,#6BA46F)" }} />
                <span style={{ borderRadius: 6, background: "linear-gradient(135deg,#E4A64A,#E0808F)" }} />
                <span style={{ borderRadius: 6, background: "linear-gradient(135deg,#C4D6BE,#8DAA8E)" }} />
              </div>
            </div>
            <div className="pf-body">
              <h3>Photography</h3>
              <p>Bright, natural product and lifestyle photos that make the everyday look intentional.</p>
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

          <div className="pf-card reveal">
            <div className="pf-visual" style={{ background: "linear-gradient(180deg,#e8efe4,#f3f6ef)" }}>
              <span className="pf-tag">Sample · In-store</span>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ height: 24, margin: "0 20px", borderRadius: "12px 12px 0 0", background: "repeating-linear-gradient(90deg,#4E8A57 0 13px,#dcebd8 13px 26px)" }} />
                <div style={{ margin: "0 20px", background: "#fff", border: "1px solid var(--sage)", borderBottom: "none", padding: "14px 14px 0", flex: 0.62, display: "flex", gap: 11, alignItems: "flex-end" }}>
                  <div style={{ flex: 1.5, background: "#eef2ea", border: "1px solid var(--sage)", borderRadius: "8px 8px 0 0", height: "82%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Fraunces',serif", color: "var(--moss)", fontWeight: 600, fontSize: 14 }}>Your Brand</span>
                  </div>
                  <div style={{ flex: 0.6, background: "linear-gradient(180deg,#6BA46F,#4E8A57)", borderRadius: "8px 8px 0 0", height: "92%" }} />
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <span style={{ width: 13, height: 13, borderRadius: "50%", background: "#E0808F" }} />
                    <span style={{ width: 17, height: 12, background: "#E4A64A", borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="pf-body">
              <h3>In-store experience</h3>
              <p>Signage, space, and a team that speak the brand, so a visit feels like the business, not just its website.</p>
            </div>
          </div>

        </div>
      </div>
      {modalOpen && <SitesModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
