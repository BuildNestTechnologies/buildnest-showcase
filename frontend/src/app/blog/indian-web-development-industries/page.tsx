import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industry-Specific Web Development in India | Master Keyword Guide",
  description: "A comprehensive breakdown of web development and software solutions for every major industry in Mumbai, Bhiwandi, and across India.",
};

const INDUSTRIES = [
  "Logistics & Warehousing", "Textile & Garments", "Real Estate & Construction", 
  "Healthcare & Pharma", "Education & Coaching", "Retail & E-Commerce",
  "Professional Services (CA/Law)", "Manufacturing & Industrial", "Hospitality & Tourism",
  "Food & Restaurant", "Automotive & Hardware", "NGOs & Non-Profits"
];

const LOCATIONS = [
  "Bhiwandi", "Mumbai", "Kalyan", "Thane", "Navi Mumbai", "Dombivli", "Ulhasnagar",
  "Vashi", "Panvel", "Andheri", "Bandra", "Borivali", "Ghatkopar", "Mulund"
];

const SERVICES = [
  "Website Development", "Mobile App Development", "Custom Software", 
  "SEO Services", "Digital Marketing", "E-Commerce Solutions", "UI/UX Design",
  "Next.js Development", "Flutter App Design", "React JS Agency"
];

export default function IndustryMasterPage() {
  return (
    <article className="py-20 container-px mx-auto max-w-6xl">
      <Reveal direction="down">
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-6xl text-center">
          Comprehensive Guide to Web Development Industries in India
        </h1>
        <p className="mt-8 text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
          At BuildNest Technologies, we specialize in high-performance digital solutions tailored for every major sector in the <strong>Mumbai Metropolitan Region</strong>.
        </p>
      </Reveal>

      <section className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((industry, i) => (
          <Reveal key={i} delay={i * 0.05} direction="up">
            <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary transition-colors group">
              <h2 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{industry}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Custom {industry} solutions in {LOCATIONS[i % LOCATIONS.length]} designed for growth and operational efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICES.slice(0, 3).map(service => (
                  <span key={service} className="text-[10px] font-bold bg-secondary px-2 py-1 rounded text-muted-foreground uppercase tracking-wider">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mt-24 border-t border-border pt-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Target Locations & Service Hubs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {LOCATIONS.map(loc => (
            <div key={loc} className="p-4 rounded-xl border border-border bg-hero text-center group hover:bg-primary transition-all cursor-default">
              <p className="text-xs font-bold text-muted-foreground group-hover:text-white transition-colors">{loc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-[#0A0B0D] p-12 rounded-3xl text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Start Your Project Today</h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          From **Next.js e-commerce** for Bhiwandi textiles to **Flutter apps** for Mumbai startups, we are the #1 choice for digital engineering.
        </p>
        <Link href="/contact" className="inline-block rounded-full bg-primary px-12 py-5 font-bold text-white shadow-2xl transition hover:scale-105">
          Get a Free Quote <Link href="/contact"></Link>
        </Link>
      </section>

      {/* Programmatic Keyword Cloud (Hidden but Indexed) */}
      <div className="mt-20 opacity-0 pointer-events-none h-0 overflow-hidden">
        {LOCATIONS.map(loc => (
          INDUSTRIES.map(ind => (
             <p key={`${loc}-${ind}`}>{ind} {loc} website development agency {ind} software Mumbai {loc} web design company</p>
          ))
        ))}
      </div>
    </article>
  );
}
