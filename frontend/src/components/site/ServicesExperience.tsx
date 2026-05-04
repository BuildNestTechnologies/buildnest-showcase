"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Palette, Settings, ShieldCheck, ShoppingCart, Smartphone } from "lucide-react";
import { Magnetic, usePinnedHorizontal } from "@/components/site/PremiumMotion";

const services = [
 [Globe, "Website development", "Brand-led websites with architecture, motion direction, and search structure designed together.", "var(--tone-blue)", "/pricing"],
 [Smartphone, "Mobile app development", "Apps built around user flow, retention clarity, and real-world operational constraints.", "var(--tone-purple)", "/contact"],
 [ShoppingCart, "Commerce systems", "Stores and product environments shaped for confidence, not catalog clutter.", "var(--tone-orange)", "/pricing"],
 [Settings, "Custom software", "Internal tools, dashboards, ERP surfaces, and workflow systems custom-fit to the team.", "var(--tone-teal)", "/software"],
 [Palette, "Visual direction", "Art direction, interface tone, and motion language that keep the work memorable.", "var(--tone-blue)", "/portfolio"],
 [ShieldCheck, "Long-term care", "Hosting, analytics, performance, maintenance, and iterative improvements after launch.", "var(--tone-orange)", "/contact"],
];

export default function ServicesExperience() {
 const wrapRef = useRef<HTMLElement>(null);
 const trackRef = useRef<HTMLDivElement>(null);

 usePinnedHorizontal(trackRef, wrapRef);

 return (
  <main className="crafted-page">
   <section className="container-px mx-auto max-w-7xl py-10 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
     <div>
      <p className="section-label">Services</p>
      <h1 className="section-title mt-4 max-w-2xl">Full-screen capability stories instead of a polite stack of service cards.</h1>
     </div>
     <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
      Each discipline is treated like a scene with its own density, tone, and direction. The page reads more like a guided product narrative than a services menu.
     </p>
    </div>
   </section>

   <section ref={wrapRef} className="relative min-h-[360vh]">
    <div className="sticky top-24 overflow-hidden">
     <div ref={trackRef} className="flex w-max gap-5 px-5 pb-10 sm:px-8 lg:px-12">
      {services.map(([Icon, title, copy, tone, href], index) => {
       const ServiceIcon = Icon as typeof Globe;
       return (
        <article
         key={title as string}
         className="flex h-[34rem] w-[23rem] flex-col justify-between rounded-[2.4rem] border border-border px-6 py-7 md:w-[34rem]"
         style={{
          backgroundImage: `linear-gradient(180deg, color-mix(in srgb, ${tone as string} 18%, transparent), transparent 56%), linear-gradient(180deg, var(--surface-elevated), rgba(255,255,255,0.4))`,
         }}
        >
         <div className="flex items-center justify-between">
          <span className="eyebrow-metric" style={{ color: tone as string }}>0{index + 1}</span>
          <ServiceIcon className="h-6 w-6" style={{ color: tone as string }} />
         </div>

         <div>
          <h2 className="max-w-md text-4xl font-semibold leading-[0.96]">{title as string}</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">{copy as string}</p>
         </div>

         <div className="rounded-[1.8rem] bg-foreground/5 p-5">
          <p className="text-sm leading-7 text-muted-foreground">
           Strategy, content, UI tone, and motion behavior are considered at the same time so the final experience feels singular.
          </p>
          <Link href={href as string} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: tone as string }}>
           Continue into this stream <ArrowRight className="h-4 w-4" />
          </Link>
         </div>
        </article>
       );
      })}
     </div>
    </div>
   </section>

   <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
    <div className="editorial-panel rounded-[2.3rem] p-7 md:p-9">
     <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
      <div>
       <p className="section-label">Working model</p>
       <h2 className="mt-4 text-2xl font-semibold leading-tight">We scope the right surface, not the most obvious deliverable.</h2>
      </div>
      <div>
       <p className="text-sm leading-7 text-muted-foreground">
        Some teams need a site, some need a funnel, some need an internal tool, and some need all three to share one interaction language. That is the level we design at.
       </p>
       <Magnetic className="mt-6 inline-block">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background dark:bg-primary dark:text-white">
         Discuss your build <ArrowRight className="h-4 w-4" />
        </Link>
       </Magnetic>
      </div>
     </div>
    </div>
   </section>
  </main>
 );
}
