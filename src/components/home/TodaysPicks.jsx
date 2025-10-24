"use client";
import useServices from "@/app/useServices";
import React from "react";
import Menu from "../ReusableComponents/Menu";

const TodaysPicks = () => {
  const { dummyTopPicksData, handleAddToCart } = useServices();

  return (
    <div className="w-full sm:w-10/12 mx-auto py-10 z-10">
      <p className="text-center font-bold text-4xl mb-8 px-4 sm:px-0">
        Today's Top Picks
      </p>

      <div className="sm:hidden overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-4 pb-4">
          {dummyTopPicksData?.map((data) => (
            <div key={data?.uId} className="shrink-0 w-[280px]">
              <Menu data={data} handleAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyTopPicksData?.map((data) => (
          <Menu key={data?.uId} data={data} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default TodaysPicks;