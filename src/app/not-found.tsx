"use client";

import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="">Oops, page not found</p>
      <div className="mt-4">
        <Link
          className="inline-block px-6 py-3 text-center text-white bg-blue-500 rounded hover:bg-blue-600"
          href="/"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
