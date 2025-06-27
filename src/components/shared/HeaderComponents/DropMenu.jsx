import { DropDown, Menu } from '@/assets/icons/svgs'
import React, { useState } from 'react'

export default function DropMenu({totalProducts}) {

  const [isOpen , setIsOpen] = useState(false);

  function toggleMenu(){
    setIsOpen(!isOpen);
  }

  return (
    <div className='relative flex justify-center '>
      <button className='flex items-center justify-around bg-accent w-[152px] h-[40px] lg:w-[213px] lg:h-[50px] rounded-full px-2 text-[var(--color-primary)] cursor-pointer relative ml-2' onClick={toggleMenu}>
        <span><Menu  className="w-[13px] h-[9px]"/></span>
        <span className='font-body text-[12px] lg:text-[15px] font-semibold'>ALL CATEGORIES</span>
        <span className='text-[var(--color-text-white)]'><DropDown /></span>
      </button>

      {/* drop menu badge */}
      <span className='absolute bottom-[-10px] border-white text-[var(--color-text-menu)] font-body bg-border-gray rounded-[18px] h-[18px] px-3 text-[9px] sm:text-[10px] flex items-center justify-center'>TOTAL {totalProducts} PRODUCTS</span>

      {/* drop down menu  */}
      {
        isOpen && (
          <ul className='w-[350px] lg:w-[900px] h-[300px] bg-border-gray/80 backdrop-blur-sm absolute top-[70px] left-0 p-3 flex flex-col  shadow-xl rounded-md transition-all duration-300 z-50 text-[var(--color-text-black)] text-xs gap-3 font-bold flex-wrap'>
            <li>MEATS & SEAFOOD</li>
            <li>BAKERY</li>
            <li>BEVERAGES</li>
            <li>MEATS & SEAFOOD</li>
            <li>BAKERY</li>
            <li>BEVERAGES</li>
            <li>MEATS & SEAFOOD</li>
            <li>BAKERY</li>
            <li>BEVERAGES</li>
            <li>MEATS & SEAFOOD</li>
            <li>BAKERY</li>
            <li>BEVERAGES</li>
          </ul>
        )
      }
    </div>
  )
}
