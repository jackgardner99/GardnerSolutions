export default function Plant({ tier, scale = 1, className = "" }) {
  let head = null;
  if (tier === "Low") {
    head = (
      <>
        <path d="M32 40 C28 34 29 27 32 24 C35 27 36 34 32 40Z" fill="#C98B93" />
        <path d="M32 40 C30 36 30 30 32 26" stroke="#b06b76" strokeWidth="1.2" fill="none" />
      </>
    );
  } else if (tier === "Medium") {
    head = (
      <g>
        <ellipse cx="32" cy="24" rx="7" ry="10" fill="#E9BE8C" />
        <path d="M25 26 C26 18 30 13 32 12 C34 13 38 18 39 26 C36 22 28 22 25 26Z" fill="#E4A64A" />
        <circle cx="32" cy="24" r="3" fill="#c98a2f" />
      </g>
    );
  } else {
    const petals = [];
    for (let i = 0; i < 6; i++) {
      petals.push(
        <ellipse
          key={i}
          cx="32" cy="14" rx="6" ry="11" fill="#E0808F"
          transform={`rotate(${i * 60} 32 24)`}
        />
      );
    }
    head = (
      <g>
        {petals}
        <circle cx="32" cy="24" r="6.4" fill="#E4A64A" />
        <circle cx="32" cy="24" r="3" fill="#c98a2f" />
      </g>
    );
  }

  return (
    <svg
      className={className}
      width={64 * scale}
      height={84 * scale}
      viewBox="0 0 64 88"
      fill="none"
      aria-hidden="true"
    >
      <path d="M32 82 C32 60 32 52 32 40" stroke="#4E8A57" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <path d="M32 62 C24 60 19 54 18 47 C26 47 31 52 32 60Z" fill="#6BA46F" />
      <path d="M32 54 C40 52 45 46 46 39 C38 39 33 44 32 52Z" fill="#4E8A57" />
      {head}
    </svg>
  );
}
