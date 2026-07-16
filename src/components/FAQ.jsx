import { useState } from "react";

const faqGroups = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What is CS - Ticket System?",
        a: "It's a support ticket management app that helps teams track customer issues, manage active tasks, and resolve tickets faster — all in one clean, focused workspace.",
      },
      {
        q: "Do I need to install anything to use it?",
        a: "No. CS - Ticket System runs entirely in your browser. Just open the app and start creating tickets — no downloads or setup required.",
      },
      {
        q: "Is there a mobile or desktop app?",
        a: "Native apps are currently in development — check the Download Apps page for the latest status. In the meantime, the web app works great on any device.",
      },
    ],
  },
  {
    category: "Using Tickets",
    items: [
      {
        q: "How do I create a new ticket?",
        a: 'Click the "New Ticket" button in the navbar, or press N on your keyboard from anywhere in the app.',
      },
      {
        q: "Can I assign a ticket to a specific agent?",
        a: "Yes. Open any ticket's detail view and use the assign option to pick an agent from your team list.",
      },
      {
        q: "How do I filter or search tickets?",
        a: "Use the search bar to find tickets by keyword, and the priority/status filters to narrow the list down further. You can also sort by newest, oldest, or priority.",
      },
      {
        q: "Where does my ticket data get saved?",
        a: "Tickets, tasks, and notes are saved locally in your browser, so your data persists between visits on the same device.",
      },
    ],
  },
  {
    category: "Account & Data",
    items: [
      {
        q: "Is my data shared with anyone?",
        a: "No. We don't sell your personal information. See the Privacy Policy page for full details on how your data is handled.",
      },
      {
        q: "Can I export my tickets?",
        a: "Yes, use the CSV export option to download all your tickets for reporting or backup purposes.",
      },
      {
        q: "How do I switch between light and dark mode?",
        a: "Use the theme toggle in the navbar. Your preference is remembered automatically the next time you visit.",
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        q: "I found a bug — how do I report it?",
        a: "Reach out to us at support@cst.com with a description of what happened, and we'll take a look.",
      },
      {
        q: "Do you offer support for teams and businesses?",
        a: "Yes — visit the Contact Sales page to talk to us about team plans and onboarding.",
      },
    ],
  },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className="rounded-xl border"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span
          className="text-[0.98rem] font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          {q}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: "var(--text-muted)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div
          className="border-t px-5 py-4 text-[0.9rem] leading-relaxed"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-secondary)",
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

function FAQ({ onBack }) {
  const [openKey, setOpenKey] = useState(null);
  const [search, setSearch] = useState("");

  const filteredGroups = faqGroups
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-base)",
        color: "var(--text-primary)",
      }}
    >
      {/* Back button */}
      <div className="mx-auto max-w-3xl px-5 pt-10 sm:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition-colors hover:opacity-80"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-secondary)",
          }}
        >
          ← Back to Home
        </button>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
          style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        >
          FAQ
        </div>
        <h1 className="text-[clamp(2rem,1.8vw+1.4rem,3rem)] font-bold tracking-tight">
          Frequently asked questions
        </h1>
        <p
          className="mt-4 mx-auto max-w-[55ch] text-[clamp(0.95rem,0.3vw+0.85rem,1.1rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Can't find what you're looking for? Reach out to us at{" "}
          <span style={{ color: "var(--accent)" }}>support@cst.com</span>.
        </p>

        {/* Search */}
        <div className="relative mt-8 mx-auto max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
            style={{ color: "var(--text-muted)" }}
          >
            <circle cx="11" cy="11" r="8" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-lg border py-2.5 pl-9 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-[#632EE3]/20 focus:border-[#632EE3]"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--input-border)",
              color: "var(--text-primary)",
            }}
          />
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        {filteredGroups.length === 0 ? (
          <p
            className="text-center text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            No questions match your search.
          </p>
        ) : (
          <div className="flex flex-col gap-10">
            {filteredGroups.map((group) => (
              <div key={group.category}>
                <h2
                  className="text-[1.1rem] font-semibold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {group.category}
                </h2>
                <div className="flex flex-col gap-2.5">
                  {group.items.map((item) => {
                    const key = `${group.category}-${item.q}`;
                    return (
                      <FaqItem
                        key={key}
                        q={item.q}
                        a={item.a}
                        isOpen={openKey === key}
                        onToggle={() =>
                          setOpenKey(openKey === key ? null : key)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default FAQ;
