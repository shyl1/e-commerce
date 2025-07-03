import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import ActionButtons from "@/components/ProductDetails/ActionButtons";
import Description from "@/components/ProductDetails/Description";
import ImageGallery from "@/components/ProductDetails/ImageGallery";
import QuantityControls from "@/components/ProductDetails/QuantityControls";
import RelatedProductsSlider from "@/components/ProductDetails/RelatedProductsSlider";
import Tags from "@/components/ProductDetails/Tags";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart, removeFromCart, updateQuantity } from "@/store/cart/cartSlice";
import { fetchProductById } from "@/store/productDetails/productDetailsSlice";
import { addToWishlist } from "@/store/wishlist/wishlistSlice.js";

;

export default function ProductDetails() {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productDetails);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const { items: cartItems } = useSelector((state) => state.cart);
  const [mainImage, setMainImage] = useState(null);
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


  if (loading)
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-t-transparent border-[#35AFA0] rounded-full animate-spin"></div>
    </div>
  );
  if (error) return <p className="p-10 text-center text-red-500">{error}</p>;
  if (!product) return null;

  const cartProduct = cartItems.find((item) => item.id === product.id);
  const productsCount = cartProduct?.quantity || 0;

  const background = location.state?.background || "/";


  return (
<>
 <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          navigate(background);
        }
      }}
    >
      <div
        className="bg-white w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => navigate(background)}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>

        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-[0.3fr_1.6fr_1.1fr] gap-8">
            <ImageGallery
              images={product.images}
              mainImage={mainImage}
              setMainImage={setMainImage}
              title={product.title}
            />

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

              <QuantityControls
                product={product}
                cartProduct={cartProduct}
                productsCount={productsCount}
                dispatch={dispatch}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                toast={toast}
              />
             
              <ActionButtons
               product={product}
                wishlistItems={wishlistItems}
                dispatch={dispatch}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
                toast={toast}
              />

              <Tags tags={product.tags} />

              <Description
                description={product.description}
                showFullDescription={showFullDescription}
                setShowFullDescription={setShowFullDescription}
              />
            </div>
          </div>

          <RelatedProductsSlider relatedProducts={relatedProducts} />
        </div>
      </div>
    </div>
</>
  );
}
