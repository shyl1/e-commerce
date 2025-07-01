import React from 'react';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

export default function Card({ product, quantity, onIncrease, onDecrease }) {
  const {
    title = 'No Title',
    thumbnail,
    price,
    discountPercentage = 0,
  } = product;

  const numericPrice = Number(price) || 0;
  const unitDiscount = numericPrice * (discountPercentage / 100);
  const discountedUnitPrice = numericPrice - unitDiscount;

  const originalTotal = (numericPrice * quantity).toFixed(2);
  const discountedTotal = (discountedUnitPrice * quantity).toFixed(2);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col justify-between">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-green-600">${discountedTotal}</span>
          <span className="text-sm line-through text-gray-500">${originalTotal}</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <button
            onClick={onDecrease}
            className="text-2xl p-1 text-gray-600 hover:text-red-500"
          >
            <CiCircleMinus />
          </button>

          <span className="text-lg font-medium">{quantity}</span>

          <button
            onClick={onIncrease}
            className="text-2xl p-1 text-gray-600 hover:text-green-500"
          >
            <CiCirclePlus />
          </button>
        </div>
      </div>
    </div>
  );
}
