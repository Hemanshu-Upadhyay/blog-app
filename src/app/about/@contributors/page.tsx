"use client";

import { AnimatedTooltip } from "@/app/components/Tooltip/Tooltip";
import React from "react";
const people = [
  {
    id: 1,
    name: "Niket",
    designation: "Senior Writer",
    image: "/assets/niket.png",
  },
  {
    id: 2,
    name: "Hemanshu Upadhyay",
    designation: "Product Manager",
    image: "/assets/hemanshu.jpg    ",
  },
  {
    id: 3,
    name: "Vaibhav Sharma",
    designation: "Head Writer",
    image: "/assets/vaibhav.png",
  },
  {
    id: 4,
    name: "Piyuesh Kumar",
    designation: "Marketing Head",
    image: "/assets/piyuesh.png",
  },
  {
    id: 5,
    name: "Aman Goyal",
    designation: "SEO Engineer",
    image: "/assets/aman.png",
  },
  {
    id: 6,
    name: "Archana Agivale",
    designation: "Content Manager/Reviewer",
    image: "/assets/archna.png",
  },
];

export default function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center mt-24 mb-10 w-full min">
      <AnimatedTooltip items={people} />
    </div>
  );
}
