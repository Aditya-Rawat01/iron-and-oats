"use client";

import { useState } from "react";

import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="px-8 py-16 lg:px-20 lg:py-24" style={{ background: "var(--black)" }}>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal-block">
          <div className="mb-4 text-xs uppercase tracking-[0.5em]" style={{ color: "var(--gold)" }}>
            FAQ
          </div>
          <h2
            className="font-display leading-none"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", color: "var(--cream)", lineHeight: 0.92 }}
          >
            QUESTIONS
            <br />
            <span style={{ color: "var(--lime)" }}>WORTH ASKING.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
            With menu and classes now living on their own pages, this section keeps the homepage informative while still feeling lean and premium.
          </p>
        </div>

        <div style={{ borderTop: "1px solid rgba(212,168,83,0.15)" }}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full py-6 text-left transition-colors duration-200"
                style={{ borderBottom: "1px solid rgba(212,168,83,0.12)" }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="font-display text-2xl leading-none lg:text-3xl" style={{ color: "var(--cream)" }}>
                    {item.question}
                  </div>
                  <div className="text-2xl leading-none" style={{ color: isOpen ? "var(--lime)" : "var(--gold)" }}>
                    {isOpen ? "−" : "+"}
                  </div>
                </div>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "160px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="max-w-2xl pt-4 text-sm leading-relaxed" style={{ color: "var(--cream-dim)" }}>
                    {item.answer}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
