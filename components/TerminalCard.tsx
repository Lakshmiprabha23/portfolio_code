"use client";

import { useEffect, useState } from "react";
import { terminalLines } from "@/lib/constants";

export default function TerminalCard() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      setDone(true);
      return;
    }

    const current = terminalLines[lineIndex];

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 22);
      return () => clearTimeout(t);
    }

    const next = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 380);
    return () => clearTimeout(next);
  }, [lineIndex, charIndex]);

  return (
    <div className="glass rounded-2xl p-6 shadow-glow w-full max-w-md font-mono text-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-success" />
        <span className="ml-3 text-text-secondary text-xs">system.log</span>
      </div>

      <div className="space-y-2 min-h-[168px]">
        {terminalLines.slice(0, lineIndex).map((line, i) => (
          <p key={i} className="text-text-secondary">
            <span className="text-success">{line.slice(0, 1)}</span>
            {line.slice(1)}
          </p>
        ))}

        {!done && lineIndex < terminalLines.length && (
          <p className="text-text-secondary">
            <span className="text-success">
              {terminalLines[lineIndex].slice(0, 1)}
            </span>
            {terminalLines[lineIndex].slice(1, charIndex)}
            <span className="inline-block w-2 h-4 align-middle bg-accent ml-0.5 animate-blink" />
          </p>
        )}
      </div>
    </div>
  );
}
