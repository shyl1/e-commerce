import React from "react";
import InputCart from "./InputCart";

const FormCart = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-sm font-bold">Delivery</h1>

      <div className="flex flex-col gap-2 w-full">
        <InputCart
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Country/Region"
        />
        
        <div className="flex gap-2 w-full items-stretch">
          <InputCart
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name (optional)"
            className="flex-1"
          />
          <InputCart
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            className="flex-1"
          />
        </div>
        
        <InputCart
          type="text"
          name="address"
          id="address"
          placeholder="Address"
        />
        
        <InputCart
          type="text"
          name="apartment"
          id="apartment"
          placeholder="Apartment, suite, etc. (optional)"
        />
        
        <div className="flex gap-2 w-full items-stretch">
          <InputCart
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="Postal code (optional)"
          />
          <InputCart 
            type="text" 
            name="city" 
            id="city" 
            placeholder="City" 
          />
        </div>
        
        <div className="flex items-center gap-2 mb-1">
          <label className="containerCART">
            <input type="checkbox" id="save" />
            <svg viewBox="0 0 64 64" height="0.6em" width="0.6em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                className="pathCART"
              />
            </svg>
          </label>
          <label htmlFor="save" className="text-xs">
            Save this information for next time
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormCart;
