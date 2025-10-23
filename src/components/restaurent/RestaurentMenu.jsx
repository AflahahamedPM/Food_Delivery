"use client";
import React from "react";
import Menu from "../ReusableComponents/Menu";
import useServices from "@/app/restaurents/useServices";
import SearchInput from "../ReusableComponents/SearchInput";

const RestaurentMenu = ({ restaurentData }) => {
  const { handleAddToCart, handleInputChange, filteredMenu, menuKeyWord } =
    useServices();
  const renderData =
    menuKeyWord?.length > 0 ? filteredMenu : restaurentData?.menu;
    
  return (
    <div className="w-9/12 mx-auto mt-5">
      <div className="sm:flex justify-between">
        <p className="text-4xl font-bold mb-5">{restaurentData?.resName}</p>

        <SearchInput
          label="Search Menu"
          handleInputChange={handleInputChange}
          restaurentId={restaurentData?.uId}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderData?.length === 0 ? (
          <p className="text-2xl font-semibold flex items-center justify-center w-full">
            No Menu Found
          </p>
        ) : (
          renderData?.map((data) => (
            <Menu
              key={data?.uId}
              data={data}
              resName={restaurentData?.resName}
              handleAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurentMenu;
