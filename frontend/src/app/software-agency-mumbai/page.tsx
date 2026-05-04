import type { Metadata } from "next";
import CityLandingExperience from "@/components/site/CityLandingExperience";

export const metadata: Metadata = {
 title: "Best Software Company in Mumbai | Web Development Agency Mumbai",
 description: "Custom software, dashboards, ERP, CRM, websites, and app development for Mumbai businesses by BuildNest Technologies.",
 alternates: { canonical: "https://buildnest.world/software-agency-mumbai" },
};

export default function SoftwareAgencyMumbai() {
 return (
  <CityLandingExperience
   city="Mumbai"
   headline="Custom software for Mumbai businesses that have outgrown spreadsheets."
   description="BuildNest Technologies builds custom dashboards, CRMs, ERPs, websites, and apps for Mumbai businesses that need quiet, dependable systems."
   neighborhoods={["BKC", "Andheri", "Powai", "Lower Parel", "Vikhroli", "Navi Mumbai", "Thane", "South Mumbai"]}
   image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=85"
   keyword="Software agency in Mumbai"
   canonicalPath="/software-agency-mumbai"
  />
 );
}
