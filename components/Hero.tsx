"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gymRef = useRef<HTMLDivElement>(null);
  const cafeRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(40);
  const currentX = useRef(40);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      targetX.current = 40 + (x - 50) * 0.14;
    };

    let raf: number;
    const animate = () => {
      currentX.current += (targetX.current - currentX.current) * 0.055;
      const pos = currentX.current;
      if (gymRef.current) {
        gymRef.current.style.clipPath = `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`;
      }
      if (cafeRef.current) {
        cafeRef.current.style.clipPath = `polygon(${pos}% 0, 100% 0, 100% 100%, ${pos}% 100%)`;
      }
      if (dividerRef.current) dividerRef.current.style.left = `${pos}%`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const hero = heroRef.current;
    hero?.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      hero?.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] overflow-hidden"
      style={{ background: "var(--black)" }}
    >
      <div
        ref={gymRef}
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 0, 40% 0, 40% 100%, 0 100%)",
          background: `radial-gradient(ellipse at 30% 40%, rgba(212,168,83,0.1) 0%, transparent 60%),
            linear-gradient(135deg, #1a1208 0%, #2d2010 50%, #1a1208 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,83,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute bottom-32 left-16 h-48 w-48 rounded-full opacity-10"
          style={{ border: "12px solid var(--gold)" }}
        />
        <div
          className="absolute bottom-20 left-10 h-32 w-32 rounded-full opacity-5"
          style={{ border: "8px solid var(--gold)" }}
        />
        <div
          className="absolute left-8 top-40 font-display text-8xl opacity-[0.06]"
          style={{ color: "var(--gold)" }}
        >
          LIFT
        </div>
      </div>

      <div
        ref={cafeRef}
        className="absolute inset-0"
        style={{
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 40% 100%)",
          background: `radial-gradient(ellipse at 70% 60%, rgba(197,255,62,0.05) 0%, transparent 60%),
            linear-gradient(135deg, #0d1010 0%, #111a12 50%, #0d1010 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(197,255,62,0.7) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute right-16 top-32 h-40 w-40 rounded-full opacity-10"
          style={{ border: "2px solid var(--lime)" }}
        />
        <div
          className="absolute right-10 top-24 h-60 w-60 rounded-full opacity-5"
          style={{ border: "1px solid var(--lime)" }}
        />
        <div
          className="absolute bottom-40 right-8 font-display text-8xl opacity-[0.06]"
          style={{ color: "var(--lime)" }}
        >
          SIP
        </div>
      </div>

      <div
        ref={dividerRef}
        className="absolute top-0 bottom-0 z-10 w-px"
        style={{
          left: "40%",
          background:
            "linear-gradient(to bottom, transparent 0%, var(--gold) 30%, var(--lime) 70%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
        style={{ paddingTop: "80px", paddingBottom: "90px" }}
      >
        <div
          className="fade-up mb-8 text-xs uppercase tracking-[0.5em]"
          style={{ color: "var(--gold)" }}
        >
          Established 2024 — New Delhi
        </div>

        <h1 className="font-display leading-none">
          <div
            className="fade-up-delay-1 block"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 13rem)",
              color: "var(--cream)",
              lineHeight: 0.88,
            }}
          >
            TRAIN.
          </div>
          <div
            className="fade-up-delay-2 block"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 13rem)",
              color: "transparent",
              lineHeight: 0.88,
              WebkitTextStroke: "clamp(0.5px, 0.4vw, 2px) var(--gold)",
              filter: "drop-shadow(0 0 12px rgba(212,168,83,0.25))",
            }}
          >
            FUEL.
          </div>
          <div
            className="fade-up-delay-3 block"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 13rem)",
              color: "var(--lime)",
              lineHeight: 0.88,
            }}
          >
            REPEAT.
          </div>
        </h1>

        <p
          className="fade-up-delay-4 mt-6 max-w-sm font-editorial text-lg italic"
          style={{ color: "var(--cream-dim)" }}
        >
          You didn&apos;t come here to settle. Not at the rack. Not at the
          table.
        </p>

        <div className="fade-up-delay-4 mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/#membership"
            data-hover
            className="px-8 py-3.5 text-sm font-medium uppercase tracking-[0.3em] transition-all duration-200"
            style={{ background: "var(--gold)", color: "var(--black)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--lime)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
            }}
          >
            Join the Ritual
          </Link>
          <Link
            href="/menu"
            data-hover
            className="px-8 py-3.5 text-sm uppercase tracking-[0.3em] transition-all duration-200"
            style={{
              border: "1px solid rgba(232,224,208,0.35)",
              color: "var(--cream)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--cream)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(232,224,208,0.35)";
            }}
          >
            Explore Menu
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-4 gap-2 px-6 py-4"
        style={{
          borderTop: "1px solid rgba(212,168,83,0.15)",
          background: "rgba(14,13,11,0.75)",
          backdropFilter: "blur(10px)",
        }}
      >
        {[
          { num: "12+", label: "Classes Weekly" },
          { num: "48", label: "Menu Items" },
          { num: "2,400", label: "Sq.ft Space" },
          { num: "6AM", label: "Opens Daily" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div
              className="font-display text-xl lg:text-2xl"
              style={{ color: "var(--gold)" }}
            >
              {s.num}
            </div>
            <div
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--cream-dim)" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute bottom-24 right-8 z-20 hidden flex-col items-center gap-2 lg:flex"
        style={{ color: "var(--cream-dim)" }}
      >
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div
          className="mt-1 h-10 w-px"
          style={{
            background:
              "linear-gradient(to bottom, var(--cream-dim), transparent)",
          }}
        />
      </div>
    </section>
  );
}
