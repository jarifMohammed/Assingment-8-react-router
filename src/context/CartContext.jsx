import { createContext, useState, useContext } from "react";

// Create a context for the cart
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to wrap the app and provide cart state to the components
export const CartProvider = ({ children }) => {
  // State to manage cart items and wishlist items
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    if (!cartItems.find((item) => item.product_id === product.product_id)) {
      setCartItems([...cartItems, product]);
    }
  };

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    if (!wishlistItems.find((item) => item.product_id === product.product_id)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.product_id !== productId));
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems(
      wishlistItems.filter((item) => item.product_id !== productId)
    );
  };

  // Provide the state and functions to the components via context
  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
