import { NavLink } from "react-router-dom";
import { Bakery, Cup, DropDown, Meat } from "@/assets/icons/svgs";

export default function NavBar() {
  return (
    <>
      {/* HOME */}
      <NavLink
        to={"/"}
        className={({ isActive }) => `centering mr-2 gap-2 
          ${isActive ? `isActiveStyle` : ``}`}
      >
        {({ isActive }) => (
          <>
            HOME
            <span className={isActive ? `text-[var(--color-accent)]` : ""}>
              <DropDown />
            </span>
          </>
        )}
      </NavLink>

      {/* SHOP  */}
      <NavLink
        to={"/Shop"}
        className={({ isActive }) =>
          `mr-2 centering ${isActive ? `isActiveStyle` : ``}`
        }
      >
        SHOP
      </NavLink>

      {/* MEATS & SEAFOOD */}
      {/* <NavLink 
        className={({isActive})=> 
          `centering gap-2 ${ isActive ? "text-[var(--color-accent)] bg-hover px-5 h-[40px] rounded-[40px]" : ''} `}>
          <span className={({isActive})=> `${isActive ? 'text-[var(--color-accent)]' : ''}`}>
            <Meat/>
          </span>
          MEATS & SEAFOOD
        </NavLink> */}

      <NavLink className="centering gap-2">
        <span>
          <Meat />
        </span>
        MEATS & SEAFOOD
      </NavLink>

      {/* bakery */}
      <NavLink className="centering gap-2">
        <span>
          <Bakery />
        </span>
        BAKERY
      </NavLink>

      {/* BEVERAGES */}
      <NavLink className="centering gap-2">
        <span>
          <Cup />
        </span>
        BEVERAGES
      </NavLink>

      {/* Blog */}
      <NavLink
        to={"/blog"}
        className={({ isActive }) =>
          `centering mr-2 ${isActive ? "isActiveStyle" : ""}`
        }
      >
        BLOG
      </NavLink>

      {/* Contact */}
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `centering  mr-2 ${isActive ? "isActiveStyle" : ""}`
        }
      >
        CONTACT
      </NavLink>
    </>
  );
}
