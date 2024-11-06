import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../src/context/CartContext"; // Use CartContext
import { toast } from "react-toastify"; // For toast notification

function ProductDetails() {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    // Fetch the product data based on the productId from the URL
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.product_id === productId);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`text-${i <= rating ? "yellow" : "gray"}-500`}
        />
      );
    }
    return stars;
  };

  // Play sound on button click
  const playSound = (audioFile) => {
    if (!audioPlayed) {
      const audio = new Audio(`/audio/${audioFile}`);
      audio
        .play()
        .then(() => {
          setAudioPlayed(true);
        })
        .catch((error) => {
          console.error("Error playing sound:", error);
        });

      audio.onended = () => setAudioPlayed(false);
    }
  };

  const handleAddToCart = (product) => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTime;

    if (timeDiff < 4000) {
      // Prevent double-clicking within 5 seconds
      playSound("audio-2.mp3");
      toast.error("You double-clicked the same product!", { autoClose: 2000 });
    } else {
      addToCart(product);
      playSound("happy-logo-167474.mp3");
      toast.success("Product added to Cart", { autoClose: 3000 });
    }

    setLastClickTime(currentTime);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success("Product added to Wishlist", { autoClose: 3000 });
  };

  return (
    <div>
      {/* Product details content */}
      <div className="bg-myColor pt-10 m-5 h-[463px] font-bold text-center text-white text-3xl">
        Product Details
        <p className="text-white pt-5 text-sm">
          Explore the latest gadgets that will take your experience to the next level.
          <br /> From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className=" -translate-y-1/3 max-w-4xl mx-auto mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{product.product_title}</h2>
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-full h-[400px] object-cover rounded-lg mb-4"
          />
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <h3 className="text-2xl font-semibold mb-2">Specifications</h3>
          <ul className="list-disc pl-5">
            {product.Specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <p className="mt-4">
            <strong>Availability:</strong>{" "}
            {product.availability ? "In Stock" : "Out of Stock"}
          </p>
          <p className="mt-4 flex items-center">
            <strong>Rating:</strong>
            <span className="ml-2 flex">{renderStars(product.rating)}</span>
            <span className="ml-2">{product.rating} / 5</span>
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => handleAddToCart(product)}
              className="flex items-center bg-gray text-myColor p-3 rounded-md shadow-md hover:bg-blue-300"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Add to Cart
            </button>
            <button
              onClick={() => handleAddToWishlist(product)}
              className="flex items-center bg-white text-myColor p-3 rounded-md shadow-md hover:bg-red-200"
            >
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
