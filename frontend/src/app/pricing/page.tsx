import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Reveal from "@/components/site/Reveal";
import { Check, Info } from "lucide-react";

export const metadata: Metadata = {
 title: "Website Development Prices in Bhiwandi & Mumbai | BuildNest Technologies",
 description: "Affordable website development pricing for Bhiwandi & Mumbai businesses. Plans from ₹7,999. Professional SEO included.",
};

export default function Pricing() {
 const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
   { "@type": "Question", "name": "How much does a website cost in Bhiwandi?",
    "acceptedAnswer": { "@type": "Answer", "text": "A professional business website in Bhiwandi starts at ₹7,999 with BuildNest Technologies. This includes up to 5 pages, mobile-responsive design, basic SEO setup, contact form, and 3 months of free support. E-commerce websites start at ₹18,999." }},
   { "@type": "Question", "name": "What is the website development process at BuildNest?",
    "acceptedAnswer": { "@type": "Answer", "text": "Our process is simple: (1) Discovery & Strategy, (2) Design & Prototyping, (3) Development & SEO, (4) Quality Check & Deployment. We keep you involved at every stage to ensure the final product meets your business goals." }},
   { "@type": "Question", "name": "Do I need a GST number to get a website built?",
    "acceptedAnswer": { "@type": "Answer", "text": "No. We work with individuals, small businesses, and registered companies. GST invoices are provided for registered businesses on request." }},
   { "@type": "Question", "name": "How long does it take to build a website in Mumbai or Bhiwandi?",
    "acceptedAnswer": { "@type": "Answer", "text": "Standard business website: 7–14 days. E-commerce: 21–30 days. Custom software: 45–90 days." }},
   { "@type": "Question", "name": "Does BuildNest provide website maintenance and hosting?",
    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Annual maintenance plans from ₹4,999/year including SSL, backups, uptime monitoring, and content updates." }},
   { "@type": "Question", "name": "Can BuildNest build on Shopify?",
    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build on Shopify, WooCommerce, and custom Next.js e-commerce with Razorpay, PayU, and Stripe payment gateways." }},
   { "@type": "Question", "name": "Does BuildNest develop mobile apps?",
    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Flutter and React Native apps starting at ₹29,999. We also build Progressive Web Apps (PWAs)." }},
   { "@type": "Question", "name": "Will my website rank on Google?",
    "acceptedAnswer": { "@type": "Answer", "text": "Every BuildNest website includes title tags, meta descriptions, H1–H6 structure, sitemap.xml, robots.txt, Schema markup, image alt tags, and Google Search Console setup." }},
   { "@type": "Question", "name": "Where is BuildNest Technologies located?",
    "acceptedAnswer": { "@type": "Answer", "text": "Bhiwandi, Maharashtra. We serve Bhiwandi, Mumbai, Thane, Navi Mumbai, and clients across India remotely." }},
   { "@type": "Question", "name": "How is BuildNest different from other agencies in Mumbai?",
    "acceptedAnswer": { "@type": "Answer", "text": "Three differences: (1) Quality & Performance. (2) Modern stackNext.js, React, Flutter. (3) SEO-first development on every project." }},
   { "@type": "Question", "name": "Can I get a website made for under ₹10,000?",
    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our Starter plan at ₹7,999 delivers a professional 5-page website with SEO, contact form, and mobile-responsive design." }},
   { "@type": "Question", "name": "Do you work with clients outside Bhiwandi and Mumbai?",
    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work with clients across India and internationally via remote collaboration. Most of our workflow is onlinecalls, design reviews, and delivery are handled digitally." }}
  ]
 };

 const productSchema = [
  {
   "@context": "https://schema.org",
   "@type": "Product", "name": "BuildNest Starter Website Plan",
   "description": "5-page business website, mobile responsive, basic SEO, contact form. Best for small businesses in Bhiwandi.",
   "offers": { "@type": "Offer", "price": "7999", "priceCurrency": "INR",
    "availability": "https://schema.org/InStock", "priceValidUntil": "2026-12-31" }
  },
  {
   "@context": "https://schema.org",
   "@type": "Product", "name": "BuildNest Business Website Plan",
   "offers": { "@type": "Offer", "price": "12999", "priceCurrency": "INR",
    "availability": "https://schema.org/InStock" }
  },
  {
   "@context": "https://schema.org",
   "@type": "Product", "name": "BuildNest E-Commerce Website Plan",
   "offers": { "@type": "Offer", "price": "18999", "priceCurrency": "INR",
    "availability": "https://schema.org/InStock" }
  }
 ];

 return (
  <>
   <script id="faq-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
   <script id="product-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
    <div className="container-px mx-auto max-w-7xl text-center">
     <Reveal direction="up">
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
       Affordable Website Development Pricing for Bhiwandi & Mumbai Businesses
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
       Professional digital solutions starting at ₹7,999. Transparent pricing. No hidden costs.
      </p>
     </Reveal>
    </div>
   </section>

   {/* PRICING TABLE (ACCESSIBLE & SEO FRIENDLY) */}
   <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
    <Reveal direction="up">
     <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
      <table className="w-full text-left border-collapse">
       <thead>
        <tr className="bg-secondary/50 border-b border-border">
         <th className="p-6 font-display font-bold">Plan Name</th>
         <th className="p-6 font-display font-bold">Price (INR)</th>
         <th className="p-6 font-display font-bold">Pages</th>
         <th className="p-6 font-display font-bold">SEO</th>
         <th className="p-6 font-display font-bold">Best For</th>
         <th className="p-6"></th>
        </tr>
       </thead>
       <tbody className="divide-y divide-border">
        {[
         { name: "Starter", price: "₹7,999", pages: "5 Pages", seo: "Basic", for: "Small shops Bhiwandi", href: "/contact" },
         { name: "Business", price: "₹12,999", pages: "10 Pages", seo: "Advanced", for: "Growing companies Mumbai", href: "/contact" },
         { name: "E-Commerce", price: "₹18,999", pages: "Unlimited", seo: "Full", for: "Online stores India", href: "/contact" },
         { name: "Enterprise", price: "Custom", pages: "Unlimited", seo: "Full + Ongoing", for: "SaaS / Large Business", href: "/contact" }
        ].map((row, i) => (
         <tr key={i} className="hover:bg-accent/5 transition-colors">
          <td className="p-6 font-bold">{row.name}</td>
          <td className="p-6 text-primary font-bold">{row.price}</td>
          <td className="p-6 text-sm text-muted-foreground">{row.pages}</td>
          <td className="p-6 text-sm text-muted-foreground">{row.seo}</td>
          <td className="p-6 text-sm text-muted-foreground">{row.for}</td>
          <td className="p-6">
           <Link href={row.href} className="inline-flex px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:scale-105 transition-transform">Get Quote</Link>
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </Reveal>
   </section>

   {/* PLAN COMPARISON CARDS */}
   <section className="container-px mx-auto max-w-7xl py-12">
    <div className="grid gap-8 md:grid-cols-3">
     {[
      { plan: "Starter", price: "7,999", features: ["5-page business website", "Mobile responsive design", "Basic SEO setup", "Contact form", "3 months support"] },
      { plan: "Business", price: "12,999", features: ["10-page business website", "Google Business optimization", "Custom lead-gen form", "Advanced SEO markup", "6 months support"] },
      { plan: "E-Commerce", price: "18,999", features: ["Full online store", "Payment gateway integration", "Inventory management", "Full product SEO", "12 months support"] },
     ].map((p, idx) => (
      <Reveal key={idx} delay={idx * 0.1} direction="up">
       <div className="flex flex-col h-full rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold">{p.plan} Website</h3>
        <div className="mt-4 mb-8">
         <span className="text-4xl font-bold text-foreground">₹{p.price}</span>
         <span className="text-muted-foreground text-sm">/flat-fee</span>
        </div>
        <ul className="space-y-4 mb-10 flex-1">
         {p.features.map(f => (
          <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
           <Check className="h-4 w-4 text-primary" /> {f}
          </li>
         ))}
        </ul>
        <Link href="/contact" className="block w-full py-3 bg-secondary text-foreground text-center font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
         Select {p.plan}
        </Link>
       </div>
      </Reveal>
     ))}
    </div>
   </section>

   {/* FAQ SECTION */}
   <section className="py-20 bg-hero border-t border-border">
    <div className="container-px mx-auto max-w-4xl">
     <div className="text-center mb-16">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <p className="mt-4 text-muted-foreground italic">Honest answers for our clients in Bhiwandi and Mumbai.</p>
     </div>
     <div className="grid gap-6">
      {faqSchema.mainEntity.slice(0, 10).map((faq, i) => (
       <Reveal key={i} delay={i * 0.05}>
        <div className="p-6 rounded-xl border border-border bg-card">
         <h3 className="font-bold flex items-center gap-3">
          <Info className="h-4 w-4 text-primary" /> {faq.name}
         </h3>
         <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
          {faq.acceptedAnswer.text}
         </p>
        </div>
       </Reveal>
      ))}
     </div>
    </div>
   </section>
  </>
 );
}
