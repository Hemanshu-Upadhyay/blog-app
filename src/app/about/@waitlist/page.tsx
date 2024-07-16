"use client";
import { BackgroundBeams } from "@/app/components/Form/Form";
import React from "react";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-[#1a1f2b] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join us to Write With Us
        </h1>
        <p></p>
        <p className="text-neutral-200 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Type in your email address, and we will send you a magic link to sign
          you up. Experience the joy of writing and become a part of our vibrant
          community.
        </p>
        <input
          type="text"
          placeholder="your@email.com"
          className="rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-[#1a1f2b] placeholder:text-neutral-200 py-1.5 pl-4"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
