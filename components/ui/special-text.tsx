"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

interface SpecialTextProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export function SpecialText({
  text,
  speed = 18,
  className = "",
  delay = 0,
}: SpecialTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      setIsScrambling(true);
      let iteration = 0;
      const chars = "abcdefghijklmnopqrstuvwxyz";

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " " || char === "." || char === "," || char === "-") return char;
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        iteration += 2;

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
          setIsScrambling(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, speed, delay]);

  return (
    <span
      ref={ref}
      className={className}
      data-scrambling={isScrambling || undefined}
    >
      {displayText}
    </span>
  );
}
