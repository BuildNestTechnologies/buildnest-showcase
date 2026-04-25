"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const FloatingScrollTracker = () => {
 const { scrollYProgress } = useScroll();
 const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
 });

 return (
  <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
   <svg width="48" height="48" viewBox="0 0 100 100" className="rotate-[-90deg]">
    <circle
     cx="50"
     cy="50"
     r="40"
     className="fill-none stroke-primary/20 stroke-[8]"
    />
    <motion.circle
     cx="50"
     cy="50"
     r="40"
     className="fill-none stroke-primary stroke-[8]"
     style={{
      pathLength: scaleX,
      strokeLinecap: "round"
     }}
    />
   </svg>
  </div>
 );
};

export default FloatingScrollTracker;
