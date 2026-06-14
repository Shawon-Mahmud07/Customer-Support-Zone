import { useState } from "react";

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

const PRIORITIES = ["High", "Medium", "Low"];

function TicketDetailModal({
  ticket,
  notes = [],
  onAddNote,
  agents = [],
  onAssignTicket,
  onDeleteNote,
  onClose,
  onAddToTask,
  onDelete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [noteInput, setNoteInput] = useState("");
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [form, setForm] = useState({
    title: ticket.title,
    description: ticket.description,
    customer: ticket.customer,
    priority: ticket.priority,
  });
  const [errors, setErrors] = useState({});

  const isResolved = ticket.status === "Resolved";
  const isInProgress = ticket.status === "In-Progress";
  const priority = priorityStyles[ticket.priority];

  function handleBackdrop(e) {
    if (e.target === e.currentTarget) onClose();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }
  // Validation
  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required.";
    if (!form.description.trim()) e.description = "Description is required.";
    if (!form.customer.trim()) e.customer = "Customer name is required.";
    return e;
  }
  // Note handlers
  function handleNoteSubmit() {
    if (!noteInput.trim()) return;
    onAddNote(noteInput);
    setNoteInput("");
  }

  function handleSave() {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    onEdit(ticket.id, form);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setForm({
      title: ticket.title,
      description: ticket.description,
      customer: ticket.customer,
      priority: ticket.priority,
    });
    setErrors({});
    setIsEditing(false);
  }

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="w-full max-w-lg rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
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
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              Ticket #{ticket.id}
            </span>
            {isEditing && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-600">
                Editing
              </span>
            )}
          </div>
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
        <div className="px-6 py-5 space-y-4">
          {isEditing ? (
            /* ── EDIT MODE ── */
            <>
              {/* Title */}
              <div>
                <label
                  className="mb-1 block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-[#632EE3]/30 focus:border-[#632EE3] ${errors.title ? "border-red-400 bg-red-50" : ""}`}
                  style={
                    !errors.title
                      ? {
                          backgroundColor: "var(--input-bg)",
                          borderColor: "var(--input-border)",
                          color: "var(--text-primary)",
                        }
                      : {}
                  }
                />
                {errors.title && (
                  <p className="mt-1 text-xs text-red-500">{errors.title}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label
                  className="mb-1 block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Description *
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full resize-none rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-[#632EE3]/30 focus:border-[#632EE3] ${errors.description ? "border-red-400 bg-red-50" : ""}`}
                  style={
                    !errors.description
                      ? {
                          backgroundColor: "var(--input-bg)",
                          borderColor: "var(--input-border)",
                          color: "var(--text-primary)",
                        }
                      : {}
                  }
                />
                {errors.description && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Customer */}
              <div>
                <label
                  className="mb-1 block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Customer Name *
                </label>
                <input
                  type="text"
                  name="customer"
                  value={form.customer}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-[#632EE3]/30 focus:border-[#632EE3] ${errors.customer ? "border-red-400 bg-red-50" : ""}`}
                  style={
                    !errors.customer
                      ? {
                          backgroundColor: "var(--input-bg)",
                          borderColor: "var(--input-border)",
                          color: "var(--text-primary)",
                        }
                      : {}
                  }
                />
                {errors.customer && (
                  <p className="mt-1 text-xs text-red-500">{errors.customer}</p>
                )}
              </div>

              {/* Priority */}
              <div>
                <label
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Priority
                </label>
                <div className="flex gap-2">
                  {PRIORITIES.map((p) => (
                    <label
                      key={p}
                      className={`flex flex-1 cursor-pointer items-center justify-center rounded-lg border py-2 text-sm font-medium transition ${
                        form.priority === p
                          ? p === "High"
                            ? "border-red-400 bg-red-50 text-red-500"
                            : p === "Medium"
                              ? "border-amber-400 bg-amber-50 text-amber-600"
                              : "border-green-400 bg-green-50 text-green-600"
                          : "border-gray-200 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="priority"
                        value={p}
                        checked={form.priority === p}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {p}
                    </label>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* ── VIEW MODE ── */
            <>
              <h2
                className="text-[1.4rem] font-bold leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {ticket.title}
              </h2>

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

              <div
                className="grid grid-cols-2 gap-3 rounded-lg border p-4"
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: "var(--bg-base)",
                }}
              >
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
              {/* ── ASSIGN SECTION ── */}
              <div>
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Assigned To
                </p>

                {/* Current assignee */}
                {ticket.assignedTo ? (
                  <div
                    className="mb-2 flex items-center justify-between rounded-lg border px-3 py-2"
                    style={{
                      borderColor: "var(--border-color)",
                      backgroundColor: "var(--bg-base)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: "#632EE3" }}
                      >
                        {ticket.assignedTo.initials}
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {ticket.assignedTo.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Assigned agent
                        </p>
                      </div>
                    </div>
                    {!isResolved && (
                      <button
                        onClick={() => onAssignTicket(null)}
                        className="rounded-md px-2 py-1 text-xs font-medium text-red-400 transition hover:bg-red-50"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ) : (
                  <p
                    className="mb-2 text-xs italic"
                    style={{ color: "var(--text-muted)" }}
                  >
                    No agent assigned yet.
                  </p>
                )}

                {/* Agent picker — hide if resolved */}
                {!isResolved && (
                  <div className="flex flex-wrap gap-2">
                    {agents.map((agent) => {
                      const isAssigned = ticket.assignedTo?.id === agent.id;
                      return (
                        <button
                          key={agent.id}
                          onClick={() =>
                            onAssignTicket(isAssigned ? null : agent)
                          }
                          title={
                            isAssigned
                              ? `Unassign ${agent.name}`
                              : `Assign to ${agent.name}`
                          }
                          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition hover:scale-105"
                          style={
                            isAssigned
                              ? {
                                  backgroundColor: "#632EE3",
                                  borderColor: "#632EE3",
                                  color: "#fff",
                                }
                              : {
                                  borderColor: "var(--border-color)",
                                  backgroundColor: "var(--bg-base)",
                                  color: "var(--text-secondary)",
                                }
                          }
                        >
                          <span
                            className="flex h-5 w-5 items-center justify-center rounded-full text-[0.6rem] font-bold"
                            style={
                              isAssigned
                                ? {
                                    backgroundColor: "rgba(255,255,255,0.25)",
                                    color: "#fff",
                                  }
                                : { backgroundColor: "#632EE3", color: "#fff" }
                            }
                          >
                            {agent.initials}
                          </span>
                          {agent.name.split(" ")[0]}
                          {isAssigned && " ✓"}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* ── NOTES SECTION ── */}
              {!isEditing && (
                <div>
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Notes{" "}
                    {notes.length > 0 && (
                      <span className="ml-1 rounded-full bg-[#632EE3]/10 px-2 py-0.5 text-[#632EE3]">
                        {notes.length}
                      </span>
                    )}
                  </p>

                  {/* Input */}
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={noteInput}
                      onChange={(e) => setNoteInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleNoteSubmit()}
                      placeholder="Add a note and press Enter..."
                      className="flex-1 rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[#632EE3]/30 focus:border-[#632EE3]"
                      style={{
                        backgroundColor: "var(--input-bg)",
                        borderColor: "var(--input-border)",
                        color: "var(--text-primary)",
                      }}
                    />
                    <button
                      onClick={handleNoteSubmit}
                      disabled={!noteInput.trim()}
                      className="rounded-lg bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Add
                    </button>
                  </div>

                  {/* Notes List */}
                  {notes.length === 0 ? (
                    <p
                      className="text-center text-xs py-3 rounded-lg border border-dashed"
                      style={{
                        color: "var(--text-muted)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      No notes yet. Add one above!
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                      {notes.map((note) => (
                        <div
                          key={note.id}
                          className="flex items-start justify-between gap-2 rounded-lg border px-3 py-2.5"
                          style={{
                            borderColor: "var(--border-color)",
                            backgroundColor: "var(--bg-base)",
                          }}
                        >
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-sm leading-relaxed wrap-break-word"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {note.text}
                            </p>
                            <p
                              className="mt-1 text-xs"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {note.createdAt}
                            </p>
                          </div>
                          <button
                            onClick={() => onDeleteNote(note.id)}
                            className="shrink-0 rounded p-1 transition hover:bg-red-50 hover:text-red-400"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              className="h-3.5 w-3.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between gap-3 border-t px-6 py-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          {isEditing ? (
            /* Edit mode footer */
            <>
              <button
                onClick={handleCancelEdit}
                className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:opacity-80"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                  backgroundColor: "var(--bg-base)",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="rounded-lg bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] px-5 py-2 text-sm font-semibold text-white transition hover:brightness-95"
              >
                Save Changes
              </button>
            </>
          ) : (
            /* View mode footer */
            <>
              {isConfirmingDelete ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-red-500">
                    Sure?
                  </span>
                  <button
                    onClick={() => onDelete(ticket.id)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={() => setIsConfirmingDelete(false)}
                    className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:opacity-80"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-secondary)",
                      backgroundColor: "var(--bg-base)",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsConfirmingDelete(true)}
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
              )}

              <div className="flex items-center gap-2">
                {!isResolved && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:opacity-80"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-secondary)",
                      backgroundColor: "var(--bg-base)",
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
                        d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586Z"
                      />
                    </svg>
                    Edit
                  </button>
                )}

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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketDetailModal;
