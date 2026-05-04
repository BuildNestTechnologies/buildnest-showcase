import type { Metadata } from "next";
import CityLandingExperience from "@/components/site/CityLandingExperience";

export const metadata: Metadata = {
 title: "Best Software Company in Bhiwandi | Software Development Bhiwandi",
 description: "Custom software, ERP, CRM, inventory systems, websites, and dashboards for Bhiwandi businesses by BuildNest Technologies.",
 alternates: { canonical: "https://buildnest.world/software-company-bhiwandi" },
};

export default function SoftwareCompanyBhiwandi() {
 return (
  <CityLandingExperience
   city="Bhiwandi"
   headline="Software for Bhiwandi textile, logistics, school, and retail teams."
   description="BuildNest Technologies builds custom software for Bhiwandi businesses, including ERP, CRM, stock management, dashboards, and operational tools."
   neighborhoods={["Shagun Chowk", "Narpoli", "Kamatghar", "Anjurphata", "Mankoli", "MIDC Bhiwandi", "Padma Nagar", "Dhamankar Naka"]}
   image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85"
   keyword="Software company in Bhiwandi"
   canonicalPath="/software-company-bhiwandi"
  />
 );
}
