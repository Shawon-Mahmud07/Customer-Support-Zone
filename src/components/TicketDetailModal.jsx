const statusStyles = {
  Open: "bg-[#A6E9BC] text-[#087A2A]",
  "In-Progress": "bg-[#F4E18D] text-[#9A7400]",
  Resolved: "bg-[#CDECF9] text-[#0C6280]",
};

const priorityStyles = {
  High: { color: "#EF4444", bg: "#FEF2F2", border: "#FECACA" },
  Medium: { color: "#F59E0B", bg: "#FFFBEB", border: "#FDE68A" },
  Low: { color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
};

function TicketDetailModal({ ticket, onClose, onAddToTask, onDelete }) {
  const isResolved = ticket.status === "Resolved";
  const isInProgress = ticket.status === "In-Progress";
  const priority = priorityStyles[ticket.priority];

  function handleBackdrop(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="w-full max-w-lg rounded-xl shadow-2xl overflow-hidden"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "var(--border-color)" }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Ticket #{ticket.id}
          </span>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-red-50 hover:text-red-400"
            style={{ color: "var(--text-muted)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          {/* Title */}
          <h2
            className="text-[1.4rem] font-bold leading-snug"
            style={{ color: "var(--text-primary)" }}
          >
            {ticket.title}
          </h2>

          {/* Status + Priority badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${statusStyles[ticket.status]}`}
            >
              <span className="h-2 w-2 rounded-full bg-current" />
              {ticket.status}
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium"
              style={{
                color: priority.color,
                backgroundColor: priority.bg,
                borderColor: priority.border,
              }}
            >
              {ticket.priority} Priority
            </span>
          </div>

          {/* Description */}
          <div>
            <p
              className="mb-1.5 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Description
            </p>
            <p
              className="text-sm leading-relaxed rounded-lg p-3 border"
              style={{
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-base)",
                borderColor: "var(--border-color)",
              }}
            >
              {ticket.description}
            </p>
          </div>

          {/* Meta info grid */}
          <div
            className="grid grid-cols-2 gap-3 rounded-lg border p-4"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--bg-base)",
            }}
          >
            {/* Customer */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                Customer
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "#632EE3" }}
                >
                  {ticket.customer.charAt(0).toUpperCase()}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {ticket.customer}
                </span>
              </div>
            </div>

            {/* Created At */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                Created
              </p>
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                  />
                </svg>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {ticket.createdAt}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer — action buttons */}
        <div
          className="flex items-center justify-between gap-3 border-t px-6 py-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          {/* Delete */}
          <button
            onClick={() => {
              onDelete(ticket.id);
              onClose();
            }}
            className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-100"
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
                d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"
              />
            </svg>
            Delete
          </button>

          <div className="flex items-center gap-2">
            {/* Close */}
            <button
              onClick={onClose}
              className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:opacity-80"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-base)",
              }}
            >
              Close
            </button>

            {/* Add to Task — hidden if already In-Progress or Resolved */}
            {!isInProgress && !isResolved && (
              <button
                onClick={() => {
                  onAddToTask(ticket.id);
                  onClose();
                }}
                className="rounded-lg bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
              >
                Add to Task
              </button>
            )}

            {isInProgress && (
              <span className="rounded-lg bg-[#F4E18D] px-4 py-2 text-sm font-semibold text-[#9A7400]">
                In Progress
              </span>
            )}

            {isResolved && (
              <span className="rounded-lg bg-[#CDECF9] px-4 py-2 text-sm font-semibold text-[#0C6280]">
                Resolved ✓
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetailModal;
