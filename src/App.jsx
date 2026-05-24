import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import NewTicketModal from "./components/NewTicketModal";
import initialTickets from "./data/tickets.json";

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  function handleDeleteTicket(ticketId) {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    setTaskStatus((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    toast.error("Ticket deleted.");
  }

  function handleCompleteTask(ticketId) {
    const selected = taskStatus.find((ticket) => ticket.id === ticketId);
    if (!selected) return;

    const completed = { ...selected, status: "Resolved" };
    setTaskStatus((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    setResolvedTasks((prev) => [completed, ...prev]);
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    toast.success("Task marked as complete.");
  }

  const uiState = useMemo(
    () => ({
      tickets,
      taskStatus,
      resolvedTasks,
      inProgressCount,
      resolvedCount,
    }),
    [tickets, taskStatus, resolvedTasks, inProgressCount, resolvedCount],
  );

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar onNewTicket={() => setShowModal(true)} />
      <Banner
        inProgressCount={uiState.inProgressCount}
        resolvedCount={uiState.resolvedCount}
      />
      <MainSection
        tickets={uiState.tickets}
        taskStatus={uiState.taskStatus}
        resolvedTasks={uiState.resolvedTasks}
        onAddToTask={handleAddToTask}
        onCompleteTask={handleCompleteTask}
        onDeleteTicket={handleDeleteTicket}
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
