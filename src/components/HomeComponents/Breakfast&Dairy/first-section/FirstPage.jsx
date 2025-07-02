import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/HomeCategoryProducts/homecategoryslice";
import { VerticalBorder } from "@/constants";
import Heading from "@/components/shared/Heading";
import SideCategory from "@/components/shared/SideCategory";
import ViewAll from "@/components/shared/ViewAll";

const FirstPage = () => {
  
  const {products} = useSelector(state => state.homeproducts);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchProducts);
  }, [dispatch]);

  // const Products = [
  //   {
  //     name: "American CheeseSingles",
  //     image: "/src/assets/images/task4/product1.png",
  //     price1:"$8.29",
  //     price2:'$3.29',
  //     discount:'60%'
  //   },
  //   {
  //     name: "Blueberries – 1 PintPackage",
  //     image: "/src/assets/images/task4/product3.png",
  //     price1:"$4.49",
  //     price2:'$3.99',
  //     discount:'11%'
  //   },
  //   {
  //     name: "Chobani CompleteVanilla Greek Yogurt",
  //     image: "/src/assets/images/task4/product2.png",
  //     price1:"$5.49",
  //     price2:'$4.49',
  //     discount:'18%'
  //   },
  //   {
  //     name: "Challenge SpreadableButter",
  //     image: "/src/assets/images/task4/product4.png",
  //     price2:'$7.58'
  //   },
  //   {
  //     name: "Fairlife Lactose-Free2% Milk",
  //     image: "/src/assets/images/task4/product5.png",
  //     price2:"$3.69"
  //   },
  //   {
  //     name: "Nestle Original Coffee-Mate Coffee Creamer",
  //     image: "/src/assets/images/task4/product6.png",
  //     price1:"$13.99",
  //     price2:'$11.99',
  //     discount:'14%'
  //   },
  //   {
  //     name: "Organic Cage-FreeGrade A Large Brown…",
  //     image: "/src/assets/images/task4/product7.png",
  //     price1:"$4.69",
  //     price2:'$3.69',
  //     discount:'21%'
  //   },
  //   {
  //         name: "Vital Farms Pasture-Raised Egg Bites…",
  //         image: "/src/assets/images/task4/product8.png",
  //         price1:"$29.00",
  //         price2:'$25.00',
  //         discount:'14%'
  //   },
  // ];

  return (
    <section className="container min-h-full lg:min-h-screen">
      {/* header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <Heading header={"Breakfast & Dairy"} text={"Do not miss the current offers until the end of month."}/>
        {/* view all btn */}
        <ViewAll />
      </div>

      {/* left content */}
      <div className="rounded-lg">
        <div className="flex flex-col lg:flex-row">
          <SideCategory header={"Breakfast & Dairy"} backgroundImage={"/src/assets/icons/favico/task4/icon2.png"}/>

        {/* right content */}
        <div className="w-full md:w-[70%] h-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 h-full p-4">
              {products.slice(0, 8).map((product, i) => (
                <Card
                  key={i}
                  product={product}
                  discount={product.discount}
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