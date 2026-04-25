import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
 title: "7 SEO Tips Every Small Business in Mumbai Must Know in 2026",
 description: "Want to rank your business on the first page of Google in Mumbai? Follow these 7 proven SEO tips from the experts at BuildNest Technologies.",
};

export default function MumbaiSeoTipsPage() {
 return (
  <article className="py-20 container-px mx-auto max-w-4xl">
   <Reveal direction="down">
    <span className="text-primary font-bold uppercase tracking-widest text-xs">Local SEO Strategy</span>
    <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl leading-tight">
     7 SEO Tips Every Small Business in Mumbai Must Know in 2026
    </h1>
    <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
     Competition in Mumbai is fierce. If your business isn't on the first page of Google, you are losing customers to competitors in Andheri, Bandra, and beyond. Here is how to win.
    </p>
   </Reveal>

   <div className="mt-16 space-y-12">
    {[
     { title: "Optimize for Local Search", desc: "Ensure your Google Business Profile is 100% complete and uses keywords like 'best shop in Mumbai'." },
     { title: "Lightning Fast Load Times", desc: "Google prioritizes sites that load in under 2 seconds. Use Next.js for the best results." },
     { title: "Mobile-First Design", desc: "90% of Mumbai users search from their phones. Your site must be flawless on mobile." },
     { title: "NAP Consistency", desc: "Name, Address, and Phone number must be identical across all online directories." },
     { title: "Use Structured Data", desc: "Schema markup helps Google understand your services and show rich results." },
     { title: "Get Local Reviews", desc: "Positive reviews from Mumbai customers are a massive ranking signal." },
     { title: "Content in Hindi & Marathi", desc: "Targeting local languages can help you capture a broader audience in Maharashtra." }
    ].map((tip, idx) => (
     <Reveal key={idx} direction="left" delay={idx * 0.05}>
      <div className="flex gap-6">
       <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
        {idx + 1}
       </div>
       <div>
        <h2 className="text-xl font-bold text-foreground mb-2">{tip.title}</h2>
        <p className="text-muted-foreground leading-relaxed">{tip.desc}</p>
       </div>
      </div>
     </Reveal>
    ))}
   </div>

   <section className="mt-20 p-10 rounded-3xl border border-border bg-hero text-center">
    <h2 className="text-2xl font-bold text-foreground">Need Professional SEO in Mumbai?</h2>
    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
     At BuildNest Technologies, every website we build comes with these 7 tips already implemented. We don't just build sites; we build rankings.
    </p>
    <Link href="/services" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-white shadow-lg">
     Explore Our SEO Services <ArrowRight className="h-4 w-4" />
    </Link>
   </section>
  </article>
 );
}
