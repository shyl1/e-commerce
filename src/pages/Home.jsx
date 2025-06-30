import HeroSection from "@/components/HomeComponents/HeroSection";
import HomeCategory from "@/components/category/HomeCategory";
import BestSellers from "@/components/lazyComponents/BestSellers";
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
        </div>
      </WrapperMargin>
    </section>
  );
}
