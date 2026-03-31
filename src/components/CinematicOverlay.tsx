"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function CinematicOverlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: 0% scroll, center
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 30% scroll, left aligned
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -50]);

  // Section 3: 60% scroll, right aligned
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

  // Section 4: 85% scroll, center/subtle fade
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none text-white z-10 flex flex-col justify-center px-8 md:px-24">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter drop-shadow-lg">Aakash K</h1>
        <p className="text-xl md:text-3xl mt-6 text-white/80 font-light drop-shadow-md">MBA Finance | Future Investment Banking Professional</p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-24"
      >
        <h2 className="text-3xl md:text-6xl font-semibold max-w-3xl leading-[1.2] tracking-tight text-white drop-shadow-2xl">
          I analyze businesses, financial performance, and capital markets.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center pr-8 md:pr-24 text-right"
      >
        <h2 className="text-3xl md:text-6xl font-semibold max-w-3xl leading-[1.2] tracking-tight text-white drop-shadow-2xl">
          Focused on valuation, M&A strategy, and investment decision-making.
        </h2>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-medium max-w-2xl leading-relaxed tracking-wide text-white/90 drop-shadow-xl">
          Turning data into strategic financial insights.
        </h2>
      </motion.div>
    </div>
  );
}
