import Link from "next/link";

const footerLinks = [
  { label: "Concept", href: "/#concept" },
  { label: "Menu", href: "/menu" },
  { label: "Classes", href: "/classes" },
  { label: "The Space", href: "/#space" },
  { label: "Membership", href: "/#membership" },
  { label: "FAQ", href: "/#faq" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", borderTop: "1px solid rgba(212,168,83,0.15)" }}>
      <div className="px-8 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4 font-display text-5xl" style={{ color: "var(--gold)" }}>
              IRON & OATS
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
              Where athletic performance meets culinary craft. A gym cafe for those who refuse to settle.
            </p>
            <div className="flex gap-4">
              {["IG", "TW", "YT", "TK"].map((s) => (
                <a
                  key={s}
                  href="#"
                  data-hover
                  className="flex h-9 w-9 items-center justify-center text-xs transition-all duration-200"
                  style={{
                    border: "1px solid rgba(212,168,83,0.3)",
                    color: "var(--cream-dim)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,83,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "var(--cream-dim)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--gold)" }}>
              Navigate
            </div>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover-line w-fit text-sm transition-colors duration-200"
                  style={{ color: "var(--cream-dim)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--gold)" }}>
              Find Us
            </div>
            <div className="mb-4 text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
              14B, Mehrauli-Gurgaon Road
              <br />
              Sultanpur, South Delhi
              <br />
              New Delhi — 110 030
            </div>
            <div className="mb-1 mt-4 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
              Hours
            </div>
            <div className="text-sm" style={{ color: "var(--cream-dim)" }}>
              Mon–Fri: 5AM – 11PM
              <br />
              Sat–Sun: 6AM – 10PM
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden px-8 py-4 lg:px-20" style={{ borderTop: "1px solid rgba(212,168,83,0.08)" }}>
        <div
          className="font-display w-full select-none text-center leading-none text-gold shadow-2xl"
          style={{
            fontSize: "clamp(4rem, 12vw, 11rem)",
            lineHeight: 1,
          }}
        >
          IRON & OATS
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-between gap-2 px-8 py-4 lg:flex-row lg:px-20"
        style={{ borderTop: "1px solid rgba(212,168,83,0.08)" }}
      >
        <div className="text-xs tracking-widest" style={{ color: "var(--cream-dim)", opacity: 0.5 }}>
          © 2024 IRON & OATS. ALL RIGHTS RESERVED.
        </div>
        <div className="text-xs tracking-widest" style={{ color: "var(--cream-dim)", opacity: 0.5 }}>
          DESIGNED WITH OBSESSION
        </div>
      </div>
    </footer>
  );
}
