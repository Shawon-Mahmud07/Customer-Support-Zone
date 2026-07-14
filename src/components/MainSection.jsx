import { useState } from "react";
import TicketDetailModal from "./TicketDetailModal";
import {
  FilterBarSkeleton,
  TicketGridSkeleton,
  TaskListSkeleton,
} from "./TicketSkeleton";

const statusStyles = {
  Open: "bg-[#A6E9BC] text-[#087A2A]",
  "In-Progress": "bg-[#F4E18D] text-[#9A7400]",
  Resolved: "bg-[#CDECF9] text-[#0C6280]",
};

const priorityStyles = {
  High: "text-[#EF4444]",
  Medium: "text-[#F59E0B]",
  Low: "text-[#16A34A]",
};

const PRIORITIES = ["All", "High", "Medium", "Low"];
const STATUSES = ["All", "Open", "In-Progress", "Resolved"];
// Sorting options with value and label
const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "priority-asc", label: "Priority ↑" },
  { value: "priority-desc", label: "Priority ↓" },
];

const ITEMS_PER_PAGE = 6;

function trimText(text, max = 92) {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}...`;
}

function FilterBar({
  search,
  onSearchChange,
  filterPriority,
  onFilterPriority,
  filterStatus,
  onFilterStatus,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative min-w-50 flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
            style={{ color: "var(--text-muted)" }}
          >
            <circle cx="11" cy="11" r="8" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search tickets..."
            className="w-full rounded-lg border py-2 pl-9 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-[#632EE3]/20 focus:border-[#632EE3]"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--input-border)",
              color: "var(--text-primary)",
            }}
          />
          {search && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--text-muted)" }}
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Sort */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
            style={{ color: "var(--text-muted)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M6 12h12M9 18h6"
            />
          </svg>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none rounded-lg border py-2 pl-9 pr-8 text-sm font-medium outline-none transition focus:border-[#632EE3] focus:ring-2 focus:ring-[#632EE3]/20 cursor-pointer"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--input-border)",
              color: "var(--text-primary)",
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
            style={{ color: "var(--text-muted)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6 9 6 6 6-6"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Priority */}
        <div
          className="flex flex-wrap items-center gap-1 rounded-lg border px-1 py-1"
          style={{
            backgroundColor: "var(--filter-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          {PRIORITIES.map((p) => (
            <button
              key={p}
              onClick={() => onFilterPriority(p)}
              className="rounded-md px-3 py-1 text-xs font-medium transition"
              style={
                filterPriority === p
                  ? { backgroundColor: "#632EE3", color: "#fff" }
                  : { color: "var(--text-secondary)" }
              }
            >
              {p}
            </button>
          ))}
        </div>

        {/* Status */}
        <div
          className="flex flex-wrap items-center gap-1 rounded-lg border px-1 py-1"
          style={{
            backgroundColor: "var(--filter-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => onFilterStatus(s)}
              className="rounded-md px-3 py-1 text-xs font-medium transition"
              style={
                filterStatus === s
                  ? { backgroundColor: "#632EE3", color: "#fff" }
                  : { color: "var(--text-secondary)" }
              }
            >
              {s}
            </button>
          ))}
        </div>

        {/* Reset */}
        {(filterPriority !== "All" || filterStatus !== "All" || search) && (
          <button
            onClick={() => {
              onFilterPriority("All");
              onFilterStatus("All");
              onSearchChange("");
            }}
            className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-100"
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
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
// Simple pagination component
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition disabled:opacity-40"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition"
          style={
            p === currentPage
              ? {
                  backgroundColor: "#632EE3",
                  borderColor: "#632EE3",
                  color: "#fff",
                }
              : {
                  backgroundColor: "var(--filter-bg)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                }
          }
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition disabled:opacity-40"
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function TicketCard({ ticket, onOpenDetail }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpenDetail(ticket)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDetail(ticket);
        }
      }}
      className="cursor-pointer rounded-lg border p-4 shadow-[0_5px_16px_rgba(30,41,59,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(30,41,59,0.12)]"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className="text-[clamp(1rem,0.35vw+0.88rem,1.35rem)] font-semibold leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {ticket.title}
        </h3>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[clamp(0.82rem,0.22vw+0.74rem,1rem)] font-medium ${statusStyles[ticket.status]}`}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-current" />
          {ticket.status}
        </span>
      </div>

      <p
        className="mt-3 text-[clamp(0.9rem,0.2vw+0.82rem,1.1rem)] leading-tight"
        style={{ color: "var(--text-secondary)" }}
      >
        {trimText(ticket.description)}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[clamp(0.84rem,0.22vw+0.75rem,1rem)]">
        <span className="font-medium" style={{ color: "var(--text-muted)" }}>
          #{ticket.id}
        </span>
        <span
          className={`font-medium uppercase tracking-[0.02em] ${priorityStyles[ticket.priority]}`}
        >
          {ticket.priority} Priority
        </span>
        <span className="ml-auto" style={{ color: "var(--text-secondary)" }}>
          {ticket.customer}
        </span>
        <span
          className="inline-flex items-center gap-1.5"
          style={{ color: "var(--text-secondary)" }}
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
              d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
            />
          </svg>
          {ticket.createdAt}
        </span>
      </div>

      {/* Assigned agent */}
      {ticket.assignedTo && (
        <div className="mt-2 flex items-center gap-1.5">
          <div
            className="flex h-5 w-5 items-center justify-center rounded-full text-[0.6rem] font-bold text-white"
            style={{ backgroundColor: "#632EE3" }}
          >
            {ticket.assignedTo.initials}
          </div>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {ticket.assignedTo.name}
          </span>
        </div>
      )}
      {/* Click hint */}
      <p className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>
        Click to view details
      </p>
    </article>
  );
}

function MainSection({
  tickets,
  taskStatus,
  resolvedTasks,
  onAddToTask,
  onDeleteTicket,
  search,
  onSearchChange,
  filterPriority,
  onFilterPriority,
  filterStatus,
  onFilterStatus,
  sortBy,
  onSortChange,
  onEditTicket,
  ticketNotes,
  onAddNote,
  onCompleteTask,
  onDeleteNote,
  agents,
  onAssignTicket,
  isLoading,
}) {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [expandedResolved, setExpandedResolved] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevFilters, setPrevFilters] = useState({
    search,
    filterPriority,
    filterStatus,
    sortBy,
  });
  // Check if any filter has changed
  const filtersChanged =
    prevFilters.search !== search ||
    prevFilters.filterPriority !== filterPriority ||
    prevFilters.filterStatus !== filterStatus ||
    prevFilters.sortBy !== sortBy;
  // Reset to first page when filters change
  if (filtersChanged) {
    setPrevFilters({ search, filterPriority, filterStatus, sortBy });
    setCurrentPage(1);
  }

  // Pagination logic
  const totalPages = Math.max(1, Math.ceil(tickets.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedTickets = tickets.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  );

  return (
    <section className="mx-auto w-full max-w-370 px-5 pb-10 pt-4 sm:px-8 sm:pb-14">
      <div className="flex flex-col-reverse gap-6 xl:grid xl:grid-cols-[2fr_1fr] xl:gap-8">
        <div>
          <h2
            className="text-[clamp(1.9rem,0.8vw+1.45rem,2.8rem)] font-semibold flex items-center gap-3"
            style={{ color: "var(--text-primary)" }}
          >
            Customer Tickets
            <span className="inline-flex items-center justify-center rounded-full bg-[#632EE3] px-2.5 py-0.5 text-sm font-semibold text-white min-w-7">
              {isLoading ? "…" : tickets.length}
            </span>
          </h2>

          {isLoading ? (
            <FilterBarSkeleton />
          ) : (
            <div className="fade-in">
              <FilterBar
                search={search}
                onSearchChange={onSearchChange}
                filterPriority={filterPriority}
                onFilterPriority={onFilterPriority}
                filterStatus={filterStatus}
                onFilterStatus={onFilterStatus}
                sortBy={sortBy}
                onSortChange={onSortChange}
              />
            </div>
          )}

          {isLoading ? (
            <TicketGridSkeleton count={6} />
          ) : tickets.length === 0 ? (
            <div
              className="fade-in mt-8 flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-12 w-12"
                style={{ color: "var(--border-color)" }}
              >
                <circle cx="11" cy="11" r="8" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35"
                />
              </svg>
              <p
                className="mt-4 text-lg font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                No tickets found
              </p>
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="fade-in mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
              {paginatedTickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onOpenDetail={setSelectedTicket}
                />
              ))}
            </div>
          )}
          {!isLoading && (
            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>

        <aside className="rounded-lg p-2 xl:pt-2">
          {/* Task Status */}
          <h3
            className="text-[clamp(1.7rem,0.6vw+1.35rem,2.2rem)] font-semibold flex items-center gap-3"
            style={{ color: "var(--text-primary)" }}
          >
            Task Status
            <span className="inline-flex items-center justify-center rounded-full bg-[#F4E18D] px-2.5 py-0.5 text-sm font-semibold text-[#9A7400] min-w-7">
              {isLoading ? "…" : taskStatus.length}
            </span>
          </h3>

          {isLoading ? (
            <TaskListSkeleton rows={2} />
          ) : taskStatus.length === 0 ? (
            <p
              className="fade-in mt-1 text-[clamp(1rem,0.25vw+0.9rem,1.15rem)]"
              style={{ color: "var(--text-secondary)" }}
            >
              Select a ticket to add to Task Status
            </p>
          ) : (
            <div className="fade-in mt-4 space-y-3">
              {taskStatus.map((ticket) => (
                <article
                  key={ticket.id}
                  className="rounded-lg border p-4 shadow-[0_5px_16px_rgba(30,41,59,0.08)]"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <h4
                    className="text-[clamp(1.12rem,0.3vw+0.98rem,1.3rem)] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {ticket.title}
                  </h4>
                  <button
                    onClick={() => onCompleteTask(ticket.id)}
                    className="mt-3 w-full rounded-md bg-[#08A63E] py-2.5 text-[clamp(1rem,0.25vw+0.88rem,1.1rem)] font-semibold text-white transition hover:brightness-95"
                  >
                    Complete
                  </button>
                </article>
              ))}
            </div>
          )}

          <h3
            className="mt-10 text-[clamp(1.7rem,0.6vw+1.35rem,2.2rem)] font-semibold flex items-center gap-3"
            style={{ color: "var(--text-primary)" }}
          >
            Resolved Task
            <span className="inline-flex items-center justify-center rounded-full bg-[#CDECF9] px-2.5 py-0.5 text-sm font-semibold text-[#0C6280] min-w-7">
              {isLoading ? "…" : resolvedTasks.length}
            </span>
          </h3>

          {isLoading ? (
            <TaskListSkeleton rows={2} />
          ) : resolvedTasks.length === 0 ? (
            <p
              className="fade-in mt-1 text-[clamp(1rem,0.25vw+0.9rem,1.15rem)]"
              style={{ color: "var(--text-secondary)" }}
            >
              No resolved tasks yet.
            </p>
          ) : (
            <ul className="fade-in mt-3 space-y-2">
              {resolvedTasks.map((ticket) => {
                const isExpanded = expandedResolved === ticket.id;
                const priorityColors = {
                  High: { color: "#EF4444", bg: "#FEF2F2" },
                  Medium: { color: "#F59E0B", bg: "#FFFBEB" },
                  Low: { color: "#16A34A", bg: "#F0FDF4" },
                };
                const p = priorityColors[ticket.priority];

                return (
                  <li
                    key={ticket.id}
                    className="overflow-hidden rounded-lg border shadow-[0_3px_10px_rgba(30,41,59,0.08)] transition-all"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    {/* Row — always visible */}
                    <button
                      onClick={() =>
                        setExpandedResolved(isExpanded ? null : ticket.id)
                      }
                      className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left transition hover:opacity-80"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        {/* Green check */}
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A6E9BC]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#087A2A"
                            strokeWidth={2.5}
                            className="h-3 w-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </span>
                        <span
                          className="truncate text-sm font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {ticket.title}
                        </span>
                      </div>

                      {/* Chevron */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        style={{ color: "var(--text-muted)" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m6 9 6 6 6-6"
                        />
                      </svg>
                    </button>

                    {/* Expanded detail */}
                    {isExpanded && (
                      <div
                        className="border-t px-3 py-3 space-y-2"
                        style={{
                          borderColor: "var(--border-color)",
                          backgroundColor: "var(--bg-base)",
                        }}
                      >
                        {/* Customer */}
                        <div className="flex items-center gap-2">
                          <div
                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                            style={{ backgroundColor: "#632EE3" }}
                          >
                            {ticket.customer?.charAt(0).toUpperCase()}
                          </div>
                          <span
                            className="text-xs"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {ticket.customer}
                          </span>
                        </div>

                        {/* Priority + Created */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="rounded-full px-2 py-0.5 text-xs font-semibold"
                            style={{ color: p.color, backgroundColor: p.bg }}
                          >
                            {ticket.priority} Priority
                          </span>
                          <span
                            className="text-xs"
                            style={{ color: "var(--text-muted)" }}
                          >
                            Created: {ticket.createdAt}
                          </span>
                        </div>

                        {/* Resolved At */}
                        <div
                          className="flex items-center gap-1.5 rounded-md px-2 py-1.5"
                          style={{ backgroundColor: "#A6E9BC22" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#087A2A"
                            strokeWidth={2}
                            className="h-3.5 w-3.5 shrink-0"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6l4 2"
                            />
                          </svg>
                          <span className="text-xs font-medium text-[#087A2A]">
                            Resolved: {ticket.resolvedAt ?? "—"}
                          </span>
                        </div>

                        {/* Description */}
                        {ticket.description && (
                          <p
                            className="text-xs leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {ticket.description.length > 100
                              ? ticket.description.slice(0, 100) + "..."
                              : ticket.description}
                          </p>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </aside>
      </div>

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <TicketDetailModal
          ticket={selectedTicket}
          notes={ticketNotes[selectedTicket?.id] || []}
          agents={agents}
          onAssignTicket={(agent) => onAssignTicket(selectedTicket.id, agent)}
          onAddNote={(text) => onAddNote(selectedTicket.id, text)}
          onDeleteNote={(noteId) => onDeleteNote(selectedTicket.id, noteId)}
          onClose={() => setSelectedTicket(null)}
          onAddToTask={(id) => {
            onAddToTask(id);
            setSelectedTicket(null);
          }}
          onDelete={(id) => {
            onDeleteTicket(id);
            setSelectedTicket(null);
          }}
          onEdit={(id, fields) => {
            onEditTicket(id, fields);
            setSelectedTicket(null);
          }}
        />
      )}
    </section>
  );
}

export default MainSection;
