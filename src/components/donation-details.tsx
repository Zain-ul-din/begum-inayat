"use client";

import { Button } from "@/components/ui/button";

const IBN = "PK94FAYS0130006000000316";

export default function DonationDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto p-4 md:p-8">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="\images\holding-hands.png"
          alt="Donation Image"
          width={800}
          height={600}
          className="w-full h-full object-cover"
          style={{ aspectRatio: "800/600", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">Help Children in Need</h2>
          <p className="text-sm">Your donation can make a difference.</p>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Donation Details</h3>
          <div className="grid gap-4 mt-4">
            <div className="grid gap-1">
              <span className="text-muted-foreground">Account Name</span>
              <p>Begum lnayat Welfare Society of Pakistan</p>
            </div>
            <div className="grid gap-1">
              <span className="text-muted-foreground">Branch Code</span>
              <p>301</p>
            </div>
            <div className="grid gap-1">
              <span className="text-muted-foreground">Branch Name</span>
              <p>Garden Town Branch Lahore Pakistan</p>
            </div>
            <div className="grid gap-1">
              <span className="text-muted-foreground">IBAN</span>
              <p>{IBN}</p>
            </div>
            <div className="grid gap-1">
              <span className="text-muted-foreground">SWIFT</span>
              <p>FAYSPKKA</p>
            </div>
          </div>
        </div>
        <Button
          variant={"brand"}
          className="w-full"
          onClick={() => {
            navigator.clipboard.writeText(IBN);
            alert("Account number copied to clipboard!");
          }}
        >
          Copy Account Number
        </Button>
      </div>
    </div>
  );
}
