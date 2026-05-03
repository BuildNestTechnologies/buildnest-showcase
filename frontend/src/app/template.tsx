"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
 return (
  <motion.main
   initial={{ opacity: 0, scale: 0.98 }}
   animate={{ opacity: 1, scale: 1, rotate: 0 }}
   exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
   transition={{ duration: 0.4, ease: "anticipate" }}
   className="relative w-full h-full origin-center"
  >
   {children}
  </motion.main>
 );
}
