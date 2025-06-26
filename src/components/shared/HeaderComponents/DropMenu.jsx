import { DropDown, Menu } from '@/assets/icons/svgs'
import React from 'react'

export default function DropMenu({totalProducts}) {
  return (
    <div className='relative flex justify-center '>
      <button className='flex items-center justify-around bg-accent w-[152px] h-[40px] lg:w-[213px] lg:h-[50px] rounded-full px-2 text-[var(--color-primary)] cursor-pointer relative ml-2'>
        <span><Menu  className="w-[13px] h-[9px]"/></span>
        <span className='font-body text-[12px] lg:text-[15px] font-semibold'>ALL CATEGORIES</span>
        <span className='text-[var(--color-text-white)]'><DropDown /></span>
      </button>
      <span className='absolute bottom-[-10px] border-white text-[var(--color-text-menu)] font-body bg-border-gray rounded-[18px] h-[18px] px-3 text-[9px] sm:text-[10px] flex items-center justify-center'>TOTAL {totalProducts} PRODUCTS</span>
    </div>
  )
}
