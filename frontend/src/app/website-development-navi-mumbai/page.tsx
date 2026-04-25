import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { MapPin, CheckCircle2, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
 title: "Website Development Navi Mumbai | SEO Agency | BuildNest Technologies",
 description: "Bespoke website development and SEO services in Navi Mumbai. BuildNest Technologies serves businesses in Vashi, Belapur, Mahape (IT Park), and Kharghar.",
};

export default function NaviMumbaiCityPage() {
 return (
  <>
   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
    <div className="container-px mx-auto max-w-5xl text-center">
     <Reveal>
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
       Professional Website Development in Navi Mumbai
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
       Empowering the smart city of Navi Mumbai with high-performance digital solutions and advanced SEO engineering.
      </p>
     </Reveal>
    </div>
   </section>

   <section className="py-20 border-t border-border">
    <div className="container-px mx-auto max-w-4xl">
     <Reveal direction="up">
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
       <h2 className="text-2xl font-bold text-foreground mb-6">Navi Mumbai's Modern Web Agency</h2>
       <p>
        From the IT hubs of <strong>Mahape</strong> and <strong>Airoli</strong> to the commercial centers of <strong>Vashi</strong> and <strong>Belapur</strong>, BuildNest Technologies provides the technical edge Navi Mumbai businesses need.
       </p>
       <p className="mt-4">
        We specialize in SEO-optimized websites that don't just look good but rank on the first page of Google. Our zero upfront model ensures that every business in Kharghar and Nerul can afford a world-class digital presence.
       </p>
      </div>
     </Reveal>
    </div>
   </section>

   <section className="container-px mx-auto max-w-4xl py-20">
    <Reveal direction="down">
     <div className="rounded-3xl bg-secondary p-10 text-center border border-border">
      <h2 className="text-2xl font-bold">Scaling in Navi Mumbai?</h2>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
       <a href="tel:+919876543210" className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold">
        <Phone className="h-4 w-4" /> Call Navi Mumbai Team
       </a>
       <Link href="/contact" className="flex items-center gap-2 px-8 py-3 bg-card border border-border rounded-full font-bold">
        Free SEO Audit <ArrowRight className="h-4 w-4" />
       </Link>
      </div>
     </div>
    </Reveal>
   </section>
  </>
 );
}
