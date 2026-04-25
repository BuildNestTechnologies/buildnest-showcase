"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorDot = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      animate={{ x: pos.x - 6, y: pos.y - 6 }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
    >
      <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
    </motion.div>
  );
};

export default CursorDot;
