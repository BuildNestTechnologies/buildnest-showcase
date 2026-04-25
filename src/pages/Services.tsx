import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Bot, Code2, Compass, Pencil, Hammer, Rocket, Headphones } from "lucide-react";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { SERVICES } from "@/data/site";

const ICONS = { globe: Globe, phone: Smartphone, code: Code2, bot: Bot } as const;
const PROCESS = [
  { icon: Compass, title: "Discover", desc: "Workshops to nail the why, the who and the what." },
  { icon: Pencil, title: "Design", desc: "Wireframes → high-fidelity UI you'd be proud to ship." },
  { icon: Hammer, title: "Build", desc: "Modular engineering, weekly demos, no nasty surprises." },
  { icon: Rocket, title: "Launch", desc: "Performance-tuned deploys with monitoring on day one." },
  { icon: Headphones, title: "Support", desc: "Ongoing care plans — we don't ghost after handover." },
];

const Services = () => (
  <>
    <section className="bg-hero py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-[56px]">
            Web. Apps. <span className="text-primary">Software.</span> Done right, done together.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            One senior team for design, engineering and growth. We bring the rigor of a product studio with the
            speed and price of a boutique agency.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Globe;
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-[var(--radius)] border border-border bg-gradient-card p-8 shadow-card-soft transition hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow-red">
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground">{s.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {s.stack.map((t) => (
                        <span key={t} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>

    <section className="bg-hero py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle eyebrow="Our process" title={<>Calm, predictable, <span className="text-primary">on time</span>.</>} />
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="rounded-[var(--radius)] border border-border bg-gradient-card p-6 transition hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">0{i + 1}</span>
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold text-white">{p.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="container-px mx-auto max-w-7xl py-20 text-center">
      <Reveal>
        <h3 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to put a senior team on your <span className="text-primary">product</span>?
        </h3>
        <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-red transition hover:scale-[1.04]">
          Book a free consult <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  </>
);

export default Services;
