import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

const CartDatas = ({ data, removeFromCart, updateCartCount }) => {
  return (
    <div className="w-full sm:w-9/12 mx-auto">
      {data?.cart?.length === 0 ? (
        <p className="text-2xl font-semibold flex items-center justify-center">
          Cart is Empty
        </p>
      ) : (
        data?.cart?.map((c, i) => (
          <div
            key={i}
            className="flex bg-white flex-col sm:flex-row justify-between items-center gap-4 p-4 border border-gray-200 rounded-lg mb-4"
          >
            <div className="flex gap-4 items-center w-full sm:w-auto">
              <div className="w-[100px] h-[100px] sm:w-[180px] sm:h-[120px] relative">
                <Image
                  src={c?.imageUrl}
                  alt={c?.name || "Cart item"}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{c?.name}</h3>
                <p className="text-sm font-light">{c?.resName}</p>
                <p className="text-gray-600">₹{c?.price}</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center justify-center">
                <Button
                  className="bg-white hover:bg-white text-gray-600 text-2xl cursor-pointer"
                  onClick={() => c?.qty > 1 && updateCartCount("decrement", c)}
                >
                  -
                </Button>
                <p className="text-lg">{c?.qty}</p>
                <Button
                  className="bg-white hover:bg-white text-gray-600 text-2xl cursor-pointer"
                  onClick={() => updateCartCount("increment", c)}
                >
                  +
                </Button>
              </div>
              <Trash2
                color="#DE3B40"
                cursor="pointer"
                onClick={() => removeFromCart(c)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartDatas;
