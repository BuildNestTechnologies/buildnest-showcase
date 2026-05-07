export default function MetricsSection() {
  return (
    <section id="metrics" aria-label="Our impact metrics" className="w-full py-20 relative">
      <div className="w-[var(--width-content-width)] mx-auto flex flex-col gap-12 relative z-10">
        <div className="w-full flex flex-col gap-3 items-center md:items-start text-center md:text-left">
          <h2 className="slide-text text-5xl md:text-6xl font-medium" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="Our Impact">Our Impact</h2>
          <p className="slide-text text-lg text-foreground max-w-2xl" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="Data-driven results that scale businesses.">Data-driven results that scale businesses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="card p-8 rounded-[var(--theme-border-radius)] flex flex-col gap-4 text-center items-center justify-center relative overflow-hidden group">
            <h3 className="text-6xl md:text-7xl font-bold text-[var(--color-primary)]">50+</h3>
            <p className="text-lg font-medium">Launch Cycles</p>
            <p className="text-sm text-foreground/80">Successful deployments.</p>
          </div>
          <div className="card p-8 rounded-[var(--theme-border-radius)] flex flex-col gap-4 text-center items-center justify-center relative overflow-hidden group">
            <h3 className="text-6xl md:text-7xl font-bold text-[var(--color-primary)]">98%</h3>
            <p className="text-lg font-medium">Retention</p>
            <p className="text-sm text-foreground/80">Long-term client partnerships.</p>
          </div>
          <div className="card p-8 rounded-[var(--theme-border-radius)] flex flex-col gap-4 text-center items-center justify-center relative overflow-hidden group">
            <h3 className="text-6xl md:text-7xl font-bold text-[var(--color-primary)]">15ms</h3>
            <p className="text-lg font-medium">Avg Latency</p>
            <p className="text-sm text-foreground/80">Global edge delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
