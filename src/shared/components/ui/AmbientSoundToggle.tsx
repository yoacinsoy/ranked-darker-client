"use client";

import { useAmbientAudio } from "@/shared/hooks/useAmbientAudio";

export default function AmbientSoundToggle() {
    const { isPlaying, toggle } = useAmbientAudio();

    return (
        <button
            onClick={toggle}
            className="fixed bottom-4 right-4 z-50 px-3 py-2 text-xs bg-black/60 border border-yellow-700 text-yellow-200 hover:text-yellow-400"
        >
            {isPlaying ? "Som: ON" : "Som: OFF"}
        </button>
    );
}
