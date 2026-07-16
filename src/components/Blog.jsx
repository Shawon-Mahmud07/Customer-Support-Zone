const posts = [
  {
    date: "July 2026",
    tag: "Feature",
    title: "Smoother loading with skeleton screens",
    excerpt:
      "Tickets, tasks, and resolved items now load in with a lightweight skeleton animation instead of popping in all at once — a small change that makes the whole app feel snappier.",
  },
  {
    date: "July 2026",
    tag: "New Page",
    title: "Join Us, Privacy Policy & Terms pages are live",
    excerpt:
      "We've rounded out the footer with a careers page for open roles, plus clear Privacy Policy and Terms & Conditions pages so you always know where you stand.",
  },
  {
    date: "June 2026",
    tag: "Feature",
    title: "Customer Stories: see how teams use CS - Ticket System",
    excerpt:
      "A new page showcasing real results from support teams — faster resolutions, better accountability, and happier customers.",
  },
  {
    date: "June 2026",
    tag: "Improvement",
    title: "Keyboard shortcuts for faster ticket triage",
    excerpt:
      "Press N to open a new ticket from anywhere in the app. More shortcuts are on the way to help power users move even faster.",
  },
  {
    date: "May 2026",
    tag: "Feature",
    title: "Dark mode, done right",
    excerpt:
      "A full dark theme across every page, remembered automatically between visits — easier on the eyes during long support shifts.",
  },
  {
    date: "May 2026",
    tag: "Improvement",
    title: "CSV export for reporting",
    excerpt:
      "Export your full ticket list to CSV in one click, making it easy to build reports outside the app.",
  },
];

const tagColors = {
  Feature: { bg: "#EDE7FB", color: "#632EE3" },
  "New Page": { bg: "#CDECF9", color: "#0C6280" },
  Improvement: { bg: "#A6E9BC", color: "#087A2A" },
};

function BlogCard({ post }) {
  const colors = tagColors[post.tag] ?? { bg: "#E2E8F0", color: "#334155" };
  return (
    <article
      className="rounded-2xl border p-6"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: colors.bg, color: colors.color }}
        >
          {post.tag}
        </span>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {post.date}
        </span>
      </div>
      <h3
        className="mt-3 text-[1.15rem] font-semibold leading-snug"
        style={{ color: "var(--text-primary)" }}
      >
        {post.title}
      </h3>
      <p
        className="mt-2 text-[0.9rem] leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {post.excerpt}
      </p>
    </article>
  );
}

function Blog({ onBack }) {
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
          Blog & Changelog
        </div>
        <h1 className="text-[clamp(2.2rem,2vw+1.5rem,3.5rem)] font-bold tracking-tight">
          What's new at CS - Ticket System
        </h1>
        <p
          className="mt-5 mx-auto max-w-[58ch] text-[clamp(1rem,0.3vw+0.9rem,1.25rem)] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Product updates, new features, and improvements — straight from the
          team building CS - Ticket System.
        </p>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </section>

      {/* CTA */}
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
            Have feedback or a feature request?
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

export default Blog;
