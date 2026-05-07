import Image from "next/image";
import { Check, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" aria-label="Contact us" className="w-full py-20 relative">
      <div className="w-[var(--width-content-width)] mx-auto flex flex-col md:flex-row gap-12 relative z-10 card p-8 md:p-16 rounded-[var(--theme-border-radius-capped)] items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <span className="text-sm font-medium tracking-wider uppercase text-[var(--color-primary)]">Start a Project</span>
          <h2 className="slide-text text-5xl md:text-6xl font-medium leading-[1.1]" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="Ready to engineer your next digital asset?">Ready to engineer your next digital asset?</h2>
          <p className="slide-text text-lg text-foreground/80 max-w-lg" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="Let's discuss how our technical architecture and immersive design can scale your business.">Let's discuss how our technical architecture and immersive design can scale your business.</p>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[var(--color-primary)]" strokeWidth={2} />Custom 3D Integration</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[var(--color-primary)]" strokeWidth={2} />High-Performance Architecture</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[var(--color-primary)]" strokeWidth={2} />Conversion-Optimized UX</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-[var(--theme-border-radius)] overflow-hidden group">
          <Image src="/images/outgoing-call-calling-communication-concept_53876-125180.jpg" alt="Abstract Architecture" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
            <div className="card bg-background/90 backdrop-blur-sm p-8 rounded-[var(--theme-border-radius)] flex flex-col gap-4 text-center items-center w-full max-w-sm">
              <Mail className="w-8 h-8 text-[var(--color-primary)]" strokeWidth={2} />
              <h3 className="text-2xl font-medium">Get in Touch</h3>
              <p className="text-foreground/80 text-sm">Response within 24 hours.</p>
              <button type="button" aria-label="Contact via Email" className="stagger-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-12 px-8 min-w-0 w-full rounded-[var(--theme-border-radius)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--color-primary-cta-text)] mt-2">
                <div className="stagger-button-bg absolute inset-0 rounded-[var(--theme-border-radius)] transition-transform duration-[600ms] primary-button"></div>
                <span className="stagger-button-text relative text-base inline-block overflow-hidden truncate whitespace-nowrap">hello@buildnest.com</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
