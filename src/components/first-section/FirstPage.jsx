import React from "react";
import Card from "./Card";

const FirstPage = () => {
  const VerticalBorder = [
    {
      name: "Beverages",
    },
    {
      name: "Biscuits & Snacks",
    },
    {
      name: "Breads & Bakery",
    },
    {
      name: "Breakfast & Dairy",
    },
    {
      name: "Frozen Foods",
    },
    {
      name: "Fruits & Vegetables",
    },
    {
      name: "Grocery & Staples",
    },
    {
      name: "Household Needs",
    },
    {
      name: "Meats & Seafood",
    },
  ];
  const Products = [
    {
      name: "American CheeseSingles",
      image: "/src/assets/images/task4/product1.png",
      price1:"$8.29",
      price2:'$3.29',
      discount:'60%'
    },
    {
      name: "Blueberries – 1 PintPackage",
      image: "/src/assets/images/task4/product3.png",
      price1:"$4.49",
      price2:'$3.99',
      discount:'11%'
    },
    {
      name: "Chobani CompleteVanilla Greek Yogurt",
      image: "/src/assets/images/task4/product2.png",
      price1:"$5.49",
      price2:'$4.49',
      discount:'18%'
    },
    {
      name: "Challenge SpreadableButter",
      image: "/src/assets/images/task4/product4.png",
      price2:'$7.58'
    },
    {
      name: "Fairlife Lactose-Free2% Milk",
      image: "/src/assets/images/task4/product5.png",
      price2:"$3.69"
     
    },
    {
      name: "Nestle Original Coffee-Mate Coffee Creamer",
      image: "/src/assets/images/task4/product6.png",
      price1:"$13.99",
      price2:'$11.99',
      discount:'14%'
    },
    {
      name: "Organic Cage-FreeGrade A Large Brown…",
      image: "/src/assets/images/task4/product7.png",
      price1:"$4.69",
      price2:'$3.69',
      discount:'21%'
    },
    {
          name: "Vital Farms Pasture-Raised Egg Bites…",
          image: "/src/assets/images/task4/product8.png",
          price1:"$29.00",
          price2:'$25.00',
          discount:'14%'
    },
  ];

  return (
    <section className="w-[95%] sm:w-[90%] mx-auto min-h-full lg:min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div>
          <div className="text-base font-semibold">Breakfast & Dairy</div>
          <div className="text-xs text-[#9B9BB4]">
          Do not miss the current offers until the end of month.
          </div>
        </div>

        <div className="flex w-full sm:w-auto mt-2 justify-center items-center text-center overflow-hidden border-2 border-gray-200 rounded-full px-4 py-1 hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
          <button
            className="text-xs text-gray-400 pr-2 hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer"
          >
            View All
          </button>
          <img
            className="w-4 h-4"
            src="/src/assets/icons/favico/task4/Icon.png"
            alt="Right arrow"
          />
        </div>
      </div>

      <div className="rounded-lg">
<div className="flex flex-col lg:flex-row">
<div className="border-2 border-gray-200  w-full lg:w-[30%] overflow-hidden  flex flex-col h-full mt-4">
        <div
          className=" h-[50vh] lg:h-[50vh] bg-cover bg-center flex flex-col justify-center p-6"
          style={{ backgroundImage: "url('/src/assets/icons/favico/task4/icon2.png')" }}
        >
          <h2 className="text-sm sm:text-base lg:text-lg text-[#151720] font-medium">
            Weekly Discounts on
          </h2>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
            Breakfast and Dairy
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-[#202435] py-1 mt-2">
            Bacola Weekend Discount
          </p>
          <button className="w-full lg:w-[40%] bg-[#233A95] py-1 px-3 rounded-full text-white text-xs sm:text-sm hover:scale-105 transition mt-7">
            View All
          </button>

        </div>
        <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 py-8">
              {VerticalBorder.map((item, i) => (
                <div key={i} className="text-sm font-medium text-[#3E445A] bg-white/80 py-1 px-3 rounded hover:bg-[#f0f0f0] transition cursor-pointer">
                  {item.name}
                </div>
              ))}
            </div>

</div>
<div className="w-full md:w-[70%] h-full">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  p-4">
      {Products.slice(0, 8).map((product, i) => (
        <Card
          key={i}
          name={product.name}
          image={product.image}
          discount={product.discount}
          price1={product.price1}
          price2={product.price2}
        />
      ))}
    </div>
  </div>
</div>

      </div>
     
    </section>
  );
};

export default FirstPage;