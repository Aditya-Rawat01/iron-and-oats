const spaces = [
  {
    label: "The Floor",
    desc: "2,400 sq.ft of raw performance",
    bg: "url('/floor.jpeg')",
    stat: "2,400 SQ.FT",
    tall: true,
  },
  {
    label: "The Bar",
    desc: "Where recovery begins",
    bg: "url('/bar.jpeg')",
    stat: "48 ITEMS",
    tall: false,
  },
  {
    label: "Recovery Lounge",
    desc: "Stretch, sip, decompress",
    bg: "url('/recovery.jpeg')",
    stat: "OPEN 24H",
    tall: false,
  },
  {
    label: "Private Training",
    desc: "One-on-one. No distractions.",
    bg: "url('/private.jpeg')",
    stat: "4 STUDIOS",
    tall: true,
  },
];

export default function Space() {
  return (
    <section
      id="space"
      className="py-16 lg:py-24 px-8 lg:px-20 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 reveal-block">
          <div
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            The Space
          </div>
          <h2
            className="font-display leading-none"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 6.5rem)",
              color: "var(--cream)",
              lineHeight: 0.92,
            }}
          >
            BUILT FOR
            <br />
            <span style={{ color: "var(--gold)" }}>BEASTS &</span>
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px var(--cream)",
              }}
            >
              BARISTAS.
            </span>
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
                backgroundImage: s.bg,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                backgroundImage: s.bg,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.color = "var(--black)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
            }}
          >
            Book a Tour
          </a>
        </div>
      </div>
    </section>
  );
}


function SpaceCardInner({ s }: { s: (typeof spaces)[0] }) {
  return (
    <>
      {/* Overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2), transparent)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div
          className="font-display text-lg lg:text-xl tracking-wide"
          style={{
            color: "var(--cream)",
            textShadow: "0 2px 10px rgba(0,0,0,0.6)",
          }}
        >
          {s.label.toUpperCase()}
        </div>

        <div className="text-[11px] opacity-80 mt-1 tracking-wide text-white/80">
          {s.desc}
        </div>
      </div>

      {/* Stat badge */}
      <div
  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
  style={{
    background: "var(--gold)",
    color: "var(--black)",
    padding: "6px 12px",
    fontSize: "12px",
    letterSpacing: "0.2em",
    fontWeight: 500,
  }}
>
  {s.stat}
</div>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "var(--gold)" }}
      />
    </>
  );
}``