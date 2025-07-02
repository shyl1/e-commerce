import React, { useState } from "react";
import { useFormik } from "formik";
import InputCart from "./InputCart";
import { fieldRows, validationSchema } from "./constant";

const FormCart = () => {
  const [isStandardSelected, setIsStandardSelected] = useState(true);

  const handleStandardClick = () => {
    setIsStandardSelected(!isStandardSelected);
  };
  const formik = useFormik({
    initialValues: {
      country: "",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      postalCode: "",
      city: "",
      saveInfo: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });

  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-sm font-bold">Delivery</h1>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-2 w-full"
      >
        {fieldRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={
              row.length > 1 ? "flex gap-2 w-full items-stretch" : "w-full"
            }
          >
            {row.map((field) => (
              <InputCart
                key={field.id}
                type={field.type}
                name={field.name}
                id={field.id}
                placeholder={field.placeholder}
                className={row.length > 1 ? "flex-1" : ""}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors[field.name]}
                touched={formik.touched[field.name]}
              />
            ))}
          </div>
        ))}

        <div className="flex items-center gap-2 mb-1">
          <label className="containerCART">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
              checked={formik.values.saveInfo}
              onChange={formik.handleChange}
            />
            <svg viewBox="0 0 64 64" height="0.6em" width="0.6em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                className="pathCART"
              ></path>
            </svg>
          </label>
          <label htmlFor="saveInfo" className="text-xs cursor-pointer">
            Save this information for next time
          </label>
        </div>

        <div className="flex flex-col gap-2 w-full mt-4">
          <h1 className="text-sm font-bold mb-2">Shipping method</h1>

          <button
            onClick={handleStandardClick}
            className={`flex justify-between items-center w-full px-3 py-2 border rounded transition-colors ${
              isStandardSelected
                ? "border-blue-500 bg-blue-50  outline-2 outline-blue-500"
                : "border-gray-300"
            }`}
          >
            <span className="text-sm">Standard</span>
            <span className="text-sm">FREE</span>
          </button>
        </div>
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
          <button
            onClick={() => alert("payment success")}
            className={`w-full mt-4 ${
              formik.isValid && formik.dirty
                ? ""
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!formik.isValid || !formik.dirty}
          >
            <div
              className={`flex flex-col gap-2 items-center p-4 rounded-md mt-6 mb-12 ${
                formik.isValid && formik.dirty
                  ? "bg-blue-500 text-white"
                  : "bg-[#F5F5F5]"
              }`}
            >
              <h1
                className={`font-bold text-sm ${
                  formik.isValid && formik.dirty
                    ? "text-white"
                    : "text-[#707070]"
                }`}
              >
                Pay now
              </h1>
            </div>
          </button>
          <hr className="border-gray-300" />
          <a className="cursor-pointer text-xs text-blue-500 underline">
            Privacy policy
          </a>
        </div>
      </form>
    </div>
  );
};

export default FormCart;
