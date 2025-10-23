"use client";
import useAlert from "@/Hooks/useAlert";
import { CheckValidation } from "@/utils/validation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const deliveryForm = {
  fullName: "",
  address: "",
  city: "",
  state: "",
  mobileNo: "",
  email: "",
};

const useServices = () => {
  const [orderSummary, setOrderSummary] = useState({
    subtotal: "",
    deliveryFee: 0.0,
    total: "",
    tax: 0.0,
  });
  const [deliveryDetails, setDeliveryDetails] = useState(deliveryForm);
  const [cartDetails, setCartDetails] = useState({});
  const { publishNotification } = useAlert();
  const router = useRouter();

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
      tax: (subTotal * 5) / 100,
      total: subTotal + prev.deliveryFee,
    }));

    setCartDetails(userCart);
  };

  const submitOrder = () => {
    const missingFields = CheckValidation(deliveryDetails);
    if (missingFields?.length > 0) {
      publishNotification("Please fill all the fields", "error");
      return;
    }

    if (deliveryDetails?.mobileNo?.length !== 10) {
      publishNotification("Please Please enter a valid mobile number", "error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (deliveryDetails?.email && !emailPattern.test(deliveryDetails?.email)) {
      publishNotification("Please enter a valid email", "error");
      return;
    }

    const userDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));

    let allCarts = JSON.parse(localStorage.getItem("allCartDatas")) || [];

    let userCart = allCarts.find((data) => data?.email === userDetails?.email);
    userCart.cart = [];

    localStorage.setItem("allCartDatas", JSON.stringify(allCarts));
    publishNotification("Order submitted successfully", "success");
    getCartDetails();
    setDeliveryDetails(deliveryForm);
    router.push("/");
  };
  return {
    orderSummary,
    cartDetails,
    deliveryDetails,
    setDeliveryDetails,
    submitOrder,
  };
};

export default useServices;
