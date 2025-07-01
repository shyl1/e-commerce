import React, { useEffect } from "react";
import CardCategory from "./CardCategory";
import DiscountCard from "./DiscountCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/HomeCategoryProducts/homecategoryslice";

const HomeCategory = () => {

  const {products} = useSelector(state => state.homeproducts);
  const dispatch = useDispatch();

  const categories = products && Array.isArray(products)
  ? [...new Set(products.map(product => product.category))]
  : []; //Home.jsx:19 TypeError: Cannot read properties of undefined (reading 'map') at HomeCategory (HomeCategory.jsx?t=1751408825753:27:43)
//The above error occurred in the <HomeCategory> component.
//React will try to recreate this component tree from scratch using the error boundary you provided, RenderErrorBoundary.
// error 
// to solve it you should garud arrays

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    console.log("Rendering product:", products);

  return (
    <section className="min-h-full lg:min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div>
          <div className="text-base font-semibold">FRUIT & VEGETABLES</div>
          <div className="text-xs text-[#9B9BB4]">
            The freshest green grocer products are waiting for you
          </div>
        </div>

        <div className="flex w-full sm:w-auto mt-2 justify-center items-center text-center overflow-hidden border-2 border-gray-200 rounded-full px-4 py-1 hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
          <button
            onClick={() => console.log("Clicked")}
            className="text-xs text-gray-400 pr-2 hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer"
          >
            View All
          </button>
          <img
            className="w-4 h-4"
            src="/src/assets/icons/svgs/icon.svg"
            alt="Right arrow"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="border-2 border-gray-200 rounded-lg">
        <div className="w-full flex flex-col md:flex-row md:h-full rounded-lg">
          {/* Left Side - Banner and Categories List */}
          <div className="w-full md:w-[30%] flex flex-col h-auto">
            {/* Banner Section */}
            <div className="relative flex-1">
              <img
                className="w-full h-[20vh] md:h-full object-cover"
                src="/src/assets/images/category-banner-1.jpg.png"
                alt="Fruits and vegetables banner"
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8">
                <h2 className="text-sm sm:text-base md:text-lg text-[#151720] font-medium">
                  Weekly Discounts on
                </h2>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                  Fruits and Vegetables
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-[#202435] py-1">
                  Bacola Weekend Discount
                </p>
                <button className="bg-[#233A95] py-1 px-3 rounded-full text-white text-xs sm:text-sm hover:bg-[#233A95] hover:text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer">
                  View All
                </button>
              </div>
            </div>

            {/* Categories List Section */}
            <div className="flex-1 w-full flex flex-col justify-between pb-3 text-start place-items-start">
              <div className="grid grid-cols-2 gap-2 p-4 space-y-5 w-full">
                {categories.map((category, idx) => (
                  <div key={idx} className="flex">
                    <span className="text-xs sm:text-sm text-[#000] line-clamp-1">
                      {category}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-start w-full px-4">
                <button className="flex items-center text-xs text-[#000] font-semibold gap-1 hover:cursor-pointer transition-all duration-300 hover:scale-105">
                  View All
                  <img
                    src="/src/assets/icons/svgs/icon.svg"
                    alt="Right arrow"
                    className="w-3 h-3"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Product Cards Grid */}
          <div className="w-full md:w-[70%] h-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 h-full">
              {
                products.map((product) => (
                    <CardCategory
                      key={product.id}
                      product={product}
                      discount
                      className="h-full"
                    />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Discount Card */}
      <DiscountCard />
    </section>
  );
};

export default HomeCategory;
