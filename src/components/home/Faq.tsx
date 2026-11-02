"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ArrowButton } from "@/components/ui";

const faqs = [
  {
    q: "How Can SEO Grow My Business?",
    a: "SEO puts your business in front of people who are already searching for what you offer. Higher rankings bring consistent, high-intent organic traffic that compounds over time — without paying for every click.",
  },
  {
    q: "Why Choose Tanot Solutions?",
    a: "With 11+ years of experience, 5,000+ backlinks delivered and 150+ brands served, we combine white-hat link building, technical SEO and AI search optimisation with transparent reporting and dedicated specialists.",
  },
  {
    q: "Do You Offer Full SEO Services?",
    a: "Yes. Alongside link building we offer technical SEO, AI SEO, local SEO, SaaS SEO and content marketing, so every part of your search strategy works together.",
  },
  {
    q: "Is Your Link Building Google-Safe?",
    a: "Absolutely. We only earn editorial, niche-relevant links from real websites with genuine traffic, following Google's guidelines. No PBNs, link farms or spammy shortcuts.",
  },
  {
    q: "How Long Does SEO Take?",
    a: "Most clients see meaningful movement in 3–6 months, with stronger compounding results after 6–12 months. Timelines depend on your competition, current authority and how quickly changes are implemented.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden pt-25 lg:pt-32.5">
      <div className="container-x">
        <div aria-hidden className="hidden lg:grid lg:grid-cols-[756fr_924fr]">
          <div className="relative">
            <div className="absolute right-0 -left-[100vw] h-px bg-line" />
          </div>
        </div>
        <h2 className="pt-0 text-title leading-[1.1] font-medium tracking-[0.014em] text-ink lg:pt-28">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-10 lg:grid-cols-[756fr_924fr] lg:gap-0">
          <div className="relative flex flex-col pb-4 lg:pb-32.5">
            <p className="mt-4.5 max-w-[580px] text-lead leading-[1.32] text-muted">
              Everything you need to know about our SEO and link-building services.
            </p>
            <ArrowButton href="#contact" className="mt-7.5 self-start">
              Talk to Us..
            </ArrowButton>

            <div aria-hidden className="relative mt-auto hidden w-fit pr-34 lg:block">
              <p className="text-[66px] leading-none font-medium tracking-[-0.06em] text-[#c3c3c3] opsz-display">
                Build Authority.
              </p>
              <div className="absolute top-[calc(100%+6px)] right-0 -left-[100vw] h-px bg-line" />
              <div className="absolute top-[calc(100%+6px)] right-0 size-11.25 -translate-y-1/2 rounded-full bg-[conic-gradient(from_200deg,#2f86e3,#9ccaf5,#2f86e3)] p-2">
                <div className="size-full rounded-full bg-white" />
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-5 lg:mt-16.5">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="rounded-[32px] bg-mist">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex min-h-25.25 w-full items-center justify-between gap-6 py-5 pr-10 pl-8 text-left text-[clamp(1.25rem,1.458vw,1.75rem)] tracking-[-0.01em] text-[#333]"
                    >
                      {f.q}
                      <ChevronDown
                        className={`size-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        strokeWidth={2}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[760px] px-8 pb-8 text-lg leading-relaxed text-muted">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
