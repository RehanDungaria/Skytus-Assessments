import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (products.length === 0) {
    return <div className="empty-state">No products found</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;