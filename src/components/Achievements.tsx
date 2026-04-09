"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    { title: "Silver Medalist", desc: "Undergraduate Program", year: "2024" },
    { title: "Gold Medalist", desc: "Intra-College Quiz", year: "2024" },
    { title: "Bronze Medalist", desc: "Debate Competition", year: "2023" },
  ];

  return (
    <section className="bg-zinc-950 py-24 px-8 md:px-24 border-t border-white/5 relative z-20 flex flex-col items-center">
      <motion.div
        className="max-w-7xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Achievements.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full border border-white/10 bg-black/40 backdrop-blur-md p-8 rounded-2xl md:rounded-3xl flex flex-col justify-between hover:border-white/30 transition-colors duration-500">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
                <div className="mt-8 text-sm font-light text-white/40">{item.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
