"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
        }
        frame = 0;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 w-[500px] h-[500px] rounded-full opacity-[0.07] will-change-transform"
      style={{
        background:
          "radial-gradient(circle, #8B5CF6 0%, #06B6D4 45%, transparent 75%)",
        filter: "blur(40px)",
      }}
    />
  );
}
