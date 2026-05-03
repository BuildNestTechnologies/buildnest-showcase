import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { MapPin, CheckCircle2, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
 title: "App Development Thane | Mobile App Agency | BuildNest Technologies",
 description: "Top mobile app development agency in Thane. We build Android and iOS apps for businesses in Thane West, Majiwada, Ghodbunder Road, and Wagle Estate.",
};

export default function ThaneCityPage() {
 return (
  <>
   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
    <div className="container-px mx-auto max-w-5xl text-center">
     <Reveal>
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
       Expert Mobile App Development Agency in Thane
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
       Turn your business idea into a powerful mobile app. BuildNest Technologies serves Thane's thriving business ecosystem with Flutter and React Native solutions.
      </p>
     </Reveal>
    </div>
   </section>

   <section className="py-20 border-t border-border">
    <div className="container-px mx-auto max-w-4xl">
     <Reveal direction="up">
      <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
       <h2 className="text-2xl font-bold text-foreground mb-6">Thane's Most Reliable Tech Partner</h2>
       <p>
        From the corporate hubs of <strong>Wagle Estate</strong> and <strong>Hiranandani Estate</strong> to the retail centers on <strong>Ghodbunder Road</strong>, BuildNest Technologies provides top-tier app development services.
       </p>
       <p className="mt-4">
        We specialize in building apps that are not just beautiful, but fast and secure. Whether you need a customer-facing app or an internal tool for your Thane-based workforce, we deliver on time and within budget.
       </p>
      </div>
     </Reveal>
    </div>
   </section>

   <section className="container-px mx-auto max-w-4xl py-20">
    <Reveal direction="down">
     <div className="rounded-3xl bg-secondary p-10 text-center border border-border">
      <h2 className="text-2xl font-bold">Ready to build your app in Thane?</h2>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
       <a href="tel:+919284470352" className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold">
        <Phone className="h-4 w-4" /> Call Thane Office
       </a>
       <Link href="/contact" className="flex items-center gap-2 px-8 py-3 bg-card border border-border rounded-full font-bold">
        Get App Quote <ArrowRight className="h-4 w-4" />
       </Link>
      </div>
     </div>
    </Reveal>
   </section>
  </>
 );
}
