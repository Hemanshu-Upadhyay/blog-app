"use client";

import { TypewriterEffectSmooth } from "./type-Writer";
import Link from "next/link";

export function TypewriterEffect() {
  const words = [
    {
      text: "Write",
    },
    {
      text: "and",
    },
    {
      text: "Read",
    },
    {
      text: "with",
    },
    {
      text: "InspireScape.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          href="/blog"
          className="w-40 h-10 rounded-xl text-center bg-black border dark:border-white border-transparent text-white text-sm"
        >
          <p className="mt-2">Read Now</p>
        </Link>
      </div>
    </div>
  );
}
