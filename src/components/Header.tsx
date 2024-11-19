"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <header>
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="py-8 flex justify-between items-center">
            <div className="flex gap-7 items-center">
              <Link href="/">
                <Image
                  src="/img/logo.png"
                  alt="PhotoBy Logo"
                  height={29}
                  width={133}
                  className="cursor-pointer"
                />
              </Link>
              <ul className="hidden md:flex gap-8">
                <li className="text-sm text-black font-medium cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-sm text-black font-medium cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
                <li className="text-sm text-black font-medium cursor-pointer">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-sm text-black font-medium cursor-pointer">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="text-sm text-black font-medium cursor-pointer">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Image
                src="/img/fb.png"
                alt="Facebook Logo"
                height={24}
                width={24}
                className="cursor-pointer"
              />
              <Image
                src="/img/x.png"
                alt="X Logo"
                height={24}
                width={24}
                className="cursor-pointer"
              />
              <Image
                src="/img/in.png"
                alt="LinkedIn Logo"
                height={24}
                width={24}
                className="cursor-pointer"
              />
            </div>
            <div className="md:hidden">
              <Image
                src="/img/hamburger.png"
                alt="hamburger menu icon"
                height={24}
                width={24}
                className="cursor-pointer"
                onClick={handleChange}
              />
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed z-20 overflow-y-scroll top-0 right-0 h-full bg-white duration-300 ${
          isToggled ? "w-full" : "w-0"
        }`}
      >
        <div className="px-4 py-8">
          <Image
            src="/img/cross.png"
            alt="close icon"
            height={20}
            width={20}
            className="cursor-pointer"
            onClick={handleChange}
          />
          <div className="px-6 py-8">
            <ul className="flex flex-col">
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link href="/" onClick={handleChange}>
                  Home
                </Link>
              </li>
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link href="/about" onClick={handleChange}>
                  About
                </Link>
              </li>
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link href="/services" onClick={handleChange}>
                  Services
                </Link>
              </li>
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link href="/projects" onClick={handleChange}>
                  Projects
                </Link>
              </li>
              <li className="text-base py-5 px-4 text-black font-medium cursor-pointer border-b border-gray-300 hover:bg-gray-100">
                <Link href="/contact" onClick={handleChange}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
