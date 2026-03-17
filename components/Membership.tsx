"use client";

const tiers = [
  {
    name: "DROP IN",
    price: 699,
    unit: "/ session",
    desc: "No commitment. Just show up.",
    features: [
      "Single class access",
      "Locker room use",
      "10% off café items",
      "Guest WiFi",
    ],
    cta: "Book a Class",
    highlight: false,
    accent: "var(--cream-dim)",
  },
  {
    name: "GRIND",
    price: 3499,
    unit: "/ month",
    desc: "For those who show up every day.",
    features: [
      "Unlimited classes",
      "Full floor access",
      "20% off café items",
      "Towel service",
      "App scheduling",
      "1 guest pass/month",
    ],
    cta: "Start Grinding",
    highlight: true,
    accent: "var(--gold)",
    badge: "Most Popular",
  },
  {
    name: "RITUAL",
    price: 5999,
    unit: "/ month",
    desc: "The full Iron & Oats experience.",
    features: [
      "Everything in Grind",
      "2 PT sessions/month",
      "Free café tab (₹800/mo)",
      "Priority booking",
      "Nutrition consultation",
      "Recovery lounge access",
      "Unlimited guest passes",
    ],
    cta: "Own the Ritual",
    highlight: false,
    accent: "var(--lime)",
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-16 lg:py-24 px-8 lg:px-20" style={{ background: "var(--black)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal-block">
          <div className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            Membership
          </div>
          <h2
            className="font-display leading-none"
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              color: "var(--cream)",
              lineHeight: 0.92,
            }}
          >
            PICK YOUR
            <br />
            <span style={{ color: "var(--gold)" }}>RITUAL.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              data-hover
              className="relative p-8 flex flex-col transition-all duration-300 group"
              style={{
                background: tier.highlight ? "var(--surface-2, #252219)" : "var(--surface)",
                border: `1px solid ${tier.highlight ? tier.accent : "rgba(212,168,83,0.12)"}`,
                transform: tier.highlight ? "scale(1.02)" : "scale(1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = tier.accent;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = tier.highlight
                  ? tier.accent
                  : "rgba(212,168,83,0.12)";
              }}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase px-4 py-1"
                  style={{ background: tier.accent, color: "var(--black)" }}
                >
                  {tier.badge}
                </div>
              )}

              {/* Tier name */}
              <div
                className="font-display text-4xl mb-1"
                style={{ color: tier.accent }}
              >
                {tier.name}
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 mb-2">
                <span
                  className="font-display text-5xl"
                  style={{ color: "var(--cream)" }}
                >
                  ₹{tier.price.toLocaleString()}
                </span>
                <span className="text-sm mb-2" style={{ color: "var(--cream-dim)" }}>
                  {tier.unit}
                </span>
              </div>

              <p className="text-sm mb-8 font-editorial italic" style={{ color: "var(--cream-dim)" }}>
                {tier.desc}
              </p>

              {/* Features */}
              <div className="flex-1 space-y-3 mb-8">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm" style={{ color: "var(--cream)" }}>
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: tier.accent }}
                    />
                    {f}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                data-hover
                className="w-full py-4 text-sm tracking-[0.3em] uppercase font-medium transition-all duration-200"
                style={{
                  background: tier.highlight ? tier.accent : "transparent",
                  color: tier.highlight ? "var(--black)" : tier.accent,
                  border: `1px solid ${tier.accent}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = tier.accent;
                  (e.currentTarget as HTMLElement).style.color = "var(--black)";
                }}
                onMouseLeave={(e) => {
                  if (!tier.highlight) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = tier.accent;
                  }
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-xs tracking-widest" style={{ color: "var(--cream-dim)" }}>
          ALL MEMBERSHIPS INCLUDE COMPLIMENTARY WELCOME SESSION & NUTRITION BRIEFING
        </p>
      </div>
    </section>
  );
}
