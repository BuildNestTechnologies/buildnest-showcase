import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Globe, Smartphone, Code2, Bot, Check, Quote, Star, ShieldCheck,
  Play, Zap, Award, TrendingUp,
} from "lucide-react";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import Marquee from "@/components/site/Marquee";
import WaveDivider from "@/components/site/WaveDivider";
import { PRICING, SERVICES, PORTFOLIO, TESTIMONIALS, TRUSTED_LOGOS } from "@/data/site";
import heroAbstract from "@/assets/hero-abstract.jpg";
import textureRed from "@/assets/texture-red.jpg";

const ICONS: Record<string, typeof Globe> = { globe: Globe, phone: Smartphone, code: Code2, bot: Bot };

const Home = () => {
  return (
    <>
      {/* HERO — split image-led layout */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(356_96%_60%/0.22),transparent_55%)]" />
        <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" /> 100% OFF dev cost — zero upfront
              </span>
            </Reveal>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-[40px] font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[64px]"
            >
              Websites, apps &{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">custom software</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-primary/20 blur-md" />
              </span>{" "}
              for ambitious brands.
            </motion.h1>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Engineered like enterprise. Priced like a startup. We absorb the dev cost upfront —
                you only pay when you love it.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/pricing"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-red transition hover:scale-[1.04] animate-glow-pulse"
                >
                  Start Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-primary hover:text-primary"
                >
                  <Play className="h-3.5 w-3.5 fill-current" /> See our work
                </Link>
              </div>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={0.45}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:gap-10">
                <div>
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">500+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Founders trust us</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">120+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Products shipped</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">4.9<span className="text-primary">/5</span></div>
                  <div className="mt-1 text-xs text-muted-foreground">Avg client rating</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — image collage */}
          <div className="relative lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-2xl" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-[2rem] border border-border shadow-glow-red"
                >
                  <img
                    src={heroAbstract}
                    alt="BuildNest abstract red architecture"
                    width={1600}
                    height={1200}
                    className="h-[420px] w-full object-cover sm:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hero via-transparent to-transparent" />
                  {/* Floating badge — testimonial */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border bg-hero/90 p-4 backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <img src={TESTIMONIALS[0].photo} alt={TESTIMONIALS[0].name} className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/40" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1 text-primary">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                        </div>
                        <p className="mt-1 truncate text-xs text-muted-foreground">
                          "Scaled our store 300% in 6 months."
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating chip — top right */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -right-3 -top-3 hidden rounded-2xl border border-primary/40 bg-card/95 p-3 shadow-glow-red backdrop-blur sm:block"
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <div className="text-xs">
                      <div className="font-semibold text-white">Top 1% agency</div>
                      <div className="text-[10px] text-muted-foreground">India 2025</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Trusted by logos */}
        <div className="container-px relative mx-auto max-w-7xl pb-16">
          <div className="flex flex-col items-center gap-6 border-t border-border pt-10 sm:flex-row sm:justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
              Trusted by teams shipping at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-60">
              {TRUSTED_LOGOS.map((l) => (
                <span key={l} className="font-display text-lg font-bold tracking-tight text-muted-foreground grayscale">
                  {l}
                </span>
              ))}
            </div>
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

      {/* SOFTWARE TEASER — moved up, image-led split */}
      <section className="relative overflow-hidden bg-hero py-20 md:py-28">
        <div className="absolute inset-0 opacity-40">
          <img src={textureRed} alt="" aria-hidden className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="container-px relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" /> Custom software
                </span>
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                  Need a custom CRM, ERP or <span className="text-primary">AI tool</span>? We build it.
                </h3>
                <p className="mt-5 max-w-lg text-muted-foreground">
                  Bespoke platforms engineered with Node.js, Python and modern cloud — designed around the way your
                  team actually works, not someone else's template.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                  {["ERP, CRM and inventory systems", "AI chatbots & GPT-4 integrations", "SaaS platforms with cloud architecture"].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Zap className="mt-0.5 h-4 w-4 flex-none text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/software"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03]"
                >
                  Explore software <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-transparent blur-3xl" />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-border shadow-glow-red">
                  <img src={PORTFOLIO[2].image} alt="HireIntel AI dashboard" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-hero/95 p-4 shadow-glow-red backdrop-blur sm:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold text-white">-70%</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Screening time</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
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

      {/* PORTFOLIO HIGHLIGHTS — asymmetric image-led grid */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionTitle
          eyebrow="Recent work"
          title={<>Products people actually <span className="text-primary">use every day</span>.</>}
        />
        <div className="grid gap-5 md:grid-cols-6 md:grid-rows-2">
          {/* Large left card spanning 2 rows */}
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow-red md:col-span-3 md:row-span-2 md:min-h-[560px]">
              <img src={PORTFOLIO[0].image} alt={PORTFOLIO[0].title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7 md:p-9">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{PORTFOLIO[0].tag}</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">{PORTFOLIO[0].title}</h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">{PORTFOLIO[0].desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{PORTFOLIO[0].metric}</span>
                  <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Top right card */}
          <Reveal delay={0.1}>
            <div className="group relative h-full overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow-red md:col-span-3 md:min-h-[270px]">
              <img src={PORTFOLIO[1].image} alt={PORTFOLIO[1].title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{PORTFOLIO[1].tag}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{PORTFOLIO[1].title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">{PORTFOLIO[1].metric}</span>
                  <ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bottom right card */}
          <Reveal delay={0.2}>
            <div className="group relative h-full overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow-red md:col-span-3 md:min-h-[270px]">
              <img src={PORTFOLIO[2].image} alt={PORTFOLIO[2].title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{PORTFOLIO[2].tag}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{PORTFOLIO[2].title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">{PORTFOLIO[2].metric}</span>
                  <ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary nav-underline">
            See all case studies <ArrowRight className="h-4 w-4" />
          </Link>
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
