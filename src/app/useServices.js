import { useAuthenticateData } from "@/components/authentication/authContext/authProvider";
import {
  beefBurger,
  biriyaniImg,
  burgerImg,
  chickenMandhiNahdi,
  kbcChickenBiriyani,
  pizzaImg,
  rahmathChickenImg,
  soofiChickenMandhi,
} from "@/components/Image";
import useAlert from "@/Hooks/useAlert";
import React, { useState } from "react";

const useServices = () => {
  const { isLoggedIn } = useAuthenticateData();
  const { publishNotification } = useAlert();
  const navbarData = [
    { uId: "1", title: "Home", url: "/" },
    { uId: "2", title: "Restaurants", url: "/restaurents" },
    { uId: "3", title: "Cart", url: "/cart" },
  ];

  const mockData = [
    {
      uId: "reh01",
      resId: "res01",
      imageUrl: rahmathChickenImg,
      resName: "Rahmath",
      price: 240,
      name: "Chicken Biriyani",
      qty: 1,
      maxQty: 6,
      description:
        "A flavorful chicken biriyani made with fragrant basmati rice, tender chicken pieces, and a blend of aromatic spices, garnished with fried onions and fresh coriander.",
    },
    {
      uId: "kfc01",
      resId: "res02",
      imageUrl: beefBurger,
      resName: "KFC",
      price: 160,
      name: "Beef Burger",
      qty: 1,
      maxQty: 5,
      description:
        "A flavorful chicken biriyani made with fragrant basmati rice, tender chicken pieces, and a blend of aromatic spices, garnished with fried onions and fresh coriander.",
    },
    {
      uId: "dom01",
      resId: "res03",
      imageUrl: pizzaImg,
      resName: "Dominos",
      price: 340,
      name: "Peperoni Pizza",
      qty: 1,
      maxQty: 4,
      description:
        "A flavorful chicken biriyani made with fragrant basmati rice, tender chicken pieces, and a blend of aromatic spices, garnished with fried onions and fresh coriander.",
    },
    {
      uId: "kbc01",
      resId: "res04",
      imageUrl: kbcChickenBiriyani,
      resName: "KBC",
      price: 220,
      name: "Chicken Biriyani",
      qty: 1,
      maxQty: 4,
      description:
        "A flavorful chicken biriyani made with fragrant basmati rice, tender chicken pieces, and a blend of aromatic spices, garnished with fried onions and fresh coriander.",
    },
    {
      uId: "nhd01",
      imageUrl: chickenMandhiNahdi,
      price: 180,
      name: "Chicken Mandhi",
      resName:"Nahdi Mandhi",
      qty: 1,
      maxQty: 4,
      description:
        "A flavorful chicken biriyani made with fragrant basmati rice, tender chicken pieces, and a blend of aromatic spices, garnished with fried onions and fresh coriander.",
    },
    {
      uId: "soo01",
      imageUrl: soofiChickenMandhi,
      price: 190,
      name: "Chicken Mandhi",
      resName:"Soofi Mandhi",
      qty: 1,
      maxQty: 4,
      description:
        "A flavorful chicken biriyani made with fragrant basmati rice, tender chicken pieces, and a blend of aromatic spices, garnished with fried onions and fresh coriander.",
    },
  ];

  const [dummyTopPicksData, setDummyTopPicksData] = useState(() => {
    const savedCarts = JSON.parse(localStorage.getItem("allCartDatas")) || [];
    const userDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    const userCart = savedCarts.find(
      (cart) => cart.email === userDetails?.email
    );

    return mockData.map((item) => ({
      ...item,
      isInCart:
        userCart?.cart?.some((cartItem) => cartItem.uId === item.uId) || false,
    }));
  });

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

    // update the data for the toggle button

    setDummyTopPicksData((prevData) =>
      prevData.map((item) =>
        item.uId === foodData.uId ? { ...item, isInCart: true } : item
      )
    );

    publishNotification("Item added to cart!", "success");
  };

  return {
    navbarData,
    dummyTopPicksData,
    handleAddToCart,
  };
};

export default useServices;
