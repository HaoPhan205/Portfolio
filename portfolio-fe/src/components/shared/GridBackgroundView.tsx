"use client";
import React, { useState, useEffect, useRef } from "react";

export const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;

      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        setMousePosition({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out pointer-events-none"
      style={{
        backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
      `,
        backgroundSize: "40px 40px",
        animation: "moveGrid 20s linear infinite",
        transform: `translate(${mousePosition.x / 30}px, ${
          mousePosition.y / 30
        }px)`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 overflow-hidden" />
      <style>{`
      @keyframes moveGrid {
        0% { background-position: 0 0; }
        100% { background-position: 80px 80px; }
      }
    `}</style>
    </div>
  );
};

export default function GridBackgroundView() {
  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-white">Welcome</h1>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes moveGrid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 80px 80px;
          }
        }
      `}</style>
    </div>
  );
}
