import { removeFromCart, updateQuantity } from "@/store/cart/cartSlice";

export default function QuantityControls({ cartProduct, product, dispatch, toast }) {
  return (
    <div className="bg-[#F3F5F9] flex justify-between items-center gap-4 p-1 rounded w-full">
      <div className="min-w-10 pl-24">
        <button onClick={() => {
            if (cartProduct?.quantity > 1) {
              dispatch(updateQuantity({ ...cartProduct, quantity: cartProduct.quantity - 1 }));
            } else {
              dispatch(removeFromCart(product.id));
            }
          }} className="p-2.5 pl-10 cursor-pointer">
          <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4" />
          </svg>
        </button>
      </div>
      <div className="text-center">
        <span className="text-base font-semibold w-12 text-center">{cartProduct?.quantity || 0}</span>
      </div>
      <div className="min-w-10 pr-24">
        <button onClick={() => {
            if (cartProduct) {
              dispatch(updateQuantity({ ...cartProduct, quantity: cartProduct.quantity + 1 }));
            } else {
              dispatch(addToCart({ ...product, quantity: 1 }));
            }
            toast.success("Added to cart", { toastId: product.id });
          }} className="p-2.5 cursor-pointer">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
