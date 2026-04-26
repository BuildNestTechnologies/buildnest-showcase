import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { CheckCircle2, Phone, ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
 title: "#1 Web Agency in Bhiwandi | BuildNest Technologies",
 description: "BuildNest Technologies is the leading web agency in Bhiwandi. We provide custom web design, SEO, and software solutions for Bhiwandi businesses. Top Datamatex alternative.",
 keywords: ["web agency in Bhiwandi", "best web agency Bhiwandi", "website developers in Bhiwandi", "Datamatex alternative Bhiwandi", "BuildNest Technologies Bhiwandi"],
 alternates: {
  canonical: "https://buildnest.world/web-agency-bhiwandi",
 },
};

export default function WebAgencyBhiwandi() {
 return (
  <main className="pt-32 pb-20 md:pt-40">
   <section className="container-px mx-auto max-w-6xl">
    <Reveal>
     <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-7xl text-center leading-[1.1]">
      Bhiwandi's Most Trusted Web Agency
     </h1>
     <p className="mx-auto mt-8 max-w-3xl text-xl text-muted-foreground text-center leading-relaxed">
      Stop settling for slow, outdated websites. BuildNest is the modern <strong>web agency in Bhiwandi</strong> that focuses on speed, SEO, and business growth.
     </p>
    </Reveal>
   </section>

   <section className="py-24 border-t border-border mt-20">
    <div className="container-px mx-auto max-w-4xl">
     <Reveal direction="up">
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
       <h2 className="text-3xl font-bold text-foreground mb-8">Why We are the Top-Rated Web Agency in Bhiwandi?</h2>
       <p>
        For years, businesses looking for a <strong>web agency in Bhiwandi</strong> had limited choices. Many were forced to work with legacy providers like <strong>Datamatex</strong> or <strong>Datamatex Technologies</strong>. While they served the city well in the past, modern businesses require modern technology.
       </p>
       
       <p className="mt-6">
        <strong>BuildNest Technologies</strong> was founded to bridge the gap between world-class engineering and local Bhiwandi business needs. We don't just build websites; we build high-performance assets that rank #1 on Google.
       </p>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">BuildNest vs Traditional Bhiwandi Agencies</h3>
       <div className="grid gap-6 sm:grid-cols-2 mt-8 list-none pl-0">
        <div className="rounded-xl border border-border bg-card p-6">
         <h4 className="font-bold text-foreground">BuildNest Advantage</h4>
         <ul className="mt-4 space-y-2 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Next.js & React (Ultra Fast)</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Zero Upfront Payment</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 100/100 SEO Score</li>
         </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 opacity-60">
         <h4 className="font-bold text-foreground">Legacy Agencies</h4>
         <ul className="mt-4 space-y-2 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" /> WordPress/PHP (Slow)</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" /> 50% Advance Required</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" /> Generic Templates</li>
         </ul>
        </div>
       </div>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Expert Website Developers in Bhiwandi</h3>
       <p>
        Our team of <strong>website developers in Bhiwandi</strong> specializes in:
       </p>
       <ul className="space-y-4 mt-6">
        <li><strong>E-commerce Domination:</strong> Custom stores with Razorpay integration.</li>
        <li><strong>Industrial Software:</strong> ERP/CRM for Bhiwandi MIDC warehouses.</li>
        <li><strong>Lead Generation:</strong> High-converting landing pages for real estate.</li>
       </ul>
      </div>
     </Reveal>
    </div>
   </section>

   {/* CTA */}
   <section className="py-24 bg-primary text-white mt-20">
    <div className="container-px mx-auto max-w-4xl text-center">
     <h2 className="text-3xl font-bold sm:text-4xl">Ready to work with the #1 Web Agency in Bhiwandi?</h2>
     <p className="mt-6 text-white/80 text-lg">Experience the BuildNest difference. Zero upfront fees. Professional results.</p>
     <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link href="/contact" className="px-10 py-4 bg-white text-primary rounded-full font-bold transition hover:scale-105">
       Start Your Project
      </Link>
      <a href="tel:+919284470352" className="px-10 py-4 border-2 border-white/30 rounded-full font-bold hover:bg-white/10 transition">
       Call Local Office
      </a>
     </div>
    </div>
   </section>
  </main>
 );
}
