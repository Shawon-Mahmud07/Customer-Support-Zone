const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using CS - Ticket System, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use the service.",
  },
  {
    title: "2. Description of Service",
    body: "CS - Ticket System is a support ticket management platform that helps teams track customer issues, manage tasks, and resolve tickets. We may add, change, or remove features at any time as the product evolves.",
  },
  {
    title: "3. Account Responsibilities",
    body: "You're responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately if you suspect unauthorized access.",
  },
  {
    title: "4. Acceptable Use",
    body: "You agree not to misuse the platform — including attempting to disrupt the service, submitting false or malicious tickets, reverse-engineering the app, or using it for any unlawful purpose.",
  },
  {
    title: "5. Content Ownership",
    body: "You retain ownership of the content you submit (tickets, notes, attachments). By using the service, you grant us a limited license to store and process that content solely to provide the service to you.",
  },
  {
    title: "6. Service Availability",
    body: "We aim to keep CS - Ticket System available and reliable, but we don't guarantee uninterrupted access. Scheduled maintenance, updates, or unforeseen issues may occasionally affect availability.",
  },
  {
    title: "7. Termination",
    body: "We reserve the right to suspend or terminate accounts that violate these terms. You may also stop using the service and request account deletion at any time.",
  },
  {
    title: "8. Limitation of Liability",
    body: 'CS - Ticket System is provided "as is" without warranties of any kind. To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the service.',
  },
  {
    title: "9. Changes to These Terms",
    body: "We may revise these Terms & Conditions from time to time. Continued use of the service after changes take effect constitutes acceptance of the updated terms.",
  },
  {
    title: "10. Contact Us",
    body: "If you have questions about these Terms & Conditions, reach out to us at support@cst.com.",
  },
];

function TermsConditions({ onBack }) {
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
          Terms & Conditions
        </div>
        <h1 className="text-[clamp(2rem,1.8vw+1.4rem,3rem)] font-bold tracking-tight">
          Terms of using our service
        </h1>
        <p
          className="mt-4 text-[clamp(0.95rem,0.3vw+0.85rem,1.1rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Please read these terms carefully before using CS - Ticket System.
          Last updated: July 2026.
        </p>
      </section>

      {/* Terms Sections */}
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
            Have questions about these terms?
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

export default TermsConditions;
