"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ReadingProgress() {
 const { scrollYProgress } = useScroll();
 const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

 return (
  <div className="pointer-events-none fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 md:block" aria-hidden>
   <svg width="54" height="170" viewBox="0 0 54 170" fill="none">
    <path d="M28 4 C8 34 48 60 26 88 C5 114 45 134 24 166" stroke="rgba(251,54,64,0.16)" strokeWidth="5" strokeLinecap="round" />
    <motion.path d="M28 4 C8 34 48 60 26 88 C5 114 45 134 24 166" stroke="#FB3640" strokeWidth="5" strokeLinecap="round" style={{ pathLength }} />
   </svg>
  </div>
 );
}
