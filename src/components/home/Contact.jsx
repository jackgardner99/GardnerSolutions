import { useRef, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkjgyqvj";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-band">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow" style={{ color: "var(--rose)" }}>Get in touch</span>
          <h2>Book your Grid Diagnostic.</h2>
          <p>We sit down with you, walk through all 57 details of the Grid across the 11 pillars, and hand you a written roadmap and the package that fits. It's <b>$500, credited in full toward any package</b>, and the roadmap is yours to keep whether or not we work together.</p>
        </div>
        <form className="cform" ref={formRef} onSubmit={handleSubmit}>
          <div className="cfield"><label>Your name</label><input type="text" name="name" placeholder="Jane Smith" required /></div>
          <div className="cfield"><label>Business name</label><input type="text" name="business" placeholder="Your business name" /></div>
          <div className="cfield"><label>Email</label><input type="email" name="email" placeholder="jane@willowandsage.com" required /></div>
          <div className="cfield"><label>Phone number</label><input type="tel" name="phone" placeholder="(555) 123-4567" /></div>
          <div className="cfield"><label>What kind of business are you?</label><input type="text" name="business_type" placeholder="e.g. wellness studio, boutique, café" /></div>
          <div className="cfield"><label>What's on your mind?</label><textarea name="message" placeholder="Tell us what you're hoping to grow..." /></div>
          <button type="submit" className="btn btn-solid" style={{ width: "100%" }} disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Request my Grid Diagnostic"}
          </button>
          {status === "sent" && (
            <p style={{ marginTop: 14, color: "var(--moss)", fontWeight: 700, textAlign: "center" }}>
              🌱 Thanks, your request is in. We'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p style={{ marginTop: 14, color: "var(--rose)", fontWeight: 700, textAlign: "center" }}>
              Something went wrong sending that. Mind trying again?
            </p>
          )}
        </form>
        <div className="guarantee-box">
          <p className="guarantee"><b>Our promise:</b> the diagnosis will surface at least three specific gaps that are costing you customers, or we'll refund your $500.</p>
        </div>
      </div>
    </section>
  );
}
