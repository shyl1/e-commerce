import React from "react";
import SideLeftCart from "./SideLeftCart";
import SideRightCart from "./SideRightCart";

const Checkout = () => {
  return (
    <div className="w-[80%] sm:w-[90%] mx-auto mt-5">
      <div className="flex flex-col md:flex-row w-full">
        <div className="  flex-1">
          <SideLeftCart />
        </div>
        <div className=" flex-1">
          <SideRightCart />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
