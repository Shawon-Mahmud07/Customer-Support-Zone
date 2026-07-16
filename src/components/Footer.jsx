// Static social items with lightweight text-based icons.
const socialLinks = [
  { label: "@CS - Ticket System", icon: "X" },
  { label: "@CS - Ticket System", icon: "in" },
  { label: "@CS - Ticket System", icon: "f" },
  { label: "support@cst.com", icon: "@" },
];

// Keep footer year current without manual updates.
const year = new Date().getFullYear();

function Footer({
  onAboutUs,
  onOurMission,
  onContactSales,
  onProductsServices,
  onCustomerStories,
  onDownloadApps,
  onPrivacyPolicy,
  onTermsConditions,
  onJoinUs,
  onFAQ,
  onBlog,
}) {
  return (
    <footer
      className="mt-6 border-t"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      <div className="mx-auto w-full max-w-370 px-5 pb-6 pt-14 sm:px-8 sm:pt-16">
        {/* Top area: brand block + navigation/link columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <h2
              className="text-[clamp(2rem,0.8vw+1.6rem,2.8rem)] font-semibold tracking-[-0.02em]"
              style={{ color: "var(--text-primary)" }}
            >
              CS - Ticket System
            </h2>
            <p
              className="mt-4 max-w-[42ch] text-[clamp(1rem,0.25vw+0.88rem,1.2rem)] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              CS - Ticket System helps support teams track customer issues,
              manage active tasks, and resolve tickets faster with a clean,
              focused workflow. From ticket creation to completion, everything
              stays organized in one place.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3
              className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Company
            </h3>
            <ul
              className="mt-4 space-y-2 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)]"
              style={{ color: "var(--text-secondary)" }}
            >
              <li>
                <button
                  onClick={onAboutUs}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOurMission}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  Our Mission
                </button>
              </li>
              <li>
                <button
                  onClick={onContactSales}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  Contact Sales
                </button>
              </li>
              <li>
                <button
                  onClick={onBlog}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3
              className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Services
            </h3>
            <ul
              className="mt-4 space-y-2 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)]"
              style={{ color: "var(--text-secondary)" }}
            >
              <li>
                <button
                  onClick={onProductsServices}
                  className="border-none bg-transparent p-0 transition hover:underline cursor-pointer"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Products & Services
                </button>
              </li>
              <li>
                <button
                  onClick={onCustomerStories}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  Customer Stories
                </button>
              </li>
              <li>
                <button
                  onClick={onDownloadApps}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  Download Apps
                </button>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3
              className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Information
            </h3>
            <ul
              className="mt-4 space-y-2 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)]"
              style={{ color: "var(--text-secondary)" }}
            >
              <li>
                <button
                  onClick={onPrivacyPolicy}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onTermsConditions}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onJoinUs}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  Join Us
                </button>
              </li>
              <li>
                <button
                  onClick={onFAQ}
                  className="hover:opacity-80 hover:underline transition-opacity cursor-pointer bg-transparent border-none text-left p-0"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "inherit",
                  }}
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <h3
              className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Social Links
            </h3>
            <ul
              className="mt-4 space-y-2.5 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {socialLinks.map((item) => (
                <li
                  key={`${item.icon}-${item.label}`}
                  className="flex items-center gap-2 min-w-0"
                >
                  <span
                    className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full border text-[0.85em] font-semibold"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div
          className="mt-12 border-t pt-6 text-center text-[clamp(1rem,0.2vw+0.92rem,1.15rem)]"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-muted)",
          }}
        >
          © {year} CS - Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
