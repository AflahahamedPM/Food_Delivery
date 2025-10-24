"use client";
import { restaurentDatas } from "@/utils/restaurentData";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import RatingStar from "../restaurent/RatingStar";

const RestaurentCard = ({ isFromHomePage = false, restaurents }) => {
  const router = useRouter();
  const renderData = isFromHomePage
    ? restaurentDatas?.slice(0, 6)
    : restaurents;

  if (!renderData || renderData.length === 0) {
    return (
      <p className="text-2xl font-semibold flex items-center justify-center w-full mt-10">
        No Restaurants Found
      </p>
    );
  }

  return (
    <div className="w-full mx-auto pt-10">
      {isFromHomePage && (
        <div className="sm:hidden overflow-x-auto scrollbar-hide px-4">
          <div className="flex gap-4 pb-4">
            {renderData.map((data) => (
              <div key={data?.uId} className="shrink-0 w-[280px]">
                <Card data={data} router={router} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${
          isFromHomePage ? "hidden sm:grid" : ""
        }`}
      >
        {renderData.map((data) => (
          <Card key={data?.uId} data={data} router={router} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ data, router }) => (
  <div className="relative bg-white shadow-md rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
    <div className="relative w-full h-56">
      <Image
        src={data?.resImgUrl}
        alt={data?.resName}
        fill
        className="object-cover rounded-t-2xl"
      />
    </div>

    <div className="p-4 pb-16">
      <h2 className="text-xl font-semibold">{data?.resName}</h2>
      <p className="text-lg my-2 text-gray-600">{data?.place}</p>
      <p className="text-gray-600 my-2 text-left  text-sm">{data?.resDescription}</p>
      <RatingStar rating={data?.rating} />
    </div>

    <div
      className="
        absolute left-0 w-full flex justify-center
        lg:bottom-[-60px] lg:transition-all lg:duration-500 lg:ease-in-out lg:group-hover:bottom-4
        bottom-4
      "
    >
      <Button
        className="w-[90%] bg-[#f1b654] hover:bg-[#e3a846] cursor-pointer text-lg font-semibold shadow-md"
        onClick={() => router.push(`/restaurents/${data?.uId}/menu`)}
      >
        Menu
      </Button>
    </div>
  </div>
);

export default RestaurentCard;
