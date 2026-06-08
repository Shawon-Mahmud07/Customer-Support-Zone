function Navbar({ onNewTicket, darkMode, onToggleDark, onExportCSV }) {
  return (
    <header
      className="sticky top-0 z-40 border-b shadow-sm"
      style={{
        backgroundColor: "var(--navbar-bg)",
        borderColor: "var(--navbar-border)",
      }}
    >
      <div className="mx-auto flex w-full max-w-370 items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#632EE3_0%,#9F62F2_100%)] shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <span
            className="text-lg font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Customer{" "}
            <span className="bg-[linear-gradient(90deg,#632EE3,#9F62F2)] bg-clip-text text-transparent">
              Support Zone
            </span>
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          
          {/* Keyboard Shortcuts hint */}
          <div className="relative group">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg border transition hover:scale-105"
              style={{
                backgroundColor: "var(--filter-bg)",
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <rect x="2" y="6" width="20" height="13" rx="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M10 14h4"
                />
              </svg>
            </button>

            {/* Tooltip */}
            <div
              className="absolute right-0 top-11 z-50 hidden w-48 rounded-xl border p-3 shadow-xl group-hover:block"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
              }}
            >
              <p
                className="mb-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                Shortcuts
              </p>
              <div className="space-y-1.5">
                {[
                  { key: "N", label: "New Ticket" },
                  { key: "D", label: "Toggle Dark" },
                  { key: "Esc", label: "Close Modal" },
                ].map(({ key, label }) => (
                  <div key={key} className="flex items-center justify-between">
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {label}
                    </span>
                    <kbd
                      className="rounded border px-1.5 py-0.5 text-xs font-semibold"
                      style={{
                        backgroundColor: "var(--bg-base)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Export CSV Button */}
          <button
            onClick={onExportCSV}
            title="Export all tickets as CSV"
            className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--filter-bg)",
              borderColor: "var(--border-color)",
              color: "var(--text-secondary)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span className="hidden sm:inline">Export CSV</span>
          </button>
          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDark}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border transition hover:scale-105"
            style={{
              backgroundColor: "var(--filter-bg)",
              borderColor: "var(--border-color)",
              color: "var(--text-secondary)",
            }}
          >
            {darkMode ? (
              /* Sun icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4.5 w-4.5"
              >
                <circle cx="12" cy="12" r="4" />
                <path
                  strokeLinecap="round"
                  d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                />
              </svg>
            ) : (
              /* Moon icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4.5 w-4.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                />
              </svg>
            )}
          </button>

          {/* New Ticket Button */}
          <button
            onClick={onNewTicket}
            className="flex items-center gap-2 rounded-lg bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 hover:scale-[1.02]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            New Ticket
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
