import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <div className="product-content">
        <h3 className="product-title">
          {product.title}
        </h3>

        <p className="product-category">
          {product.category}
        </p>

        <h2 className="product-price">
          ${product.price}
        </h2>

        <div className="card-buttons">
          <Link
            to={`/product/${product.id}`}
            className="details-btn"
          >
            View Details
          </Link>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart(product)
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;