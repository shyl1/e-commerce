import HeroSection from "@/components/HomeComponents/HeroSection/HeroSection";
import HomeCategory from "@/components/HomeComponents/Furit&Veges/HomeCategory";
import FirstPage from "@/components/HomeComponents/Breakfast&Dairy/first-section/FirstPage";
import BestSellers from "@/components/HomeComponents/BestSeller/BestSellers";
import PromoSection from "@/components/HomeComponents/Breakfast&Dairy/second-section/PromoSection";
import CategoryGrid from "@/components/HomeComponents/Breakfast&Dairy/third-section/CategoryGrid";
import WrapperMargin from "@/constants/WrapperMargin";
import React from "react";
import BreadCrumbs from "@/components/Breadcrumbs/BreadCrumbs";

export default function Home() {
  return (
    <section className="my-5">
      <BreadCrumbs/>
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
