export default function MarqueeTicker() {
  const items = [
    "TRAIN HARD",
    "★",
    "EAT CLEAN",
    "★",
    "COLD BREW",
    "★",
    "POWER BOWLS",
    "★",
    "MORNING GRIND",
    "★",
    "PROTEIN FIRST",
    "★",
    "LIFT HEAVY",
    "★",
    "SIP SLOW",
    "★",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="marquee-track py-4 overflow-hidden"
      style={{
        borderTop: "1px solid rgba(212,168,83,0.2)",
        borderBottom: "1px solid rgba(212,168,83,0.2)",
        background: "var(--surface)",
      }}
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-sm tracking-widest px-6"
            style={{ color: item === "★" ? "var(--gold)" : "var(--cream-dim)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
