"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export default function RunningHighlight({ children }: { children: ReactNode }) {
  const highlightRef = useRef<HTMLSpanElement>(null);
  const hasEnteredRef = useRef(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const element = highlightRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEnteredRef.current) {
          hasEnteredRef.current = true;
          setIsAnimating(true);
        } else if (!entry.isIntersecting) {
          hasEnteredRef.current = false;
          setIsAnimating(false);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={highlightRef}
      className={`gradient-highlight${isAnimating ? " is-animating" : ""}`}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      {children}
    </span>
  );
}
