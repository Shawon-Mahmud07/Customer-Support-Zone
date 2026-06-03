import { useEffect, useState } from "react";

const navItems = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("csz_theme") === "dark";
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("csz_theme", theme);
  }, [isDark]);

  // Set initial theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("csz_theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border transition"
      style={{
        borderColor: "var(--border-color)",
        backgroundColor: "var(--bg-card)",
        color: "var(--text-secondary)",
      }}
    >
      {isDark ? (
        /* Sun icon */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4.5 w-4.5">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        /* Moon icon */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4.5 w-4.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function Navbar({ onNewTicket }) {
  return (
    <header
      className="border-b transition"
      style={{
        backgroundColor: "var(--navbar-bg)",
        borderColor: "var(--navbar-border)",
      }}
    >
      <div className="mx-auto flex h-18.5 w-full max-w-370 items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          className="text-[clamp(1.7rem,1.2vw+1rem,2.3rem)] leading-none font-bold tracking-[-0.02em]"
          style={{ color: "var(--text-primary)" }}
        >
          CS - Ticket System
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          <nav>
            <ul
              className="flex items-center gap-8 text-[clamp(0.92rem,0.6vw+0.48rem,1.3rem)] font-medium tracking-[-0.01em]"
              style={{ color: "var(--text-secondary)" }}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#632EE3]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <button
            onClick={onNewTicket}
            className="inline-flex items-center gap-2.5 rounded-md bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] px-6 py-3 text-[clamp(1rem,0.65vw+0.58rem,1.4rem)] font-semibold tracking-[-0.01em] text-white transition hover:brightness-95"
          >
            <span className="text-[1.1em] leading-none">+</span>
            <span>New Ticket</span>
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-10 mt-3 w-56 rounded-box border p-2 shadow"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
              <li className="mt-1">
                <button
                  onClick={onNewTicket}
                  className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] text-white hover:brightness-95"
                >
                  <span>+</span>New Ticket
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;