import bestSeller from "./BestSeller/bestsellerslice.js";
import cart from "./cart/cartSlice.js";
import homeproducts from "./HomeCategoryProducts/homecategoryslice.js"
import productDetailsReducer from "./productDetails/productDetailsSlice.js";
import wishlistReducer from "./wishlist/wishlistSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    productDetails: productDetailsReducer,
    cart,
    bestSeller,
    homeproducts,
  },
});