import { RightArrow } from "@/assets/icons/svgs";

export default function ViewAll() {
  return (
    <div className="flex w-full sm:w-auto mt-2 justify-center items-center text-center overflow-hidden border-2 border-gray-200 rounded-full px-4 py-1 hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
      <button
        onClick={() => console.log("Clicked")}
        className="text-xs text-gray-400 pr-2 hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer"
        >
          View All
        </button>
        <RightArrow className="text-gray-400 "/>
    </div>
  )
}
