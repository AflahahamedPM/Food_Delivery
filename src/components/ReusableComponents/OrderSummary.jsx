"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import useAlert from "@/Hooks/useAlert";

const OrderSummary = ({
  orderSummary,
  cartDetails,
  isCheckoutPage = false,
  submitOrder,
}) => {
  const router = useRouter();
  const { publishNotification } = useAlert();
  return (
    <div
      className={`sm:w-4/12 max-sm:w-full gap-4 p-4 border border-gray-200 rounded-lg mb-4 ${
        isCheckoutPage ? "" : "lg:h-62 h-full"
      } `}
    >
      <p className="font-semibold text-2xl mb-3">Order Summary</p>
      {isCheckoutPage && (
        <>
          {cartDetails?.cart?.map((cartData) => (
            <>
              <div key={cartData?.uId} className="flex justify-between mb-4">
                <div>
                  <p className="text-gray-400">{cartData?.name}</p>

                  <p className="text-gray-300 text-xs">
                    Quantity - {cartData?.qty}
                  </p>
                </div>
                <p>₹{cartData?.price}</p>
              </div>
            </>
          ))}
          <Separator className="mb-3" />
        </>
      )}
      <div className="flex justify-between mb-4">
        <p className="text-gray-400">
          Subtotal{`(${cartDetails?.cart?.length} items)`}
        </p>
        <p>₹{orderSummary?.subtotal}</p>
      </div>

      <div className="flex justify-between mb-4">
        <p className="text-gray-400">Delivery Fee</p>
        <p>₹{orderSummary?.deliveryFee}</p>
      </div>
      {isCheckoutPage && (
        <div className="flex justify-between mb-4">
          <p className="text-gray-400">Tax</p>
          <p>₹{orderSummary?.tax}</p>
        </div>
      )}
      <Separator />

      <div className="flex justify-between my-4">
        <p className="font-bold text-xl">Total</p>
        <p>₹{orderSummary?.total + (orderSummary?.tax ?? 0)}</p>
      </div>

      <Button
        className="w-full text-md cursor-pointer"
        onClick={
          isCheckoutPage
            ? submitOrder
            : () =>
                cartDetails?.cart?.length === 0
                  ? publishNotification("Cart is Empty", "error")
                  : router.push("/checkout")
        }
      >
        {isCheckoutPage ? "Place Order" : "Proceed to Checkout"}
      </Button>
    </div>
  );
};

export default OrderSummary;
