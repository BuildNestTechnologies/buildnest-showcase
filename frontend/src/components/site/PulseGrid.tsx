"use client";

import { useEffect, useRef } from "react";

interface Square {
  x: number;
  y: number;
  phase: number;     // random start phase
  speed: number;     // random pulse speed
  opacity: number;   // current opacity
}

export default function PulseGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const squaresRef = useRef<Square[]>([]);
  const animRef = useRef<number>(0);
  const isDarkRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check dark mode
    const checkDark = () => {
      isDarkRef.current = document.documentElement.classList.contains("dark");
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Size canvas to container
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initSquares(w, h);
    };

    // Create grid of squares
    // Create grid of squares — ultra-dense
    const gap = 4;      // tight grid spacing
    const initSquares = (w: number, h: number) => {
      const squares: Square[] = [];
      const cols = Math.ceil(w / gap);
      const rows = Math.ceil(h / gap);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          squares.push({
            x: c * gap + gap * 0.3,
            y: r * gap + gap * 0.3,
            phase: Math.random() * Math.PI * 2,
            speed: 1 + Math.random() * 7,   // 1-8 speed — wide variance
            opacity: 0,
          });
        }
      }
      squaresRef.current = squares;
    };

    resize();
    window.addEventListener("resize", resize);

    // Animation loop
    let lastTime = 0;
    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      if (dt > 0.1) { animRef.current = requestAnimationFrame(animate); return; }

      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      const dark = isDarkRef.current;
      const color = dark ? "255, 60, 100" : "184, 43, 64"; // Brighter pink for dark (#FF3C64)
      const maxOpacity = dark ? 0.97 : 0.42; // Peak at 100% for dark, 45% for light

      const squares = squaresRef.current;
      for (let i = 0; i < squares.length; i++) {
        const sq = squares[i];
        sq.phase += dt * sq.speed;
        // Pulse with sharper peaks for snappy random flicker
        const raw = (Math.sin(sq.phase) + 1) / 2;
        sq.opacity = 0.03 + maxOpacity * (raw * raw); // quadratic for sharper pulse

        ctx.fillStyle = `rgba(${color}, ${sq.opacity})`;
        ctx.fillRect(sq.x, sq.y, 0.8, 0.8);
      }

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
