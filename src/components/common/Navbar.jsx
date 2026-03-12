import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../../assets/images/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-3 left-0 right-0 mx-auto z-[100] w-[92%] max-w-6xl">
        <nav
          className="flex items-center justify-between px-4 sm:px-6 py-3
                        rounded-full bg-soft backdrop-blur-xl
                        border border-border text-text"
        >
          {/* LOGO */}
          <img
            src={logo}
            alt="BIMFROX Logo"
            className="h-8 w-auto object-contain transition duration-300
                       hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]"
          />

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <li key={l.name}>
                <NavLink
                  to={l.path}
                  className={({ isActive }) =>
                    `relative px-3 py-1 transition-all duration-300
                    ${
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative group">
                      {l.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                      ></span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <NavLink
              to="/contact"
              className="hidden md:block px-4 py-1.5 rounded-full
                         bg-btn text-btnText text-sm
                         transition duration-300
                         hover:scale-105 hover:shadow-[0_0_12px_rgba(124,58,237,0.5)]"
            >
              Let’s Talk
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full bg-soft border border-border"  
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden">
          <div
            className="absolute top-24 left-1/2 -translate-x-1/2
                       w-[90%] bg-card rounded-2xl p-6 space-y-4 text-center"
          >
            {links.map((l) => (
              <NavLink
                key={l.name}
                to={l.path}
                onClick={() => setOpen(false)}
                className="block py-2 rounded-lg transition duration-300
                           hover:bg-primary/10 hover:text-primary"
              >
                {l.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
