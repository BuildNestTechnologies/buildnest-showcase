import Link from "next/link";
import Image from "next/image";
import { Camera, Globe, Send, MapPin, Mail } from "lucide-react";

const Footer = () => (
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
          BuildNest Technologies is Bhiwandi's #1 website development company. We build websites & apps that grow your business – without the tech headache. Zero upfront fees, serious engineering, and a team that ships.
        </p>
        <div className="mt-6 flex items-center gap-3">
          {[Globe, Camera, Send].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition hover:border-primary hover:text-primary"
            >
              <Icon className="h-4 w-4" />
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
        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Reach us</h4>
        <ul className="mt-4 space-y-3 text-sm text-gray-400">
          <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Form</Link></li>
          <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> hello@buildnest.world</li>
          <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Bhiwandi & Mumbai, Maharashtra</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 text-xs text-gray-400 md:flex-row">
        <div className="flex items-center gap-4">
          <p>© {new Date().getFullYear()} BuildNest Technologies. All rights reserved.</p>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">Resources</Link>
        </div>
        <p className="font-hand text-base text-primary [transform:rotate(-2deg)]">
          handcrafted in India ✦
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
