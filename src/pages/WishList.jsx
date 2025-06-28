import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeFromWishlist } from "@/redux/wishlistSlice";

export default function Wishlist() {
  const { items } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  

if (!items.length) {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="Empty Wishlist"
        className="max-w-xs w-full opacity-80"
      />
       <p className="text-lg font-medium text-gray-600 tracking-wide">Wishlist is empty</p>
    </div>
  );
}



 return (
    <div className="p-6 wishlist">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map(item => (
          <div key={item.id} className="border border-[#FFCD00] p-4 rounded flex flex-col gap-3 justify-center items-center shadow-sm">
            <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-contain mb-3" />
            <h2 className="font-medium text-xl mb-4 leading-5 text-[#202435]">{item.title}</h2>
            <p className="text-lg font-semibold text-[#00B853]">${item.price}</p>
            <button className="bg-[#FFCD00] border border-[#FFCD00] text-sm font-medium text-[#202435] leading-5 rounded-4xl w-full  px-3 py-2.5">
              Add to Cart
            </button>
            <button
  onClick={() => {
    dispatch(removeFromWishlist(item.id));
    toast.error("Removed from wishlist");
  }}
  className="mt-3 text-sm bg-red-500 font-medium text-white leading-5 rounded-4xl w-full px-3 py-2.5 hover:bg-red-600 transition"
>
  Remove from Wishlist
</button>

          </div>
        ))}
      </div>
    </div>
  );
}
