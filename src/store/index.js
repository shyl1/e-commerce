// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../store/wishlist/wishlistSlice.js";
import productDetailsReducer from "../store/productDetails/productDetailsSlice.js";
import productsReducer from "../store/categorySlice/categorySlices.js";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    productDetails: productDetailsReducer,
    products: productsReducer,
  },
});


export default store;