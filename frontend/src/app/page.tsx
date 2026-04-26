import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Phone, Mail, Check, Star, Globe, Smartphone, Settings, ShieldCheck, ShoppingCart, Layout } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import DiagonalGallery from "@/components/site/DiagonalGallery";
import { PORTFOLIO } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "BuildNest Technologies | India's Premier Website & Software Agency",
 description: "India's leading website development company. Zero upfront fees. Custom software, mobile apps, e-commerce. Professional digital solutions nationwide. Plans from ₹7,999.",
};

export default function Home() {
 const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://buildnest.world/#localbusiness",
  "name": "BuildNest Technologies",
  "image": "https://buildnest.world/buildnest-logo.png",
  "url": "https://buildnest.world",
  "telephone": "+919284470352",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer, EMI",
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
  "openingHoursSpecification": [
   { "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00", "closes": "19:00" },
   { "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday", "opens": "10:00", "closes": "17:00" }
  ],
  "areaServed": [
   { "@type": "City", "name": "Bhiwandi" },
   { "@type": "City", "name": "Mumbai" },
   { "@type": "City", "name": "Thane" },
   { "@type": "City", "name": "Navi Mumbai" },
   { "@type": "State", "name": "Maharashtra" },
   { "@type": "Country", "name": "India" }
  ],
  "aggregateRating": {
   "@type": "AggregateRating",
   "ratingValue": "4.9", "reviewCount": "87", "bestRating": "5"
  }
 };

 return (
  <>
   <script
    id="local-business-schema"
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
   />
   
   {/* 1. HERO */}
   <section className="relative overflow-hidden bg-hero pt-20 pb-16 md:pt-32 md:pb-24">
    <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
     <div>
      <Reveal direction="diagonal-right">
       <h1 className="font-display text-[30px] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[45px]">
        BuildNest Technologies
        <br />India's Premier Website & Software Development Agency
       </h1>
      </Reveal>

      <Reveal delay={0.1} direction="left">
       <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
        We build high-performance websites, mobile apps, and custom software for businesses nationwide. Zero upfront payment. Professional SEO included.
       </p>
      </Reveal>

      <Reveal delay={0.2} direction="up">
       <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <Link
         href="/contact"
         className="hover-button-advanced inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white"
        >
         Get Free Quote <ArrowRight className="h-5 w-5" />
        </Link>
        <a
         href="tel:+919284470352"
         className="hover-button-advanced inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground hover:bg-accent"
        >
         <Phone className="h-5 w-5" /> Call for Consultation
        </a>
       </div>
      </Reveal>
     </div>

     <div className="relative">
      <Reveal delay={0.2} direction="diagonal-left">
       <div className="relative overflow-hidden rounded-2xl shadow-sm border border-border bg-card">
        <Image
         src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
         alt="Best website development company in Bhiwandi and Mumbai - BuildNest Technologies"
         width={1200}
         height={800}
         priority
         className="h-[400px] w-full object-cover sm:h-[500px]"
        />
       </div>
      </Reveal>
     </div>
    </div>
   </section>

   {/* 2. TRUST BAR */}
   <section className="border-y border-border bg-card py-10">
    <div className="container-px mx-auto max-w-7xl text-center md:text-left">
     <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="flex items-center gap-4">
       <div className="flex -space-x-3">
        {[1, 2, 3].map(i => (
         <Image key={i} src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" width={48} height={48} className="h-12 w-12 rounded-full border-2 border-card object-cover" />
        ))}
       </div>
       <div>
        <div className="flex items-center gap-1 text-primary">
         {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
        </div>
        <p className="text-sm font-medium">4.9/5 Rating from 500+ Clients</p>
       </div>
      </div>
      <div className="grid grid-cols-2 gap-8 md:flex md:gap-12">
       <div className="text-center md:text-left">
        <p className="text-2xl font-bold text-foreground">500+</p>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Websites Built</p>
       </div>
       <div className="text-center md:text-left">
        <p className="text-2xl font-bold text-foreground">₹7,999</p>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Starting Price</p>
       </div>
       <div className="text-center md:text-left">
        <p className="text-2xl font-bold text-foreground">Zero</p>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Upfront Cost</p>
       </div>
       <div className="text-center md:text-left">
        <p className="text-2xl font-bold text-foreground">2022</p>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Serving Since</p>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* 3. SERVICES GRID */}
   <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
    <Reveal direction="diagonal-right">
     <div className="text-left mb-16">
      <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Expertise</span>
      <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">Comprehensive Digital Services</h2>
     </div>
    </Reveal>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
     <Reveal delay={0} direction="up">
      <div className="hover-card-diagonal flex h-full flex-col rounded-2xl border border-border bg-card p-8">
       <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Layout className="h-6 w-6" />
       </div>
       <h3 className="font-display text-xl font-bold text-foreground">Website Development</h3>
       <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        High-performance business websites built with Next.js and React for maximum speed and Google ranking.
       </p>
      </div>
     </Reveal>

     <Reveal delay={0.1} direction="up">
      <div className="hover-card-diagonal flex h-full flex-col rounded-2xl border border-border bg-card p-8">
       <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Smartphone className="h-6 w-6" />
       </div>
       <h3 className="font-display text-xl font-bold text-foreground">Mobile App Development</h3>
       <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Native-quality Android and iOS apps using Flutter and React Native to reach your customers everywhere.
       </p>
      </div>
     </Reveal>

     <Reveal delay={0.2} direction="up">
      <div className="hover-card-diagonal flex h-full flex-col rounded-2xl border border-border bg-card p-8">
       <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Settings className="h-6 w-6" />
       </div>
       <h3 className="font-display text-xl font-bold text-foreground">Custom Software</h3>
       <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Internal dashboards, ERPs, and CRMs tailored to your specific business operations in Bhiwandi.
       </p>
      </div>
     </Reveal>

     <Reveal delay={0.3} direction="up">
      <div className="hover-card-diagonal flex h-full flex-col rounded-2xl border border-border bg-card p-8">
       <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <ShoppingCart className="h-6 w-6" />
       </div>
       <h3 className="font-display text-xl font-bold text-foreground">E-Commerce Design</h3>
       <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Full-featured online stores with secure payment gateway integration (Razorpay/Stripe) for local retailers.
       </p>
      </div>
     </Reveal>
    </div>
   </section>

   {/* 4. ABOUT ENTITY PARAGRAPH */}
   <section className="bg-hero py-16 border-y border-border">
    <div className="container-px mx-auto max-w-4xl text-center">
     <Reveal>
      <p className="text-lg leading-relaxed text-muted-foreground italic">
       BuildNest Technologies is a leading <strong>website development company in Bhiwandi</strong> offering <strong>custom software development</strong>, <strong>mobile app development</strong>, and <strong>e-commerce website design</strong> for businesses across <strong>Mumbai</strong>, <strong>Thane</strong>, and <strong>Navi Mumbai</strong>. Founded in 2022, we have delivered over 500 digital projects across India using modern technologies including React, Next.js, Flutter, and Node.js. Our zero upfront payment model makes professional website development accessible to every businessfrom small shops in Bhiwandi to enterprise clients across Maharashtra. Contact us today for a free consultation at buildnest.world.
      </p>
     </Reveal>
    </div>
   </section>

   {/* 5. PRICING PREVIEW */}
   <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
    <div className="text-center mb-16">
     <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Transparent Pricing for Your Business</h2>
     <p className="mt-4 text-muted-foreground">Professional digital solutions that fit your budget.</p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
     {[
      { plan: "Starter", price: "7,999", features: ["5 Pages", "Mobile Responsive", "Basic SEO", "Contact Form"] },
      { plan: "Business", price: "12,999", features: ["10 Pages", "Advanced SEO", "Admin Dashboard", "6 Months Support"] },
      { plan: "E-Commerce", price: "18,999", features: ["Unlimited Products", "Payment Gateway", "Order Management", "Full SEO"] },
     ].map((p, idx) => (
      <Reveal key={idx} delay={idx * 0.1} direction="up">
       <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <h3 className="text-lg font-bold text-foreground">{p.plan} Website</h3>
        <div className="mt-4 flex items-baseline">
         <span className="text-3xl font-bold text-foreground">₹{p.price}</span>
         <span className="ml-1 text-muted-foreground text-sm">/one-time</span>
        </div>
        <ul className="mt-6 space-y-4">
         {p.features.map(f => (
          <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
           <Check className="h-4 w-4 text-primary" /> {f}
          </li>
         ))}
        </ul>
        <Link href="/pricing" className="mt-8 block w-full rounded-xl bg-primary/10 py-3 text-center text-sm font-bold text-primary transition hover:bg-primary hover:text-white">
         Learn More
        </Link>
       </div>
      </Reveal>
     ))}
    </div>
   </section>

   {/* 6. PORTFOLIO PREVIEW - DIAGONAL SCROLLING */}
   <DiagonalGallery />

   {/* 7. TESTIMONIALS */}
   <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
    <div className="text-center mb-16">
     <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">What Clients Are Saying</h2>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
     {[
      { name: "Rahul S.", location: "Bhiwandi", text: "BuildNest is the best website development company in Bhiwandi. They built my textile business site in 10 days." },
      { name: "Meera K.", location: "Mumbai", text: "Needed a software agency in Mumbai for my salon's booking system. Their Next.js solution is lightning fast." },
      { name: "Arjun P.", location: "Thane", text: "Zero upfront was what sold me. They actually deliver quality before asking for a single rupee." }
     ].map((t, idx) => (
      <Reveal key={idx} delay={idx * 0.1}>
       <div className="rounded-2xl border border-border bg-card p-8 shadow-sm italic text-muted-foreground leading-relaxed">
        <div className="flex gap-1 text-primary mb-4">
         {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
        </div>
        "{t.text}"
        <div className="mt-6 font-display font-bold text-foreground not-italic"> {t.name}, {t.location}</div>
       </div>
      </Reveal>
     ))}
    </div>
   </section>

   {/* 8. CITY AREA LINKS */}
   <section className="bg-[#111214] py-12 text-white">
    <div className="container-px mx-auto max-w-7xl">
     <div className="flex flex-wrap justify-center gap-6 md:gap-12">
      <Link href="/website-development-bhiwandi" className="text-xs uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">Website Development Bhiwandi</Link>
      <Link href="/software-agency-mumbai" className="text-xs uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">Software Agency Mumbai</Link>
      <Link href="/website-development-kalyan" className="text-xs uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">Website Development Kalyan</Link>
      <Link href="/app-development-thane" className="text-xs uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">App Development Thane</Link>
      <Link href="/website-development-navi-mumbai" className="text-xs uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">Website Development Navi Mumbai</Link>
     </div>
    </div>
   </section>

   {/* 9. GOOGLE MAPS EMBED - REGIONAL VIEW */}
   <section className="h-[550px] w-full border-y border-border relative overflow-hidden">
    <div className="absolute top-6 left-6 z-20 bg-background/95 dark:bg-card/90 backdrop-blur-md p-5 rounded-2xl border border-border shadow-2xl max-w-xs transition-transform hover:scale-105">
     <div className="flex items-center gap-2 mb-2">
      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Service Locations</p>
     </div>
     <h3 className="text-xl font-bold text-foreground tracking-tight">Mumbai, Bhiwandi & Kalyan Hub</h3>
     <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
      Ranked #1 for digital services across the entire <strong>Mumbai Metropolitan Region</strong>.
     </p>
     <div className="mt-4 flex flex-wrap gap-2">
      {["Bhiwandi", "Mumbai", "Kalyan", "Thane", "Navi Mumbai"].map(city => (
       <span key={city} className="text-[9px] font-bold bg-secondary px-2 py-1 rounded text-muted-foreground border border-border">
        {city}
       </span>
      ))}
     </div>
    </div>
    <iframe 
     title="BuildNest Technologies Regional Service Area"
     src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d150614.238472551!2d72.96677!3d19.18823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
     width="100%" 
     height="100%" 
     style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }} 
     allowFullScreen={true} 
     loading="lazy" 
    />
   </section>

   {/* 10. CTA SECTION */}
   <section className="container-px mx-auto max-w-4xl py-20 md:py-28">
    <Reveal direction="down">
     <div className="rounded-3xl bg-primary p-10 text-center text-white md:p-16 shadow-2xl">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to Start Your Digital Journey?</h2>
      <p className="mx-auto mt-6 max-w-xl text-white/80 text-lg">
       Get a custom, SEO-optimized website or software built by the #1 agency. No upfront fees.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
       <Link href="/contact" className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-primary transition hover:scale-105">
        Get a Free Quote Now
       </Link>
       <a href="tel:+919284470352" className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-8 py-4 font-bold text-white transition hover:bg-white/10">
        <Phone className="h-5 w-5" /> Speak with Our Team
       </a>
      </div>
     </div>
    </Reveal>
   </section>
  </>
 );
}
