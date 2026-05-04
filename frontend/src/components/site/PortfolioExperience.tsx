"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PORTFOLIO } from "@/data/site";
import { ScrollSkew, usePinnedHorizontal } from "./PremiumMotion";

export default function PortfolioExperience() {
 const [active, setActive] = useState<string | null>(null);
 const wrapRef = useRef<HTMLElement>(null);
 const trackRef = useRef<HTMLDivElement>(null);

 usePinnedHorizontal(trackRef, wrapRef);

 return (
  <main className="crafted-page">
   <section className="container-px mx-auto max-w-7xl py-10 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
     <div>
      <p className="section-label">Portfolio</p>
      <h1 className="section-title mt-4 max-w-2xl">A hybrid gallery with varying scale, rhythm, and interaction weight.</h1>
     </div>
     <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
      Projects are arranged like a curated wall, then broken into a horizontal reel so the page feels exploratory instead of catalogued.
     </p>
    </div>
   </section>

   <section className="container-px mx-auto max-w-7xl py-8">
    <ScrollSkew>
     <div className="grid grid-cols-12 gap-4">
      {PORTFOLIO.slice(0, 4).map((project, index) => (
       <article
        key={project.title}
        className={`group relative overflow-hidden rounded-[2rem] ${
         index === 0 ? "col-span-12 h-[23rem] md:col-span-6 md:h-[34rem]" :
         index === 1 ? "col-span-12 h-[16rem] md:col-span-3 md:mt-20 md:h-[26rem]" :
         index === 2 ? "col-span-6 h-[14rem] md:col-span-3 md:h-[18rem]" :
         "col-span-6 h-[14rem] md:col-span-6 md:-mt-8 md:h-[22rem]"
        }`}
       >
        <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/8 to-transparent" />
        <div className="absolute bottom-0 p-5 text-white">
         <p className="eyebrow-metric text-white/60">{project.category}</p>
         <h2 className="mt-2 text-xl font-semibold">{project.title}</h2>
        </div>
       </article>
      ))}
     </div>
    </ScrollSkew>
   </section>

   <section ref={wrapRef} className="relative min-h-[320vh] py-8">
    <div className="sticky top-24 overflow-hidden">
     <div ref={trackRef} className="flex w-max gap-5 px-5 pb-8 sm:px-8 lg:px-12">
      {PORTFOLIO.map((project, index) => (
       <article
        key={project.title}
        onMouseEnter={() => setActive(project.title)}
        onMouseLeave={() => setActive(null)}
        className={`group relative flex h-[33rem] w-[22rem] flex-col justify-end overflow-hidden rounded-[2.4rem] border border-border md:w-[28rem] ${
         active && active !== project.title ? "opacity-45" : "opacity-100"
        } transition duration-300`}
       >
        <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 36vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/14 to-transparent" />
        <div className="relative p-6 text-white">
         <div className="flex items-center justify-between gap-4">
          <span className="eyebrow-metric text-white/60">0{(index % 9) + 1}</span>
          {project.demoLink ? <ExternalLink className="h-4 w-4 text-white/70" /> : <ArrowUpRight className="h-4 w-4 text-white/70" />}
         </div>
         <h3 className="mt-10 text-2xl font-semibold">{project.title}</h3>
         <p className="mt-2 text-sm font-medium text-white/72">{project.category}</p>
         <p className="mt-4 text-sm leading-7 text-white/72">{project.desc}</p>
        </div>
       </article>
      ))}
     </div>
    </div>
   </section>
  </main>
 );
}
