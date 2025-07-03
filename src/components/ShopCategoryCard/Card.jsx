import { addToCart, removeFromCart } from '@/store/cart/cartSlice';
import React from 'react';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

export default function Card({ product, productsCount }) {
  const {
    id,
    title = 'No Title',
    thumbnail,
    price,
    discountPercentage = 0,
  } = product;

  const dispatch = useDispatch();

<<<<<<< HEAD:src/components/Card/Card.jsx
  const numericPrice = Number(price);
  const isValidPrice = !isNaN(numericPrice) && numericPrice > 0;
=======
  const navigate = useNavigate();

  function productPopUp() {
  navigate(`/product/${id}`);
  }

  const numericPrice = Number(price) || 0;
  const unitDiscount = numericPrice * (discountPercentage / 100);
  const discountedUnitPrice = numericPrice - unitDiscount;
>>>>>>> faf571583133d1367e7d2f56ef38568bcdd03dcd:src/components/ShopCategoryCard/Card.jsx

  const unitDiscount = isValidPrice ? numericPrice * (discountPercentage / 100) : 0;
  const discountedUnitPrice = isValidPrice ? numericPrice - unitDiscount : 0;

  const totalOriginalPrice = (numericPrice * productsCount).toFixed(2);
  const totalDiscountedPrice = (discountedUnitPrice * productsCount).toFixed(2);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col justify-between">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
        onClick={productPopUp}
      />

      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>

        {isValidPrice ? (
          <div className="flex items-center gap-2 mb-3">
            {productsCount > 0 ? (
              <>
                <span className="text-xl font-bold text-green-600">
                  ${totalDiscountedPrice}
                </span>
                {discountPercentage > 0 && (
                  <span className="text-sm line-through text-gray-500">
                    ${totalOriginalPrice}
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="text-xl font-bold text-green-600">
                  ${discountedUnitPrice.toFixed(2)}
                </span>
                {discountPercentage > 0 && (
                  <span className="text-sm line-through text-gray-500">
                    ${numericPrice.toFixed(2)}
                  </span>
                )}
              </>
            )}
          </div>
        ) : (
          <span className="text-sm text-red-500 mb-3">غير متوفر</span>
        )}

        <div className="flex items-center justify-between mt-auto">
          <button
            disabled={productsCount <= 0}
            onClick={() => dispatch(removeFromCart(id))}
            className={`text-2xl p-1 ${
              productsCount <= 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:text-red-500'
            }`}
          >
            <CiCircleMinus />
          </button>

          <span className="text-lg font-medium">{productsCount}</span>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="text-2xl p-1 text-gray-600 hover:text-green-500"
          >
            <CiCirclePlus />
          </button>
        </div>
      </div>
    </div>
  );
}
