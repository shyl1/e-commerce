import "react-toastify/dist/ReactToastify.css";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import MainLayout from "@/UI/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserContextProvider from "@/Context/AuthContext";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import { Suspense } from "react";
import SkeletonLoader from "@/components/skeletonLoading/SkeletonLoader";


import {
  Home,
  Shop,
  SearchResults,
  Cart,
  Checkout,
  ProductDetails,
  WishList,
} from "@components/lazyload/index";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />, 
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      }, 
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'wishlist',
        element: <WishList />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: 'cart',
        element: <Cart />
      },
    ],
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />,
  }, 
]);

export default function AppRouter() {
  return (
    <UserContextProvider>
      <Suspense fallback={<SkeletonLoader />}>
      <RouterProvider router={router} />
      </Suspense>
      <ToastContainer position="top-right" autoClose={2000} />
    </UserContextProvider>
  );
}
