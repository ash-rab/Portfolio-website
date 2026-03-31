"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Projects() {
  const projects = [
    { 
      title: "Marvel Financial Evolution", 
      desc: "Analysis of Marvel’s financial growth (1956–2025). ROI evaluation post Avengers: Endgame. Film financing & cost overruns analysis.", 
      tags: ["Excel", "Finance Models"] 
    },
    { 
      title: "Financial Analysis & Dashboard", 
      desc: "Data-driven insights focusing on Key Performance Indicators and revenue variance.", 
      tags: ["Excel", "Tableau"] 
    },
    { 
      title: "Valuation & Investment Analysis", 
      desc: "Business valuation techniques including Discounted Cash Flow (DCF) and Comparable Company Analysis.", 
      tags: ["Financial Modeling", "Valuation"] 
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen text-white px-8 py-32 md:px-24 relative z-20">
      <div className="max-w-6xl w-full mx-auto">
        <motion.h3 
          className="text-4xl md:text-6xl font-black mb-20 tracking-tighter text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((proj, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="group relative rounded-3xl p-8 md:p-10 backdrop-blur-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out overflow-hidden shadow-2xl hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.2)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen"></div>
              
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-3xl font-bold tracking-tight text-white/95 group-hover:text-white transition duration-500">{proj.title}</h4>
                <div className="w-12 h-12 rounded-full flex-shrink-0 bg-white/5 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-white group-hover:text-black transition-all duration-500 border border-white/10 group-hover:border-transparent cursor-pointer">
                  <ArrowRight strokeWidth={2.5} size={20} />
                </div>
              </div>
              
              <p className="text-gray-400 mb-10 font-light leading-relaxed text-lg max-w-sm group-hover:text-gray-300 transition duration-500">{proj.desc}</p>
              
              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-sm font-medium px-4 py-1.5 rounded-full border border-white/20 text-white/70 bg-white/5 group-hover:border-white/40 group-hover:text-white/90 transition duration-500 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-left font-medium text-white/80 group-hover:text-white transition-colors duration-300 mt-2 uppercase text-xs tracking-widest cursor-pointer w-max">
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
