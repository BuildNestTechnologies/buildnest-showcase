"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "diagonal-left" | "diagonal-right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
}

const Reveal = ({ children, delay = 0, direction = "up" }: RevealProps) => {
  // Mobile fallback for complex animations (disable diagonal/horizontal on mobile)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const getVariants = () => {
    let x = 0;
    let y = 0;
    
    // Simplify on mobile
    if (isMobile) {
      if (direction !== "none") y = 20;
    } else {
      switch (direction) {
        case "up": y = 30; break;
        case "down": y = -30; break;
        case "left": x = 30; break;
        case "right": x = -30; break;
        case "diagonal-left": x = 30; y = 30; break;
        case "diagonal-right": x = -30; y = 30; break;
        case "none": break;
      }
    }

    return {
      hidden: { opacity: 0, x, y },
      visible: { opacity: 1, x: 0, y: 0 }
    };
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
