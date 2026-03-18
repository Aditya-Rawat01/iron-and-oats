"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Concept", href: "/#concept" },
  { label: "Menu", href: "/menu" },
  { label: "Classes", href: "/classes" },
  { label: "Space", href: "/#space" },
  { label: "Membership", href: "/#membership" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 transition-all duration-500 lg:px-14 ${
          scrolled ? "py-4" : "py-7"
        }`}
        style={{
          background: scrolled ? "rgba(14,13,11,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(212,168,83,0.15)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <Link href="/" className="font-display text-2xl tracking-widest" style={{ color: "var(--gold)" }}>
          IRON & OATS
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => {
            const isActive = !link.href.startsWith("/#") && pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className="hover-line text-sm uppercase tracking-[0.2em] transition-colors duration-200"
                style={{ color: isActive ? "var(--cream)" : "var(--cream-dim)" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/#membership"
            data-hover
            className="text-sm uppercase tracking-[0.2em] px-6 py-2.5 font-medium transition-all duration-200"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.color = "var(--black)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
            }}
          >
            Join Now
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "var(--cream)",
              transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block h-px w-4 transition-all duration-300"
            style={{
              background: "var(--cream)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "var(--cream)",
              transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ background: "rgba(14,13,11,0.98)" }}
      >
        {links.map((link, index) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-2xl"
            style={{ color: "var(--cream)", animationDelay: `${index * 0.08}s` }}
          >
            {link.label.toUpperCase()}
          </Link>
        ))}
        <Link
          href="/#membership"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3 text-sm uppercase tracking-[0.3em]"
          style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
        >
          JOIN NOW
        </Link>
      </div>
    </>
  );
}
