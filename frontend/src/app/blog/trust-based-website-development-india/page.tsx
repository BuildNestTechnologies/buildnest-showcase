import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = {
 title: "Trust-Based Website Development in India | BuildNest Model",
 description: "Learn how BuildNest Technologies offers trust-based website development in Bhiwandi and Mumbai. Risk-free digital transformation for small businesses.",
};

export default function TrustBasedPage() {
 return (
  <article className="mx-auto max-w-3xl px-6 py-20">
   <Reveal>
    <h1 className="font-display text-4xl font-bold">Why Trust-Based Development is the Future of Web Development in India</h1>
    <p className="mt-6 text-gray-600">Traditional agencies demand 50% advance before they even start. We prioritize building a relationship first. Here is why we changed the model for our Bhiwandi clients.</p>
    <div className="mt-12 prose prose-gray max-w-none">
     <p>We believe in our work. That is why we focus on delivering value before demanding high upfront costs. You only pay when you see the roadmap and initial progress that satisfies your business needs. This model has made us the <strong>#1 website development company in Bhiwandi</strong> because it builds instant trust with local business owners.</p>
    </div>
   </Reveal>
  </article>
 );
}
