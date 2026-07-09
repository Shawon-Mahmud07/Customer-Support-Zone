const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly to us when you create an account, submit a support ticket, or contact us — such as your name, email address, and the content of your messages. We also automatically collect basic usage data (like browser type and pages visited) to help us improve the product.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect to operate and improve CS - Ticket System, respond to your tickets and inquiries, send important account or service updates, and monitor for misuse or security issues. We do not sell your personal information to third parties.",
  },
  {
    title: "3. How We Share Information",
    body: "We may share information with service providers who help us run the platform (such as hosting and email delivery), or when required by law. Any third party we work with is only given the minimum access needed to perform their function.",
  },
  {
    title: "4. Data Storage & Security",
    body: "Your data is stored using industry-standard security practices, including encrypted connections and access controls. While no system is 100% secure, we work continuously to protect your information from unauthorized access, alteration, or loss.",
  },
  {
    title: "5. Cookies & Tracking",
    body: "We use essential cookies to keep you logged in and remember your preferences (such as light/dark mode). We do not use cookies for third-party advertising.",
  },
  {
    title: "6. Your Rights & Choices",
    body: "You can access, update, or request deletion of your account information at any time by contacting us. If you'd like a copy of the data we hold about you, reach out and we'll respond within a reasonable timeframe.",
  },
  {
    title: "7. Data Retention",
    body: "We retain your information for as long as your account is active or as needed to provide our services. Ticket records may be retained longer for support history and quality purposes, unless you request deletion.",
  },
  {
    title: "8. Children's Privacy",
    body: "CS - Ticket System is not directed at children under 13, and we do not knowingly collect personal information from children.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. If we make material changes, we'll notify you through the app or by email before the changes take effect.",
  },
  {
    title: "10. Contact Us",
    body: "If you have any questions about this Privacy Policy or how your data is handled, reach out to us at support@cst.com.",
  },
];

function PrivacyPolicy({ onBack }) {
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

      {/* Header */}
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
          style={{
            backgroundColor: "var(--accent)",
            color: "#fff",
            opacity: 0.9,
          }}
        >
          Privacy Policy
        </div>
        <h1 className="text-[clamp(2rem,1.8vw+1.4rem,3rem)] font-bold tracking-tight">
          Your privacy matters to us
        </h1>
        <p
          className="mt-4 text-[clamp(0.95rem,0.3vw+0.85rem,1.1rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          This policy explains what information CS - Ticket System collects, how
          we use it, and the choices you have. Last updated: July 2026.
        </p>
      </section>

      {/* Policy Sections */}
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div
          className="rounded-2xl p-6 sm:p-10"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div className="flex flex-col gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="text-[1.15rem] font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {section.title}
                </h2>
                <p
                  className="mt-2 text-[0.95rem] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        className="py-14"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <p
            className="text-[0.95rem]"
            style={{ color: "var(--text-secondary)" }}
          >
            Have questions about your data?
          </p>
          <button
            onClick={onBack}
            className="mt-5 rounded-xl px-8 py-3 font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
