import { AD2, AD6, Blog1, Blog2 } from '@/assets/images'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaReddit, FaTwitter } from "react-icons/fa"
import { GoChevronRight } from "react-icons/go"

function Blog() {
  return (
    <div className='mx-auto grid grid-cols-4 gap-4  mb-20 sm:max-w-lg md:max-w-xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl'>
      <div className='w-full  col-span-3'>
        <div>
          <div >
            <img src={Blog1} alt="#" className='rounded-md'/>
          </div>
          <div className='max-w-full my-5'>
            <p className='text-xs font-semibold text-gray-400 leading-3 '>Grocery</p>
            <p className='max-w-3xl font-semibold text-4xl  leading-10 mt-3 '>But I must explain to you how all this mistaken idea</p>
            <p className='text-sm font-semibold leading-5 mt-2'><span className=' text-gray-400 mr-2 ' >Jan 13 2025</span>Sinan ISIK</p>
            <p className=' text-base font-normal leading-7 text-slate-800 mt-6'>
               Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
               sem sed convallis ultricies, ante eros laoreet libero,<br />vitae suscipit
               lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
            </p>
          </div>
        </div>

        <div>
          <div >
            <img src={Blog2} alt="#" className='rounded-md'/>
          </div>
          <div className='max-w-full my-5'>
            <p className='text-xs font-semibold text-gray-400 leading-3 '>Grocery</p>
            <h1 className='max-w-3xl  font-semibold text-4xl  leading-10 mt-3'>The Problem With Typefaces on the Web</h1>
            <p className='text-sm font-semibold leading-5 mt-2'><span className=' text-gray-400 mr-2 ' >Jan 13 2025</span>Sinan ISIK</p>
            <p className=' text-base font-normal leading-7 text-slate-800 mt-6'>
               Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
               sem sed convallis ultricies, ante eros laoreet libero,<br />vitae suscipit
               lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
            </p>
          </div>
        </div>
        <div className=' max-w-full h-8 flex justify-center mt-15'> 
          <p className='h-full w-8 bg-[#35AFA0] text-white flex justify-center items-center rounded-full'>1</p>
          <p className='h-full w-8 bg-white text-black flex justify-center items-center rounded-full'>2</p>
          <p className='h-full w-8 bg-white text-black flex justify-center items-center rounded-full'><GoChevronRight /></p>
        </div>
      </div>
      
      <div className='mx-auto w-63 flex flex-col gap-15 '>

        <div>
          <p className='text-sm font-medium leading-4'>RECENT POSTS</p>
          <div className='w-full border border-[#EDEEF5] h-65 flex flex-col justify-around mt-5 rounded-md'>

            <div className='mx-auto grid grid-cols-3 w-58 h-15  '>
              <div className='relative'>
                <img src={Blog1} alt="#"className='object-cover rounded-full size-15 ' />
                <p className='absolute top-0 right-4  size-5.5 text-xs bg-emerald-400 text-white border-3 border-white rounded-full flex justify-center '>1</p>
              </div>
              <div className='col-span-2 '>
                <p className='leading-5 ml-2 text-sm font-medium'>
                  But I must explain to 
                   you how all this
                   mistaken idea
                </p>
              </div>
            </div>

            <div className='mx-auto grid grid-cols-3 w-58 h-15  '>
              <div className='relative'>
                <img src={Blog2} alt="#"className='object-cover rounded-full size-15 ' />
                 <p className='absolute top-0 right-4  size-5.5 text-xs bg-emerald-400 text-white border-3 border-white rounded-full flex justify-center '>2</p>
              </div>
              <div className='col-span-2 '>
                <p className='leading-5 ml-2 text-sm font-medium'>
                     The Problem With
                     Typefaces on the Web  
                </p>
              </div>
            </div>

            <div className='mx-auto grid grid-cols-3 w-58 h-15  '>
              <div className='relative'>
                <img src={AD6} alt="#"className='object-cover rounded-full size-15 ' />
                 <p className='absolute top-0 right-4  size-5.5 text-xs bg-emerald-400 text-white border-3 border-white rounded-full flex justify-center '>3</p>
              </div>
              <div className='col-span-2 '>
                <p className='leading-5 ml-2 text-sm font-medium'>
                  English Breakfast Tea  
                  With Tasty Donut
                  Desserts
                </p>
              </div>
            </div>

          </div>
        </div>
      
        <div>
          <p className='text-sm font-medium leading-4'>SOCIAL MEDIA</p>
          <div className='w-full h-55 flex flex-col gap-1 mt-5'>

          <a href="#"> 
             <div className='w-full h-10 bg-[#3B5998] rounded-sm flex items-center gap-4'>
              <span className='text-white text-xs ml-4'><FaFacebookF /></span> 
              <p className='text-white text-xs'>FACEBOOK</p>
             </div>
            </a>

            <a href="#">
             <div className='w-full h-10 bg-[#CC2366] rounded-sm flex items-center gap-4'>
               <span className='text-white text-xs ml-4'><FaInstagram /> </span>
               <p className='text-white text-xs'>INSTAGRAM</p>
             </div>
            </a>

            <a href="#">
             <div className='w-full h-10 bg-[#1DA1F2] rounded-sm flex items-center gap-4'>
               <span className='text-white text-xs ml-4'><FaTwitter /></span>
               <p className='text-white text-xs'>TWITTER</p>
             </div>
            </a>

            <a href="#">
            <div className='w-full h-10 bg-[#FF4500] rounded-sm flex items-center gap-4'>
              <span className='text-white text-xs ml-4'><FaReddit /></span>
              <p className='text-white text-xs'>REDDIT</p>
            </div>
            </a>

            <a href="#">
            <div className='w-full h-10 bg-[#E60023] rounded-sm flex items-center gap-4 '>
              <span className='text-white text-xs ml-4'><FaPinterestP /></span>
              <p className='text-white text-xs'>PINTEREST</p>
            </div>
            </a>

          </div>
        </div>

        <div>
          <p className='text-sm font-medium leading-4'>WIDGET BANNER</p>
          <div className='w-full'>
            <img src={AD2} alt="#" className='object-cover mt-5 rounded-sm '/>
          </div>
        </div>

        <div>
           <p className='text-sm font-medium leading-4'>TAGS</p>
           <div className='mt-5 flex flex-wrap gap-1'>
            <a href="#"className='border border-[#EDEEF5] h-8 w-auto flex justify-center items-center '> <span className='px-2 text-sm'>ecommerce</span></a>
            <a href="#"className='border border-[#EDEEF5] h-8 w-auto flex justify-center items-center '> <span className='px-2 text-sm'>food</span></a>
            <a href="#"className='border border-[#EDEEF5] h-8 w-auto flex justify-center items-center '> <span className='px-2 text-sm'>grocery</span></a>
            <a href="#"className='border border-[#EDEEF5] h-8 w-auto flex justify-center items-center '> <span className='px-2 text-sm'>klbtheme</span></a>
            <a href="#"className='border border-[#EDEEF5] h-8 w-auto flex justify-center items-center '> <span className='px-2 text-sm'>organic</span></a>
            <a href="#"className='border border-[#EDEEF5] h-8 w-auto flex justify-center items-center '> <span className='px-2 text-sm'>shop</span></a>
            <a href="#"className='border border-[#EDEEF5] h-8 w-auto flex justify-center items-center '> <span className='px-2 text-sm'>shopify</span></a>
            <a href="#"className='border border-[#EDEEF5] h-8 w-auto flex justify-center items-center '> <span className='px-2 text-sm'>store</span></a>
           </div>
        </div>
        
      </div>
    </div>
  )
}

export default Blog