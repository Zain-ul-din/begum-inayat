/* eslint-disable @next/next/no-img-element */
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import { ImagesCarousel } from "@/components/images-carousel";
import LearnMore from "@/components/learn-more";
import OurMission from "@/components/our-mission";
import { OwnerMessage } from "@/components/owner-message";
import ServicesCards from "@/components/ServicesCards";
import { gqlEndPoint, gqlHeaders } from "@/lib/gql-client";
import CarouselQueryRes from "@/types/carousel-query";

const query = `
query GetCarousel {
  carouselCollection(order: postedAt_DESC) {
    items{
      _id
      image{
        url
      }
      description
      postedAt
    }
  }
}
`;

export default async function Home() {
  const res = await fetch(gqlEndPoint, {
    method: "POST",
    body: JSON.stringify({
      query
    }),
    headers: {
      ...gqlHeaders,
      "Content-Type": "application/json"
    },
    next: { revalidate: 60 }
  });

  const carouselImages = (await res.json()) as CarouselQueryRes;

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
      <ImagesCarousel
        data={carouselImages.data.carouselCollection.items.map((img) => {
          return {
            title: img.description,
            src: img.image.url
          };
        })}
      />

      <CTA />
    </>
  );
}
