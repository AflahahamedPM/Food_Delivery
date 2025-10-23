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
        className="object-cover object-center"
        priority
      />
    </div>
  );
};

export default Herosection;
