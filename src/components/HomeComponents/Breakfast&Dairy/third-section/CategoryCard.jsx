import React from 'react';

const CategoryCard = ({ image, title, count, isFirst}) => {
  return (
  <>
  <div
    className={`bg-white shadow-sm rounded-md p-4 h-full ${
      isFirst ? "flex flex-col items-center" : "flex items-center gap-4"
    }`}
    >
      <img
        loading="lazy"
        src={image}
        alt={title}
        className={`rounded object-cover flex-shrink-0 
          ${isFirst ? "w-40 h-40 mb-4" : "w-24 h-24"}
        `}
      />

      <div className={isFirst ? "text-center" : ""}>
        <p className="text-lg font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{count} Items</p>
      </div>
      </div>
  </>
  );
};

export default CategoryCard;