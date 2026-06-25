function OurMission({ onBack }) {
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
        <h1 className="text-[clamp(2.2rem,2vw+1.5rem,3.5rem)] font-bold tracking-tight">
          Our Mission
        </h1>
        <p
          className="mt-5 mx-auto max-w-[60ch] text-[clamp(1rem,0.3vw+0.9rem,1.25rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Empowering support teams to deliver exceptional customer experiences
          through intuitive, reliable, and human-centered tools.
        </p>
      </section>

      {/* Core Mission */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                opacity: 0.9,
              }}
            >
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Why We Exist
            </div>
            <h2 className="text-[clamp(1.8rem,1vw+1.4rem,2.6rem)] font-semibold leading-tight">
              Every ticket tells a story. <br />
              <span style={{ color: "var(--accent)" }}>
                We help you write the best one.
              </span>
            </h2>
            <p
              className="mt-6 text-[clamp(1rem,0.25vw+0.9rem,1.15rem)] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Our mission is to transform customer support from a reactive chore
              into a proactive advantage. We believe that great support isn't
              just about solving problems — it's about building trust, one
              interaction at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h2 className="text-center text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold">
          What Drives Us
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "❤️",
              title: "Empathy First",
              desc: "We design every feature with the customer's journey in mind. Support isn't a transaction — it's a relationship.",
            },
            {
              icon: "⚡",
              title: "Speed Without Sacrifice",
              desc: "Fast resolution matters, but not at the cost of quality. We help teams find the sweet spot between efficiency and care.",
            },
            {
              icon: "🔍",
              title: "Clarity Over Complexity",
              desc: "Support tools should be simple, not overwhelming. We strip away noise so agents can focus on what truly matters.",
            },
            {
              icon: "🤝",
              title: "Teamwork at the Core",
              desc: "No agent works in isolation. Our platform is built to foster collaboration, knowledge sharing, and shared success.",
            },
            {
              icon: "📈",
              title: "Continuous Improvement",
              desc: "We don't settle for 'good enough'. Every update, every feature is a step toward making support better for everyone.",
            },
            {
              icon: "🌍",
              title: "Accessibility for All",
              desc: "Great support should be inclusive. We build tools that work for every user, regardless of ability or background.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3
                className="font-semibold text-[1.1rem]"
                style={{ color: "var(--text-primary)" }}
              >
                {value.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
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
          <h2 className="text-center text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold">
            Our Impact So Far
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { number: "12K+", label: "Tickets Resolved" },
              { number: "850+", label: "Support Teams" },
              { number: "99.9%", label: "Uptime" },
              { number: "4.8★", label: "Avg. Rating" },
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

      {/* Call to Action */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 text-center">
        <h2 className="text-[clamp(1.4rem,0.8vw+1.1rem,2rem)] font-semibold">
          Ready to Transform Your Support?
        </h2>
        <p
          className="mt-3 text-[clamp(1rem,0.2vw+0.9rem,1.1rem)]"
          style={{ color: "var(--text-secondary)" }}
        >
          Join hundreds of teams already using CS - Ticket System.
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
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default OurMission;
