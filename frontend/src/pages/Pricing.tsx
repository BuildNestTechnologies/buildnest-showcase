import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { Check, Info, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PRICING } from "@/data/site";

const Pricing = () => {
  return (
    <>
      <section className="bg-hero py-20 md:py-28">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionTitle
              title="Honest, Transparent Pricing"
              subtitle="No hidden fees"
              centered
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Transparent packages with no hidden costs. All our plans include a 1-year free domain and hosting. Ask us about our <strong className="text-foreground">zero upfront fee</strong> option.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? "border-primary/50 bg-card shadow-card-soft" : "border-border bg-card shadow-sm hover:shadow-md"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
                </div>
                
                <div className="mb-8 flex items-baseline gap-1 border-b border-border pb-8">
                  <span className="font-display text-4xl font-bold tracking-tight text-foreground">{plan.price}</span>
                </div>
                
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-none text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`mt-auto inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "border border-border bg-transparent text-foreground hover:bg-accent"
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ or Guarantee Section */}
      <section className="bg-hero py-20">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="h-8 w-8" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold text-foreground">Our "No Headaches" Guarantee</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We don't just build your website and disappear. Every package includes 1 year of free hosting, technical support, and domain registration. You focus on your business; we'll handle the tech.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="font-semibold text-primary hover:underline">
                Still have questions? Let's chat
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Pricing;
