import { AD2, AD6, Blog1, Blog2 } from '@/assets/images'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaReddit, FaTwitter } from "react-icons/fa"
import { GoChevronRight } from "react-icons/go"

function Blog() {
  return (
    <div className='mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-4 px-4 sm:px-6 md:px-8 xl:px-0 max-w-7xl mb-20'>

      {/* Main Blog Section */}
      <div className='md:col-span-2 lg:col-span-3 w-full'>
        {/* Blog Post 1 */}
        <div>
          <img src={Blog1} alt="Blog 1" className='rounded-md w-full' />
          <div className='mt-5'>
            <p className='text-xs font-semibold text-gray-400'>Grocery</p>
            <p className='text-2xl md:text-4xl font-semibold mt-3'>But I must explain to you how all this mistaken idea</p>
            <p className='text-sm font-semibold mt-2 text-gray-600'>Jan 13 2025 <span className='ml-2'>Sinan ISIK</span></p>
            <p className='text-base leading-7 text-slate-800 mt-4'>
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit
              lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
            </p>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className='mt-10'>
          <img src={Blog2} alt="Blog 2" className='rounded-md w-full' />
          <div className='mt-5'>
            <p className='text-xs font-semibold text-gray-400'>Grocery</p>
            <p className='text-2xl md:text-4xl font-semibold mt-3'>The Problem With Typefaces on the Web</p>
            <p className='text-sm font-semibold mt-2 text-gray-600'>Jan 13 2025 <span className='ml-2'>Sinan ISIK</span></p>
            <p className='text-base leading-7 text-slate-800 mt-4'>
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit
              lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
            </p>
          </div>
        </div>

        {/* Pagination */}
        <div className='flex justify-center items-center gap-2 mt-10'>
          <p className='h-8 w-8 bg-[#35AFA0] text-white flex justify-center items-center rounded-full text-sm'>1</p>
          <p className='h-8 w-8 bg-white text-black flex justify-center items-center rounded-full text-sm'>2</p>
          <p className='h-8 w-8 bg-white text-black flex justify-center items-center rounded-full text-sm'><GoChevronRight /></p>
        </div>
      </div>

      {/* Sidebar */}
      <div className='w-full flex flex-col gap-10'>

        {/* Recent Posts */}
        <div>
          <p className='text-sm font-medium'>RECENT POSTS</p>
          <div className='w-full border border-[#EDEEF5] flex flex-col justify-around mt-5 rounded-md p-4 gap-4'>

            {[{ img: Blog1, title: 'But I must explain to you how all this mistaken idea', num: 1 },
              { img: Blog2, title: 'The Problem With Typefaces on the Web', num: 2 },
              { img: AD6, title: 'English Breakfast Tea With Tasty Donut Desserts', num: 3 }]
              .map((post, i) => (
                <div key={i} className='grid grid-cols-3 gap-2'>
                  <div className='relative'>
                    <img src={post.img} alt="#" className='object-cover rounded-full w-14 h-14' />
                    <p className='absolute top-0 right-0 size-5 text-xs bg-emerald-400 text-white border-2 border-white rounded-full flex justify-center items-center'>{post.num}</p>
                  </div>
                  <div className='col-span-2'>
                    <p className='text-sm font-medium leading-5'>{post.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <p className='text-sm font-medium'>SOCIAL MEDIA</p>
          <div className='flex flex-col gap-2 mt-5'>
            {[
              { icon: <FaFacebookF />, label: 'FACEBOOK', color: '#3B5998' },
              { icon: <FaInstagram />, label: 'INSTAGRAM', color: '#CC2366' },
              { icon: <FaTwitter />, label: 'TWITTER', color: '#1DA1F2' },
              { icon: <FaReddit />, label: 'REDDIT', color: '#FF4500' },
              { icon: <FaPinterestP />, label: 'PINTEREST', color: '#E60023' },
            ].map((item, index) => (
              <a key={index} href="#">
                <div className="w-full h-10 rounded-sm flex items-center gap-4" style={{ backgroundColor: item.color }}>
                  <span className='text-white text-xs ml-4'>{item.icon}</span>
                  <p className='text-white text-xs'>{item.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Widget Banner */}
        <div>
          <p className='text-sm font-medium'>WIDGET BANNER</p>
          <div className='w-full mt-5'>
            <img src={AD2} alt="#" className='object-cover rounded-sm w-full' />
          </div>
        </div>

        {/* Tags */}
        <div>
          <p className='text-sm font-medium'>TAGS</p>
          <div className='mt-5 flex flex-wrap gap-2'>
            {['ecommerce', 'food', 'grocery', 'klbtheme', 'organic', 'shop', 'shopify', 'store'].map((tag, i) => (
              <a key={i} href="#" className='border border-[#EDEEF5] h-8 px-3 flex justify-center items-center text-sm rounded'>{tag}</a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog