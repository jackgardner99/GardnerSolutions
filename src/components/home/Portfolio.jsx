export default function Portfolio() {
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
            <div className="pf-visual" style={{ background: "linear-gradient(135deg,#E0808F,#E4A64A)" }}>
              <span className="pf-tag">Sample · Interview series</span>
              <div className="playbtn">
                <svg width="20" height="20" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#2E5E3A" /></svg>
              </div>
              <div className="lower3">
                <span className="av" style={{ background: "linear-gradient(135deg,#fff,#f0c3c9)" }} />
                <div><b>Meet the Founder</b><br /><span>Willow &amp; Sage · Episode 3 · 2:14</span></div>
              </div>
            </div>
            <div className="pf-body">
              <span className="eyebrow">Our signature</span>
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
              <span className="eyebrow">Members only</span>
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
              <span className="eyebrow">Teach &amp; sell</span>
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
              <span className="eyebrow">Direction</span>
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
              <span className="eyebrow">Imagery</span>
              <h3>Photography</h3>
              <p>Bright, natural product and lifestyle photos that make the everyday look intentional.</p>
            </div>
          </div>

          <div className="pf-card reveal">
            <div className="pf-visual" style={{ background: "#eef2ea" }}>
              <span className="pf-tag">Sample · Website</span>
              <div className="brchrome">
                <i style={{ background: "#E0808F" }} />
                <i style={{ background: "#E4A64A" }} />
                <i style={{ background: "#6BA46F" }} />
                <span className="url" />
              </div>
              <div style={{ padding: 14 }}>
                <div style={{ height: 38, borderRadius: 8, background: "linear-gradient(135deg,#6BA46F,#C4D6BE)", marginBottom: 10 }} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                  <div style={{ height: 34, borderRadius: 6, background: "#fff", border: "1px solid var(--sage)" }} />
                  <div style={{ height: 34, borderRadius: 6, background: "#fff", border: "1px solid var(--sage)" }} />
                  <div style={{ height: 34, borderRadius: 6, background: "#fff", border: "1px solid var(--sage)" }} />
                </div>
              </div>
            </div>
            <div className="pf-body">
              <span className="eyebrow">Home base</span>
              <h3>Websites</h3>
              <p>Fast, beautiful sites built to be found, trusted, and to sell.</p>
            </div>
          </div>

          <div className="pf-card reveal">
            <div className="pf-visual" style={{ background: "linear-gradient(180deg,#e8efe4,#f3f6ef)" }}>
              <span className="pf-tag">Sample · In-store</span>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{ height: 24, margin: "0 20px", borderRadius: "12px 12px 0 0", background: "repeating-linear-gradient(90deg,#4E8A57 0 13px,#dcebd8 13px 26px)" }} />
                <div style={{ margin: "0 20px", background: "#fff", border: "1px solid var(--sage)", borderBottom: "none", padding: "14px 14px 0", flex: 0.62, display: "flex", gap: 11, alignItems: "flex-end" }}>
                  <div style={{ flex: 1.5, background: "#eef2ea", border: "1px solid var(--sage)", borderRadius: "8px 8px 0 0", height: "82%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Fraunces',serif", color: "var(--moss)", fontWeight: 600, fontSize: 14 }}>Willow &amp; Sage</span>
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
    </section>
  );
}
