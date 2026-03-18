"use client";

import { useState } from "react";

import { menuCategories, menuItems, menuPrinciples } from "@/data/menu";

export default function Menu() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? menuItems : menuItems.filter((item) => item.cat === active);

  return (
    <section id="menu" className="px-8 py-16 lg:px-20 lg:py-24" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="reveal-block mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.5em]" style={{ color: "var(--gold)" }}>
              The Menu
            </div>
            <h2
              className="font-display leading-none"
              style={{
                fontSize: "clamp(3rem, 7vw, 7rem)",
                color: "var(--cream)",
                lineHeight: 0.92,
              }}
            >
              ENGINEERED
              <br />
              <span style={{ color: "var(--lime)" }}>TO PERFORM.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
            Every item macro-calculated. Every ingredient sourced with intent. No fillers, no compromises.
          </p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {menuPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[1.5rem] border p-6"
              style={{ borderColor: "rgba(212,168,83,0.12)", background: "rgba(14,13,11,0.32)" }}
            >
              <div className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
                {principle.title}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
                {principle.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-12 flex flex-wrap gap-2">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              data-hover
              className="px-5 py-2.5 text-xs uppercase tracking-[0.25em] transition-all duration-200"
              style={{
                background: active === category ? "var(--gold)" : "transparent",
                color: active === category ? "var(--black)" : "var(--cream-dim)",
                border: `1px solid ${active === category ? "var(--gold)" : "rgba(232,224,208,0.15)"}`,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "rgba(212,168,83,0.1)" }}>
          {filtered.map((item) => (
            <div
              key={item.name}
              data-hover
              className="group p-8 transition-all duration-300"
              style={{ background: "var(--surface)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
            >
              <div className="mb-4 text-4xl">{item.emoji}</div>
              <div className="mb-3 flex items-start justify-between">
                <div
                  className="px-2 py-1 text-xs uppercase tracking-[0.25em]"
                  style={{
                    background: `${item.tagColor}18`,
                    color: item.tagColor,
                    border: `1px solid ${item.tagColor}40`,
                  }}
                >
                  {item.tag}
                </div>
              </div>
              <h3
                className="mb-2 font-display text-2xl transition-colors duration-200 group-hover:text-[var(--gold)]"
                style={{ color: "var(--cream)", lineHeight: 1 }}
              >
                {item.name}
              </h3>
              <p className="mb-6 text-xs leading-relaxed" style={{ color: "var(--cream-dim)" }}>
                {item.desc}
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="font-display text-xl" style={{ color: "var(--gold)" }}>
                    {item.cal}
                  </div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "var(--cream-dim)" }}>
                    kcal
                  </div>
                </div>
                <div>
                  <div className="font-display text-xl" style={{ color: "var(--lime)" }}>
                    {item.protein}g
                  </div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "var(--cream-dim)" }}>
                    protein
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border p-8" style={{ borderColor: "rgba(212,168,83,0.12)", background: "rgba(14,13,11,0.24)" }}>
            <div className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--gold)" }}>
              Pairing Philosophy
            </div>
            <h3 className="font-display text-4xl leading-none" style={{ color: "var(--cream)" }}>
              PERFORMANCE FIRST,
              <br />
              NEVER CLINICAL.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
              The menu balances sharp utility with enough cafe character to feel memorable. Think post-lift bowls that still crave texture, and coffee service that belongs in a modern training club rather than an afterthought counter.
            </p>
          </div>
          <div className="rounded-[1.75rem] border p-8 flex flex-col gap-3 justify-center" style={{ borderColor: "rgba(212,168,83,0.12)", background: "var(--black)" }}>
            <div className="mb-3 text-md uppercase tracking-[0.4em]" style={{ color: "var(--lime)" }}>
              Service Notes
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
              Breakfast rush starts early, post-class windows stay tight, and evening service leans into recovery. This page now has enough space for future seasonal drops, featured collaborations, and downloadable menus when the client is ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
