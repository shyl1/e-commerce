import { SearchIcon } from "@/assets/icons/svgs";

export default function Search() {

  function handleFormSubmit(e){
    e.preventDefault();
  }
  return (
    <form onSubmit={handleFormSubmit} className=" min-w-[150px] h-[40px] sm:w-[350px] mx-2 md:w-[500px] md:h-[60px] lg:w-[600px]
    xl:w-[763px] rounded-[7px] bg-[var(--color-primary)] flex items-center justify-between gap-2">
      <input type="search" name="search" id="search" 
      className="w-full h-full outline-0 border-0 placeholder:text-[var( --color-text-holder)] pl-2 sm:pl-7 md:placeholder:text-[14px] placeholder:text-[10px] font-heading font-normal mr-2 text-xs md:text-sm " 
      placeholder="Search for Products, fruit, meat, eggs .etc..."
      />
      <span className="mr-2 sm:mr-5 cursor-pointer"><SearchIcon className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px]" /></span>
    </form>
  )
}
