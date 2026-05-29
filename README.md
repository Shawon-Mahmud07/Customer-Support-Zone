# 🎫 Customer Support Zone

A clean, responsive **Customer Support Ticket Management System** built with React 19, Tailwind CSS v4, and DaisyUI. Manage customer tickets from open to resolved — all in one focused interface.

**🔗 Live Demo:** [customer1-support-zone.netlify.app](https://customer1-support-zone.netlify.app)

---

## ✨ Features

- **View Tickets** — All customer tickets displayed in a responsive card grid
- **Search, Filter & Sort** — Search by title, filter by priority/status, and sort (newest/oldest/priority)
- **Add to Task** — Click any open ticket to move it to the Task Status panel
- **Complete Tasks** — Mark in-progress tickets as resolved with one click
- **Delete Tickets** — Remove any ticket instantly with the trash icon
- **New Ticket Modal** — Create new tickets via a validated form modal
- **Ticket Details Modal** — Click a ticket card to view full details and take actions
- **Live Counters** — Banner shows real-time Total / In-Progress / Resolved counts
- **Toast Notifications** — Instant feedback on every action via React-Toastify
- **Theme Toggle (Light/Dark)** — DaisyUI theme switching with localStorage persistence
- **Persistent State** — Tickets, task status, resolved tasks (and theme) persist in localStorage
- **Fully Responsive** — Works on mobile, tablet, and desktop

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
│   │   ├── Banner.jsx        # In-Progress & Resolved counters
│   │   ├── Footer.jsx        # Site footer
│   │   ├── MainSection.jsx   # Ticket grid + Task Status sidebar
│   │   ├── Navbar.jsx        # Top navigation bar
│   │   └── NewTicketModal.jsx # New ticket creation modal
│   ├── data/
│   │   └── tickets.json      # Initial ticket seed data
│   ├── App.jsx               # Root component & state management
│   ├── index.css             # Global styles
│   └── main.jsx              # App entry point
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
    │  click card
    ▼
In-Progress (Task Status panel)
    │
    │  click Complete
    ▼
Resolved (Resolved Task list)
```

**State Flow:**

- All state lives in `App.jsx` (single source of truth)
- `tickets` → full ticket list
- `taskStatus` → currently in-progress tickets
- `resolvedTasks` → completed tickets
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
| `useState` | Ticket list, task status, modal open/close |
| `useMemo` | Optimizing UI state passed to child components |
| Props & Callbacks | Parent → child data flow |
| Conditional Rendering | Empty states, modal visibility |
| Event Handling | onClick, onChange, onKeyDown |
| List Rendering | Ticket cards, task status items |

---

## 🙏 Acknowledgements

- Design inspired by Figma community resources
- Icons from [Heroicons](https://heroicons.com)
- Deployed on [Netlify](https://netlify.com)