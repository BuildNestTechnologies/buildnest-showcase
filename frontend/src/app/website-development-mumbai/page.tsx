import type { Metadata } from "next";
import CityLandingExperience from "@/components/site/CityLandingExperience";

export const metadata: Metadata = {
 title: "Best Website Development Company in Mumbai | Web Design Agency Mumbai",
 description: "Mumbai's premium website development company for Next.js websites, SEO services, app development, and custom software across Bandra, Andheri, Powai, South Mumbai, and Navi Mumbai.",
 keywords: ["website development company Mumbai", "web design agency Mumbai", "best web developers Mumbai", "website making company Mumbai", "website development Mumbai"],
 alternates: { canonical: "https://buildnest.world/website-development-mumbai" },
};

export default function MumbaiWebsitePage() {
 return (
  <CityLandingExperience
   city="Mumbai"
   headline="Award-level web design and software engineering for Mumbai startups, agencies, retailers, clinics, and enterprises."
   description="BuildNest Technologies delivers high-performance websites, technical SEO, e-commerce, mobile apps, and custom software for Mumbai businesses that want premium design without losing clarity."
   neighborhoods={["Bandra", "Andheri", "Powai", "Lower Parel", "South Mumbai", "Dadar", "Ghatkopar", "Borivali"]}
   image="https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1800&q=85"
   keyword="Website development company in Mumbai"
   canonicalPath="/website-development-mumbai"
  />
 );
}
