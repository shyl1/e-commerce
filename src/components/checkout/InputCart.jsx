import React from "react";

const InputCart = ({
  type,
  name,
  id,
  placeholder,
  className = "",
  focus = false,
}) => {
  return (
    <div className="w-full ">
      <div className="relative">
        <input
          type={type}
          name={name}
          id={id}
          placeholder=" "
          className={`peer w-full border border-gray-300 rounded px-3 pt-3 focus:outline-none focus:border-blue-500 focus:border-2 ${className}`}
          autoFocus={focus}
        />
        <label
          htmlFor={id}
          className="absolute left-3 top-2 text-gray-500 transition-all duration-200 peer-focus:-translate-y-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs text-sm sm:text-base"
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default InputCart;
