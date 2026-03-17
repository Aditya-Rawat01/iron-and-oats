import type { Metadata } from "next";
import Link from "next/link";

import Classes from "@/components/Classes";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Classes | IRON & OATS",
  description: "Explore the weekly class rhythm at Iron & Oats with a responsive schedule, coaching details, and booking-ready layouts.",
};

export default function ClassesPage() {
  return (
    <SiteShell>
      <>
        <section className="px-8 pb-12 pt-32 lg:px-20 lg:pb-16 lg:pt-40" style={{ background: "var(--surface)" }}>
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.5em]" style={{ color: "var(--gold)" }}>
                Dedicated Classes Page
              </div>
              <h1
                className="font-display leading-none"
                style={{ fontSize: "clamp(4rem, 9vw, 8.5rem)", color: "var(--cream)", lineHeight: 0.9 }}
              >
                TRAIN ON
                <br />
                <span style={{ color: "var(--lime)" }}>A RHYTHM.</span>
              </h1>
            </div>
            <div className="space-y-6">
              <p className="max-w-md text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
                The classes destination now carries the schedule properly, with a responsive calendar, coaching philosophy, and a layout that can scale into real booking or membership integrations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/menu"
                  className="px-6 py-3 text-sm uppercase tracking-[0.25em]"
                  style={{ border: "1px solid rgba(232,224,208,0.2)", color: "var(--cream)" }}
                >
                  View Menu
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

        <Classes />
      </>
    </SiteShell>
  );
}
