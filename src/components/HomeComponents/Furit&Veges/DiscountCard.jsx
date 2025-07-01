import React, { useState } from "react";

const DiscountCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full py-2 sm:py-3 smh-14  bg-[#FFEEF2] flex flex-col sm:flex-row gap-2 justify-center items-center text-center text-[#FF4D4F] text-[0.6rem] space-x-3 my-4 rounded-lg">
      <h1 className="font-semibold">
        Super discount for your{" "}
        <span className="font-bold border-b-2 border-[#FF4D4F]">
          first purchase
        </span>
        .
      </h1>
      <button
        className="text-[#FF4D4F] px-4 py-1 rounded-full font-bold border-1 border-dashed border-[#FF4D4F] hover:bg-[#FF4D4F] hover:text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Copy" : "FREE25BAC"}
      </button>
      <h5 className="text-[0.6rem] text-[#9B9BB4]">
        Use discount code in checkout!
      </h5>
    </div>
  );
};

export default DiscountCard;
