import Image from "next/image";
import React from "react";

type ServiceCardProps = {
  img: string;
  imgAlt: string;
  title: string;
  desp: string;
};

const ServiceCard = ({ img, imgAlt, title, desp }: ServiceCardProps) => {
  return (
    <div>
      <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-gray-100 flex justify-center items-center">
        <Image
          src={img}
          alt={imgAlt}
          width={64}
          height={64}
          className="md:w-16 md:h-16 w-10 h-10"
        />
      </div>
      <h3 className="text-black font-bold text-base md:text-lg mb-4 md:mb-8 mt-6 md:mt-11">
        {title}
      </h3>
      <p className="text-sm md:text-base leading-6 font-medium text-black">
        {desp}
      </p>
    </div>
  );
};

export default ServiceCard;
