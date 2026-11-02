"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { ArrowButton } from "@/components/ui";

const posts = [
  {
    title: "Quality Backlinks For SEO",
    date: "12 Mar 2026",
    excerpt:
      "Discover how high-authority backlinks strengthen domain authority and improve search visibility.",
    image: "/images/blog-1.png",
    alt: "Laptop showing Google Search Console performance",
  },
  {
    title: "Technical SEO Tips",
    date: "18 Mar 2026",
    excerpt:
      "Learn how to fix website issues, improve performance, and build a stronger SEO foundation.",
    image: "/images/blog-2.png",
    alt: "Analyst reviewing SEO reports on a large monitor",
  },
  {
    title: "Improve Your AI Search",
    date: "24 Mar 2026",
    excerpt:
      "Explore strategies to help your brand appear across AI-powered search and answer platforms",
    image: "/images/blog-3.png",
    alt: "Tablet showing search analytics",
  },
];

export function Blog() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const visible = q
    ? posts.filter((p) => `${p.title} ${p.excerpt}`.toLowerCase().includes(q))
    : posts;

  return (
    <section id="blog" className="container-x pt-25 lg:pt-32.25">
      <div className="text-center">
        <h2 className="text-title leading-[1.1] font-medium tracking-[0.01em] text-ink">
          Insights That Drive Growth
        </h2>
        <p className="mx-auto mt-5 max-w-[820px] text-lead leading-[1.32] text-muted">
          Explore expert SEO tips, link-building strategies, and the latest search trends to grow
          your online presence.
        </p>
      </div>

      <div className="mt-15.5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex h-15 w-full max-w-[580px] items-center rounded-full border border-[#d7d7d7] bg-white pr-7 pl-7 focus-within:border-brand">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for to read?"
            className="h-full min-w-0 flex-1 bg-transparent text-xl text-ink outline-none placeholder:text-ink"
          />
          <Search className="size-7 text-ink" strokeWidth={2.25} />
        </label>
        <ArrowButton href="#blog" className="self-start sm:self-auto">
          Explore All Blogs
        </ArrowButton>
      </div>

      <div className="mt-9 grid gap-6.75 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <article
            key={post.title}
            className="group overflow-hidden rounded-3xl border border-[#dadada] bg-white"
          >
            <Link href="#blog" className="block">
              <div className="relative aspect-[542/271] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-5.5 pt-6 pb-5.5">
                <p className="font-poppins text-xl text-[#575757]">
                  Tanot Solutions &bull; {post.date}
                </p>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <h3 className="text-[clamp(1.5rem,1.875vw,2.25rem)] leading-tight font-medium tracking-[-0.01em] text-[#030303] opsz-display">
                    {post.title}
                  </h3>
                  <ArrowUpRight
                    className="mr-6 size-7 shrink-0 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </div>
                <p className="mt-5 max-w-[460px] font-poppins text-xl leading-[34px] text-[#5e5e5e]">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </article>
        ))}
        {visible.length === 0 && (
          <p className="col-span-full py-10 text-center text-lg text-muted">
            No articles match &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>
    </section>
  );
}
