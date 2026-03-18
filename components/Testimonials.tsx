const testimonials = [
  {
    quote:
      "I've been to gyms across Delhi. None of them thought about what happens after the session ends. Iron & Oats did.",
    name: "Rohit V.",
    tag: "Grind Member — 8 months",
  },
  {
    quote:
      "The Dark Matter cold brew at 6AM before a power session is a ritual I refuse to give up. This place gets it.",
    name: "Aisha K.",
    tag: "Ritual Member — 1 year",
  },
  {
    quote:
      "As someone who takes nutrition seriously, finding a gym cafe that actually knows macros changed my training.",
    name: "Siddharth M.",
    tag: "Competitive Lifter",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 px-8 lg:px-20" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.5em] uppercase mb-12 text-center reveal-block" style={{ color: "var(--gold)" }}>
          The Community
        </div>

        <div className="grid lg:grid-cols-3 gap-px" style={{ background: "rgba(212,168,83,0.1)" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-10 flex flex-col justify-between"
              style={{ background: "var(--surface)" }}
            >
              {/* Big open quote */}
              <div
                className="font-editorial text-8xl leading-none mb-4 -mt-4"
                style={{ color: "var(--gold)", opacity: 0.4 }}
              >
                &ldquo;
              </div>
              <p
                className="font-editorial text-xl italic leading-relaxed mb-8 flex-1"
                style={{ color: "var(--cream)" }}
              >
                {t.quote}
              </p>
              <div>
                <div className="font-display text-xl" style={{ color: "var(--gold)" }}>
                  {t.name}
                </div>
                <div className="text-xs tracking-widest mt-1" style={{ color: "var(--cream-dim)" }}>
                  {t.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-8 p-6 md:p-10"
          style={{ border: "1px solid rgba(212,168,83,0.2)" }}
        >
          <div>
            <h3
              className="font-display text-4xl lg:text-5xl leading-none"
              style={{ color: "var(--cream)" }}
            >
              READY TO START
              <br />
              <span style={{ color: "var(--lime)" }}>YOUR RITUAL?</span>
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#membership"
              data-hover
              className="text-sm tracking-[0.3em] uppercase px-10 py-4 font-medium transition-all duration-200 text-center"
              style={{ background: "var(--gold)", color: "var(--black)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--lime)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              }}
            >
              Join Now
            </a>
            <a
              href="#"
              data-hover
              className="text-sm tracking-[0.3em] uppercase px-10 py-4 transition-all duration-200 text-center"
              style={{ border: "1px solid rgba(232,224,208,0.3)", color: "var(--cream)" }}
            >
              Free Trial Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
