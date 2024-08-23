"use client";
import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";

export function OwnerMessage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = `My Journey from Being an Orphan to Building an Orphanage My journey
    began in an orphanage, where I spent most of my life. Growing up
    without parents was challenging, but the orphanage became my home,
    my shelter, and the place where I learned valuable lessons about
    life...`;

  const fullText = `My Journey from Being an Orphan to Building an Orphanage My journey
    began in an orphanage, where I spent most of my life. Growing up
    without parents was challenging, but the orphanage became my home,
    my shelter, and the place where I learned valuable lessons about
    life. The caregivers did their best to provide us with food,
    education, and emotional support, despite limited resources. Despite
    the difficulties, I was determined to make something of my life. I
    knew that education would be the key to a better future, so I
    focused diligently on my studies. After years of persistence and
    dedication, I completed my degree—an achievement that once seemed
    almost impossible given my circumstances. During my time in the
    orphanage, I often reflected on what it meant to be in such a place,
    surrounded by children with similar stories. Many of us shared the
    same struggles and uncertainties. It was during this period that I
    made a decision: if I could ever change my situation and achieve
    something, I would give back by helping other orphaned children. I
    dreamed of starting an orphanage where children could find love,
    care, and opportunities to pursue their dreams, just as I did. This
    dream later took shape under the name Begum Inayat Welfare Society
    in honor of my mother. Alhamdulillah, today, that dream has become a
    reality. By the grace of God and with the support of kind-hearted
    individuals, I was able to establish an orphanage that now houses
    around 175 children of various ages. These children have found not
    just a home but a family within our walls. We provide them with
    education, emotional support, and a nurturing environment that helps
    them grow into confident, capable individuals. I’m especially proud
    that some of our children are now attending university and various
    colleges, following their passions and aiming high. We focus not
    only on meeting basic needs but also on creating opportunities for
    these children to break free from the cycle of poverty and hardship.
    This orphanage is more than just a place—it’s a symbol of hope. It
    stands as a reminder that no matter where you come from or what
    circumstances you face, you can rise above them and create a better
    future. My journey has come full circle: from being a child in an
    orphanage to now providing the same love and support to other
    children that was once given to me. This is not just my story; it’s
    the story of every child who has found hope and a future within
    these walls. Alhamdulillah, our work continues, and with God’s help,
    we will keep growing, giving more children the chance to chase their
    dreams.`;

  return (
    <div className="mt-24 mx-auto max-w-screen-xl p-6 relative">
      <div className="absolute top-0 z-10 md:left-0 right-0">
        <img
          src="/images/art/doodle-flower.png"
          alt="flower art"
          width={100}
          height={100}
        />
      </div>
      <div className="bg-cyan-50 relative p-6 md:p-12">
        <div className="z-20 mt-8">
          <h2 className="font-bold text-cyan-600 text-sm my-1">
            Founder Message
          </h2>
          <h1 className="text-4xl font-black mb-6 text-blue-950">
            Dr Amina Amber
          </h1>
          <p className="max-sm:text-sm text-balance">
            {isExpanded ? fullText : shortText}
          </p>
          <button
            onClick={toggleReadMore}
            className="text-cyan-600 mt-2 underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function LegacyOwnerMessage() {
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
    <div className="w-full mt-12">
      <Timeline
        data={data}
        title="Dr Amina Amber"
        description="Dr Amina Amber's Journey from Being an Orphan to Building an Orphanage."
      />
    </div>
  );
}
