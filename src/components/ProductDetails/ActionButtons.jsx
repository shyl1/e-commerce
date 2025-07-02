import share from "@/assets/icons/svgs/share.svg";
import wishlistIcon from "@/assets/icons/svgs/wishlist.svg";

export default function ActionButtons({ product, wishlistItems, dispatch, addToCart, addToWishlist, toast }) {
  return (
    <div className="flex flex-col gap-2 xl:gap-3">
      {/* Add to Cart Button */}
      <button
        onClick={() => {
          dispatch(addToCart({ ...product, quantity: 1 }));
          toast.success("Added to cart", { toastId: product.id });
        }}
        className="bg-[#35AFA0] py-4 flex items-center justify-center gap-2 text-white w-full rounded-sm font-semibold text-base cursor-pointer"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.03399 2.161C8.52399 2.161 8.05082 2.2885 7.61449 2.5435C7.17816 2.7985 6.83249 3.14417 6.57749 3.5805C6.32249 4.01683 6.19499 4.49 6.19499 5H4.74999C4.74999 4.22933 4.93982 3.51817 5.31949 2.8665C5.69916 2.21483 6.21482 1.69917 6.86649 1.3195C7.51816 0.939833 8.22932 0.75 8.99999 0.75C9.77066 0.75 10.4818 0.939833 11.1335 1.3195C11.7852 1.69917 12.3008 2.21483 12.6805 2.8665C13.0602 3.51817 13.25 4.22933 13.25 5H16.038C16.446 5 16.7917 5.1445 17.075 5.4335C17.3583 5.7225 17.5 6.07667 17.5 6.496C17.5 6.58667 17.4943 6.67167 17.483 6.751L15.902 15.897C15.8113 16.4297 15.562 16.8717 15.154 17.223C14.746 17.5743 14.2757 17.75 13.743 17.75H4.25699C3.72432 17.75 3.25399 17.5743 2.84599 17.223C2.43799 16.8717 2.18866 16.4297 2.09799 15.897L0.516991 6.768C0.448991 6.36 0.531157 5.986 0.763491 5.646C0.995824 5.306 1.31032 5.09633 1.70699 5.017C1.78632 5.00567 1.87132 5 1.96199 5H11.873C11.873 4.49 11.7455 4.01683 11.4905 3.5805C11.2355 3.14417 10.8898 2.7985 10.4535 2.5435C10.0172 2.2885 9.54399 2.161 9.03399 2.161ZM16.038 6.411H1.96199C1.95066 6.411 1.93366 6.43367 1.91099 6.479V6.513L3.49199 15.659C3.52599 15.8403 3.60532 15.9933 3.72999 16.118C3.85466 16.2427 4.00199 16.3107 4.17199 16.322L4.25699 16.339H13.743C13.913 16.339 14.0688 16.2852 14.2105 16.1775C14.3522 16.0698 14.4457 15.9253 14.491 15.744L16.089 6.496C16.089 6.45067 16.0777 6.428 16.055 6.428L16.038 6.411Z" fill="white"/>
        </svg>
        Add to Cart
      </button>

      {/* Wishlist + Share */}
      <div className="flex flex-wrap gap-2 xl:gap-1">
        <button
          onClick={() => {
            const exists = wishlistItems.some((item) => item.id === product.id);
            if (exists) {
              toast.info("Product is already in your wishlist.");
            } else {
              dispatch(addToWishlist(product));
              toast.success("Added to wishlist!");
            }
          }}
          className="flex items-center justify-center gap-2 cursor-pointer border border-[#DEE5EA] py-4 px-12 w-full xl:w-[49%] rounded-sm hover:bg-gray-50 transition"
        >
          <img src={wishlistIcon} alt="wishlist" /> Wishlist
        </button>

        <button className="flex items-center justify-center cursor-pointer gap-2 border border-[#DEE5EA] py-4 px-12 w-full xl:w-[49%] rounded-sm hover:bg-gray-50 transition">
          <img src={share} alt="share" /> Share
        </button>
      </div>
    </div>
  );
}
