"use client";

import Concept from "@/components/Concept";
import ExplorePages from "@/components/ExplorePages";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Membership from "@/components/Membership";
import SiteShell from "@/components/SiteShell";
import Space from "@/components/Space";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <SiteShell showLoader>
      <>
        <Hero />
        <Marquee />
        <Concept />
        <ExplorePages />
        <Space />
        <Membership />
        <FAQ />
        <Testimonials />
      </>
    </SiteShell>
  );
}
