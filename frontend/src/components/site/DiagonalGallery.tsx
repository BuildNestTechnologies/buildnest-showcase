"use client";

import { motion, useScroll, useTransform, useSpring, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO } from "@/data/site";
import Reveal from "@/components/site/Reveal";

export default function DiagonalGallery() {
 const containerRef = useRef<HTMLDivElement>(null);
 
 // Base auto-scroll values
 const baseX1 = useMotionValue(0);
 const baseX2 = useMotionValue(0);
 
 useAnimationFrame((t, delta) => {
  // Increment base values for continuous movement
  baseX1.set(baseX1.get() - 0.5); // Move left
  baseX2.set(baseX2.get() + 0.5); // Move right
 });

 const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"]
 });

 // Combine auto-scroll with scroll transform
 const scrollX1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
 const scrollX2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
 
 const x1 = useSpring(useTransform(() => baseX1.get() + scrollX1.get()), { stiffness: 400, damping: 90 });
 const x2 = useSpring(useTransform(() => baseX2.get() + scrollX2.get()), { stiffness: 400, damping: 90 });

 // Triple the portfolio array for infinite-feeling loop
 const row1 = [...PORTFOLIO, ...PORTFOLIO, ...PORTFOLIO];
 const row2 = [...PORTFOLIO, ...PORTFOLIO, ...PORTFOLIO];

 return (
  <div 
   ref={containerRef} 
   className="relative overflow-hidden bg-[#0A0A0B] py-32 sm:py-40 border-y border-white/5"
  >
   <div className="absolute inset-0 bg-noise opacity-20 mix-blend-screen pointer-events-none" />
   
   <div className="container-px relative z-10 mx-auto max-w-7xl mb-24 text-center">
    <Reveal direction="down">
     <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
      Real Work for <span className="text-primary">Real Businesses</span>
     </h2>
     <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
      From e-commerce stores in Bhiwandi to enterprise software in Mumbai. We build digital products that drive growth.
     </p>
     <div className="mt-10">
      <Link href="/portfolio" className="inline-flex items-center gap-2 font-bold text-primary hover:underline group">
       View All 500+ Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
     </div>
    </Reveal>
   </div>

   <div className="relative left-1/2 -translate-x-1/2 w-[150vw] rotate-[-8deg] flex flex-col gap-6 md:gap-8 origin-center">
    {/* ROW 1 */}
    <motion.div style={{ x: x1 }} className="flex gap-6 md:gap-8">
     {row1.map((item, i) => (
      <div key={`row1-${i}`} className="group relative w-[300px] h-[200px] md:w-[450px] md:h-[300px] shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 transition-all duration-500 hover:border-primary/50">
       <Image 
        src={item.image} 
        alt={item.title} 
        width={450}
        height={300}
        className="object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-100" 
        style={{ width: '100%', height: '100%' }}
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{item.tag}</span>
        <p className="text-white font-bold text-lg">{item.title}</p>
       </div>
      </div>
     ))}
    </motion.div>

    {/* ROW 2 */}
    <motion.div style={{ x: x2 }} className="flex gap-6 md:gap-8">
     {row2.map((item, i) => (
      <div key={`row2-${i}`} className="group relative w-[300px] h-[200px] md:w-[450px] md:h-[300px] shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 transition-all duration-500 hover:border-primary/50">
       <Image 
        src={item.image} 
        alt={item.title} 
        width={450}
        height={300}
        className="object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-100" 
        style={{ width: '100%', height: '100%' }}
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{item.tag}</span>
        <p className="text-white font-bold text-lg">{item.title}</p>
       </div>
      </div>
     ))}
    </motion.div>
   </div>
  </div>
 );
}
