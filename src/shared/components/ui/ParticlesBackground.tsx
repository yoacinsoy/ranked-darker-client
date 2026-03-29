"use client";

import { useRef } from "react";
import { useParticles } from "@/shared/hooks/useParticles";

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useParticles(canvasRef);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-5"
            style={{ opacity: 0.6 }}
        />
    );
}
