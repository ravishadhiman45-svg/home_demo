import { Awards } from "@/components/home/Awards";
import { Blog } from "@/components/home/Blog";
import { Faq } from "@/components/home/Faq";
import { Footer } from "@/components/home/Footer";
import { Founder } from "@/components/home/Founder";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustedBrands } from "@/components/home/TrustedBrands";
import { WhyChoose } from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <TrustedBrands />
        <Testimonials />
        <Services />
        <WhyChoose />
        <Founder />
        <Awards />
        <Faq />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
