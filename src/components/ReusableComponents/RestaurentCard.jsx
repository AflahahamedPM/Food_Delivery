"use client";
import { restaurentDatas } from "@/utils/restaurentData";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const RestaurentCard = ({ isFromHomePage = false, restaurents }) => {
  const router = useRouter();
  const renderData = isFromHomePage
    ? restaurentDatas?.slice(0, 5)
    : restaurents;
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {renderData?.length === 0 ? (
        <p className="text-2xl font-semibold flex items-center justify-center w-full">
          No Restaurents Found
        </p>
      ) : (
        renderData?.map((data) => (
          <div
            key={data?.uId}
            className="bg-white shadow-md rounded-2xl overflow-hidden"
          >
            <Image
              src={data?.resImgUrl}
              alt={data?.resName}
              width={400}
              height={250}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{data?.resName}</h2>
              <p className="text-lg my-2 text-gray-600">{data?.place}</p>
              <Button
                className="cursor-pointer w-full"
                onClick={() => router.push(`/restaurents/${data?.uId}/menu`)}
              >
                Menu
              </Button>
            </div>
            {/* </div> */}
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurentCard;
