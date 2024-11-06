import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { product_id, product_title, product_image, price } = product;

  return (
    <div className="border p-4 rounded-xl shadow-lg bg-white">
      <img
        src={product_image} // Use the correct product image
        alt={product_title} // Use meaningful alt text for accessibility
        className="w-full h-64 object-cover rounded-md mb-4" // Adjust image size
      />
      <h2 className="text-xl font-bold text-gray-800">{product_title}</h2>
      <p className="text-xl font-semibold text-gray-600">${price}</p>
      <Link
        to={`/product/${product_id}`} // Link to the individual product details page
        className="btn btn-primary mt-4 block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
