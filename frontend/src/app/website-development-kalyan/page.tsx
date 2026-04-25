import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import Script from "next/script";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Website Development in Kalyan | #1 Web Design Company Kalyan",
 description: "Looking for a website developer in Kalyan? BuildNest Technologies builds high-performance, SEO-ready websites for Kalyan businesses with zero upfront fees.",
};

export default function KalyanPage() {
 const kalyanSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BuildNest Technologies Kalyan",
  "description": "Top-rated website development and software agency serving Kalyan, Khadakpada, and Kalyan East.",
  "url": "https://buildnest.world/website-development-kalyan",
  "telephone": "+919284470352",
  "address": {
   "@type": "PostalAddress",
   "addressLocality": "Kalyan",
   "addressRegion": "Maharashtra",
   "addressCountry": "IN"
  }
 };

 return (
  <>
   <script id="local-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
   
   <section className="bg-hero pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border">
    <div className="container-px mx-auto max-w-7xl">
     <Reveal direction="diagonal-right">
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl max-w-3xl leading-[1.1]">
       Elevate Your Kalyan Business with Elite <span className="text-primary">Website Development.</span>
      </h1>
     </Reveal>
     <Reveal delay={0.1} direction="left">
      <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
       Serving Kalyan East, Khadakpada, and the entire Kalyan-Dombivli region. We build modern, lightning-fast websites and custom software with <strong>Zero Upfront Cost</strong>.
      </p>
     </Reveal>
     <Reveal delay={0.2} direction="up">
      <div className="mt-10 flex flex-wrap gap-4">
       <Link href="/contact" className="hover-button-advanced inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white shadow-lg">
        Start Your Project in Kalyan <ArrowRight className="h-5 w-5" />
       </Link>
      </div>
     </Reveal>
    </div>
   </section>

   <section className="py-20 md:py-28 container-px mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-2 items-center">
     <Reveal direction="left">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
       <Image 
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80" 
        alt="Modern office in Kalyan - BuildNest Technologies" 
        width={1200}
        height={800}
        className="w-full h-full object-cover"
       />
      </div>
     </Reveal>
     <div>
      <Reveal direction="right">
       <h2 className="font-display text-3xl font-bold text-foreground">Why BuildNest is Kalyan's Best Choice</h2>
       <p className="mt-6 text-muted-foreground leading-relaxed">
        Businesses in <strong>Kalyan</strong> are growing fast. From retail shops in the station area to large scale warehouses and professional services in <strong>Khadakpada</strong>, everyone needs a digital edge.
       </p>
       <ul className="mt-8 space-y-4">
        {[
         "Hyper-local SEO targeting Kalyan customers",
         "Next.js tech for 1-second load times",
         "Zero Upfront - pay after you see the result",
         "Dedicated support for Kalyan-based clients"
        ].map(item => (
         <li key={item} className="flex items-center gap-3 font-medium text-foreground">
          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
           <Check className="h-3 w-3 text-primary" />
          </div>
          {item}
         </li>
        ))}
       </ul>
      </Reveal>
     </div>
    </div>
   </section>
  </>
 );
}
