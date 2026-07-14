function AboutUs({ onBack }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)", color: "var(--text-primary)" }}>
      {/* Back button */}
      <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border transition-colors"
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
        <h1 className="text-[clamp(2.2rem,2vw+1.5rem,3.5rem)] font-bold tracking-tight">
          About CS - Ticket System
        </h1>
        <p className="mt-5 mx-auto max-w-[60ch] text-[clamp(1rem,0.3vw+0.9rem,1.25rem)] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          We help customer support teams stay organized, move faster, and never
          let a ticket fall through the cracks.
        </p>
      </section>
      

      {/* Mission */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--bg-card)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-[clamp(1rem,0.25vw+0.9rem,1.15rem)]" style={{ color: "var(--text-secondary)" }}>
              Our mission is to simplify customer support workflows so teams can
              focus on what matters most — solving real problems for real people.
              We believe great support starts with great tools.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "10K+", label: "Tickets Resolved" },
              { number: "500+", label: "Support Teams" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Available" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 text-center"
                style={{ backgroundColor: "var(--bg-base)", border: "1px solid var(--border-color)" }}
              >
                <p className="text-[clamp(1.6rem,1vw+1.2rem,2.2rem)] font-bold" style={{ color: "var(--accent)" }}>
                  {stat.number}
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h2 className="text-center text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold">
          Meet the Team
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Shawon Mahmud", role: "Founder & Lead Developer", initials: "SM" },
            { name: "Alex Rahman", role: "Product Designer", initials: "AR" },
            { name: "Sara Khan", role: "Customer Success Lead", initials: "SK" },
          ].map((member) => (
            <div
              key={member.name}
              className="rounded-2xl p-6 text-center"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {member.initials}
              </div>
              <h3 className="mt-4 font-semibold text-[1.1rem]">{member.name}</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        className="py-14 text-center"
        style={{ backgroundColor: "var(--bg-card)", borderTop: "1px solid var(--border-color)" }}
      >
        <h2 className="text-[clamp(1.4rem,0.8vw+1.1rem,2rem)] font-semibold">
          Get in Touch
        </h2>
        <p className="mt-3 text-[clamp(1rem,0.2vw+0.9rem,1.1rem)]" style={{ color: "var(--text-secondary)" }}>
          Have questions? We'd love to hear from you.
        </p>
        <a
          href="mailto:support@cst.com"
          className="mt-5 inline-block rounded-xl px-8 py-3 font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          support@cst.com
        </a>
      </section>
    </div>
  );
}

export default AboutUs;