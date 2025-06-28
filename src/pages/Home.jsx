import HeroSection from "@/components/HomeComponents/HeroSection";
import HomeCategory from "@/components/category/HomeCategory";
import FirstPage from "@/components/first-section/FirstPage";
import BestSellers from "@/components/lazyComponents/BestSellers";
import PromoSection from "@/components/second-section/PromoSection";
import CategoryGrid from "@/components/third-section/CategoryGrid";
import WrapperMargin from "@/constants/WrapperMargin";
import React from "react";

export default function Home() {
  return (
    <section className="my-5">
      <WrapperMargin>
        <HeroSection />
        <div>
          <BestSellers />
        </div>
        <div>
          <HomeCategory />
          <FirstPage />
          <PromoSection />
          <CategoryGrid/>


        </div>
      </WrapperMargin>
    </section>
  );
}
