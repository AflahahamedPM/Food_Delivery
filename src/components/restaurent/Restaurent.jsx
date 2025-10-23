"use client"
import React from "react";
import RestaurentCard from "../ReusableComponents/RestaurentCard";
import SearchInput from "../ReusableComponents/SearchInput";
import useServices from "@/app/restaurents/useServices";

const Restaurent = () => {
    const {handleInputChange, filteredRestaurents} = useServices();
  return (
    <div className="w-9/12 mx-auto mt-5">
      <div className="sm:flex justify-between">
        <p className="text-4xl font-bold mb-5">Restaruants</p>
        <SearchInput
          label="Search Restaurent"
          handleInputChange={handleInputChange}
        />
      </div>
      <RestaurentCard restaurents={filteredRestaurents}/>
    </div>
  );
};

export default Restaurent;
