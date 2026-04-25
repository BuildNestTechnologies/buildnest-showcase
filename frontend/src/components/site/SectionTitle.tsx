import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <div className={`mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-primary/60" /> {eyebrow}
      </div>
    )}
    <h2 className="text-balance font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {subtitle && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>}
  </motion.div>
);

export default SectionTitle;
