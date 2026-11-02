import Image from "next/image";
import Link from "next/link";

const columns = [
  { title: "Company", links: ["Home", "About Us", "Case Studies", "Contact Us"] },
  { title: "Support", links: ["Contact us", "Terms & Conditions", "Privacy Policy", "Disclaimer"] },
  { title: "Resources", links: ["Agency", "Link Tools", "Quality Backlinks", "Saas Link"] },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <path d="M5.3 3.2a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8ZM3.2 9.6h4.2v11.2H3.2V9.6Zm6.8 0h4v1.6c.6-1 1.9-1.9 3.8-1.9 4 0 4.8 2.6 4.8 6v5.5h-4.2v-4.9c0-1.2 0-2.7-1.6-2.7-1.7 0-1.9 1.3-1.9 2.6v5h-4.2V9.6Z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <path
        fillRule="evenodd"
        d="M7.6 2.4h8.8a5.2 5.2 0 0 1 5.2 5.2v8.8a5.2 5.2 0 0 1-5.2 5.2H7.6a5.2 5.2 0 0 1-5.2-5.2V7.6a5.2 5.2 0 0 1 5.2-5.2Zm4.4 5a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 2.2a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Zm5.1-4.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
      />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07Z" />
    ),
  },
];

export function Footer() {
  return (
    <footer id="contact" className="px-3 pt-25 pb-4.25 lg:pt-30.25">
      <div className="relative overflow-hidden rounded-[32px] bg-sky-panel text-white max-lg:bg-[linear-gradient(180deg,#1b6dd5_0%,#3286e2_45%,#51a0ec_70%,#8cc5f3_88%,#d2e9fb_100%)] lg:rounded-[40px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-[34%] left-[21%] h-[9%] w-[16%] rounded-[50%] bg-white/55 blur-[30px]" />
          <div className="absolute top-[72%] -left-[8%] hidden h-[24%] w-[45%] rounded-[50%] bg-white/80 blur-[70px] lg:block" />
          <div className="absolute top-[70%] -right-[6%] hidden h-[22%] w-[38%] rounded-[50%] bg-white/85 blur-[60px] lg:block" />
        </div>

        <div className="relative container-inset pt-20 lg:pt-34.75">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_650px]">
            <div>
              <Image src="/images/logo-white.png" alt="Tanot Solutions" width={216} height={52} />
              <p className="mt-13.5 max-w-[720px] text-[clamp(2rem,2.71vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-[#eaeaea]">
                We Build Authority. You Build Success.
              </p>
              <ul className="mt-7.5 flex gap-3.75">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="grid size-16.5 place-items-center rounded-xl border-2 border-white transition-colors hover:bg-white/15"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        {s.icon}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pt-15">
              <form className="ml-auto flex h-15.5 w-full max-w-[544px] items-center rounded-full bg-white pr-3 pl-7.25">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Enter your Email"
                  className="h-full min-w-0 flex-1 bg-transparent font-sans text-lg text-ink outline-none placeholder:text-[#4b4b4b]"
                />
                <button
                  type="submit"
                  className="h-10.75 shrink-0 rounded-full bg-forest px-6.5 text-lg text-white transition-colors hover:bg-[#0a2e24]"
                >
                  Subscribe
                </button>
              </form>

              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 font-lato text-lg sm:grid-cols-[242px_282px_126px] sm:gap-x-0 lg:mt-17 lg:text-xl">
                {columns.map((col) => (
                  <nav key={col.title} aria-label={col.title}>
                    <p className="text-white/90">{col.title}</p>
                    <ul className="mt-5 flex flex-col gap-4.75">
                      {col.links.map((link) => (
                        <li key={link}>
                          <Link href="#" className="hover:underline sm:whitespace-nowrap">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-17 font-lato text-[clamp(1.125rem,1.354vw,1.625rem)] lg:mt-29">
            &copy; 2026 piyushpatyal . Copyright and rights reserved
          </p>
        </div>

        <p
          aria-hidden
          className="relative mt-16 pl-[1.5%] lg:mt-35 text-[15.4vw] leading-none font-medium tracking-[-0.045em] whitespace-nowrap min-[1920px]:text-[296px]"
        >
          <span className="bg-[linear-gradient(180deg,#2f86e3_0%,#4a98ea_40%,#8cc3f3_75%,rgba(220,236,252,0.7)_100%)] bg-clip-text text-transparent">
            Tanot Solutions
          </span>
        </p>
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[10%] bg-linear-to-t from-white/50 to-transparent"
        />
      </div>
    </footer>
  );
}
