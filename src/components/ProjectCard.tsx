import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  img: string;
  imgAlt: string;
  date: string;
  cat: string;
  title: string;
  varient: "lr" | "rl";
};

const ProjectCard = ({
  img,
  imgAlt,
  date,
  cat,
  title,
  varient = "lr",
}: ProjectCardProps) => {
  return (
    <div
      className={`w-full  ${
        varient === "lr" ? "flex flex-col lg:flex-row" : "flex flex-col lg:flex-row-reverse"
      }`}
    >
      <div className="min-w-[221px] relative">
        <div
          className={`lg:absolute z-20 top-1/2 lg:transform lg:-translate-y-1/2 ${
            varient === "lr" ? "left-0" : "right-0"
          }`}
        >
          <div className="text-black font-semibold text-3xl md:text-4xl">{title}</div>
        </div>
      </div>
      <div
        className={`grow pt-2 lg:pt-0 flex gap-6 ${
          varient === "lr"
            ? "flex-col items-start"
            : "flex-col lg:flex-col-reverse lg:items-end"
        }`}
      >
        <div className="flex gap-4">
          <div className="text-sm text-black font-medium leading-none">
            {date}
          </div>
          <div className="w-3.5 h-3.5 rounded-full bg-black" />
          <div className="text-sm text-black font-semibold leading-none">
            {cat}
          </div>
        </div>
        <div className="relative">
          <Image
            src={img}
            alt={imgAlt}
            width={1135}
            height={560}
            className="h-[400px] md:max-h-[560px] object-cover object-center"
          />
          <div
            className={`absolute bottom-0 min-w-[190px] md:min-w-[233px] ${
              varient === "lr" ? "right-0" : "right-0 lg:left-0"
            }`}
          >
            <div className="bg-white py-4 md:py-6 px-6 md:px-8">
              <div className="flex justify-between items-center">
                <div className="font-semibold text-base text-black">
                  See Project
                </div>
                <div className="h-8 w-8 md:h-12 md:w-12 rounded-full border border-black flex justify-center items-center">
                  <Image
                    src="/img/arrow24.png"
                    alt="arrow right icon"
                    width={24}
                    height={24}
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
