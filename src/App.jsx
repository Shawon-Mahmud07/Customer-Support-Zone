import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import initialTickets from "./data/tickets.json";

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const inProgressCount = taskStatus.length;
  const resolvedCount = resolvedTasks.length;

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

  function handleCompleteTask(ticketId) {
    const selected = taskStatus.find((ticket) => ticket.id === ticketId);
    if (!selected) return;

    const completed = { ...selected, status: "Resolved" };

    setTaskStatus((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    setResolvedTasks((prev) => [completed, ...prev]);
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
    toast.success("Task marked as complete.");
  }

  // Memoize the UI state to prevent unnecessary re-renders of child components
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
      {/* Top section: navbar and status banner */}
      <Navbar />
      <Banner
        inProgressCount={uiState.inProgressCount}
        resolvedCount={uiState.resolvedCount}
      />
      {/* Main content section with tickets and task status */}
      <MainSection
        tickets={uiState.tickets}
        taskStatus={uiState.taskStatus}
        resolvedTasks={uiState.resolvedTasks}
        onAddToTask={handleAddToTask}
        onCompleteTask={handleCompleteTask}
      />
      <ToastContainer position="top-right" autoClose={1800} hideProgressBar theme="colored" />
    </div>
  );
}

export default App;
