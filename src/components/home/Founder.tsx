import Image from "next/image";
import { ArrowButton, QuoteMark } from "@/components/ui";

const highlights = [
  "Relationships with 1,000+ authoritative publishers globally",
  "Dedicated SEO specialists, not generalists",
  "98% client satisfaction with 2+ year average retention",
];

export function Founder() {
  return (
    <section className="container-x pt-25 lg:pt-43.5">
      <h2 className="text-title leading-[1.1] font-medium tracking-[-0.01em] text-ink">
        Founder &amp; Head of SEO Strategy
        <QuoteMark className="ml-6 hidden -translate-y-[0.32em] align-top text-[0.82em] sm:inline-block" />
      </h2>

      <div className="mt-12.5 grid gap-7.75 lg:grid-cols-[470px_minmax(0,1fr)]">
        <div className="relative mx-auto aspect-[470/613] w-full max-w-[470px] overflow-hidden rounded-3xl">
          <Image
            src="/images/founder.png"
            alt="Renu Sharma, Founder & Head of SEO Strategy at Tanot Solutions"
            fill
            sizes="(min-width: 1024px) 470px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-end rounded-3xl bg-surface px-6 pt-12 pb-13.5 sm:px-10.75">
          <p className="max-w-[880px] text-lead leading-[1.46] text-gray-text">
            Tanot Solutions is a leading SEO agency in India with 11+ years of experience, 5,000+
            backlinks delivered, and 98% client satisfaction. Led by SEO strategist Renu Sharma,
            we&rsquo;ve helped 150+ global brands grow organically across SaaS, eCommerce, and B2B.
          </p>

          <div className="mt-11.5 flex flex-col gap-6 2xl:flex-row 2xl:items-end 2xl:justify-between">
            <ul className="flex flex-col items-start gap-3.5">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border-2 border-surface bg-white px-7.75 py-4 text-[clamp(1rem,1.25vw,1.5rem)] leading-tight text-ink"
                >
                  {h}
                </li>
              ))}
            </ul>
            <ArrowButton href="#case-studies" className="mb-1.5 self-start 2xl:self-auto">
              Our Case Studies
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
