"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 90;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);

  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  // ✅ Preload images (VERY IMPORTANT)
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${String(i).padStart(2, "0")}_delay-0.067s.webp`;
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // ✅ Smooth render using requestAnimationFrame
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const nextFrame = Math.floor(latest);

    if (nextFrame === frameRef.current) return;

    frameRef.current = nextFrame;

    requestAnimationFrame(() => {
      renderFrame(nextFrame);
    });
  });

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const img = imagesRef.current[index];

    if (!canvas || !context || !img) return;

    const { width, height } = canvas;

    context.clearRect(0, 0, width, height);

    // ✅ object-fit: cover logic
    const scale = Math.max(
      width / img.width,
      height / img.height
    );

    const x = (width - img.width * scale) / 2;
    const y = (height - img.height * scale) / 2;

    context.drawImage(
      img,
      x,
      y,
      img.width * scale,
      img.height * scale
    );
  };

  // ✅ Handle resize properly
  useEffect(() => {
    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="h-[500vh]">
      <div className="sticky top-0 h-screen w-full z-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}