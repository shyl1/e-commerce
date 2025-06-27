import React from 'react'
import banner from '../assets/images/sidebar-banner.gif.svg'

export default function Sidebar() {
    return (
        <>
              <div className="col-span-1 bg-gray-100 p-4  rounded-lg shadow-md mb-6 ">
                <h2 className="text-lg font-bold mb-4">PRODUCT CATEGORY</h2>
                <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                Beverages
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                Biscults & Snacks
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                Breads & Bakery
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                Breakfast & Dairy
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                Frozen Foods
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                Fruits & Vegetables
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                Grocery & Staples
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                Hausehold Needs
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                Meats & Seafood
              </li>
            </ul>

              
                <h2 className="text-lg font-bold mb-4 mt-10">BRANDS</h2>
                <ul className="space-y-2">
              <li className="flex items-center">
                  <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <div className="flex justify-between items-end w-full">
                  <span>Frito Lay</span>
                  <span>(8)</span>
                </div>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <div className="flex justify-between items-end w-full">
                  <span>Quaker</span>
                  <span>(36)</span>
                </div>
                
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <div className="flex justify-between items-end w-full">
                  <span>Cola</span>
                  <span>(1)</span>
                </div>
                
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <div className="flex justify-between items-end w-full">
                  <span>Welch's</span>
                  <span>(1)</span>
                </div>
                
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <div className="flex justify-between items-end w-full">
                  <span> Oreo</span>
                  <span>(18)</span>
                </div>
              </li>
            </ul>

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


            <h2 className='text-lg font-bold mb-4 mt-10'>AVALABLITY</h2>
            <span className='border border-b-2 border-dashed text-blue-500 text-4xl flex flex-col'></span>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <div className="flex justify-between items-end w-full">
                  <span>  In Stock</span>
                  <span>(62)</span>
                </div>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <div className="flex justify-between items-end w-full">
                  <span> Out of Stock</span>
                  <span>(0)</span>
                </div>
              </li>
              </ul>

              <div className="mt-10">
                <img src={banner} alt="banner" />
              </div>



          
          </div>
        </>
    )
}
