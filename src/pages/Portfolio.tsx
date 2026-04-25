import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { PORTFOLIO } from "@/data/site";

const Portfolio = () => (
  <>
    <section className="bg-hero py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Portfolio
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-[56px]">
            Work we'd <span className="text-primary">put on a billboard</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A few of the products we shipped this year. Real teams, real numbers, real results.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className={`group relative h-full overflow-hidden rounded-[var(--radius)] border border-border bg-gradient-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow-red ${i === 0 ? "lg:col-span-2" : ""}`}>
              <div className={`relative overflow-hidden ${i === 0 ? "h-56 lg:h-72" : "h-48"}`}>
                <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} mix-blend-overlay opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-display text-sm font-semibold text-primary">{p.metric}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container-px mx-auto max-w-7xl pb-24 text-center">
      <Reveal>
        <h3 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
          Want to be the <span className="text-primary">next case study</span>?
        </h3>
        <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-red transition hover:scale-[1.04]">
          Start your project <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  </>
);

export default Portfolio;
