"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ImagesCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="max-w-screen-xl mx-auto mt-32 md:mt-40 relative">
      <div className="absolute -z-10 -translate-y-full max-sm:-rotate-6 left-1/2 -translate-x-1/2">
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

const data = [
  {
    category: "Artificial Intelligence",
    title: "Image short description.",
    src: "/images/temp/pic_1.jpeg"
  },
  {
    category: "Productivity",
    title: "Image short description.",
    src: "/images/temp/pic_2.jpeg"
  },
  {
    category: "Product",
    title: "Image short description.",
    src: "/images/temp/pic_3.jpeg"
  },

  {
    category: "Product",
    title: "Image short description.",
    src: "/images/temp/pic_4.jpeg"
  },
  {
    category: "iOS",
    title: "Image short description.",
    src: "/images/temp/pic_5.jpeg"
  }
];
