import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Reveal from "@/components/site/Reveal";
import { MapPin, CheckCircle2, Phone, ArrowRight, Globe, Zap, Shield, Smartphone, Settings, BarChart3, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
 title: "Best Mobile App Development Company in Mumbai | iOS & Android Apps",
 description: "Mumbai's #1 mobile app development company. We build native-quality apps for Android and iOS using Flutter and React Native. Serving startups and enterprises across Mumbai.",
 keywords: ["mobile app development Mumbai", "app development company Mumbai", "best app developers Mumbai", "Android app development Mumbai", "iOS app development Mumbai"],
 alternates: {
  canonical: "https://buildnest.world/mobile-app-development-mumbai",
 },
};

export default function MumbaiAppPage() {
 const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://buildnest.world/mobile-app-development-mumbai/#localbusiness",
  "name": "BuildNest Technologies Mumbai",
  "image": "https://buildnest.world/buildnest-logo.png",
  "url": "https://buildnest.world/mobile-app-development-mumbai",
  "telephone": "+919284470352",
  "address": {
   "@type": "PostalAddress",
   "addressLocality": "Mumbai",
   "addressRegion": "Maharashtra",
   "postalCode": "400001",
   "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "19.0760", "longitude": "72.8777" },
  "areaServed": ["Mumbai", "Bandra", "Andheri", "Powai", "Navi Mumbai"],
  "description": "Premium mobile app development agency in Mumbai specializing in high-performance Flutter and React Native applications."
 };

 return (
  <>
   <script id="local-schema" type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
   
   <section className="bg-hero pt-32 pb-20 md:pt-40 md:pb-32">
    <div className="container-px mx-auto max-w-6xl">
     <Reveal>
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-7xl text-center leading-[1.1]">
       Premium Mobile App Development in Mumbai
      </h1>
      <p className="mx-auto mt-8 max-w-3xl text-xl text-muted-foreground text-center leading-relaxed">
       We build mobile experiences that users love. From <strong>Fintech apps in Powai</strong> to <strong>E-commerce apps in Bandra</strong>, we are Mumbai's app experts.
      </p>
     </Reveal>
    </div>
   </section>

   <section className="py-24 border-t border-border">
    <div className="container-px mx-auto max-w-4xl">
     <Reveal direction="up">
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
       <h2 className="text-3xl font-bold text-foreground mb-8">Transforming Your Idea into a High-Performance Mobile App</h2>
       <p>
        In a city that never stops, your app needs to be fast, reliable, and intuitive. As a leading <strong>mobile app development company in Mumbai</strong>, <strong>BuildNest Technologies</strong> specializes in creating cross-platform applications that deliver native-level performance.
       </p>
       
       <p className="mt-6">
        We use <strong>Flutter and React Native</strong> to build apps that work seamlessly on both Android and iOS from a single codebase. This saves you time and money while ensuring your Mumbai startup or enterprise can reach its entire audience instantly.
       </p>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Why Mumbai Startups Trust BuildNest for Apps?</h3>
       <ul className="grid gap-6 sm:grid-cols-2 mt-8 list-none pl-0">
        <li className="flex gap-4 p-6 rounded-2xl border border-border bg-card">
         <div className="text-primary"><Zap className="h-6 w-6" /></div>
         <div><strong>60 FPS Performance:</strong> Smooth animations and zero lag, ensuring a premium feel for your Mumbai brand.</div>
        </li>
        <li className="flex gap-4 p-6 rounded-2xl border border-border bg-card">
         <div className="text-primary"><Shield className="h-6 w-6" /></div>
         <div><strong>Secure & Scalable:</strong> Built with enterprise-grade security for handling user data and payments safely.</div>
        </li>
       </ul>

       <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Our App Development Process</h3>
       <p>
        We follow a rigorous process to ensure every app we launch from our <strong>Mumbai agency</strong> is a success:
       </p>
       <ol className="space-y-4 mt-6">
        <li><strong>Discovery & UX Design:</strong> We map out your user journey and create high-fidelity prototypes.</li>
        <li><strong>Agile Development:</strong> We build your app in sprints, providing you with regular updates and demos.</li>
        <li><strong>Quality Assurance:</strong> Rigorous testing on multiple devices to ensure a bug-free experience.</li>
        <li><strong>Store Deployment:</strong> We handle the entire submission process for the Apple App Store and Google Play Store.</li>
       </ol>
      </div>
     </Reveal>
    </div>
   </section>

   {/* CTA */}
   <section className="bg-[#111214] py-24 text-white">
    <div className="container-px mx-auto max-w-4xl text-center">
     <h2 className="text-3xl font-bold sm:text-4xl">Ready to launch your app in Mumbai?</h2>
     <p className="mt-6 text-gray-400 text-lg">Partner with Mumbai's most innovative mobile app team. Let's build your vision.</p>
     <div className="mt-10">
      <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-12 py-5 text-lg font-bold text-white transition hover:scale-105">
       Start App Development Today
      </Link>
     </div>
    </div>
   </section>
  </>
 );
}
