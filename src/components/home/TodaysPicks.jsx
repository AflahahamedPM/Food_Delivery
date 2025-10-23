"use client";
import useServices from "@/app/useServices";
import React from "react";
import Menu from "../ReusableComponents/Menu";

const TodaysPicks = () => {
  const { dummyTopPicksData, handleAddToCart } = useServices();

  return (
    <div className="w-10/12 mx-auto py-10">
      <p className="text-center font-bold text-4xl mb-8">Today's Top Picks</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyTopPicksData?.map((data) => (
          <Menu key={data?.uId} data={data} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default TodaysPicks;
