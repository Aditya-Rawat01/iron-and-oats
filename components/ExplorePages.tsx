import Link from "next/link";

const destinations = [
  {
    href: "/menu",
    eyebrow: "Menu Page",
    title: "Fuel That Keeps Up.",
    text: "A dedicated menu destination with categories, macros, featured pairings, and room to grow into a full cafe experience.",
    accent: "var(--gold)",
  },
  {
    href: "/classes",
    eyebrow: "Classes Page",
    title: "Programming With Rhythm.",
    text: "A dedicated classes page with a responsive weekly calendar, class details, and a clearer booking story for the client build.",
    accent: "var(--lime)",
  },
];

export default function ExplorePages() {
  return (
    <section className="px-8 py-16 lg:px-20 lg:py-24" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal-block max-w-3xl">
            <div className="mb-4 text-xs uppercase tracking-[0.5em]" style={{ color: "var(--gold)" }}>
              Explore Further
            </div>
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", color: "var(--cream)", lineHeight: 0.92 }}
            >
              BUILT TO GROW
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: "1px var(--gold)" }}>BEYOND THE LANDING PAGE.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
            The homepage now acts like the front door, while menu and classes live on their own destination pages with enough depth to present to a client.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {destinations.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden border p-8 transition-transform duration-300 hover:-translate-y-1 lg:p-10"
              style={{ borderColor: "rgba(232,224,208,0.12)", background: "var(--black)" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
              />
              <div className="mb-10 text-xs uppercase tracking-[0.4em]" style={{ color: item.accent }}>
                {item.eyebrow}
              </div>
              <h3
                className="mb-4 font-display leading-none transition-colors duration-200"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.75rem)", color: "var(--cream)", lineHeight: 0.95 }}
              >
                {item.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
                {item.text}
              </p>
              <div className="mt-10 text-sm uppercase tracking-[0.3em]" style={{ color: item.accent }}>
                Enter Page →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
