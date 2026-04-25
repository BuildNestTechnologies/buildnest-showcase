import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/buildnest-logo.png";
import { NAV_LINKS } from "@/data/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-border/60 bg-hero/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="BuildNest Technologies" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Build<span className="text-primary">Nest</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `nav-underline text-sm font-medium transition-colors ${
                    isActive ? "active text-white" : "text-muted-foreground hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-red transition hover:scale-[1.03] md:inline-flex"
        >
          Start Project
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-hero md:hidden"
          >
            <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-base font-medium transition ${
                        isActive ? "bg-card text-white" : "text-muted-foreground hover:bg-card hover:text-white"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Start Project
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
