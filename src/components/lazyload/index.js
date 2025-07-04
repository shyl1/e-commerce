import { lazy } from "react";


export const Home = lazy(()=> import ('@pages/Home'));


export const Shop = lazy(()=> import ('@pages/Shop'));


export const  SearchResults = lazy(()=> import ('@pages/SearchResults'));


export const Cart = lazy(()=> import ('@pages/Cart'));


export const Checkout= lazy(()=> import ('@pages/Checkout'));

export const ProductDetails = lazy(()=> import ('@pages/ProductDetails'));

export const WishList = lazy(()=> import ('@pages/WishList'));