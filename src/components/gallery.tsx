import React from "react";
import "tailwindcss/tailwind.css";

export type MediaItem = {
  type: "landscape" | "portrait" | "full screen" | "video";
  src: string;
};

type MediaGalleryProps = {
  items: MediaItem[];
};

// Helper function to extract the YouTube video ID
const extractYouTubeID = (url: string): string | null => {
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const MediaGallery: React.FC<MediaGalleryProps> = ({ items }) => {
  // Set a consistent height for landscape and video items
  const itemHeightClass = "h-60"; // Adjust this value to change the height

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => {
          const { type, src } = item;

          switch (type) {
            case "landscape":
              return (
                <div
                  key={index}
                  className={`${itemHeightClass} overflow-hidden h-full rounded-md`}
                >
                  <img
                    src={src}
                    alt="Landscape"
                    className="w-full h-full object-cover"
                  />
                </div>
              );

            case "portrait":
              return (
                <div
                  key={index}
                  className={`row-span-2 max-h-[80vh] h-full ${itemHeightClass} overflow-hidden rounded-md`}
                >
                  <img
                    src={src}
                    alt="Portrait"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              );

            case "full screen":
              return (
                <div
                  key={index}
                  className="col-span-full max-h-[35rem] overflow-hidden rounded-md"
                >
                  <img
                    src={src}
                    alt="Full Screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              );

            case "video": {
              const videoId = extractYouTubeID(src);
              return videoId ? (
                <div
                  key={index}
                  className={`${itemHeightClass} overflow-hidden rounded-md`}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div
                  key={index}
                  className={`${itemHeightClass} overflow-hidden rounded-md`}
                >
                  <p>Invalid YouTube URL</p>
                </div>
              );
            }

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default MediaGallery;
