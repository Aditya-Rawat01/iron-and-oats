const spaces = [
  {
    label: "The Floor",
    desc: "2,400 sq.ft of raw performance",
    bg: "linear-gradient(160deg, #2d1f08 0%, #1a1208 60%, #0e0d0b 100%)",
    emoji: "🏋️",
    stat: "2,400 SQ.FT",
    tall: true,
  },
  {
    label: "The Bar",
    desc: "Where recovery begins",
    bg: "linear-gradient(160deg, #0d1a0d 0%, #0d1010 60%, #0e0d0b 100%)",
    emoji: "☕",
    stat: "48 ITEMS",
    tall: false,
  },
  {
    label: "Recovery Lounge",
    desc: "Stretch, sip, decompress",
    bg: "linear-gradient(160deg, #1a1510 0%, #0e0d0b 100%)",
    emoji: "🌿",
    stat: "OPEN 24H",
    tall: false,
  },
  {
    label: "Private Training",
    desc: "One-on-one. No distractions.",
    bg: "linear-gradient(160deg, #1a0d10 0%, #0e0d0b 100%)",
    emoji: "🎯",
    stat: "4 STUDIOS",
    tall: true,
  },
];

export default function Space() {
  return (
    <section id="space" className="py-16 lg:py-24 px-8 lg:px-20 overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 reveal-block">
          <div className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold)" }}>The Space</div>
          <h2
            className="font-display leading-none"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 6.5rem)", color: "var(--cream)", lineHeight: 0.92 }}
          >
            BUILT FOR
            <br />
            <span style={{ color: "var(--gold)" }}>BEASTS &</span>
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px var(--cream)" }}>BARISTAS.</span>
          </h2>
        </div>

        {/* Desktop: 4-col with uneven heights | Mobile: 2-col uniform height */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-3 items-start">
          {spaces.map((s) => (
            <div
              key={s.label}
              data-hover
              className="group relative overflow-hidden"
              style={{
                background: s.bg,
                height: s.tall ? "480px" : "320px",
                border: "1px solid rgba(212,168,83,0.08)",
              }}
            >
              <SpaceCardInner s={s} />
            </div>
          ))}
        </div>

        {/* Mobile: uniform 2-col grid */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {spaces.map((s) => (
            <div
              key={s.label}
              data-hover
              className="group relative overflow-hidden"
              style={{
                background: s.bg,
                height: "220px",
                border: "1px solid rgba(212,168,83,0.08)",
              }}
            >
              <SpaceCardInner s={s} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            data-hover
            className="inline-block text-sm tracking-[0.3em] uppercase px-12 py-4 transition-all duration-200"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--black)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
          >
            Book a Tour
          </a>
        </div>
      </div>
    </section>
  );
}

function SpaceCardInner({ s }: { s: typeof spaces[0] }) {
  return (
    <>
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,83,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div className="text-4xl mb-3 transition-transform duration-300 group-hover:-translate-y-1">{s.emoji}</div>
        <div className="font-display text-xl lg:text-2xl mb-0.5" style={{ color: "var(--cream)" }}>
          {s.label.toUpperCase()}
        </div>
        <div className="text-xs" style={{ color: "var(--cream-dim)" }}>{s.desc}</div>
      </div>
      <div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
        style={{
          background: "rgba(212,168,83,0.15)",
          border: "1px solid rgba(212,168,83,0.3)",
          color: "var(--gold)",
          padding: "4px 10px",
          fontSize: "10px",
          letterSpacing: "0.2em",
        }}
      >
        {s.stat}
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--gold)" }} />
    </>
  );
}
