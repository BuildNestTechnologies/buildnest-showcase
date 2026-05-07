"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you use templates like WordPress?",
      answer: "No, we don't use WordPress or pre-made templates. Every project is custom-coded using modern frameworks like Next.js and React to ensure maximum performance, security, and unique design."
    },
    {
      question: "How long does a 3D website take to build?",
      answer: "Depending on the complexity, a fully bespoke 3D website typically takes between 4 to 8 weeks from initial design concepts to final deployment."
    },
    {
      question: "Do you handle hosting and SEO?",
      answer: "Yes, we handle end-to-end deployment including high-performance cloud hosting and comprehensive technical SEO to ensure your site ranks well and loads instantly."
    }
  ];

  return (
    <section id="faq" aria-label="Frequently asked questions" className="w-full py-20 relative">
      <div className="w-[var(--width-content-width)] mx-auto flex flex-col md:flex-row gap-12 relative z-10 items-start">
        <div className="w-full md:w-1/3 flex flex-col gap-3 sticky top-32">
          <h2 className="slide-text text-5xl md:text-6xl font-medium" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="Common Inquiries">Common Inquiries</h2>
          <p className="slide-text text-lg text-foreground max-w-2xl" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="Everything you need to know about our engineering process.">Everything you need to know about our engineering process.</p>
          <button type="button" data-href="#contact" aria-label="Ask a Question" className="stagger-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-10 px-8 min-w-0 w-fit max-w-full rounded-[var(--theme-border-radius)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--color-secondary-cta-text)] mt-4">
            <div className="stagger-button-bg absolute inset-0 rounded-[var(--theme-border-radius)] transition-transform duration-[600ms] secondary-button"></div>
            <span className="stagger-button-text relative text-base inline-block overflow-hidden truncate whitespace-nowrap">Ask a Question</span>
          </button>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-4" data-orientation="vertical">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} data-state={isOpen ? "open" : "closed"} data-orientation="vertical" className="card rounded-[var(--theme-border-radius)] overflow-hidden border border-transparent transition-colors hover:border-primary/20">
                <h3 data-orientation="vertical" data-state={isOpen ? "open" : "closed"} className="flex">
                  <button 
                    type="button" 
                    aria-expanded={isOpen} 
                    data-state={isOpen ? "open" : "closed"} 
                    data-orientation="vertical" 
                    className="flex flex-1 items-center justify-between py-6 px-8 font-medium transition-all hover:bg-foreground/5 cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    {faq.question}
                    <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} strokeWidth={2} />
                  </button>
                </h3>
                <div 
                  data-state={isOpen ? "open" : "closed"} 
                  hidden={!isOpen} 
                  role="region" 
                  data-orientation="vertical" 
                  className={cn(
                    "overflow-hidden text-sm transition-all",
                    isOpen ? "animate-accordion-down" : "animate-accordion-up"
                  )}
                >
                  <div className="pb-6 px-8 pt-0 text-foreground/80 text-base">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
