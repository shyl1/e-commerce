import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import Checkout from "@/components/checkout/Checkout";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import MainLayout from "@/UI/MainLayout";
import CategoryLayout from "@/UI/CategoryLayout";
import Shop from "@/pages/Shop";
import WishList from "@/pages/WishList";
import SearchResults from "@/pages/SearchResults";



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error/>, 
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
        path: 'Blog',
        element: <Blog />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'category/:category',
        element: <CategoryLayout />,
        children: [
          {
            index:true,
            element: <Shop />,
          },
        ],
      },
      {
        path: 'wishlist',
        element: <WishList />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
]);


export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}