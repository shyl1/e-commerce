import { NavLink } from "react-router-dom";
import { Bakery, Cup, DropDown, Meat } from "@/assets/icons/svgs";


export default function NavBar() {

  return (
    <>
    
          <NavLink
            to="/"
            className={({ isActive }) =>
              `centering mr-2 gap-2 ${isActive ? "isActiveStyle" : ""}`
            }
          >
            {({ isActive }) => (
              <>
                HOME
                <span className={isActive ? "text-[var(--color-accent)]" : ""}>
                  <DropDown />
                </span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/Shop"
            className={({ isActive }) =>
              `mr-2 centering ${isActive ? "isActiveStyle" : ""}`
            }
          >
            SHOP
          </NavLink>

          <NavLink className="centering gap-2">
            <Meat />
            MEATS & SEAFOOD
          </NavLink>

          <NavLink className="centering gap-2">
            <Bakery />
            BAKERY
          </NavLink>

          <NavLink className="centering gap-2">
            <Cup />
            BEVERAGES
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `centering mr-2 ${isActive ? "isActiveStyle" : ""}`
            }
          >
            BLOG
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `centering mr-2 ${isActive ? "isActiveStyle" : ""}`
            }
          >
            CONTACT
          </NavLink>        
    
    </>
  );
}
