import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/HomeCategoryProducts/homecategoryslice";
import Heading from "@/components/shared/Heading";
import SideCategory from "@/components/shared/SideCategory";
import ViewAll from "@/components/shared/ViewAll";
import { Banner } from "@/assets/images/task4";

const FirstPage = () => {
  
  const {products} = useSelector(state => state.homeproducts);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchProducts);
  }, [dispatch]);


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
          <SideCategory header={"Breakfast & Dairy"} backgroundImage={Banner}/>

        {/* right content */}
        <div className="w-full md:w-[70%] h-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 h-full p-4">
              {products.slice(0, 8).map((product, i) => (
                <Card
                  key={i}
                  product={product}
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