import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { TEAM } from "@/data/site";
import { MapPin, Target, Heart, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="bg-hero py-20 md:py-28">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionTitle
              title="We build technology that feels human."
              subtitle="Our Story"
              centered
              gradient
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Started in 2020, we wanted to help Indian businesses go digital without the confusion. No tech jargon, no hidden fees, just straightforward software that helps you grow. We speak Hindi, English, and business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">Meet the humans behind the code</h2>
            <p className="mt-4 text-muted-foreground">Real people ready to help your business succeed.</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-[var(--radius)] bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-soft">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm text-primary">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-4xl pb-24 text-center">
        <Reveal>
          <div className="rounded-[var(--radius)] bg-secondary p-12 shadow-soft">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-card text-primary shadow-sm">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-foreground">Proudly based in India</h3>
            <p className="mt-4 text-muted-foreground">
              We operate out of Delhi NCR and work with ambitious businesses across Bharat and beyond.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default About;
