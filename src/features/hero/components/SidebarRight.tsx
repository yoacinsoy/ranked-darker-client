"use client";

import { CircleDot } from "lucide-react";
import { useState } from "react";

const indicators = ["/robin.png", "/hero-background.svg", "/yo.png"];

export default function SidebarRight() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      id="slider-controls"
      className="absolute top-1/2 right-6 -translate-y-1/2 hidden sm:flex flex-col items-center gap-4 text-zinc-300 z-60"
    >
      <div className="my-2 h-6 w-px bg-white/30" />

      {indicators.map((indicator, i) => (
        <button
          key={indicator}
          type="button"
          onClick={() => setCurrentSlide(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={currentSlide === i ? "true" : undefined}
          className={`transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
            currentSlide === i
              ? "scale-125 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <CircleDot
            className={`h-5 w-5 ${currentSlide === i ? "fill-white" : ""}`}
          />
        </button>
      ))}

      <div className="my-2 h-6 w-px bg-white/30" />
    </div>
  );
}
