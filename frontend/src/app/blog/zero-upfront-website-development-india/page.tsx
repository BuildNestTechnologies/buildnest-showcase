import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = {
 title: "Zero Upfront Website Development in India | BuildNest Trust Model",
 description: "Learn how BuildNest Technologies offers zero upfront website development in Bhiwandi and Mumbai. Risk-free digital transformation for small businesses.",
};

export default function ZeroUpfrontPage() {
 return (
  <article className="mx-auto max-w-3xl px-6 py-20">
   <Reveal>
    <h1 className="font-display text-4xl font-bold">Why Zero Upfront is the Future of Web Development in India</h1>
    <p className="mt-6 text-gray-600">Traditional agencies demand 50% advance before they even start. We don't. Here is why we changed the model for our Bhiwandi clients.</p>
    <div className="mt-12 prose prose-gray max-w-none">
     <p>We believe in our work. That is why we build your first draft completely free of charge. You only pay when you are satisfied with the result. This model has made us the <strong>#1 website development company in Bhiwandi</strong> because it builds instant trust with local business owners.</p>
    </div>
   </Reveal>
  </article>
 );
}
