import type { Metadata } from "next";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { Beaker, Brain, Cpu, Sparkles, Terminal, ArrowRight, FlaskConical, Globe, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
 title: "BuildNest Labs | Experimental Technology & Prototypes",
 description: "Explore BuildNest Labs, where we craft future-ready solutions, AI experiments, high-performance web prototypes, and next-gen interfaces.",
};

const LAB_PROJECTS = [
 {
  icon: Brain,
  badge: "AI & NLP",
  title: "CognitiveAgent Workspace",
  desc: "An experimental agentic workflow engine that automates multi-step business analysis using localized LLMs. Runs completely offline with zero-data leak.",
  status: "Beta Active",
  tech: ["Ollama", "React Flow", "WebSockets"],
  color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30"
 },
 {
  icon: Cpu,
  badge: "WebAssembly",
  title: "VaporScale Image Engine",
  desc: "Ultra-fast in-browser image optimization powered by Rust and WebAssembly. Compresses and formats massive image galleries in milliseconds prior to upload.",
  status: "Alpha",
  tech: ["Rust", "Wasm-Bindgen", "Web Workers"],
  color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30"
 },
 {
  icon: Globe,
  badge: "Spatial Web",
  title: "BuildNest 3D Space",
  desc: "A lightweight, hardware-accelerated 3D environment for showcasing residential and commercial layouts right inside the browser without third-party plugins.",
  status: "Concept",
  tech: ["Three.js", "WebGPU", "Framer Motion"],
  color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30"
 },
 {
  icon: Zap,
  badge: "Edge Compute",
  title: "InstaCache Analytics",
  desc: "Zero-latency real-time analytics tracker running entirely on Edge workers, rendering live activity streams with virtually no database overhead.",
  status: "Internal Testing",
  tech: ["Cloudflare Workers", "Redis", "SSE"],
  color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30"
 }
];

export default function Labs() {
 return (
  <div className="relative overflow-hidden bg-background">
   {/* Futuristic Background Gradients */}
   <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-[120px]" />
   <div className="pointer-events-none absolute -right-1/4 top-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-[120px]" />

   {/* Hero Header */}
   <section className="bg-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border">
    <div className="container-px mx-auto max-w-4xl text-center">
     <Reveal>
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
       <FlaskConical className="h-3.5 w-3.5 animate-pulse" />
       BuildNest Labs
      </span>
     </Reveal>
     <Reveal delay={0.1}>
      <h1 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-5xl md:text-[56px] tracking-tight">
       Where the future is <span className="text-primary font-extrabold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">prototyped.</span>
      </h1>
     </Reveal>
     <Reveal delay={0.2}>
      <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl max-w-2xl">
       Step into our experimental sandbox. Here, we build, break, and refine cutting-edge technology solutions before they make their way into our mainstream projects.
      </p>
     </Reveal>
    </div>
   </section>

   {/* Experiments Showcase */}
   <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
    <div className="mb-12">
     <SectionTitle 
      title="Active Experiments" 
      subtitle="Take a look at the innovative research prototypes and conceptual builds currently cooked up by our development laboratory."
      align="left"
     />
    </div>

    <div className="grid gap-8 sm:grid-cols-2">
     {LAB_PROJECTS.map((proj, idx) => (
      <Reveal key={idx} delay={idx * 0.15}>
       <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {/* Subtle hover gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-muted/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="flex items-start justify-between">
         <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover:scale-110 transition-transform duration-300">
          <proj.icon className="h-6 w-6" />
         </div>
         <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-gradient-to-r ${proj.color}`}>
          {proj.status}
         </span>
        </div>

        <span className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground">
         {proj.badge}
        </span>

        <h3 className="mt-2 font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
         {proj.title}
        </h3>

        <p className="mt-3 text-muted-foreground leading-relaxed">
         {proj.desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
         {proj.tech.map((t, i) => (
          <span key={i} className="rounded-md border border-border bg-muted/30 px-2.5 py-1 text-xs font-mono text-muted-foreground">
           {t}
          </span>
         ))}
        </div>
       </div>
      </Reveal>
     ))}
    </div>
   </section>

   {/* Labs Call To Action */}
   <section className="container-px mx-auto max-w-5xl pb-24">
    <Reveal>
     <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-card to-background p-10 text-center shadow-xl md:p-16">
      <div className="pointer-events-none absolute -left-1/3 -top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]" />
      
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
       <Sparkles className="h-6 w-6" />
      </span>
      <h2 className="mt-6 font-display text-3xl font-bold text-foreground">Have a complex R&D challenge?</h2>
      <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
       We partner with forward-thinking enterprises to design custom proofs-of-concept, test high-risk assumptions, and pilot emerging tech architectures.
      </p>
      <div className="mt-8 flex justify-center">
       <Link 
        href="/contact" 
        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-soft transition-transform hover:scale-105"
       >
        Partner with our Lab <ArrowRight className="h-4 w-4" />
       </Link>
      </div>
     </div>
    </Reveal>
   </section>
  </div>
 );
}
