"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Menu = ({ data, resName, resId, handleAddToCart }) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <Image
        src={data?.imageUrl}
        alt={data?.uId}
        width={400}
        height={250}
        className="object-cover w-full h-56"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{data?.name}</h2>
        <p className="text-gray-600 mt-2 font-medium">{data?.resName || resName}</p>
        <p className="text-gray-600 my-2 text-left  text-sm">{data?.description}</p>
        <div className="flex justify-between items-center ">
          <p className="text-lg font-bold mt-3">₹{data?.price}</p>
          <Button
            className={`cursor-pointer ${
              data?.isInCart ? "" : "bg-[#F1B654] hover:bg-[#F1B654]"
            }`}
            onClick={
              data?.isInCart
                ? () => router.push("/cart")
                : () =>
                    handleAddToCart({
                      ...data,
                      resName: data?.resName || resName,
                      resId: data?.resId || resId,
                    })
            }
          >
            {data?.isInCart ? "Go to Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
