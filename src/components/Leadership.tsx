"use client";

import { motion } from "framer-motion";

export default function Leadership() {
  const roles = [
    { title: "Department Council President", period: "Final Year" },
    { title: "Class Representative", period: "2nd Year" },
    { title: "Event Head", period: "Inter-College Events" },
  ];

  return (
    <section className="bg-neutral-950 py-24 px-8 md:px-24 border-t border-white/5 relative z-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-16 md:gap-32 max-w-7xl w-full"
      >
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight sticky top-32">Leadership.</h2>
          <p className="mt-6 text-white/50 font-light text-lg">Focusing on responsibility, initiative, and team guidance.</p>
        </div>
        
        <div className="md:w-2/3 flex flex-col gap-8">
          {roles.map((role, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="border-b border-white/10 pb-8 group"
             >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-medium group-hover:translate-x-2 transition-transform duration-300">{role.title}</h3>
                  <span className="text-white/40 uppercase tracking-widest text-sm">{role.period}</span>
                </div>
             </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
