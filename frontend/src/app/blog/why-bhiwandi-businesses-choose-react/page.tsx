import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import { Check, Zap, Shield, Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Bhiwandi Businesses Are Moving to React JS for Web Development in 2026",
  description: "Learn why traditional businesses in Bhiwandi are switching from WordPress to React.js and Next.js for their websites. Discover the performance and SEO benefits.",
};

export default function WhyReactBhiwandiPage() {
  return (
    <article className="py-20 container-px mx-auto max-w-4xl">
      <Reveal direction="down">
        <span className="text-primary font-bold uppercase tracking-widest text-xs">Modern Tech Trends</span>
        <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl leading-tight">
          Why Bhiwandi Businesses Are Moving to React JS for Web Development in 2026
        </h1>
        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
          For years, businesses in Bhiwandi relied on simple WordPress sites. But in 2026, the market has shifted. Local leaders are choosing **React JS and Next.js** to gain a massive competitive advantage in speed and Google ranking.
        </p>
      </Reveal>

      <section className="mt-16 grid gap-10 md:grid-cols-2">
        <Reveal direction="left">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Extreme Speed</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">React sites load instantly. In a city like Bhiwandi where mobile data can vary, speed is the difference between a bounce and a lead.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">SEO Domination</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Next.js provides server-side rendering (SSR), making it easy for Google bots to index your Bhiwandi-based business.</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal direction="right">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Superior Security</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Unlike WordPress, React sites don't have plugins that can be hacked. Your business data stays safe.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-hero border border-border">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">The BuildNest Edge</p>
              <p className="text-sm text-muted-foreground italic">"We transitioned our textile warehouse portal to React with BuildNest. Our internal workflow speed increased by 300%." 
 Local Client.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="mt-20 border-t border-border pt-12 text-center">
        <h2 className="text-2xl font-bold text-foreground">Ready for the Modern Web?</h2>
        <p className="mt-4 text-muted-foreground">Join the elite businesses in Bhiwandi using React. Zero upfront payment.</p>
        <Link href="/contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105">
          Consult with a React Expert
        </Link>
      </div>
    </article>
  );
}
