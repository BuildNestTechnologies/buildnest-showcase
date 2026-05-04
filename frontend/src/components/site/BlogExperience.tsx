"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const POSTS = [
 ["BuildNest vs Traditional Agencies: Which is better for Bhiwandi Businesses?", "buildnest-vs-traditional-agencies", "Comparison"],
 ["Top 10 Web Developers in Bhiwandi in 2026", "top-10-web-developers-bhiwandi-2026", "Local guide"],
 ["Cost of Website Development in India (2026 Guide)", "cost-of-website-india-2026", "Pricing"],
 ["Why Bhiwandi Businesses Choose React JS", "why-bhiwandi-businesses-choose-react", "Technology"],
 ["SEO Tips for Small Businesses in Mumbai", "seo-tips-small-business-mumbai", "SEO"],
 ["Shopify Development India: Complete 2026 Guide", "shopify-development-india-guide", "Commerce"],
];

export default function BlogExperience() {
 return (
  <main className="crafted-page">
   <section className="container-px mx-auto max-w-6xl py-10 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
     <div>
      <p className="section-label">Journal</p>
      <h1 className="section-title mt-4 max-w-xl">An editorial surface for business decisions, not a generic blog archive.</h1>
     </div>
     <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
      Medium-sized titles, generous reading rhythm, and strong scanning cues keep the content feeling authored instead of mass-produced.
     </p>
    </div>
   </section>

   <section className="container-px mx-auto max-w-6xl pb-16">
    <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
     <div className="editorial-panel rounded-[2.2rem] p-6 md:p-7">
      <p className="eyebrow-metric text-[color:var(--tone-purple)]">Editorial note</p>
      <p className="mt-8 text-2xl font-semibold leading-tight">
       Clear writing is part of the user experience. It should feel useful before it feels impressive.
      </p>
      <p className="mt-5 text-sm leading-7 text-muted-foreground">
       Expect practical comparisons, pricing signals, SEO direction, and technology advice arranged with the same care as the interface itself.
      </p>
     </div>

     <div className="space-y-3">
      {POSTS.map((post, index) => (
       <motion.div
        key={post[1]}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
       >
        <Link
         href={`/blog/${post[1]}`}
         className={`group grid gap-4 rounded-[2rem] border border-border px-5 py-6 transition hover:-translate-y-1 hover:bg-foreground/[0.03] md:grid-cols-[90px_1fr_160px] md:items-center ${
          index % 2 ? "md:ml-10" : ""
         }`}
        >
         <span className="eyebrow-metric text-muted-foreground">0{index + 1}</span>
         <h2 className="text-xl font-semibold leading-tight md:text-2xl">{post[0]}</h2>
         <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition group-hover:text-foreground">
          {post[2]} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
         </span>
        </Link>
       </motion.div>
      ))}
     </div>
    </div>
   </section>
  </main>
 );
}
