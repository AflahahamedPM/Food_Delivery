"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Menu = ({ data, resName, handleAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden">
      <Image
        src={data?.imageUrl}
        alt={data?.uId}
        width={400}
        height={250}
        className="object-cover w-full h-56"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{data?.name}</h2>
        <p className="text-gray-600 mt-2">{data?.resName || resName}</p>
        <div className="flex justify-between items-center ">
          <p className="text-lg font-bold mt-3">₹{data?.price}</p>
          <Button
            className="cursor-pointer"
            onClick={() =>
              handleAddToCart({ ...data, resName: data?.resName || resName })
            }
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
