import HeroSection from '@/components/HomeComponents/HeroSection'
import HomeCategory from "@/components/category/HomeCategory";
import BestSellers from '@/components/lazyComponents/BestSellers'
import React from "react";


export default function Home() {
  return (
    <section className='my-5'>
      <HeroSection />
      <div>
      <HomeCategory />
    </div>
    <div>
      <BestSellers/>
    </div>
    </section>
  )
}

