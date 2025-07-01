import { Logo } from '@/assets/images/index.js'
import React from 'react'
import Search from './Search'
import { Avatar } from '@/assets/icons/svgs'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function HeaderSection1() {
  const { items } = useSelector(state => state.cart);
  const itemsArray = Array.isArray(items) ? items : [];
  // products Count
  const productsCount = itemsArray.reduce((acc, item)=> acc + item.quantity , 0);
  // total Price 
  const totalPrice = itemsArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <header className='container flex items-center justify-between lg:h-[92px] h-[60px] sm:h-[80px] select-none max-lg:px-2 bg-white '>
      <div className='flex items-center'>
        <Link to={'/'}>
          <img src={Logo} alt="Basket Logo"  className='lg:w-[165px] lg:h-[62px] min-w-[90px] h-[40px] cursor-pointer' />
        </Link>
      </div>
      <div className='flex items-center'>
        <Search />
      </div>
      <div className='flex items-center justify-between gap-1 md:gap-2 lg:gap-4 font-heading text-xs h-full'>
        <Avatar className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] md:w-[42px] md:h-[42px]"/>
        <span className='font-body font-semibold text-xs md:text-base text-[var(--color-text)]'>{`$${totalPrice.toFixed(2)}`}</span>
        <CartWidget productsCount={productsCount}/>
      </div>
      
    </header>
  )
}
