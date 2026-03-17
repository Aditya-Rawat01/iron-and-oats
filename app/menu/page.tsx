import type { Metadata } from "next";
import Link from "next/link";

import Menu from "@/components/Menu";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Menu | IRON & OATS",
  description: "Explore the performance cafe menu at Iron & Oats, from cold brew and pre-workout boosts to recovery meals.",
};

export default function MenuPage() {
  return (
    <SiteShell>
      <>
        <section className="px-8 pb-12 pt-32 lg:px-20 lg:pb-16 lg:pt-40" style={{ background: "var(--black)" }}>
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.5em]" style={{ color: "var(--gold)" }}>
                Dedicated Menu Page
              </div>
              <h1
                className="font-display leading-none"
                style={{ fontSize: "clamp(4rem, 9vw, 8.5rem)", color: "var(--cream)", lineHeight: 0.9 }}
              >
                FUEL WITH
                <br />
                <span style={{ color: "transparent", WebkitTextStroke: "1px var(--gold)" }}>INTENT.</span>
              </h1>
            </div>
            <div className="space-y-6">
              <p className="max-w-md text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
                This page gives the cafe side of the brand room to breathe: product categories, macro-led highlights, service notes, and enough editorial space to feel like a real destination.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/classes"
                  className="px-6 py-3 text-sm uppercase tracking-[0.25em]"
                  style={{ border: "1px solid rgba(232,224,208,0.2)", color: "var(--cream)" }}
                >
                  View Classes
                </Link>
                <Link
                  href="/#membership"
                  className="px-6 py-3 text-sm uppercase tracking-[0.25em]"
                  style={{ background: "var(--gold)", color: "var(--black)" }}
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Menu />
      </>
    </SiteShell>
  );
}
