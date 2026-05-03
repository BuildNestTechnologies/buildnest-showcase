import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Reveal from "@/components/site/Reveal";
import { MapPin, CheckCircle2, Phone, ArrowRight, Globe, Zap, Shield, Smartphone, Settings, BarChart3, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
 title: "Best Software Company in Bhiwandi | Software Development Bhiwandi",
 description: "Bhiwandi's #1 software company specializing in custom ERP, CRM, and warehouse management software. Serving MIDC Bhiwandi, Narpoli, and Mumbai. Professional SEO included.",
 keywords: ["software company in Bhiwandi", "software development Bhiwandi", "custom software Bhiwandi", "best software agency Bhiwandi", "IT company Bhiwandi"],
 alternates: {
  canonical: "https://buildnest.world/software-company-bhiwandi",
 },
};

export default function BhiwandiSoftwarePage() {
 const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://buildnest.world/software-company-bhiwandi/#localbusiness",
  "name": "BuildNest Technologies Bhiwandi",
  "image": "https://buildnest.world/buildnest-logo.png",
  "url": "https://buildnest.world/software-company-bhiwandi",
  "telephone": "+919284470352",
  "address": {
   "@type": "PostalAddress",
   "streetAddress": "Near Shagun Chowk",
   "addressLocality": "Bhiwandi",
   "addressRegion": "Maharashtra",
   "postalCode": "421302",
   "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "19.3002", "longitude": "73.0580" },
  "areaServed": ["Bhiwandi", "MIDC Bhiwandi", "Thane", "Kalyan"],
  "description": "Leading software development company in Bhiwandi for custom business applications, automation, and industrial software."
 };

 return (
  <>
   <script id="local-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
   
   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-32">
    <div className="container-px mx-auto max-w-6xl">
     <Reveal>
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-7xl text-center leading-[1.1]">
       Bhiwandi's #1 Software Development Company
      </h1>
      <p className="mx-auto mt-8 max-w-3xl text-xl text-muted-foreground text-center leading-relaxed">
       We build custom software that solves real business problems. From <strong>MIDC warehouse automation</strong> to <strong>retail management systems</strong>, we are Bhiwandi's IT power-house.
      </p>
     </Reveal>
    </div>
   </section>

   <section className="py-24 border-t border-border">
    <div className="container-px mx-auto max-w-4xl">
     <Reveal direction="up">
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
       <h2 className="text-3xl font-bold text-foreground mb-8">Modernizing Bhiwandi's Industrial & Commercial Landscape</h2>
       <p>
        Bhiwandi is a hub of industry and logistics. Yet, many businesses still rely on manual registers or outdated spreadsheets. As the leading <strong>software company in Bhiwandi</strong>, <strong>BuildNest Technologies</strong> is here to change that. We bring enterprise-grade software development to local businesses in <strong>Narpoli, Shagun Chowk, and Anjurphata</strong>.
       </p>
       
       <p className="mt-6">
        Our focus is on <strong>automation</strong> and <strong>efficiency</strong>. We don't just write code; we understand your workflow and build software that saves you hours of manual work every day. Whether you need a <strong>Custom CRM</strong> for your sales team or a <strong>Warehouse Management System (WMS)</strong> for your MIDC logistics firm, we deliver results.
       </p>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Software Solutions for Bhiwandi's Industries</h3>
       <ul className="grid gap-6 sm:grid-cols-2 mt-8 list-none pl-0">
        <li className="rounded-xl border border-border bg-card p-6">
         <h4 className="font-bold text-foreground">Logistics & Warehousing</h4>
         <p className="text-sm mt-2">Track inventory, manage shipments, and automate billing for your Bhiwandi warehouse.</p>
        </li>
        <li className="rounded-xl border border-border bg-card p-6">
         <h4 className="font-bold text-foreground">Textile Manufacturing</h4>
         <p className="text-sm mt-2">Custom software to manage loom production, worker shifts, and raw material tracking.</p>
        </li>
        <li className="rounded-xl border border-border bg-card p-6">
         <h4 className="font-bold text-foreground">Retail & E-commerce</h4>
         <p className="text-sm mt-2">Point of Sale (POS) systems integrated with online storefronts for local Bhiwandi retailers.</p>
        </li>
        <li className="rounded-xl border border-border bg-card p-6">
         <h4 className="font-bold text-foreground">Healthcare & Education</h4>
         <p className="text-sm mt-2">Patient management systems for clinics and admission portals for schools in Bhiwandi.</p>
        </li>
       </ul>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Why We Are the Best IT Company in Bhiwandi?</h3>
       <p>
        Most <strong>IT companies in Bhiwandi</strong> are just resellers. We are <strong>creators</strong>. We build everything from scratch using modern frameworks like <strong>Next.js and Node.js</strong>. This ensures your software is lightning fast, secure, and works perfectly on mobile devices.
       </p>
       
       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Result Oriented, Performance First</h3>
       <p>
        We are proud to offer a <strong>Result-Oriented Delivery</strong> model to our fellow Bhiwandi entrepreneurs. We start development immediately and only bill you once you see a working demo of your custom software. No other <strong>software agency in Bhiwandi</strong> offers this level of transparency and trust.
       </p>
      </div>
     </Reveal>
    </div>
   </section>

   {/* CTA */}
   <section className="py-24 bg-card border-y border-border">
    <div className="container-px mx-auto max-w-4xl text-center">
     <Reveal direction="down">
      <h2 className="text-3xl font-bold sm:text-4xl">Ready to automate your Bhiwandi business?</h2>
      <p className="mt-6 text-muted-foreground text-lg">Speak with our Bhiwandi software experts today. Let's build your future.</p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
       <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold transition hover:scale-105">
        Start Free Software Project
       </Link>
       <a href="tel:+919284470352" className="px-10 py-4 border border-border bg-card rounded-full font-bold hover:bg-muted transition">
        <Phone className="h-4 w-4 mr-2 inline" /> Call Local Office
       </a>
      </div>
     </Reveal>
    </div>
   </section>
  </>
 );
}
