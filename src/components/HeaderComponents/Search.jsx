import { SearchIcon } from "@/assets/icons/svgs";
import { setSearchQuery } from "@/store/Search/searchslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Search() {

   // to read the query
  const {query} = useSelector(state => state.search);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleFormSubmit(e){
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  }
  return (
    <form onSubmit={handleFormSubmit} className=" min-w-[150px] h-[40px] sm:w-[350px] mx-2 md:w-[500px] md:h-[60px] lg:w-[600px]
    xl:w-[763px] rounded-[7px] bg-[var(--color-primary)] flex items-center justify-between gap-2">
      <input type="search" name="search" id="search" 
      className="w-full h-full outline-0 border-0 placeholder:text-[var( --color-text-holder)] pl-2 sm:pl-7 md:placeholder:text-[14px] placeholder:text-[10px] font-heading font-normal mr-2 text-xs md:text-sm " 
      placeholder="Search for Products, fruit, meat, eggs .etc..."
      value={query}
      onChange={(e)=> dispatch(setSearchQuery(e.target.value.trimStart()))}
      />
      <button type="submit" className="mr-2 sm:mr-5 cursor-pointer"><SearchIcon className="w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px]" /></button>
    </form>
  )
}
