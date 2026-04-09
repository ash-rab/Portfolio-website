"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Visibility control
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.45], [1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

  // Parallax movement
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.7], [50, -50]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], [50, -50]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center text-white">

      {/* Section 1 */}
      <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center">
        <h1 className="text-5xl font-bold">Aakash K</h1>
        <p className="text-xl mt-2">MBA Finance | Future Investment Banking Professional</p>
      </motion.div>

      {/* Section 2 */}
      <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute left-10 top-1/3 max-w-md">
        <p className="text-xl">
          I analyze businesses, financial performance, and capital markets.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute right-10 top-1/2 max-w-md text-right">
        <p className="text-xl">
          Focused on valuation, M&A strategy, and investment decision-making.
        </p>
      </motion.div>

      {/* Section 4 */}
      <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute bottom-20 text-center">
        <p className="text-lg">
          Turning data into strategic financial insights.
        </p>
      </motion.div>

    </div>
  );
}