import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Reveal from "@/components/site/Reveal";
import { MapPin, CheckCircle2, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Company in Bhiwandi | BuildNest Technologies",
  description: "Bhiwandi's #1 website development company. Custom software & web design for businesses in Shagun Chowk, Narpoli, and MIDC Bhiwandi. Plans from ₹7,999.",
};

export default function BhiwandiCityPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BuildNest Technologies Bhiwandi",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhiwandi",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "url": "https://buildnest.world/website-development-bhiwandi"
  };

  return (
    <>
      <script id="local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      
      <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-px mx-auto max-w-5xl text-center">
          <Reveal>
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              #1 Website Development Company in Bhiwandi, Maharashtra
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Empowering local businesses in Bhiwandi with high-speed websites, custom software, and professional SEO. Zero upfront payment required.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-px mx-auto max-w-4xl">
          <Reveal direction="up">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground mb-6">Serving All Localities in Bhiwandi</h2>
              <p>
                BuildNest Technologies is proud to be the trusted tech partner for businesses across Bhiwandi. From the bustling textile hubs of <strong>Narpoli</strong> and <strong>Anjurphata</strong> to the commercial centers near <strong>Shagun Chowk</strong> and <strong>Kalyan Road</strong>, we help local shopkeepers and warehouse owners go digital.
              </p>
              <p className="mt-4">
                We understand the unique needs of <strong>MIDC Bhiwandi</strong> logistics and textile companies. Our custom ERP solutions and warehouse management software are designed to streamline your operations and reduce manual errors.
              </p>
              
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {[
                  "Mobile Responsive Design",
                  "Local SEO for Bhiwandi Keywords",
                  "Zero Upfront Payment Model",
                  "Google Business Optimization",
                  "WhatsApp Integration Included",
                  "High-Speed Next.js Technology"
                ].map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCAL CTA */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <Reveal direction="down">
          <div className="rounded-3xl bg-secondary p-10 text-center border border-border">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold">Local Bhiwandi Business? Let's Meet.</h2>
            <p className="mt-4 text-muted-foreground">
              We are located in Bhiwandi. Invite us for a coffee at Shagun Chowk to discuss your project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:+919876543210" className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link href="/contact" className="flex items-center gap-2 px-8 py-3 bg-card border border-border rounded-full font-bold">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
