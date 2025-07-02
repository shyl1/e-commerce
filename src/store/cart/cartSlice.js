import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  items: Array.isArray(savedCart) ? savedCart : [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart" ,
  initialState ,
  reducers: {
    addToCart: (state , action)=> {
      const incomingProduct = {
        ...action.payload,
        price: Number(action.payload.price), 
      };

      const existing = state.items.find((item) => item.id === incomingProduct.id);

      if(existing){
        existing.quantity += 1;
        existing.total = Number((existing.price * existing.quantity).toFixed(2));
      } else {
        state.items.push({
          ...incomingProduct,
          quantity: 1,
          total: Number(incomingProduct.price.toFixed(2)), 
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state , action)=> {
      state.items = state.items.filter((item)=> item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQuantity: (state , action)=> {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
        item.total = Number((item.price * quantity).toFixed(2));
        if (quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    localStorage.setItem("cart", JSON.stringify(state.items));
  },

    clearCart: (state)=> {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify([])); 
    },
  },
});

export const {addToCart , removeFromCart , updateQuantity , clearCart} = cartSlice.actions;
export default cartSlice.reducer;