  // Shared shimmer block — a pulsing rounded rectangle used to build skeletons
function Shimmer({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-md ${className}`}
      style={{ backgroundColor: "var(--skeleton-base)" }}
    />
  );
}

// Skeleton placeholder for the search + sort + filter row
export function FilterBarSkeleton() {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <Shimmer className="h-10 min-w-50 flex-1" />
        <Shimmer className="h-10 w-32" />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Shimmer className="h-8 w-40" />
        <Shimmer className="h-8 w-40" />
      </div>
    </div>
  );
}

// Skeleton placeholder for a single ticket card
export function TicketCardSkeleton() {
  return (
    <div
      className="rounded-lg border p-4"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <Shimmer className="h-5 w-3/5" />
        <Shimmer className="h-6 w-20 rounded-full" />
      </div>
      <Shimmer className="mt-3 h-3.5 w-full" />
      <Shimmer className="mt-2 h-3.5 w-4/5" />
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Shimmer className="h-3.5 w-10" />
        <Shimmer className="h-3.5 w-20" />
        <Shimmer className="ml-auto h-3.5 w-16" />
        <Shimmer className="h-3.5 w-20" />
      </div>
      <Shimmer className="mt-3 h-3 w-24" />
    </div>
  );
}

// Grid of skeleton ticket cards, mirrors the real ticket grid layout
export function TicketGridSkeleton({ count = 6 }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
      {Array.from({ length: count }).map((_, i) => (
        <TicketCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Skeleton placeholder for the sidebar (Task / Resolved Task lists)
export function TaskListSkeleton({ rows = 3 }) {
  return (
    <div className="mt-3 space-y-2">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border p-3"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <Shimmer className="h-4 w-3/4" />
          <Shimmer className="mt-3 h-8 w-full rounded-md" />
        </div>
      ))}
    </div>
  );
}

export default Shimmer;