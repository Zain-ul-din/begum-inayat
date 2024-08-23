"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function VolunteerMessage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card className="w-full max-w-3xl relative">
      <div className="relative">
        <img
          src="/images/temp/pic_1.jpeg"
          alt="Volunteer Message"
          width="600"
          height="300"
          className="object-cover aspect-[2/1] w-full rounded-t-lg"
        />
        <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="/images/temp/sample-avatar-pic.jpeg"
                  alt="Owner Picture"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Dr Amina</div>
                <div className="text-sm text-white/80">Owner</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">August 22, 2024</div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-10 bg-background py-4">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src="/images/temp/sample-avatar-pic.jpeg"
                alt="Owner Picture"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Dr Amina</div>
              <div className="text-sm text-muted-foreground">Owner</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">August 22, 2024</div>
        </div>
      </div>
      <div
        className={`prose prose-lg px-4 py-6 md:px-6 lg:py-12 ${
          showMore ? "" : "max-h-96 overflow-hidden"
        }`}
      >
        <p>My Journey from Being an Orphan to Building an Orphanage</p>

        <p>
          My journey began in an orphanage, where I spent most of my life.
          Growing up without parents was challenging, but the orphanage became
          my home, my shelter, and the place where I learned valuable lessons
          about life. The caregivers did their best to provide us with food,
          education, and emotional support, despite limited resources.
        </p>

        <p>
          Despite the difficulties, I was determined to make something of my
          life. I knew that education would be the key to a better future, so I
          focused diligently on my studies. After years of persistence and
          dedication, I completed my degree—an achievement that once seemed
          almost impossible given my circumstances.
        </p>

        {/* More content... */}
        <p>
          This orphanage is more than just a place—it’s a symbol of hope. It
          stands as a reminder that no matter where you come from or what
          circumstances you face, you can rise above them and create a better
          future. My journey has come full circle: from being a child in an
          orphanage to now providing the same love and support to other children
          that was once given to me.
        </p>

        <p>
          This is not just my story; it’s the story of every child who has found
          hope and a future within these walls. Alhamdulillah, our work
          continues, and with God’s help, we will keep growing, giving more
          children the chance to chase their dreams.
        </p>
      </div>
      <div className={cn("px-4 isolate  py-4 md:px-6 lg:py-6 relative")}>
        {!showMore && (
          <div className="absolute w-full -z-10 h-20 bg-gradient-to-b from-transparent via-white/80 to-white inset-0 -translate-y-full"></div>
        )}
        <button
          className="text-blue-500  hover:underline focus:outline-none"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </Card>
  );
}
