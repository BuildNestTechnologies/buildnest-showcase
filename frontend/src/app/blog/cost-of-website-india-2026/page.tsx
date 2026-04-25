import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Cost of Website Development in India (2026 Price Guide)",
  description: "How much does a website cost in India? We breakdown prices for static, dynamic, and e-commerce websites in Mumbai & Bhiwandi. Plans from ₹7,999.",
};

export default function CostGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <h1 className="font-display text-4xl font-bold leading-tight">Cost of Website Development in India (2026 Pricing)</h1>
        <p className="mt-6 text-gray-600">The most common question we get in Bhiwandi is: "What is the actual cost of a website?" In this guide, we break down every rupee.</p>
      </Reveal>

      <div className="mt-12 prose prose-lg prose-gray max-w-none">
        <h2 className="text-2xl font-bold mt-12 mb-6">Average Pricing Breakdown</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-4 font-bold">Type of Website</th>
                <th className="p-4 font-bold">Price Range (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="p-4">Single Page Landing Page</td><td className="p-4">₹4,999 - ₹9,999</td></tr>
              <tr><td className="p-4">Business Website (5-10 Pages)</td><td className="p-4">₹9,999 - ₹24,999</td></tr>
              <tr><td className="p-4">E-Commerce Store (Shopify/Woo)</td><td className="p-4">₹18,999 - ₹49,999</td></tr>
              <tr><td className="p-4">Custom SaaS / Portal</td><td className="p-4">₹74,999+</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6">At <strong>BuildNest Technologies</strong>, our starter package begins at just <strong>₹7,999</strong> for a professional, SEO-optimized business website serving the Mumbai region.</p>
      </div>
    </article>
  );
}
