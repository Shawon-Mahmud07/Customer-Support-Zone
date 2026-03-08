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

// Keep footer year current without manual updates.
const year = new Date().getFullYear();

function Footer() {
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <h3 className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)] text-[#c3c7cf]">
              {companyLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)] text-[#c3c7cf]">
              {serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[clamp(1.45rem,0.55vw+1.2rem,2rem)] font-medium">
              Information
            </h3>
            <ul className="mt-4 space-y-2 text-[clamp(1.05rem,0.2vw+0.95rem,1.2rem)] text-[#c3c7cf]">
              {infoLinks.map((item) => (
                <li key={item}>{item}</li>
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
                <li key={`${item.icon}-${item.label}`} className="flex items-center gap-2.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#d1d5db] text-[0.85em] font-semibold">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
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
