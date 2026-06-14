import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { Sparkles, FlaskConical, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
 title: "BuildNest Labs | Our Products & Experiments",
 description: "Explore BuildNest Labs, where we build our own innovative standalone products like TubeHive.",
};

export default function Labs() {
 return (
  <div className="relative overflow-hidden bg-background">
   {/* Futuristic Background Gradients */}
   <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-[120px]" />
   <div className="pointer-events-none absolute -right-1/4 top-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-[120px]" />

   {/* Hero Header: What is BuildNest Labs */}
   <section className="bg-hero min-h-[50vh] flex flex-col items-center justify-center border-b border-border py-12 md:py-16">
    <div className="container-px mx-auto max-w-4xl flex flex-col items-center justify-center text-center">
     <Reveal>
      <span className="inline-flex items-center gap-2 rounded-full border border-[#9f85ff]/30 bg-[#9f85ff]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#9f85ff]">
       <FlaskConical className="h-3.5 w-3.5 animate-pulse" />
       BuildNest Technologies Labs
      </span>
     </Reveal>
     <Reveal delay={0.1}>
      <h1 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-5xl md:text-[56px] tracking-tight">
       Innovating, prototyping, and building <span className="text-[#9f85ff] font-extrabold bg-gradient-to-r from-[#9f85ff] to-indigo-400 bg-clip-text text-transparent">our own products.</span>
      </h1>
     </Reveal>
     <Reveal delay={0.2}>
      <p className="mx-auto mt-6 text-base leading-relaxed text-muted-foreground md:text-lg max-w-3xl">
       Welcome to the sandbox of <strong className="font-semibold text-foreground">BuildNest Technologies</strong>. While we specialize in shipping premium software for our clients, <strong className="font-semibold text-foreground">Labs</strong> is our internal product incubator—where we design, engineer, and launch our own standalone products and research next-gen web technology.
      </p>
     </Reveal>
    </div>
   </section>

   {/* Featured Products Section */}
   <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
    <Reveal>
     <div className="mb-8">
      <SectionTitle 
       title="Our Products" 
       subtitle="Explore our homegrown, standalone products designed to solve real-world problems."
       align="center"
      />
     </div>
    </Reveal>

    <div className="grid gap-12 md:grid-cols-12 items-center">
     {/* TubeHive Product Card */}
     <div className="md:col-span-7">
      <Reveal>
       <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card-soft">
        <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-[#9f85ff]/10 to-transparent blur-2xl" />
        
        <div className="flex items-center gap-4">
         <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
          <Image 
           src="/tubehive-logo.png" 
           alt="TubeHive Logo" 
           fill 
           className="object-cover"
          />
         </div>
         <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-display text-2xl font-bold text-foreground">TubeHive</h3>
          <span className="inline-flex items-center rounded-full bg-[#9f85ff]/10 border border-[#9f85ff]/30 px-3 py-1 text-xs font-semibold text-[#9f85ff]">
           Beta Live
          </span>
         </div>
        </div>

        <p className="mt-6 text-base text-muted-foreground leading-relaxed">
         Tired of YouTube distractions pulling you away from work or studies? <strong className="font-semibold text-foreground">TubeHive</strong> is a productivity Chrome extension that gives you complete control over your YouTube workspace. Group subscribed channels into focused <strong className="font-semibold text-foreground">Chambers</strong>, save important references in a <strong className="font-semibold text-foreground">Vault</strong>, build customized viewing <strong className="font-semibold text-foreground">Decks</strong>, and detoxify your feed by blocking Shorts, comments, and recommendations.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
         <a 
          href="https://chromewebstore.google.com/detail/tubehive-organize-youtube/amdfljfnmgnpkphgeakbdkfgepkcjmeo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
         >
          Get Chrome Extension
         </a>
         <a 
          href="https://tubehive.site/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
         >
          Visit Website <ExternalLink className="h-4 w-4" />
         </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
         <ShieldCheck className="h-4 w-4 text-emerald-500" />
         <span>Privacy first: Most data stays locally in your browser.</span>
        </div>
       </div>
      </Reveal>
     </div>

     {/* Coming Soon Card */}
     <div className="md:col-span-5 flex flex-col justify-center h-full">
      <Reveal delay={0.2}>
       <div className="relative overflow-hidden rounded-3xl border border-dashed border-border bg-muted/20 p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[350px]">
        <div className="rounded-full bg-primary/10 p-4 text-primary animate-pulse">
         <Sparkles className="h-8 w-8" />
        </div>
        <h4 className="mt-6 font-display text-xl font-bold text-foreground">More Products in the Oven</h4>
        <p className="mt-3 text-sm text-muted-foreground max-w-sm">
         We are continuously experimenting and prototyping new developer utility suites, AI workflow automations, and spatial tools. Stay tuned for our next launch!
        </p>
        <span className="mt-6 text-xs font-mono tracking-widest text-[#9f85ff] uppercase font-semibold">
         Many more to come
        </span>
       </div>
      </Reveal>
     </div>
    </div>
   </section>
  </div>
 );
}
