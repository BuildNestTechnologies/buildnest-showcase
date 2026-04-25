"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1 second duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            {/* Dot that expands into a line */}
            <motion.div
              initial={{ width: "12px", height: "12px", borderRadius: "50%" }}
              animate={{ width: "100px", height: "4px", borderRadius: "2px" }}
              transition={{ delay: 0.2, duration: 0.4, ease: "anticipate" }}
              className="bg-primary"
            />
            
            {/* Text fades in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute top-6 font-display text-xl font-bold tracking-tight text-foreground"
            >
              Build<span className="text-primary">Nest</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
