import BrandMark from "../BrandMark.jsx";

export default function Differentiator() {
  return (
    <section id="approach" className="diff-band">
      <div className="wrap diff-in">
        <div className="diff-copy">
          <span className="eyebrow" style={{ color: "var(--rose)" }}>What makes us different</span>
          <h2>We're not a social media company.</h2>
          <p>
            Posting is a band-aid. Chasing followers and trends can pull a brand away from its story and
            bring in customers who don't stick around — and an inflated following can quietly hurt the
            engagement it looks like it's helping.
          </p>
          <p>
            We do the deeper work first: find the seed of why you started, get that message right, and let
            it grow through every part of your business, so your team knows the brand as well as you do.
            When social media genuinely fits your goals, we'll tend it too — right down to the photography,
            video, and posting.
          </p>
        </div>
        <div className="diff-seed" aria-hidden="true">
          <div className="seed-ring">
            <div className="seed-core">
              <BrandMark size={60} />
            </div>
          </div>
          <div className="seed-labels">
            <span className="sl sl1">Root · why you started</span>
            <span className="sl sl2">Message · what you stand for</span>
            <span className="sl sl3">Growth · every channel aligned</span>
          </div>
        </div>
      </div>
    </section>
  );
}
