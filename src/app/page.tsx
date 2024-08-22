/* eslint-disable @next/next/no-img-element */
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import LearnMore from "@/components/learn-more";
import OurMission from "@/components/our-mission";
import ServicesCards from "@/components/ServicesCards";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <main>
        <Hero />
        <ServicesCards />
      </main>
      <OurMission />
      <LearnMore />
      <CTA />
    </>
  );
}
