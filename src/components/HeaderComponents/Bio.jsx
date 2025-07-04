import { DropDown, Secure } from "@/assets/icons/svgs";
import { Link } from "react-router-dom";


export default function Bio() {
  return (
    <section className="container flex justify-between h-[40px] select-none max-lg:px-2 text-[var(--color-text)]">
      <div className="flex items-center justify-between font-heading font-normal text-xs gap-4 ">
        <Link to='/about-us'>
          <span className="">About Us</span>
        </Link>
        <div>
          <span>Compare</span>
        </div>
        <Link to='/wishlist'>
          <span>Wishlist</span>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-3 font-heading text-xs h-full ">
          <span className="hidden lg:flex items-center justify-center"><Secure className="w-[20px] h-[20px] mr-2"/>100% Secure delivery without contacting the courier</span>
          <span className="hidden lg:flex border-x border-[var(--color-border-gray)] px-5 ">Need help? Call Us: <span className="text-accent font-bold">+ 0020 500</span></span>
        <div className="flex  gap-2 font-medium">
          <span className="flex justify-center items-center gap-2 ">English<span className="text-[var(--color-text)]"><DropDown/></span></span>
          <span className="flex justify-center items-center gap-2 ">USD<span className="text-[var(--color-text)]"><DropDown/></span></span>
        </div>
      </div>

    </section>
  )
}
