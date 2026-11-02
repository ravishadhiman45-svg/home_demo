import { SectionRule } from "@/components/ui";

export function WhyChoose() {
  return (
    <section id="case-studies">
      <SectionRule align="left" />
      <div className="container-x mt-20 text-center lg:mt-27.75">
        <h2 className="text-title leading-[1.1] font-medium tracking-[0.012em] text-ink">
          Why Brands Choose Tanot Solutions
        </h2>
        <p className="mx-auto mt-4.5 max-w-[820px] text-lead leading-[1.32] text-muted">
          Data-driven SEO strategies that build authority, improve search visibility, and drive
          sustainable business growth.
        </p>
      </div>

      <div className="container-x">
        <div className="mx-auto mt-14 grid max-w-[1335px] opsz-display lg:mt-18.5 2xl:-translate-x-5 gap-5.5 md:grid-cols-2 lg:grid-cols-[417fr_477fr_397fr]">
          <article className="rounded-3xl bg-[linear-gradient(180deg,#2d82de_0%,#5aa5ec_45%,#c7e3f9_100%)] px-6.5 pt-7.75 pb-9 lg:h-111">
            <div className="flex h-full min-h-[340px] flex-col rounded-2xl bg-white px-5.5 pt-5 pb-9">
              <p className="text-[50px] leading-none font-medium tracking-[-0.05em] text-ink">
                11+ Years
              </p>
              <p className="mt-9 w-fit border-b border-[#398ce2] pr-9 pb-3 text-[32px] leading-[41px] tracking-[-0.03em] text-[#646464]">
                SEO Expertise
                <br />
                That Delivers
              </p>
              <p className="mt-auto pt-10 text-base leading-[22.5px] text-muted">
                Experienced SEO professionals focused on building authority and improving organic
                search performance.
              </p>
            </div>
          </article>

          <article className="flex min-h-[444px] flex-col rounded-3xl bg-surface lg:h-111 px-6.5 pt-6.5 pb-7.5">
            <p className="font-mono text-[13px] tracking-[0.55em] text-muted uppercase">
              Building lasting growth
            </p>
            <h3 className="mt-6 max-w-[390px] text-[40px] leading-[1.32] font-medium tracking-[-0.035em] text-ink">
              Turn Search Visibility Into Business Growth
            </h3>
            <p className="mt-5 max-w-[300px] text-base leading-[22.5px] text-muted">
              We help brands rank higher, attract quality traffic, and turn organic visibility into
              measurable results.
            </p>
            <p className="mt-auto pt-10 text-[78px] leading-none font-medium tracking-[-0.06em] text-ink">
              150+
            </p>
            <p className="mt-3.5 text-base text-muted">Brands Served</p>
          </article>

          <div className="grid gap-4.5 md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
            <article className="rounded-3xl bg-charcoal px-6.5 pt-6.5 pb-4.5 text-white lg:h-53.25">
              <p className="font-mono text-[13px] tracking-[0.12em] text-[#d2d2d2] uppercase">
                Our Impact
              </p>
              <p className="mt-9.5 text-[70px] leading-[0.8] font-medium tracking-[-0.06em]">
                5,000+
              </p>
              <p className="mt-5 max-w-[330px] text-base leading-[22px] text-[#d2d2d2]">
                High-quality backlinks delivered to strengthen website authority
              </p>
            </article>
            <article className="flex flex-col justify-end rounded-3xl bg-forest px-6.5 pt-14 pb-7 text-white lg:h-53.25">
              <h3 className="text-[36px] leading-none font-medium tracking-[-0.03em]">
                Rank. Grow. Lead.
              </h3>
              <p className="mt-7 max-w-[330px] text-base leading-[22.5px] text-[#a9c7b9]">
                From strategic link building to AI search visibility, we help brands stay
                competitive in an evolving search landscape.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
