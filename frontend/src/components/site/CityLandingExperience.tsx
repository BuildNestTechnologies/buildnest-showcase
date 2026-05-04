import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { ParallaxLayer } from "./PremiumMotion";

type CityLandingExperienceProps = {
 city: string;
 headline: string;
 description: string;
 neighborhoods: string[];
 image: string;
 keyword: string;
 canonicalPath: string;
};

export default function CityLandingExperience({ city, headline, description, neighborhoods, image, keyword, canonicalPath }: CityLandingExperienceProps) {
 const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `https://buildnest.world${canonicalPath}/#localbusiness`,
  name: `BuildNest Technologies ${city}`,
  image: "https://buildnest.world/buildnest-logo.png",
  url: `https://buildnest.world${canonicalPath}`,
  telephone: "+919284470352",
  priceRange: "Rs. 7,999+",
  areaServed: [city, "Bhiwandi", "Mumbai", "Thane", "Kalyan", "Navi Mumbai"],
  description,
 };

 return (
  <main className="crafted-page">
   <script id={`${city.toLowerCase().replaceAll(" ", "-")}-schema`} type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
   <section className="container-px mx-auto max-w-7xl py-10 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
     <div>
      <p className="section-label">{keyword}</p>
      <h1 className="section-title mt-4 max-w-2xl">Premium digital work for {city}, structured with local intent and clean trust signals.</h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
       <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background dark:bg-primary dark:text-white">
        Free consultation <ArrowRight className="h-4 w-4" />
       </Link>
       <a href="tel:+919284470352" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold">
        <Phone className="h-4 w-4" /> Call BuildNest
       </a>
      </div>
     </div>

     <ParallaxLayer speed={0.08} className="relative min-h-[26rem] overflow-hidden rounded-[2.4rem]">
      <Image src={image} alt={`${city} digital growth`} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-black/12 to-transparent" />
      <div className="absolute bottom-0 p-6 text-white">
       <p className="eyebrow-metric text-white/60">Local presence, elevated experience</p>
      </div>
     </ParallaxLayer>
    </div>
   </section>

   <section className="container-px mx-auto max-w-7xl py-10 md:py-16">
    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
     <div className="editorial-panel rounded-[2.2rem] p-6 md:p-7">
      <p className="section-label">Why this page feels different</p>
      <h2 className="mt-4 text-2xl font-semibold leading-tight">{headline}</h2>
     </div>

     <div className="grid gap-4 md:grid-cols-3">
      {[
       ["Readable strategy", "Keywords are placed where they support understanding, not where they interrupt reading."],
       ["Mobile-first trust", "Every section is composed to scan well on phone screens before it ever reaches desktop."],
       ["Subtle motion", "Animation is used to guide attention and create depth, not to perform for its own sake."],
      ].map(([title, copy], index) => (
       <article key={title} className={`rounded-[2rem] border border-border bg-background/72 p-5 ${index === 1 ? "md:translate-y-8" : ""}`}>
        <CheckCircle2 className="h-5 w-5 text-[color:var(--tone-teal)]" />
        <h3 className="mt-10 text-xl font-semibold">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
       </article>
      ))}
     </div>
    </div>
   </section>

   <section className="container-px mx-auto max-w-6xl pb-16 pt-8 md:pb-24">
    <div className="overflow-hidden rounded-[2.5rem] bg-[#111111] text-[#f6f1ea]">
     <div className="grid gap-8 p-7 md:grid-cols-[0.78fr_1.22fr] md:p-10">
      <div>
       <MapPin className="h-6 w-6 text-[#f5383d]" />
       <h2 className="mt-8 text-2xl font-semibold leading-tight">Serving the business neighborhoods that actually drive {city}.</h2>
      </div>
      <div className="flex flex-wrap gap-3">
       {neighborhoods.map((place) => (
        <span key={place} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/70">
         {place}
        </span>
       ))}
      </div>
     </div>
    </div>
   </section>
  </main>
 );
}
