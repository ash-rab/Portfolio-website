"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-[#020617] flex flex-col items-center justify-center py-32 text-white px-8 md:px-24">
      <motion.div 
        className="max-w-4xl w-full mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase mb-8">About Me</h2>
        <p className="text-2xl md:text-5xl font-light leading-snug md:leading-tight text-white/90">
          MBA Finance student with a strong foundation in financial analysis, valuation, and capital markets. Passionate about strategic decision-making, M&A analysis, and portfolio management.
        </p>
      </motion.div>
    </div>
  );
}
