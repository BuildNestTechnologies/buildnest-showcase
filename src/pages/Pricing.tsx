import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { PRICING } from "@/data/site";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    q: "What does \"100% OFF development cost — zero upfront\" actually mean?",
    a: "We absorb the engineering cost upfront. You pay only after delivery review. If it doesn't meet what we agreed in the brief, you don't pay. Simple.",
  },
  {
    q: "How long does a typical project take?",
    a: "A Starter site ships in 7–10 days, Business in 2–3 weeks, E-Commerce in 3–5 weeks, and custom Software in 6–12 weeks depending on scope.",
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: "Yes — managed hosting on AWS / Vercel and monthly care plans starting at ₹1,499 / month covering updates, backups and bug fixes.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. Most clients start with Business and graduate to E-Commerce or custom Software as they grow. We only charge the delta.",
  },
];

const Pricing = () => (
  <>
    <section className="bg-hero py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" /> 100% OFF development cost — zero upfront
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-[56px]">
            Pricing as <span className="text-primary">honest</span> as our engineering.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Pick a package, kick off in 48 hours, pay only when you love it.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PRICING.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <div className={`relative h-full rounded-[var(--radius)] border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
              p.highlight
                ? "border-primary/70 bg-gradient-card shadow-glow-red"
                : "border-border bg-gradient-card shadow-card-soft hover:border-primary/50"
            }`}>
              {p.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold text-white">{p.price}</span>
                {p.price !== "Custom" && <span className="text-xs text-muted-foreground">one-time</span>}
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background/40 text-white hover:border-primary"
                }`}
              >
                Choose {p.name.split(" ")[0]} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="bg-hero py-20">
      <div className="container-px mx-auto max-w-3xl">
        <SectionTitle eyebrow="FAQ" title={<>Quick answers, <span className="text-primary">no fluff</span>.</>} />
        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-[var(--radius)] border border-border bg-gradient-card px-5">
                <AccordionTrigger className="text-left text-base font-semibold text-white hover:text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  </>
);

export default Pricing;
