import { lazy } from "react";


export const HomePage = lazy(()=> import ('@pages/Home'));


export const ShopPage = lazy(()=> import ('@pages/Shop'));


export const searchPage = lazy(()=> import ('@pages/SearchResults'));


export const cartPage = lazy(()=> import ('@pages/Cart'));


export const CheckoutPage = lazy(()=> import ('@pages/Checkout'));

export const productDetailsPage = lazy(()=> import ('@pages/ProductDetails'));

export const wishlistPage = lazy(()=> import ('@pages/WishList'));