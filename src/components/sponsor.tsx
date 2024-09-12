"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "@radix-ui/react-icons";

const IBN = "PK94FAYS0130006000000316";

export default function Sponsor() {
  return (
    <div className="flex flex-col min-h-[100dvh] max-w-screen-xl mx-auto">
      <section className="w-full py-12 md:py-24 pt-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              src="/images/sample-kids-drawing.jpg"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              width="550"
              height="400"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Sponsor a Child with Begum Inayat Welfare Society
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Help us provide food, education, and essential care to
                  underprivileged children in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Sponsor a Child for Rs 35,000 per Month
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your monthly sponsorship of Rs 35,000 will cover the cost of
                food, school fees, clothing, and other essentials for a child in
                need. We also welcome contributions towards university, college,
                or school fees on a monthly, quarterly, or annual basis.
              </p>
              <div
                className="border rounded-md w-full p-4 relative font-medium text-lg"
                onClick={() => {
                  window.navigator.clipboard.writeText(IBN);
                  alert("Number Copied");
                }}
              >
                Account Number (IBN): {IBN}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 border rounded-md hover:bg-gray-100 cursor-pointer transition-all dur">
                  <CopyIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
            <Card className="w-full max-w-lg mx-auto lg:ml-auto">
              <CardHeader>
                <CardTitle>Sponsor a Child</CardTitle>
                <CardDescription>
                  Fill out the form to sponsor a child with Begum Inayat Welfare
                  Society.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your address"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sponsorship">Sponsorship</Label>
                  <Select
                  //   id="sponsorship"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select sponsorship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">
                        Monthly (Rs 35,000)
                      </SelectItem>
                      <SelectItem value="quarterly">
                        Quarterly (Rs 105,000)
                      </SelectItem>
                      <SelectItem value="annual">
                        Annual (Rs 420,000)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="ml-auto" variant={"brand"}>
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
