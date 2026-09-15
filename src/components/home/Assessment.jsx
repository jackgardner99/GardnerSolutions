import { useMemo, useState } from "react";
import { PILLARS, TIERS, SCORE } from "../../data/pillars.js";
import Plant from "../Plant.jsx";
import { scrollToId } from "../../utils/scrollTo.js";

export default function Assessment() {
  const [answers, setAnswers] = useState(() => PILLARS.map((p) => p.state));

  const tierOf = (i) => TIERS[answers[i]];

  const pick = (i, ti) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = ti;
      return next;
    });
  };

  const avg = useMemo(
    () => answers.reduce((a, s) => a + SCORE[TIERS[s]], 0) / answers.length,
    [answers]
  );
  const pct = (avg / 5) * 100;
  let overallTier = "Low";
  if (avg > 3.4) overallTier = "High";
  else if (avg > 2.4) overallTier = "Medium";

  const lows = PILLARS.filter((_, i) => tierOf(i) === "Low").map((p) => p.name);
  const strengths = PILLARS.filter((_, i) => tierOf(i) === "High").map((p) => p.name);
  let readout = `Averaging ${avg.toFixed(1)} of 5 across eight areas. `;
  if (strengths.length) readout += `Blooming already in ${strengths.join(", ")}. `;
  if (lows.length) readout += `The biggest room to grow: ${lows.slice(0, 3).join(", ")}${lows.length > 3 ? ", and more" : ""}.`;

  return (
    <>
      <section id="quiz" className="quiz-band">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">A taste of the assessment</span>
            <h2>Where are you growing?</h2>
            <p>
              This is a quick <b>sample</b> — one question per area, pre-filled with an example wellness
              shop, <b>Willow &amp; Sage</b>. Change any answer and watch the garden shift. The real
              assessment we run <b>with you</b> goes deeper across all 43 sub-areas and is built entirely
              around your business — <a href="#contact" style={{ color: "var(--moss)", fontWeight: 700 }}>book yours free →</a>
            </p>
          </div>
          <div className="qgrid">
            {PILLARS.map((p, i) => (
              <div className="qcard" key={p.id}>
                <div className="qtop">
                  <span className={`pill-tag t-${p.type}`}>{p.type}</span>
                  <span className="eyebrow" style={{ color: "var(--ink-soft)", letterSpacing: ".1em" }}>Area {p.id}</span>
                </div>
                <h3>{p.name} — <span style={{ fontWeight: 400, color: "var(--ink-soft)" }}>{p.question}</span></h3>
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
            <button className="btn btn-solid" onClick={() => scrollToId("results")}>Grow my garden ↓</button>
            <span className="hint">Your garden below updates as you choose.</span>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Sample · your standing</span>
            <h2>Your garden today</h2>
            <p>In the real assessment, this is your overall standing across all seven areas — a clear, measured read on exactly where your business is. Here it's illustrated with our sample shop.</p>
          </div>
          <div className="summary">
            <div className="sum-card">
              <span className="eyebrow">Overall Glow-Up</span>
              <div className="sum-tier">{overallTier}</div>
              <p className="sum-read">{readout}</p>
              <div className="meter"><i style={{ right: `${100 - pct}%` }} /></div>
              <div className="meter-scale"><span>Low</span><span>Medium</span><span>High</span></div>
            </div>
            <div className="legend">
              <h4>Three rating levels</h4>
              <div className="legrow">
                <span className="stg"><Plant tier="Low" scale={0.5} /></span>
                <div><b style={{ color: "var(--low)" }}>Low</b><span> — ad hoc, thin, or missing.</span></div>
              </div>
              <div className="legrow">
                <span className="stg"><Plant tier="Medium" scale={0.5} /></span>
                <div><b style={{ color: "var(--med)" }}>Medium</b><span> — consistent, but still reactive.</span></div>
              </div>
              <div className="legrow">
                <span className="stg"><Plant tier="High" scale={0.5} /></span>
                <div><b style={{ color: "var(--high)" }}>High</b><span> — coordinated and compounding.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="glowup" className="glow-band">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Sample · what comes next</span>
            <h2>This is where you stand. Then we go to work.</h2>
            <p>The sample above shows how we measure a business. The valuable part comes next: the tailored recommendations and the roadmap to close the gap — built around your business, in the real assessment.</p>
          </div>
          <div style={{ textAlign: "center", marginTop: 8, padding: 26, background: "var(--card)", border: "1px solid var(--sage)", borderRadius: "var(--r)", boxShadow: "var(--shadow)" }}>
            <p style={{ fontSize: "16.5px", color: "var(--ink)", maxWidth: "62ch", margin: "0 auto 16px" }}>
              Your free assessment is personalized, goes deeper across all 43 sub-areas, and ends with clear,
              tailored recommendations — and we walk you through every step together.
            </p>
            <button className="btn btn-solid" onClick={() => scrollToId("contact")}>Book your free assessment</button>
          </div>
        </div>
      </section>
    </>
  );
}
