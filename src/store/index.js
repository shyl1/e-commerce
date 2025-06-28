import productDetailsReducer from "../redux/productDetailsSlice.js";
import wishlistReducer from "../redux/wishlistSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    productDetails: productDetailsReducer,
  },
})