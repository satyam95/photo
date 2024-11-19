import React from "react";

type CounterCardProps = {
  varient: "light" | "black";
  number: number;
  title: string;
};

const CounterCard = ({ varient, number, title }: CounterCardProps) => {
  return (
    <div
      className={`flex flex-col gap-2 md:gap-6 justify-center w-full items-center h-[199px] md:h-[290px] ${
        varient === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div
        className={`font-bold text-[48px] md:text-[64px] leading-none ${
          varient === "light" ? "text-black" : "text-white"
        }`}
      >
        {number}
      </div>
      <div
        className={`font-semibold text-base md:text-lg text-black leading-none ${
          varient === "light" ? "text-black" : "text-white"
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default CounterCard;
