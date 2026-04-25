const WaveDivider = ({ flip = false }: { flip?: boolean }) => (
 <div aria-hidden className={`pointer-events-none w-full ${flip ? "rotate-180" : ""}`}>
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-20">
   <defs>
    <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
     <stop offset="0%" stopColor="hsl(356 96% 60% / 0)" />
     <stop offset="50%" stopColor="hsl(356 96% 60% / 0.5)" />
     <stop offset="100%" stopColor="hsl(356 96% 60% / 0)" />
    </linearGradient>
   </defs>
   <path
    d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
    fill="hsl(var(--hero))"
   />
   <path
    d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40"
    stroke="url(#waveGrad)"
    strokeWidth="1"
    fill="none"
   />
  </svg>
 </div>
);
export default WaveDivider;
