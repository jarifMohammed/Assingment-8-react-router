import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"; // A component to display individual products
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product data from a JSON file or API
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data.slice(0, 6)); // Initially show the first 6 products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        navigate("/error"); // Navigate to an error page if fetching fails
      });
  }, [navigate]);

  const handleCategoryClick = (category) => {
    if (category === "All Products") {
      // Show all products
      setDisplayedProducts(products);
    } else {
      // Filter products by category
      const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setDisplayedProducts(filteredProducts);
    }

    // Redirect to an error page if category is empty or invalid
    if (!category || category.length === 0) {
      navigate("/error");
    }
  };

  return (
    <>
      <div className="mb-20 flex justify-center">
        <h1 className="font-bold text-6xl">Explore Cutting-Edge Gadgets</h1>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-[24px] justify-center">
        <div className="w-[240px] h-[556px] rounded-xl bg-white space-y-4 mb-4 flex flex-col">
          <button
            className="p-5 font-bold text-xl hover:bg-purple-600 bg-slate-400 rounded-xl"
            onClick={() => handleCategoryClick("All Products")}
          >
            All
          </button>
          <button
            className="p-4 font-bold text-xl hover:bg-purple-600 bg-slate-400 rounded-xl"
            onClick={() => handleCategoryClick("Mobile Phones")}
          >
            Mobile
          </button>
          <button
            className="p-4 font-bold text-xl hover:bg-purple-600 bg-slate-400 rounded-xl"
            onClick={() => handleCategoryClick("Computers")}
          >
            Computers
          </button>
          <button
            className="p-4 font-bold text-xl hover:bg-purple-600 bg-slate-400 rounded-xl"
            onClick={() => handleCategoryClick("Wearables")}
          >
            Wearables
          </button>
          <button
            className="p-4 font-bold text-xl hover:bg-purple-600 bg-slate-400 rounded-xl"
            onClick={() => handleCategoryClick("Drones")}
          >
            Drones
          </button>
          <button
            className="p-4 font-bold text-xl hover:bg-purple-600 bg-slate-400 rounded-xl"
            onClick={() => handleCategoryClick("Cars")}
          >
            Cars
          </button>
        </div>

        {/* Display filtered products */}
        <div className="w-2/3 h-auto rounded-xl bg-white mb-5 flex flex-col grid grid-cols-3 gap-4">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
