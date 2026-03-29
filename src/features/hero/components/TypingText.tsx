"use client";

import { useEffect, useState, useRef } from "react";

interface TypingTextProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetween?: number;
}

export default function TypingText({
    words,
    typingSpeed = 70,
    deletingSpeed = 40,
    delayBetween = 1500,
}: TypingTextProps) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        const currentWord = words[wordIndex];

        timerRef.current = window.setTimeout(() => {
            if (!isDeleting) {
                if (text.length < currentWord.length) {
                    setText(currentWord.substring(0, text.length + 1));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (text.length > 0) {
                    setText(currentWord.substring(0, text.length - 1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, !isDeleting && text === currentWord ? delayBetween : isDeleting ? deletingSpeed : typingSpeed);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetween]);

    return (
        <span>
            {text}
            <span className="ml-1 animate-blink" aria-hidden="true">
                █
            </span>
        </span>
    );
}
