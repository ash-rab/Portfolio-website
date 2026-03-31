"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer className="bg-black text-white px-8 md:px-24 py-24 md:py-32 flex flex-col items-center justify-center relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent pointer-events-none"></div>

      <motion.div
        className="max-w-4xl w-full mx-auto text-center flex flex-col items-center z-10"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Let&apos;s work together.</h2>
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-2xl">
          Let’s connect and build impactful financial strategies.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/k-aakash-5a177b24a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0077b5] text-white font-semibold tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_0_15px_rgba(0,119,181,0.5)] hover:shadow-[0_0_25px_rgba(0,119,181,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            Connect on LinkedIn
          </a>
          <a
            href="mailto:aakash302003@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Send Email
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-8 text-white/30 text-sm w-full text-center">
        © {new Date().getFullYear()} Aakash K. All rights reserved.
      </div>
    </footer>
  );
}