import type { Metadata } from "next";
import HomeExperience from "@/components/site/HomeExperience";

export const metadata: Metadata = {
 title: "BuildNest Technologies | #1 Website Development Company in Bhiwandi & Mumbai",
 description: "Bhiwandi's #1 website development company. Custom software, mobile apps, e-commerce, and SEO for businesses in Mumbai, Thane and Navi Mumbai. Plans from Rs. 7,999.",
};

export default function Home() {
 const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://buildnest.world/#localbusiness",
  name: "BuildNest Technologies",
  image: "https://buildnest.world/buildnest-logo.png",
  url: "https://buildnest.world",
  telephone: "+919284470352",
  priceRange: "Rs. 7,999+",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer, EMI",
  address: {
   "@type": "PostalAddress",
   streetAddress: "Near Shagun Chowk",
   addressLocality: "Bhiwandi",
   addressRegion: "Maharashtra",
   postalCode: "421302",
   addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "19.3002", longitude: "73.0580" },
  openingHoursSpecification: [
   { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
   { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "17:00" },
  ],
  areaServed: [
   { "@type": "City", name: "Bhiwandi" },
   { "@type": "City", name: "Mumbai" },
   { "@type": "City", name: "Thane" },
   { "@type": "City", name: "Navi Mumbai" },
   { "@type": "State", name: "Maharashtra" },
   { "@type": "Country", name: "India" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "87", bestRating: "5" },
 };

 return (
  <>
   <script
    id="local-business-schema"
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
   />
   <HomeExperience />
  </>
 );
}
