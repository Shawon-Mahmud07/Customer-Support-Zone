// Status and priority styles for dynamic class application
const statusStyles = {
  Open: "bg-[#A6E9BC] text-[#087A2A]",
  "In-Progress": "bg-[#F4E18D] text-[#9A7400]",
  Resolved: "bg-[#CDECF9] text-[#0C6280]",
};

// Priority styles for dynamic class application
const priorityStyles = {
  High: "text-[#EF4444]",
  Medium: "text-[#F59E0B]",
  Low: "text-[#16A34A]",
};

function trimText(text, max = 92) {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}...`;
}

function TicketCard({ ticket, onAddToTask }) {
  const isResolved = ticket.status === "Resolved";

  return (
    <article
      role="button"
      tabIndex={isResolved ? -1 : 0}
      onClick={() => !isResolved && onAddToTask(ticket.id)}
      onKeyDown={(event) => {
        if (!isResolved && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onAddToTask(ticket.id);
        }
      }}
      className={`rounded-lg border border-[#e6e8ee] bg-white p-4 shadow-[0_5px_16px_rgba(30,41,59,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(30,41,59,0.12)] ${isResolved ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
    >
      {/* Ticket title + current status badge */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[clamp(1rem,0.35vw+0.88rem,1.35rem)] font-semibold leading-snug text-[#0f2137]">
          {ticket.title}
        </h3>
        <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[clamp(0.82rem,0.22vw+0.74rem,1rem)] font-medium ${statusStyles[ticket.status]}`}>
          <span className="h-2.5 w-2.5 rounded-full bg-current" />
          {ticket.status}
        </span>
      </div>

      <p className="mt-3 text-[clamp(0.9rem,0.2vw+0.82rem,1.1rem)] leading-tight text-[#5c6d82]">
        {trimText(ticket.description)}
      </p>

      {/* Metadata row: id, priority, customer, created date */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(0.84rem,0.22vw+0.75rem,1rem)]">
        <span className="font-medium text-[#64748b]">#{ticket.id}</span>
        <span className={`font-medium uppercase tracking-[0.02em] ${priorityStyles[ticket.priority]}`}>
          {ticket.priority} Priority
        </span>
        <span className="ml-auto text-[#6b7d92]">{ticket.customer}</span>
        <span className="inline-flex items-center gap-1.5 text-[#6b7d92]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
          </svg>
          {ticket.createdAt}
        </span>
      </div>
    </article>
  );
}

function MainSection({
  tickets,
  taskStatus,
  resolvedTasks,
  onAddToTask,
  onCompleteTask,
}) {
  return (
    <section className="mx-auto w-full max-w-370 px-5 pb-10 pt-4 sm:px-8 sm:pb-14">
      {/* Left: ticket cards, Right: task status panel */}
      <div className="flex flex-col-reverse gap-6 xl:grid xl:grid-cols-[2fr_1fr] xl:gap-8">
        <div>
          <h2 className="text-[clamp(1.9rem,0.8vw+1.45rem,2.8rem)] font-semibold text-[#2d4258]">
            Customer Tickets
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
            {/* Ticket cards in a 2-column grid on large screens */}
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} onAddToTask={onAddToTask} />
            ))}
          </div>
        </div>

        {/* Task status sidebar with instructions and resolved tasks */}
        <aside className="rounded-lg p-2 xl:pt-2">
          <h3 className="text-[clamp(1.7rem,0.6vw+1.35rem,2.2rem)] font-semibold text-[#2d4258]">
            Task Status
          </h3>

          {taskStatus.length === 0 ? (
            <p className="mt-1 text-[clamp(1rem,0.25vw+0.9rem,1.15rem)] text-[#6a7d91]">
              Select a ticket to add to Task Status
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {taskStatus.map((ticket) => (
                <article key={ticket.id} className="rounded-lg border border-[#e6e8ee] bg-white p-4 shadow-[0_5px_16px_rgba(30,41,59,0.08)]">
                  <h4 className="text-[clamp(1.12rem,0.3vw+0.98rem,1.3rem)] font-semibold text-[#0f2137]">
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

          <h3 className="mt-10 text-[clamp(1.7rem,0.6vw+1.35rem,2.2rem)] font-semibold text-[#2d4258]">
            Resolved Task
          </h3>
          {resolvedTasks.length === 0 ? (
            <p className="mt-1 text-[clamp(1rem,0.25vw+0.9rem,1.15rem)] text-[#6a7d91]">
              No resolved tasks yet.
            </p>
          ) : (
            <ul className="mt-3 space-y-2 text-[clamp(1rem,0.25vw+0.9rem,1.15rem)] text-[#3f5167]">
              {resolvedTasks.map((ticket) => (
                <li key={ticket.id} className="rounded-md bg-white px-3 py-2 shadow-[0_3px_10px_rgba(30,41,59,0.08)]">
                  {ticket.title}
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </section>
  );
}

export default MainSection;
