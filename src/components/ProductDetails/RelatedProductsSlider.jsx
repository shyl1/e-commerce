import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { addToCart } from "@/store/cart/cartSlice";

export default function RelatedProductsSlider({ relatedProducts }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!relatedProducts?.length) return null;

  return (
    <div className="mt-14 px-8 py-6 overflow-hidden">
      <h2 className="text-2xl font-bold leading-8 mb-4">Related products</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="relative py-4 overflow-hidden"
      >
        {relatedProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => navigate(`/product/${item.id}`)}
              className="relative p-4 rounded-md bg-white shadow-md flex flex-col items-center justify-between h-64 cursor-pointer"
            >
              {item.discountPercentage >= 12 && (
                <span className="absolute top-8 left-5 bg-[#35AFA0] z-30 text-white text-xs font-bold px-5 py-2 rounded-full uppercase">
                  On Sale
                </span>
              )}

              <div className="relative max-w-36 h-36">
                <img
                  src={item.thumbnail}
                  className="w-full h-full object-contain p-3"
                  alt={item.title}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(item));
                    toast.success("Added to cart", { toastId: item.id });
                  }}
                  className="absolute -bottom-8 -right-10 w-10 h-10 flex items-center justify-center text-white text-2xl font-bold bg-[#35AFA0] rounded-full shadow-md hover:scale-105 transition-transform"
                  title="Add to Cart"
                >
                  +
                </button>
              </div>

              <p className="font-semibold text-base text-black leading-6 mt-1">
                ${item.price}
              </p>
              <p className="text-sm leading-6 text-black text-center">
                {item.title.split(" ").slice(0, 4).join(" ")}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
