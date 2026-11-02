import Image from "next/image";
import { QuoteMark, SectionRule } from "@/components/ui";

export function Awards() {
  return (
    <section className="pt-25 lg:pt-32.25">
      <SectionRule />

      <h2 className="container-x mt-20 text-center lg:mt-28 text-title leading-[1.24] font-medium tracking-[0.013em] text-ink">
        Award-Winning SEO &amp; <br className="hidden sm:block" />
        Link Building Agency
      </h2>

      <div className="mx-auto mt-16 grid max-w-[1920px] items-center gap-10 lg:grid-cols-[1162fr_758fr] lg:gap-0">
        <Image
          src="/images/awards.png"
          alt="Tanot Solutions awards: Sardar Patel Unity Award 2026, Clutch Top Link Building Company 2024, Corporate Connect Best ROI-Focused SEO Agency 2026"
          width={1162}
          height={585}
          sizes="(min-width: 1024px) 61vw, 100vw"
          className="h-auto w-full"
        />

        <div className="relative px-[max(1.25rem,6.25vw)] lg:pr-[max(1.25rem,6.25vw)] lg:pl-8.75">
          <p className="relative max-w-140 pr-10 text-[clamp(1.5rem,1.875vw,2.25rem)] leading-[1.33] tracking-[-0.03em] text-[#4b4b4b] lg:pr-0">
            Recognized for excellence, trusted for results our awards reflect our commitment to
            quality, authority, and measurable SEO growth.
            <QuoteMark className="absolute -top-1.5 right-0 text-[1.9em] lg:-right-11" />
          </p>
        </div>
      </div>
    </section>
  );
}
