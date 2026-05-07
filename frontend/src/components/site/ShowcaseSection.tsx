import Image from "next/image";

export default function ShowcaseSection() {
  return (
    <section id="portfolio" aria-label="Our showcase projects" className="w-full py-20 relative">
      <div className="w-[var(--width-content-width)] mx-auto flex flex-col gap-12 relative z-10">
        <div className="w-full flex flex-col gap-3 items-center md:items-start text-center md:text-left">
          <h2 className="slide-text text-5xl md:text-6xl font-medium" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="Showcase Projects">Showcase Projects</h2>
          <p className="slide-text text-lg text-foreground max-w-2xl" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="A selection of high-performance websites and applications engineered by BuildNest.">A selection of high-performance websites and applications engineered by BuildNest.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="card p-4 rounded-[var(--theme-border-radius)] flex flex-col gap-6 hover-portfolio-zoom relative group">
            <div className="w-full aspect-[4/3] rounded-[var(--theme-border-radius-capped)] overflow-hidden relative">
              <Image src="/images/abstract-neon-background_23-2150737847.jpg" alt="E-Commerce Platform" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 z-10 px-2 pb-2">
              <h3 className="text-2xl font-medium">E-Commerce Platform</h3>
              <p className="text-sm text-foreground/80">Headless Shopify + Next.js architecture.</p>
            </div>
          </div>
          <div className="card p-4 rounded-[var(--theme-border-radius)] flex flex-col gap-6 hover-portfolio-zoom relative group">
            <div className="w-full aspect-[4/3] rounded-[var(--theme-border-radius-capped)] overflow-hidden relative">
              <Image src="/images/ui-ux-representations-with-smartphone_23-2150201865.jpg" alt="FinTech Dashboard" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 z-10 px-2 pb-2">
              <h3 className="text-2xl font-medium">FinTech Dashboard</h3>
              <p className="text-sm text-foreground/80">Real-time data visualization with React and WebGL.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button type="button" aria-label="View All Projects" className="stagger-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-12 px-8 min-w-0 w-fit max-w-full rounded-full disabled:cursor-not-allowed disabled:opacity-50 text-[var(--color-secondary-cta-text)]">
            <div className="stagger-button-bg absolute inset-0 rounded-full transition-transform duration-[600ms] secondary-button"></div>
            <span className="stagger-button-text relative text-base inline-block overflow-hidden truncate whitespace-nowrap font-medium">View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
}
