import Image from "next/image";
import React from "react";

type ServiceColProps = {
  img: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  btnText: string;
  btmClass: string;
};

const ServiceCol = ({
  img,
  imgAlt,
  imgWidth,
  imgHeight,
  title,
  btnText,
  btmClass,
}: ServiceColProps) => {
  return (
    <div className="relative">
      <Image
        src={img}
        alt={imgAlt}
        height={imgHeight}
        width={imgWidth}
        className={`w-full h-[211px] object-cover object-center md:h-auto lg:h-${imgHeight} lg:w-${imgWidth}`}
      />
      <div className={`lg:absolute lg:w-96 ${btmClass}`}>
        <div className="flex flex-col gap-4 md:gap-8 p-4 md:p-8 bg-white">
          <h3 className="font-semibold text-xl md:text-3xl text-black md:leading-none">
            {title}
          </h3>
          <div className="flex items-center gap-8">
            <div className="font-semibold text-base text-black leading-none">
              {btnText}
            </div>
            <div className="h-8 w-8 flex border border-black rounded-full justify-center items-center">
              <Image
                src="/img/arrow16.png"
                alt="right arrow icon"
                height={16}
                width={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCol;
