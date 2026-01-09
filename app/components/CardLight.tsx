"use client";

import { useState, useRef } from "react";
import { myriadPro } from "../fonts";

export default function CardLight({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`${myriadPro.className} relative flex flex-col items-center gap-4 p-8 text-justify rounded-2xl bg-linear-to-br from-gray-800 to-gray-600 text-white border-4 border-gray-100 hover:border-gray-300 hover:cursor-pointer hover:scale-105 hover:drop-shadow-md/25 transition-all duration-300 overflow-hidden`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1), transparent 100%)`,
        }}
      />
      <h3 className="text-2xl font-bold relative z-10">{title}</h3>
      <p className="relative z-10">{description}</p>
    </div>
  );
}
