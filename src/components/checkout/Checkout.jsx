"use client";
import React from "react";
import OrderSummary from "../ReusableComponents/OrderSummary";
import useServices from "@/app/checkout/useServices";
import DeliveryInformation from "./DeliveryInformation";

const Checkout = () => {
  const {
    orderSummary,
    cartDetails,
    deliveryDetails,
    setDeliveryDetails,
    submitOrder,
  } = useServices();
  return (
    <div className="w-8/12 mx-auto mt-10">
      <p className="text-4xl font-bold mb-5">Checkout</p>
      <div className="sm:flex gap-3">
        <DeliveryInformation
          deliveryDetails={deliveryDetails}
          setDeliveryDetails={setDeliveryDetails}
        />
        <OrderSummary
          orderSummary={orderSummary}
          cartDetails={cartDetails}
          isCheckoutPage={true}
          submitOrder={submitOrder}
        />
      </div>
    </div>
  );
};

export default Checkout;
