import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import Providers from "./providers";
import SiteLayout from "@/components/site/SiteLayout";
import LoadingScreen from "@/components/site/LoadingScreen";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteConfig = {
  name: "BuildNest Technologies",
  url: "https://buildnest.world",
  description: "Bhiwandi's #1 Website & Software Development Agency. Zero upfront fees, professional SEO, and high-performance digital solutions for businesses in Mumbai, Thane & Kalyan.",
  keywords: ["website development bhiwandi", "software company mumbai", "web agency kalyan", "next.js developer india", "flutter app development mumbai", "seo services bhiwandi"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "BuildNest Team" }],
  creator: "BuildNest Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GSC_CODE',
    other: { 'msvalidate.01': 'YOUR_BING_CODE' },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://buildnest.world/#organization",
  "name": "BuildNest Technologies",
  "alternateName": ["BuildNest", "BuildNest Tech"],
  "url": "https://buildnest.world",
  "logo": { "@type": "ImageObject", "url": "https://buildnest.world/buildnest-logo.png" },
  "description": "BuildNest Technologies is a leading website development company and software agency based in Bhiwandi, Maharashtra serving Mumbai, Kalyan, Thane, and Navi Mumbai.",
  "foundingDate": "2022",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR STREET ADDRESS",
    "addressLocality": "Bhiwandi",
    "addressRegion": "Maharashtra",
    "postalCode": "421302",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "19.3002", "longitude": "73.0580" },
  "telephone": "+91-9876543210",
  "email": "hello@buildnest.world",
  "sameAs": [
    "https://www.linkedin.com/company/buildnest-technologies",
    "https://www.instagram.com/buildnestworld",
    "https://twitter.com/buildnestworld",
    "https://www.youtube.com/@buildnestworld",
    "https://www.indiamart.com/buildnest-technologies",
    "https://clutch.co/profile/buildnest-technologies"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script 
          id="org-schema" 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} 
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <Toaster />
          <Sonner />
          <LoadingScreen />
          <SiteLayout>{children}</SiteLayout>
        </Providers>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
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
