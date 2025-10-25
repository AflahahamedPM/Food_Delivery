"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import TodaysPicks from "./TodaysPicks";
import FeaturedRestaurents from "./FeaturedRestaurents";
import Image from "next/image";
import { noodelsImage } from "../Image";
import { Testimonials } from "./Testimonials";
import Herosection from "./Herosection";
import LinePath from "./LinePath";

const HomeComponent = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <>
      <Herosection />
      <section
        ref={ref}
        className="relative mx-auto flex w-screen flex-col items-center overflow-hidden  px-4 text-[#1F3A4B]"
      >
        <TodaysPicks />
        <div className="absolute inset-0 z-0 flex justify-center">
          <LinePath scrollYProgress={scrollYProgress} />
        </div>

        <div className="mt-42 relative flex w-fit flex-col items-center justify-center gap-5 text-center">
          <Image src={noodelsImage} height={300} alt="noodlesImg" />
        </div>
        <FeaturedRestaurents />
        <Testimonials />
      </section>
    </>
  );
};



export default HomeComponent;
