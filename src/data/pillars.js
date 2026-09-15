export const PILLARS = [
  {
    id: 1, name: "Governance & Strategy", type: "Manage",
    question: "How planned is your online engagement?",
    option: [
      "We post and react as we go — no real plan or budget.",
      "We have a rough plan, a budget, and someone who owns it.",
      "We run to clear goals, funded priorities, and standards.",
    ],
    low: "No real plan; social activity is ad hoc, unbudgeted, and unowned.",
    medium: "A basic plan, budget, and clear owner exist and mostly guide the work.",
    high: "A living strategy with clear goals, funded priorities, defined roles, and standards steering every channel.",
    state: 1,
  },
  {
    id: 2, name: "Brand Storytelling", type: "Deliver",
    question: "How well is your story told?",
    option: [
      "Our messaging is inconsistent and pretty generic.",
      "We have a recognizable brand that shows up across channels.",
      "A distinctive, well-told story with rich photos, video, and voice.",
    ],
    low: "No clear brand story; messaging is inconsistent and generic.",
    medium: "A recognizable brand and story exist and show up across channels.",
    high: "A distinctive, well-told story with rich assets that make the brand memorable.",
    state: 1,
  },
  {
    id: 3, name: "Social Media", type: "Deliver",
    question: "How's your social presence?",
    option: [
      "Sporadic posts, not much engagement.",
      "Regular posting with some replies and interaction.",
      "Coordinated, data-informed, with a real community.",
    ],
    low: "Sporadic posting on a channel or two, with little engagement.",
    medium: "Regular posting on chosen channels with some community interaction.",
    high: "A coordinated, data-informed presence that builds community, reach, and reputation.",
    state: 0,
  },
  {
    id: 4, name: "Website", type: "Deliver",
    question: "How's your website?",
    option: [
      "Outdated brochure page, or none at all.",
      "Functional and current — it represents us and sells online.",
      "Polished and optimized; it converts visitors and ranks well.",
    ],
    low: "No site, or an outdated brochure page.",
    medium: "A functional, current site that represents the brand and sells online.",
    high: "A polished, optimized site that converts, ranks well, and sells smoothly.",
    state: 1,
  },
  {
    id: 5, name: "Customer Portals & Data", type: "Deliver",
    question: "Do customers have a logged-in space?",
    option: [
      "No portal; customer data is scattered around.",
      "Basic login, booking, and data handling in place.",
      "Secure, integrated portal that deepens the relationship.",
    ],
    low: "No portal; customer data is scattered or unmanaged.",
    medium: "A working portal with basic login, booking, and data handling.",
    high: "A secure, well-integrated portal that deepens customer relationships.",
    state: 0,
  },
  {
    id: 6, name: "Email & Lifecycle", type: "Deliver",
    question: "How do you use email and texts?",
    option: [
      "No program — our audience is basically untapped.",
      "Regular sends, but manual and one-size-fits-all.",
      "Segmented, automated flows that drive repeat sales.",
    ],
    low: "No email or SMS program; the owned audience is untapped.",
    medium: "Regular sends to a growing list, but mostly manual and one-size-fits-all.",
    high: "A segmented, automated lifecycle program that drives repeat revenue on autopilot.",
    state: 0,
  },
  {
    id: 7, name: "Community & Partnerships", type: "Deliver",
    question: "How present are you in your community?",
    option: [
      "Little presence beyond our own channels; no partnerships.",
      "Some events and a partnership or two.",
      "Active presence and strategic partnerships that extend reach.",
    ],
    low: "Little presence beyond owned channels; no partnerships.",
    medium: "Some events and a partnership or two.",
    high: "Active community presence and strategic partnerships that extend reach.",
    state: 1,
  },
  {
    id: 8, name: "Reporting & Analytics", type: "Enable",
    question: "Do you measure what's working?",
    option: [
      "No measurement — we mostly guess.",
      "Basic metrics, reviewed now and then.",
      "Clear KPIs and dashboards; decisions follow the data.",
    ],
    low: "No measurement; decisions are guesswork.",
    medium: "Basic metrics tracked and reviewed occasionally.",
    high: "Clear KPIs, dashboards, and insight-driven decisions.",
    state: 0,
  },
];

export const TIERS = ["Low", "Medium", "High"];
export const SCORE = { Low: 2, Medium: 3, High: 5 };
