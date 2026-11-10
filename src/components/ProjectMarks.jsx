/**
 * Custom SVG marks for projects that don't have their own logo.
 * All drawn on a 120x120 grid in the site palette (green / gold / cream) so cards stay consistent.
 */
const G = "#1F3D2E";
const GOLD = "#F2A93A";
const CREAM = "#FBF9F6";

const common = { viewBox: "0 0 120 120", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };

const MARKS = {
  // Placeholder mark for Dueora (no app icon found yet): a "D" with a due-time clock hand.
  dueora: (
    <svg {...common}>
      <rect x="8" y="8" width="104" height="104" rx="28" fill={G} />
      <path d="M40 32h18a28 28 0 0 1 0 56H40z" stroke={CREAM} strokeWidth="8" />
      <path d="M58 46v14l10 7" stroke={GOLD} strokeWidth="7" />
      <circle cx="86" cy="34" r="7" fill={GOLD} />
    </svg>
  ),
  harmonyhub: (
    <svg {...common}>
      <circle cx="60" cy="60" r="50" fill={G} />
      <path d="M50 78V40l30-8v38" stroke={CREAM} strokeWidth="6" />
      <circle cx="43" cy="79" r="9" fill={GOLD} />
      <circle cx="73" cy="71" r="9" fill={GOLD} />
      <path d="M22 60c6-8 10-8 16 0M82 60c6-8 10-8 16 0" stroke={GOLD} strokeWidth="4" opacity=".7" />
    </svg>
  ),
  mat77: (
    <svg {...common}>
      <rect x="10" y="10" width="100" height="100" rx="22" fill={G} />
      <path d="M26 84V38l17 24 17-24v46" stroke={CREAM} strokeWidth="7" />
      <path d="M70 40h20L76 84M84 62h10" stroke={GOLD} strokeWidth="7" />
    </svg>
  ),
  medhub: (
    <svg {...common}>
      <rect x="10" y="10" width="100" height="100" rx="30" fill={G} />
      <path d="M50 28h20v22h22v20H70v22H50V70H28V50h22z" fill={CREAM} />
      <path d="M20 62h18l6-10 8 20 6-10h44" stroke={GOLD} strokeWidth="5" />
    </svg>
  ),
  xyshop: (
    <svg {...common}>
      <circle cx="60" cy="60" r="50" fill={G} />
      <path d="M34 46h52l-5 44H39z" fill={CREAM} />
      <path d="M46 52V40a14 14 0 0 1 28 0v12" stroke={GOLD} strokeWidth="6" />
      <text x="60" y="80" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="18" fill={G}>XY</text>
    </svg>
  ),
  stock: (
    <svg {...common}>
      <rect x="10" y="10" width="100" height="100" rx="24" fill={G} />
      <rect x="26" y="62" width="20" height="28" rx="4" fill={CREAM} />
      <rect x="50" y="46" width="20" height="44" rx="4" fill={CREAM} />
      <rect x="74" y="30" width="20" height="60" rx="4" fill={GOLD} />
      <path d="M26 46l20-12 16 8 26-16" stroke={GOLD} strokeWidth="4" opacity=".8" />
    </svg>
  ),
  voting: (
    <svg {...common}>
      <circle cx="60" cy="60" r="50" fill={G} />
      <rect x="28" y="56" width="64" height="36" rx="6" fill={CREAM} />
      <rect x="44" y="52" width="32" height="6" rx="3" fill={G} />
      <rect x="46" y="24" width="28" height="34" rx="4" fill={GOLD} />
      <path d="M53 40l5 5 10-11" stroke={G} strokeWidth="5" />
    </svg>
  ),
  employee: (
    <svg {...common}>
      <rect x="10" y="10" width="100" height="100" rx="24" fill={G} />
      <rect x="28" y="26" width="64" height="72" rx="10" fill={CREAM} />
      <rect x="50" y="20" width="20" height="12" rx="4" fill={GOLD} />
      <circle cx="60" cy="54" r="10" fill={G} />
      <path d="M42 84c2-10 10-14 18-14s16 4 18 14" fill={G} />
    </svg>
  ),
  password: (
    <svg {...common}>
      <circle cx="60" cy="60" r="50" fill={G} />
      <rect x="32" y="54" width="56" height="40" rx="8" fill={CREAM} />
      <path d="M44 54V44a16 16 0 0 1 32 0v10" stroke={GOLD} strokeWidth="7" />
      <g fill={G}>
        <circle cx="46" cy="74" r="4" /><circle cx="60" cy="74" r="4" /><circle cx="74" cy="74" r="4" />
      </g>
    </svg>
  ),
};

export default function ProjectMark({ mark, className = "" }) {
  return (
    <span className={className} aria-hidden="true">
      {MARKS[mark] || MARKS.dueora}
    </span>
  );
}
