# 🎫 Customer Support Zone

A clean, responsive **Customer Support Ticket Management System** built with React 19, Tailwind CSS v4, and DaisyUI. Manage customer tickets from open to resolved — all in one focused interface.

**🔗 Live Demo:** [customer1-support-zone.netlify.app](https://customer1-support-zone.netlify.app)

---

## ✨ Features

### 🎟️ Ticket Management

- **View Tickets** — All customer tickets displayed in a responsive card grid
- **Create Tickets** — New ticket form with validation (Title, Description, Customer, Priority)
- **Edit Tickets** — Inline edit mode inside the detail modal (Open & In-Progress tickets)
- **Delete Tickets** — Delete with a two-step confirmation to prevent accidents
- **Ticket Details Modal** — Click any ticket card to view full details and take actions

### 🔍 Search, Filter & Sort

- **Search** — Real-time search by ticket title
- **Filter by Priority** — All / High / Medium / Low
- **Filter by Status** — All / Open / In-Progress
- **Sort** — Newest / Oldest / Priority (Ascending/Descending)
- **Reset Filters** — One-click reset for all active filters

### 📋 Task Workflow

- **Add to Task** — Move open tickets to the Task Status panel (In-Progress)
- **Complete Tasks** — Mark in-progress tickets as Resolved with one click
- **Resolved Task List** — View all resolved tickets in the sidebar

### 📝 Ticket Notes

- **Add Notes** — Write comments/notes on any ticket (press Enter or click Add)
- **Delete Notes** — Remove individual notes with the × button
- **Persistent Notes** — Notes saved to localStorage per ticket

### 📊 Dashboard Stats

- **Status Breakdown** — Progress bars for Open / In-Progress / Resolved with percentages
- **Priority Breakdown** — Progress bars for High / Medium / Low with percentages
- **Smart Alert** — Warning when High priority tickets need immediate attention
- **Live Counters** — Banner shows real-time Total / In-Progress / Resolved counts
- **Count Badges** — Live ticket count badges on Customer Tickets, Task Status, Resolved Task sections

### 🎨 UI & UX

- **Dark Mode Toggle** — Smooth Light/Dark theme switching with localStorage persistence
- **CSV Export** — Download all tickets (Open + In-Progress + Resolved) as a `.csv` file
- **Keyboard Shortcuts** — `N` New Ticket, `D` Dark Mode, `Esc` Close Modal
- **Toast Notifications** — Instant feedback on every action via React-Toastify
- **Fully Responsive** — Works on mobile, tablet, and desktop

### 💾 Data Persistence

- All tickets, task status, resolved tasks, notes, and theme saved in **localStorage**
- Data survives page refresh and browser restarts

---

## ⌨️ Keyboard Shortcuts

| Key   | Action                   |
| ----- |--------                  |
| `N`   | Open New Ticket modal    |
| `D`   | Toggle Dark / Light mode |
| `Esc` | Close any open modal     |

> Shortcuts are disabled when typing inside an input or textarea field.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| React | 19.2 | UI & state management |
| Vite | 7.3 | Build tool & dev server |
| Tailwind CSS | 4.2 | Utility-first styling |
| DaisyUI | 5.5 | UI component library |
| React-Toastify | 11.0 | Toast notifications |

---

## 📁 Project Structure

```plain text
Customer-Support-Zone/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── vector1.png
│   │   └── vector2.png
│   ├── components/
│   │   ├── Banner.jsx              # Stats cards + Dashboard breakdown
│   │   ├── Footer.jsx              # Site footer
│   │   ├── MainSection.jsx         # Ticket grid + Task Status sidebar
│   │   ├── Navbar.jsx              # Top nav: logo, dark mode, export, shortcuts
│   │   ├── NewTicketModal.jsx      # New ticket creation modal
│   │   └── TicketDetailModal.jsx   # Ticket detail, edit, notes, delete modal
│   ├── data/
│   │   └── tickets.json            # Initial ticket seed data
│   ├── App.jsx                     # Root component & all state management
│   ├── index.css                   # Global styles & CSS variables (light/dark)
│   └── main.jsx                    # App entry point
├── index.html
├── package.json
├── vite.config.js
└── netlify.toml
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Shawon-Mahmud07/Customer-Support-Zone.git

# Navigate to project folder
cd Customer-Support-Zone

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## 🔄 How It Works

```plain text
Open Ticket
    │
    │  "Add to Task" button
    ▼
In-Progress (Task Status panel)
    │
    │  "Complete" button
    ▼
Resolved (Resolved Task list)
```

**State Flow:**

- All state lives in `App.jsx` (single source of truth)
- `tickets` → full ticket list (Open + In-Progress)
- `taskStatus` → currently in-progress tickets
- `resolvedTasks` → completed tickets
- `ticketNotes` → notes/comments per ticket (keyed by ticket ID)
- Child components receive data via **props** and trigger updates via **callback functions**

---

## 🌐 Deploying to Netlify

The project includes a `netlify.toml` for zero-config deployment:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Just connect your GitHub repo to Netlify — it will build and deploy automatically on every push.

---

## 📝 React Concepts Used

| Concept | Where Used |
| --- | --- |
| `useState` | Tickets, task status, modal, dark mode, edit/delete states |
| `useEffect` | localStorage persistence, keyboard shortcuts, theme sync |
| `useMemo` | Filtered & sorted ticket list optimization |
| Props & Callbacks | Parent → child data flow |
| Conditional Rendering | Empty states, edit mode, confirm delete, modal visibility |
| Event Handling | onClick, onChange, onKeyDown |
| List Rendering | Ticket cards, task items, notes, resolved tasks |

---

## 🙏 Acknowledgements

- Design inspired by Figma community resources
- Icons from [Heroicons](https://heroicons.com)
- Deployed on [Netlify](https://netlify.com)
