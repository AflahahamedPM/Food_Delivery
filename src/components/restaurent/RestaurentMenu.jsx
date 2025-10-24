"use client";
import React, { useEffect, useState } from "react";
import Menu from "../ReusableComponents/Menu";
import useServices from "@/app/restaurents/useServices";
import SearchInput from "../ReusableComponents/SearchInput";

const RestaurentMenu = ({ restaurentData }) => {
  const { handleAddToCart, handleInputChange, filteredMenu, menuKeyWord } =
    useServices();

  const [menuWithCart, setMenuWithCart] = useState(restaurentData.menu || []);

  useEffect(() => {
    const savedCarts = JSON.parse(localStorage.getItem("allCartDatas")) || [];
    const userDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    const userCart = savedCarts.find(
      (cart) => cart.email === userDetails?.email
    );

    const updatedMenu = restaurentData.menu.map((item) => ({
      ...item,
      isInCart:
        userCart?.cart?.some((cartItem) => cartItem.uId === item.uId) || false,
    }));

    setMenuWithCart(updatedMenu);
  }, [restaurentData]);

  const handleAddAndUpdateUI = async (foodData) => {
    const response = await handleAddToCart(foodData);
    if (response === "success") {
      setMenuWithCart((prev) =>
        prev.map((item) =>
          item.uId === foodData.uId ? { ...item, isInCart: true } : item
        )
      );
    }
  };

  const renderData = menuKeyWord?.length > 0 ? filteredMenu : menuWithCart;

  return (
    <div className="w-9/12 mx-auto mt-5">
      <div className="sm:flex justify-between">
        <p className="text-4xl font-bold mb-5">{restaurentData?.resName}</p>

        <SearchInput
          label="Search by menu"
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
              resId={restaurentData?.uId}
              handleAddToCart={handleAddAndUpdateUI}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurentMenu;
