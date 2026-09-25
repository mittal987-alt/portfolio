"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor follow
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, [data-cursor]");
      if (interactive) {
        setHovered(true);
        const text = interactive.getAttribute("data-cursor");
        setHoverText(text || "");
      } else {
        setHovered(false);
        setHoverText("");
      }
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Inner sharp dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#00f3ff]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 0 : 1,
          opacity: hovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer magnetic neon ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border flex items-center justify-center transition-colors duration-200 ${
          hovered
            ? "border-cyan-400/80 bg-cyan-500/10 backdrop-blur-[1px] shadow-[0_0_20px_rgba(0,243,255,0.4)]"
            : "border-cyan-400/40 bg-transparent shadow-[0_0_10px_rgba(0,243,255,0.15)]"
        }`}
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 48 : 28,
          height: hovered ? 48 : 28,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {hoverText && (
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-300">
            {hoverText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
