import React from "react";
import FormCart from "./FormCart";
import InputCart from "./InputCart";

const SideLeftCart = () => {
  return (
    <div className="w-full px-4 ">
      <div className="Contact flex flex-col gap-3">
        <div className="flex justify-between items-end">
          <h1 className="text-sm font-bold">Contact</h1>
          <a
            href="/login"
            className="text-xs text-blue-500 underline cursor-pointer"
          >
            Login
          </a>
        </div>
        <InputCart
          type="email"
          name="email"
          id="email"
          placeholder="Email or mobile phone number"
          focus={true}
        />
        <div className="flex items-center gap-2  mb-1">
          <label class="containerCART">
            <input type="checkbox" id="news" />
            <svg viewBox="0 0 64 64" height="0.6em" width="0.6em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                class="pathCART"
              ></path>
            </svg>
          </label>
          <label htmlFor="news" className="text-xs cursor-pointer">
            Email me with news and offers
          </label>
        </div>
      </div>
      <FormCart />
    </div>
  );
};

export default SideLeftCart;
