import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./portal-demo.css";

// Sample client portal shown from the portfolio. Every name, file, and date here is made up.

const FONT_HREF = "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Work+Sans:wght@400;500;600&display=swap";

const TABS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "conversations", label: "Conversations" },
  { id: "documents", label: "Documents" },
  { id: "meetings", label: "Meetings" },
];

const ACTIVITY = [
  { date: "Oct 10, 2026", title: "Homepage draft sent for review", body: "Check Conversations for the thread and attached preview link." },
  { date: "Oct 6, 2026", title: "Contract and deposit invoice uploaded", body: "Available now under Documents." },
  { date: "Oct 1, 2026", title: "Project kicked off", body: "Discovery call completed, scope confirmed." },
];

const HISTORY = [
  { date: "Oct 10, 2026", title: "Homepage draft sent for review", body: "First pass on layout and messaging — thread is open in Conversations." },
  { date: "Oct 6, 2026", title: "Contract and deposit invoice uploaded", body: "Available under Documents." },
  { date: "Oct 1, 2026", title: "Project kicked off", body: "Discovery call completed, scope confirmed." },
  { date: "Sep 24, 2026", title: "Discovery call scheduled", body: "Booked through Meetings.", muted: true },
];

const STAGES = ["Discovery", "Design", "Build", "Review", "Launch"];
const CURRENT_STAGE = 2;

const THREADS = [
  {
    id: "homepage",
    title: "Homepage draft feedback",
    date: "Oct 10",
    unread: true,
    messages: [
      { from: "Jordan", time: "9:14 AM", text: "Here's the first pass on the homepage — let me know what you think of the layout before we move to the inner pages." },
      { from: "You", time: "10:02 AM", text: "Looks great! Can we make the headline a little bigger?" },
      { from: "Jordan", time: "10:40 AM", text: "Done — updated version is attached to this thread in your inbox." },
    ],
  },
  {
    id: "invoice",
    title: "Deposit invoice",
    date: "Oct 6",
    messages: [
      { from: "Jordan", time: "8:30 AM", text: "The contract and deposit invoice are both up under Documents. No rush, whenever you're ready." },
      { from: "You", time: "1:15 PM", text: "Just sent the payment, thank you!" },
    ],
  },
  {
    id: "kickoff",
    title: "Kickoff recap",
    date: "Oct 1",
    messages: [
      { from: "Jordan", time: "11:05 AM", text: "Great call today — recap and next steps: we'll have a homepage draft to you by Oct 10, then move through the inner pages." },
    ],
  },
];

const DOCS = [
  { name: "Service agreement.pdf", cat: "Contract", by: "Jordan", date: "Oct 1, 2026" },
  { name: "Deposit invoice.pdf", cat: "Invoice", by: "Jordan", date: "Oct 6, 2026" },
  { name: "Homepage draft v1.pdf", cat: "Deliverable", by: "Jordan", date: "Oct 10, 2026" },
  { name: "Brand assets.zip", cat: "Deliverable", by: "You", date: "Sep 29, 2026" },
];
const DOC_FILTERS = [
  { label: "All", cat: null },
  { label: "Contracts", cat: "Contract" },
  { label: "Invoices", cat: "Invoice" },
  { label: "Deliverables", cat: "Deliverable" },
];

const PAST_MEETINGS = [
  { title: "Kickoff call", when: "Oct 1, 2026 · 10:00 AM" },
  { title: "Discovery call", when: "Sep 24, 2026 · 1:00 PM" },
];

function Pin({ className = "pd-pin" }) {
  return (
    <svg className={className} width="12" height="32" viewBox="0 0 12 32" aria-hidden="true">
      <line x1="6" y1="10" x2="6" y2="31" stroke="var(--pd-moss)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="6" cy="6" r="5" fill="var(--pd-rose)" />
    </svg>
  );
}

const Icon = {
  chat: <path d="M4 5h16v11H9l-5 4z" />,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /></>,
  cal: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></>,
  pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  down: <path d="M12 4v12M7 11l5 5 5-5M5 20h14" />,
  back: <path d="M15 6l-6 6 6 6" />,
  check: <path d="M5 12l5 5L20 7" />,
};
function Ic({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {Icon[name]}
    </svg>
  );
}

function Timeline({ items }) {
  return (
    <ol className="pd-timeline">
      {items.map((it) => (
        <li key={it.title} className={it.muted ? "muted" : ""}>
          <span className="pd-tl-date">{it.date}</span>
          <strong>{it.title}</strong>
          <p>{it.body}</p>
        </li>
      ))}
    </ol>
  );
}

function Login({ onSignIn }) {
  return (
    <div className="pd-login">
      <header className="pd-login-top">
        <span className="pd-brand"><Pin />Gardner Solutions</span>
        <a href="/#contact">Need help? Contact us</a>
      </header>
      <form className="pd-login-card" onSubmit={(e) => { e.preventDefault(); onSignIn(); }}>
        <span className="pd-eyebrow">Client portal</span>
        <h1>Welcome <em>back</em>.</h1>
        <p className="pd-muted">Sign in to see where your project stands.</p>
        <label>Email<input type="email" defaultValue="jamie@brightmindstutoring.com" /></label>
        <label>Password<input type="password" defaultValue="demo1234" /></label>
        <div className="pd-login-row">
          <label className="pd-check"><input type="checkbox" /> Remember me</label>
          <button type="button" className="pd-link">Forgot password?</button>
        </div>
        <button type="submit" className="pd-btn pd-btn-lg">Sign in</button>
        <p className="pd-muted pd-small pd-center">This is a demo, so just press Sign in.</p>
      </form>
      <div className="pd-flowers" aria-hidden="true"><Pin /><Pin className="pd-pin pd-pin-sm" /><Pin /></div>
    </div>
  );
}

function Dashboard({ go }) {
  const tiles = [
    { icon: "chat", title: "Conversations", sub: "3 new replies", to: "conversations" },
    { icon: "doc", title: "Documents", sub: `${DOCS.length} files`, to: "documents" },
    { icon: "cal", title: "Meetings", sub: "Next: Oct 16, 2:00 PM", to: "meetings" },
    { icon: "pulse", title: "Status updates", sub: "Updated 2 days ago", to: "status" },
  ];
  return (
    <div className="pd-page">
      <span className="pd-eyebrow">Your project</span>
      <h1 className="pd-hero">Your website redesign is <em>in progress</em>.</h1>
      <div className="pd-card pd-summary">
        <div><span>Project</span><strong className="pd-serif">Website Redesign</strong></div>
        <div><span>Status</span><span className="pd-status">In Progress</span></div>
        <div><span>Target date</span><b>Nov 14, 2026</b></div>
        <div><span>Working with</span><b>Jordan · Gardner Solutions</b></div>
      </div>
      <div className="pd-tiles">
        {tiles.map((t) => (
          <button key={t.title} type="button" className="pd-card pd-tile" onClick={() => go(t.to)}>
            <Ic name={t.icon} />
            <strong>{t.title}</strong>
            <span>{t.sub}</span>
          </button>
        ))}
      </div>
      <h2 className="pd-h2">Recent activity</h2>
      <Timeline items={ACTIVITY} />
    </div>
  );
}

function Status({ go }) {
  return (
    <div className="pd-page">
      <button type="button" className="pd-back" onClick={() => go("dashboard")}><Ic name="back" size={16} />Dashboard</button>
      <div className="pd-page-head">
        <div>
          <span className="pd-eyebrow">Project status</span>
          <h1 className="pd-title">Website Redesign</h1>
        </div>
        <span className="pd-status">In Progress</span>
      </div>
      <div className="pd-card pd-summary pd-summary-even">
        <div><span>Package</span><b>The Full Experience · Website</b></div>
        <div><span>Started</span><b>Oct 1, 2026</b></div>
        <div><span>Target date</span><b>Nov 14, 2026</b></div>
        <div><span>Working with</span><b>Jordan · Gardner Solutions</b></div>
      </div>
      <div className="pd-card pd-stages">
        <h2 className="pd-h2">Where things stand</h2>
        <ol style={{ "--pd-progress": `${((CURRENT_STAGE + 0.5) / STAGES.length) * 100}%` }}>
          {STAGES.map((s, i) => (
            <li key={s} className={i < CURRENT_STAGE ? "done" : i === CURRENT_STAGE ? "current" : ""}>
              <span className="pd-dot">{i < CURRENT_STAGE ? <Ic name="check" size={14} /> : i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </div>
      <h2 className="pd-h2">Status history</h2>
      <Timeline items={HISTORY} />
    </div>
  );
}

function Conversations() {
  const [activeId, setActiveId] = useState(THREADS[0].id);
  const [read, setRead] = useState({});
  const active = THREADS.find((t) => t.id === activeId);
  const open = (id) => { setActiveId(id); setRead((r) => ({ ...r, [id]: true })); };

  return (
    <div className="pd-convos">
      <aside>
        <h2 className="pd-title pd-title-sm">Conversations</h2>
        {THREADS.map((t) => {
          const last = t.messages[t.messages.length - 1];
          return (
            <button key={t.id} type="button" className={`pd-thread${t.id === activeId ? " active" : ""}`} onClick={() => open(t.id)}>
              <strong>{t.title}{t.unread && !read[t.id] && <i className="pd-unread" aria-label="Unread" />}</strong>
              <span className="pd-ellipsis">{last.from}: {last.text}</span>
              <span className="pd-small">{t.date}</span>
            </button>
          );
        })}
      </aside>
      <section>
        <h2 className="pd-title pd-title-sm">{active.title}</h2>
        <p className="pd-muted">You &amp; Jordan (Gardner Solutions)</p>
        <div className="pd-note">This conversation mirrors your email thread. Reply from your inbox and it'll show up here automatically — no need to type here.</div>
        {active.messages.map((m, i) => (
          <div key={i} className={`pd-msg${m.from === "You" ? " mine" : ""}`}>
            <p>{m.text}</p>
            <span>{m.from} · {m.time}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

function Documents({ notify }) {
  const [filter, setFilter] = useState(null);
  const rows = DOCS.filter((d) => !filter || d.cat === filter);
  return (
    <div className="pd-page">
      <div className="pd-page-head">
        <div>
          <h1 className="pd-title">Documents</h1>
          <p className="pd-muted">Contracts, invoices, and files shared on your project.</p>
        </div>
        <button type="button" className="pd-btn" onClick={() => notify("In a real portal, this opens a file picker and shares the upload with your team.")}>Upload document</button>
      </div>
      <div className="pd-filters">
        {DOC_FILTERS.map((f) => (
          <button key={f.label} type="button" className={filter === f.cat ? "active" : ""} onClick={() => setFilter(f.cat)}>{f.label}</button>
        ))}
      </div>
      <div className="pd-table">
        <div className="pd-row pd-row-head"><span>Name</span><span>Category</span><span>Uploaded by</span><span>Date</span><span /></div>
        {rows.map((d) => (
          <div key={d.name} className="pd-row">
            <span className="pd-docname"><Ic name="doc" size={20} />{d.name}</span>
            <span><span className="pd-chip">{d.cat}</span></span>
            <span className="pd-muted">{d.by}</span>
            <span className="pd-muted">{d.date}</span>
            <span><button type="button" className="pd-icon-btn" aria-label={`Download ${d.name}`} onClick={() => notify(`In a real portal, ${d.name} would download now.`)}><Ic name="down" size={18} /></button></span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Meetings({ notify }) {
  return (
    <div className="pd-page">
      <div className="pd-page-head">
        <h1 className="pd-title">Meetings</h1>
        <button type="button" className="pd-btn" onClick={() => notify("In a real portal, this opens your team's booking calendar.")}>Request a meeting</button>
      </div>
      <div className="pd-card pd-next">
        <div className="pd-date"><span>Oct</span><strong>16</strong></div>
        <div className="pd-next-info">
          <strong>Project check-in call</strong>
          <span className="pd-muted">2:00 PM – 2:30 PM · with Jordan, Gardner Solutions</span>
        </div>
        <div className="pd-next-actions">
          <button type="button" className="pd-btn-ghost" onClick={() => notify("In a real portal, this adds the call to your calendar.")}>Add to calendar</button>
          <button type="button" className="pd-btn-ghost" onClick={() => notify("In a real portal, this lets you pick a new time.")}>Reschedule</button>
        </div>
      </div>
      <h2 className="pd-h2">Past meetings</h2>
      <ul className="pd-past">
        {PAST_MEETINGS.map((m) => (
          <li key={m.title}>
            <div><strong>{m.title}</strong><span className="pd-muted">{m.when}</span></div>
            <span className="pd-done">Completed</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PortalDemo() {
  const [signedIn, setSignedIn] = useState(false);
  const [tab, setTab] = useState("dashboard");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
    const prevTitle = document.title;
    document.title = "Sample client portal · Gardner Solutions";
    return () => { link.remove(); document.title = prevTitle; };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const go = (id) => { setTab(id); window.scrollTo(0, 0); };
  const navTab = tab === "status" ? "dashboard" : tab;

  return (
    <div className="pd">
      <div className="pd-demo-bar">
        <span><b>Sample client portal.</b> Everything here is made up, so click around.</span>
        <Link to="/#work">← Back to Gardner Solutions</Link>
      </div>

      {!signedIn ? (
        <Login onSignIn={() => { setSignedIn(true); go("dashboard"); }} />
      ) : (
        <>
          <header className="pd-top">
            <span className="pd-brand"><Pin />Gardner Solutions</span>
            <div className="pd-account">
              <span className="pd-muted pd-client">Bright Minds Tutoring</span>
              <span className="pd-avatar">JS</span>
              <button type="button" className="pd-link" onClick={() => setSignedIn(false)}>Sign out</button>
            </div>
          </header>
          <nav className="pd-tabs" aria-label="Portal">
            {TABS.map((t) => (
              <button key={t.id} type="button" className={navTab === t.id ? "active" : ""} onClick={() => go(t.id)}>{t.label}</button>
            ))}
          </nav>
          <main>
            {tab === "dashboard" && <Dashboard go={go} />}
            {tab === "status" && <Status go={go} />}
            {tab === "conversations" && <Conversations />}
            {tab === "documents" && <Documents notify={setToast} />}
            {tab === "meetings" && <Meetings notify={setToast} />}
          </main>
        </>
      )}

      {toast && <div className="pd-toast" role="status">{toast}</div>}
    </div>
  );
}
