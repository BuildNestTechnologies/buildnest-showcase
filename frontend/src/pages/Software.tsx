import { Link } from "react-router-dom";
import { ArrowRight, Database, Brain, ShoppingCart, Users, Layers, Activity } from "lucide-react";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";

const CAPS = [
  { icon: Users, title: "CRM platforms", desc: "Pipelines, workflows and reporting tuned to how your team really sells." },
  { icon: Database, title: "ERP & inventory", desc: "Stock, billing, vendors and procurement on one calm dashboard." },
  { icon: Brain, title: "AI tools & chatbots", desc: "GPT-4 powered assistants, summarizers and recommenders." },
  { icon: ShoppingCart, title: "SaaS platforms", desc: "Multi-tenant products with billing, roles and analytics baked in." },
  { icon: Layers, title: "Internal tools", desc: "Admin panels and ops dashboards that replace 10 spreadsheets." },
  { icon: Activity, title: "Data pipelines", desc: "ETL, dashboards and alerts so leaders see what matters in real time." },
];

const STACK = ["Node.js", "Python", "Go", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Redis", "GPT-4"];

const Software = () => (
  <>
    <section className="bg-hero py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Custom software
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-[56px]">
            The internal tool you've been <span className="text-primary">dreaming about</span> — built for real.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            ERP, CRM, inventory systems, AI chatbots and SaaS platforms — engineered around your workflow, not
            forced into someone else's template.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CAPS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="group h-full rounded-[var(--radius)] border border-border bg-gradient-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow-red">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="bg-hero py-20">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle eyebrow="Tech stack" title={<>Modern, boring, <span className="text-primary">battle-tested</span>.</>} />
        <div className="flex flex-wrap justify-center gap-3">
          {STACK.map((t) => (
            <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="container-px mx-auto max-w-7xl py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[calc(var(--radius)+8px)] border border-border bg-gradient-card p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Case study</span>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Recruitment AI that screens <span className="text-primary">70% faster</span>.
              </h3>
              <p className="mt-4 max-w-lg text-muted-foreground">
                We built HireIntel — a GPT-4 powered platform that reads JDs, ranks 1,000s of candidates and writes
                personalised outreach. The team now spends time on conversations, not CVs.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• 70% reduction in time-to-shortlist</li>
                <li>• 3.4k candidates moved through pipeline / month</li>
                <li>• 6-week build, weekly demo cadence</li>
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03]">
                Get a free consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* SVG dashboard mock */}
            <div className="rounded-2xl border border-border bg-hero/80 p-5 shadow-soft">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                <span className="ml-3 text-xs text-muted-foreground">hireintel.ai</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { l: "Sourced", v: "12,488" },
                  { l: "Shortlisted", v: "1,204" },
                  { l: "Hired", v: "142" },
                ].map((m) => (
                  <div key={m.l} className="rounded-lg bg-card p-3">
                    <div className="text-[10px] uppercase text-muted-foreground">{m.l}</div>
                    <div className="mt-1 font-display text-xl font-bold text-white">{m.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg bg-card p-4">
                <div className="text-[10px] uppercase text-muted-foreground">Pipeline velocity</div>
                <svg viewBox="0 0 200 60" className="mt-2 w-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="hsl(356 96% 60% / 0.55)" />
                      <stop offset="100%" stopColor="hsl(356 96% 60% / 0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,50 L20,40 L40,42 L60,30 L80,28 L100,18 L120,22 L140,12 L160,16 L180,8 L200,4 L200,60 L0,60 Z" fill="url(#g)" />
                  <path d="M0,50 L20,40 L40,42 L60,30 L80,28 L100,18 L120,22 L140,12 L160,16 L180,8 L200,4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  </>
);

export default Software;
