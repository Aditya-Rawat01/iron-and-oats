"use client";

import { useEffect, useRef } from "react";

export default function MarqueeTicker() {
  const innerRef = useRef<HTMLDivElement>(null);

  const items = [
    "TRAIN HARD","★","EAT CLEAN","★","COLD BREW","★",
    "POWER BOWLS","★","MORNING GRIND","★",
    "PROTEIN FIRST","★","LIFT HEAVY","★","SIP SLOW","★",
  ];

  const doubled = [...items, ...items];

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    let animationFrame: number;
    let start: number | null = null;

    const speed = 40; // pixels per second (adjust this)

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;

      const elapsed = (timestamp - start) / 1000; // seconds
      const distance = elapsed * speed;

      const width = el.scrollWidth / 2;

      el.style.transform = `translateX(${-distance % width}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      className="marquee-track py-4"
      style={{
        borderTop: "1px solid rgba(212,168,83,0.2)",
        borderBottom: "1px solid rgba(212,168,83,0.2)",
        background: "var(--surface)",
      }}
    >
      <div ref={innerRef} className="marquee-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-sm tracking-widest px-6"
            style={{
              color: item === "★" ? "var(--gold)" : "var(--cream-dim)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}