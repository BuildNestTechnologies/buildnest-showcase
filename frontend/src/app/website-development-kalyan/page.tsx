import type { Metadata } from "next";
import CityLandingExperience from "@/components/site/CityLandingExperience";

export const metadata: Metadata = {
 title: "Website Development Company in Kalyan | BuildNest Technologies",
 description: "Premium website development, SEO, e-commerce, mobile apps, and custom software for Kalyan businesses. Serving Kalyan West, Kalyan East, Dombivli, and Thane.",
 keywords: ["website development Kalyan", "web design Kalyan", "website development company in Kalyan", "SEO services Kalyan"],
 alternates: { canonical: "https://buildnest.world/website-development-kalyan" },
};

export default function KalyanWebsitePage() {
 return (
  <CityLandingExperience
   city="Kalyan"
   headline="Premium web development and SEO for Kalyan businesses ready to look sharper and rank higher."
   description="BuildNest Technologies builds fast business websites, e-commerce stores, local SEO pages, mobile apps, and software systems for Kalyan teams that need a reliable digital partner."
   neighborhoods={["Kalyan West", "Kalyan East", "Dombivli", "Titwala", "Ulhasnagar", "Shahad", "Thane", "Bhiwandi Road"]}
   image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=85"
   keyword="Website development company in Kalyan"
   canonicalPath="/website-development-kalyan"
  />
 );
}
