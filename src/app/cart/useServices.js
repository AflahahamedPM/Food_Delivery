import React, { useEffect, useState } from "react";

const useServices = () => {
  const [cartDetails, setCartDetails] = useState({});
  const [orderSummary, setOrderSummary] = useState({
    subtotal: "",
    deliveryFee: 0.00,
    total: "",
  });
  
  useEffect(() => {
    getCartDetails();
  }, []);

  const getCartDetails = () => {
    const userDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));

    let allCarts = JSON.parse(localStorage.getItem("allCartDatas")) || [];

    let userCart = allCarts.find((data) => data?.email === userDetails?.email);
    const subTotal =
      userCart?.cart?.reduce((acc, item) => acc + item.price * item.qty, 0) ||
      0;

    setOrderSummary((prev) => ({
      ...prev,
      subtotal: subTotal,
      total: subTotal + prev.deliveryFee,
    }));

    setCartDetails(userCart);
  };

  const removeFromCart = (data) => {
    const userDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));

    let allCarts = JSON.parse(localStorage.getItem("allCartDatas")) || [];

    let userCartIndex = allCarts.findIndex(
      (cart) => cart?.email === userDetails?.email
    );

    if (userCartIndex === -1) return;

    allCarts[userCartIndex].cart = allCarts[userCartIndex].cart.filter(
      (cartData) => cartData?.uId !== data?.uId
    );

    localStorage.setItem("allCartDatas", JSON.stringify(allCarts));

    getCartDetails();
  };

  const updateCartCount = (type, data) => {
    const userDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));

    let allCarts = JSON.parse(localStorage.getItem("allCartDatas")) || [];

    let userCartIndex = allCarts.findIndex(
      (cart) => cart?.email === userDetails?.email
    );

    if (userCartIndex === -1) return;

    let item = allCarts[userCartIndex].cart.find(
      (cartData) => cartData.uId === data.uId
    );

    if (!item) return;

    if (type === "increment") {
      item.qty += 1;
    } else if (type === "decrement") {
      item.qty = Math.max(item.qty - 1, 0);
    }

    localStorage.setItem("allCartDatas", JSON.stringify(allCarts));

    getCartDetails();
  };

  return {
    cartDetails,
    removeFromCart,
    updateCartCount,
    orderSummary
  };
};

export default useServices;
