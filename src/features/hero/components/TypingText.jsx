"use client";

import { useEffect, useState } from "react";

/**
 * Animates through an array of words with a typewriter effect.
 *
 * @param {{ words: string[], typingSpeed?: number, deletingSpeed?: number, delayBetween?: number }} props
 */
export default function TypingText({
  words = [],
  typingSpeed = 70,
  deletingSpeed = 40,
  delayBetween = 1500,
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <span>
      {text}
      <span className="ml-1 animate-blink" aria-hidden="true">
        █
      </span>
    </span>
  );
}
