import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Dashboard = () => {
  const { cartItems: initialCartItems, wishlistItems } = useCart();
  const [view, setView] = useState("cart");
  const [sortedCartItems, setSortedCartItems] = useState([...initialCartItems]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Calculate total price of items in the cart
  const totalPrice = sortedCartItems.reduce((sum, item) => sum + item.price, 0);

  // Sort cart items by price (descending order) when button is clicked
  const sortCartByPrice = () => {
    const sortedItems = [...sortedCartItems].sort((a, b) => b.price - a.price);
    setSortedCartItems(sortedItems);
  };

  // Handle purchase action
  const handlePurchase = () => {
    if (sortedCartItems.length > 0) {
      setShowModal(true);
    } else {
      alert("No items in the cart to purchase.");
    }
  };

  // Close modal and navigate to home page
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="p-6">
      <div className="bg-myColor w-auto h-auto">
        <h1 className="font-bold p-10 text-white text-4xl text-center">
          Dashboard
        </h1>
        <p className="font-bold p-10 text-white text-xl text-center">
          Explore the latest gadgets that will take your experience to the next
          level.
          <br /> From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setView("cart")}
            className={`block m-5 p-2 w-[200px] h-[60px] rounded-box ${
              view === "cart"
                ? "bg-slate-300 hover:bg-white font-extrabold text-myColor"
                : "bg-gray-200"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setView("wishlist")}
            className={`block m-5 p-2 w-[200px] h-[60px] rounded-box ${
              view === "wishlist"
                ? "bg-slate-200 text-myColor font-extrabold"
                : "bg-gray-200"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="flex gap-5 justify-end">
        <p className="font-extrabold text-2xl m-5">
          Total Price: ${totalPrice.toFixed(2)}
        </p>
        <button
          onClick={sortCartByPrice}
          className="font-bold bg-slate-300 w-[200px] h-[60px] rounded-box"
        >
          Sort By Price
        </button>
        <button
          onClick={handlePurchase}
          className="font-bold bg-slate-300 hover:bg-myColor text-white w-[200px] h-[60px] rounded-box"
        >
          Purchase
        </button>
      </div>

      {view === "cart" && (
        <div>
          <h2 className="text-3xl font-bold mb-4">Cart Items</h2>
          {sortedCartItems.length > 0 ? (
            <ul>
              {sortedCartItems.map((item, index) => (
                <div key={index} className="justify-items-center p-4">
                  <div className="border-b bg-slate-100 flex w-[1280px] h-[188px] p-[32px] gap-10 rounded-[16px]">
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-[200px] h-[124px] bg-slate-300 rounded-[12px]"
                    />
                    <div className="text-xl">
                      <h3 className="font-semibold">{item.product_title}</h3>
                      <p className="text-neutral-400">{item.description}</p>
                      <p>Price: ${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      )}

      {view === "wishlist" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Wishlist Items</h2>
          {wishlistItems.length > 0 ? (
            <ul>
              {wishlistItems.map((item, index) => (
                <div key={index} className="justify-items-center p-4">
                  <div className="border-b bg-slate-100 flex w-[1280px] h-[188px] p-[32px] gap-10 rounded-[16px]">
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-[200px] h-[124px] bg-slate-300 rounded-[12px]"
                    />
                    <div className="text-xl">
                      <h3 className="font-semibold">{item.product_title}</h3>
                      <p className="text-neutral-400">{item.description}</p>
                      <p>Price: ${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p>No items in the wishlist.</p>
          )}
        </div>
      )}

      {/* Modal for purchase confirmation */}
      {showModal && (
        <div className="fixed backdrop-blur inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white justify-items-center p-8 rounded-xl shadow-lg">
            <img className="" src="https://i.ibb.co.com/P9xk68Y/Group.png"  alt="" />
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="mb-4">Purchase completed successfully.</p>
            <button
              onClick={handleCloseModal}
              className="bg-myColor text-white px-4 py-2 rounded hover:bg-slate-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
