"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import CinematicOverlay from "./CinematicOverlay";

const FRAME_COUNT = 120; // We have 120 frames in public/sequence/

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          
          if (canvasRef.current && loadedImages[0]) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) drawImageCover(ctx, canvasRef.current, loadedImages[0]);
          }
        }
      };
      // Important: push to maintain order
      loadedImages.push(img);
    }
  }, []);

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (images.length === FRAME_COUNT && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      const frameIndex = Math.min(Math.max(Math.round(latest), 0), FRAME_COUNT - 1);
      
      if (ctx && images[frameIndex]) {
        drawImageCover(ctx, canvasRef.current, images[frameIndex]);
      }
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (images.length === FRAME_COUNT && canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        const frameIndex = Math.min(Math.max(Math.round(currentIndex.get()), 0), FRAME_COUNT - 1);
        if (ctx && images[frameIndex]) {
          drawImageCover(ctx, canvasRef.current, images[frameIndex]);
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, currentIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#020617]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        <CinematicOverlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

// Draw image with object-fit: cover logic
function drawImageCover(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const imgWidth = img.width;
  const imgHeight = img.height;
  
  const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
  const y = (canvasHeight / 2) - (imgHeight / 2) * scale;
  
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
}
