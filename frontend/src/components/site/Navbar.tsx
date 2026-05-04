"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { Magnetic } from "./PremiumMotion";

const Navbar = () => {
 const [open, setOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
  <header className="fixed inset-x-0 top-0 z-50">
   <nav
    className={`container-px mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:mt-5 md:px-5 ${
     scrolled
      ? "border-border bg-background/78 shadow-[0_16px_42px_rgba(12,12,12,0.08)] backdrop-blur-2xl"
      : "border-transparent bg-background/34 backdrop-blur-md"
    }`}
   >
    <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
     <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/5">
      <Image src="/buildnest-logo.png" alt="BuildNest Technologies" width={34} height={34} className="h-8 w-8 object-contain" priority />
     </div>
     <div className="leading-none">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">BuildNest</p>
      <p className="mt-1 text-sm font-semibold">Creative engineering studio</p>
     </div>
    </Link>

    <ul className="hidden items-center gap-7 md:flex">
     {NAV_LINKS.map((link) => {
      const isActive = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
      return (
       <li key={link.to}>
        <Link href={link.to} className={`link-slide text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
         {link.label}
        </Link>
       </li>
      );
     })}
    </ul>

    <div className="hidden items-center gap-3 md:flex">
     <ThemeToggle />
     <Magnetic>
      <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:scale-[1.02] dark:bg-primary dark:text-white">
       Start a build <ArrowUpRight className="h-4 w-4" />
      </Link>
     </Magnetic>
    </div>

    <div className="flex items-center gap-3 md:hidden">
     <ThemeToggle />
     <button
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80"
      aria-label="Toggle menu"
      onClick={() => setOpen((value) => !value)}
     >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
     </button>
    </div>
   </nav>

   <AnimatePresence>
    {open && (
     <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28 }}
      className="container-px mx-auto mt-3 md:hidden"
     >
      <div className="editorial-panel rounded-[2rem] p-4">
       <ul className="space-y-1">
        {NAV_LINKS.map((link) => {
         const isActive = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
         return (
          <li key={link.to}>
           <Link
            href={link.to}
            onClick={() => setOpen(false)}
            className={`flex items-center justify-between rounded-[1.3rem] px-4 py-3 text-sm font-medium transition ${
             isActive ? "bg-foreground text-background dark:bg-primary dark:text-white" : "bg-transparent text-foreground"
            }`}
           >
            {link.label}
            <ArrowUpRight className="h-4 w-4" />
           </Link>
          </li>
         );
        })}
       </ul>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </header>
 );
};

export default Navbar;
