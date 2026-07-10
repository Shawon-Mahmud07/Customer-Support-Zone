import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import NewTicketModal from "./components/NewTicketModal";
import initialTickets from "./data/tickets.json";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";
import ProductsServices from "./components/ProductsServices";
import ContactSales from "./components/ContactSales";
import CustomerStories from "./components/CustomerStories";
import DownloadApps from "./components/DownloadApps";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";

function loadState(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}
// Priority order for sorting
const PRIORITY_ORDER = { High: 0, Medium: 1, Low: 2 };

// App component
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("csz_darkMode") === "true";
    document.documentElement.setAttribute(
      "data-theme",
      saved ? "dark" : "light",
    );
    return saved;
  });
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

  // Team members for About Us page
  const [agents] = useState([
    { id: 1, name: "Shawon Mahmud", initials: "SM" },
    { id: 2, name: "Alex Rahman", initials: "AR" },
    { id: 3, name: "Sara Khan", initials: "SK" },
    { id: 4, name: "Rafi Ahmed", initials: "RA" },
    { id: 5, name: "Nadia Islam", initials: "NI" },
  ]);
  const [showModal, setShowModal] = useState(false);
  // About Us state
  const [showAboutUs, setShowAboutUs] = useState(false);

  // Search & Filter state
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // Sort state: "newest" | "oldest" | "priority-asc" | "priority-desc"
  const [sortBy, setSortBy] = useState("newest");
  // Our Mission state
  const [showOurMission, setShowOurMission] = useState(false);
  const [showProductsServices, setShowProductsServices] = useState(false);
  const [showContactSales, setShowContactSales] = useState(false);
  const [showCustomerStories, setShowCustomerStories] = useState(false);
  const [showDownloadApps, setShowDownloadApps] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);

  // Persist tickets, task status, resolved tasks, and ticket notes to localStorage
  useEffect(() => {
    localStorage.setItem("csz_tickets", JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem("csz_taskStatus", JSON.stringify(taskStatus));
  }, [taskStatus]);

  useEffect(() => {
    localStorage.setItem("csz_resolvedTasks", JSON.stringify(resolvedTasks));
  }, [resolvedTasks]);

  // Persist dark mode preference
  useEffect(() => {
    localStorage.setItem("csz_darkMode", darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);
  // Persist ticket notes
  useEffect(() => {
    localStorage.setItem("csz_ticketNotes", JSON.stringify(ticketNotes));
  }, [ticketNotes]);

  // Keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e) {
      // Don't trigger shortcuts if user is typing in an input/textarea/select
      const tag = document.activeElement?.tagName;
      const isTyping =
        tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";

      if (isTyping) return;
      // N — New ticket modal
      if ((e.key === "n" || e.key === "N") && !showModal) {
        e.preventDefault();
        setShowModal(true);
      }

      // Esc — Close modal
      if (e.key === "Escape") {
        setShowModal(false);
      }

      // D — Dark mode toggle
      if (e.key === "d" || e.key === "D") {
        e.preventDefault();
        setDarkMode((prev) => !prev);
      }
    }
    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

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
  // Ticket count
  const totalCount = tickets.length + taskStatus.length + resolvedTasks.length;
  const inProgressCount = taskStatus.length;
  const resolvedCount = resolvedTasks.length;

  // Add new ticket
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
    // Update ticket status to "In-Progress" and move it to taskStatus
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

    const completed = {
      ...selected,
      status: "Resolved",
      resolvedAt: new Date().toLocaleString("en-US"),
    };
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

  // Delete note from ticket
  function handleDeleteNote(ticketId, noteId) {
    setTicketNotes((prev) => ({
      ...prev,
      [ticketId]: (prev[ticketId] || []).filter((n) => n.id !== noteId),
    }));
  }

  // Assign ticket to agent
  function handleAssignTicket(ticketId, agent) {
    setTickets((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, assignedTo: agent } : t)),
    );
    setTaskStatus((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, assignedTo: agent } : t)),
    );
    if (agent) {
      toast.success(`Ticket assigned to ${agent.name}!`);
    } else {
      toast.info("Ticket unassigned.");
    }
  }

  //  Export all tickets to CSV
  function handleExportCSV() {
    const allTickets = [...tickets, ...taskStatus, ...resolvedTasks];

    if (allTickets.length === 0) {
      toast.info("No tickets to export.");
      return;
    }

    const headers = [
      "ID",
      "Title",
      "Description",
      "Customer",
      "Priority",
      "Status",
      "Created At",
    ];

    const rows = allTickets.map((t) => [
      t.id,
      `"${t.title.replace(/"/g, '""')}"`,
      `"${t.description.replace(/"/g, '""')}"`,
      `"${t.customer.replace(/"/g, '""')}"`,
      t.priority,
      t.status,
      t.createdAt,
    ]);
    const csvContent = [
      headers.join(","),
      ...rows.map((r) => r.join(",")),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `tickets_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success(`${allTickets.length} tickets exported!`);
  }

  // Show About Us page
  if (showAboutUs) {
    return <AboutUs onBack={() => setShowAboutUs(false)} />;
  }

  // Show Our Mission page
  if (showOurMission) {
    return <OurMission onBack={() => setShowOurMission(false)} />;
  }
  // show check:
  if (showContactSales) {
    return <ContactSales onBack={() => setShowContactSales(false)} />;
  }
  // Show Products & Services page
  if (showProductsServices) {
    return <ProductsServices onBack={() => setShowProductsServices(false)} />;
  }
  // Show Customer Stories page
  if (showCustomerStories) {
    return <CustomerStories onBack={() => setShowCustomerStories(false)} />;
  }
  // Show Download Apps page
  if (showDownloadApps) {
    return <DownloadApps onBack={() => setShowDownloadApps(false)} />;
  }
// Show Privacy Policy page
  if (showPrivacyPolicy) {
    return <PrivacyPolicy onBack={() => setShowPrivacyPolicy(false)} />;
  }
  // Show Terms & Conditions page
  if (showTermsConditions) {
    return <TermsConditions onBack={() => setShowTermsConditions(false)} />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      {/*  */}
      <Navbar
        onNewTicket={() => setShowModal(true)}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((prev) => !prev)}
        onExportCSV={handleExportCSV}
      />
      {/* Banner */}
      <Banner
        totalCount={totalCount}
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
        openCount={tickets.filter((t) => t.status === "Open").length}
        highCount={tickets.filter((t) => t.priority === "High").length}
        mediumCount={tickets.filter((t) => t.priority === "Medium").length}
        lowCount={tickets.filter((t) => t.priority === "Low").length}
      />
      {/* Main section */}
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
        agents={agents}
        onAssignTicket={handleAssignTicket}
      />
      {/* Footer */}
      <Footer
        onAboutUs={() => setShowAboutUs(true)}
        onOurMission={() => setShowOurMission(true)}
        onContactSales={() => setShowContactSales(true)}
        onProductsServices={() => setShowProductsServices(true)}
        onCustomerStories={() => setShowCustomerStories(true)}
        onDownloadApps={() => setShowDownloadApps(true)}
        onPrivacyPolicy={() => setShowPrivacyPolicy(true)}
        onTermsConditions={() => setShowTermsConditions(true)}
      />
      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar
        theme="colored"
      />
      {/* New Ticket Modal */}
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
