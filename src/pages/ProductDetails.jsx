import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import share from "../assets/icons/svgs/share.svg";
import tagIcon from "../assets/icons/svgs/tag.svg";
import wishlistIcon from "../assets/icons/svgs/wishlist.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchProductById } from "@/store/productDetails/productDetailsSlice.js";
import { addToWishlist } from "@/store/wishlist/wishlistSlice.js";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productDetails);
  const wishlistItems = useSelector((state) => state.wishlist.items);


console.log("Wishlist Items:", wishlistItems);


  const [mainImage, setMainImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

useEffect(() => {
  if (product?.images?.length) {
    setMainImage(product.images[0]);
  } else {
    setMainImage(null);
  }
}, [product]);

  useEffect(() => {
    if (product?.category) {
      fetch(`https://dummyjson.com/products/category/${product.category}`)
        .then((res) => res.json())
        .then((data) => {
          const related = data.products.filter((p) => p.id !== product.id);
          setRelatedProducts(related);
        });
    }
  }, [product]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  if (loading)
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-t-transparent border-[#35AFA0] rounded-full animate-spin"></div>
    </div>
  );
  if (error) return <p className="p-10 text-center text-red-500">{error}</p>;
  if (!product) return null;

  return (
  <div
    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        navigate("/"); 
      }
    }}
  >
    <div
      className="bg-white w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-lg shadow-lg relative"
      onClick={(e) => e.stopPropagation()} 
    >
      <button
        onClick={() => navigate("/")}
        className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold cursor-pointer"
      >
        &times;
      </button>

        
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-[0.3fr_1.6fr_1.1fr] gap-8">
            
            <div className="flex flex-col gap-4 items-center">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`w-24 h-24 object-contain border-2 p-1 rounded cursor-pointer transition-all ${
                    mainImage === img ? "border-[#35AFA0]" : "border-[#E7ECF0] hover:border-[#80D8C7]"
                  }`}
                  alt={`Thumbnail ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center items-center border rounded-md border-[#E7ECF0] h-[600px] px-6">
              {mainImage && (
                <img
                  src={mainImage}
                  className="w-full h-full object-contain max-w-[400px] md:max-w-full p-5"
                  alt={product.title}
                />
              )}
            </div>

            
            <div className="space-y-4">
              <h2 className="text-2xl font-medium capitalize leading-8 text-black">{product.title}</h2>
              <p className="text-xl font-bold leading-7 text-black">${product.price}</p>

            
              <div className="my-7 pb-2">
                <p className="text-black/70 text-base">available in:</p>
                <ul className="flex flex-wrap gap-4 mt-5">
                  {["small", "medium", "large"].map((size) => (
                    <li
                      key={size}
                      className="relative flex items-center gap-1 pt-2.5 pb-2.5 px-3.5 border border-gray-200 rounded-sm font-medium leading-5 text-sm cursor-pointer hover:bg-gray-100 transition before:content-['\2022'] before:mr-1 before:text-black before:text-xl"
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>

              
              <div className="flex flex-col gap-3.5">
                <div className="bg-[#F3F5F9] flex justify-between items-center gap-4 p-1 rounded w-full">
                  <div className="min-w-10 pl-24">
                    <button onClick={decrease} className="p-2.5 pl-10 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4" />
                    </svg>
                  </button>
                  </div>
                  <div className="text-center">
                    <span className="text-base font-semibold w-12 text-center">{quantity}</span>
                  </div>
                  <div className="min-w-10 pr-24">
                  <button onClick={increase} className="p-2.5 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                </div>

                <button className="bg-[#35AFA0] py-4 flex items-center justify-center gap-2 text-white w-full rounded-sm font-semibold text-base cursor-pointer">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.03399 2.161C8.52399 2.161 8.05082 2.2885 7.61449 2.5435C7.17816 2.7985 6.83249 3.14417 6.57749 3.5805C6.32249 4.01683 6.19499 4.49 6.19499 5H4.74999C4.74999 4.22933 4.93982 3.51817 5.31949 2.8665C5.69916 2.21483 6.21482 1.69917 6.86649 1.3195C7.51816 0.939833 8.22932 0.75 8.99999 0.75C9.77066 0.75 10.4818 0.939833 11.1335 1.3195C11.7852 1.69917 12.3008 2.21483 12.6805 2.8665C13.0602 3.51817 13.25 4.22933 13.25 5H16.038C16.446 5 16.7917 5.1445 17.075 5.4335C17.3583 5.7225 17.5 6.07667 17.5 6.496C17.5 6.58667 17.4943 6.67167 17.483 6.751L15.902 15.897C15.8113 16.4297 15.562 16.8717 15.154 17.223C14.746 17.5743 14.2757 17.75 13.743 17.75H4.25699C3.72432 17.75 3.25399 17.5743 2.84599 17.223C2.43799 16.8717 2.18866 16.4297 2.09799 15.897L0.516991 6.768C0.448991 6.36 0.531157 5.986 0.763491 5.646C0.995824 5.306 1.31032 5.09633 1.70699 5.017C1.78632 5.00567 1.87132 5 1.96199 5H11.873C11.873 4.49 11.7455 4.01683 11.4905 3.5805C11.2355 3.14417 10.8898 2.7985 10.4535 2.5435C10.0172 2.2885 9.54399 2.161 9.03399 2.161ZM16.038 6.411H1.96199C1.95066 6.411 1.93366 6.43367 1.91099 6.479V6.513L3.49199 15.659C3.52599 15.8403 3.60532 15.9933 3.72999 16.118C3.85466 16.2427 4.00199 16.3107 4.17199 16.322L4.25699 16.339H13.743C13.913 16.339 14.0688 16.2852 14.2105 16.1775C14.3522 16.0698 14.4457 15.9253 14.491 15.744L16.089 6.496C16.089 6.45067 16.0777 6.428 16.055 6.428L16.038 6.411Z" fill="white"/>
                </svg>
                  Add to Cart
                </button>

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

              
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="flex items-center gap-1.5 text-black/80 text-base">
                  <img src={tagIcon} alt="tag" className="mt-1" /> Tags:
                </span>
                {product.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="border border-[#E5E7EB] text-[#595959] text-sm font-medium py-1.5 px-2.5 rounded-sm hover:bg-[#35AFA0] hover:text-white transition capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              
              <div className="pt-6">
                <h2 className="text-base font-semibold mb-3">Product Details:</h2>
                <p className="text-sm text-[#595959] leading-7">
                  {showFullDescription
                    ? product.description
                    : product.description.slice(0, 140) + "..."}
                </p>
                {product.description.length > 140 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-[#35AFA0] text-sm underline mt-1 cursor-pointer"
                  >
                    {showFullDescription ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          </div>

        
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
                      onClick={(e) => e.stopPropagation()}
                      className="absolute -bottom-8 -right-10 w-10 h-10 flex items-center justify-center text-white text-2xl font-bold bg-[#35AFA0] rounded-full shadow-md hover:scale-105 transition-transform"
                      title="Add to Cart"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-base text-black leading-6 mt-1">${item.price}</p>
                  <p className="text-sm leading-6 text-black text-center">
                    {item.title.split(" ").slice(0, 4).join(" ")}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          </div>
        </div>
      </div>
    </div>
  );
}
