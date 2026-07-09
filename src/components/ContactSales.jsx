import { useState } from "react";

// Plan data
const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/ month",
    desc: "Perfect for small teams just getting started.",
    features: [
      "Up to 3 agents",
      "100 tickets/month",
      "Basic dashboard",
      "Email support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month",
    desc: "For growing teams that need more power.",
    features: [
      "Up to 15 agents",
      "Unlimited tickets",
      "Advanced dashboard",
      "Priority support",
      "CSV export",
      "Dark mode",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with custom needs.",
    features: [
      "Unlimited agents",
      "Unlimited tickets",
      "Custom integrations",
      "Dedicated manager",
      "SLA guarantees",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];
// FAQ data
const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    q: "Is there a free trial?",
    a: "Absolutely. The Starter plan is free forever. Pro comes with a 14-day free trial — no credit card required.",
  },
  {
    q: "How many agents can I add?",
    a: "Starter supports up to 3 agents, Pro up to 15, and Enterprise has no limit.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
  },
];

function ContactSales({ onBack }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
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
          💼 Sales & Pricing
        </div>
        <h1 className="text-[clamp(2.2rem,2vw+1.5rem,3.5rem)] font-bold tracking-tight">
          Simple, Transparent Pricing
        </h1>
        <p
          className="mt-5 mx-auto max-w-[56ch] text-[clamp(1rem,0.3vw+0.9rem,1.25rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Whether you're a solo agent or an enterprise team, we have a plan that
          scales with your needs. No hidden fees, ever.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-6 flex flex-col transition hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: plan.highlighted
                  ? "var(--accent)"
                  : "var(--bg-card)",
                border: plan.highlighted
                  ? "2px solid var(--accent)"
                  : "1px solid var(--border-color)",
                color: plan.highlighted ? "#fff" : "var(--text-primary)",
              }}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-0.5 text-xs font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm opacity-80">{plan.desc}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-[2.4rem] font-bold leading-none">
                  {plan.price}
                </span>
                <span className="mb-1 text-sm opacity-70">{plan.period}</span>
              </div>
              <ul className="mt-5 space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className="h-4 w-4 shrink-0"
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
              <button
                onClick={onBack}
                className="mt-6 w-full rounded-xl py-2.5 text-sm font-semibold transition hover:opacity-90"
                style={
                  plan.highlighted
                    ? { backgroundColor: "#fff", color: "var(--accent)" }
                    : { backgroundColor: "var(--accent)", color: "#fff" }
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-12 md:grid-cols-2 items-start">
          {/* Left */}
          <div>
            <h2 className="text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold">
              Talk to Our Sales Team
            </h2>
            <p
              className="mt-4 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Have questions about pricing or need a custom quote for your team?
              Fill in the form and we'll get back to you within one business
              day.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: "📧", label: "Email", value: "sales@cst.com" },
                { icon: "📞", label: "Phone", value: "+1 (800) 123-4567" },
                { icon: "🕐", label: "Hours", value: "Mon–Fri, 9am–6pm EST" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
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
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Thanks <strong>{form.name}</strong>! Our sales team will reach
                  out to <strong>{form.email}</strong> within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", company: "", message: "" });
                  }}
                  className="rounded-lg px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Get in Touch</h3>
                {[
                  {
                    name: "name",
                    label: "Full Name *",
                    placeholder: "e.g. John Doe",
                    type: "text",
                  },
                  {
                    name: "email",
                    label: "Work Email *",
                    placeholder: "e.g. john@company.com",
                    type: "email",
                  },
                  {
                    name: "company",
                    label: "Company",
                    placeholder: "e.g. Acme Corp",
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
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your team and needs..."
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
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h2 className="text-center text-[clamp(1.6rem,1vw+1.3rem,2.4rem)] font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border transition"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold transition hover:opacity-80"
                style={{ color: "var(--text-primary)" }}
              >
                {faq.q}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  style={{ color: "var(--text-muted)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>
              {openFaq === i && (
                <div
                  className="border-t px-5 py-4"
                  style={{
                    borderColor: "var(--border-color)",
                    backgroundColor: "var(--bg-base)",
                  }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ContactSales;
