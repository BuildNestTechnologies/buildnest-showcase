import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Reveal from "@/components/site/Reveal";
import { MapPin, CheckCircle2, Phone, ArrowRight, Globe, Zap, Shield, Smartphone, Settings, BarChart3, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
 title: "Best Website Development Company in Mumbai | Web Design Agency Mumbai",
 description: "Mumbai's #1 website development company. High-performance Next.js websites, SEO services, and custom web design for businesses across Mumbai, Bandra & Powai. Professional SEO included.",
 keywords: ["website development company Mumbai", "web design agency Mumbai", "best web developers Mumbai", "website making company Mumbai", "website development Mumbai"],
 alternates: {
  canonical: "https://buildnest.world/website-development-mumbai",
 },
};

export default function MumbaiWebsitePage() {
 const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://buildnest.world/website-development-mumbai/#localbusiness",
  "name": "BuildNest Technologies Mumbai",
  "image": "https://buildnest.world/buildnest-logo.png",
  "url": "https://buildnest.world/website-development-mumbai",
  "telephone": "+919284470352",
  "address": {
   "@type": "PostalAddress",
   "addressLocality": "Mumbai",
   "addressRegion": "Maharashtra",
   "postalCode": "400001",
   "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "19.0760", "longitude": "72.8777" },
  "areaServed": ["Mumbai", "Bandra", "Andheri", "Powai", "South Mumbai"],
  "description": "Leading web design and development company in Mumbai specializing in performance-first websites for startups and enterprises."
 };

 return (
  <>
   <script id="local-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
   
   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-32">
    <div className="container-px mx-auto max-w-6xl">
     <Reveal>
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-7xl text-center leading-[1.1]">
       Premium Website Development in Mumbai
      </h1>
      <p className="mx-auto mt-8 max-w-3xl text-xl text-muted-foreground text-center leading-relaxed">
       Dominate the Mumbai market with a website that loads in less than 1 second. We combine world-class engineering with local Mumbai business insights.
      </p>
     </Reveal>
    </div>
   </section>

   <section className="py-24 border-t border-border">
    <div className="container-px mx-auto max-w-4xl">
     <Reveal direction="up">
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
       <h2 className="text-3xl font-bold text-foreground mb-8">Elevate Your Mumbai Brand with Performance-First Web Design</h2>
       <p>
        In the fast-paced economy of <strong>Mumbai</strong>, your website is your 24/7 salesperson. If it's slow, outdated, or doesn't rank for <strong>website development company in Mumbai</strong>, you are losing millions in potential revenue. At <strong>BuildNest Technologies</strong>, we specialize in high-speed, SEO-optimized web platforms that help Mumbai businesses outperform their competition.
       </p>
       
       <p className="mt-6">
        From the high-rises of <strong>Lower Parel</strong> to the tech hubs of <strong>Powai</strong>, we serve every corner of the Maximum City. Our unique approach focuses on <strong>Core Web Vitals</strong>, ensuring your site is favored by Google's latest algorithms.
       </p>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Serving All Zones of Mumbai</h3>
       <ul className="grid grid-cols-2 gap-4 mt-6 list-none pl-0">
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>South Mumbai & Cuffe Parade</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Bandra-Kurla Complex (BKC)</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Andheri East & West</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Goregaon & Malad IT Hubs</strong></li>
       </ul>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Why We are Mumbai's Preferred Web Agency?</h3>
       <p>
        Most <strong>web developers in Mumbai</strong> use generic templates. We build custom <strong>Next.js</strong> solutions. This means your site isn't just a brochure; it's a powerful web application that scales with your business. Plus, our <strong>Trust-Based Delivery</strong> model means you only pay once the results are delivered.
       </p>

       <div className="my-16 grid gap-10 sm:grid-cols-2">
        <div className="rounded-2xl bg-card border border-border p-8 shadow-sm">
         <Zap className="h-10 w-10 text-primary mb-6" />
         <h4 className="text-xl font-bold text-foreground">Extreme Speed</h4>
         <p className="text-sm mt-4">Average load time &lt;0.8 seconds. This reduces bounce rates and increases conversions for your Mumbai business.</p>
        </div>
        <div className="rounded-2xl bg-card border border-border p-8 shadow-sm">
         <BarChart3 className="h-10 w-10 text-primary mb-6" />
         <h4 className="text-xl font-bold text-foreground">SEO Built-In</h4>
         <p className="text-sm mt-4">We implement advanced schema markups and semantic HTML to ensure you rank for "best website makers in Mumbai".</p>
        </div>
       </div>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Our Web Services for Mumbai</h3>
       <p>
        We offer a full suite of digital services to the Mumbai Metropolitan Region:
       </p>
       <ul className="space-y-4 mt-6">
        <li className="flex gap-4">
         <div className="mt-1 text-primary"><CheckCircle2 className="h-5 w-5" /></div>
         <div><strong>Corporate Websites:</strong> Professional presence for Mumbai firms in finance, legal, and real estate.</div>
        </li>
        <li className="flex gap-4">
         <div className="mt-1 text-primary"><CheckCircle2 className="h-5 w-5" /></div>
         <div><strong>D2C E-commerce:</strong> Headless commerce solutions for Mumbai's fast-growing direct-to-consumer brands.</div>
        </li>
        <li className="flex gap-4">
         <div className="mt-1 text-primary"><CheckCircle2 className="h-5 w-5" /></div>
         <div><strong>SaaS Platforms:</strong> Engineering-heavy web apps for Mumbai startups and tech companies.</div>
        </li>
       </ul>
      </div>
     </Reveal>
    </div>
   </section>

   {/* CTA */}
   <section className="bg-primary py-20 text-white">
    <div className="container-px mx-auto max-w-4xl text-center">
     <h2 className="text-3xl font-bold sm:text-4xl">Start Your Mumbai Success Story Today</h2>
     <p className="mt-6 text-white/80 text-lg">Result-oriented delivery. Performance guaranteed. 100% SEO optimized.</p>
     <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link href="/contact" className="px-10 py-4 bg-white text-primary rounded-full font-bold transition hover:scale-105">
       Get a Free Quote
      </Link>
      <a href="tel:+919284470352" className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition">
       Call Mumbai Sales
      </a>
     </div>
    </div>
   </section>
  </>
 );
}
