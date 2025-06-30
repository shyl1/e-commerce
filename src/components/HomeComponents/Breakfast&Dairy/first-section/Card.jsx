import React from "react";

const Card = ({ name, image, discount , price1 , price2 }) => {
  return (
    <div className="relative p-4 h-full flex flex-col justify-between border-2 border-gray-200">
      <div>
        <img className="w-full h-full object-cover" src={image} alt={name} />

        {discount && (
          <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-[#35AFA0] text-white text-xs px-1 py:1 md:px-2 md:py-1 rounded-md">
            {discount}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-sm md:text-sm font-semibold line-clamp-1">
          {name}
        </h3>

        <h5 className="text-xs md:text-sm text-[#00B853] font-semibold">IN STOCK</h5>

        <div className="flex items-center gap-1">
          <img src="\src\assets\images\task4\Button - 4.00 stars.png" alt="star" />
          <div className="text-xs md:text-sm line-clamp-1">1review</div>
        </div>

        <div className="flex items-center gap-1 text-sm xl:text-2xl">
          <span className="text-[#9B9BB4] line-through">{price1}</span>
          <span className="text-[#D51243] font-semibold">{price2}</span>
        </div>
      </div>

    
    </div>
  );
};

export default Card;