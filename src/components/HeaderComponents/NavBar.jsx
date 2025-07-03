import { NavLink, useNavigate } from "react-router-dom";
import { Bakery, Cup, DropDown, Meat } from "@/assets/icons/svgs";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "@/Context/AuthContext"; // عدل حسب المسار الحقيقي

export default function NavBar() {
  const { Token, setToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    handleClose();
    navigate("/login");
  };

  return (
    <>
      {Token ? (
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

          {/* Avatar with Logout Menu */}
          <IconButton onClick={handleClick} className="ml-4">
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `centering mr-2 ${isActive ? "isActiveStyle" : ""}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `centering mr-2 ${isActive ? "isActiveStyle" : ""}`
            }
          >
            Register
          </NavLink>
        </>
      )}
    </>
  );
}
