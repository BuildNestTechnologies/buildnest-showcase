import HeroSection from "@/components/site/HeroSection";
import TechnicalCoreSection from "@/components/site/TechnicalCoreSection";
import ShowcaseSection from "@/components/site/ShowcaseSection";
import TestimonialSection from "@/components/site/TestimonialSection";
import MetricsSection from "@/components/site/MetricsSection";
import TeamSection from "@/components/site/TeamSection";
import FAQSection from "@/components/site/FAQSection";
import ContactSection from "@/components/site/ContactSection";
import CursorDot from "@/components/site/CursorDot";
import Script from "next/script";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BuildNest Technologies",
    "image": "https://buildnest.world/buildnest-logo.png",
    "@id": "https://buildnest.world/#localbusiness",
    "url": "https://buildnest.world",
    "telephone": "+91-9284470352",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Shagun Chowk",
      "addressLocality": "Bhiwandi",
      "addressRegion": "Maharashtra",
      "postalCode": "421302",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.3002,
      "longitude": 73.0580
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/buildnest_technologies/",
      "https://facebook.com/buildnestworld"
    ]
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <CursorDot />
      
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <TechnicalCoreSection />
        <ShowcaseSection />
        <TestimonialSection />
        <MetricsSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
}
