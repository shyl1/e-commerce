import { Logo } from '@/assets/images/index.js'
import React from 'react'
import Search from './Search'
import { Avatar } from '@/assets/icons/svgs'
import CartWidget from './CartWidget'

const productsCount = 0; // This should be replaced with actual logic to get the count of products in the cart
export default function HeaderSection1() {
  return (
    <header className='container flex items-center justify-between lg:h-[92px] h-[60px] sm:h-[80px] select-none max-lg:px-2'>
      <div className='flex items-center'>
        <img src={Logo} alt="Basket Logo"  className='lg:w-[165px] lg:h-[62px] min-w-[90px] h-[40px]'/>
      </div>
      <div className='flex items-center'>
        <Search />
      </div>
      <div className='flex items-center justify-between gap-1 md:gap-2 lg:gap-4 font-heading text-xs h-full'>
        <Avatar className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] md:w-[42px] md:h-[42px]"/>
        <span className='font-body font-semibold text-xs md:text-base text-[var(--color-text)]'>{`$0.00`}</span>
        <CartWidget productsCount={productsCount}/>
      </div>
      
    </header>
  )
}
