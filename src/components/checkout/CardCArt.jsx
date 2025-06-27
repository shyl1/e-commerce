import React from "react";

const CardCArt = ({ image, name, price }) => {
  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="relative bg-white w-15 h-15">
          <img className="w-full h-full object-cover" src={image} alt="" />
          <h1 className="absolute top-[-8px] right-[-8px] w-4 h-4 flex items-center justify-center text-white text-xs rounded-full bg-[#666666]">
            1
          </h1>
        </div>
        <div>{name}</div>
      </div>
      <div>${price}</div>
    </div>
  );
};

export default CardCArt;
