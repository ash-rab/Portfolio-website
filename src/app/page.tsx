"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { StoryOverlay } from "@/components/StoryOverlay";
import { Projects } from "@/components/Projects";
import { AboutSkillsAchievements } from "@/components/AboutSkillsAchievements";
import { Footer } from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative min-h-screen bg-[#121212]">
      <Navbar />
      
      {/* 500vh Scrolly section */}
      <div ref={containerRef} className="relative h-[500vh]">
        {/* Sticky wrapper that stays in view while scrolling through the 500vh container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <StoryOverlay scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Subsequent sections below the scrolly section */}
      <div className="relative z-20 bg-[#121212]">
        <AboutSkillsAchievements />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
