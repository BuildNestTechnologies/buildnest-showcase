"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Globe2, MoveRight, Search, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { MagneticButton, ParallaxLayer, MaskRevealText, AsymmetricReveal, AnimatedLink } from "./PremiumMotion";
import { PORTFOLIO } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const services = [
 { title: "Web systems", copy: "Interfaces engineered for trust, clarity, and sales momentum.", icon: Globe2, tone: "var(--tone-blue)" },
 { title: "Product software", copy: "Operational tools, dashboards, and internal systems that remove friction.", icon: Code2, tone: "var(--tone-orange)" },
 { title: "Mobile journeys", copy: "Apps that feel crisp, human, and operationally useful after launch.", icon: Smartphone, tone: "var(--tone-purple)" },
 { title: "Search architecture", copy: "SEO embedded into structure, intent, speed, and content rhythm.", icon: Search, tone: "var(--tone-teal)" },
];

const process = [
 ["Signal", "We map what the brand should feel like before deciding how the page should look."],
 ["Structure", "Messaging, layout hierarchy, and motion behavior are designed together."],
 ["Prototype", "Interactive sections are shaped as product scenes, not stacked brochure blocks."],
 ["Release", "Performance, SEO, analytics, and follow-up improvements stay part of the craft."],
];

export default function HomeExperience() {
 const heroRef = useRef<HTMLElement>(null);
 const heroCardRef = useRef<HTMLDivElement>(null);
 const processRef = useRef<HTMLElement>(null);

 useEffect(() => {
  const hero = heroRef.current;
  const heroCard = heroCardRef.current;
  const processWrap = processRef.current;
  if (!hero || !heroCard || !processWrap) return;

  const mm = gsap.matchMedia();
  mm.add("(min-width: 900px)", () => {
   // Hero Parallax & Transform
   const heroTimeline = gsap.timeline({
    scrollTrigger: {
     trigger: hero,
     start: "top top",
     end: "bottom top",
     scrub: 1,
    },
   });

   heroTimeline
    .to(heroCard, { yPercent: 10, ease: "power1.inOut" }, 0)
    .to(".hero-title-wrap", { y: -40, opacity: 0.5, ease: "power1.inOut" }, 0);

   // Process Sequential Panels
   const processPanels = processWrap.querySelectorAll(".process-panel");
   const processTimeline = gsap.timeline({
    scrollTrigger: {
     trigger: processWrap,
     start: "top top",
     end: () => `+=${window.innerHeight * processPanels.length}`,
     pin: true,
     scrub: 1,
    },
   });

   processPanels.forEach((panel, i) => {
    if (i !== 0) {
     processTimeline.fromTo(panel, { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "power2.inOut" }, i);
    }
    if (i !== processPanels.length - 1) {
     processTimeline.to(panel, { opacity: 0, ease: "power2.inOut" }, i + 1);
    }
   });
  });

  return () => mm.revert();
 }, []);

 return (
  <main className="crafted-page bg-background text-foreground">
   {/* HERO: Split + Offset */}
   <section ref={heroRef} className="container-px mx-auto max-w-7xl pt-24 pb-12 relative z-10 min-h-[90vh] flex flex-col justify-center">
    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
     <div className="md:w-5/12 pt-10 relative z-20">
      <div className="flex items-center gap-4 mb-10">
       <span className="font-semibold tracking-[0.2em] uppercase text-[10px] opacity-60">BuildNest</span>
       <span className="h-px w-12 bg-foreground/20"></span>
      </div>
      <div className="hero-title-wrap">
       <h1 className="text-[2.5rem] md:text-[4rem] font-medium tracking-tight leading-[1.05] text-balance">
        <MaskRevealText>We engineer digital</MaskRevealText> <br />
        <MaskRevealText delay={0.1}>products that scale</MaskRevealText> <br />
        <MaskRevealText delay={0.2}>without friction.</MaskRevealText>
       </h1>
       <p className="mt-8 text-lg text-muted-foreground max-w-sm leading-relaxed">
        Creative layouts, strict performance, and software built with absolute discipline.
       </p>
      </div>
      <div className="mt-12 flex items-center gap-6">
       <MagneticButton href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-none font-medium">
        Initialize Project <ArrowRight className="h-4 w-4" />
       </MagneticButton>
       <AnimatedLink href="/portfolio" className="text-sm font-medium">
        Explore work
       </AnimatedLink>
      </div>
     </div>

     <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} ref={heroCardRef} className="md:w-6/12 w-full mt-12 md:mt-0 md:-mb-40 relative z-10">
      <div className="w-full aspect-[4/5] bg-surface-elevated border-l border-b border-border p-4 sm:p-6 md:p-8">
       <ParallaxLayer speed={0.1} className="relative w-full h-full overflow-hidden">
        <Image src="/Projects/devnex_ui.jpg" alt="Interface" fill priority className="object-cover" />
       </ParallaxLayer>
      </div>
     </motion.div>
    </div>
   </section>

   {/* IDENTITY BLOCK: Edge to Edge Strip */}
   <section className="border-y border-border py-6 md:py-10 mt-16 md:mt-0 overflow-hidden bg-surface-elevated relative z-20">
     <div className="container-px flex whitespace-nowrap overflow-hidden">
       <h2 className="text-3xl md:text-6xl font-medium tracking-tighter uppercase opacity-90">
         <MaskRevealText>Structured Creative Engineering.</MaskRevealText>
       </h2>
     </div>
   </section>

   {/* SERVICES: Stacked Flow (No Grid) */}
   <section className="container-px mx-auto max-w-7xl py-24 md:py-40">
    <div className="mb-20 md:mb-32">
     <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Capabilities</h2>
    </div>
    <div className="flex flex-col gap-12 md:gap-32">
      {services.map((service, index) => {
        const isLeft = index % 2 === 0;
        return (
          <AsymmetricReveal index={index} key={service.title} className={`w-full md:w-7/12 flex ${isLeft ? 'self-start' : 'self-end'}`}>
            <div className="w-full border border-border bg-surface-elevated p-8 md:p-14 hover:border-foreground/30 transition-colors duration-500 group relative overflow-hidden">
               {/* Color Accent Line */}
               <div className="absolute top-0 left-0 w-full h-1 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out" style={{ backgroundColor: service.tone }} />
               
               <div className="flex justify-between items-start mb-16">
                 <span className="text-xs font-medium tracking-[0.2em] opacity-40">0{index+1}</span>
                 <service.icon className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500" style={{color: service.tone}} />
               </div>
               <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">{service.title}</h3>
               <p className="text-muted-foreground text-lg leading-relaxed max-w-md">{service.copy}</p>
            </div>
          </AsymmetricReveal>
        )
      })}
    </div>
   </section>

   {/* FEATURED WORK: Freeform Layout */}
   <section className="py-24 md:py-40 bg-foreground text-background">
     <div className="container-px mx-auto max-w-7xl">
       <div className="mb-20 flex justify-between items-end">
         <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Selected Work</h2>
         <AnimatedLink href="/portfolio" className="text-sm font-medium opacity-70 hover:opacity-100">
          View all deployments
         </AnimatedLink>
       </div>
       
       <div className="flex flex-col gap-8 md:gap-12">
         <div className="flex flex-col md:flex-row gap-8 md:gap-12">
           <AsymmetricReveal index={0} className="w-full md:w-[65%]">
             <Link href="/portfolio" className="block relative aspect-[4/3] group overflow-hidden border border-white/10 bg-white/5 p-4">
               <div className="relative w-full h-full overflow-hidden">
                 <Image src={PORTFOLIO[0].image} fill alt={PORTFOLIO[0].title} className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <span className="bg-white text-black px-6 py-2 text-sm font-medium tracking-tight">View Project</span>
                 </div>
               </div>
             </Link>
             <div className="mt-4 flex justify-between items-center px-2">
               <span className="font-medium">{PORTFOLIO[0].title}</span>
               <span className="text-xs tracking-widest opacity-50 uppercase">{PORTFOLIO[0].category}</span>
             </div>
           </AsymmetricReveal>
           
           <div className="w-full md:w-[35%] flex flex-col justify-end mt-8 md:mt-0">
             <AsymmetricReveal index={1} className="w-full">
               <Link href="/portfolio" className="block relative aspect-square group overflow-hidden border border-white/10 bg-white/5 p-4">
                 <div className="relative w-full h-full overflow-hidden">
                   <Image src={PORTFOLIO[1].image} fill alt={PORTFOLIO[1].title} className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                 </div>
               </Link>
               <div className="mt-4 flex justify-between items-center px-2">
                 <span className="font-medium">{PORTFOLIO[1].title}</span>
               </div>
             </AsymmetricReveal>
           </div>
         </div>
         
         <div className="w-full flex justify-end">
           <AsymmetricReveal index={2} className="w-full md:w-[85%]">
             <Link href="/portfolio" className="block relative aspect-[21/9] group overflow-hidden border border-white/10 bg-white/5 p-4 md:p-8">
               <div className="relative w-full h-full overflow-hidden">
                 <Image src={PORTFOLIO[2].image} fill alt={PORTFOLIO[2].title} className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" />
               </div>
             </Link>
             <div className="mt-4 flex justify-between items-center px-2">
               <span className="font-medium">{PORTFOLIO[2].title}</span>
               <span className="text-xs tracking-widest opacity-50 uppercase">{PORTFOLIO[2].category}</span>
             </div>
           </AsymmetricReveal>
         </div>
       </div>
     </div>
   </section>

   {/* PROCESS: Sliding Panels */}
   <section ref={processRef} className="container-px mx-auto max-w-7xl py-14 h-[100vh] relative overflow-hidden hidden md:block bg-background">
    <div className="absolute top-20 left-8 right-8 z-10 flex items-end justify-between pointer-events-none">
     <div>
      <h2 className="text-3xl font-medium tracking-tight">Deployment Stages</h2>
     </div>
     <span className="text-xs font-medium tracking-[0.2em] opacity-40 uppercase">Methodology</span>
    </div>

    {process.map(([title, copy], index) => (
     <div
      key={title}
      className="process-panel absolute inset-0 flex items-center justify-center p-8 bg-background will-change-transform"
      style={{ zIndex: index }}
     >
      <div className="border border-border bg-surface-elevated p-16 max-w-3xl w-full">
       <div className="w-full flex justify-between items-center mb-16 border-b border-border pb-6">
         <span className="text-sm font-medium opacity-50 tracking-widest uppercase">Phase 0{index + 1}</span>
         <span className="w-3 h-3 bg-primary"></span>
       </div>
       <h3 className="text-5xl font-medium tracking-tight mb-8">{title}</h3>
       <p className="text-xl leading-relaxed text-muted-foreground">{copy}</p>
      </div>
     </div>
    ))}
   </section>

   {/* PROCESS Mobile Fallback */}
   <section className="container-px mx-auto max-w-7xl py-24 md:hidden">
    <div className="mb-16">
      <h2 className="text-3xl font-medium tracking-tight">Deployment Stages</h2>
    </div>
    <div className="grid gap-6">
     {process.map(([title, copy], index) => (
      <AsymmetricReveal key={title} index={index} className="border border-border bg-surface-elevated p-8">
       <p className="text-xs font-medium tracking-widest opacity-50 mb-8">PHASE 0{index + 1}</p>
       <h3 className="text-2xl font-medium tracking-tight mb-4">{title}</h3>
       <p className="text-muted-foreground leading-relaxed">{copy}</p>
      </AsymmetricReveal>
     ))}
    </div>
   </section>

   {/* CTA: Bold Color Block */}
   <section className="py-32 md:py-48 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-black/5" />
    <div className="container-px mx-auto max-w-4xl relative z-10 text-center flex flex-col items-center">
      <p className="text-sm font-semibold tracking-widest uppercase opacity-80 mb-8">Next Move</p>
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight text-balance mb-12">
        Let’s build a product people remember before they understand why.
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
       <MagneticButton href="/contact" className="bg-background text-foreground px-10 py-5 rounded-none font-medium">
        Initialize Contact <ArrowRight className="h-4 w-4" />
       </MagneticButton>
      </div>
    </div>
   </section>
  </main>
 );
}

