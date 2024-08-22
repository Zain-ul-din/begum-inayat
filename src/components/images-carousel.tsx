"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ImagesCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
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
