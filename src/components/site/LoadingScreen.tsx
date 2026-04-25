import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-hero"
        >
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
            </div>
          </div>
          <h1 className="mt-8 font-display text-3xl font-bold tracking-tight text-white animate-brand-pulse">
            Build<span className="text-primary">Nest</span>
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Crafting your digital nest
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
