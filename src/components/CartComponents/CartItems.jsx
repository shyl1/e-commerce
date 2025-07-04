
import { removeFromCart, updateQuantity } from '@/store/cart/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CartItems() {
  
  const {items} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0){
    return(
      <div>
        Your Cart is Empty
      </div>
    );
  } 

  return (
    <div className='flex flex-col gap-4'>
      {
        items.map((item) => (
          <div key={item.id} className="sm:grid sm:grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-3 p-2 text-base rounded flex flex-col border-b">
          {/* Image & Title */}
          <div className="gap-4 items-center hidden sm:flex">
            <img src={item.thumbnail} alt={item.title} className="w-[100px] h-28 object-contain" loading="lazy"/>
            <p className="text-sm font-semibold">{item.title}</p>
          </div>

          {/* Price */}
          <span className="hidden sm:flex items-center font-semibold">${item.price}</span>

           {/* quantity */}
          <div className="hidden sm:flex sm:items-center max-sm:justify-end">
            <div className="w-[100px] sm:w-full md:w-1/2 flex justify-between  rounded-2xl ">
              <button 
                className="outline-0 bg-accent text-[var(--color-text-white)] p-2 rounded-2xl sm:text-2xl w-[10px] lg:w-[30px] cursor-pointer flex items-center justify-center" 
                onClick={()=> dispatch(updateQuantity({...item , quantity: item.quantity+1 }))}
              >
                + 
              </button>
              <span className="flex items-center font-semibold p-2">{item.quantity}</span>
              <button 
                className="outline-0  p-2 rounded-2xl bg-accent text-[var(--color-text-white)]  text-base sm:text-2xl w-[10px] lg:w-[30px] cursor-pointer flex items-center justify-center" 
                onClick={()=> item.quantity > 1 ? dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 })): dispatch(removeFromCart(item.id)) }
              > 
                - 
              </button>
            </div>
          </div>

          {/* Total */}
          <span className="hidden sm:flex items-center font-semibold">
            ${(item.price * item.quantity).toFixed(2)}
          </span>

          {/* Remove Button */}
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500 font-bold hover:underline hidden sm:flex items-center ml-5 cursor-pointer"
          >
            Remove
          </button>

          {/* for below sm */}
        <div className="sm:hidden flex gap-2 flex-col">
          <div className="flex">
            {/* image */}
            <img src={item.thumbnail} alt={item.title} className="w-[100px] h-[150px] object-contain" />
            {/* title , price , Total */}
            <div className="flex flex-col">
              <p className="font-semibold mt-2 w-full ml-2">{item.title}</p>
              <span className="mt-2 ml-2" ><span className="font-bold">Price: </span>{`$${item.price}`}</span>
              <span className="mt-2 ml-2"><span className="font-bold">Total: </span>{`$${(item.price * item.quantity).toFixed(2)}`}</span>
            </div>
          </div>
          <div className="flex justify-between">
            {/* quantity */}
            <div className="flex items-center ">
              <div className="w-[100px] sm:w-full md:w-1/2 flex justify-between bg-bague rounded-2xl ">
                <button className="outline-0 bg-accent p-2 text-[var(--color-text-white)] rounded-2xl sm:text-2xl w-[10px] sm:w-[30px] cursor-pointer flex items-center justify-center" onClick={()=> dispatch(updateQuantity({...item , quantity: item.quantity+1 }))}>+</button>
                <span className="flex items-center font-semibold">{item.quantity}</span>
                <button className="outline-0 bg-accent text-[var(--color-text-white)]  p-2 rounded-2xl text-base sm:text-2xl w-[10px] sm:w-[30px] cursor-pointer flex items-center justify-center" onClick={()=> item.quantity > 1 ? dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 })): dispatch(removeFromCart(item.id)) }>-</button>
              </div>
            </div>

             {/* remove item */}
              <span className="flex items-center ml-5 text-red-500 font-bold hover:underline">
                <button className='cursor-pointer' onClick={()=> dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </span>
          </div>
        </div>
        </div>
        ))
      }
    </div>
  );
}
