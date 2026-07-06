import React from "react";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className={`stock-badge ${product.inStock ? "in-stock" : "out-stock"}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-brand">{product.brand}</p>

        <div className="product-meta">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <span>⭐ {product.rating}</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;