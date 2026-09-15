export default function BrandMark({ size = 30, leaf = "#4E8A57", leaf2 = "#2E5E3A" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 30c0-6-3-9-7-11 4-1 7 1 7 5" stroke={leaf} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 30c0-8 3-11 7-13-4-1-7 1-7 6" stroke={leaf2} strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="9" r="4.4" fill="#E0808F" />
      <circle cx="16" cy="9" r="1.8" fill="#E4A64A" />
    </svg>
  );
}
