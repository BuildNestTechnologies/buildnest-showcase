import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Reveal from "@/components/site/Reveal";
import { MapPin, CheckCircle2, Phone, ArrowRight, Globe, Zap, Shield, Smartphone, Settings, BarChart3, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
 title: "Website Development Company in Bhiwandi | BuildNest Technologies",
 description: "Bhiwandi's #1 website development company. Custom software, e-commerce & web design for businesses in Shagun Chowk, Narpoli, and MIDC Bhiwandi. Zero upfront fees. Serving Mumbai, Thane & Kalyan.",
 keywords: ["website development company in Bhiwandi", "web developers in Bhiwandi", "software company Bhiwandi", "e-commerce website design Bhiwandi", "website making company Bhiwandi", "best web agency Bhiwandi"],
 alternates: {
  canonical: "https://buildnest.world/website-development-bhiwandi",
 },
};

export default function BhiwandiCityPage() {
 const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://buildnest.world/website-development-bhiwandi/#localbusiness",
  "name": "BuildNest Technologies Bhiwandi",
  "image": "https://buildnest.world/buildnest-logo.png",
  "url": "https://buildnest.world/website-development-bhiwandi",
  "telephone": "+919284470352",
  "priceRange": "₹₹",
  "address": {
   "@type": "PostalAddress",
   "streetAddress": "Near Shagun Chowk",
   "addressLocality": "Bhiwandi",
   "addressRegion": "Maharashtra",
   "postalCode": "421302",
   "addressCountry": "IN"
  },
  "geo": {
   "@type": "GeoCoordinates",
   "latitude": "19.3002",
   "longitude": "73.0580"
  },
  "areaServed": ["Bhiwandi", "Thane", "Kalyan", "Mumbai"],
  "description": "Leading website development company in Bhiwandi specializing in Next.js websites, custom software, and professional SEO for local businesses."
 };

 return (
  <>
    <script id="local-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
    <script id="faq-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
     "@context": "https://schema.org",
     "@type": "FAQPage",
     "mainEntity": [
      {
       "@type": "Question",
       "name": "Who is the best website developer in Bhiwandi?",
       "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNest Technologies is widely considered the best website developer in Bhiwandi, offering high-performance Next.js websites, professional SEO, and zero upfront payment for local businesses."
       }
      },
      {
       "@type": "Question",
       "name": "How much does it cost to build a website in Bhiwandi?",
       "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website development in Bhiwandi starts at ₹7,999 with BuildNest Technologies. We offer transparent pricing and custom solutions tailored to your business needs."
       }
      },
      {
       "@type": "Question",
       "name": "Which web agency in Bhiwandi offers zero upfront payment?",
       "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNest Technologies is the only web agency in Bhiwandi offering a zero upfront payment model, ensuring business owners see results before committing their capital."
       }
      }
     ]
    }) }} />
   
   {/* HERO SECTION */}
   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-32">
    <div className="container-px mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
     <Reveal direction="left">
      <div>
       <span className="text-primary font-bold uppercase tracking-widest text-xs">Serving Bhiwandi Metropolitan Region</span>
       <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
        The #1 Website Development Company in Bhiwandi
       </h1>
       <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Join 500+ businesses in Bhiwandi that trust BuildNest Technologies for high-performance websites and custom software. From <strong>Shagun Chowk</strong> to <strong>Narpoli</strong>, we are Bhiwandi's local tech partners.
       </p>
       <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white transition hover:scale-105">
         Get Free Consultation <ArrowRight className="h-5 w-5" />
        </Link>
        <a href="tel:+919284470352" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-bold text-foreground hover:bg-accent transition">
         <Phone className="h-5 w-5" /> Call Local Office
        </a>
       </div>
      </div>
     </Reveal>
     <Reveal direction="right" delay={0.2}>
      <div className="relative">
       <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <Image 
         src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
         alt="Website development office serving Bhiwandi" 
         width={800} 
         height={600} 
         className="w-full h-auto"
        />
       </div>
      </div>
     </Reveal>
    </div>
   </section>

   {/* MAIN CONTENT AREA */}
   <section className="py-24 border-t border-border">
    <div className="container-px mx-auto max-w-4xl">
     <Reveal direction="up">
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
       <h2 className="text-3xl font-bold text-foreground mb-8">Why Businesses in Bhiwandi Choose BuildNest?</h2>
       <p>
        Finding a reliable <strong>website development company in Bhiwandi</strong> used to be a challenge. Most local business owners had to deal with slow-loading templates or unreliable freelancers from Mumbai. <strong>BuildNest Technologies</strong> changed that by bringing world-class engineering (React, Next.js, Flutter) right to the heart of Bhiwandi.
       </p>
       
       <p className="mt-6">
        Whether you own a textile warehouse in <strong>Anjurphata</strong>, a retail shop near <strong>Shagun Chowk</strong>, or a manufacturing unit in <strong>MIDC Bhiwandi</strong>, your business needs a digital presence that actually converts visitors into customers. A simple website is no longer enough in 2026; you need a high-performance machine that ranks on the first page of Google.
       </p>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Local Expertise in Bhiwandi Neighborhoods</h3>
       <p>
        We don't just sit in an office; we understand the geography of our city. We have successfully delivered projects for clients in:
       </p>
       <ul className="grid grid-cols-2 gap-4 mt-6 list-none pl-0">
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Narpoli & Kamatghar</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Shagun Chowk & Kalyan Road</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Anjurphata & Mankoli</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Dhamankar Naka & Padma Nagar</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>MIDC & Sonale Village</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Bhiwandi-Wada Road</strong></li>
       </ul>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">The Zero Upfront Advantage</h3>
       <p>
        We are the only <strong>website making company in Bhiwandi</strong> that offers a <strong>Zero Upfront Payment</strong> model. We believe in our work so much that we start your project without taking a single rupee in advance. You only pay once you are 100% satisfied with the result. This removes all risk for local small business owners who have been burned by "advance-first" agencies in the past.
       </p>

       <div className="my-16 grid gap-8 sm:grid-cols-3">
        <div className="text-center">
         <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Zap className="h-8 w-8" />
         </div>
         <h4 className="font-bold text-foreground">Extreme Speed</h4>
         <p className="mt-2 text-xs">Next.js powered sites that load in &lt;1s.</p>
        </div>
        <div className="text-center">
         <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Globe className="h-8 w-8" />
         </div>
         <h4 className="font-bold text-foreground">Local SEO</h4>
         <p className="mt-2 text-xs">Rank for "best shop in Bhiwandi" easily.</p>
        </div>
        <div className="text-center">
         <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Shield className="h-8 w-8" />
         </div>
         <h4 className="font-bold text-foreground">Enterprise Security</h4>
         <p className="mt-2 text-xs">DDoS protection and SSL included for all.</p>
        </div>
       </div>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Our Services for Bhiwandi Businesses</h3>
       <p>
        While we are known as the best <strong>web developers in Bhiwandi</strong>, our expertise extends far beyond simple landing pages:
       </p>
       
       <div className="space-y-8 mt-10">
        <div className="flex gap-6">
         <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-primary">
          <Smartphone className="h-5 w-5" />
         </div>
         <div>
          <h4 className="font-bold text-foreground">E-Commerce for Local Retailers</h4>
          <p className="text-sm">Convert your Shagun Chowk shop into an online brand. We integrate Razorpay and WhatsApp ordering so you can sell across India.</p>
         </div>
        </div>
        <div className="flex gap-6">
         <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-primary">
          <Settings className="h-5 w-5" />
         </div>
         <div>
          <h4 className="font-bold text-foreground">Custom Software & ERP</h4>
          <p className="text-sm">Manage your textile manufacturing or logistics warehouse in MIDC Bhiwandi with custom internal software tailored to your workflow.</p>
         </div>
        </div>
        <div className="flex gap-6">
         <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-primary">
          <BarChart3 className="h-5 w-5" />
         </div>
         <div>
          <h4 className="font-bold text-foreground">Lead Generation for Real Estate</h4>
          <p className="text-sm">Are you a builder in Bhiwandi? Our high-converting landing pages help you capture quality leads for your new residential projects.</p>
         </div>
        </div>
        <div className="flex gap-6">
         <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-primary">
          <Users className="h-5 w-5" />
         </div>
         <div>
          <h4 className="font-bold text-foreground">Digital Transformation for Schools</h4>
          <p className="text-sm">Professional websites for educational institutions in Bhiwandi to manage admissions, results, and student data efficiently.</p>
         </div>
        </div>
       </div>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Why Website Speed Matters in Bhiwandi?</h3>
       <p>
        In many parts of Bhiwandi, mobile network speeds can fluctuate. If your website is heavy and slow, your potential customers will leave before it even loads. By using <strong>Next.js and React</strong>, we build websites that are "light" yet powerful. They load instantly even on 3G connections, ensuring you never miss a lead from a customer in a low-network area like some industrial zones of Bhiwandi.
       </p>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Frequently Asked Questions (FAQ)</h3>
       <div className="space-y-6 mt-8">
        <div>
         <h5 className="font-bold text-foreground">What is the cost of website development in Bhiwandi?</h5>
         <p className="text-sm mt-2">Our starter plans for Bhiwandi businesses begin at just ₹7,999. This includes a 5-page responsive website, basic SEO, and 1 year of free maintenance.</p>
        </div>
        <div>
         <h5 className="font-bold text-foreground">How long does it take to build a website?</h5>
         <p className="text-sm mt-2">A standard business website typically takes 7–10 days. For custom software or e-commerce, the timeline ranges from 2–4 weeks.</p>
        </div>
        <div>
         <h5 className="font-bold text-foreground">Do you provide SEO services in Bhiwandi?</h5>
         <p className="text-sm mt-2">Yes! Every website we build is "SEO-Ready" by default. We also offer advanced monthly SEO plans to help you rank #1 for keywords like "best software company in Bhiwandi".</p>
        </div>
       </div>
      </div>
     </Reveal>
    </div>
   </section>

   {/* MAP & NAP SECTION */}
   <section className="bg-card border-y border-border py-24">
    <div className="container-px mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
     <div>
      <Reveal direction="left">
       <h2 className="text-3xl font-bold text-foreground">Visit Our Bhiwandi Office</h2>
       <p className="mt-6 text-muted-foreground leading-relaxed">
        We are located right in the heart of the city. We encourage local business owners to visit us for a face-to-face consultation. We believe building a website is a partnership, not just a transaction.
       </p>
       <div className="mt-10 space-y-6">
        <div className="flex gap-4">
         <div className="mt-1 text-primary"><MapPin className="h-6 w-6" /></div>
         <div>
          <h4 className="font-bold">Address</h4>
          <p className="text-sm text-muted-foreground mt-1">Near Shagun Chowk, Bhiwandi, Maharashtra 421302</p>
         </div>
        </div>
        <div className="flex gap-4">
         <div className="mt-1 text-primary"><Phone className="h-6 w-6" /></div>
         <div>
          <h4 className="font-bold">Phone</h4>
          <p className="text-sm text-muted-foreground mt-1">+91 92844 70352</p>
         </div>
        </div>
        <div className="flex gap-4">
         <div className="mt-1 text-primary"><Globe className="h-6 w-6" /></div>
         <div>
          <h4 className="font-bold">Email</h4>
          <p className="text-sm text-muted-foreground mt-1">hello@buildnest.world</p>
         </div>
        </div>
       </div>
       <div className="mt-10">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-lg shadow-primary/20 transition hover:scale-105">
         Schedule a Meeting
        </Link>
       </div>
      </Reveal>
     </div>
     <Reveal direction="right" delay={0.2}>
      <div className="h-[450px] w-full overflow-hidden rounded-3xl border border-border shadow-2xl">
       <iframe 
        title="BuildNest Technologies Bhiwandi Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2345!2d73.0580!3d19.3002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzAwLjciTiA3M8KwMDMnMjguOCJF!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
       />
      </div>
     </Reveal>
    </div>
   </section>

   {/* FINAL CTA */}
   <section className="py-24">
    <div className="container-px mx-auto max-w-4xl text-center">
     <Reveal direction="up">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to dominate the Bhiwandi market?</h2>
      <p className="mt-6 text-lg text-muted-foreground">
       Don't let your competitors take your customers. Build a high-speed, SEO-optimized website with the #1 <strong>web development agency in Bhiwandi</strong>.
      </p>
      <div className="mt-10">
       <Link href="/contact" className="hover-button-advanced inline-flex items-center justify-center gap-2 rounded-full bg-primary px-12 py-5 text-lg font-bold text-white">
        Start Your Project Today (Zero Upfront)
       </Link>
      </div>
     </Reveal>
    </div>
   </section>
  </>
 );
}
