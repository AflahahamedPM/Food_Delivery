import { useAuthenticateData } from "@/components/authentication/authContext/authProvider";
import { biriyaniImg, burgerImg, pizzaImg } from "@/components/Image";
import useAlert from "@/Hooks/useAlert";
import React from "react";

const useServices = () => {
  const { isLoggedIn } = useAuthenticateData();
  const { publishNotification } = useAlert();
  const navbarData = [
    { uId: "1", title: "Home", url: "/" },
    { uId: "2", title: "Restaurents", url: "/restaurents" },
    { uId: "3", title: "Cart", url: "/cart" },
  ];

  const dummyTopPicksData = [
    {
      uId: "reh01",
      imageUrl: biriyaniImg,
      resName: "Rahmath",
      price: 240,
      name: "Chicken Biriyani",
      qty: 1,
    },
    {
      uId: "kfc01",
      imageUrl: burgerImg,
      resName: "KFC",
      price: 160,
      name: "Beef Burger",
      qty: 1,
    },
    {
      uId: "dom01",
      imageUrl: pizzaImg,
      resName: "Dominos",
      price: 340,
      name: "Peperoni Pizza",
      qty: 1,
    },
    {
      uId: "kbc01",
      imageUrl: biriyaniImg,
      resName: "KBC",
      price: 220,
      name: "Chicken Biriyani",
      qty: 1,
    },
  ];

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

  return {
    navbarData,
    dummyTopPicksData,
    handleAddToCart,
  };
};

export default useServices;
