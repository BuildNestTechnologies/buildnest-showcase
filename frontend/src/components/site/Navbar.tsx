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
   className={`fixed inset-x-0 top-4 z-40 transition-all duration-300 px-4 md:px-8`}
   suppressHydrationWarning
  >
   <nav className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-6 rounded-full transition-all duration-300 ${
    scrolled ? "border border-border/40 bg-background/90 backdrop-blur-xl shadow-md" : "bg-transparent"
   }`}>
    <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
     <Image src="/buildnest-logo.png" alt="BuildNest Technologies" width={180} height={48} className="h-10 w-auto object-contain" priority />
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
      initial={{ opacity: 0, scale: 0.95, transformOrigin: "top right" }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-0 right-4 w-[280px] rounded-[2rem] bg-primary text-primary-foreground shadow-2xl md:hidden z-50 overflow-hidden border border-primary-foreground/10"
     >
      <div className="flex items-center justify-between p-6 pb-2">
       <span className="font-medium text-xl">Menu</span>
       <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-primary-foreground/80 hover:text-white transition-colors">
        <X className="h-5 w-5" strokeWidth={1.5} />
       </button>
      </div>
      <ul className="flex flex-col p-4 pt-2 pb-6">
       {NAV_LINKS.map((l) => (
        <li key={l.to}>
         <Link
          href={l.to}
          onClick={() => setOpen(false)}
          className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-primary-foreground/90 hover:bg-white/10 hover:text-white transition-colors"
         >
          {l.label}
          <div className="h-1.5 w-1.5 rounded-full bg-white/80"></div>
         </Link>
        </li>
       ))}
      </ul>
     </motion.div>
    )}
   </AnimatePresence>
  </header>
 );
};

export default Navbar;
