/* eslint-disable @next/next/no-img-element */
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import { ImagesCarousel } from "@/components/images-carousel";
import LearnMore from "@/components/learn-more";
import OurMission from "@/components/our-mission";
import { OwnerMessage } from "@/components/owner-message";
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
      <OwnerMessage />
      <LearnMore />
      {/* image gallery */}
      <ImagesCarousel />

      <CTA />
    </>
  );
}
