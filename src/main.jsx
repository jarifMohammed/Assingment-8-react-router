import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App"; // Import the App component
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Wishlist from "./pages/Wishlist";
import Statistics from "./pages/Statistics";
import Discount from "./pages/Discount";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: "<Error />",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/discount",
        element: <Discount />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      {" "}
      
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
