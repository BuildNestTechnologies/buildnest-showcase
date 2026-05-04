import type { Metadata } from "next";
import CityLandingExperience from "@/components/site/CityLandingExperience";

export const metadata: Metadata = {
 title: "Website Development Company in Bhiwandi | BuildNest Technologies",
 description: "Bhiwandi's #1 website development company. Custom software, e-commerce website design, mobile apps, and SEO for Shagun Chowk, Narpoli, MIDC Bhiwandi, Mumbai, Thane, and Kalyan.",
 keywords: ["website development company in Bhiwandi", "web developers in Bhiwandi", "software company Bhiwandi", "e-commerce website design Bhiwandi", "website making company Bhiwandi", "best web agency Bhiwandi"],
 alternates: { canonical: "https://buildnest.world/website-development-bhiwandi" },
};

export default function BhiwandiCityPage() {
 return (
  <CityLandingExperience
   city="Bhiwandi"
   headline="Premium website development for textile, logistics, school, retail, and manufacturing businesses in Bhiwandi."
   description="BuildNest Technologies creates fast Next.js websites, custom software, e-commerce systems, mobile apps, and technical SEO for Bhiwandi businesses that need trust, speed, and measurable digital growth."
   neighborhoods={["Shagun Chowk", "Narpoli", "Kamatghar", "Anjurphata", "Mankoli", "MIDC Bhiwandi", "Dhamankar Naka", "Padma Nagar"]}
   image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85"
   keyword="Website development company in Bhiwandi"
   canonicalPath="/website-development-bhiwandi"
  />
 );
}
