const stories = [
  {
    name: "Aiden Clark",
    role: "Support Lead",
    company: "Northwind Retail",
    initials: "AC",
    quote:
      "Our average resolution time dropped by 40% within the first month. The team finally has one place to track every ticket from open to resolved.",
    metric: "40% faster resolutions",
  },
  {
    name: "Mia Rodriguez",
    role: "Head of Customer Success",
    company: "Brightline Software",
    initials: "MR",
    quote:
      "Assigning tickets to the right agent used to be a guessing game. Now everyone knows exactly what they own and what's next.",
    metric: "2x agent accountability",
  },
  {
    name: "Noah Bennett",
    role: "Operations Manager",
    company: "Harbor Logistics",
    initials: "NB",
    quote:
      "The CSV export alone saved us hours every week during reporting season. It's the small details that make this tool feel built for real teams.",
    metric: "5+ hours saved weekly",
  },
  {
    name: "Lily Morgan",
    role: "Support Specialist",
    company: "Fernwood Studio",
    initials: "LM",
    quote:
      "Notes and priority filters keep our small team organized even during high-volume weeks. It genuinely feels lighter to use than anything we tried before.",
    metric: "3x ticket throughput",
  },
  {
    name: "Ethan Foster",
    role: "IT Director",
    company: "Cascade Health",
    initials: "EF",
    quote:
      "Dark mode and keyboard shortcuts sound minor until your team is in the queue for eight hours straight. Little things add up to a lot less fatigue.",
    metric: "98% team satisfaction",
  },
  {
    name: "Sofia Nguyen",
    role: "Customer Experience Lead",
    company: "Lumen Analytics",
    initials: "SN",
    quote:
      "We rolled this out to three regional teams in a single afternoon. No training decks needed — the interface just makes sense.",
    metric: "Same-day rollout",
  },
];

function CustomerStories({ onBack }) {
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
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition-colors hover:opacity-80"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-secondary)",
          }}
        >
          ← Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
          style={{
            backgroundColor: "var(--accent)",
            color: "#fff",
            opacity: 0.9,
          }}
        >
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          Customer Stories
        </div>
        <h1 className="text-[clamp(2.2rem,2vw+1.5rem,3.5rem)] font-bold tracking-tight">
          Real teams, real results
        </h1>
        <p
          className="mt-5 mx-auto max-w-[60ch] text-[clamp(1rem,0.3vw+0.9rem,1.25rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          See how support teams of every size use CS - Ticket System to resolve
          issues faster, stay organized, and keep customers happy.
        </p>
      </section>

      {/* Impact Stats */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { number: "850+", label: "Teams Onboarded" },
              { number: "40%", label: "Avg. Faster Resolutions" },
              { number: "4.8★", label: "Avg. Customer Rating" },
              { number: "12K+", label: "Tickets Resolved" },
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

      {/* Story Cards */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h2 className="text-center text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold">
          What Our Customers Are Saying
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.name}
              className="flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                className="mb-4 inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: "var(--bg-base)",
                  color: "var(--accent)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {story.metric}
              </div>
              <p
                className="flex-1 text-[0.95rem] leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                “{story.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {story.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {story.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {story.role}, {story.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <h2 className="text-[clamp(1.4rem,0.8vw+1.1rem,2rem)] font-semibold">
            Ready to write your own success story?
          </h2>
          <p
            className="mt-3 mx-auto max-w-[55ch] text-[clamp(1rem,0.2vw+0.9rem,1.1rem)]"
            style={{ color: "var(--text-secondary)" }}
          >
            Join hundreds of support teams already using CS - Ticket System to
            resolve tickets faster and keep customers happy.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBack}
              className="rounded-xl px-8 py-3 font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Get Started
            </button>
            <button
              onClick={onBack}
              className="rounded-xl border px-8 py-3 font-medium transition hover:opacity-80"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerStories;
