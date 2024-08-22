/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NNKZTVPSRBc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl mx-auto py-12 ">
      <div className="flex flex-col justify-center space-y-6 p-4">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
          <p className="text-muted-foreground md:text-lg">
            Have a question or want to support our cause? Fill out the form and
            we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[120px]"
            />
          </div>
          <Button type="submit" variant={"brand"} className="w-full md:w-auto">
            Submit
          </Button>
        </form>
      </div>
      <div className="hidden md:block">
        <img
          src="/images/kids-friendship.jpeg"
          width="600"
          height="500"
          alt="Contact"
          className="rounded-xl object-cover"
          style={{
            aspectRatio: "600/500",
            objectFit: "cover",
            objectPosition: "top center"
          }}
        />
      </div>
    </div>
  );
}
