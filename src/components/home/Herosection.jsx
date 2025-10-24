import Image from "next/image";
import React from "react";
import { heroSectionImg } from "../Image";

const Herosection = () => {
  return (
    <div className="relative w-full h-[600px] mt-6">
      <Image
        src={heroSectionImg}
        alt="Hero section"
        fill
        className="object-cover object-center brightness-75" 
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl sm:text-6xl font-extrabold text-center drop-shadow-lg">
          Get your food on door
        </h1>
      </div>
    </div>
  );
};

export default Herosection;
