import type { Metadata } from "next";
import CityLandingExperience from "@/components/site/CityLandingExperience";

export const metadata: Metadata = {
 title: "Website Development Company in Navi Mumbai | BuildNest Technologies",
 description: "Premium website development, SEO, e-commerce, mobile apps, and custom software for Navi Mumbai businesses across Vashi, Nerul, Belapur, Airoli, and Panvel.",
 keywords: ["website development Navi Mumbai", "web design Navi Mumbai", "website development company Navi Mumbai", "SEO services Navi Mumbai"],
 alternates: { canonical: "https://buildnest.world/website-development-navi-mumbai" },
};

export default function NaviMumbaiWebsitePage() {
 return (
  <CityLandingExperience
   city="Navi Mumbai"
   headline="High-performance websites and software for Navi Mumbai's growing business districts."
   description="BuildNest Technologies builds polished Next.js websites, e-commerce systems, local SEO engines, apps, and internal software for Navi Mumbai businesses that need modern execution and clear trust."
   neighborhoods={["Vashi", "Nerul", "CBD Belapur", "Airoli", "Kharghar", "Panvel", "Seawoods", "Turbhe"]}
   image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=85"
   keyword="Website development company in Navi Mumbai"
   canonicalPath="/website-development-navi-mumbai"
  />
 );
}
