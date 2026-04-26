import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { Globe, Smartphone, Settings, ShoppingCart, ShieldCheck, Palette } from "lucide-react";

export const dynamic = 'force-static';

export const metadata: Metadata = {
 title: "Web Development & Software Services in Bhiwandi & Mumbai | BuildNest",
 description: "Web development & software services for businesses in Bhiwandi & Mumbai. High-performance websites, mobile apps, and e-commerce solutions. Serving all of India.",
 alternates: { canonical: "https://buildnest.world/services" },
};

export default function Services() {
 return (
  <>
   {/* HERO / HUB HEADER */}
   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
    <div className="container-px mx-auto max-w-5xl text-center">
     <Reveal>
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
       Web Development & Software Services for Businesses in Bhiwandi & Mumbai
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
       This is the SEO hub for BuildNest Technologies. We provide top-tier digital services designed to rank #1 and convert visitors into loyal customers.
      </p>
     </Reveal>
    </div>
   </section>

   {/* SERVICES HUB GRID */}
   <section className="py-20 border-t border-border">
    <div className="container-px mx-auto max-w-7xl">
     <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      <Reveal direction="up" delay={0}>
       <div className="flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
        <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
         <Globe className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold">Website Development</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
         We build highly converting, fast-loading websites using React and Next.js. Best for Bhiwandi & Mumbai businesses.
        </p>
        <Link href="/pricing" className="text-primary text-sm font-bold hover:underline">Pricing for website development in Bhiwandi →</Link>
       </div>
      </Reveal>

      <Reveal direction="up" delay={0.1}>
       <div className="flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
        <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
         <Smartphone className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold">Mobile App Development</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
         Native Android and iOS app development using Flutter and React Native. Top agency in Mumbai.
        </p>
        <Link href="/contact" className="text-primary text-sm font-bold hover:underline">Start app project →</Link>
       </div>
      </Reveal>

      <Reveal direction="up" delay={0.2}>
       <div className="flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
        <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
         <ShoppingCart className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold">E-Commerce Solutions</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
         Custom online stores with Razorpay/PayU integration. Ecommerce website design for Bhiwandi shops.
        </p>
        <Link href="/pricing" className="text-primary text-sm font-bold hover:underline">View e-commerce plans →</Link>
       </div>
      </Reveal>

      <Reveal direction="up" delay={0.3}>
       <div className="flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
        <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
         <Settings className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold">Custom Software</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
         B2B software, CRM, and ERP development. Custom dashboards for warehouse & transport businesses.
        </p>
        <Link href="/software" className="text-primary text-sm font-bold hover:underline">Custom software agency capabilities →</Link>
       </div>
      </Reveal>

      <Reveal direction="up" delay={0.4}>
       <div className="flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
        <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
         <Palette className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold">UI/UX Design</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
         Professional branding and logo design for Bhiwandi & Mumbai businesses. Figma to code specialists.
        </p>
        <Link href="/portfolio" className="text-primary text-sm font-bold hover:underline">View design portfolio →</Link>
       </div>
      </Reveal>

      <Reveal direction="up" delay={0.5}>
       <div className="flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
        <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
         <ShieldCheck className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold">Maintenance & Support</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
         Ongoing website maintenance, SSL, and security updates. Support plans for Mumbai agencies.
        </p>
        <Link href="/contact" className="text-primary text-sm font-bold hover:underline">Get maintenance quote →</Link>
       </div>
      </Reveal>
     </div>
    </div>
   </section>

   {/* ABOUT ENTITY PARAGRAPH */}
   <section className="bg-hero py-20 border-y border-border">
    <div className="container-px mx-auto max-w-4xl text-center text-muted-foreground italic leading-relaxed">
     <Reveal>
      <p>
       BuildNest Technologies is a leading <strong>website development company in Bhiwandi</strong> offering <strong>custom software development</strong>, <strong>mobile app development</strong>, and <strong>e-commerce website design</strong> for businesses across <strong>Mumbai</strong>, <strong>Thane</strong>, and <strong>Navi Mumbai</strong>. Founded in 2022, we have delivered over 500 digital projects across India using modern technologies including React, Next.js, Flutter, and Node.js. Our zero upfront payment model makes professional website development accessible to every businessfrom small shops in Bhiwandi to enterprise clients across Maharashtra. Contact us today for a free consultation at buildnest.world.
      </p>
     </Reveal>
    </div>
   </section>

   {/* QUICK CTA */}
   <section className="py-20 text-center">
    <div className="container-px mx-auto max-w-3xl">
     <Reveal>
      <h2 className="text-3xl font-bold">Ready to scale your business?</h2>
      <p className="mt-4 text-muted-foreground">Get a free consultation from our expert team in Mumbai and Bhiwandi.</p>
      <Link href="/contact" className="mt-8 inline-flex px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
       Contact BuildNest Today
      </Link>
     </Reveal>
    </div>
   </section>
  </>
 );
}
