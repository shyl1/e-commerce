import React from 'react'
import banner from '../assets/images/sidebar-banner.gif.svg'
import { avalablity, Brands, ProductCategory } from '@/constants'

export default function Sidebar() {
    return (
        <>
              <div className="col-span-1 bg-gray-100 p-4  rounded-lg shadow-md mb-6 ">
                {/* Product Category */}
                <h2 className="text-lg font-bold mb-4">PRODUCT CATEGORY</h2>
                <ul className="space-y-2">
                  {
                    ProductCategory.map((sideBarString , i)=> (
                      <li key={i} className="flex items-center">
                        <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        {sideBarString}
                      </li>
                    ))
                  }
                </ul>

                  {/* Brands */}
                <h2 className="text-lg font-bold mb-4 mt-10">BRANDS</h2>
                <ul className="space-y-2">
                  {
                    Brands.map(({name , quantity} , i)=> (
                      <li key={i} className="flex items-center">
                        <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <div className="flex justify-between items-end w-full">
                          <span>{name}</span>
                          <span>{`(${quantity})`}</span>
                        </div>
                      </li>
                    ))
                  }
                </ul>

            {/* Price */}
            <h2 className='text-lg font-bold mb-4 mt-10'>PRICE</h2>
            <div className="flex justify-between items-center mb-4">
              <div className='flex flex-col mr-2'>
                <label htmlFor="from">From</label>
                <input type="number" id='from' className="border border-gray-300 rounded px-2 py-1 w-1/2 mr-2" />
              </div>
              <div className='flex flex-col mr-2'> 
                <label htmlFor="to">To</label>
                <input type="number" id='to' className="border border-gray-300 rounded px-2 py-1 w-1/2 mr-2" />
              </div>
            </div>

            {/* AVALABLITY */}
            <h2 className='text-lg font-bold mb-4 mt-10'>AVALABLITY</h2>
            <span className='border border-b-2 border-dashed text-blue-500 text-4xl flex flex-col'></span>
            <ul className="space-y-2">
              { 
                avalablity.map(({name , quantity} , i)=> (
                  <li key={i} className="flex items-center">
                  <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <div className="flex justify-between items-end w-full">
                    <span>{name}</span>
                    <span>{`(${quantity})`}</span>
                  </div>
                </li>
                ))
                
              }
              </ul>

              <div className="mt-10">
                <img src={banner} alt="banner" />
              </div>
          </div>
        </>
    )
}