import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  useEffect, useRef } from "react";
import Rating from "@mui/material/Rating";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AD5 } from "@/assets/images";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSeller } from "@/store/BestSeller/bestsellerslice";
import { addToCart } from "@/store/cart/cartSlice";
import { toast } from "react-toastify";
import Heading from "@/components/shared/Heading";


function BestSellers() {

  const {products , loading , error } = useSelector(state => state.bestSeller);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchBestSeller());
  }, [dispatch]);



  let sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div >
      <div className="py-5 ">
        <div className="flex justify-between">
          
          <Heading header={"Best Sellers"} text={" Do not miss the current offers until the end of March."}/>

          <button
            type="botton"
            className="flex justify-center items-center w-25 h-7 text-xs rounded-full border border-gray-300 text-gray-400 cursor-pointer"
          >
            {" "}
            View All <HiArrowNarrowRight className="text-lg ml-3" />{/**------------link all product----------*/}
          </button>
        </div>

        <Slider
          ref={(slider) => (sliderRef = slider)}
          {...settings}
          className="mt-8"
        >
          {products.map((e) => (
            <div key={e.id} className="flex flex-col h-90  border-1 border-solid border-gray-200 ">
              <div className="h-1/3 flex justify-center my-5 ">
                <img
                  src={e.thumbnail}
                  alt="#"
                  className="w-fall h-1/1 object-cover"
                />
              </div>
              <div className="h-12 ml-3">
                <h3>{`${e.title.substring(0, 40)}`}</h3>
              </div>
              <a href="#" className="text-green-600 m-3 text-xs">
                IN STOCK
              </a>
              <div className="flex content-center h-5  ml-3">
                <Rating
                  name="half-rating-read"
                  defaultValue={e.rating.rate}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <p className="text-xs text-gray-500">{e.rating.count} review</p>
              </div>
              <div className="ml-8 mt-2   text-red-700">
                <p>${e.price}</p>
              </div>
              <div className="w-full flex  justify-center mt-3  ">
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
          ))}
        </Slider>
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
