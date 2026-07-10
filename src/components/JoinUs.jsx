import { useState } from "react";

const openRoles = [
  {
    title: "Frontend Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Customer Support Specialist",
    dept: "Support",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Product Designer",
    dept: "Design",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "QA Engineer",
    dept: "Engineering",
    type: "Contract",
    location: "Remote",
  },
];

const perks = [
  {
    icon: "🏡",
    title: "Remote-first",
    desc: "Work from anywhere, on your schedule.",
  },
  {
    icon: "🌴",
    title: "Flexible time off",
    desc: "Rest when you need to, no questions asked.",
  },
  {
    icon: "📈",
    title: "Growth budget",
    desc: "Learning stipend for courses and conferences.",
  },
  {
    icon: "💬",
    title: "Small, tight team",
    desc: "Your work has real, visible impact here.",
  },
];

function JoinUs({ onBack }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(true);
  }

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

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
          style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        >
          🚀 We're Hiring
        </div>
        <h1 className="text-[clamp(2.2rem,2vw+1.5rem,3.5rem)] font-bold tracking-tight">
          Build the future of support with us
        </h1>
        <p
          className="mt-5 mx-auto max-w-[58ch] text-[clamp(1rem,0.3vw+0.9rem,1.25rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          We're a small, remote-first team on a mission to make support teams
          faster and calmer. If that sounds like your kind of problem to solve,
          we'd love to meet you.
        </p>
      </section>

      {/* Perks */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-xl p-5 text-center"
                style={{
                  backgroundColor: "var(--bg-base)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div className="text-3xl mb-2">{perk.icon}</div>
                <h3 className="font-semibold text-sm">{perk.title}</h3>
                <p
                  className="mt-1 text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h2 className="text-center text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold">
          Open Roles
        </h2>
        <div className="mt-8 space-y-3 max-w-3xl mx-auto">
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-3 rounded-xl border px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
              }}
            >
              <div>
                <h3
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {role.title}
                </h3>
                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {role.dept} · {role.type} · {role.location}
                </p>
              </div>
              <button
                onClick={() =>
                  setForm((prev) => ({ ...prev, role: role.title }))
                }
                className="rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 shrink-0"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-xl px-5 sm:px-8">
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: "var(--bg-base)",
              border: "1px solid var(--border-color)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <div className="text-5xl">🎉</div>
                <h3 className="text-xl font-semibold">Application Sent!</h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Thanks <strong>{form.name}</strong>! We'll review your
                  application and reach out to <strong>{form.email}</strong>{" "}
                  soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", role: "", message: "" });
                  }}
                  className="rounded-lg px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Apply Now</h3>
                {[
                  {
                    name: "name",
                    label: "Full Name *",
                    placeholder: "e.g. Jane Doe",
                    type: "text",
                  },
                  {
                    name: "email",
                    label: "Email *",
                    placeholder: "e.g. jane@example.com",
                    type: "email",
                  },
                  {
                    name: "role",
                    label: "Role You're Applying For",
                    placeholder: "e.g. Frontend Engineer",
                    type: "text",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      className="mb-1 block text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-[#632EE3]/30 focus:border-[#632EE3]"
                      style={{
                        backgroundColor: "var(--input-bg)",
                        borderColor: "var(--input-border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    className="mb-1 block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Why do you want to join us?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us a bit about yourself..."
                    className="w-full resize-none rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-[#632EE3]/30 focus:border-[#632EE3]"
                    style={{
                      backgroundColor: "var(--input-bg)",
                      borderColor: "var(--input-border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!form.name.trim() || !form.email.trim()}
                  className="w-full rounded-xl py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Submit Application →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinUs;
