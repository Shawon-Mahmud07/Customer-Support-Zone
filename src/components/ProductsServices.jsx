const products = [
  {
    icon: "🎫",
    name: "Ticket Manager",
    badge: "Core",
    badgeColor: "#632EE3",
    desc: "Create, track, and resolve customer support tickets with a clean and focused interface. Prioritize by urgency, assign to agents, and never lose track of an issue.",
    features: [
      "Priority levels (High/Medium/Low)",
      "Status tracking (Open → In-Progress → Resolved)",
      "Ticket assignment to agents",
      "Inline edit & confirm delete",
    ],
  },
  {
    icon: "📝",
    name: "Notes & Comments",
    badge: "Pro",
    badgeColor: "#08A63E",
    desc: "Add internal notes to any ticket — visible only to your team. Keep context, log updates, and collaborate without cluttering the customer view.",
    features: [
      "Per-ticket note threads",
      "Timestamped entries",
      "Instant delete",
      "Persisted in localStorage",
    ],
  },
  {
    icon: "📊",
    name: "Dashboard Analytics",
    badge: "Core",
    badgeColor: "#632EE3",
    desc: "Get a real-time birds-eye view of your support queue. See how tickets are distributed across statuses and priorities at a glance.",
    features: [
      "Status breakdown (Open/In-Progress/Resolved)",
      "Priority breakdown (High/Medium/Low)",
      "Progress bars with percentages",
      "Smart high-priority alerts",
    ],
  },
  {
    icon: "📤",
    name: "CSV Export",
    badge: "Pro",
    badgeColor: "#08A63E",
    desc: "Export your entire ticket database — including open, in-progress, and resolved — into a clean CSV file ready for reporting or analysis.",
    features: [
      "All ticket statuses included",
      "Date-stamped filenames",
      "One-click download",
      "Compatible with Excel & Sheets",
    ],
  },
  {
    icon: "🌙",
    name: "Dark Mode",
    badge: "Core",
    badgeColor: "#632EE3",
    desc: "Switch between light and dark themes with a single click. Your preference is saved automatically and persists across sessions.",
    features: [
      "Smooth theme transition",
      "localStorage persistence",
      "Keyboard shortcut (D)",
      "Full component coverage",
    ],
  },
  {
    icon: "👤",
    name: "Agent Assignment",
    badge: "Pro",
    badgeColor: "#08A63E",
    desc: "Assign any ticket to a specific team member. See who's responsible at a glance from the ticket card, and reassign with one click.",
    features: [
      "5-agent roster support",
      "Visual initials badges",
      "One-click assign/unassign",
      "Visible on ticket cards",
    ],
  },
];

const services = [
  {
    icon: "⚡",
    title: "Instant Setup",
    desc: "Get your team up and running in minutes — no configuration, no DevOps. Just open and go.",
  },
  {
    icon: "🔒",
    title: "Data Privacy",
    desc: "All your data stays local in the browser. No servers, no third-party tracking, no surprises.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "Works seamlessly on desktop, tablet, and mobile. Your team can manage tickets from anywhere.",
  },
  {
    icon: "🎨",
    title: "Custom Theming",
    desc: "Light and dark mode out of the box, with CSS variables making further customization straightforward.",
  },
  {
    icon: "⌨️",
    title: "Keyboard Shortcuts",
    desc: "Power users love speed. Use N to create tickets, D to toggle dark mode, and Esc to close modals.",
  },
  {
    icon: "🔄",
    title: "Always Up to Date",
    desc: "localStorage persistence means your data is always there — no login required, no sync delays.",
  },
];

function ProductsServices({ onBack }) {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-base)",
        color: "var(--text-primary)",
      }}
    >
      {/* Back button */}
      <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition hover:opacity-80"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-secondary)",
          }}
        >
          ← Back to Home
        </button>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
          style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        >
          🚀 Products & Services
        </div>
        <h1 className="text-[clamp(2.2rem,2vw+1.5rem,3.5rem)] font-bold tracking-tight">
          Everything Your Support Team Needs
        </h1>
        <p
          className="mt-5 mx-auto max-w-[58ch] text-[clamp(1rem,0.3vw+0.9rem,1.25rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          CS - Ticket System is packed with powerful features to help your team
          stay organized, move faster, and deliver better support — all in one
          place.
        </p>

        {/* Badge legend */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <span
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
              style={{ backgroundColor: "#632EE3" }}
            >
              Core
            </span>
            Free forever
          </span>
          <span
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
              style={{ backgroundColor: "#08A63E" }}
            >
              Pro
            </span>
            Pro plan
          </span>
        </div>
      </section>

      {/* Products Grid */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-center text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold mb-10">
            Our Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl p-6 flex flex-col transition hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--bg-base)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{product.icon}</span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
                    style={{ backgroundColor: product.badgeColor }}
                  >
                    {product.badge}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {product.name}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {product.desc}
                </p>

                {/* Feature list */}
                <ul className="mt-4 space-y-1.5">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: "var(--accent)" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h2 className="text-center text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold mb-10">
          Our Services
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-5 flex gap-4 items-start transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span className="text-3xl shrink-0">{service.icon}</span>
              <div>
                <h3
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-14"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { number: "6+", label: "Core Products" },
              { number: "12K+", label: "Tickets Managed" },
              { number: "500+", label: "Teams Using CST" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 text-center"
                style={{
                  backgroundColor: "var(--bg-base)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <p
                  className="text-[clamp(1.6rem,1vw+1.2rem,2.2rem)] font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.number}
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 text-center">
        <h2 className="text-[clamp(1.4rem,0.8vw+1.1rem,2rem)] font-semibold">
          Ready to Get Started?
        </h2>
        <p
          className="mt-3 text-[clamp(1rem,0.2vw+0.9rem,1.1rem)]"
          style={{ color: "var(--text-secondary)" }}
        >
          All core features are free. Upgrade to Pro for advanced tools.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onBack}
            className="rounded-xl px-8 py-3 font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Start Using CST →
          </button>
          <button
            onClick={onBack}
            className="rounded-xl border px-8 py-3 font-medium transition hover:opacity-80"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--text-secondary)",
            }}
          >
            View Pricing
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductsServices;
