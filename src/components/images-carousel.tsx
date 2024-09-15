/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface CarouselItem {
  title: string;
  src: string;
}

export function ImagesCarousel({ data }: { data: CarouselItem[] }) {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={{ category: "", ...card }} index={index} />
  ));

  return (
    <section className="max-w-screen-xl mx-auto mt-44 relative">
      <div className="absolute -z-10 -translate-y-full max-sm:-rotate-3 left-1/2 -translate-x-1/2">
        <img
          src="/images/art/crown.png"
          alt="crown art"
          width={100}
          height={100}
        />
      </div>
      <h1 className="to-blue-950 text-4xl font-black mb-6 text-center">
        Photo Gallery
      </h1>
      <div className="w-full h-full">
        <Carousel items={cards} />
      </div>
    </section>
  );
}
