import "react-toastify/dist/ReactToastify.css";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import Cart from "@/pages/Cart";
import Checkout from "@/components/checkout/Checkout";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import MainLayout from "@/UI/MainLayout";
import ProductDetails from "@/pages/ProductDetails";
import SearchResults from "@/pages/SearchResults";
import Shop from "@/pages/Shop";
import WishList from "@/pages/WishList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserContextProvider from "@/Context/AuthContext";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import ProtectedRoute from "@/pages/ProtectedRoute";

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
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <ProtectedRoute><Register /></ProtectedRoute>,
      }, 
      {
        path: 'about-us',
        element: <ProtectedRoute><AboutUs /></ProtectedRoute>,
      }, 
      {
        path: 'contact',
        element: <ProtectedRoute><Contact /></ProtectedRoute>,
      },
      {
        path: 'blog',
        element: <ProtectedRoute><Blog /></ProtectedRoute>,
      },
      {
        path: 'checkout',
        element: <ProtectedRoute><Checkout /></ProtectedRoute>,
      },
      {
        path: 'shop',
        element: <ProtectedRoute><Shop /></ProtectedRoute>,
      },
      {
        path: 'product/:id',
        element: <ProtectedRoute><ProductDetails /></ProtectedRoute>,
      },
      {
        path: 'wishlist',
        element: <ProtectedRoute><WishList /></ProtectedRoute>,
      },
      {
        path: "search",
        element: <ProtectedRoute><SearchResults /></ProtectedRoute>,
      },
      {
        path: 'cart',
        element: <ProtectedRoute><Cart /></ProtectedRoute>
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000} />
    </UserContextProvider>
  );
}
