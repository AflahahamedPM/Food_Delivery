import { restaurentDatas } from "@/utils/restaurentData";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import RestaurentCard from "../ReusableComponents/RestaurentCard";

const FeaturedRestaurents = () => {
  return (
    <div className="w-10/12 mx-auto py-10">
      <p className="text-center font-bold text-4xl mb-8">
        Featured Restaurents
      </p>
        <RestaurentCard isFromHomePage={true}/>
    </div>
  );
};

export default FeaturedRestaurents;
