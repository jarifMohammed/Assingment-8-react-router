// src/components/Navbar.js
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../src/context/CartContext";

const Navbar = () => {
  const { cartItems, wishlistItems } = useCart(); // Access CartContext

  const location = useLocation();
  // List of routes where you want to hide the banner
  const hideBannerRoutes = [
    "/product",
    "/dashboard",
    "/wishlist",
    "/cart",
    "/discount",
    "/statistics",
  ];

  const isProductDetailsPage = location.pathname.includes("/product/");

  // Check if the current route is in the hideBanner array or it's a product details page
  const isHideBannerPage =
    hideBannerRoutes.includes(location.pathname) || isProductDetailsPage;
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl ml-20 p-10 font-bold">Gadget Haven</h1>
        <div className="flex-grow flex justify-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg ${isActive ? "font-bold text-purple-500" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-lg ${isActive ? "font-bold text-purple-500" : ""}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              `text-lg ${isActive ? "font-bold text-purple-500" : ""}`
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/discount"
            className={({ isActive }) =>
              `text-lg ${isActive ? "font-bold text-purple-500" : ""}`
            }
          >
            Discount
          </NavLink>
        </div>
        <div className="space-x-4 flex items-center mr-20">
          <NavLink to="/wishlist" className="relative">
            <FontAwesomeIcon icon={faHeart} size="2x" />
            {wishlistItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                {wishlistItems.length}
              </span>
            )}
          </NavLink>
          <NavLink to="/cart" className="relative">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Conditionally render this section based on whether it's the product details page */}
      {!isHideBannerPage && (
        <div className="justify-items-center w-[1800px] bg-myColor b-[8px] h-[800px] -mt-20 p-20 mx-auto m-11 rounded-2xl">
          <h1 className="text-center text-5xl font-bold text-white">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-center m-20 text-xl font-bold text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices
            <br /> to the coolest accessories, we have it all!
          </p>
          <button className="font-bold text-myColor text-2xl b-5 bg-white rounded-3xl p-4">
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
