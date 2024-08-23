import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function OwnerMessage() {
  const data = [
    {
      title: "Childhood",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200  md:text-lg font-normal mb-4">
            Grew up in an orphanage, which became home, providing food,
            education, and emotional support despite limited resources.
          </p>
        </div>
      )
    },
    {
      title: "Education Pursuit",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200  md:text-lg font-normal mb-4">
            Focused diligently on studies, believing education was key to a
            better future. Overcame challenges to complete a degree.
          </p>
        </div>
      )
    },
    {
      title: "Vision for an Orphanage",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200  md:text-lg font-normal mb-4">
            While still in the orphanage, decided to help other orphaned
            children and dreamed of starting an orphanage.
          </p>
        </div>
      )
    },
    {
      title: "Foundation of Begum Inayat Welfare Society",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200  md:text-lg font-normal mb-4">
            Established Begum Inayat Welfare Society, naming it in honor of my
            mother. Started an orphanage that now houses around 175 children.
          </p>
        </div>
      )
    },
    {
      title: "Present Day",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200  md:text-lg font-normal mb-4">
            Provides children with education, emotional support, and a nurturing
            environment. Some children are now attending university and various
            colleges, breaking free from poverty.
          </p>
        </div>
      )
    },
    {
      title: "Future Vision",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-200  md:text-lg font-normal mb-4">
            Continue to grow the orphanage, offering hope and opportunities for
            more children to chase their dreams. A symbol that one can rise
            above any circumstance and create a better future.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full">
      <Timeline
        data={data}
        title="Dr Amina Amber"
        description="Dr Amina Amber's Journey from Being an Orphan to Building an Orphanage."
      />
    </div>
  );
}
