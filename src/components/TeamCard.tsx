import Image from "next/image";
import React from "react";

type TeamCardProps = {
  img: string;
  imgAlt: string;
  name: string;
};

const TeamCard = ({ img, imgAlt, name }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={img} alt={imgAlt} width={436} height={400} />
      <div className="flex justify-between w-full items-center">
        <h3 className="text-sm text-black font-semibold leading-none">
          {name}
        </h3>
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
      </div>
    </div>
  );
};

export default TeamCard;
