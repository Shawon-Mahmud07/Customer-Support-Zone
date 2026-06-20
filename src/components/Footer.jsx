const companyLinks = ["About Us", "Our Mission", "Contact Sales"];
const serviceLinks = ["Products & Services", "Customer Stories", "Download Apps"];
const infoLinks = ["Privacy Policy", "Terms & Conditions", "Join Us"];

// Static social items with lightweight text-based icons.
const socialLinks = [
  { label: "@CS - Ticket System", icon: "X" },
  { label: "@CS - Ticket System", icon: "in" },
  { label: "@CS - Ticket System", icon: "f" },
  { label: "support@cst.com", icon: "@" },
];

// Pages that have dedicated routes
const PAGE_ROUTES = [
  "About Us", "Our Mission", "Contact Sales",
  "Products & Services", "Customer Stories", "Download Apps",
  "Privacy Policy", "Terms & Conditions", "Join Us",
];

// Keep footer year current without manual updates.
const year = new Date().getFullYear();

function Footer({ onNavigate }) {
  function renderLink(item) {
    if (PAGE_ROUTES.includes(item)) {
      return (
        <button
          onClick={() => onNavigate(item)}
          className="hover:text-white hover:underline transition-colors cursor-pointer bg-transparent border-none text-[#c3c7cf] text-left p-0"
          style={{ fontSize: "inherit" }}
        >
          {item}
        </button>
      );
    }
    return item;
  }

  return (
    <footer className="mt-6 bg-black text-white">
      <div className="mx-auto w-full max-w-370 px-5 pb-6 pt-14 sm:px-8 sm:pt-16">
        {/* Top area: brand block + navigation/link columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <h2 className="text-[clamp(2rem,0.8vw+1.6rem,2.8rem)] font-semibold tracking-[-0.02em]">
              CS - Ticket System
            </h2>
            <p className="mt-4 max-w-[42ch] text-[clamp(1rem,0.25vw+0.88rem,1.2rem)] leading-relaxed text-[#b9bec8]">
              CS - Ticket System helps support teams track customer issues,
              manage active tasks, and resolve tickets faster with a clean,
              focused workflow. From ticket creation to completion, everything
              stays organized in one place.
            </p>
          </div>

          <div>
            <h3 className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)] text-[#c3c7cf]">
              {companyLinks.map((item) => (
                <li key={item}>{renderLink(item)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)] text-[#c3c7cf]">
              {serviceLinks.map((item) => (
                <li key={item}>{renderLink(item)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium">
              Information
            </h3>
            <ul className="mt-4 space-y-2 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)] text-[#c3c7cf]">
              {infoLinks.map((item) => (
                <li key={item}>{renderLink(item)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium">
              Social Links
            </h3>
            {/* Social handles / email list */}
            <ul className="mt-4 space-y-2.5 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)] text-[#d4d7de]">
              {socialLinks.map((item) => (
                <li key={`${item.icon}-${item.label}`} className="flex items-center gap-2 min-w-0">
                  <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#d1d5db] text-[0.85em] font-semibold">
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 border-t border-[#252a35] pt-6 text-center text-[clamp(1rem,0.2vw+0.92rem,1.15rem)] text-[#d3d7df]">
          © {year} CS - Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;