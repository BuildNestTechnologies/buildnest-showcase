import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import Providers from "./providers";
import SiteLayout from "@/components/site/SiteLayout";
import LoadingScreen from "@/components/site/LoadingScreen";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { NoSSR } from "@/components/site/NoSSR";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", preload: true });

const siteConfig = {
  name: "BuildNest Technologies",
  url: "https://buildnest.world",
  description:
    "BuildNest Technologies – India's premier website & software development agency. Zero upfront fees, professional SEO, high-performance websites, mobile apps & custom software for businesses in Bhiwandi, Mumbai, Thane & nationwide. Plans from ₹7,999.",
  keywords: [
    "website development company in Bhiwandi",
    "web developers in Bhiwandi",
    "website making company in Mumbai",
    "software agency in Mumbai",
    "digital agency Bhiwandi",
    "tech agency Bhiwandi",
    "mobile app development company Mumbai",
    "website development company Mumbai",
    "custom software development Mumbai",
    "IT company in Bhiwandi",
    "website development India",
    "best website development company India",
    "affordable web development India",
    "ecommerce website design Bhiwandi",
    "BuildNest Technologies",
    "React JS development company India",
    "Next.js development services India",
    "Flutter app developers Mumbai",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BuildNest Technologies | #1 Website & Software Agency in Bhiwandi & Mumbai",
    template: `%s | BuildNest Technologies`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "BuildNest Team", url: siteConfig.url }],
  creator: "BuildNest Technologies",
  publisher: "BuildNest Technologies",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "BuildNest Technologies | #1 Website & Software Agency in Bhiwandi & Mumbai",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildNest Technologies – Website & Software Agency in Bhiwandi & Mumbai",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildNest Technologies | #1 Website & Software Agency in India",
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@buildnestworld",
    site: "@buildnestworld",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "fb0XZFZ8wj7c__pWRhVaAYdMMOUdqhjT9KML1c3Zbs0",
    other: { "msvalidate.01": "6FA7C110DDBF31E2515A02C9F0D99F51" },
  },
};

// ─── JSON-LD: Organization ────────────────────────────────────────────────────
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://buildnest.world/#organization",
  name: "BuildNest Technologies",
  alternateName: ["BuildNest", "BuildNest Tech", "BuildNest India"],
  url: "https://buildnest.world",
  logo: {
    "@type": "ImageObject",
    url: "https://buildnest.world/buildnest-logo.png",
    width: 512,
    height: 512,
  },
  image: "https://buildnest.world/og-image.png",
  description:
    "BuildNest Technologies is a leading website development company and software agency based in Bhiwandi, Maharashtra, serving Mumbai, Thane, Kalyan, Navi Mumbai, and clients nationwide across India.",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bhiwandi",
    addressLocality: "Bhiwandi",
    addressRegion: "Maharashtra",
    postalCode: "421302",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.3002",
    longitude: "73.0580",
  },
  telephone: "+919284470352",
  email: "buildnest.co.team@gmail.com",
  priceRange: "₹₹",
  openingHours: "Mo-Fr 09:00-19:00, Sa 10:00-17:00",
  areaServed: [
    { "@type": "City", name: "Bhiwandi" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Thane" },
    { "@type": "City", name: "Navi Mumbai" },
    { "@type": "City", name: "Kalyan" },
    { "@type": "State", name: "Maharashtra" },
    { "@type": "Country", name: "India" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919284470352",
    contactType: "customer service",
    email: "buildnest.co.team@gmail.com",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/buildnest-technologies",
    "https://www.instagram.com/buildnest_technologies/",
    "https://twitter.com/buildnestworld",
    "https://www.youtube.com/@buildnestworld",
    "https://www.indiamart.com/buildnest-technologies",
    "https://clutch.co/profile/buildnest-technologies",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website & Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development in Bhiwandi & Mumbai",
          url: "https://buildnest.world/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development Mumbai",
          url: "https://buildnest.world/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development India",
          url: "https://buildnest.world/software",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce Website Design Bhiwandi",
          url: "https://buildnest.world/pricing",
        },
      },
    ],
  },
};

// ─── JSON-LD: WebSite (Sitelinks SearchBox) ────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://buildnest.world/#website",
  url: "https://buildnest.world",
  name: "BuildNest Technologies",
  description: "India's premier website & software development agency",
  publisher: { "@id": "https://buildnest.world/#organization" },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://buildnest.world/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Pre-hydration cleanup: strip browser extension attributes */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){var a=["bis_skin_checked","bis_use","data-bis-config","data-dynamic-id"];function c(e){a.forEach(function(n){e.removeAttribute(n)})}function s(){document.querySelectorAll("[bis_skin_checked]").forEach(c)}s();if(typeof MutationObserver!=="undefined"){new MutationObserver(function(m){m.forEach(function(r){if(r.type==="attributes"&&a.indexOf(r.attributeName)>-1)r.target.removeAttribute(r.attributeName);if(r.type==="childList")r.addedNodes.forEach(function(n){if(n.nodeType===1){c(n);(n.querySelectorAll?n.querySelectorAll("[bis_skin_checked]"):[]).forEach(c)}})})}).observe(document.documentElement,{attributes:true,attributeFilter:a,childList:true,subtree:true})}})();`,
          }}
        />
        {/* Organization Schema – on every page */}
        <script
          id="org-schema"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* WebSite Schema – Sitelinks SearchBox */}
        <script
          id="website-schema"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <NoSSR>
            <Toaster />
            <Sonner />
            <LoadingScreen />
          </NoSSR>
          <SiteLayout>{children}</SiteLayout>
        </Providers>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
