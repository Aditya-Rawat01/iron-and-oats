"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 40, suffix: "+", label: "Expert Trainers", detail: "& Baristas" },
  { value: 5, suffix: "AM", label: "Early Birds Welcome" },
  { value: 100, suffix: "%", label: "Whole Ingredients" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1400;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Concept() {
  return (
    <section id="concept" className="px-8 py-16 lg:px-20 lg:py-24" style={{ background: "var(--black)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal-block">
            <div className="mb-5 text-xs uppercase tracking-[0.5em]" style={{ color: "var(--gold)" }}>
              The Concept
            </div>
            <h2
              className="mb-7 font-display leading-none"
              style={{ fontSize: "clamp(3rem, 6vw, 6.1rem)", color: "var(--cream)", lineHeight: 0.92 }}
            >
              WHERE THE
              <br className="lg:hidden" />
              <span style={{ color: "transparent", WebkitTextStroke: "1px var(--gold)" }}> WORK GETS</span>
              <br />
              DONE.
            </h2>
            <p className="mb-4 max-w-lg font-editorial text-base italic leading-relaxed" style={{ color: "var(--cream-dim)" }}>
              Iron & Oats was built for the ones who don&apos;t separate discipline from pleasure.
              Two worlds under one roof — a fully equipped training floor and a kitchen that
              actually understands what your body just went through.
            </p>
            <p className="max-w-lg text-sm leading-relaxed" style={{ color: "var(--cream-dim)", opacity: 0.7 }}>
              Every menu item is engineered around macros that matter. Every class is designed to
              break limits. And the espresso? It hits exactly as hard as it should.
            </p>
            <Link
              href="/menu"
              data-hover
              className="group mt-8 inline-block text-sm uppercase tracking-[0.3em]"
              style={{ color: "var(--lime)" }}
            >
              Explore The Menu{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-2">→</span>
            </Link>
          </div>

          <div className="relative reveal-block">
            <div
              className="hidden select-none text-center font-display leading-none md:block"
              style={{
                fontSize: "clamp(8rem, 16vw, 16rem)",
                color: "transparent",
                WebkitTextStroke: "1px rgba(212,168,83,0.12)",
              }}
            >
              I&O
            </div>
            <div className="grid gap-4 md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center md:gap-6 md:px-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[1.5rem] border px-5 py-5 text-center md:min-w-[220px] md:border-0 md:bg-transparent md:px-0 md:py-0"
                  style={{
                    borderColor: "rgba(212,168,83,0.12)",
                    background: "rgba(28,26,22,0.65)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="font-display text-4xl sm:text-5xl" style={{ color: "var(--gold)" }}>
                    <AnimatedNumber value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.28em]" style={{ color: "var(--cream-dim)" }}>
                    {s.label}
                    {"detail" in s && s.detail ? (
                      <span className="block pt-1 tracking-[0.18em] opacity-80">{s.detail}</span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
