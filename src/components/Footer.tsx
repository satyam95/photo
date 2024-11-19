import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="font-bold text-white text-5xl lg:text-7xl leading-none">
              PHOTOBY
            </div>
            <Image
              src="/img/sm-logo-white.png"
              alt="Small rounded logo"
              height={36}
              width={36}
            />
          </div>
          <div className="max-w-[300px] lg:max-w-[500px]">
            <p className="text-white text-lg leading-[30px] font-semibold">
              Lorem ipsum dolor sit amet consectetur. Sit volutpat metus quis ut
              tellus pellentesque pharetra cursus.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-between pt-12 md:pt-16">
          <div>
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <div className="text-white font-semibold text-lg leading-none">
                STAY IN THE KNOW
              </div>
            </div>
            <div className="h-[34px] w-[300px] lg:w-[395px] border-b border-white mt-4 flex justify-between items-center">
              <input
                type="email"
                placeholder="EMAIL ADRESS"
                className="w-full h-full text-white grow bg-transparent placeholder:text-sm placeholder:text-white focus:outline-none"
              />
              <button className="min-w-6 h-full">
                <Image
                  src="/img/white-right-arrow.png"
                  alt="white right arrow icon"
                  height={18}
                  width={18}
                />
              </button>
            </div>
          </div>
          <div className="max-w-[313px]">
            <div className="flex justify-between gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-white leading-[30px]">
                  SOCIAL
                </h3>
                <ul className="flex flex-col gap-2">
                  <li className="font-medium text-white text-sm">
                    <Link href="#">Instagramm</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="#">Twitter</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="#">Linkedin</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="#">Facebook</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-white leading-[30px]">
                  PAGES
                </h3>
                <ul className="flex flex-col gap-2">
                  <li className="font-medium text-white text-sm">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="/services">Services</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-white leading-[30px]">
                  OFFICES
                </h3>
                <ul className="flex flex-col gap-2">
                  <li className="font-medium text-white text-sm">
                    <Link href="#">Instagramm</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="#">Twitter</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="#">Linkedin</Link>
                  </li>
                  <li className="font-medium text-white text-sm">
                    <Link href="#">Facebook</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
