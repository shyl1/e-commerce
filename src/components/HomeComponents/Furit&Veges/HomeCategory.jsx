import React, { useEffect } from "react";
import CardCategory from "./CardCategory";
import DiscountCard from "./DiscountCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/HomeCategoryProducts/homecategoryslice";
import Heading from "@/components/shared/Heading";
import SideCategory from "@/components/shared/SideCategory";
import ViewAll from "@/components/shared/ViewAll";

const HomeCategory = () => {

  const {products} = useSelector(state => state.homeproducts);
  const dispatch = useDispatch();

//   const categories = products && Array.isArray(products)
//   ? [...new Set(products.map(product => product.category))]
//   : []; //Home.jsx:19 TypeError: Cannot read properties of undefined (reading 'map') at HomeCategory (HomeCategory.jsx?t=1751408825753:27:43)
// //The above error occurred in the <HomeCategory> component.
// //React will try to recreate this component tree from scratch using the error boundary you provided, RenderErrorBoundary.
// // error 
// // to solve it you should garud arrays

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="container min-h-full lg:min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        {/* header */}
        <Heading header={"Fruits and Vegetables"} text={"The freshest green grocer products are waiting for you"}/>
        {/* btn */}
        <ViewAll />
      </div>

      {/* Main Content Section */}
      <div className="rounded-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Banner and Categories List */}
          <SideCategory header={"Fruits and Vegetables"} backgroundImage={"/src/assets/images/category-banner-1.jpg.png"}/> 
          
          {/* Right Side - Product Cards Grid */}
          <div className="w-full md:w-[70%] h-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 h-full p-4">
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
