"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Mail } from "lucide-react";

const Footer = () => {
 return (
 <footer className="relative bg-[#111214] text-white">
  <div className="container-px mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-4">
   <div className="md:col-span-2">
    <div className="flex items-center gap-2.5">
     <Image src="/buildnest-logo.png" alt="BuildNest Technologies" width={160} height={56} className="h-12 w-auto object-contain" />
     <span className="font-display text-xl font-bold tracking-tight text-white">
      Build<span className="text-primary">Nest</span> <span className="text-gray-400 font-medium text-sm">Technologies</span>
     </span>
    </div>
    <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
     BuildNest Technologies is Bhiwandi's #1 website development company. We build websites & apps that grow your business – without the tech headache. Professional engineering, quality design, and a team that ships.
    </p>
    <div className="mt-6 flex items-center gap-4">
     {[
      { logo: "instagram", href: "https://www.instagram.com/buildnest_technologies/", label: "Instagram", color: "#E4405F" },
      { logo: "whatsapp", href: "https://wa.me/919284470352", label: "WhatsApp", color: "#25D366" },
      { logo: "facebook", href: "https://facebook.com/buildnestworld", label: "Facebook", color: "#1877F2" },
      // { logo: "linkedin", href: "#", label: "Linkedin", color: "#0A66C2" },
      // { logo: "x", href: "#", label: "Twitter", color: "#FFFFFF" }
     ].map((social, i) => (
      <a
       key={i}
       href={social.href}
       target="_blank"
       rel="noopener noreferrer"
       aria-label={social.label}
       className="group transition-transform hover:scale-110"
      >
       <img
        src={`https://cdn.simpleicons.org/${social.logo}/9ca3af`}
        alt={social.label}
        className="h-5 w-5 transition-all duration-300 group-hover:brightness-110 group-hover:filter group-hover:grayscale-0"
        style={{ 
          filter: 'grayscale(100%)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'grayscale(0%)';
          e.currentTarget.src = `https://cdn.simpleicons.org/${social.logo}/${social.color.replace('#', '')}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'grayscale(100%)';
          e.currentTarget.src = `https://cdn.simpleicons.org/${social.logo}/9ca3af`;
        }}
       />
      </a>
     ))}
    </div>
   </div>

   <div>
    <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
    <ul className="mt-4 space-y-3 text-sm text-gray-400">
     <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
     <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
     <li><Link href="/software" className="hover:text-primary transition-colors">Software</Link></li>
     <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
     <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
    </ul>
   </div>

   <div>
    <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Compare Us</h4>
    <ul className="mt-4 space-y-3 text-sm text-gray-400">
     <li><Link href="/blog/buildnest-vs-datamatex" className="hover:text-primary transition-colors">BuildNest vs Datamatex</Link></li>
     <li><Link href="/blog/buildnest-vs-datamatex" className="hover:text-primary transition-colors">Datamatex Alternative</Link></li>
     <li><Link href="/website-development-bhiwandi" className="hover:text-primary transition-colors">Best Web Agency Bhiwandi</Link></li>
    </ul>
   </div>

   <div>
    <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Reach us</h4>
    <ul className="mt-4 space-y-3 text-sm text-gray-400">
     <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Form</Link></li>
     <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> buildnest.co.team@gmail.com</li>
     <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Bhiwandi & Mumbai, Maharashtra</li>
    </ul>
   </div>
  </div>

  <div className="border-t border-gray-800">
   <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 text-xs text-gray-400 md:flex-row">
     <div className="flex items-center gap-4">
      <p>© {new Date().getFullYear()} BuildNest Technologies.</p>
      <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</Link>
      <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
      <Link href="/blog" className="hover:text-gray-300 transition-colors">Resources</Link>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
