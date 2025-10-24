"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "@/utils/testimonials";

export function Testimonials() {
  return (
    <div className="mt-20 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <p className="text-center font-bold text-4xl mb-8 text-[#1F3A4B]">
        What Our Customers Say
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

