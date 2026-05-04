import type { Metadata } from "next";
import CityLandingExperience from "@/components/site/CityLandingExperience";

export const metadata: Metadata = {
 title: "#1 Web Agency in Bhiwandi | BuildNest Technologies",
 description: "Premium web agency in Bhiwandi for websites, SEO, e-commerce, software, and mobile apps. BuildNest Technologies serves local businesses across Bhiwandi and Mumbai.",
 alternates: { canonical: "https://buildnest.world/web-agency-bhiwandi" },
};

export default function WebAgencyBhiwandi() {
 return (
  <CityLandingExperience
   city="Bhiwandi"
   headline="A web agency for Bhiwandi businesses that want trust, clarity, and tasteful digital presence."
   description="BuildNest Technologies is a Bhiwandi web agency creating refined websites, local SEO systems, e-commerce stores, software, and mobile apps."
   neighborhoods={["Shagun Chowk", "Narpoli", "Kamatghar", "Anjurphata", "Mankoli", "Kalyan Road", "MIDC Bhiwandi", "Dhamankar Naka"]}
   image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85"
   keyword="Web agency in Bhiwandi"
   canonicalPath="/web-agency-bhiwandi"
  />
 );
}
