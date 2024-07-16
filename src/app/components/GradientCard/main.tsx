"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./gradientCard";
import Link from "next/link";

const BackgroundGradientCard = ({ title, author, image, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
        <Image
          src={image}
          alt={title}
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <button className=" pl-4 pr-1 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Written By: </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {author}
          </span>
        </button>
      </BackgroundGradient>
    </Link>
  );
};

export default BackgroundGradientCard;
