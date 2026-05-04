import type { Metadata } from "next";
import CityLandingExperience from "@/components/site/CityLandingExperience";

export const metadata: Metadata = {
 title: "App Development Thane | Mobile App Agency | BuildNest Technologies",
 description: "Premium mobile app development for Thane businesses. Android, iOS, Flutter, React Native, and app-backed business workflows by BuildNest Technologies.",
 alternates: { canonical: "https://buildnest.world/app-development-thane" },
};

export default function AppDevelopmentThane() {
 return (
  <CityLandingExperience
   city="Thane"
   headline="Mobile app development for Thane businesses that need practical, clear, and well-supported products."
   description="BuildNest Technologies builds Android, iOS, Flutter, and React Native apps for Thane businesses, with calm UX, reliable architecture, and launch support."
   neighborhoods={["Thane West", "Ghodbunder Road", "Wagle Estate", "Majiwada", "Hiranandani Estate", "Kasarvadavali", "Kalwa", "Mumbra"]}
   image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85"
   keyword="App development company in Thane"
   canonicalPath="/app-development-thane"
  />
 );
}
