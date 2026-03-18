"use client";

import { useState } from "react";

import { calendarDays, classPillars, classSchedule, typeColors } from "@/data/classes";

export default function Classes() {
  const [filter, setFilter] = useState<"all" | "am" | "pm">("all");

  const filtered =
    filter === "all"
      ? classSchedule
      : filter === "am"
        ? classSchedule.filter((session) => session.am)
        : classSchedule.filter((session) => !session.am);

  return (
    <section id="classes" className="px-8 py-16 lg:px-20 lg:py-24" style={{ background: "var(--black)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal-block">
            <div className="mb-4 text-xs uppercase tracking-[0.5em]" style={{ color: "var(--gold)" }}>
              Classes & Schedule
            </div>
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 6.5rem)", color: "var(--cream)", lineHeight: 0.92 }}
            >
              NO REST 
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: "1px var(--gold)" }}>FOR THE </span>
               DRIVEN.
            </h2>
          </div>
          <div className="flex flex-shrink-0 gap-2">
            {(["all", "am", "pm"] as const).map((f) => (
              <button
                key={f}
                data-hover
                onClick={() => setFilter(f)}
                className="px-5 py-2.5 text-xs uppercase tracking-[0.3em] transition-all duration-200"
                style={{
                  background: filter === f ? "var(--gold)" : "transparent",
                  color: filter === f ? "var(--black)" : "var(--cream-dim)",
                  border: `1px solid ${filter === f ? "var(--gold)" : "rgba(232,224,208,0.15)"}`,
                }}
              >
                {f === "all" ? "All Day" : f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {classPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[1.5rem] border p-6"
              style={{ borderColor: "rgba(212,168,83,0.12)", background: "rgba(28,26,22,0.52)" }}
            >
              <div className="mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
                {pillar.title}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="mb-4 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--gold)" }}>
            Weekly Calendar
          </div>
          <div className="overflow-hidden rounded-[1.75rem]" style={{ background: "rgba(212,168,83,0.14)" }}>
            <div className="grid gap-px md:grid-cols-7">
              {calendarDays.map((day) => (
                <div key={day.day} className="min-h-[190px] p-5" style={{ background: "var(--surface)" }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--gold)" }}>
                        {day.day}
                      </div>
                      <div className="mt-2 font-display text-4xl leading-none" style={{ color: "var(--cream)" }}>
                        {day.date}
                      </div>
                    </div>
                    <div className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em]" style={{ background: "rgba(197,255,62,0.08)", color: "var(--lime)" }}>
                      {day.focus}
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    {day.classes.map((entry) => (
                      <div
                        key={entry}
                        className="rounded-full border px-3 py-2 text-xs uppercase tracking-[0.16em]"
                        style={{ borderColor: "rgba(232,224,208,0.12)", color: "var(--cream-dim)" }}
                      >
                        {entry}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(212,168,83,0.15)" }}>
          {filtered.map((session) => (
            <div
              key={`${session.day}-${session.time}-${session.name}`}
              data-hover
              className="group px-3 py-5 transition-all duration-200"
              style={{ borderBottom: "1px solid rgba(212,168,83,0.1)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(212,168,83,0.04)";
                (e.currentTarget as HTMLElement).style.paddingLeft = "16px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.paddingLeft = "12px";
              }}
            >
              <div className="flex items-center gap-4 lg:hidden">
                <div className="w-20 flex-shrink-0" style={{ color: "var(--gold)" }}>
                  <div className="font-display text-xl">{session.time}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--cream-dim)" }}>
                    {session.day}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-xl" style={{ color: "var(--cream)" }}>{session.name}</div>
                  <div className="text-xs uppercase tracking-[0.15em]" style={{ color: typeColors[session.type] || "var(--cream-dim)" }}>
                    {session.type}
                  </div>
                </div>
                <div className="flex flex-shrink-0 items-center gap-2">
                  {session.spots === 0 ? (
                    <span
                      className="whitespace-nowrap px-2 py-1 text-xs uppercase tracking-[0.15em]"
                      style={{ background: "rgba(255,62,62,0.1)", color: "#FF3E3E", border: "1px solid rgba(255,62,62,0.3)" }}
                    >
                      Full
                    </span>
                  ) : (
                    <span
                      className="whitespace-nowrap px-2 py-1 text-xs uppercase tracking-[0.15em]"
                      style={{ background: "rgba(197,255,62,0.08)", color: "var(--lime)", border: "1px solid rgba(197,255,62,0.25)" }}
                    >
                      {session.spots} left
                    </span>
                  )}
                  <button
                    data-hover
                    disabled={session.spots === 0}
                    className="whitespace-nowrap px-3 py-1.5 text-xs uppercase tracking-[0.15em] transition-all duration-200 disabled:opacity-30 hidden min-[500px]:block"
                    style={{ border: "1px solid rgba(212,168,83,0.4)", color: "var(--gold)" }}
                    onMouseEnter={(e) => {
                      if (!(e.currentTarget as HTMLButtonElement).disabled) {
                        (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                        (e.currentTarget as HTMLElement).style.color = "var(--black)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                    }}
                  >
                    Book
                  </button>
                </div>
              </div>

              <div className="hidden items-center gap-4 lg:flex">
                <div className="w-24 flex-shrink-0">
                  <div className="font-display text-2xl" style={{ color: "var(--gold)" }}>{session.time}</div>
                  <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--cream-dim)" }}>{session.day}</div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="font-display text-2xl" style={{ color: "var(--cream)" }}>{session.name}</div>
                  <div className="mt-0.5 text-xs uppercase tracking-[0.2em]" style={{ color: typeColors[session.type] || "var(--cream-dim)" }}>
                    {session.type}
                  </div>
                </div>

                <div className="w-24 flex-shrink-0 text-sm" style={{ color: "var(--cream-dim)" }}>{session.duration}</div>
                <div className="w-28 flex-shrink-0 text-sm" style={{ color: "var(--cream-dim)" }}>{session.trainer}</div>

                <div className="w-36 flex-shrink-0">
                  {session.spots === 0 ? (
                    <span
                      className="inline-block whitespace-nowrap px-3 py-1.5 text-xs uppercase tracking-[0.15em]"
                      style={{ background: "rgba(255,62,62,0.1)", color: "#FF3E3E", border: "1px solid rgba(255,62,62,0.3)" }}
                    >
                      Full
                    </span>
                  ) : (
                    <span
                      className="inline-block whitespace-nowrap px-3 py-1.5 text-xs uppercase tracking-[0.15em]"
                      style={{ background: "rgba(197,255,62,0.08)", color: "var(--lime)", border: "1px solid rgba(197,255,62,0.25)" }}
                    >
                      {session.spots} spots left
                    </span>
                  )}
                </div>

                <div className="w-24 flex-shrink-0 text-right">
                  <button
                    data-hover
                    disabled={session.spots === 0}
                    className="px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-30"
                    style={{ border: "1px solid rgba(212,168,83,0.4)", color: "var(--gold)" }}
                    onMouseEnter={(e) => {
                      if (!(e.currentTarget as HTMLButtonElement).disabled) {
                        (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                        (e.currentTarget as HTMLElement).style.color = "var(--black)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                    }}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
