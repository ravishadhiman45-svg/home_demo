import Image from "next/image";

const logos = {
  learntastic: { name: "LearnTastic", w: 249, h: 66 },
  freshlearn: { name: "FreshLearn", w: 258, h: 66 },
  beamjobs: { name: "beamjobs", w: 167, h: 66 },
  tracefuse: { name: "TraceFuse", w: 242, h: 66 },
  kommo: { name: "Kommo", w: 178, h: 54 },
  engagebay: { name: "EngageBay", w: 228, h: 66 },
  stationx: { name: "StationX", w: 212, h: 66 },
} as const;

type LogoKey = keyof typeof logos;

const rows: { items: LogoKey[]; reverse?: boolean; duration: string }[] = [
  {
    items: ["stationx", "learntastic", "freshlearn", "beamjobs", "kommo", "tracefuse", "engagebay"],
    duration: "48s",
  },
  {
    items: ["engagebay", "beamjobs", "tracefuse", "learntastic", "stationx", "freshlearn", "kommo"],
    reverse: true,
    duration: "54s",
  },
  {
    items: ["freshlearn", "kommo", "engagebay", "stationx", "tracefuse", "learntastic", "beamjobs"],
    duration: "44s",
  },
];

export function TrustedBrands() {
  return (
    <section className="container-x grid items-center gap-12 pt-25 pb-20 lg:grid-cols-[800fr_880fr] lg:gap-10 lg:pt-38.75 lg:pb-34.75">
      <div>
        <h2 className="text-display leading-[1.25] font-medium tracking-[-0.008em] text-black">
          Trusted by
          <br />
          <span className="text-[#2b7bb9]">150+</span> Brands
        </h2>
        <p className="mt-4.75 max-w-[730px] text-lead-lg leading-tight text-gray-text">
          We build authority with quality backlinks to boost rankings, AI visibility, and organic
          growth.
        </p>
      </div>

      <div className="flex flex-col gap-10.5 overflow-hidden mask-[linear-gradient(to_right,transparent,black_9%,black_93%,transparent)]">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex w-max animate-[marquee_var(--d)_linear_infinite] hover:[animation-play-state:paused]"
            style={
              {
                "--d": row.duration,
                animationDirection: row.reverse ? "reverse" : "normal",
              } as React.CSSProperties
            }
          >
            {[...row.items, ...row.items].map((key, j) => {
              const logo = logos[key];
              return (
                <div
                  key={j}
                  aria-hidden={j >= row.items.length}
                  className="mr-5 flex h-20.5 shrink-0 items-center rounded-full border border-[#d1d1d1] bg-white px-3.5"
                >
                  <Image
                    src={`/images/brands/${key}.png`}
                    alt={j < row.items.length ? logo.name : ""}
                    width={logo.w}
                    height={logo.h}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
