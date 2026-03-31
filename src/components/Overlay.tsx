"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none text-white z-10 flex flex-col justify-center px-8 md:px-24">
      {/* Section 1: Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter">My Name.</h1>
        <p className="text-xl md:text-3xl mt-6 text-white/70 font-light">Creative Developer.</p>
      </motion.div>

      {/* Section 2: Left aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-24"
      >
        <h2 className="text-4xl md:text-7xl font-semibold max-w-2xl leading-[1.1] tracking-tight text-white drop-shadow-2xl">
          I build digital experiences.
        </h2>
      </motion.div>

      {/* Section 3: Right aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center pr-8 md:pr-24 text-right"
      >
        <h2 className="text-4xl md:text-7xl font-semibold max-w-2xl leading-[1.1] tracking-tight text-white drop-shadow-2xl">
          Bridging design and engineering.
        </h2>
      </motion.div>
    </div>
  );
}
