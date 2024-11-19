import Image from "next/image";
import React from "react";

type BlogCardProps = {
  img: string;
  imgAlt: string;
  cat: string;
  pubDate: string;
  title: string;
};

const BlogCard = ({ img, imgAlt, cat, pubDate, title }: BlogCardProps) => {
  return (
    <div>
      <Image src={img} alt={imgAlt} width={436} height={400} />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="font-semibold text-sm text-black leading-none">
            {cat}
          </div>
        </div>
        <div className="font-semibold text-sm text-black leading-none">
          {pubDate}
        </div>
      </div>
      <div className="bg-black h-px w-full mt-2 md:mt-5 mb-2 md:mb-7" />
      <h3 className="text-black font-semibold text-xl md:text-2xl leading-none">
        {title}
      </h3>
    </div>
  );
};

export default BlogCard;
