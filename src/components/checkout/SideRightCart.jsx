import React from "react";
import CardCArt from "./CardCArt";

const SideRightCart = () => {
  return (
    <div className="flex flex-col gap-2">
      <CardCArt
        image={"/src/assets/images/checkout/CH.png"}
        name={"All Natural Italian-Style Chicken Meatballs"}
        price={"7.25"}
      />
      <CardCArt
        image={"/src/assets/images/checkout/COL.png"}
        name={"Coca-Cola – 2 L Bottle"}
        price={"3.69"}
      />
      <CardCArt
        image={"/src/assets/images/checkout/W.png"}
        name={"Fairlife Lactose-Free 2% Milk"}
        price={"3.85"}
      />

      <div className="flex flex-col gap-2 mt-7">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <h1>Subtotal</h1>
            <h1> 3 items</h1>
          </div>
          <div>$14.79</div>
        </div>
        <div className="flex justify-between items-center">
          <h1>Shipping</h1>
          <h1>FREE</h1>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h1 className="font-bold">Total</h1>
          <div className="flex gap-2 items-center">
            <span className="text-gray-500 text-xs">USD</span>
            <h1 className="font-bold">$14.79</h1>
          </div>
        </div>
        <p className="text-gray-500 text-xs">Including $2.46 in taxes</p>
      </div>
    </div>
  );
};

export default SideRightCart;
