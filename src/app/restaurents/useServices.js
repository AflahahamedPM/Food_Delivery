import { useAuthenticateData } from "@/components/authentication/authContext/authProvider";
import useAlert from "@/Hooks/useAlert";
import { restaurentDatas } from "@/utils/restaurentData";
import React, { useState } from "react";

const useServices = () => {
  const { isLoggedIn } = useAuthenticateData();
  const { publishNotification } = useAlert();
  const [filteredRestaurents, setFilteredRestaurents] =
    useState(restaurentDatas);
  const [restaurents, setRestaurents] = useState(restaurentDatas);
  const [menuKeyWord, setMenuKeyword] = useState("");
  const [filteredMenu, setFilteredMenu] = useState([]);

  const syncMenuWithCart = (menuData) => {
    const savedCarts = JSON.parse(localStorage.getItem("allCartDatas")) || [];
    const userDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    const userCart = savedCarts.find(
      (cart) => cart.email === userDetails?.email
    );

    return menuData.map((item) => ({
      ...item,
      isInCart:
        userCart?.cart?.some((cartItem) => cartItem.uId === item.uId) || false,
    }));
  };

  const handleAddToCart = (foodData) => {
    if (!isLoggedIn) {
      publishNotification("Please login before adding to cart", "error");
      return;
    }

    const userDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    let allCarts = JSON.parse(localStorage.getItem("allCartDatas")) || [];

    let userCart = allCarts.find((data) => data.email === userDetails.email);

    if (userCart.cart.length > 0) {
      const isDifferentRestaurent = userCart.cart.some(
        (item) => item.resId !== foodData.resId
      );

      if (isDifferentRestaurent) {
        publishNotification(
          "Some items in your cart are from a different restaurant. You cannot add this item.",
          "error"
        );
        return;
      }
    }

    const alreadyInCart = userCart.cart.some(
      (item) => item.uId === foodData.uId
    );

    if (alreadyInCart) {
      publishNotification("Item already in your cart", "info");
      return;
    }

    userCart.cart.push(foodData);

    allCarts = allCarts.map((data) =>
      data.email === userDetails.email ? userCart : data
    );

    localStorage.setItem("allCartDatas", JSON.stringify(allCarts));
    publishNotification("Item added to cart!", "success");
    return "success"
  };

  const handleInputChange = (e, label, resId) => {
    const searchKey = e.target.value;

    if (label === "Search by menu") {
      setMenuKeyword(searchKey);

      const restaurent = restaurents?.find((resData) => resData?.uId === resId);

      let filteredMenu = restaurent?.menu?.filter((menuData) =>
        menuData?.name.toLowerCase().includes(searchKey.toLowerCase())
      );

      filteredMenu = syncMenuWithCart(filteredMenu || []);

      setFilteredMenu(filteredMenu);
    } else {
      const result = restaurents?.filter((resData) =>
        resData?.resName?.toLowerCase()?.includes(searchKey?.toLowerCase())
      );
      setFilteredRestaurents(result);
    }
  };

  return {
    handleAddToCart,
    handleInputChange,
    restaurents,
    filteredRestaurents,
    filteredMenu,
    menuKeyWord,
  };
};

export default useServices;
