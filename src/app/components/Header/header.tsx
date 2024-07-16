"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold">
          <Link href="/">InspireScape</Link>
        </div>
        <div className="hidden md:flex space-x-4  ">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-400">
            Blog
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            Join Us
          </Link>
          <Link href="/photos" className="text-white hover:text-gray-400">
            Team
          </Link>
        </div>
        <div className="md:hidden flex items-center ">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[1a202c]">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-400">
              Blog
            </Link>
            <Link href="/about" className="text-white hover:text-gray-400">
              Join Us
            </Link>
            <Link href="/photos" className="text-white hover:text-gray-400">
              Team
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
