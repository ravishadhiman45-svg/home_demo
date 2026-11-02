import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ArrowButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Dark green pill with the white arrow circle used across the page. */
export function ArrowButton({ href, children, className = "" }: ArrowButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 shrink-0 items-center gap-3 rounded-full bg-forest pr-1.75 pl-5.25 font-lato text-lg text-white transition-colors hover:bg-[#0a2e24] ${className}`}
    >
      {children}
      <span className="grid size-8.5 place-items-center rounded-full bg-white text-forest transition-transform group-hover:rotate-45">
        <ArrowUpRight className="size-5" strokeWidth={2} />
      </span>
    </Link>
  );
}

/** Thin blue rule above some sections, either centred or aligned to the content edge. */
export function SectionRule({ align = "center" }: { align?: "center" | "left" }) {
  if (align === "left") {
    return (
      <div aria-hidden className="container-x">
        <div className="h-px w-[min(884px,70%)] bg-line" />
      </div>
    );
  }
  return <div aria-hidden className="mx-auto h-px w-[min(888px,80%)] bg-line" />;
}

/** Bold closing quote that sits at the top-right of a heading or paragraph. */
export function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`font-serif leading-none font-bold text-black ${className}`}>
      &rdquo;
    </span>
  );
}
