"use client";
import React, { useState, useEffect } from "react";
import { useAuthenticateData } from "../authentication/authContext/authProvider";
import { useRouter } from "next/navigation";
import useAlert from "@/Hooks/useAlert";
import useServices from "@/app/cart/useServices";
import CartDatas from "./CartDatas";
import OrderSummary from "../ReusableComponents/OrderSummary";

const Cart = () => {
  const { isLoggedIn } = useAuthenticateData();
  console.log(isLoggedIn, "isLoggedInnnn");

  const router = useRouter();
  const { publishNotification } = useAlert();
  const { cartDetails, removeFromCart, updateCartCount, orderSummary } = useServices();

  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       publishNotification("Please login to access the cart", "error");
  //       setTimeout(() => {
  //         router.push("/auth/login");
  //       }, 200);
  //     }
  //   }, [isLoggedIn]);

  return (
    <div className="sm:w-9/12 w-10/12 mx-auto mt-10">
      <p className="text-4xl font-bold mb-5">Your Cart</p>
      <div className="sm:flex gap-3">
        <CartDatas
          data={cartDetails}
          removeFromCart={removeFromCart}
          updateCartCount={updateCartCount}
        />
        
        <OrderSummary orderSummary={orderSummary} cartDetails={cartDetails}/>
      </div>
    </div>
  );
};

export default Cart;
