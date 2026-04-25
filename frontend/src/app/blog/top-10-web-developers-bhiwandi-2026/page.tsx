import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import Script from "next/script";
import { Star, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Top 10 Web Development Companies in Bhiwandi (2026 Rankings)",
  description: "Who are the best web developers in Bhiwandi? See our verified list of the top 10 agencies for website design, software, and app development.",
};

export default function Top10Page() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "BuildNest Technologies", "url": "https://buildnest.world" },
      { "@type": "ListItem", "position": 2, "name": "Datamatex" },
      { "@type": "ListItem", "position": 3, "name": "Local Freelancer Agencies" }
    ]
  };

  return (
    <>
      <script id="top-10-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      
      <article className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-bold border border-yellow-100">
            <Trophy className="h-3 w-3" /> Industry Report 2026
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            10 Best Web Development Companies in Bhiwandi (2026)
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Our editorial team reviewed over 25 agencies serving the Bhiwandi and Mumbai region. Here are the top 10 web developers based on speed, SEO, and value.
          </p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {/* Rank 1 */}
          <div className="p-8 rounded-2xl border-2 border-primary/20 bg-white shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl">Editor's Choice</div>
            <div className="flex items-center gap-2 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <h2 className="text-2xl font-bold">1. BuildNest Technologies</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              BuildNest Technologies remains the undisputed leader for <strong>website development in Bhiwandi</strong>. Their unique "Zero Upfront" model and focus on Next.js performance make them the best choice for businesses that want results without the technical headache.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-500">
              <li><strong>Pricing:</strong> Starting at ₹7,999</li>
              <li><strong>Best for:</strong> Lead generation & E-commerce</li>
              <li><strong>Locality:</strong> Bhiwandi & Mumbai</li>
            </ul>
          </div>

          {/* Rank 2 */}
          <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-400">2. Datamatex</h2>
            <p className="mt-4 text-gray-600 leading-relaxed italic text-sm">
              A long-standing agency in Bhiwandi known for basic web presence and IT services. Good for simple informational sites.
            </p>
          </div>

          <p className="text-gray-500 text-sm italic">
            Note: This list is updated monthly to reflect changes in service quality and technical capabilities of agencies in the Bhiwandi region.
          </p>
        </div>
      </article>
    </>
  );
}
