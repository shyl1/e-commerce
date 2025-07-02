import { Logo } from '@/assets/images/index.js';
import React from 'react';
import Search from './Search';
import CartWidget from './CartWidget';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

export default function HeaderSection1() {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const token = localStorage.getItem("userToken");
  const userImage = localStorage.getItem("userImage");
  const avatarSrc = userImage || "https://www.w3schools.com/howto/img_avatar.png";

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userImage");
    handleClose();
    navigate("/login");
  };

  const { items } = useSelector(state => state.cart);
  const itemsArray = Array.isArray(items) ? items : [];
  // products Count
  const productsCount = itemsArray.reduce((acc, item)=> acc + item.quantity , 0);
  // total Price 
  const totalPrice = itemsArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <header className='container flex items-center justify-between lg:h-[92px] h-[60px] sm:h-[80px] select-none max-lg:px-2 bg-white'>
      <div className='flex items-center'>
        <Link to={'/'}>
          <img
            src={Logo}
            alt="Basket Logo"
            className='lg:w-[165px] lg:h-[62px] min-w-[90px] h-[40px] cursor-pointer'
          />
        </Link>
      </div>

      <div className='flex items-center'>
        <Search />
      </div>

      <div className='flex items-center justify-between gap-1 md:gap-2 lg:gap-4 font-heading text-xs h-full'>
        <span className='font-body font-semibold text-xs md:text-base text-[var(--color-text)]'>
          {`$${totalPrice.toFixed(2)}`}
        </span>

        <CartWidget productsCount={productsCount} />

        {token ? (
          <>
            <IconButton onClick={handleMenu}>
              <Avatar sx={{ width: 35, height: 35 }} src={avatarSrc} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <Link to="/"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
              <MenuItem onClick={logOut}>LogOut</MenuItem>
            </Menu>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login" className="text-sm text-green-600 hover:underline">Login</Link>
            <Link to="/register" className="text-sm text-green-600 hover:underline">Register</Link>
          </div>
        )}
      </div>
    </header>
  );
}
