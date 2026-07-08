import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import api from "../services/api";

import Loader from "../components/Loader";

import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchProduct =
      async () => {
        try {
          const response =
            await api.get(
              `/products/${id}`
            );

          setProduct(
            response.data
          );
        } catch (err) {
          setError(
            "Product not found."
          );
        } finally {
          setLoading(false);
        }
      };

    fetchProduct();
  }, [id]);

  if (loading)
    return <Loader />;

  if (error)
    return (
      <h2
        style={{
          textAlign:
            "center",
        }}
      >
        {error}
      </h2>
    );

  return (
    <div className="details-container">
      <div className="details-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="details-image"
        />

        <div>
          <h1 className="details-title">
            {product.title}
          </h1>

          <h2 className="details-price">
            $
            {product.price}
          </h2>

          <p className="details-category">
            Category:
            {" "}
            {product.category}
          </p>

          <p className="details-description">
            {
              product.description
            }
          </p>

          <p>
            ⭐
            {
              product.rating
                ?.rate
            }
            {" "}
            (
            {
              product.rating
                ?.count
            }
            {" "}
            Reviews)
          </p>

          <br />

          <button
            className="add-cart-btn"
            onClick={() =>
              addToCart(
                product
              )
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;