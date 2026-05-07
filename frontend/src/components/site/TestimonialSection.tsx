import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section aria-label="Client testimonial" className="w-full py-20 relative">
      <div className="w-[var(--width-content-width)] mx-auto flex flex-col gap-12 relative z-10 card p-10 md:p-16 rounded-[var(--theme-border-radius-capped)] items-center text-center">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[var(--color-primary)] text-[var(--color-primary)]" strokeWidth={2} />
          ))}
        </div>
        <blockquote className="text-3xl md:text-5xl font-medium leading-[1.2] max-w-4xl slide-text" style={{fontKerning: "none", textRendering: "optimizeSpeed"}}>
          "BuildNest didn't just build us a website. They engineered a digital asset that drastically improved our conversion rates. Their attention to detail is unmatched."
        </blockquote>
        <div className="flex flex-col items-center gap-2">
          <p className="font-medium text-lg">Alex Rivers</p>
          <p className="text-foreground/80 text-sm">CTO, Nexus Corp</p>
        </div>
      </div>
    </section>
  );
}
