import { useAuthenticateData } from "@/components/authentication/authContext/authProvider";
import useAlert from "@/Hooks/useAlert";
import { restaurentDatas } from "@/utils/restaurentData";
import React, { useState } from "react";

const useServices = () => {
  const { isLoggedIn } = useAuthenticateData();
  const { publishNotification } = useAlert();
  const [filteredRestaurents, setFilteredRestaurents] =
    useState(restaurentDatas);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [restaurents, setRestaurents] = useState(restaurentDatas);
  const [menuKeyWord,setMenuKeyword] = useState("");

  const handleAddToCart = (foodData) => {
    if (!isLoggedIn) {
      publishNotification("Please login before adding to cart", "error");
      return;
    }

    const userDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    let allCarts = JSON.parse(localStorage.getItem("allCartDatas")) || [];

    let userCart = allCarts.find((data) => data.email === userDetails.email);

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
  };

  const handleInputChange = (e, label, resId) => {
    const searchKey = e.target.value;

    if (label === "Search Menu") {
        setMenuKeyword(searchKey)
      const restaurent = restaurents?.filter(
        (resData) => resData?.uId === resId
      );

      const filteredMenu = restaurent[0]?.menu?.filter((menuData) =>
        menuData?.name.toLowerCase().includes(searchKey.toLowerCase())
      );

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
    menuKeyWord
  };
};

export default useServices;
