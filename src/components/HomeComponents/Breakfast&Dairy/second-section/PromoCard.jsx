import React from 'react';

export default function PromoCard({ image, title, subtitle }) {
  return (
    <div className="relative w-100 h-60 rounded-sm overflow-hidden shadow-sm">
      <img
        src={image}
        alt={title}
        className="absolute  w-full h-full object-cover"
        loading="lazy"
      />
      <div className="relative z-10   p-4 m-4 mt-4 rounded-sm">
        <p className="text-green-600 text-sm font-semibold mb-1 mt-4">
          WEEKEND DISCOUNT 40%
        </p>
        <h2 className="text-lg font-bold text-gray-800 mt-4">{title}</h2>
        <p className="text-sm text-gray-600 mb-3 mt-4">{subtitle}</p>
        <button className=" bg-gray-300 text-white px-4 py-1 mt-4 rounded-full text-sm hover:bg-gray-400 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}