"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Track continuous mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Apply snappy physics spring for "Awwwards" feel
  const springX = useSpring(mouseX, { stiffness: 600, damping: 35, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 35, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers hover on semantic interactive elements
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div 
        className="bg-white rounded-full relative flex items-center justify-center overflow-hidden"
        style={{ left: "-50%", top: "-50%" }}
        animate={{
          width: isHovering ? 80 : 16,
          height: isHovering ? 80 : 16,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Optional text or icons that only appear when scaled up */}
        <motion.span 
          className="text-[10px] font-bold text-black opacity-0"
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isHovering ? "" : ""}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
