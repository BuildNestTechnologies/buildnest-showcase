"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Smartphone, Sparkle, Monitor, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Components ---

function StaggerText({ text, className }: { text: string; className?: string }) {
  return (
    <h2 className={cn("flex flex-wrap justify-center gap-x-[0.3em] overflow-hidden", className)}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="flex overflow-hidden">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: (i * 0.1) + (j * 0.03),
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h2>
  );
}

function MarqueeRow({ tags, reverse = false, duration = 30 }: { tags: string[]; reverse?: boolean; duration?: number }) {
  return (
    <div className="flex w-full overflow-hidden py-1">
      <motion.div
        initial={{ x: reverse ? "-20%" : "0%" }}
        animate={{ x: reverse ? ["-20%", "-70%"] : ["-70%", "-20%"] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-2 whitespace-nowrap"
      >
        {[...tags, ...tags, ...tags, ...tags, ...tags].map((tag, i) => (
          <span
            key={i}
            className="px-4 py-1.5 rounded-full border border-border/40 bg-card/40 backdrop-blur-md text-[10px] uppercase tracking-widest text-foreground/80 font-medium"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// --- Data ---

const techCards = [
  {
    id: "3d",
    icon: Sparkle,
    title: "3D Web Experience",
    description:
      "Utilizing WebGL and custom shaders to create immersive environments that dramatically increase user dwell time and brand retention.",
    tags: ["Three.js", "WebGL", "Interactive 3D", "Motion Design", "Immersive UI", "Custom Shaders"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Dev",
    description:
      "Cross-platform mobile applications that look and feel like native experiences.",
    image: "/images/ui-ux-representations-with-smartphone_23-2150201865.jpg",
  },
  {
    id: "enterprise",
    icon: Monitor,
    title: "Enterprise Software",
    description:
      "Scalable architecture and robust logic for your complex business needs.",
    image: "/images/programming-code-executing-software-ui-computer-monitor-apartment-office_482257-122990.jpg",
  },
];

// --- Sub-components ---

function TechCard({ card, index }: { card: typeof techCards[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth springs for the circle - Snappier for better feel
  const springX = useSpring(mouseX, { stiffness: 200, damping: 12 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 12 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Magnetic pull calculation - refined for more sensitivity
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Limit the icon movement within the visual area
    const limitX = rect.width / 2 - 40;
    const limitY = 100;
    mouseX.set(Math.max(-limitX, Math.min(limitX, x * 0.5)));
    mouseY.set(Math.max(-limitY, Math.min(limitY, y * 0.5)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer rounded-[2rem] overflow-hidden bg-card border border-border/40 flex flex-col h-full hover:border-primary/30 transition-colors duration-500"
    >
      {/* Visual area */}
      <div className="relative h-[280px] w-full overflow-hidden flex items-center justify-center bg-muted/10">
        
        {/* Card 1: Alternating Marquees */}
        {card.id === "3d" && (
          <div className="absolute inset-0 flex flex-col justify-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-700"
               style={{ 
                 maskImage: "radial-gradient(ellipse at center, black 0%, black 30%, transparent 70%)",
                 WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, black 30%, transparent 70%)"
               }}>
            <MarqueeRow tags={card.tags || []} duration={25} />
            <MarqueeRow tags={card.tags || []} reverse duration={20} />
            <MarqueeRow tags={card.tags || []} duration={35} />
          </div>
        )}

        {/* Cards 2 & 3: Image with Zoom */}
        {card.image && (
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}

        {/* Vertical Tracking Line */}
        <motion.div 
          style={{ x: springX }}
          className="absolute top-0 bottom-0 w-[1.5px] bg-primary/30 pointer-events-none z-10 blur-[0.5px]"
        />

        {/* Magnetic Circle - No AI icons, just a clean engineering dot */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute z-20 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl bg-primary text-white"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </motion.div>
      </div>

      {/* Text area */}
      <div className="p-7 flex flex-col gap-3 flex-grow bg-card relative z-10">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-semibold tracking-tight">
            {card.title}
          </h3>
          <motion.div
            animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0 }}
            className="text-primary"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
        <p className="text-sm text-foreground/60 leading-relaxed max-w-[90%]">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function TechnicalCoreSection() {
  return (
    <section
      id="services"
      className="w-full py-32 relative overflow-hidden"
    >
      <div className="w-[var(--width-content-width)] mx-auto flex flex-col gap-16 relative z-10">
        {/* Header Section */}
        <div className="w-full flex flex-col gap-6 items-center text-center">
          <div className="space-y-4">
            <StaggerText 
              text="Our Technical Core" 
              className="text-5xl md:text-7xl font-medium tracking-tight" 
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto"
            >
              Comprehensive solutions designed for scale and aesthetic impact.
              We build bespoke digital infrastructures that look premium.
            </motion.p>
          </div>

          {/* CTA Button - Matched reference size h-9 px-6 */}
          <button
            type="button"
            className="stagger-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-9 px-6 mt-4 rounded-full text-white group"
          >
            <div className="stagger-button-bg absolute inset-0 rounded-full transition-transform duration-[600ms] primary-button group-hover:scale-105"></div>
            <span className="relative text-[10px] font-bold tracking-[0.2em] uppercase inline-block">
              Explore Tech
            </span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {techCards.map((card, i) => (
            <TechCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
