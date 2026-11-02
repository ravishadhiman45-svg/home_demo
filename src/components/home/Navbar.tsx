"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, EllipsisVertical, Menu, X } from "lucide-react";

const services = [
  "Link Building Services",
  "Technical SEO Services",
  "AI SEO Services",
  "Local SEO Services",
  "SaaS SEO Services",
  "Content Marketing Services",
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 container-inset pt-9.5">
      <nav className="flex items-center justify-between gap-4 font-lato">
        <div className="flex h-15 items-center rounded-[20px] bg-white pr-4 pl-5 lg:h-19.25 lg:pr-9.5 lg:pl-7.5">
          <Link href="/" aria-label="Tanot Solutions home" className="shrink-0">
            <Image src="/images/logo.png" alt="Tanot Solutions" width={160} height={48} preload />
          </Link>

          <ul className="ml-14 hidden items-center gap-9 text-lg text-ink lg:flex">
            <li>
              <Link href="#case-studies" className="hover:text-brand">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="hover:text-brand">
                Reviews
              </Link>
            </li>
            <li className="group relative">
              <Link href="#services" className="flex items-center gap-1 hover:text-brand">
                Services{" "}
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute top-full -left-4 pt-4 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
                <ul className="w-64 rounded-2xl bg-white p-2 text-base shadow-xl shadow-black/10">
                  {services.map((s) => (
                    <li key={s}>
                      <Link
                        href="#services"
                        className="block rounded-xl px-3 py-2 hover:bg-surface"
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          <button
            type="button"
            aria-label="More"
            className="ml-11 hidden text-ink hover:text-brand lg:block"
          >
            <EllipsisVertical className="size-6" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex h-15 items-center gap-6 rounded-[20px] bg-white pr-3 pl-5 lg:h-19.25 lg:pl-7.5">
          <Link href="#login" className="hidden text-lg text-ink hover:text-brand sm:block">
            Log In
          </Link>
          <Link
            href="#contact"
            className="hidden h-13.25 items-center rounded-xl bg-brand-light px-3.5 text-lg text-white transition-colors hover:bg-brand sm:flex"
          >
            Book a Free Call
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center text-ink lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-5 top-full mt-3 rounded-2xl bg-white p-4 shadow-xl shadow-black/10 lg:hidden">
          <ul className="flex flex-col text-lg text-ink" onClick={() => setOpen(false)}>
            <li>
              <Link href="#case-studies" className="block rounded-xl px-3 py-2.5 hover:bg-surface">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="block rounded-xl px-3 py-2.5 hover:bg-surface">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="#services" className="block rounded-xl px-3 py-2.5 hover:bg-surface">
                Services
              </Link>
            </li>
            <li className="sm:hidden">
              <Link href="#login" className="block rounded-xl px-3 py-2.5 hover:bg-surface">
                Log In
              </Link>
            </li>
          </ul>
          <Link
            href="#contact"
            className="mt-3 flex h-12 items-center justify-center rounded-xl bg-brand-light text-lg text-white sm:hidden"
            onClick={() => setOpen(false)}
          >
            Book a Free Call
          </Link>
        </div>
      )}
    </header>
  );
}
