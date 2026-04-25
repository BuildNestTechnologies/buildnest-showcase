import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Settings, LifeBuoy, Check, Star, Quote, Phone, Mail } from "lucide-react";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { PRICING, SERVICES, PORTFOLIO, TESTIMONIALS, HOW_IT_WORKS } from "@/data/site";

const ICONS: Record<string, any> = { Globe, Smartphone, Settings, LifeBuoy };

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* LEFT — copy */}
          <div>
            <Reveal>
              <h1 className="font-display text-[40px] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
                We build websites & apps that grow your business – <span className="text-primary">without the tech headache.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                From local shops to enterprises, we make technology work for you. No confusing jargon, just real results.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/pricing"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
                >
                  See our prices
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  Talk to a human
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — image */}
          <div className="relative">
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl shadow-card-soft">
                {/* Soft red gradient overlay as requested */}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Team working on laptop"
                  className="h-[400px] w-full object-cover sm:h-[500px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="border-y border-border bg-card py-12">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {TESTIMONIALS.map((t, i) => (
                  <img key={i} src={t.image} alt={t.name} className="h-12 w-12 rounded-full border-2 border-card object-cover shadow-sm" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-1 text-sm font-medium text-foreground">Trusted by 500+ Indian businesses</p>
              </div>
            </div>
            
            <div className="hidden h-8 w-px bg-border md:block" />

            <div className="flex flex-wrap items-center justify-center gap-6 opacity-50 grayscale sm:gap-10">
              <span className="font-display text-xl font-bold">ABC Corp</span>
              <span className="font-display text-xl font-bold">Shree Trading</span>
              <span className="font-display text-xl font-bold">Global Logistics</span>
              <span className="font-display text-xl font-bold">TechSolutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Everything your business needs</h2>
            <p className="mt-4 text-muted-foreground">Simple solutions without the technical jargon.</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || Globe;
            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="group h-full rounded-[var(--radius)] border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-soft">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-hero py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">How It Works</h2>
              <p className="mt-4 text-muted-foreground">A simple, transparent process from start to finish.</p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative rounded-[var(--radius)] bg-card p-8 shadow-sm">
                  <span className="absolute -top-6 left-8 font-display text-6xl font-bold text-border">{step.step}</span>
                  <div className="relative z-10 pt-4">
                    <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Honest Pricing</h2>
            <p className="mt-4 text-muted-foreground">Zero upfront fee available – ask us how.</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {PRICING.slice(0, 3).map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className={`relative flex h-full flex-col rounded-[var(--radius)] border p-8 transition-all duration-300 hover:-translate-y-1 ${
                p.popular ? "border-primary/50 bg-card shadow-card-soft" : "border-border bg-card shadow-sm hover:shadow-md"
              }`}>
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-6 mb-8 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{p.price}</span>
                </div>
                <ul className="mb-8 flex-1 space-y-4 text-sm text-muted-foreground">
                  {p.features.slice(0, 4).map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/pricing" className="inline-flex items-center gap-2 font-medium text-primary hover:underline">
            View all pricing details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-hero py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Don't just take our word for it</h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="relative rounded-[var(--radius)] bg-card p-8 shadow-sm">
                  <Quote className="mb-4 h-8 w-8 text-primary/20" />
                  <p className="text-foreground leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                    <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-px mx-auto max-w-4xl py-20 md:py-28">
        <Reveal>
          <div className="rounded-[var(--radius)] bg-[#111214] p-10 text-center shadow-2xl md:p-16">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to start? Let's talk.</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              We'll listen to your needs and give you honest advice. No pressure, no tech jargon.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a href="tel:+919876543210" className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105">
                <Phone className="h-5 w-5" /> Call Us Now
              </a>
              <a href="mailto:hello@buildnest.tech" className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-8 py-4 font-semibold text-white transition hover:bg-gray-700">
                <Mail className="h-5 w-5" /> Email Us
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
