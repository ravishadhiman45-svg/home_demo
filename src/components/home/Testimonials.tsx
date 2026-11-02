import Image from "next/image";
import { SectionRule } from "@/components/ui";

type Testimonial =
  | { kind: "quote"; tone: "light" | "light-muted" | "dark"; quote: string; name: string }
  | { kind: "video"; image: string; name: string };

const testimonials: Testimonial[] = [
  {
    kind: "quote",
    tone: "light",
    quote:
      "In just six months, they helped us rank for keywords on our highest-converting pages — exactly where we needed visibility.",
    name: "Piyush Patyal",
  },
  {
    kind: "quote",
    tone: "dark",
    quote: "Keyword rankings skyrocketed and traffic increased 5X. They kept us updated regularly",
    name: "Monika Kalinova",
  },
  {
    kind: "quote",
    tone: "light-muted",
    quote:
      "Renu taught our whole team the process and helped us 3X organic traffic for our clients.",
    name: "Riya Singh",
  },
  { kind: "video", image: "/images/testimonial-video.png", name: "Client video testimonial" },
  {
    kind: "quote",
    tone: "dark",
    quote:
      "Our keywords in top-10 went from a handful to 983. Professional, transparent, results-driven throughout.",
    name: "Shailendra Kadulkar",
  },
];

// Cards sit on a large circle whose centre is far below the section, giving the gentle arc.
const RADIUS = 7600;
const CARD_W = 380;
const STEP = (CARD_W / RADIUS) * (180 / Math.PI); // degrees between neighbouring cards
const START = 0.5 - 2 * STEP; // puts the third card just right of centre, as in the design
const N = testimonials.length;
const slots = Array.from({ length: 3 * N }, (_, i) => i - N);

export function Testimonials() {
  return (
    <section id="reviews" className="overflow-hidden pb-20 lg:pb-32.5">
      <SectionRule />

      <h2 className="container-x mt-20 text-center lg:mt-35 text-display leading-[1.1] font-medium tracking-[-0.004em] text-black">
        Real people. Real SEO results.
      </h2>

      <div className="relative mt-11 h-106.75 max-sm:[zoom:0.8]">
        <div
          className="absolute top-5 left-1/2 animate-[wheel_36s_linear_infinite] hover:[animation-play-state:paused]"
          style={
            {
              transformOrigin: `0 ${RADIUS}px`,
              "--wheel-step": `${STEP}deg`,
              "--wheel-count": N,
            } as React.CSSProperties
          }
        >
          {slots.map((slot) => {
            const t = testimonials[((slot % N) + N) % N];
            const hidden = slot < 0 || slot >= N;
            return (
              <figure
                key={slot}
                aria-hidden={hidden}
                className="absolute top-0 -left-47.5 h-66.5 w-95 shadow-[0_36px_50px_-30px_rgba(0,0,0,0.28)]"
                style={{
                  transformOrigin: `${CARD_W / 2}px ${RADIUS}px`,
                  transform: `rotate(${START + slot * STEP}deg)`,
                }}
              >
                <TestimonialCard t={t} />
              </figure>
            );
          })}
        </div>
      </div>

      <p className="container-x mt-12.5 text-center text-lead-lg leading-tight text-gray-text">
        Our clients don&rsquo;t just rank they grow revenue, dominate their markets, and outperform
        competitors.
        <br className="hidden lg:block" /> Here&rsquo;s what a few of them have said about working
        with Tanot Solutions.
      </p>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  if (t.kind === "video") {
    return (
      <div className="size-full rounded-2xl bg-sky p-3.5">
        <div className="relative size-full overflow-hidden rounded-lg">
          <Image src={t.image} alt={t.name} fill sizes="352px" className="object-cover" />
        </div>
      </div>
    );
  }

  const styles = {
    light: "bg-white text-[#323232]",
    "light-muted": "bg-white text-muted",
    dark: "bg-forest text-white",
  }[t.tone];

  return (
    <div
      className={`flex size-full flex-col justify-between rounded-2xl px-5.5 pt-5.25 pb-7 ${styles}`}
    >
      <blockquote className="max-w-[332px] text-[27px] leading-[33px] tracking-[-0.01em]">
        {t.quote}
      </blockquote>
      <figcaption className={`text-base ${t.tone === "dark" ? "text-white" : "text-black"}`}>
        {t.name}
      </figcaption>
    </div>
  );
}
