import Image from "next/image";
import PulseGrid from "./PulseGrid";

export default function HeroSection() {
  const imagesCol1 = [
    "/images/abstract-neon-background_23-2150737847.jpg",
    "/images/ui-ux-representations-with-smartphone_23-2150201865.jpg",
    "/images/vertical-banners-sales-promo_23-2150653389.jpg",
  ];

  const imagesCol2 = [
    "/images/programming-code-executing-software-ui-computer-monitor-apartment-office_482257-122990.jpg",
    "/images/3d-abstract-colorful-composition-with-black-spheres_250435-1272.jpg",
    "/images/3d-graph-computer-illustration_23-2151884888.jpg",
  ];

  const col1 = [...imagesCol1, ...imagesCol1, ...imagesCol1, ...imagesCol1];
  const col2 = [...imagesCol2, ...imagesCol2, ...imagesCol2, ...imagesCol2];

  return (
    <section aria-label="Hero section" className="relative w-full h-fit py-hero-page-padding md:py-0 md:h-svh flex items-center">
      {/* ═══ Pulse Grid — top 15%, fade 30% left → 95% right ═══ */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-0" style={{ height: "15%" }}>
        <div className="absolute inset-0" style={{
          maskImage: "linear-gradient(to right, transparent 0%, transparent 30%, black 45%, black 90%, transparent 95%), linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 30%, black 45%, black 90%, transparent 95%), linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in"
        }}>
          <PulseGrid />
        </div>
      </div>

      <div className="w-[var(--width-content-width)] mx-auto flex flex-col md:flex-row gap-10 md:gap-15 items-center relative z-10">
        <div className="w-full flex-1 flex flex-col gap-6 md:gap-8 items-center md:items-start max-w-full">
          <div className="flex flex-col gap-4 items-center md:items-start max-w-full">
            <h2 className="slide-text text-7xl 2xl:text-8xl font-medium text-center md:text-left text-balance" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="Building Your Digital Nest">Building Your Digital Nest</h2>
            <p className="slide-text max-w-[80%] text-lg md:text-xl leading-[1.2] text-center md:text-left" style={{fontKerning: "none", textRendering: "optimizeSpeed"}} aria-label="We craft immersive 3D-styled websites, high-performance mobile apps, and enterprise-grade software to define the next generation of your business.">We craft immersive 3D-styled websites, high-performance mobile apps, and enterprise-grade software to define the next generation of your business.</p>
          </div>
          <div className="flex items-center gap-4">
            <button type="button" data-href="#portfolio" aria-label="Explore Work" className="stagger-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-12 px-8 min-w-0 w-fit max-w-full rounded-full disabled:cursor-not-allowed disabled:opacity-50 text-[var(--color-primary-cta-text)]">
              <div className="stagger-button-bg absolute inset-0 rounded-full transition-transform duration-[600ms] primary-button"></div>
              <span className="stagger-button-text relative text-base inline-block overflow-hidden truncate whitespace-nowrap font-medium">Explore Work</span>
            </button>
            <button type="button" data-href="#contact" aria-label="Contact Us" className="stagger-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-12 px-8 min-w-0 w-fit max-w-full rounded-full disabled:cursor-not-allowed disabled:opacity-50 text-[var(--color-secondary-cta-text)]">
              <div className="stagger-button-bg absolute inset-0 rounded-full transition-transform duration-[600ms] secondary-button"></div>
              <span className="stagger-button-text relative text-base inline-block overflow-hidden truncate whitespace-nowrap font-medium">Contact Us</span>
            </button>
          </div>
        </div>
        
        {/* Marquee Images (Replacing WebGL canvas with our Marquee implementation) */}
        <div className="w-full flex-1 h-[400px] md:h-[600px] relative overflow-hidden">
          <div className="w-full h-full overflow-hidden" style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"}}>
            <div className="h-full flex gap-4">
              <div className="flex-1 h-full min-h-0 overflow-hidden">
                <div className="flex flex-col gap-4 px-px animate-marquee-vertical hover:[animation-play-state:paused]">
                  {col1.map((src, idx) => (
                    <div key={idx} className="relative card aspect-square rounded-[var(--theme-border-radius-capped)] p-1 overflow-hidden flex-shrink-0 !aspect-[4/5]">
                      <div className="h-full w-full rounded-[calc(var(--theme-border-radius-capped)*0.92)] overflow-hidden">
                        <Image src={src} alt="Showcase" fill className="object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 h-full min-h-0 overflow-hidden">
                <div className="flex flex-col gap-4 px-px animate-marquee-vertical-reverse hover:[animation-play-state:paused]">
                  {col2.map((src, idx) => (
                    <div key={idx} className="relative card aspect-square rounded-[var(--theme-border-radius-capped)] p-1 overflow-hidden flex-shrink-0 !aspect-[4/5]">
                      <div className="h-full w-full rounded-[calc(var(--theme-border-radius-capped)*0.92)] overflow-hidden">
                        <Image src={src} alt="Showcase" fill className="object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
