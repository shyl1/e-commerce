import { RightArrow } from "@/assets/icons/svgs";
import { ImgUrl } from "@/constants";

export default function HeroSection() {
  return (
    
    <section className='container grid grid-cols-12 gap-4'>

      {/* alpro */}
      <div  loading="lazy"
      style={{backgroundImage: `url(${ImgUrl[0].img})`}}
      className={`col-span-12 lg:col-span-8 row-span-8 bg-center bg-cover w-full h-[506px] rounded-[7px] p-6`}>

        {/* content */}
        <div className="flex flex-col justify-center items-start p-7 gap-4 w-full h-full">
          <span className="text-[var(--color-text-black)] font-body font-medium text-xs leading-[18px] tracking-[1px] flex items-center justify-center gap-4">EXCLUSIVE OFFER
            <span className="h-[31px] bg-[linear-gradient(90deg,rgba(0,184,83,0.2)_0%,rgba(32,55,88,0)_100%)] flex items-center justify-center rounded-[40px] p-3 font-body font-semibold text-[14px] leading-[21px] tracking-[1px] uppercase text-[var(--color-text-dark-green)]">-20% Off</span>
          </span>
          <span className="flex flex-col gap-3">
            <h3 className="font-heading font-bold text-[35px] sm:text-[48px] leading-[57px] tracking-[-0.7px]">Feed your family<br />the best</h3>
            <span className="font-heading font-normal tracking-[-0.1px] leading-[24px] text-[16px] ">Only this week. Don’t miss...</span>
          </span>
          <span className="font-heading font-normal tracking-[-0.1px] leading-[24px] text-[16px]">from <span className="font-body font-semibold text-[36px] leading-[54px] tracking-[-0.1px] text-[var(--color-text-red)]"> $7.99</span></span>

          <button className="flex items-center justify-center  text-[var(--color-text-white)] bg-accent w-[133px] h-[40px] p-2 gap-2 rounded-[30px]  cursor-pointer ">Shop Now 
            <span className="text-[var(--color-text-white)] "><RightArrow /></span>
          </button>
        </div>
        
      </div>

      {/* Starbucks */}
      <div loading="lazy" style={{backgroundImage: `url(${ImgUrl[1].img})`}}
      className={`hidden lg:flex col-span-4 row-span-8 bg-center bg-cover w-full h-[506px] rounded-[7px] p-6`}
      ></div>

      {/* Bread */}
      <div 
        loading="lazy"
        style={{backgroundImage: `url(${ImgUrl[2].img})`}}
        className={`hidden col-span-6 row-span-5 bg-center bg-cover w-full h-[260px] rounded-[7px] p-6 lg:flex justify-end items-center`}
      >
        {/* content */}
        <div className="flex flex-col justify-center p-6 w-[298px] h-[209px] gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-heading font-extralight text-[24px] leading-[28.8px] tracking-[-0.8px] text-[var(--color-text-black)]">Everything is so fresh</h4>
            <h3 className="font-heading font-semibold text-[30px] leading-[36px] tracking-[-0.8px] text-[var(--color-text)]">only in Bacola</h3>
            <span className="font-heading font-normal text-xs leading-[18px] tracking-[-0.1px] text-[var(--color-text-light-gray)]">Bacola Weekend Discount</span>
          </div>
          <button className="bg-btn-bg-blue text-[var(--color-text-white)] w-[120px]  h-[40px] rounded-[30px]  cursor-pointer  ">Shop Now</button>
        </div>

      </div>

      {/* lentils */}
      <div 
        style={{backgroundImage: `url(${ImgUrl[3].img})`}}
        loading="lazy"
        className={`hidden col-span-6 row-span-5 bg-center bg-cover w-full h-[260px] rounded-[7px] p-6 lg:flex justify-end items-center`}
      >
         {/* content */}
        <div className="flex flex-col justify-center p-6 w-[298px] h-[209px] gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-heading font-extralight text-[24px] leading-[28.8px] tracking-[-0.8px] text-[var(--color-text-black)]">Big discount on</h4>
            <h3 className="font-heading font-semibold text-[30px] leading-[36px] tracking-[-0.8px] text-[var(--color-text)]">organic legumes</h3>
            <span className="font-heading font-normal text-xs leading-[18px] tracking-[-0.1px] text-[var(--color-text-light-gray)]">Bacola Weekend Discount</span>
          </div>
          <button className="bg-btn-bg-blue text-[var(--color-text-white)] w-[120px]  h-[40px] rounded-[30px] cursor-pointer ">Shop Now</button>
        </div>

      </div>
    </section>
  )
}
