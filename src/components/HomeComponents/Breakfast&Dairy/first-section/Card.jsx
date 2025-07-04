import { useNavigate } from "react-router-dom";

const Card = ({product, discount  }) => {
  const { id , title , thumbnail  , price} = product;

  
  const navigate = useNavigate();

  function productPopUp() {
  navigate(`/product/${id}`);
  }


  return (
    <div className="relative p-4 h-full flex flex-col justify-between border-2 border-gray-200">
      <div>
        <img className="w-full h-full object-cover cursor-pointer" src={thumbnail} alt={title} loading="lazy" onClick={productPopUp}/>

        {discount && (
          <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-[#35AFA0] text-white text-xs px-1 py:1 md:px-2 md:py-1 rounded-md">
            {discount}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-sm md:text-sm font-semibold line-clamp-1">
          {title}
        </h3>

        <h5 className="text-xs md:text-sm text-[#00B853] font-semibold">IN STOCK</h5>

        <div className="flex items-center gap-1">
          <img src="\src\assets\images\task4\Button - 4.00 stars.png" alt="star" />
          <div className="text-xs md:text-sm line-clamp-1">1 review</div>
        </div>

        <div className="flex items-center gap-1 text-xs sm:text-base">
          <span className="text-[#9B9BB4] line-through">${(price + 3).toFixed(2)}</span>
          <span className="text-[#D51243] font-semibold">{price}$</span>
        </div>
      </div>

    
    </div>
  );
};

export default Card;