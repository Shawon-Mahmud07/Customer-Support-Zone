import { useState } from "react";
import { toast } from "react-toastify";

const platforms = [
  {
    icon: "🍎",
    name: "iOS App",
    status: "In Development",
  },
  {
    icon: "🤖",
    name: "Android App",
    status: "In Development",
  },
  {
    icon: "💻",
    name: "Desktop App",
    status: "Planned",
  },
];

function DownloadApps({ onBack }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNotifySubmit(e) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setEmail("");
    toast.success("We'll notify you when the apps launch!");
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

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
          style={{
            backgroundColor: "var(--accent)",
            color: "#fff",
            opacity: 0.9,
          }}
        >
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          Coming Soon
        </div>
        <h1 className="text-[clamp(2.2rem,2vw+1.5rem,3.5rem)] font-bold tracking-tight">
          CS - Ticket System, in your pocket
        </h1>
        <p
          className="mt-5 mx-auto max-w-[60ch] text-[clamp(1rem,0.3vw+0.9rem,1.25rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          We're building native apps so you can manage tickets on the go. In the
          meantime, this web app works great on any device — just bookmark it or
          add it to your home screen.
        </p>
      </section>

      {/* Platform Cards */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="rounded-2xl p-6 text-center"
                style={{
                  backgroundColor: "var(--bg-base)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3
                  className="font-semibold text-[1.1rem]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {platform.name}
                </h3>
                <p
                  className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    color: "var(--accent)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  {platform.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify Me Form */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div
          className="mx-auto max-w-xl rounded-2xl p-8 text-center"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-color)",
          }}
        >
          <h2 className="text-[clamp(1.4rem,0.8vw+1.1rem,2rem)] font-semibold">
            Be the first to know
          </h2>
          <p
            className="mt-3 text-[clamp(0.95rem,0.2vw+0.85rem,1.05rem)]"
            style={{ color: "var(--text-secondary)" }}
          >
            Leave your email and we'll let you know the moment the apps are
            ready to download.
          </p>

          {submitted ? (
            <p className="mt-6 font-medium" style={{ color: "var(--accent)" }}>
              ✓ Thanks! We'll email you when we launch.
            </p>
          ) : (
            <form
              onSubmit={handleNotifySubmit}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition focus:opacity-90"
                style={{
                  backgroundColor: "var(--bg-base)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              />
              <button
                type="submit"
                className="rounded-xl px-6 py-3 font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Use it now as web app */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <h2 className="text-[clamp(1.4rem,0.8vw+1.1rem,2rem)] font-semibold">
            Can't wait? Use the web app today
          </h2>
          <p
            className="mt-3 mx-auto max-w-[55ch] text-[clamp(1rem,0.2vw+0.9rem,1.1rem)]"
            style={{ color: "var(--text-secondary)" }}
          >
            CS - Ticket System already runs smoothly in any browser, on desktop
            or mobile. No install required.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBack}
              className="rounded-xl px-8 py-3 font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DownloadApps;
