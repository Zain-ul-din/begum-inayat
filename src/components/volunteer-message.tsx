"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { MessageType } from "@/types/messages-query";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export default function VolunteerMessage({
  message
}: {
  message: MessageType;
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card className="w-full max-w-3xl relative">
      <div className="relative">
        <img
          src={message.picture.url}
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
                  src={message.picture.url}
                  alt={`${message.author} Picture`}
                />
                <AvatarFallback>{message.role}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{message.author}</div>
                <div className="text-sm text-white/80">{message.role}</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {new Date(message.postedAt).toDateString()}
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-10 bg-background py-4">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={message.picture.url}
                alt={`${message.author} Picture`}
              />
              <AvatarFallback>{message.role}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{message.author}</div>
              <div className="text-sm text-muted-foreground">
                {message.role}
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {new Date(message.postedAt).toDateString()}
          </div>
        </div>
      </div>
      <div
        className={`prose prose-lg px-4 py-6 md:px-6 lg:py-12 ${
          showMore ? "" : "max-h-96 overflow-hidden"
        }`}
      >
        {documentToPlainTextString(message.message.json)}
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
