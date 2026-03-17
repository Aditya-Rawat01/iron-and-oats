"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 200);
          setTimeout(() => setHidden(true), 900);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "var(--black)" }}
    >
      <div className="w-full max-w-sm px-8">
        <div className="font-display text-5xl mb-2" style={{ color: "var(--gold)" }}>
          IRON & OATS
        </div>
        <div className="text-xs tracking-[0.4em] mb-8" style={{ color: "var(--cream-dim)" }}>
          {progress < 40 ? "WARMING UP..." : progress < 80 ? "LOADING THE RACK..." : "ALMOST READY..."}
        </div>
        <div className="w-full h-px" style={{ background: "var(--surface-2)" }}>
          <div
            className="h-px transition-all duration-150"
            style={{ width: `${Math.min(progress, 100)}%`, background: "var(--lime)" }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs" style={{ color: "var(--cream-dim)" }}>INITIALIZING</span>
          <span className="text-xs font-mono" style={{ color: "var(--lime)" }}>
            {Math.min(Math.floor(progress), 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
