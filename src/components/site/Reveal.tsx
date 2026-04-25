import { motion } from "framer-motion";
import { ReactNode } from "react";

const Reveal = ({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);
export default Reveal;
