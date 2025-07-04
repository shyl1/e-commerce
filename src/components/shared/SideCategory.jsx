import { RightArrow } from '@/assets/icons/svgs'
import { VerticalBorder } from '@/constants'
import React from 'react'

export default function SideCategory({header , backgroundImage  }) {
  return (
    <div className="border-2 border-gray-200  w-full lg:w-[30%] overflow-hidden  flex flex-col h-full mt-4">
            <div
              className=" h-[50vh] lg:h-[50vh] bg-cover bg-center flex flex-col justify-center p-6"
              style={{ backgroundImage: `url(${backgroundImage})` }}
              loading="lazy"
            >
              <h2 className="text-sm sm:text-base lg:text-lg text-[#151720] font-medium">
                Weekly Discounts on
              </h2>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                {header}
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-[#202435] py-1 mt-2">
                Bacola Weekend Discount
              </p>
              <button className="w-full lg:w-[40%] bg-[#233A95] py-1 px-3 rounded-full text-white text-xs sm:text-sm hover:scale-105 transition mt-7">
                View All
              </button>
            </div>

            {/* categories */}
            <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 py-8"> 
              {VerticalBorder.map((item, i) => ( 
                <div key={i} className="text-sm font-medium text-[#3E445A] bg-white/80 py-1 px-3 rounded hover:bg-[#f0f0f0] transition cursor-pointer"> 
                  {item.name}
                </div> ))}
            </div>

            <div className="flex-1 w-full flex flex-col justify-between pb-3 text-start place-items-start">
              <div className="flex justify-start w-full px-4">
                <button className="flex items-center text-xs text-[#000] font-semibold gap-1 hover:cursor-pointer transition-all duration-300 hover:scale-105">
                  View All
                  <RightArrow className="text-gray-400" />
                </button>
              </div>
            </div>
      </div>
  )
}
