import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import { Check, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Development in India 
 Complete Guide for 2026 (Pricing, Features, Alternatives)",
  description: "Want to start an online store in India? Learn why Shopify is the leading platform and how BuildNest Technologies can help you set up and scale your e-commerce business.",
};

export default function ShopifyGuidePage() {
  return (
    <article className="py-20 container-px mx-auto max-w-4xl">
      <Reveal direction="down">
        <div className="mb-4 inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
          <ShoppingCart className="h-4 w-4" /> E-Commerce Guide
        </div>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl leading-tight">
          Shopify Development in India 
 Complete Guide for 2026
        </h1>
        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
          The e-commerce boom in India is just beginning. For retailers in Bhiwandi and Mumbai, Shopify provides the most reliable way to sell online, manage inventory, and integrate with Indian payment gateways.
        </p>
      </Reveal>

      <section className="mt-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Shopify for Indian Retailers?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Shopify handles the hosting, security, and maintenance so you can focus on your business. With native support for **Razorpay, PayU, and Shiprocket**, it is the perfect ecosystem for the Indian market.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Mobile Ready", desc: "Every theme is responsive." },
            { title: "Secure Payments", desc: "Integrated UPI and COD." },
            { title: "Scale Fast", desc: "Handle 10 to 10,000 orders." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-border bg-card text-center">
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">BuildNest's Shopify Expertise</h2>
          <p className="text-muted-foreground leading-relaxed">
            While Shopify is easy to start, building a high-converting store requires expert design and SEO. BuildNest Technologies helps Mumbai-based brands with:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Custom theme development & branding",
              "Razorpay & PayU gateway integration",
              "Inventory & Logistics setup (Shiprocket)",
              "Conversion Rate Optimization (CRO)"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-foreground">Launch Your Store in 14 Days</h2>
        <p className="mt-4 text-muted-foreground">Our Shopify plans start from ₹18,999. No upfront fees.</p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-xl transition hover:scale-105">
          Talk to a Shopify Expert <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </article>
  );
}
