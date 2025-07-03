import { addToCart } from "@/store/cart/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CardCategory = ({ product, discount }) => {

  const dispatch = useDispatch();

  const { id ,title , thumbnail , stock , price} = product;

  
  const navigate = useNavigate();

  function productPopUp() {
  navigate(`/product/${id}`);
  }

  return (
    <div className="relative p-4 h-full flex flex-col justify-between border-2 border-gray-200">
      {/* Product Image */}
      <div>
        <img className="w-full h-full object-cover cursor-pointer" src={thumbnail} alt={title} onClick={productPopUp}/>

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-[#35AFA0] text-white text-xs px-1 py:1 md:px-2 md:py-1 rounded-md">
            25%
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="space-y-2">
        <h3 className="text-sm md:text-xl font-semibold line-clamp-1">
          {title}
        </h3>

        <h5 className="text-xs md:text-sm text-[#00B853]"><span>{stock}</span> in stock</h5>

        <div className="flex items-center gap-1">
          <img src="/src/assets/images/category/stars.png" alt="star" />
          <div className="text-xs md:text-sm line-clamp-1">1 review</div>
        </div>

        <div className="flex items-center gap-1 text-xs sm:text-base">
          <span className="text-[#9B9BB4] line-through ">${(price + 3).toFixed(2)}</span>
          <span className="text-[#D51243] font-semibold">{price}$</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="flex justify-center mt-3">
        <button 
          className="w-full text-[0.6rem] md:text-sm text-[#35AFA0] border-2 border-[#35AFA0] px-2 sm:px-4 py-2 rounded-full hover:cursor-pointer hover:bg-[#35AFA0] hover:text-white transition-all duration-300 hover:scale-105" 
          onClick={()=> {
            dispatch(addToCart(product));
            toast.success("added to cart" , {toastId: product.id})
          }
          }
          >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CardCategory;
