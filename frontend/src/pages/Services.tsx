import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { Globe, Smartphone, Settings, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES_DETAILED = [
  {
    id: "web",
    title: "Websites that work",
    icon: Globe,
    desc: "We don't just build websites; we build 24/7 sales machines. Whether you need a simple online presence for your local shop or a complex e-commerce store, we make it fast, secure, and easy for your customers to use.",
    features: ["Mobile-friendly design", "SEO optimized for Google", "E-commerce & payments ready", "Easy for you to update"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "app",
    title: "Mobile apps for your business",
    icon: Smartphone,
    desc: "Reach your customers wherever they are. We build beautiful, fast-loading apps for both iPhones and Androids. From food delivery to fitness tracking, we bring your idea to life in the app store.",
    features: ["iOS and Android support", "Push notifications", "Offline capabilities", "App store submission handled"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "software",
    title: "Custom software made simple",
    icon: Settings,
    desc: "Stop running your business on messy spreadsheets. We build custom dashboards, CRMs, and inventory systems tailored exactly to how your team works.",
    features: ["Customer Relationship Management (CRM)", "Inventory tracking", "Employee portals", "Data security & backups"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "automation",
    title: "Business Automation & AI",
    icon: Zap,
    desc: "Save hundreds of hours by automating repetitive tasks. We set up smart systems that send emails, generate invoices, and answer common customer questions using AI.",
    features: ["Automated invoicing & emails", "AI Chatbots for customer support", "WhatsApp business integration", "Connecting different tools together"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];

const Services = () => {
  return (
    <>
      <section className="bg-hero py-20 md:py-28">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionTitle
              title="What we do"
              subtitle="Services"
              centered
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              We provide everything your business needs to succeed online. No technical jargon, just solutions that make you money and save you time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="space-y-24 md:space-y-32">
          {SERVICES_DETAILED.map((service, index) => (
            <div key={service.id} className={`flex flex-col items-center gap-12 lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <Reveal>
                  <div className="overflow-hidden rounded-2xl shadow-card-soft">
                    <img src={service.image} alt={service.title} className="h-[350px] w-full object-cover md:h-[450px]" />
                  </div>
                </Reveal>
              </div>
              <div className="w-full lg:w-1/2 lg:px-8">
                <Reveal delay={0.1}>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{service.desc}</p>
                  
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                      Discuss this service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-hero py-24 text-center">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-foreground">Not sure what you need?</h2>
            <p className="mt-4 text-muted-foreground">That's completely fine. We offer a free 30-minute consultation to understand your business and recommend the best path forward.</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Book a Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Services;
