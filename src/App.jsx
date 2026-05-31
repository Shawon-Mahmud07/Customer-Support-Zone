import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import NewTicketModal from "./components/NewTicketModal";
import initialTickets from "./data/tickets.json";

function loadState(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

const PRIORITY_ORDER = { High: 0, Medium: 1, Low: 2 };

function App() {
  const [tickets, setTickets] = useState(() =>
    loadState("csz_tickets", initialTickets),
  );
  const [taskStatus, setTaskStatus] = useState(() =>
    loadState("csz_taskStatus", []),
  );
  const [resolvedTasks, setResolvedTasks] = useState(() =>
    loadState("csz_resolvedTasks", []),
  );
  const [ticketNotes, setTicketNotes] = useState(() =>
    loadState("csz_ticketNotes", {}),
  );
  const [showModal, setShowModal] = useState(false);

  // Search & Filter state
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // Sort state: "newest" | "oldest" | "priority-asc" | "priority-desc"
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    localStorage.setItem("csz_tickets", JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem("csz_taskStatus", JSON.stringify(taskStatus));
  }, [taskStatus]);

  useEffect(() => {
    localStorage.setItem("csz_resolvedTasks", JSON.stringify(resolvedTasks));
  }, [resolvedTasks]);
  // Persist ticket notes
  useEffect(() => {
    localStorage.setItem("csz_ticketNotes", JSON.stringify(ticketNotes));
  }, [ticketNotes]);

  // Filtered + Sorted tickets
  const filteredTickets = useMemo(() => {
    let result = tickets.filter((ticket) => {
      const matchSearch = ticket.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchPriority =
        filterPriority === "All" || ticket.priority === filterPriority;
      const matchStatus =
        filterStatus === "All" || ticket.status === filterStatus;
      return matchSearch && matchPriority && matchStatus;
    });

    result = [...result].sort((a, b) => {
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "oldest") return a.id - b.id;
      if (sortBy === "priority-asc")
        return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
      if (sortBy === "priority-desc")
        return PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority];
      return 0;
    });

    return result;
  }, [tickets, search, filterPriority, filterStatus, sortBy]);

  const totalCount = tickets.length + taskStatus.length + resolvedTasks.length;
  const inProgressCount = taskStatus.length;
  const resolvedCount = resolvedTasks.length;

  function handleNewTicketSubmit(form) {
    const newTicket = {
      id: Date.now(),
      title: form.title.trim(),
      description: form.description.trim(),
      customer: form.customer.trim(),
      priority: form.priority,
      status: "Open",
      createdAt: new Date().toLocaleDateString("en-US"),
    };
    setTickets((prev) => [newTicket, ...prev]);
    setShowModal(false);
    toast.success("New ticket created!");
  }
// Add to Task Status
  function handleAddToTask(ticketId) {
    const selected = tickets.find((ticket) => ticket.id === ticketId);
    if (!selected) return;

    if (taskStatus.some((ticket) => ticket.id === ticketId)) {
      toast.info("Ticket already in Task Status.");
      return;
    }

    const updated = { ...selected, status: "In-Progress" };
    setTaskStatus((prev) => [updated, ...prev]);
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: "In-Progress" } : ticket,
      ),
    );
    toast.success("Ticket added to Task Status.");
  }
// Delete ticket
  function handleDeleteTicket(ticketId) {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    setTaskStatus((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    toast.error("Ticket deleted.");
  }

  // Mark task as complete
  function handleCompleteTask(ticketId) {
    const selected = taskStatus.find((ticket) => ticket.id === ticketId);
    if (!selected) return;

    const completed = { ...selected, status: "Resolved" };
    setTaskStatus((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    setResolvedTasks((prev) => [completed, ...prev]);
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    toast.success("Task marked as complete.");
  }

  // Edit ticket
  function handleEditTicket(ticketId, updatedFields) {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, ...updatedFields } : ticket,
      ),
    );
    setTaskStatus((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, ...updatedFields } : ticket,
      ),
    );
    toast.success("Ticket updated successfully!");
  }
  // Add note to ticket
  function handleAddNote(ticketId, noteText) {
    const newNote = {
      id: Date.now(),
      text: noteText.trim(),
      createdAt: new Date().toLocaleString("en-US"),
    };
    setTicketNotes((prev) => ({
      ...prev,
      [ticketId]: [newNote, ...(prev[ticketId] || [])],
    }));
  }

  function handleDeleteNote(ticketId, noteId) {
    setTicketNotes((prev) => ({
      ...prev,
      [ticketId]: (prev[ticketId] || []).filter((n) => n.id !== noteId),
    }));
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar onNewTicket={() => setShowModal(true)} />
      <Banner
        totalCount={totalCount}
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      />
      <MainSection
        onEditTicket={handleEditTicket}
        tickets={filteredTickets}
        taskStatus={taskStatus}
        resolvedTasks={resolvedTasks}
        onAddToTask={handleAddToTask}
        onCompleteTask={handleCompleteTask}
        onDeleteTicket={handleDeleteTicket}
        search={search}
        onSearchChange={setSearch}
        filterPriority={filterPriority}
        onFilterPriority={setFilterPriority}
        filterStatus={filterStatus}
        onFilterStatus={setFilterStatus}
        sortBy={sortBy}
        onSortChange={setSortBy}
        ticketNotes={ticketNotes}
        onAddNote={handleAddNote}
        onDeleteNote={handleDeleteNote}
      />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar
        theme="colored"
      />

      {showModal && (
        <NewTicketModal
          onClose={() => setShowModal(false)}
          onSubmit={handleNewTicketSubmit}
        />
      )}
    </div>
  );
}

export default App;
