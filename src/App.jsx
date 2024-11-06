import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bannerimg from "./components/Bannerimg";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const isDetailsPage = location.pathname.includes("product");
  useEffect(() => {
    let pageTitle = "Gadget Haven"; // Default title

    // Change title based on route
    if (location.pathname === "/dashboard") {
      pageTitle = "Dashboard";
    } else if (location.pathname === "/discount") {
      pageTitle = "Discount";
    } else if (location.pathname === "/wishlist") {
      pageTitle = "Wishlist";
    } else if (location.pathname === "/") {
      pageTitle = "Home";
    }

    // Set the document title
    document.title = pageTitle;
  }, [location]);

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" hideProgressBar={false} />

      <Bannerimg />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
