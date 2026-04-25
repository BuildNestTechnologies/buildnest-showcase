import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { MapPin, CheckCircle2, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Software Agency in Mumbai | Custom Development | BuildNest Technologies",
  description: "Leading software agency in Mumbai. BuildNest Technologies builds custom ERPs, mobile apps, and enterprise websites for businesses in BKC, Lower Parel, Andheri, and Powai.",
};

export default function MumbaiCityPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BuildNest Mumbai Software Agency",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web/Mobile",
    "url": "https://buildnest.world/software-agency-mumbai"
  };

  return (
    <>
      <script id="mumbai-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      
      <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-px mx-auto max-w-5xl text-center">
          <Reveal>
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Leading Software Agency in MumbaiBuildNest Technologies
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Providing enterprise-grade software development and high-end web solutions to Mumbai's fastest-growing companies and startups.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-px mx-auto max-w-4xl">
          <Reveal direction="up">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-bold text-foreground mb-6">Serving the Business Hubs of Mumbai</h2>
              <p>
                Mumbai is the financial capital of India, and BuildNest Technologies is here to power its digital future. Whether you are a startup in <strong>Powai</strong>, a law firm in <strong>BKC (Bandra Kurla Complex)</strong>, or a creative agency in <strong>Lower Parel</strong>, our modern tech stack delivers the performance you demand.
              </p>
              <p className="mt-4">
                From <strong>Andheri</strong> to <strong>Goregaon</strong>, we provide end-to-end software consulting, mobile app development (Flutter/React Native), and lightning-fast Next.js websites that outperform the competition.
              </p>
              
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {[
                  "Enterprise-Grade Security",
                  "Scalable Cloud Architecture (AWS/Vercel)",
                  "Custom CRM & ERP Solutions",
                  "High-Performance API Development",
                  "Dedicated Project Management",
                  "24/7 Technical Support"
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

      {/* MUMBAI CTA */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <Reveal direction="down">
          <div className="rounded-3xl bg-[#111214] p-10 text-center text-white shadow-2xl">
            <h2 className="text-2xl font-bold">Building for Mumbai's Best.</h2>
            <p className="mt-4 text-gray-400">
              Schedule a virtual meeting or a visit to your Mumbai office to discuss your custom software requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:+919876543210" className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold transition hover:scale-105">
                <Phone className="h-4 w-4" /> Call Our Team
              </a>
              <Link href="/contact" className="flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-full font-bold transition hover:scale-105">
                Request a Proposal <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
