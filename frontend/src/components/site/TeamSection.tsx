import Image from "next/image";

export default function TeamSection() {
  return (
    <section id="team" aria-label="Our engineering team" className="w-full py-20 relative bg-noise">
      <div className="w-[var(--width-content-width)] mx-auto flex flex-col gap-12 relative z-10">
        <div className="w-full flex flex-col gap-3 items-center md:items-start text-center md:text-left">
          <h2 className="slide-text text-5xl md:text-6xl font-medium" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="The Engineering Team">The Engineering Team</h2>
          <p className="slide-text text-lg text-foreground max-w-2xl" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="Led by industry veterans in 3D graphics and scalable systems.">Led by industry veterans in 3D graphics and scalable systems.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="card p-6 rounded-[var(--theme-border-radius)] flex items-center gap-6 group hover-card-diagonal">
            <div className="w-24 h-24 rounded-[var(--theme-border-radius-capped)] overflow-hidden relative shrink-0">
              <Image src="/images/business-leader-trader-searching-new-investment-solution_482257-116895.jpg" alt="Michael Chen" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-medium">Michael Chen</h3>
              <p className="text-sm font-medium text-[var(--color-primary)] mb-2">Lead Graphics Engineer</p>
              <p className="text-sm text-foreground/80 line-clamp-2">Former senior engineer at Unity. Specializes in WebGL optimizations and custom shaders.</p>
            </div>
          </div>
          <div className="card p-6 rounded-[var(--theme-border-radius)] flex items-center gap-6 group hover-card-diagonal">
            <div className="w-24 h-24 rounded-[var(--theme-border-radius-capped)] overflow-hidden relative shrink-0">
              <Image src="/images/packaging-engineer-looking-tablet-with-greenscreen-depot_482257-82403.jpg" alt="Sarah Jenkins" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-medium">Sarah Jenkins</h3>
              <p className="text-sm font-medium text-[var(--color-primary)] mb-2">Systems Architect</p>
              <p className="text-sm text-foreground/80 line-clamp-2">10+ years experience in distributed systems. Leads our backend engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
