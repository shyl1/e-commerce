import { Logo } from '@/assets/images/index.js';
import React, { useState } from 'react';
import Search from './Search';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";

import { UserContext } from "@/Context/AuthContext"; // عدل حسب المسار الحقيقي

export default function HeaderSection1() {
  const { items } = useSelector(state => state.cart);
  const itemsArray = Array.isArray(items) ? items : [];

  // products Count
  const productsCount = itemsArray.reduce((acc, item) => acc + item.quantity, 0);

  // total Price 
  const totalPrice = itemsArray.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // to hide search but leave logo and cart widget
  // get cart and checkout path 
  const isShoppingCartOrCheckout = location.pathname === '/cart' || location.pathname.startsWith('/checkout');

    // const { Token, setToken } = useContext(UserContext);
    // const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    // const handleLogout = () => {
    //   localStorage.removeItem("token");
    //   setToken(null);
    //   handleClose();
    //   navigate("/login");
    // };

  return (
    <header className='container flex items-center justify-between lg:h-[92px] h-[60px] sm:h-[80px] select-none max-lg:px-2 bg-white'>
      <div className='flex items-center'>
        <Link to='/'>
          <img
            src={Logo}
            alt="Basket Logo"
            className='lg:w-[165px] lg:h-[62px] min-w-[90px] h-[40px] cursor-pointer'
          />
        </Link>
      </div>

    {
      !isShoppingCartOrCheckout && (
        <div className='flex items-center'>
          <Search />
        </div>
      )
    }

      <div className='flex items-center justify-between gap-1 md:gap-2 lg:gap-4 font-heading text-xs h-full'>


        <span> 
          {/* Avatar with Logout Menu */}
          <IconButton onClick={handleClick} className="ml-4">
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            className='flex flex-col justify-center'
          >
            {/* <MenuItem onClick={handleLogout}>Logout</MenuItem> */}

            <NavLink
            to="/login"
            className={({ isActive }) =>
              `centering m-2 text-sm ${isActive ? "isActiveStyle" : ""}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `centering m-2 text-sm ${isActive ? "isActiveStyle" : ""}`
            }
          >
            Register
          </NavLink>
          </Menu>
        </span>
        

        {/* <Avatar className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] md:w-[42px] md:h-[42px]" /> */}
        <span className='font-body font-semibold text-xs md:text-base text-[var(--color-text)]'>
          ${totalPrice.toFixed(2)}
        </span>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  );
}
