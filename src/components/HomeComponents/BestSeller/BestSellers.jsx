import { useEffect} from "react";
import Rating from "@mui/material/Rating";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AD5 } from "@/assets/images";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSeller } from "@/store/BestSeller/bestsellerslice";
import { addToCart } from "@/store/cart/cartSlice";
import { toast } from "react-toastify";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./BestSellers.css"
import Heading from "@/components/shared/Heading";
import { responsive } from "@/constants";
import ViewAll from "@/components/shared/ViewAll";
import { useNavigate } from "react-router-dom";


function BestSellers() {

  const {products  , error } = useSelector(state => state.bestSeller);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function productPopUp(productId) {
  navigate(`/product/${productId}`);
  }

  useEffect(()=> {
    dispatch(fetchBestSeller());
  }, [dispatch]);


  if(error){
    return(
      <div className="text-red-400 text-3xl">
        {error}
      </div>
    );
  }


  return (
    <div >
      <div className="py-5 ">
        <div className="flex justify-between mb-5">
          {/* Header and btn */}
          <Heading header={"Best Sellers"} text={" Do not miss the current offers until the end of March."}/>
          <ViewAll />
        </div>

        <Carousel autoPlay responsive={responsive} infinite={true} >
          { products.map((e) => (
            <div key={e.id} className="flex flex-col h-90  border-1 border-solid border-gray-200 "
            
            >
              <div className="h-1/3 flex justify-center my-5 ">
                <img
                  src={e.thumbnail}
                  alt="#"
                  className="w-full h-full object-contain cursor-pointer"
                  loading="lazy"
                  onClick={()=> productPopUp(e.id)}
                />
              </div>
              <div className="h-12 ml-3">
                <h3>{`${e.title.substring(0, 40)}`}</h3>
                <p className="text-xs text-[#9B9BB4]">{`${e.description.substring(0, 30)}...`}</p>
              </div>
              <a href="#" className="text-green-600 m-3 text-xs">
                IN STOCK
              </a>
              <div className="flex content-center h-5  ml-3">
                <Rating
                  name="half-rating-read"
                  defaultValue={e.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <p className="text-xs text-gray-500">{e.reviews.length} review</p>
              </div>
              <div className="ml-8 mt-2   text-red-700">
                <p>${e.price}</p>
              </div>
              <div className="w-full flex  justify-center mt-3 ">
                <button                                                      
                  type="button"
                  className="px-10  h-8 rounded-full cursor-pointer"
                  style={{ backgroundColor: "#FFCD00" }} 
                  onClick={()=> {
                    dispatch(addToCart({ ...e, price: Number(e.price) })); //  pass full proucts array
                    toast.success("Added To Cart" , { toastId: e.id }); // prevent duplicte toast
                  }
                  }
                >
                  Add to cart                                {/**--------------link Add to cart-------------*/}
                </button>
              </div>
            </div>
          ))
          }
        </Carousel>
        <div className="flex justify-around items-center bg-red-50 mt-10  ">
          <p className= " sm:text-green-600 font-semibold text-xl  text-green-600  ">
            100% Secure delivery without contacting the courier
          </p>
          <img src={AD5} alt="#" className="object-cover h-20 w-80 " />
          <button
            type="button"
            className=" w-25 h-7 text-xs rounded-full bg-green-600 text-white cursor-pointer"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
