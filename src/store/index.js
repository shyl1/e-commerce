import bestSeller from "./BestSeller/bestsellerslice.js";
import cart from "./cart/cartSlice.js";
import productDetailsReducer from "./productDetails/productDetailsSlice.js";
import productsReducer from "../store/categorySlice/categorySlices.js";
import wishlistReducer from "./wishlist/wishlistSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    productDetails: productDetailsReducer,
    products: productsReducer,
    cart,
    bestSeller,
  },
});