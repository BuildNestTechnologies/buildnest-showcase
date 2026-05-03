import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Reveal from "@/components/site/Reveal";
import { MapPin, CheckCircle2, Phone, ArrowRight, Globe, Zap, Shield, Smartphone, Settings, BarChart3, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
 title: "Best Software Company in Mumbai | Web Development Agency Mumbai",
 description: "Ranked #1 software company and website development agency in Mumbai. We build high-performance mobile apps, e-commerce stores & custom ERPs. Serving Bandra, Andheri, Powai & South Mumbai.",
 keywords: ["software company in Mumbai", "web development agency Mumbai", "mobile app development Mumbai", "custom software development Mumbai", "best website developers Mumbai", "software agency Mumbai"],
 alternates: {
  canonical: "https://buildnest.world/software-agency-mumbai",
 },
};

export default function MumbaiCityPage() {
 const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://buildnest.world/software-agency-mumbai/#localbusiness",
  "name": "BuildNest Technologies Mumbai",
  "image": "https://buildnest.world/buildnest-logo.png",
  "url": "https://buildnest.world/software-agency-mumbai",
  "telephone": "+919284470352",
  "priceRange": "₹₹",
  "address": {
   "@type": "PostalAddress",
   "addressLocality": "Mumbai",
   "addressRegion": "Maharashtra",
   "postalCode": "400001",
   "addressCountry": "IN"
  },
  "geo": {
   "@type": "GeoCoordinates",
   "latitude": "19.0760",
   "longitude": "72.8777"
  },
  "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Kalyan"],
  "description": "Leading software development and web design agency in Mumbai specializing in React, Next.js, and mobile app development for startups and enterprises."
 };

 return (
  <>
   <script id="local-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
   
   {/* HERO SECTION */}
   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-32">
    <div className="container-px mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
     <Reveal direction="left">
      <div>
       <span className="text-primary font-bold uppercase tracking-widest text-xs">Serving the Mumbai Metropolitan Region</span>
       <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
        Premium Software Company & Web Agency in Mumbai
       </h1>
       <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Scale your business with Mumbai's most performance-focused tech agency. From <strong>Andheri</strong> startups to <strong>Bandra</strong> boutiques, we build digital solutions that dominate the Mumbai market.
       </p>
       <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white transition hover:scale-105">
         Get a Custom Quote <ArrowRight className="h-5 w-5" />
        </Link>
        <a href="tel:+919284470352" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-bold text-foreground hover:bg-accent transition">
         <Phone className="h-5 w-5" /> Call Mumbai Office
        </a>
       </div>
      </div>
     </Reveal>
     <Reveal direction="right" delay={0.2}>
      <div className="relative">
       <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <Image 
         src="https://images.unsplash.com/photo-1566548971834-4bc36b274533?auto=format&fit=crop&w=800&q=80" 
         alt="Premium software development in Mumbai - BuildNest Technologies" 
         width={800} 
         height={600} 
         className="w-full h-auto"
        />
       </div>
      </div>
     </Reveal>
    </div>
   </section>

   {/* TECH STACK LOGOS */}
   <section className="bg-muted/10 py-16 border-y border-border overflow-hidden">
    <div className="container-px mx-auto max-w-7xl text-center">
     <Reveal direction="up">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-10">Our Technology Stack ✦ Global Standards</p>
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
       {[
        { name: "Next.js", logo: "nextdotjs", color: "ffffff" },
        { name: "React", logo: "react", color: "61DAFB" },
        { name: "Node.js", logo: "nodedotjs", color: "339933" },
        { name: "Flutter", logo: "flutter", color: "02569B" },
        { name: "Tailwind", logo: "tailwindcss", color: "06B6D4" },
        { name: "MongoDB", logo: "mongodb", color: "47A248" },
        { name: "Shopify", logo: "shopify", color: "7AB55C" },
        { name: "Razorpay", logo: "razorpay", color: "008ECC" }
       ].map((tech) => (
        <img
         key={tech.name}
         src={`https://cdn.simpleicons.org/${tech.logo}/${tech.color}`}
         alt={tech.name}
         title={tech.name}
         className="h-7 w-auto md:h-9"
         loading="lazy"
        />
       ))}
      </div>
     </Reveal>
    </div>
   </section>

   {/* MAIN CONTENT AREA */}
   <section className="py-24 border-t border-border">
    <div className="container-px mx-auto max-w-4xl">
     <Reveal direction="up">
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
       <h2 className="text-3xl font-bold text-foreground mb-8">Mumbai's Choice for Next-Gen Digital Solutions</h2>
       <p>
        Mumbai is the financial and tech capital of India, and the competition here is fierce. To stand out, your business needs more than just a website; it needs a technological edge. <strong>BuildNest Technologies</strong> provides that edge as a leading <strong>software company in Mumbai</strong>, specializing in high-conversion web platforms and enterprise-grade software.
       </p>
       
       <p className="mt-6">
        Whether you are a fintech startup in <strong>Powai</strong>, a retail brand in <strong>Colaba</strong>, or a manufacturing giant in <strong>Thane</strong>, our team of expert developers uses the same technology used by industry leaders like Vercel, Netflix, and Meta. We specialize in <strong>Next.js development</strong>, <strong>React Native apps</strong>, and <strong>custom ERP systems</strong> that scale with your growth.
       </p>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Serving the Entire Mumbai City & Suburbs</h3>
       <p>
        Our digital reach covers every corner of the Maximum City. We have a dedicated client base across:
       </p>
       <ul className="grid grid-cols-2 gap-4 mt-6 list-none pl-0">
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Bandra & Khar (W)</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Andheri, Juhu & Versova</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Powai & Hiranandani Gardens</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>South Mumbai & Nariman Point</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Borivali, Kandivali & Malad</strong></li>
        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Worli & Lower Parel Business Hubs</strong></li>
       </ul>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Why We Are Different From Other Mumbai Agencies?</h3>
       <p>
        Most <strong>web development agencies in Mumbai</strong> focus on aesthetics alone. At BuildNest, we focus on <strong>Performance, SEO, and User Psychology</strong>. A beautiful website that doesn't load in under 2 seconds or doesn't rank for your primary keywords is a wasted investment.
       </p>
       <p className="mt-4">
        We are also one of the few agencies in Mumbai offering a <strong>Trust-Based Delivery</strong> model for verified businesses. This eliminates the risk for entrepreneurs and allows us to prove our quality through delivery.
       </p>

       <div className="my-16 grid gap-8 sm:grid-cols-3">
        <div className="text-center">
         <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <BarChart3 className="h-8 w-8" />
         </div>
         <h4 className="font-bold text-foreground">SEO Domination</h4>
         <p className="text-xs mt-2">We help Mumbai brands rank #1 for local and national search terms.</p>
        </div>
        <div className="text-center">
         <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Smartphone className="h-8 w-8" />
         </div>
         <h4 className="font-bold text-foreground">Mobile First</h4>
         <p className="text-xs mt-2">Native-quality apps for Android & iOS that your customers will love.</p>
        </div>
        <div className="text-center">
         <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Shield className="h-8 w-8" />
         </div>
         <h4 className="font-bold text-foreground">Robust Security</h4>
         <p className="text-xs mt-2">Bank-level encryption and secure API integrations for all platforms.</p>
        </div>
       </div>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Expert Services for Mumbai Startups & Enterprises</h3>
       <p>
        As a versatile <strong>software agency in Mumbai</strong>, we provide a wide range of technical services:
       </p>
       
       <div className="space-y-8 mt-10">
        <div className="flex gap-6">
         <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-primary">
          <Globe className="h-5 w-5" />
         </div>
         <div>
          <h4 className="font-bold text-foreground">Custom Web Applications</h4>
          <p className="text-sm">Scalable SaaS platforms, customer portals, and dynamic dashboards built with React and Next.js.</p>
         </div>
        </div>
        <div className="flex gap-6">
         <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-primary">
          <Smartphone className="h-5 w-5" />
         </div>
         <div>
          <h4 className="font-bold text-foreground">Cross-Platform App Development</h4>
          <p className="text-sm">Reach the widest audience with Flutter and React Native apps that work flawlessly on both iPhone and Android.</p>
         </div>
        </div>
        <div className="flex gap-6">
         <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-primary">
          <Users className="h-5 w-5" />
         </div>
         <div>
          <h4 className="font-bold text-foreground">E-Commerce & D2C Solutions</h4>
          <p className="text-sm">Complete online storefronts with headless commerce, integrated logistics, and secure Mumbai-based payment gateways.</p>
         </div>
        </div>
       </div>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Leading the Charge in Modern Web Technologies</h3>
       <p>
        We are proud to be one of the top <strong>web developers in Mumbai</strong> pushing the boundaries of what is possible. By moving away from legacy platforms like WordPress and towards <strong>Headless Architecture</strong>, we ensure our clients' websites are future-proof. This means faster updates, better security, and a user experience that rivals the world's top tech companies.
       </p>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Mumbai SEO & Growth Strategy</h3>
       <p>
        Simply having a website is not enough in a city as competitive as Mumbai. You need to be found. Our <strong>SEO services in Mumbai</strong> are integrated into the core of every project. We don't just add keywords; we optimize server response times, implement proper schema markups, and ensure a logical internal linking structure that Google's crawlers love.
       </p>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Frequently Asked Questions (FAQ)</h3>
       <div className="space-y-6 mt-8">
        <div>
         <h5 className="font-bold text-foreground">Why should I choose a Next.js developer in Mumbai?</h5>
         <p className="text-sm mt-2">Next.js offers superior speed and SEO compared to traditional React or WordPress sites. In Mumbai's competitive market, these extra milliseconds can mean the difference between a bounce and a lead.</p>
        </div>
        <div>
         <h5 className="font-bold text-foreground">Do you work with startups in Mumbai?</h5>
         <p className="text-sm mt-2">Yes! We specialize in MVP (Minimum Viable Product) development for Mumbai-based startups, helping them launch fast and scale efficiently.</p>
        </div>
        <div>
         <h5 className="font-bold text-foreground">What industries do you serve in Mumbai?</h5>
         <p className="text-sm mt-2">We serve a diverse range of industries including Real Estate, E-commerce, Healthcare, Logistics, and Education across the Mumbai Metropolitan Region.</p>
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
       <h2 className="text-3xl font-bold text-foreground">Our Mumbai Service Network</h2>
       <p className="mt-6 text-muted-foreground leading-relaxed">
        While our primary production hub is in Bhiwandi, we have a strong consultant presence across Mumbai. We regularly meet clients in <strong>BKC, Powai, and Lower Parel</strong> for strategic discussions and project handovers.
       </p>
       <div className="mt-10 space-y-6">
        <div className="flex gap-4">
         <div className="mt-1 text-primary"><MapPin className="h-6 w-6" /></div>
         <div>
          <h4 className="font-bold">Regional Service Area</h4>
          <p className="text-sm text-muted-foreground mt-1">Andheri, Bandra, Powai, & South Mumbai Hubs</p>
         </div>
        </div>
        <div className="flex gap-4">
         <div className="mt-1 text-primary"><Phone className="h-6 w-6" /></div>
         <div>
          <h4 className="font-bold">Contact Mumbai Support</h4>
          <p className="text-sm text-muted-foreground mt-1">+91 92844 70352</p>
         </div>
        </div>
        <div className="flex gap-4">
         <div className="mt-1 text-primary"><Globe className="h-6 w-6" /></div>
         <div>
          <h4 className="font-bold">Corporate Email</h4>
          <p className="text-sm text-muted-foreground mt-1">buildnest.co.team@gmail.com</p>
         </div>
        </div>
       </div>
       <div className="mt-10">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-lg shadow-primary/20 transition hover:scale-105">
         Book a Consultant Meeting
        </Link>
       </div>
      </Reveal>
     </div>
     <Reveal direction="right" delay={0.2}>
      <div className="h-[450px] w-full overflow-hidden rounded-3xl border border-border shadow-2xl">
       <iframe 
        title="BuildNest Technologies Mumbai Service Hub"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.9351!2d72.85!3d19.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzM2LjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
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
      <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to take Mumbai by storm?</h2>
      <p className="mt-6 text-lg text-muted-foreground">
       Partner with Mumbai's most innovative <strong>software agency</strong>. Let's build something extraordinary together. Transparent pricing for qualified projects.
      </p>
      <div className="mt-10">
       <Link href="/contact" className="hover-button-advanced inline-flex items-center justify-center gap-2 rounded-full bg-primary px-12 py-5 text-lg font-bold text-white">
        Start Your Mumbai Journey
       </Link>
      </div>
     </Reveal>
    </div>
   </section>
  </>
 );
}
