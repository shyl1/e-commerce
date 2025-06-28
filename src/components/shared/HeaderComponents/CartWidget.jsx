import { Cart } from "@/assets/icons/svgs";
import { useNavigate } from "react-router-dom"




export default function CartWidget({productsCount}) {

  const navigte = useNavigate();

  function navigateToCart(){
    navigte('/cart');
  }

  return (
    <button className="cursor-pointer w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] md:w-[42px] md:h-[42px] bg-[#fff1ee] rounded-full flex items-center justify-center relative" onClick={navigateToCart}>
      <span className="absolute top-0 right-0 bg-[#ea2b0f] text-white w-[10px] h-[10px] sm:w-[17px] sm:h-[17px] rounded-full flex items-center justify-center text-[6px] sm:text-[10px] font-normal">{productsCount}</span>
      <Cart className="relative w-[12px] h-[12px] sm:w-[20px] sm:h-[20px] "/>
    </button>
  )
}
