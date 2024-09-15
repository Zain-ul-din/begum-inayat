import MediaGallery from "@/components/gallery";
import { gqlEndPoint, gqlHeaders } from "@/lib/gql-client";
import GalleryQueryRes from "@/types/gallery-query";

const query = `
  query GetGallery {
  imageGalleryCollection(order: sys_publishedAt_DESC) {
    items{
      _id
      image {
        url
      }
      type {
        name
      }
      postedAt
    }
  }
}
`;

// const galleryItems: MediaItem[] = [
//   { type: "full screen", src: "/images/temp/pic_2.jpeg" },
//   { type: "landscape", src: "/images/temp/pic_1.jpeg" },
//   { type: "landscape", src: "/images/temp/pic_3.jpeg" },
//   { type: "landscape", src: "/images/temp/pic_4.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_6.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_portrait.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_portrait_1.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_portrait_2.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_portrait_3.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_portrait_4.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_portrait_5.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_portrait_6.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_portrait_7.jpeg" },
//   { type: "portrait", src: "/images/temp/pic_portrait_8.jpeg" }
//   //   { type: "video", src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" } // Full YouTube URL
//   // Add more items as needed
// ];

export default async function OurWorkPage() {
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

  const images = (await res.json()) as GalleryQueryRes;

  return (
    <div className="max-w-screen-xl mx-auto relative mt-12">
      <h1 className="text-center text-3xl font-bold mb-8">Media Gallery</h1>
      <MediaGallery
        items={images.data.imageGalleryCollection.items.map((img) => {
          return {
            type: img.type.name as any,
            src: img.image.url
          };
        })}
      />
    </div>
  );
}
