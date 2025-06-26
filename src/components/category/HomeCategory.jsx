import React from "react";
import CardCategory from "./CardCategory";
import DiscountCard from "./DiscountCard";

const HomeCategory = () => {
  const categories = [
    {
      name: "Household Needs",
      src: "/src/assets/images/category/category (1).png",
    },
    {
      name: "Fruits & Vegetables",
      src: "/src/assets/images/category/category (2).png",
    },
    {
      name: "Breakfast & Dairy",
      src: "/src/assets/images/category/category (3).png",
    },
    {
      name: "Biscuits & Snacks",
      src: "/src/assets/images/category/category (4).png",
    },
    {
      name: "Meats & Seafood",
      src: "/src/assets/images/category/category (4).png",
    },
    {
      name: "Grocery & Staples",
      src: "/src/assets/images/category/category (5).png",
    },
    {
      name: "Breads & Bakery",
      src: "/src/assets/images/category/category (7).png",
    },
    {
      name: "Beverages",
      src: "/src/assets/images/category/category (8).png",
    },
    {
      name: "Egyptian dates",
      src: "/src/assets/images/category/category (8).png",
    },
  ];

  return (
    <section className="w-[95%] sm:w-[90%]  mx-auto min-h-full lg:min-h-screen ">
      <div className=" flex flex-col sm:flex-row justify-between items-center mb-6 ">
        <div>
          <div className="text-base font-semibold">FRUIT & VEGETABLES</div>
          <div className="text-xs text-[#9B9BB4]">
            The freshest green grocer products are waiting for you
          </div>
        </div>
        <div className="flex w-full sm:w-auto mt-2 justify-center items-center text-center overflow-hidden border-2 border-gray-200  rounded-full px-4 py-1 hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer ">
          <button
            onClick={() => console.log("Clicked")}
            className="text-xs text-gray-400 pr-2 hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer "
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
      <div className="border-2 border-gray-200 rounded-lg">
        <div className="w-full flex flex-col md:flex-row md:h-full rounded-lg">
          <div className="w-full md:w-[30%]  flex flex-col  h-auto">
            <div className="relative flex-1">
              <img
                className="w-full h-[20vh] md:h-full  object-cover "
                src="/src/assets/images/category-banner-1.jpg.png"
                alt="Fruits and vegetables banner"
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 ">
                <h2 className="text-sm sm:text-base md:text-lg text-[#151720] font-medium">
                  Weekly Discounts on
                </h2>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                  Fruits and Vegetables
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-[#202435] py-1">
                  Bacola Weekend Discount
                </p>
                <button className="bg-[#233A95] py-1 px-3 rounded-full text-white text-xs sm:text-sm hover:bg-[#233A95] hover:text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer ">
                  View All
                </button>
              </div>
            </div>

            <div className="flex-1  w-full flex flex-col justify-between pb-3 text-start place-items-start">
              <div className="grid grid-cols-2 gap-2 p-4 space-y-5 w-full">
                {categories.map((category, idx) => (
                  <div key={idx} className="flex  ">
                    <span className="text-xs sm:text-sm text-[#000] line-clamp-1">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-start w-full px-4">
                <button className="flex items-center text-xs text-[#000] font-semibold gap-1 hover:cursor-pointer  transition-all duration-300 hover:scale-105 ">
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

          <div className="w-full md:w-[70%]  h-full ">
            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 h-full">
              {Array(8)
                .fill()
                .map((_, i) => (
                  <div key={i} className=" h-full">
                    <CardCategory
                      name={categories[i].name}
                      src={categories[i].src}
                      discount
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <DiscountCard />
    </section>
  );
};

export default HomeCategory;
