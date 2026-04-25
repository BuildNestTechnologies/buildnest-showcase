import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
 title: "Resources & Insights | BuildNest Technologies",
 description: "Expert guides on website development, SEO, e-commerce, and digital growth for businesses in Bhiwandi and Mumbai.",
};

const POSTS = [
 {
  title: "BuildNest vs Datamatex: Which is better for Bhiwandi Businesses?",
  slug: "buildnest-vs-datamatex",
  desc: "A detailed comparison of Mumbai's leading web agencies.",
  category: "Comparison"
 },
 {
  title: "Top 10 Web Developers in Bhiwandi in 2026",
  slug: "top-10-web-developers-bhiwandi-2026",
  desc: "Find the best talent for your next project.",
  category: "Listicle"
 },
 {
  title: "Cost of Website Development in India (2026 Guide)",
  slug: "cost-of-website-india-2026",
  desc: "Everything you need to know about pricing and budgets.",
  category: "Guide"
 },
 {
  title: "Why Bhiwandi Businesses Choose React JS",
  slug: "why-bhiwandi-businesses-choose-react",
  desc: "The technical advantage of moving to modern frameworks.",
  category: "Tech Trends"
 },
 {
  title: "SEO Tips for Small Businesses in Mumbai",
  slug: "seo-tips-small-business-mumbai",
  desc: "7 actionable steps to rank #1 on Google.",
  category: "SEO"
 },
 {
  title: "Shopify Development India: Complete 2026 Guide",
  slug: "shopify-development-india-guide",
  desc: "Start your e-commerce journey with the right platform.",
  category: "E-Commerce"
 }
];

export default function BlogIndex() {
 return (
  <article className="py-20 container-px mx-auto max-w-6xl">
   <Reveal direction="down">
    <div className="text-center mb-20">
     <span className="text-primary font-bold uppercase tracking-widest text-xs">Knowledge Base</span>
     <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-6xl">
      Resources & Insights
     </h1>
     <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
      Deep dives into technology, SEO, and business growth tailored for the Mumbai Metropolitan Region.
     </p>
    </div>
   </Reveal>

   <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {POSTS.map((post, i) => (
     <Reveal key={post.slug} delay={i * 0.05} direction="up">
      <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary transition-colors">
       <div className="relative aspect-video bg-muted overflow-hidden">
        <Image 
         src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80&sig=${i}`}
         alt={post.title}
         fill
         className="object-cover transition group-hover:scale-105 duration-500"
        />
        <div className="absolute top-4 left-4">
         <span className="bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          {post.category}
         </span>
        </div>
       </div>
       <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
         {post.title}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-3 mb-6">
         {post.desc}
        </p>
        <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
         Read Article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
       </div>
      </Link>
     </Reveal>
    ))}
   </div>

   <section className="mt-32 p-12 rounded-3xl bg-[#0A0B0D] border border-white/5 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">Want more insights?</h2>
    <p className="text-white/60 mb-8 max-w-xl mx-auto">Subscribe to our newsletter for local business tech tips delivered to your inbox.</p>
    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
     <input type="email" placeholder="Enter your email" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition" />
     <button className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition">Join</button>
    </div>
   </section>
  </article>
 );
}
