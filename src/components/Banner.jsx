import vector1 from "../assets/vector1.png";

const gradients = {
  total: "bg-[linear-gradient(120deg,#0F2137_0%,#2d4258_100%)]",
  progress: "bg-[linear-gradient(120deg,#632EE3_0%,#9F62F2_100%)]",
  resolved: "bg-[linear-gradient(120deg,#53C768_0%,#008B8A_100%)]",
};

function BannerCard({ title, count, gradient }) {
  return (
    <article
      className={`relative isolate h-52 overflow-hidden rounded-xl text-white shadow-[0_10px_30px_rgba(17,24,39,0.12)] sm:h-56 lg:h-64 ${gradient}`}
    >
      <img
        src={vector1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-3 max-w-none"
      />
      <img
        src={vector1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 max-w-none scale-x-[-1]"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h2 className="text-[clamp(1.15rem,1.1vw+0.72rem,2rem)] font-medium tracking-[0.01em]">
          {title}
        </h2>
        <p className="mt-3 text-[clamp(2.9rem,2.8vw+1.6rem,4.4rem)] leading-none font-medium">
          {count}
        </p>
      </div>
    </article>
  );
}

function StatBar({ label, count, total, color }) {
  const percent = total === 0 ? 0 : Math.round((count / total) * 100);
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span
          className="text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          {label}
        </span>
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {count}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            ({percent}%)
          </span>
        </div>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "var(--border-color)" }}
      >
        <div
          className="h-2 rounded-full transition-all duration-500"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function DashboardStats({
  openCount,
  inProgressCount,
  resolvedCount,
  highCount,
  mediumCount,
  lowCount,
}) {
  const totalActive = openCount + inProgressCount + resolvedCount;
  const totalPriority = highCount + mediumCount + lowCount;

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Status Breakdown */}
      <div
        className="rounded-xl border p-5 shadow-[0_4px_16px_rgba(30,41,59,0.06)]"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#632EE3]/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#632EE3"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
          </div>
          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Status Breakdown
            </h3>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {totalActive} total tickets
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <StatBar
            label="Open"
            count={openCount}
            total={totalActive}
            color="#087A2A"
          />
          <StatBar
            label="In-Progress"
            count={inProgressCount}
            total={totalActive}
            color="#632EE3"
          />
          <StatBar
            label="Resolved"
            count={resolvedCount}
            total={totalActive}
            color="#008B8A"
          />
        </div>

        {/* Mini status badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#A6E9BC] px-3 py-1 text-xs font-semibold text-[#087A2A]">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Open: {openCount}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F4E18D] px-3 py-1 text-xs font-semibold text-[#9A7400]">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            In-Progress: {inProgressCount}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#CDECF9] px-3 py-1 text-xs font-semibold text-[#0C6280]">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Resolved: {resolvedCount}
          </span>
        </div>
      </div>

      {/* Priority Breakdown */}
      <div
        className="rounded-xl border p-5 shadow-[0_4px_16px_rgba(30,41,59,0.06)]"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EF4444"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
          </div>
          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Priority Breakdown
            </h3>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Active tickets only
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <StatBar
            label="High"
            count={highCount}
            total={totalPriority}
            color="#EF4444"
          />
          <StatBar
            label="Medium"
            count={mediumCount}
            total={totalPriority}
            color="#F59E0B"
          />
          <StatBar
            label="Low"
            count={lowCount}
            total={totalPriority}
            color="#16A34A"
          />
        </div>

        {/* Priority indicator */}
        <div
          className="mt-4 rounded-lg p-3"
          style={{ backgroundColor: "var(--bg-base)" }}
        >
          {highCount === 0 ? (
            <p className="text-xs font-medium text-green-600">
              ✅ No high priority tickets!
            </p>
          ) : highCount <= 2 ? (
            <p className="text-xs font-medium text-amber-500">
              ⚠️ {highCount} high priority ticket{highCount > 1 ? "s" : ""} need
              attention
            </p>
          ) : (
            <p className="text-xs font-medium text-red-500">
              🔴 {highCount} high priority tickets — immediate action needed!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Banner({
  totalCount,
  inProgressCount,
  resolvedCount,
  openCount,
  highCount,
  mediumCount,
  lowCount,
}) {
  const cards = [
    { title: "Total Tickets", count: totalCount, gradient: gradients.total },
    {
      title: "In-Progress",
      count: inProgressCount,
      gradient: gradients.progress,
    },
    { title: "Resolved", count: resolvedCount, gradient: gradients.resolved },
  ];

  return (
    <section className="mx-auto w-full max-w-370 px-5 pb-6 pt-8 sm:px-8 sm:pt-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {cards.map((card) => (
          <BannerCard
            key={card.title}
            title={card.title}
            count={card.count}
            gradient={card.gradient}
          />
        ))}
      </div>

      <DashboardStats
        openCount={openCount}
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
        highCount={highCount}
        mediumCount={mediumCount}
        lowCount={lowCount}
      />
    </section>
  );
}

export default Banner;
