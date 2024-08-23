import MediaGallery from "@/components/gallery";
import Gallery, { MediaItem } from "@/components/gallery";

const galleryItems: MediaItem[] = [
  { type: "full screen", src: "/images/temp/pic_2.jpeg" },
  { type: "landscape", src: "/images/temp/pic_1.jpeg" },
  { type: "landscape", src: "/images/temp/pic_3.jpeg" },
  { type: "landscape", src: "/images/temp/pic_4.jpeg" },
  { type: "portrait", src: "/images/temp/pic_6.jpeg" },
  { type: "portrait", src: "/images/temp/pic_portrait.jpeg" },
  { type: "portrait", src: "/images/temp/pic_portrait_1.jpeg" },
  { type: "portrait", src: "/images/temp/pic_portrait_2.jpeg" },
  { type: "portrait", src: "/images/temp/pic_portrait_3.jpeg" },
  { type: "portrait", src: "/images/temp/pic_portrait_4.jpeg" },
  { type: "portrait", src: "/images/temp/pic_portrait_5.jpeg" },
  { type: "portrait", src: "/images/temp/pic_portrait_6.jpeg" },
  { type: "portrait", src: "/images/temp/pic_portrait_7.jpeg" },
  { type: "portrait", src: "/images/temp/pic_portrait_8.jpeg" }
  //   { type: "video", src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" } // Full YouTube URL
  // Add more items as needed
];

export default function OurWorkPage() {
  return (
    <div className="max-w-screen-xl mx-auto relative mt-12">
      <h1 className="text-center text-3xl font-bold mb-8">Media Gallery</h1>
      <MediaGallery items={galleryItems} />
    </div>
  );
}
