import { NavLink } from "react-router-dom";
import DropMenu from "./DropMenu";
import { DropDown } from "@/assets/icons/svgs";

const totalProducts = 50;

export default function HeaderSection2() {
  return (
    <header className="container h-[88px] flex justify-between items-center">
      <div>
        <DropMenu totalProducts={totalProducts}/>
      </div>
      <nav>
        <NavLink>Home <span><DropDown /></span> </NavLink>
      </nav>

    </header>
  )
}
