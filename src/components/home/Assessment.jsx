import { useState } from "react";
import { PILLARS, TIERS, SCORE } from "../../data/pillars.js";

// Gardner Grid API (GardnerSolutionsAssessmentQuiz-api). Falls back to
// Formspree when VITE_ASSESSMENT_ENDPOINT isn't set at build time.
const ASSESSMENT_ENDPOINT = import.meta.env.VITE_ASSESSMENT_ENDPOINT;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xppzvkey";

const WEIGHTS = { 1: 3, 2: 4, 3: 5, 4: 4, 5: 5, 6: 3, 7: 4, 8: 5, 9: 5, 10: 3, 11: 3 };
const PTS = { Low: 1, Medium: 3, High: 5 };
const tierColor = { Low: "var(--low)", Medium: "var(--med)", High: "var(--high)" };
const TIER_NAMES = ["The Foundation", "The Full Experience", "The Flagship"];

const SUPPORT_OPTIONS = [
  { key: "DIY", label: "Give us the playbooks" },
  { key: "DWY", label: "Build it with our team" },
  { key: "DFY", label: "Do it all for us" },
];
const CAPACITY_OPTIONS = [
  { key: "canRun", label: "A dedicated person or two" },
  { key: "thin", label: "One busy person" },
  { key: "none", label: "No one to run it" },
];
const REVENUE_OPTIONS = [
  { key: "under50", label: "Under $50k" },
  { key: "50to250", label: "$50k–$250k" },
  { key: "250to500", label: "$250k–$500k" },
  { key: "over500", label: "$500k+" },
];

export default function Assessment() {
  const [answers, setAnswers] = useState(() => PILLARS.map((p) => p.state));
  const [supportPref, setSupportPref] = useState("DIY");
  const [capacity, setCapacity] = useState("canRun");
  const [revenue, setRevenue] = useState("under50");
  const [form, setForm] = useState({ name: "", email: "", business: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [submittedContact, setSubmittedContact] = useState(null);

  const pick = (i, ti) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = ti;
      return next;
    });
  };

  const computeResult = () => {
    const avg = answers.reduce((a, s) => a + SCORE[TIERS[s]], 0) / answers.length;
    let standing = "Low";
    if (avg > 3.4) standing = "High";
    else if (avg > 2.4) standing = "Medium";

    let wsum = 0, wmax = 0, gaps = 0;
    const breakdown = PILLARS.map((p, i) => {
      const w = WEIGHTS[p.id] || 3;
      const tier = TIERS[answers[i]];
      wsum += w * PTS[tier];
      wmax += w * 5;
      if (tier === "Low") gaps++;
      return {
        area: String(p.id),
        pillar: p.name,
        question: p.question,
        choice: p.option[answers[i]],
        choiceIndex: answers[i],
        tier,
      };
    });
    const weightedPct = wmax ? wsum / wmax : 0;

    // The Grid gap drives what's NEEDED. 75%+ = Foundation, 50-75% = Full, under 50% = Flagship.
    const gapRank = weightedPct >= 0.75 ? 0 : weightedPct >= 0.5 ? 1 : 2;

    // Support preference and thin capacity can lift the tier, but only when there's a real
    // gap to address, and only up to Full — Flagship stays reserved for the Grid gap itself.
    const prefRank = { DIY: 0, DWY: 1, DFY: 1 }[supportPref];
    const capBump = capacity === "canRun" ? 0 : 1;
    const lift = gapRank > 0 ? Math.max(prefRank, Math.min(1, gapRank + capBump)) : 0;
    const neededRank = Math.min(2, Math.max(gapRank, lift));
    const neededTier = TIER_NAMES[neededRank];

    // Revenue caps where we'd responsibly START (healthy marketing spend runs ~7-10% of
    // revenue), but never caps what's actually NEEDED — that's a diagnosis, not a bill.
    const affordRank = { under50: 0, "50to250": 1, "250to500": 1, over500: 2 }[revenue];
    const startRank = Math.min(neededRank, affordRank);
    const grow = neededRank > startRank;
    const startTier = TIER_NAMES[startRank];

    return {
      averageScore: Number(avg.toFixed(2)),
      standing,
      gaps,
      weightedPct: Math.round(weightedPct * 100),
      supportPref,
      capacity,
      revenue,
      neededTier,
      startTier,
      recommendedPackage: startTier,
      grow,
      breakdown,
    };
  };

  const result = submittedContact ? { ...computeResult(), ...submittedContact } : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const computed = computeResult();

    try {
      if (ASSESSMENT_ENDPOINT) {
        await sendToApi(computed);
      } else {
        await sendToFormspree(computed);
      }
    } catch {
      // still show the result locally even if the network request fails
    }
    setSubmittedContact({ name: form.name, email: form.email });
    setStatus("sent");
  };

  const sendToApi = (computed) => {
    const { breakdown, ...scores } = computed;
    return fetch(ASSESSMENT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...scores,
        name: form.name,
        email: form.email,
        business: form.business || null,
        submittedAt: new Date().toISOString(),
        answers: breakdown,
      }),
    });
  };

  const sendToFormspree = (computed) => {
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("business", form.business);
    fd.append("standing", computed.standing);
    fd.append("weighted_pct", `${computed.weightedPct}%`);
    fd.append("needed_tier", computed.neededTier);
    fd.append("start_tier", computed.startTier);
    fd.append("grow", computed.grow ? "yes" : "no");
    fd.append("support_pref", supportPref);
    fd.append("capacity", capacity);
    fd.append("revenue", revenue);
    fd.append("breakdown", computed.breakdown.map((b) => `${b.pillar}: ${b.tier}`).join("\n"));
    fd.append("_subject", `Diagnosis result: ${computed.startTier} for ${form.name || "someone"}`);
    return fetch(FORMSPREE_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: fd });
  };

  return (
    <>
      <section id="quiz" className="quiz-band">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Sample assessment</span>
            <h2>See which package fits you.</h2>
            <p>
              This is a quick <b>sample</b>, one question per area, pre-filled so you can see how it works.
              Change any answer to see how your grade, and the package that fits, shift. The{" "}
              <b>full diagnosis</b> we run with you goes across all 57 sub-areas for tailored
              recommendations, built entirely around your business.{" "}
              <a href="#contact" style={{ color: "var(--moss)", fontWeight: 700 }}>Book your free diagnosis →</a>
            </p>
          </div>
          <div className="qgrid">
            {PILLARS.map((p, i) => (
              <div className="qcard" key={p.id}>
                <div className="qtop">
                  <span className={`pill-tag t-${p.type}`}>{p.type}</span>
                  <span className="eyebrow" style={{ color: "var(--ink-soft)", letterSpacing: ".1em" }}>Area {p.id}</span>
                </div>
                <h3>{p.name}: <span style={{ fontWeight: 400, color: "var(--ink-soft)" }}>{p.question}</span></h3>
                <div className="opts">
                  {p.option.map((txt, ti) => (
                    <div
                      key={ti}
                      className={`opt ${answers[i] === ti ? "sel" : ""}`}
                      onClick={() => pick(i, ti)}
                    >
                      <span className="dot" />
                      <span className="otext">{txt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="quiz-actions">
            <button className="btn btn-solid" onClick={() => document.getElementById("results")?.scrollIntoView()}>See my result ↓</button>
            <span className="hint">Changing your answers will result in a different grade.</span>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Your result</span>
            <h2>Where should we send your score?</h2>
            <p>
              Answer three quick questions, then enter your name and email to instantly view your{" "}
              {PILLARS.length}-pillar breakdown and the fixed-price tier that fits your results.
            </p>
          </div>

          <div className="ctx">
            <div className="ctxq">
              <label>How much do you want us to handle?</label>
              <div className="ctxopts">
                {SUPPORT_OPTIONS.map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    className={supportPref === o.key ? "on" : ""}
                    onClick={() => setSupportPref(o.key)}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="ctxq">
              <label>How much team can you put toward this?</label>
              <div className="ctxopts">
                {CAPACITY_OPTIONS.map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    className={capacity === o.key ? "on" : ""}
                    onClick={() => setCapacity(o.key)}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="ctxq">
              <label>Roughly, what does the business do in a year?</label>
              <p className="ctx-help">
                We use this only to recommend a package you can comfortably afford, never to charge
                more. A healthy marketing budget is about 7–10% of revenue, so this keeps our
                recommendation right-sized for your stage.
              </p>
              <div className="ctxopts">
                {REVENUE_OPTIONS.map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    className={revenue === o.key ? "on" : ""}
                    onClick={() => setRevenue(o.key)}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {status !== "sent" && (
            <form className="cform" onSubmit={handleSubmit}>
              <div className="cfield">
                <label>Your name</label>
                <input type="text" required placeholder="Jane Smith" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
              </div>
              <div className="cfield">
                <label>Email</label>
                <input type="email" required placeholder="jane@yourbusiness.com" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
              </div>
              <div className="cfield">
                <label>Business name (optional)</label>
                <input type="text" placeholder="Your business name" value={form.business} onChange={(e) => setForm((f) => ({ ...f, business: e.target.value }))} />
              </div>
              <button type="submit" className="btn" style={{ background: "var(--moss)", color: "#fff", border: "1.5px solid var(--moss)", width: "100%" }} disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Email me my results"}
              </button>
            </form>
          )}

          {result && (
            <div className="rgrid" style={{ marginTop: 8 }}>
              <div className="sum-card">
                <span className="eyebrow">Your sample result</span>
                <p className="sum-score">Weighted Grid score: <b>{result.weightedPct}%</b></p>
                <div className="rec-two">
                  <div className="rec-line">
                    <span className="rec-lab">What the Grid says you need</span>
                    <span className="rec-val">{result.neededTier.replace("The ", "")}</span>
                  </div>
                  <div className="rec-line">
                    <span className="rec-lab">Where we'd start you</span>
                    <span className={`rec-val${result.grow ? "" : " rec-same"}`}>
                      {result.grow ? result.startTier.replace("The ", "") : "Same — it fits your stage"}
                    </span>
                  </div>
                </div>
                <p className="sum-read">
                  {result.grow
                    ? `A healthy marketing budget runs about 7–10% of revenue, so we'd start you at ${result.startTier.replace("The ", "")} and build toward the full plan as it pays for itself. Got the budget to invest more up front? We'll map that out together.`
                    : "That fits comfortably within a healthy marketing budget for your stage (about 7–10% of revenue)."}{" "}
                  This is a quick sample; for a limited time, the free deep diagnosis we run with you goes
                  across all 57 details and confirms the tier that truly fits. A copy is on its way to{" "}
                  {result.email}.
                </p>
                <a href="#contact" className="btn" style={{ background: "var(--moss)", color: "#fff", border: "1.5px solid var(--moss)", marginTop: 12 }}>
                  Book your free diagnosis →
                </a>
                <a href="#packages" style={{ display: "inline-block", marginTop: 10, marginLeft: 14, color: "var(--moss)", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                  See the packages ↓
                </a>
              </div>
              <div className="sum-card">
                <span className="eyebrow">Your {PILLARS.length}-pillar breakdown</span>
                <div className="rlist">
                  {result.breakdown.map((b) => (
                    <div className="rrow" key={b.pillar}>
                      <span className="rdot" style={{ background: tierColor[b.tier] }} />
                      <span className="rname">{b.pillar}</span>
                      <span className="rtier" style={{ color: tierColor[b.tier] }}>{b.tier}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
