
import { useDispatch, useSelector } from "react-redux";
import DropMenu from "./DropMenu";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { fetchGateoryProducts } from "@/store/categorySlice/categorySlices";




export default function HeaderSection2() {

  const {items} = useSelector(state => state.categoryProducts);

  const dispatch = useDispatch();

  const totalProducts = Array.isArray(items) ? items.length : 0;

  useEffect(()=> {
    dispatch(fetchGateoryProducts());
  }, [dispatch]);

   // get cart and checkout path 
  const isShoppingCartOrCheckout = location.pathname === '/cart' || location.pathname === ('/checkout');
  return (
    <>
      {!isShoppingCartOrCheckout && (<header className="container lg:h-[88px] h-[70px] mt-0 flex justify-between items-center bg-white ">
      <div>
        <DropMenu totalProducts={totalProducts}/>
      </div>
      <nav className="hidden lg:flex justify-center items-center gap-8 font-body text-[15px] font-semibold text-[var(--color-text)]">
        <NavBar /> 
      </nav>
    </header>)}
    </>
  )
}
