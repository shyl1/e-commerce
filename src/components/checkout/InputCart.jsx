import React from "react";

const InputCart = ({
  type,
  name,
  id,
  placeholder,
  className = "",
  focus = false,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          type={type}
          name={name}
          id={id}
          placeholder=" "
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`peer w-full border ${
            error && touched ? 'border-red-500' : 'border-gray-300'
          } rounded px-3 pt-3 focus:outline-none focus:border-blue-500 focus:border-2 ${className}`}
          autoFocus={focus}
        />
        <label
          htmlFor={id}
          className={`absolute left-3 top-2 transition-all duration-200 peer-focus:-translate-y-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs text-sm sm:text-base line-clamp-1 ${
            error && touched ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          {placeholder}
        </label>
      </div>
      {error && touched && (
        <div className="text-red-500 text-xs mt-1 px-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputCart;
