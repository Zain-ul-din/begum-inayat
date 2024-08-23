"use client";
import Markdown from "marked-react";

export default function MarkdownPage({ children }: { children: string }) {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4 prose">
      <Markdown>{children}</Markdown>
      {/* Add more content as needed */}
    </div>
  );
}
