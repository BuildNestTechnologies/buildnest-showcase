import { ArrowRight, ExternalLink, Play, MonitorSmartphone } from "lucide-react";
import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { PORTFOLIO } from "@/data/site";
import { Link } from "react-router-dom";

const Portfolio = () => (
  <>
    <section className="bg-hero py-20 md:py-28">
      <div className="container-px mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Work
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            We don't just build pretty websites. We build digital tools that generate leads, streamline operations, and increase revenue. Check out some of our recent work.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        {PORTFOLIO.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-card-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-border">
              {/* Image Section (Mockup Container) */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted p-4 sm:p-8">
                {/* Subtle laptop base mockup */}
                <div className="relative mx-auto h-full w-full max-w-[500px] rounded-t-xl bg-card shadow-xl ring-1 ring-border">
                  <div className="flex h-6 w-full items-center gap-1.5 border-b border-border bg-muted/50 px-3">
                    <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-[calc(100%-24px)] w-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-[1.02]" 
                  />
                </div>
              </div>
              {/* Content Section */}
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="mt-4 font-display text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.desc}</p>
                  
                  {/* Action Links */}
                  <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                    {project.videoLink && (
                      <a 
                        href={project.videoLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-accent"
                      >
                        <Play className="h-4 w-4" /> Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-hero py-20 text-center">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal>
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-card text-primary shadow-sm">
            <MonitorSmartphone className="h-8 w-8" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Want to be our next success story?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Let's build something great together.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Start Your Project <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
  </>
);

export default Portfolio;
