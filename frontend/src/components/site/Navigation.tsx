"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav role="navigation" aria-label="Main navigation" className="fixed z-[100] top-3 w-full transition-all duration-500 ease-in-out pointer-events-none">
      <div className="w-[var(--width-content-width)] mx-auto flex items-center justify-between rounded-full backdrop-blur-xl px-6 md:pr-3 pointer-events-auto shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-white/20 dark:border-white/10" style={{ height: "52px", backgroundColor: "color-mix(in srgb, var(--background) 60%, transparent)" }}>
        <button className="cursor-pointer" aria-label="Navigate to home" onClick={() => window.scrollTo(0,0)}>
          <h2 className="text-xl font-medium text-foreground">BuildNest</h2>
        </button>

        <div className="flex items-center gap-3 transition-all duration-500 ease-in-out" style={{ paddingRight: "44px" }}>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
          <div className="hidden md:flex">
            <button type="button" data-href="#contact" aria-label="Start Project" className="stagger-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-8 px-5 min-w-0 w-fit max-w-full rounded-[var(--theme-border-radius)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--color-primary-cta-text)] z-[100]">
              <div className="stagger-button-bg absolute inset-0 rounded-[var(--theme-border-radius)] transition-transform duration-[600ms] primary-button"></div>
              <span className="stagger-button-text relative text-sm inline-block overflow-hidden truncate whitespace-nowrap">Start Project</span>
            </button>
          </div>

          {/* Hamburger button */}
          <button aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="transition-transform duration-500 ease-[cubic-bezier(0.5,0.5,0,1)] pointer-events-auto cursor-pointer rounded-full flex justify-center items-center h-8 w-8 bg-primary border-none relative z-[110]">
            <span aria-hidden="true" className={cn(
              "transition-transform duration-500 ease-[cubic-bezier(0.5,0.5,0,1)] bg-white w-[40%] h-[2px] absolute",
              menuOpen ? "rotate-45" : "-translate-y-1"
            )}></span>
            <span aria-hidden="true" className={cn(
              "transition-transform duration-500 ease-[cubic-bezier(0.5,0.5,0,1)] bg-white w-[40%] h-[2px] absolute",
              menuOpen ? "-rotate-45" : "translate-y-1"
            )}></span>
          </button>
        </div>
      </div>

      {/* Menu dropdown — rectangular box */}
      <div className={cn(
        "w-[var(--width-content-width)] mx-auto mt-3 pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.5,0.5,0,1)] origin-top-right",
        menuOpen
          ? "opacity-100 scale-100 translate-y-0 visible"
          : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
      )}>
        <div className="bg-primary rounded-2xl p-6 shadow-xl ml-auto" style={{ maxWidth: "280px" }}>
          <div className="flex justify-between items-center mb-5">
            <p className="text-lg font-medium text-white">Menu</p>
          </div>
          <ul role="menu" className="list-none flex flex-col gap-4 m-0 p-0">
            <li role="menuitem" className="m-0 p-0 list-none">
              <button aria-label="Navigate to Work" className="text-white/90 hover:text-white flex justify-between items-center bg-transparent border-none cursor-pointer w-full font-inherit transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                <span className="text-base">Work</span>
                <div className="bg-white/60 rounded-full shrink-0 h-2 w-2"></div>
              </button>
            </li>
            <li role="menuitem" className="m-0 p-0 list-none">
              <button aria-label="Navigate to Services" className="text-white/90 hover:text-white flex justify-between items-center bg-transparent border-none cursor-pointer w-full font-inherit transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                <span className="text-base">Services</span>
                <div className="bg-white/60 rounded-full shrink-0 h-2 w-2"></div>
              </button>
            </li>
            <li role="menuitem" className="m-0 p-0 list-none">
              <button aria-label="Navigate to About" className="text-white/90 hover:text-white flex justify-between items-center bg-transparent border-none cursor-pointer w-full font-inherit transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                <span className="text-base">About</span>
                <div className="bg-white/60 rounded-full shrink-0 h-2 w-2"></div>
              </button>
            </li>
            <li role="menuitem" className="m-0 p-0 list-none">
              <button aria-label="Navigate to Contact" className="text-white/90 hover:text-white flex justify-between items-center bg-transparent border-none cursor-pointer w-full font-inherit transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                <span className="text-base">Contact</span>
                <div className="bg-white/60 rounded-full shrink-0 h-2 w-2"></div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
