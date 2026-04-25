import { TECH_STACK } from "@/data/site";

const Marquee = () => {
  const items = [...TECH_STACK, ...TECH_STACK];
  return (
    <div className="relative overflow-hidden border-y border-border bg-hero py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-hero to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-hero to-transparent" />
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-lg font-display font-semibold text-muted-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
