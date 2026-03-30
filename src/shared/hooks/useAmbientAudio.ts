import { useEffect, useRef, useState } from "react";

export function useAmbientAudio() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = new Audio("/audio/ambience-soundfx.mp3");
        audio.loop = true;
        audio.volume = 0.08; // volume baixo

        audioRef.current = audio;

        const startAudio = () => {
            if (!audioRef.current) return;

            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => { });

            // remove listeners depois da primeira interação
            window.removeEventListener("click", startAudio);
            window.removeEventListener("keydown", startAudio);
        };

        window.addEventListener("click", startAudio);
        window.addEventListener("keydown", startAudio);

        return () => {
            audio.pause();
        };
    }, []);

    const toggle = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return { isPlaying, toggle };
}
