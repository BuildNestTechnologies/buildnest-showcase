import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Reveal from "@/components/site/Reveal";
import { Check, Info, X } from "lucide-react";

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

    {/* REDESIGNED PRICING SECTION */}
    <section className="container-px mx-auto max-w-7xl py-12 md:py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            name: "Starter",
            price: "7,999",
            features: [
              { label: "Purpose", value: "Information", active: true },
              { label: "Pages", value: "Fixed", active: true },
              { label: "Admin Panel", value: "No", active: false },
              { label: "Content Edit", value: "Developer", active: true },
              { label: "Payments", value: "No", active: false },
              { label: "Cart", value: "No", active: false },
              { label: "Orders", value: "No", active: false },
              { label: "Inventory", value: "No", active: false },
              { label: "Best For", value: "Small Business", active: true },
              { label: "Bot", value: "Yes", active: true },
            ],
          },
          {
            name: "Business",
            price: "15,999",
            features: [
              { label: "Purpose", value: "Enquiries", active: true },
              { label: "Pages", value: "Dynamic", active: true },
              { label: "Admin Panel", value: "Yes", active: true },
              { label: "Content Edit", value: "Owner", active: true },
              { label: "Payments", value: "No", active: false },
              { label: "Cart", value: "No", active: false },
              { label: "Orders", value: "No", active: false },
              { label: "Inventory", value: "No", active: false },
              { label: "Best For", value: "Services", active: true },
              { label: "Bot", value: "Yes", active: true },
            ],
          },
          {
            name: "E-Commerce",
            price: "23,999",
            features: [
              { label: "Purpose", value: "Selling", active: true },
              { label: "Pages", value: "Products", active: true },
              { label: "Admin Panel", value: "Full", active: true },
              { label: "Content Edit", value: "Owner", active: true },
              { label: "Payments", value: "Yes", active: true },
              { label: "Cart", value: "Yes", active: true },
              { label: "Orders", value: "Yes", active: true },
              { label: "Inventory", value: "Yes", active: true },
              { label: "Best For", value: "Online Store", active: true },
              { label: "Bot", value: "Yes", active: true },
            ],
          },
        ].map((p, idx) => (
          <Reveal key={p.name} delay={idx * 0.1} direction="up">
            <div className="flex flex-col h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <h3 className="text-2xl font-bold font-display text-foreground mb-8 text-center">{p.name}</h3>
              
              <div className="mb-10 rounded-2xl bg-muted/30 border border-primary/20 py-8 text-center">
                <span className="text-4xl font-bold text-foreground">₹{p.price}</span>
              </div>

              <div className="flex-1 space-y-5">
                {p.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 items-center justify-center rounded-full ${f.active ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground/50'}`}>
                        {f.active ? <Check className="h-3 w-3 stroke-[3]" /> : <X className="h-3 w-3" />}
                      </div>
                      <span className="text-muted-foreground font-medium">{f.label}:</span>
                    </div>
                    <span className={`font-bold ${f.active ? 'text-foreground' : 'text-muted-foreground/60'}`}>{f.value}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact" 
                className={`mt-10 block w-full py-4 text-center font-bold rounded-2xl transition-all duration-300 border-2 ${
                  p.name === 'Business' 
                  ? 'bg-primary border-primary text-white hover:bg-primary/90' 
                  : 'border-primary/30 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Choose {p.name}
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
