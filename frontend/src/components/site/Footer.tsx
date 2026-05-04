"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
 { label: "Instagram", href: "https://www.instagram.com/buildnest_technologies/" },
 { label: "WhatsApp", href: "https://wa.me/919284470352" },
 { label: "Facebook", href: "https://facebook.com/buildnestworld" },
];

const Footer = () => {
 return (
  <footer className="mt-16 bg-[#111111] text-[#f5f1ea]">
   <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
    <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:grid-cols-[1.1fr_0.9fr] md:p-10">
     <div>
      <div className="flex items-center gap-3">
       <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8">
        <Image src="/buildnest-logo.png" alt="BuildNest Technologies" width={34} height={34} className="h-8 w-8 object-contain" />
       </div>
       <div>
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/55">BuildNest</p>
        <p className="mt-1 text-lg font-semibold">Built like a product, delivered like a studio.</p>
       </div>
      </div>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-white/62">
       Websites, software systems, mobile products, and search-led digital experiences for ambitious teams who want more than a service page and a quote button.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
       {socialLinks.map((item) => (
        <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/12 px-4 py-2 text-white/72 transition hover:border-white/30 hover:text-white">
         {item.label}
        </a>
       ))}
      </div>
     </div>

     <div className="grid gap-8 sm:grid-cols-2">
      <div>
       <p className="eyebrow-metric text-white/42">Navigate</p>
       <div className="mt-5 space-y-3 text-sm">
        {[
         ["/services", "Services"],
         ["/software", "Software"],
         ["/portfolio", "Portfolio"],
         ["/pricing", "Pricing"],
         ["/blog", "Journal"],
        ].map(([href, label]) => (
         <Link key={href} href={href} className="flex items-center justify-between rounded-full border border-white/8 px-4 py-3 text-white/72 transition hover:border-white/20 hover:text-white">
          {label}
          <ArrowUpRight className="h-4 w-4" />
         </Link>
        ))}
       </div>
      </div>

      <div>
       <p className="eyebrow-metric text-white/42">Contact</p>
       <div className="mt-5 space-y-4 text-sm text-white/72">
        <a href="tel:+919284470352" className="flex gap-3 transition hover:text-white">
         <Phone className="mt-0.5 h-4 w-4" /> +91 92844 70352
        </a>
        <a href="mailto:buildnest.co.team@gmail.com" className="flex gap-3 transition hover:text-white">
         <Mail className="mt-0.5 h-4 w-4" /> buildnest.co.team@gmail.com
        </a>
        <p className="flex gap-3">
         <MapPin className="mt-0.5 h-4 w-4" /> Near Shagun Chowk, Bhiwandi, Maharashtra
        </p>
       </div>
      </div>
     </div>
    </div>

    <div className="mt-6 flex flex-col gap-3 text-xs text-white/42 md:flex-row md:items-center md:justify-between">
     <p>© {new Date().getFullYear()} BuildNest Technologies. Crafted in India.</p>
     <div className="flex flex-wrap gap-4">
      <Link href="/privacy-policy" className="transition hover:text-white/72">Privacy</Link>
      <Link href="/terms" className="transition hover:text-white/72">Terms</Link>
      <Link href="/about" className="transition hover:text-white/72">About</Link>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
