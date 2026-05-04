import type { Metadata } from "next";
import CityLandingExperience from "@/components/site/CityLandingExperience";

export const metadata: Metadata = {
 title: "Best Mobile App Development Company in Mumbai | iOS & Android Apps",
 description: "Premium mobile app development in Mumbai for Android, iOS, Flutter, React Native, and business apps by BuildNest Technologies.",
 alternates: { canonical: "https://buildnest.world/mobile-app-development-mumbai" },
};

export default function MobileAppMumbai() {
 return (
  <CityLandingExperience
   city="Mumbai"
   headline="Mobile products for Mumbai teams that need clarity before scale."
   description="BuildNest Technologies designs and builds mobile apps for Mumbai startups, service businesses, schools, clinics, and operational teams using Flutter, React Native, and modern backend systems."
   neighborhoods={["Bandra", "Andheri", "Powai", "Lower Parel", "Dadar", "Ghatkopar", "Borivali", "South Mumbai"]}
   image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1800&q=85"
   keyword="Mobile app development company in Mumbai"
   canonicalPath="/mobile-app-development-mumbai"
  />
 );
}
