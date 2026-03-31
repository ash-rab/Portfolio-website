"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-end z-[100] pointer-events-none">
      <div className="relative pointer-events-auto">
        <a
          href="https://www.linkedin.com/in/k-aakash-5a177b24a"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all duration-300 overflow-hidden group"
          aria-label="Connect on LinkedIn"
        >
          {/* Subtle glow effect behind icon */}
          <div className="absolute inset-0 bg-[#0077b5] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          
          <svg className="relative z-10 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-3 px-3 py-1.5 whitespace-nowrap bg-black/90 backdrop-blur-md border border-white/10 rounded-md text-xs font-medium text-white shadow-2xl"
            >
              Connect on LinkedIn
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
