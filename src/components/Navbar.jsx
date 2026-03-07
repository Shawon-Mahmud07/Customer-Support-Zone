const navItems = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

function Navbar() {
  return (
    <header className="border-b border-[#e4e6eb] bg-[#f3f3f3]">
      <div className="mx-auto flex h-18.5 w-full max-w-370 items-center justify-between px-5 sm:px-8">
        <a href="#" className="text-[clamp(1.7rem,1.2vw+1rem,2.3rem)] leading-none font-bold tracking-[-0.02em] text-[#131025]">
          CS - Ticket System
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          <nav>
            <ul className="flex items-center gap-8 text-[clamp(0.92rem,0.6vw+0.48rem,1.3rem)] font-medium tracking-[-0.01em] text-[#2a2a2a]">
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-(--primary-color)">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="inline-flex items-center gap-2.5 rounded-md bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] px-6 py-3 text-[clamp(1rem,0.65vw+0.58rem,1.4rem)] font-semibold tracking-[-0.01em] text-white transition hover:brightness-95">
            <span className="text-[1.1em] leading-none">+</span>
            <span>New Ticket</span>
          </button>
        </div>

        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-10 mt-3 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
            <li className="mt-1">
              <button className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] text-white hover:brightness-95">
                <span>+</span>
                New Ticket
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
