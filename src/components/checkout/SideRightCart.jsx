import React from "react";
import CardCArt from "./CardCArt";
import { useSelector } from "react-redux";

const SideRightCart = () => {
  const { items } = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <CardCArt
          image={item.images[0]}
          name={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}

      <div className="flex flex-col gap-2 mt-7">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <h1>Subtotal</h1>
            <h1>{items.length} items</h1>
          </div>
          <div>
            $
            {items
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1>Shipping</h1>
          <h1>FREE</h1>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h1 className="font-bold">Total</h1>
          <div className="flex gap-2 items-center">
            <span className="text-gray-500 text-xs">USD</span>
            <h1 className="font-bold">
              $
              {(
                items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) + 2.46
              ).toFixed(2)}
            </h1>
          </div>
        </div>
        <p className="text-gray-500 text-xs">Including $2.46 in taxes</p>
      </div>
    </div>
  );
};

export default SideRightCart;
