import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="px-3 pt-2.5">
      <div className="relative overflow-hidden rounded-[40px] bg-sky-panel pb-20.75">
        <Clouds />

        <Navbar />

        <div className="relative z-10 container-x mt-24 text-center text-white">
          <h1 className="text-display leading-[1.094] font-medium tracking-[-0.0265em]">
            Build Authority.
            <br />
            Rank Higher. Grow Faster.
          </h1>
          <p className="mx-auto mt-9.5 max-w-[30.75em] font-lato text-lead leading-none text-white/95">
            Earn high-quality backlinks, strengthen your search visibility, and turn organic traffic
            into meaningful business growth.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4.5">
            <Link
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-forest pr-1.75 pl-4.75 font-lato text-lg text-white transition-colors hover:bg-[#0a2e24]"
            >
              Get a Free SEO Strategy
              <span className="grid size-8.5 place-items-center rounded-full bg-white text-forest transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-5" strokeWidth={2} />
              </span>
            </Link>
            <Link
              href="#services"
              className="inline-flex h-12 items-center rounded-full border border-white/25 bg-charcoal px-5.5 font-lato text-lg text-white transition-colors hover:bg-[#2f2f2f]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        <HeroCards />
      </div>
    </section>
  );
}

function Clouds() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute top-[34%] left-[18%] h-[11%] w-[26%] rounded-[50%] bg-white/45 blur-[40px]" />
      <div className="absolute top-[27%] right-[13%] h-[14%] w-[30%] rounded-[50%] bg-white/35 blur-[50px]" />
      <div className="absolute top-[86%] left-[25%] h-[20%] w-[50%] rounded-[50%] bg-white/70 blur-[50px]" />
    </div>
  );
}

const label = "text-sm leading-none";

function HeroCards() {
  return (
    <div className="no-scrollbar relative z-10 mt-16.5 overflow-x-auto px-5 pt-2 pb-10">
      <div className="mx-auto flex w-max opsz-display lg:max-xl:[zoom:0.62] xl:max-[1439.98px]:[zoom:0.75] min-[1440px]:max-[1699.98px]:[zoom:0.85] *:h-81.5 *:w-61.75 *:shrink-0 *:overflow-hidden *:rounded-2xl *:not-first:-ml-4.25 *:not-first:shadow-[-14px_0_28px_-10px_rgba(15,31,25,0.18)]">
        {/* SEO that drives results */}
        <article className="relative bg-white p-3.5">
          <Image
            src="/images/hero-laptop.png"
            alt="Laptop showing an SEO analytics dashboard"
            width={216}
            height={119}
            className="h-29.75 w-54 rounded-lg object-cover"
          />
          <h3 className="mt-5.5 pl-1.5 text-[28px] leading-[31px] font-medium tracking-[-0.02em] text-ink">
            SEO That
            <br />
            Drives Results
          </h3>
          <p className="mt-3 pl-1.5 text-base leading-[21px] text-[#4f6160]">
            Discover how strategic link building helps businesses improve search rankings.
          </p>
        </article>

        {/* Approach */}
        <article className="relative flex flex-col bg-white px-5.5 pt-5.5 pb-10.5">
          <p className={`${label} text-muted`}>Our Approach</p>
          <ul className="mt-7.5 flex max-w-[180px] flex-wrap gap-2 text-base text-ink">
            {["Ethical", "Quality", "Google-compliant", "Long-term authority."].map((t) => (
              <li key={t} className="flex h-8.5 items-center rounded-full bg-surface px-2.5">
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-auto text-xl leading-none text-ink">White-Hat SEO</p>
        </article>

        {/* Brands served */}
        <article className="relative bg-sky px-5.25 pt-5.5 text-white">
          <p className={label}>Brands Served</p>
          <p className="mt-6.5 text-[60px] leading-none font-medium tracking-[-0.0265em]">150+</p>
          <Image
            src="/images/hero-avatars.png"
            alt="Client avatars"
            width={210}
            height={46}
            className="mt-14.25 -ml-0.5"
          />
          <p className="mt-4 w-[250px] text-base leading-5">
            Helping businesses across industries strengthen their online presence and search
            visibility.
          </p>
        </article>

        {/* Earn quality backlinks */}
        <article className="relative bg-forest px-5.5 pt-5.5 text-white">
          <Image
            src="/images/hero-icon.png"
            alt=""
            width={45}
            height={45}
            className="size-10.25 rounded-full object-cover"
          />
          <h3 className="mt-4.5 text-[30px] leading-[34px] font-medium tracking-[-0.02em]">
            Earn Quality
            <br />
            Backlinks
          </h3>
          <p className="mt-15 w-[197px] text-base leading-5.5 text-[#aac7b9]">
            Build authority with relevant, editorially placed backlinks from trusted websites.
          </p>
        </article>

        {/* Technical SEO audits */}
        <article className="relative bg-sky px-5.5 pt-5.5 text-white">
          <p className={`${label} text-white/80`}>For you</p>
          <h3 className="mt-3 text-[30px] leading-[31px] font-medium tracking-[-0.02em]">
            Technical SEO
            <br />
            Audits
          </h3>
          <p className="mt-6.5 w-[212px] text-lg leading-6 text-[#e7e7e7]">
            Identify website issues, improve site performance, and build a stronger technical
            foundation for better search rankings.
          </p>
          <Link
            href="#services"
            aria-label="Technical SEO audits"
            className="absolute top-64.75 left-44.75 grid size-12.5 place-items-center rounded-full bg-forest text-white transition-transform hover:rotate-45"
          >
            <ArrowUpRight className="size-6" strokeWidth={2} />
          </Link>
        </article>

        {/* Years of experience */}
        <article className="relative bg-white pt-5.5">
          <p className={`${label} px-5.5 text-muted`}>Years of SEO Experience</p>
          <p className="mt-4.5 px-5.5 text-5xl leading-none font-medium tracking-[-0.05em] text-ink">
            11+
          </p>
          <p className="mt-3 w-[210px] px-5.5 text-[13px] leading-4 text-[#333]">
            Industry expertise focused on sustainable rankings and long-term growth.
          </p>
          <Image
            src="/images/hero-people.png"
            alt="Tanot Solutions team members"
            width={217}
            height={88}
            className="absolute top-49.25 left-3.5"
          />
        </article>

        {/* AI search */}
        <article className="relative bg-white p-3.5">
          <Image
            src="/images/hero-phone.png"
            alt="Phone showing AI assistant apps"
            width={215}
            height={119}
            className="h-29.75 w-53.75 rounded-lg object-cover"
          />
          <p className={`${label} mt-5 px-1.5 text-muted`}>AI Search</p>
          <h3 className="mt-3.5 px-1.5 text-[30px] leading-[31px] font-medium tracking-[-0.02em] text-ink">
            Get Discovered Beyond Google
          </h3>
          <p className="mt-4 px-1.5 text-[13px] leading-4 text-muted">
            Emerging AI-powered search experiences.
          </p>
        </article>
      </div>
    </div>
  );
}
