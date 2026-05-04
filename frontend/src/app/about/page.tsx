import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { ParallaxLayer } from "@/components/site/PremiumMotion";

export const metadata: Metadata = {
 title: "About Us | BuildNest Technologies",
 description: "Learn about BuildNest Technologies, a refined web and software studio in Bhiwandi serving Mumbai, Thane, Kalyan, and Navi Mumbai.",
};

const notes = [
 ["Local intelligence", "We understand the trust gap many growing businesses feel with digital vendors, so the process is made visible and grounded."],
 ["Product-grade execution", "Next.js, React, Flutter, and backend systems are used to produce modern experiences that still feel practical to run."],
 ["Creative restraint", "Memorable work comes from composition, interaction, rhythm, and detail, not oversized slogans or effect-heavy surfaces."],
];

export default function About() {
 return (
  <main className="crafted-page">
   <section className="container-px mx-auto max-w-7xl py-10 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
     <div>
      <p className="section-label">About</p>
      <h1 className="section-title mt-4 max-w-2xl">A compact studio building custom digital systems with design discipline and engineering range.</h1>
     </div>
     <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
      BuildNest sits between local business reality and product-level craft. That is why the work must feel premium without becoming vague, and technically modern without becoming cold.
     </p>
    </div>
   </section>

   <section className="container-px mx-auto max-w-7xl py-8">
    <div className="grid grid-cols-12 gap-4">
     <ParallaxLayer speed={0.1} className="relative col-span-12 h-[26rem] overflow-hidden rounded-[2.3rem] md:col-span-7 md:h-[34rem]">
      <Image src="/Projects/lms.jpg" alt="BuildNest learning system work" fill className="object-cover" />
     </ParallaxLayer>
     <div className="col-span-12 rounded-[2.3rem] bg-[color:var(--tone-orange)]/16 p-7 md:col-span-5 md:mt-16">
      <MapPin className="h-6 w-6 text-[color:var(--tone-orange)]" />
      <h2 className="mt-16 text-2xl font-semibold leading-tight">Rooted in Bhiwandi, working across Mumbai and beyond with a product-minded studio model.</h2>
     </div>
     <div className="col-span-12 rounded-[2rem] bg-[color:var(--tone-teal)]/14 p-6 md:col-span-4">
      <p className="section-label text-[color:var(--tone-teal)]">Starting point</p>
      <p className="mt-8 text-xl font-semibold leading-tight">Good software should not feel distant, noisy, or impossible for businesses to understand.</p>
     </div>
     <ParallaxLayer speed={-0.08} className="relative col-span-12 h-[18rem] overflow-hidden rounded-[2rem] md:col-span-5 md:col-start-8 md:-mt-10 md:h-[22rem]">
      <Image src="/Projects/studygenie.jpg" alt="BuildNest AI project" fill className="object-cover" />
     </ParallaxLayer>
    </div>
   </section>

   <section className="container-px mx-auto max-w-6xl py-16 md:py-24">
    <div className="grid gap-4 md:grid-cols-3">
     {notes.map(([title, copy], index) => (
      <article key={title} className={`rounded-[2rem] border border-border bg-background/72 p-6 ${index === 1 ? "md:translate-y-8" : ""}`}>
       <h3 className="text-xl font-semibold">{title}</h3>
       <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
      </article>
     ))}
    </div>
    <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background dark:bg-primary dark:text-white">
     Talk to the studio <ArrowRight className="h-4 w-4" />
    </Link>
   </section>
  </main>
 );
}
