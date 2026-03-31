"use client";

import { motion, Variants } from "framer-motion";

export default function Skills() {
  const skills = [
    { title: "Financial Analysis" },
    { title: "Valuation (DCF, Comparable Analysis)" },
    { title: "Capital Markets" },
    { title: "Excel & Financial Modeling" },
    { title: "Tableau & Data Visualization" },
    { title: "Python (Basics)" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-slate-900 flex flex-col items-center justify-center py-24 text-white px-8 md:px-24">
      <div className="max-w-6xl w-full mx-auto">
        <motion.h3 
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white/90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Core Competencies
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 flex items-center justify-center text-center h-full"
            >
              <h4 className="text-lg md:text-xl font-medium text-white/90">{skill.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
