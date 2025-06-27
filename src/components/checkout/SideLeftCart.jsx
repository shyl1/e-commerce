import React, { useState } from "react";
import FormCart from "./FormCart";
import InputCart from "./InputCart";

const SideLeftCart = () => {
  const [isStandardSelected, setIsStandardSelected] = useState(true);

  const handleStandardClick = () => {
    setIsStandardSelected(!isStandardSelected);
  };

  return (
    <div className="w-full px-4">
      {/* Contact Section */}
      <div className="Contact flex flex-col gap-3">
        <div className="flex justify-between items-end">
          <h1 className="text-sm font-bold">Contact</h1>
          <a className="text-xs text-blue-500 underline cursor-pointer">Login</a>
        </div>
        
        <InputCart
          type="email"
          name="email"
          id="email"
          placeholder="Email or mobile phone number"
          focus={true}
        />
        
        <div className="flex items-center gap-2 mb-1">
          <label className="containerCART">
            <input type="checkbox" id="news" />
            <svg viewBox="0 0 64 64" height="0.6em" width="0.6em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                className="pathCART"
              />
            </svg>
          </label>
          <label htmlFor="news" className="text-xs">
            Email me with news and offers
          </label>
        </div>
      </div>

      {/* Form Section */}
      <FormCart />

      {/* Shipping Method Section */}
      <div className="flex flex-col gap-2 w-full mt-4">
        <h1 className="text-sm font-bold mb-2">Shipping method</h1>
        
        <button
          onClick={handleStandardClick}
          className={`flex justify-between items-center w-full px-3 py-2 border rounded transition-colors ${
            isStandardSelected
              ? "border-blue-500 bg-blue-50 outline-2 outline-blue-500"
              : "border-gray-300"
          }`}
        >
          <span className="text-sm">Standard</span>
          <span className="text-sm">FREE</span>
        </button>
      </div>

      {/* Payment Section */}
      <div className="mt-4">
        <h1 className="text-sm font-bold mb-2">Payment</h1>
        
        <div className="flex flex-col gap-2 items-center bg-[#F5F5F5] p-4 rounded-md">
          <img
            className="w-12"
            src="/src/assets/images/Checkout/Group.png"
            alt="visa"
          />
          <h1 className="text-sm text-[#707070]">
            This store can't accept payments right now.
          </h1>
        </div>
        
        <div className="flex flex-col gap-2 items-center bg-[#F5F5F5] p-4 rounded-md mt-6 mb-12">
          <h1 className="font-bold text-sm text-[#707070]">Pay now</h1>
        </div>
        
        <hr className="border-gray-300" />
        <a className="cursor-pointer text-xs text-blue-500 underline">Privacy policy</a>
      </div>
    </div>
  );
};

export default SideLeftCart;
