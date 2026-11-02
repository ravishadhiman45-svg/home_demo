"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { ArrowButton, SectionRule } from "@/components/ui";

const services = [
  {
    name: "Link Building Services",
    body: "As a leading SEO company in India, we build high-quality, white-hat backlinks from authoritative, niche-relevant websites. Our link building services help clients improve rankings and sustain long-term growth.",
    tags: ["Niche edit", "Pay only for live links", "White-label link", "Guest post placements"],
  },
  {
    name: "Technical SEO Services",
    body: "We audit and fix the issues that hold your site back — crawlability, indexing, Core Web Vitals, site architecture and structured data — so search engines can understand and reward your content.",
    tags: ["Site audits", "Core Web Vitals", "Schema markup", "Crawl & index fixes"],
  },
  {
    name: "AI SEO Services",
    body: "Get discovered beyond Google. We optimise your brand and content to appear in AI-powered search and answer engines, building the authority signals large language models rely on.",
    tags: ["AI Overviews", "LLM visibility", "Entity optimisation", "Answer engine content"],
  },
  {
    name: "Local SEO Services",
    body: "Win the map pack and nearby searches. We optimise your Google Business Profile, build local citations and earn reviews that turn local searchers into customers.",
    tags: ["Google Business Profile", "Local citations", "Review strategy", "Geo landing pages"],
  },
  {
    name: "SaaS SEO Services",
    body: "SEO built for subscription growth. We target high-intent, bottom-of-funnel keywords and build product-led content and links that drive sign-ups, demos and recurring revenue.",
    tags: ["BOFU keywords", "Product-led content", "Comparison pages", "SaaS link building"],
  },
  {
    name: "Content Marketing Services",
    body: "Content that ranks and converts. Our strategists and writers create search-driven articles, guides and landing pages that earn links naturally and build topical authority.",
    tags: ["Content strategy", "SEO writing", "Topical clusters", "Content refresh"],
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="pb-20 lg:pb-31">
      <SectionRule align="left" />
      <div className="container-x mt-20 lg:mt-28.5">
        <h2 className="text-title-lg leading-[1.1] font-medium tracking-[-0.015em] text-ink">
          SEO Services That Drive Growth
        </h2>
        <p className="mt-4 max-w-[790px] text-lead leading-[1.32] text-muted">
          Boost rankings, attract quality traffic, and grow your business with tailored SEO
          strategies.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-[831fr_825fr]">
          <ul role="tablist" aria-label="SEO services" className="flex flex-col gap-3 opsz-display">
            {services.map((s, i) => {
              const selected = i === active;
              return (
                <li key={s.name}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="service-panel"
                    onClick={() => setActive(i)}
                    className={`flex h-18 w-full items-center justify-between rounded-3xl pr-7.5 text-left text-[clamp(1.25rem,1.5625vw,1.875rem)] tracking-[-0.02em] transition-colors lg:h-24 ${
                      selected
                        ? "bg-forest pl-10 text-white"
                        : "bg-surface pl-7.75 text-ink hover:bg-[#e6e9e8]"
                    }`}
                  >
                    {s.name}
                    {selected ? (
                      <ArrowDownRight className="size-7 text-lime" strokeWidth={2.25} />
                    ) : (
                      <ArrowRight className="size-7 text-[#979e9b]" strokeWidth={1.75} />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div
            id="service-panel"
            role="tabpanel"
            className="relative flex min-h-[560px] flex-col overflow-hidden rounded-3xl bg-[linear-gradient(180deg,#1a6cd4_0%,#3a8ce4_30%,#4d9eea_55%,#7ab9f1_80%,#cfe6fb_100%)] p-6 text-white sm:p-10.25 lg:min-h-0"
          >
            <div
              aria-hidden
              className="absolute -bottom-[20%] left-[10%] h-[40%] w-[90%] rounded-[50%] bg-white/30 blur-[60px]"
            />
            <p className="relative font-mono text-lg tracking-[0.12em] uppercase sm:text-[22px]">
              SEO Strategies.
            </p>
            <h3 className="relative mt-5 text-[clamp(2.25rem,3.54vw,4.25rem)] leading-[1.1] font-medium tracking-[-0.03em]">
              {current.name}
            </h3>
            <p className="relative mt-4 max-w-[510px] text-lg leading-[1.5] text-[#f1f7fd] xl:text-xl">
              {current.body}
            </p>

            <ul className="relative mt-auto flex flex-wrap gap-3.25 pt-10">
              {current.tags.map((tag) => (
                <li
                  key={tag}
                  className="flex h-9.25 items-center rounded-full bg-[#f3f9fe] px-3.5 text-base text-ink xl:text-lg"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <ArrowButton href="#contact" className="relative mt-6.25 self-start">
              Explore Service
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
