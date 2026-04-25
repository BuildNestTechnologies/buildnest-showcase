import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Globe, Smartphone, Code2, Bot, Check, Quote, Star, ShieldCheck,
} from "lucide-react";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import Marquee from "@/components/site/Marquee";
import WaveDivider from "@/components/site/WaveDivider";
import { PRICING, SERVICES, PORTFOLIO, TESTIMONIALS, TRUSTED_LOGOS } from "@/data/site";

const ICONS: Record<string, typeof Globe> = { globe: Globe, phone: Smartphone, code: Code2, bot: Bot };

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(356_96%_60%/0.18),transparent_60%)]" />
        <div className="container-px relative mx-auto max-w-7xl py-20 md:py-32">
          <Reveal>
            <div className="mx-auto inline-flex w-full justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" /> 100% OFF development cost — zero upfront
              </span>
            </div>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-center font-display text-[40px] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[56px]"
          >
            BuildNest Technologies — websites, apps &{" "}
            <span className="text-primary">custom software</span> with zero upfront fees.
          </motion.h1>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              We build premium digital products for ambitious Indian businesses — engineered like enterprise,
              priced like a startup, shipped on time. You only pay when you love it.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-red transition hover:scale-[1.04] animate-glow-pulse"
              >
                Start Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-primary hover:text-primary"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>

          {/* Trust bar */}
          <Reveal delay={0.45}>
            <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex -space-x-3">
                {TESTIMONIALS.map((t) => (
                  <img key={t.name} src={t.photo} alt={t.name} className="h-10 w-10 rounded-full border-2 border-hero object-cover" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-white">500+ founders</span> trust us with their digital nest
                <div className="mt-1 flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  <span className="ml-2 text-xs text-muted-foreground">4.9 / 5 average rating</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trusted by logos */}
        <div className="container-px mx-auto max-w-7xl pb-16">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
            Trusted by teams that ship at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {TRUSTED_LOGOS.map((l) => (
              <span key={l} className="font-display text-xl font-bold tracking-tight text-muted-foreground grayscale">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionTitle
          eyebrow="What we do"
          title={<>One team. Every layer of your <span className="text-primary">product</span>.</>}
          subtitle="From a sharp marketing site to a production AI platform — we handle design, engineering and devops so you stay focused on customers."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Globe;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-[var(--radius)] border border-border bg-gradient-card p-6 shadow-card-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow-red">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.stack.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* MINI PRICING */}
      <section className="bg-hero py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Pricing that respects your runway"
            title={<>Pay <span className="text-primary">only when you love it</span>.</>}
            subtitle="Transparent packages, no hidden fees. We absorb the development cost upfront so you can ship without risk."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {PRICING.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className={`group relative h-full rounded-[var(--radius)] border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
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
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-white">{p.price}</span>
                    <span className="text-sm text-muted-foreground">one-time</span>
                  </div>
                  <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-primary nav-underline">
              See all pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOFTWARE TEASER */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[calc(var(--radius)+8px)] border border-border bg-gradient-card p-8 md:p-14">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" /> Custom software
                </span>
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Need a custom CRM, ERP or AI tool? <span className="text-primary">We build it.</span>
                </h3>
                <p className="mt-4 max-w-lg text-muted-foreground">
                  Bespoke platforms engineered with Node.js, Python and modern cloud — designed around the way your
                  team actually works, not someone else's template.
                </p>
                <Link
                  to="/software"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03]"
                >
                  Explore software <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="rounded-2xl border border-border bg-hero/80 p-5 shadow-soft">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                    <span className="ml-3 text-xs text-muted-foreground">hireintel.ai/dashboard</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="col-span-2 rounded-lg bg-card p-3">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Screening time</div>
                      <div className="mt-1 font-display text-2xl font-bold text-white">-70%</div>
                      <div className="mt-3 h-16 rounded bg-gradient-to-tr from-primary/40 to-primary/5" />
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg bg-card p-2.5">
                        <div className="text-[10px] text-muted-foreground">Hires</div>
                        <div className="font-display text-lg font-bold text-white">142</div>
                      </div>
                      <div className="rounded-lg bg-card p-2.5">
                        <div className="text-[10px] text-muted-foreground">Pipeline</div>
                        <div className="font-display text-lg font-bold text-primary">3.4k</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    {["Sourced", "Screened", "Interview", "Offer"].map((s) => (
                      <div key={s} className="flex-1 rounded-md bg-card px-2 py-2 text-center text-[10px] text-muted-foreground">{s}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PORTFOLIO HIGHLIGHTS — asymmetric */}
      <section className="bg-hero py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Recent work"
            title={<>Products people actually <span className="text-primary">use every day</span>.</>}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {PORTFOLIO.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className={`group relative h-full overflow-hidden rounded-[var(--radius)] border border-border bg-gradient-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow-red ${i === 2 ? "md:col-span-1" : ""}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-30 transition-opacity group-hover:opacity-60`} />
                  <div className="relative">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{p.tag}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-display text-sm font-semibold text-white">{p.metric}</span>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary nav-underline">
              See all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <Marquee />

      {/* TESTIMONIALS */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionTitle
          eyebrow="Proof"
          title={<>Founders who put their <span className="text-primary">name on it</span>.</>}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="relative h-full rounded-[var(--radius)] border border-border bg-gradient-card p-7 shadow-card-soft transition hover:-translate-y-1 hover:border-primary/40">
                <Quote className="absolute right-6 top-6 h-7 w-7 text-primary/40 [transform:rotate(2deg)]" />
                <p className="text-[15px] leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <img src={t.photo} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-1 ring-border" />
                  <div>
                    <div className="font-display text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[calc(var(--radius)+8px)] border border-primary/30 bg-gradient-card p-10 text-center md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(356_96%_60%/0.18),transparent_70%)]" />
            <div className="relative">
              <h3 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Let's build your <span className="text-primary">digital nest</span>.
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us about your project. We'll come back within a working day with a clear plan, timeline and quote.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-red transition hover:scale-[1.04]"
              >
                Start the conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Home;
