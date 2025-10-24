import React from "react";
import RestaurentCard from "../ReusableComponents/RestaurentCard";

const FeaturedRestaurents = () => {
  return (
    <div className="w-10/12 h-auto mx-auto pt-20 z-100">
      <p className="text-center font-bold text-4xl mb-2">
        Featured Restaurents
      </p>
        <RestaurentCard isFromHomePage={true}/>
    </div>
  );
};

export default FeaturedRestaurents;
