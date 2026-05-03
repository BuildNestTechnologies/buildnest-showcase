import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { CheckCircle2, MessageSquare, Package, Users, Receipt, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Custom Software Development for Indian Businesses | BuildNest Technologies",
 description: "We build custom ERPs, CRMs, and internal tools. Best software agency in Mumbai & Bhiwandi.",
};

const SOFTWARE_FEATURES = [
 {
  icon: Users,
  title: "Manage your customers (CRM)",
  desc: "Keep track of every conversation, lead, and sale in one simple dashboard. Never lose a customer's phone number again."
 },
 {
  icon: Package,
  title: "Track stock automatically (Inventory)",
  desc: "Know exactly what's on your shelves without counting. Get alerts when you are running low on popular items."
 },
 {
  icon: Receipt,
  title: "Handle bills, GST, accounts (ERP)",
  desc: "Generate professional invoices in seconds, track expenses, and have your tax reports ready with a single click."
 },
 {
  icon: MessageSquare,
  title: "Chatbot that answers questions (AI)",
  desc: "An intelligent assistant on your website or WhatsApp that answers customer queries 24/7, even while you sleep."
 }
];

export default function Software() {
 const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Custom Business Software",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All"
 };

 return (
  <>
   <script id="software-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
   
   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border">
    <div className="container-px mx-auto max-w-4xl text-center">
     <Reveal>
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
       Custom Software
      </span>
     </Reveal>
     <Reveal delay={0.1}>
      <h1 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-5xl md:text-[56px]">
       Software that solves your daily problems – <span className="text-primary">no tech degree required.</span>
      </h1>
     </Reveal>
     <Reveal delay={0.2}>
      <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
       We build custom internal tools designed specifically for how your team works. Say goodbye to messy spreadsheets and expensive subscriptions that don't quite fit your needs.
      </p>
     </Reveal>
    </div>
   </section>

   {/* The "How it connects" Diagram */}
   <section className="container-px mx-auto max-w-7xl py-20">
    <Reveal>
     <div className="rounded-2xl border border-border bg-card p-8 shadow-card-soft md:p-12">
      <div className="text-center">
       <h2 className="font-display text-2xl font-bold text-foreground">Everything connected in one place</h2>
       <p className="mt-2 text-muted-foreground">Your entire business operations, streamlined.</p>
      </div>
      <div className="mt-10 overflow-hidden rounded-xl border border-border">
       <Image 
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
        alt="Dashboard showing connected business tools" 
        width={1200}
        height={600}
        className="w-full object-cover"
        style={{ height: 'auto' }}
       />
      </div>
     </div>
    </Reveal>
   </section>

   {/* Features List */}
   <section className="bg-hero py-20 border-y border-border">
    <div className="container-px mx-auto max-w-7xl">
     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {SOFTWARE_FEATURES.map((feature, index) => (
       <Reveal key={index} delay={index * 0.1}>
        <div className="rounded-xl bg-card p-6 shadow-sm border border-border">
         <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <feature.icon className="h-6 w-6" />
         </div>
         <h3 className="mt-4 font-display text-lg font-bold text-foreground">{feature.title}</h3>
         <p className="mt-2 text-muted-foreground">{feature.desc}</p>
        </div>
       </Reveal>
      ))}
     </div>
    </div>
   </section>

   {/* Case Study Highlight */}
   <section className="container-px mx-auto max-w-5xl py-20 md:py-28">
    <Reveal>
     <div className="overflow-hidden rounded-2xl bg-[#111214] text-white shadow-2xl">
      <div className="grid md:grid-cols-2">
       <div className="p-10 md:p-16 flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">Client Success Story</span>
        <h2 className="mt-4 font-display text-3xl font-bold">Local Grocery Store Automation</h2>
        <p className="mt-6 text-gray-400 leading-relaxed">
         "We built a stock management app for a local grocery store. Before us, they used pen and paper, losing thousands of rupees to expired goods."
        </p>
        <div className="mt-8 flex items-center gap-4 border-l-4 border-primary pl-4">
         <div className="font-display text-4xl font-bold text-white">40%</div>
         <div className="text-sm font-medium text-gray-400">Reduction in<br/>food waste</div>
        </div>
       </div>
       <div className="relative min-h-[300px]">
        <Image 
         src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
         alt="Grocery store owner using an iPad" 
         width={800}
         height={600}
         className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111214] to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111214] to-transparent md:hidden block" />
       </div>
      </div>
     </div>
    </Reveal>

    <div className="mt-16 text-center">
     <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-soft transition hover:scale-105">
      Let's build your software <ArrowRight className="h-4 w-4" />
     </Link>
    </div>
   </section>
  </>
 );
}
