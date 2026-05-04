import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Package, Receipt, Users } from "lucide-react";

export const metadata: Metadata = {
 title: "Custom Software Development for Indian Businesses | BuildNest Technologies",
 description: "Custom ERPs, CRMs, dashboards, inventory systems, and workflow software for businesses in Bhiwandi, Mumbai, and across India.",
};

const systems = [
 [Users, "CRM", "Every lead, follow-up, and customer note in one dependable system.", "var(--tone-blue)"],
 [Package, "Inventory", "Stock movement, alerts, and reporting without spreadsheet drift.", "var(--tone-teal)"],
 [Receipt, "ERP", "Invoices, GST, accounts, and internal workflows shaped around the real team.", "var(--tone-orange)"],
 [MessageSquare, "AI assistant", "Useful automation where it actually saves time, not where it simply sounds modern.", "var(--tone-purple)"],
];

export default function Software() {
 return (
  <main className="crafted-page">
   <script id="software-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Custom Business Software", applicationCategory: "BusinessApplication", operatingSystem: "All" }) }} />
   <section className="container-px mx-auto max-w-7xl py-10 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
     <div>
      <p className="section-label">Software systems</p>
      <h1 className="section-title mt-4 max-w-2xl">Internal tools that feel sharp, calm, and genuinely usable by the team that depends on them.</h1>
     </div>
     <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
      We replace paper, scattered spreadsheets, and improvised follow-ups with software that makes the workflow visibly lighter.
     </p>
    </div>
   </section>

   <section className="container-px mx-auto max-w-7xl py-8">
    <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
     <div className="relative min-h-[28rem] overflow-hidden rounded-[2.4rem]">
      <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Connected business dashboard" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-black/12 to-transparent" />
      <div className="absolute bottom-0 p-6 text-white">
       <p className="eyebrow-metric text-white/60">Software with operational intent</p>
      </div>
     </div>
     <div className="grid gap-4">
      {systems.map(([Icon, title, copy, tone], index) => {
       const SystemIcon = Icon as typeof Users;
       return (
        <article key={title as string} className={`rounded-[1.8rem] border border-border p-5 ${index % 2 ? "md:mr-8" : "md:ml-8"}`}>
         <SystemIcon className="h-5 w-5" style={{ color: tone as string }} />
         <h2 className="mt-8 text-xl font-semibold">{title as string}</h2>
         <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy as string}</p>
        </article>
       );
      })}
     </div>
    </div>
   </section>

   <section className="container-px mx-auto max-w-5xl py-16 md:py-24">
    <div className="rounded-[2.4rem] bg-[#111111] p-8 text-[#f6f1ea] md:p-10">
     <p className="section-label text-white/45">Example outcome</p>
     <h2 className="mt-4 text-3xl font-semibold leading-tight">A grocery workflow moved from manual logs to live stock visibility and clearer purchasing decisions.</h2>
     <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">
      The useful result was not just a dashboard. It was fewer missed items, better buying visibility, and calmer operations on ordinary days.
     </p>
     <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#111111]">
      Discuss your workflow <ArrowRight className="h-4 w-4" />
     </Link>
    </div>
   </section>
  </main>
 );
}
