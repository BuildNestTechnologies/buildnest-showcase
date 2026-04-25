import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Reveal from "@/components/site/Reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "We've got your message",
        description: "A senior engineer will reach out within one working day.",
      });
      (e.target as HTMLFormElement).reset();
      setProjectType("");
    }, 800);
  };

  return (
    <section className="bg-hero">
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Contact
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-[56px]">
                Let's build your <span className="text-primary">digital nest</span>.
              </h1>
              <p className="mt-5 max-w-md text-muted-foreground">
                Tell us about your project. We'll come back within a working day with a clear plan, timeline and quote.
              </p>

              <ul className="mt-10 space-y-5 text-sm">
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20"><Mail className="h-4 w-4" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                    <div className="font-medium text-white">hello@buildnest.tech</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20"><Phone className="h-4 w-4" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                    <div className="font-medium text-white">+91 98765 43210</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20"><MapPin className="h-4 w-4" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Where</div>
                    <div className="font-medium text-white">Bengaluru · Mumbai · Remote</div>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-[var(--radius)] border border-border bg-gradient-card p-6">
                <p className="text-sm italic text-foreground">
                  "BuildNest helped us scale our online store by 300% in 6 months."
                </p>
                <p className="mt-3 text-xs text-muted-foreground">— Ankit Sharma, CTO of ShopEase</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="rounded-[calc(var(--radius)+8px)] border border-border bg-gradient-card p-7 shadow-card-soft md:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input id="name" required placeholder="Riya Mehta" className="mt-2 border-border bg-background/40" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" required placeholder="you@company.com" className="mt-2 border-border bg-background/40" />
                </div>
              </div>
              <div className="mt-5">
                <Label className="text-white">Project type</Label>
                <Select value={projectType} onValueChange={setProjectType} required>
                  <SelectTrigger className="mt-2 border-border bg-background/40 text-foreground">
                    <SelectValue placeholder="Select what you need" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="app">Mobile app</SelectItem>
                    <SelectItem value="software">Custom software</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-5">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea id="message" required rows={5} placeholder="Tell us a little about your project, timeline and goals." className="mt-2 border-border bg-background/40" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-red transition hover:scale-[1.02] disabled:opacity-70"
              >
                {loading ? "Sending..." : <>Send message <ArrowRight className="h-4 w-4" /></>}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">We reply within one working day. Promise.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
