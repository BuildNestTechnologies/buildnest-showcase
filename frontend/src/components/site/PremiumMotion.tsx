"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
 useEffect(() => {
  if (typeof window === "undefined") return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  // Tweak for heavy, smooth, slightly delayed (premium feel)
  const lenis = new Lenis({
   duration: 1.4, // Increased for delayed/heavy feel
   smoothWheel: true,
   wheelMultiplier: 0.85, // Slower wheel multiplier for heavier feel
   touchMultiplier: 1.2,
   syncTouch: false,
   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Custom ease-out
  });

  let frameId = 0;
  const raf = (time: number) => {
   lenis.raf(time);
   frameId = window.requestAnimationFrame(raf);
  };

  const update = () => ScrollTrigger.update();
  lenis.on("scroll", update);
  frameId = window.requestAnimationFrame(raf);

  ScrollTrigger.scrollerProxy(document.documentElement, {
   scrollTop(value) {
    if (typeof value === "number") {
     lenis.scrollTo(value, { immediate: true });
    }
    return window.scrollY;
   },
   getBoundingClientRect() {
    return {
     top: 0,
     left: 0,
     width: window.innerWidth,
     height: window.innerHeight,
    };
   },
  });

  ScrollTrigger.refresh();

  return () => {
   lenis.off("scroll", update);
   lenis.destroy();
   window.cancelAnimationFrame(frameId);
  };
 }, []);

 return null;
}

export function ParallaxLayer({
 children,
 speed = 0.18,
 className = "",
}: {
 children: ReactNode;
 speed?: number;
 className?: string;
}) {
 const ref = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
 const y = useTransform(scrollYProgress, [0, 1], [`${speed * 140}px`, `${speed * -140}px`]);

 return (
  <motion.div ref={ref} style={{ y }} className={className}>
   {children}
  </motion.div>
 );
}

export function RevealText({
 children,
 className = "",
 delay = 0,
}: {
 children: string;
 className?: string;
 delay?: number;
}) {
 return (
  <span className={`inline-flex overflow-hidden ${className}`} aria-label={children}>
   <motion.span
    aria-hidden
    initial={{ y: "102%" }}
    whileInView={{ y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    className="inline-block"
   >
    {children}
   </motion.span>
  </span>
 );
}

export function MaskRevealText({
 children,
 className = "",
 delay = 0,
}: {
 children: ReactNode;
 className?: string;
 delay?: number;
}) {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, amount: 0.1 });

 return (
  <span ref={ref} className={`inline-flex overflow-hidden ${className}`}>
   <motion.span
    initial={{ y: "120%", rotate: 2, opacity: 0 }}
    animate={isInView ? { y: 0, rotate: 0, opacity: 1 } : { y: "120%", rotate: 2, opacity: 0 }}
    transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    className="inline-block origin-bottom-left"
   >
    {children}
   </motion.span>
  </span>
 );
}

export function Magnetic({
 children,
 className = "",
 strength = 0.3,
}: {
 children: ReactNode;
 className?: string;
 strength?: number;
}) {
 const ref = useRef<HTMLDivElement>(null);
 const x = useMotionValue(0);
 const y = useMotionValue(0);
 const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
 const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

 return (
  <motion.div
   ref={ref}
   style={{ x: springX, y: springY }}
   className={className}
   onMouseMove={(event) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set((event.clientX - bounds.left - bounds.width / 2) * strength);
    y.set((event.clientY - bounds.top - bounds.height / 2) * strength);
   }}
   onMouseLeave={() => {
    x.set(0);
    y.set(0);
   }}
  >
   {children}
  </motion.div>
 );
}

export function MagneticButton({
 href,
 children,
 className = "",
}: {
 href: string;
 children: ReactNode;
 className?: string;
}) {
 return (
  <Magnetic strength={0.4}>
   <Link href={href} className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full ${className}`}>
    <span className="absolute inset-0 bg-primary/20 translate-y-[100%] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
    <motion.span whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative z-10 flex items-center gap-2">
     {children}
    </motion.span>
   </Link>
  </Magnetic>
 );
}

export function AnimatedLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
 return (
  <Link href={href} className={`relative inline-flex items-center gap-2 overflow-hidden ${className}`}>
   <span className="group">
    {children}
    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
   </span>
  </Link>
 );
}

export function AsymmetricReveal({
 children,
 index,
 className = "",
}: {
 children: ReactNode;
 index: number;
 className?: string;
}) {
 const directions = [
  { x: -50, y: 30 },
  { x: 50, y: 30 },
  { x: 0, y: 60 },
  { x: -30, y: 50 },
  { x: 30, y: 50 },
 ];
 const dir = directions[index % directions.length];

 return (
  <motion.div
   initial={{ opacity: 0, x: dir.x, y: dir.y, scale: 0.95 }}
   whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
   viewport={{ once: true, amount: 0.1 }}
   transition={{ duration: 1.2, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
   className={className}
  >
   <motion.div
    whileHover={{ scale: 1.03, rotate: (index % 2 === 0 ? 1 : -1) * 1.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="h-full w-full"
   >
    {children}
   </motion.div>
  </motion.div>
 );
}

export function ScrollSkew({ children, className = "" }: { children: ReactNode; className?: string }) {
 const [skew, setSkew] = useState(0);
 const last = useRef(0);

 useEffect(() => {
  let timeout: ReturnType<typeof setTimeout>;
  const onScroll = () => {
   const velocity = window.scrollY - last.current;
   last.current = window.scrollY;
   setSkew(Math.max(-4, Math.min(4, velocity * -0.06)));
   clearTimeout(timeout);
   timeout = setTimeout(() => setSkew(0), 80);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
   window.removeEventListener("scroll", onScroll);
   clearTimeout(timeout);
  };
 }, []);

 return (
  <motion.div animate={{ skewY: skew }} transition={{ type: "spring", stiffness: 200, damping: 26 }} className={className}>
   {children}
  </motion.div>
 );
}

export function usePinnedHorizontal(trackRef: React.RefObject<HTMLElement | null>, progressRef: React.RefObject<HTMLElement | null>) {
 useEffect(() => {
  const track = trackRef.current;
  const progress = progressRef.current;
  if (!track || !progress) return;

  const mm = gsap.matchMedia();
  mm.add("(min-width: 900px)", () => {
   const scrollWidth = () => Math.max(0, track.scrollWidth - window.innerWidth + 100);
   const cards = track.querySelectorAll('.service-card');
   
   // Set initial states for desktop
   gsap.set(cards, { scale: 0.95, opacity: 0.6, transformOrigin: "center center" });
   if(cards[0]) gsap.set(cards[0], { scale: 1.02, opacity: 1 });

   const animation = gsap.to(track, {
    x: () => -scrollWidth(),
    ease: "none",
    scrollTrigger: {
     trigger: progress,
     start: "top 96px", // Offset for standard sticky nav
     end: "bottom bottom",
     scrub: 1.1,
     invalidateOnRefresh: true,
     onUpdate: (self) => {
        // active card scale/contrast based on progress
        const progressVal = self.progress;
        const totalCards = cards.length;
        const activeIndex = Math.min(Math.floor(progressVal * totalCards), totalCards - 1);
        
        cards.forEach((card, i) => {
            if (i === activeIndex) {
                gsap.to(card, { scale: 1.02, opacity: 1, duration: 0.4, ease: "power2.out", overwrite: "auto" });
            } else {
                gsap.to(card, { scale: 0.95, opacity: 0.6, duration: 0.4, ease: "power2.out", overwrite: "auto" });
            }
        });
     }
    },
   });

   return () => {
    // Reset on unmount/mobile
    gsap.set(cards, { clearProps: "all" });
    animation.scrollTrigger?.kill();
    animation.kill();
   };
  });

  return () => mm.revert();
 }, [trackRef, progressRef]);
}

