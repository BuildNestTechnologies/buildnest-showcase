"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
      suppressHydrationWarning
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/buildnest-logo.png" alt="BuildNest Technologies" width={140} height={48} className="h-10 w-auto object-contain" priority />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Build<span className="text-primary">Nest</span> <span className="hidden sm:inline text-muted-foreground font-medium text-sm">Technologies</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => {
            const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <li key={l.to}>
                <Link
                  href={l.to}
                  className={`nav-underline text-sm font-medium transition-colors ${
                    isActive ? "active text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-4 md:flex" suppressHydrationWarning>
          <ThemeToggle />
          <Link
            href="/contact"
            className="hover-button-advanced inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Start Project
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden" suppressHydrationWarning>
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground bg-background"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-b border-border bg-background shadow-lg md:hidden"
          >
            <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => {
                const isActive = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
                return (
                  <li key={l.to}>
                    <Link
                      href={l.to}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 text-base font-medium transition ${
                        isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover-button-advanced"
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
