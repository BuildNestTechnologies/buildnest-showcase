import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
 title: "Website Development Prices in Bhiwandi & Mumbai | BuildNest Technologies",
 description: "Transparent website, e-commerce, app, and software pricing for Bhiwandi and Mumbai businesses. Starter websites from Rs. 7,999.",
};

const plans = [
 ["Starter", "Rs. 7,999", "A clear five-page presence for shops, clinics, schools, and service businesses.", ["Mobile responsive", "Contact form", "Basic SEO", "Support included"], "var(--tone-blue)"],
 ["Business", "Rs. 15,999", "A stronger lead-generation site with editable content and better operational flexibility.", ["Editable content", "Maps and forms", "SEO structure", "Analytics setup"], "var(--tone-purple)"],
 ["E-commerce", "Rs. 23,999", "A practical online store with payments, products, and order movement handled cleanly.", ["Product setup", "Razorpay or PhonePe", "Order flow", "Inventory basics"], "var(--tone-orange)"],
 ["Custom", "Scoped", "Software, dashboards, mobile apps, and unusual requirements priced after discovery.", ["Workflow mapping", "UX direction", "Cloud setup", "Launch support"], "var(--tone-teal)"],
];

export default function Pricing() {
 return (
  <main className="crafted-page">
   <script id="faq-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "How much does a website cost in Bhiwandi?", acceptedAnswer: { "@type": "Answer", text: "A professional business website starts at Rs. 7,999 with BuildNest Technologies." } }] }) }} />
   <section className="container-px mx-auto max-w-7xl py-10 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
     <div>
      <p className="section-label">Pricing</p>
      <h1 className="section-title mt-4 max-w-2xl">Transparent numbers arranged with the same care as the rest of the experience.</h1>
     </div>
     <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
      The page is calm by design. Price should clarify the decision, not create a second layer of confusion.
     </p>
    </div>
   </section>

   <section className="container-px mx-auto max-w-6xl pb-16">
    <div className="space-y-4">
     {plans.map(([name, price, copy, features, tone], index) => (
      <article
       key={name as string}
       className={`rounded-[2.2rem] border border-border p-6 md:grid md:grid-cols-[180px_1fr_220px] md:gap-8 md:p-7 ${index % 2 ? "md:ml-10" : "md:mr-10"}`}
       style={{
        backgroundImage: `linear-gradient(180deg, color-mix(in srgb, ${tone as string} 14%, transparent), transparent 70%), linear-gradient(180deg, var(--surface-elevated), rgba(255,255,255,0.4))`,
       }}
      >
       <div>
        <h2 className="text-2xl font-semibold">{name as string}</h2>
        <p className="mt-2 text-xl font-semibold" style={{ color: tone as string }}>{price as string}</p>
       </div>
       <p className="mt-5 text-sm leading-7 text-muted-foreground md:mt-0">{copy as string}</p>
       <ul className="mt-6 space-y-2 md:mt-0">
        {(features as string[]).map((feature) => (
         <li key={feature} className="flex items-center gap-2 text-sm font-medium">
          <Check className="h-4 w-4" style={{ color: tone as string }} /> {feature}
         </li>
        ))}
       </ul>
      </article>
     ))}
    </div>

    <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background dark:bg-primary dark:text-white">
     Ask for a scope note <ArrowRight className="h-4 w-4" />
    </Link>
   </section>
  </main>
 );
}
